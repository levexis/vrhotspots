//import('jest').Config

const {matchQuestion} = require('../gpt')

//\nNL: Wat is je favoriete gerecht en waarom?
//\n[NL]: Gaat deze opgaande trend nog lang door?
//\n[nl] Wat zijn enkele krachtige argumenten voor het behoud van oude gebouwen?
//expect(models.testing.calcNextInterval(0, 0, false)).toBe(0)
// todo: {"error":"Something went wrong","message":"no regex match on gpt response: \n\n[nl] Vervolgens hadden we tevoren afgesproken om om 18.00 uur bij het restaurant te zijn. \n[en] Then we had agreed beforehand to be at the restaurant at 6:00 pm."}
describe('matchQuestion', () => {
    let expected = ['nl', 'Heeft u een kat?', 'en', 'Do you have a cat?']
    it.each([
        ["\nnl: Heeft u een kat?\nen: Do you have a cat?", expected],
        ["\n[NL]: Heeft u een kat?\n[EN]: Do you have a cat?",
            ['NL', 'Heeft u een kat?', 'EN', 'Do you have a cat?']],
        ["\n[nl] Heeft u een kat?\n[en] Do you have a cat?", expected],
        ["[NL] Wat is je favoriete kleur? [EN] What is your favorite color?",
            ["NL", "Wat is je favoriete kleur?", "EN", "What is your favorite color?"]],
        ["[NL] Wat is volgens jou de meest essentiële eigenschap van een goede leraar? [EN] What do you think is the most essential trait of a good teacher?",
            ["NL", "Wat is volgens jou de meest essentiële eigenschap van een goede leraar?",
                "EN", "What do you think is the most essential trait of a good teacher?"]],
        ["\n\n[nl] Trouwens, moet je wel een beetje opletten dat je de juiste afslag neemt.\n[en] By the way, you should pay attention to take the right exit.",
            ["nl", "Trouwens, moet je wel een beetje opletten dat je de juiste afslag neemt.",
                "en", "By the way, you should pay attention to take the right exit."
            ]],
        ["\n\n[nl] Ik ga niet naar het feest vanavond, ik heb teveel hoofdpijn.\n[en] I'm not going to the party tonight, I have too much headache.",
            ["nl", "Ik ga niet naar het feest vanavond, ik heb teveel hoofdpijn.",
                "en", "I'm not going to the party tonight, I have too much headache."]]
    ])("when the input is '%s'", (text, expected,) => {
        const question = (text.slice(-1) === "?")
        expect(matchQuestion(text, question)).toEqual(expected)
    })
})
test('matchQuestion no valid matched', () => {
    expect(matchQuestion('')).toBeFalsy()
    expect(matchQuestion('not the known format, uk: hello')).toBeFalsy()
})
