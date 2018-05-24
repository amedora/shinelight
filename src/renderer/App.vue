<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import settings from 'electron-settings'

export default {
  name: 'shinelight',
  created () {
    this.loadCommands()
  },
  computed: {
    ...mapState('CommandList', {
      commandList: 'commandList'
    })
  },
  methods: {
    ...mapActions('CommandList', {
      initCommandList: 'init'
    }),
    loadCommands () {
      const list = settings.get('command-list')
      this.initCommandList(list)
    }
  }
}
</script>

<style>
  /* CSS */
</style>
