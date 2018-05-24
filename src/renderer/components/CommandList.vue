<template>
  <div>
    <a v-for="(name, index) in commands" :key="name" href="#" class="dropdown-item" :class="{ 'is-active': index === selectedIndex }">
      {{ name }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'command-list',
  props: ['commands'],
  data () {
    return {
      selectedIndex: 0
    }
  }
}
</script>
