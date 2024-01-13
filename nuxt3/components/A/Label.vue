<script setup lang="ts">

withDefaults(
  defineProps<{
    labelClass?: string,
    text?: string
  }>(),
  {
    labelClass: '',
    text: ''
  }
)

</script>

<template>
  <div :class="labelClass">
    {{ text }}
  </div>
</template>
