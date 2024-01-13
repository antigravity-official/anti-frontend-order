<script setup lang="ts">

withDefaults(
  defineProps<{
    customClass?: string,
    btnName?: string
  }>(),
  {
    customClass: '',
    btnName: '클릭'
  }
)

defineEmits([
  'click:button'
])

</script>

<template>
  <div
    :class="customClass"
    @click=" $emit('click:button')"
  >
    {{ btnName }}
  </div>
</template>
