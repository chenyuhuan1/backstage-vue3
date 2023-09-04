import  router  from '@/router/index'
export const goApi = (url: string) => {
  const newpage = router.resolve({
    path: '/api',
    query: {
      url,
    },
  })
  window.open(newpage.href)
}