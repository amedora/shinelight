<template>
  <div
    class="modal"
    :class="{ 'is-active': show }">
    <div class="modal-background" />
    <div class="modal-content box ">
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <p>{{ command.name }} を削除しますか？</p>
          </div>
        </div>
        <div class="level-right">
          <p class="level-item">
            <a class="button is-small is-danger is-outlined">はい</a>
          </p>
          <p class="level-item">
            <a
              class="button is-small is-outlined"
              @click="close">いいえ</a>
          </p>
        </div>
      </nav>
    </div>
    <button
      class="modal-close is-large"
      @click="close"></button>
  </div>
</template>

<script>
export default {
  name: 'modal-delete-command',
  props: ['show', 'command'],
  methods: {
    close () {
      this.show = false
    }
  }
}
</script>

<style>

</style>
