<script setup lang="ts">

withDefaults(
  defineProps<{
    customClass?: string,
    labelClass?: string,
    label?: string,
    text?: string | number,
    disableSlot?: boolean
  }>(),
  {
    customClass: '',
    labelClass: '',
    label: '',
    text: '',
    disableSlot: true
  }
)

</script>

<template>
  <div :class="customClass">
    <ALabel
      :label-class="labelClass"
      :text="label"
    />
    <span v-if="disableSlot">
      {{ text }}
    </span>
    <slot
      v-else
      name="content"
    />
  </div>
</template>
