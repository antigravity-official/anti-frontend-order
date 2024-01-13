<script setup lang="ts">

const route = useRoute()
const { locale, setLocale } = useI18n()

const isMainRoute = computed(() => { return route.path === '/' })
const prevRoute = ref('')

watch(() => route.path, (curr, prev) => {
  curr === '/shipping' ? prevRoute.value = '/' : prevRoute.value = prev
})

</script>

<template>
  <div class="flex justify-center items-center px-4 h-20 border border-orange-950">
    <span class="text-2xl font-bold">
      {{ $t('header.title') }}
    </span>
    <div class="flex-auto" />
    <div class="flex gap-4">
      <AButton
        v-if="!isMainRoute"
        custom-class="text-xl pointer"
        :btn-name="$t('button.back')"
        @click:button="navigateTo(prevRoute)"
      />
      <AButton
        custom-class="text-xl pointer"
        :btn-name="locale === 'ko' ? $t('text.en') : $t('text.ko')"
        @click:button="setLocale(locale === 'ko' ? 'en' : 'ko')"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
