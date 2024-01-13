<template>
  <div class="flex justify-center items-center mx-4 h-12 border border-orange-950">
    <span>
      {{ $t('header.title') }}
    </span>
    <div class="flex-auto" />
    <div class="flex gap-4">
      <AButton
        v-if="!isMainRoute"
        :btn-name="$t('button.back')"
        @click:button="navigateTo(prevRoute)"
      />
      <AButton
        :btn-name="locale === 'ko' ? $t('text.en') : $t('text.ko')"
        @click:button="setLocale(locale === 'ko' ? 'en' : 'ko')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

const route = useRoute()
const { locale, setLocale } = useI18n()

const isMainRoute = computed(() => { return route.path === '/' })
const prevRoute = ref('')

watch(() => route.path, (_curr, prev) => {
  prevRoute.value = prev
})


</script>

<style scoped>

</style>
