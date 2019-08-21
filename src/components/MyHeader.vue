<template>
  <nav class="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <p class="navbar-item">shinelight</p>
    </div>
    <div class="navbar-menu has-background-primary is-shadowless">
      <div class="navbar-end">
        <div class="navbar-item">
          <a
            @click="putInTray"
            class="button is-inverted is-primary is-outlined is-small">_</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
  methods: {
    putInTray () {
      ipcRenderer.send('put-in-tray')
    }
  }
}
</script>

<style scoped>
.navbar {
  -webkit-app-region: drag;
  min-height: 32px;
  height: 32px;
}
.navbar .container {
  display: flex;
}
.navbar,
.navbar-menu,
.navbar-start,
.navbar-end {
  align-items: stretch;
  display: flex;
  padding: 0;
}
.navbar-menu {
  flex-grow: 1;
  flex-shrink: 0;
}
.navbar-start {
  justify-content: flex-start;
  margin-right: auto;
}
.navbar-end {
  justify-content: flex-end;
  margin-left: auto;
}
.navbar-item {
  display: flex;
  align-items: center;
  height: 30px;
}
.navbar-item .button {
  -webkit-app-region: no-drag;
  height: 20px;
  width: 20px;
}
</style>
