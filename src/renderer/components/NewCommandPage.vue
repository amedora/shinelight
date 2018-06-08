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
        <input class="input is-small" type="text">
      </div>
    </div>
    <div class="field is-grouped is-grouped-centered">
      <p class="control">
        <a class="button is-small is-primary">
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
  props: ['filePath']
}
</script>

<style scoped>
.container {
  margin: 16px;
}
</style>
