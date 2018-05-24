<template>
  <div class="dropdown" :class="{ 'is-active': isShown }">
    <div class="dropdown-trigger" @click="toggle">
      <input class="input is-primary" type="text" aria-haspopup="true" aria-controls="dropdown-menu">
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a v-for="(key, name) in commands" :key="key" href="#" class="dropdown-item">
          {{ name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'command-drop-down',
  props: ['commands'],
  data () {
    return {
      isShown: false
    }
  },
  methods: {
    toggle () {
      this.isShown = !this.isShown
    }
  }
}
</script>

<style scoped>

</style>
