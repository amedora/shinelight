<template>
  <div>
    <a
      v-for="(name, index) in commands"
      :key="name"
      href="#"
      class="dropdown-item"
      :class="{ 'is-active': index === highlightIndex }">
      {{ name }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'command-list',
  props: ['commands', 'highlightIndex']
}
</script>
