<template>
  <div id="nav">
    <router-link to="/">Translate</router-link>
    |
    <router-link to="/test">Learn</router-link>
    |
    <router-link to="/oral">Speak</router-link>
    |
    <router-link to="/spelling">Spell</router-link>
    |
    <router-link to="/writing">Write</router-link>
    |
    <router-link to="/dialogue">Play</router-link>
    |
    <router-link to="/chat">Chat</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.clickable {
  text-decoration: underline;
}

</style>
