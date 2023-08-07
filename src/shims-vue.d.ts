/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string }
    export default classes
}
interface Window {
  Vue: any;
  uiLanguage: 'ele' | 'ant' | undefined
}