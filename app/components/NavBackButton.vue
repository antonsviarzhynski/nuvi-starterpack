<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <button text-sm btn m="3 t8" @click="router.back()">
    {{ $t('common.back') }}
  </button>
</template>
