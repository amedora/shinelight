<template>
  <div class="field has-addons">
    <p class="control">
      <a class="commandbox-icon button is-static">
        :
      </a>
    </p>
    <p class="control">
      <input class="input" type="text" placeholder="command">
    </p>
  </div>
</template>

<script>
export default {
  name: 'command-box'
}
</script>

<style scoped>
.commandbox-icon {
  -webkit-app-region: drag;
}
</style>
