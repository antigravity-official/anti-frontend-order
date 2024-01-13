<template>
  <div>
    <NuxtLayout>
      <div class="mt-4">
        <NuxtLoadingIndicator
          :height="5"
          color="repeating-linear-gradient(to right,#00DC81 0%,#21362C 100%)"
        />
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>
