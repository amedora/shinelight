<template>
  <div id="app">
    <my-header />
    <router-view
      @command-added="saveCommands"
      @command-deleted="saveCommands" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import MyHeader from './components/MyHeader.vue'
import settings from 'electron-settings'

export default {
  name: 'shinelight',
  components: {
    MyHeader
  },
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
      const list = settings.get('command-list') || []
      this.initCommandList(list)
    },
    saveCommands () {
      const list = this.$store.state.CommandList.commandList
      settings.set('command-list', list, { prettify: true })
    }
  }
}
</script>

<style>
html::-webkit-scrollbar
{
  display: none;
}
</style>
