<template>
  <div class="container">
    <div class="field">
      <label class="label is-small">ファイルパス</label>
      <div class="control">
        <input class="input is-small" type="text" :value="filePath" readonly>
      </div>
    </div>
    <div class="field">
      <label class="label is-small">コマンド名</label>
      <div class="control">
        <input
          @keyup.enter="addCommand"
          v-focus
          v-model="commandName"
          class="input is-small"
          type="text">
      </div>
    </div>
    <div class="field is-grouped is-grouped-centered">
      <p class="control">
        <a @click="addCommand" class="button is-small is-primary">
          登録
        </a>
      </p>
      <p class="control">
        <router-link to="/" class="button is-small is-light">
          キャンセル
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['filePath'],
  data () {
    return {
      commandName: ''
    }
  },
  methods: {
    addCommand () {
      if (!this.commandName) {
        return
      }

      const command = {
        name: this.commandName,
        path: this.filePath
      }

      this.$store.dispatch('CommandList/addCommand', command)
      this.$emit('command-added')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.container {
  margin: 16px;
}
</style>
