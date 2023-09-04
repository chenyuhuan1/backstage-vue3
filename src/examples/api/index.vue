<template>
  <div class="api">
    <iframe
      v-if="iframeUrl"
      class="iframe"
      :src="'/backstage-vue3' + iframeUrl"
      scrolling="auto"
      frameborder="0"
    />
  </div>
</template>

<script lang="tsx" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const iframeUrl: string = (router.currentRoute.value.query?.url as string) ?? '/static/apiDocs2/index.html'

</script>

<style scoped lang="scss">
.iframe {
  width: 100%;
  height: calc(100vh - 36px);
}
</style>
