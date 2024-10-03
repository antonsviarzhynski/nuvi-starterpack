<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import usePostsAPI from '~/api/posts/usePostsAPI'

definePageMeta({
  layout: 'home',
})

const online = useOnline()
const { getPostsList } = usePostsAPI()

const { data } = useQuery({
  queryKey: ['postsList'],
  queryFn: getPostsList,
})
console.log(data)
</script>

<template>
  <div>
    <Logos mb-6 />
    <Suspense>
      <ClientOnly>
        <PageView v-if="online" />
        <div v-else text-gray:80>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </div>
</template>
