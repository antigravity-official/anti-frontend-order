<script setup lang="ts">

withDefaults(
  defineProps<{
    customClass?: string,
    labelClass?: string,
    label?: string
  }>(),
  {
    customClass: '',
    labelClass: '',
    label: ''
  }
)

</script>

<template>
  <div :class="customClass">
    <ALabel
      :label-class="labelClass"
      :text="label"
    />
    <slot name="content" />
  </div>
</template>
