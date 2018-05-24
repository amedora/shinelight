<template>
  <div>
    <a v-for="(key, name) in commands" :key="key" href="#" class="dropdown-item">
      {{ name }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'command-list',
  props: ['commands']
}
</script>
