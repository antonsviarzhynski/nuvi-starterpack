<script setup lang="ts">
import { appName } from '~/constants/app'

useHead({
  title: appName,
})

const head = useLocaleHead({
  addDirAttribute: true, // Adds dir
  addSeoAttributes: true, // Adds lang
})
const htmlAttrs = computed(() => head.value.htmlAttrs!)
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
      <Body>
        <NuxtPage />
      </Body>
    </Html>
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
