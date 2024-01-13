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
  <div class="flex justify-center items-center gap-4 px-8 h-20 border-t-2 bg-cool-700 border-emerald-700">
    <span class="text-xl font-bold">
      {{ $t('header.title', { name: '이연주' }) }}
    </span>
    <div class="flex-auto" />
    <div class="flex gap-4">
      <AButton
        v-if="!isMainRoute"
        custom-class="text-base pointer border border-emerald-700 rounded-md p-2 hover:bg-emerald-400 hover: opacity-80 transition ease-in-out delay-50"
        :btn-name="$t('button.back')"
        @click:button="navigateTo(prevRoute)"
      />
      <AButton
        custom-class="text-base pointer border border-emerald-700 rounded-md p-2 hover:bg-emerald-400 hover: opacity-80 transition ease-in-out delay-50"
        :btn-name="locale === 'ko' ? $t('text.en') : $t('text.ko')"
        @click:button="setLocale(locale === 'ko' ? 'en' : 'ko')"
      />
    </div>
    <Icon
      class="pointer"
      name="devicon:github"
      :width="32"
      :height="32"
      @click="navigateTo('https://github.com/yeonjulee1005/anti-frontend-order', { external: true})"
    />
    <Icon
      class="pointer"
      name="devicon:linkedin"
      :width="32"
      :height="32"
      @click="navigateTo('https://github.com/yeonjulee1005/anti-frontend-order', { external: true})"
    />
  </div>
</template>
