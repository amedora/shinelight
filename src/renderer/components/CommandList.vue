<template>
  <div>
    <a v-for="name in commands" :key="name" href="#" class="dropdown-item">
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
