# backstage-vue3

一款基于Vue3，JSON配置化UI组件库，同时兼容element-ui、ant-design-vue

# 接入指南

## 安装

npm i backstage-vue3

## 添加babel按需引入插件

```js
	module.exports = {
	...
	plugins: [
		...,
		[  // 本次增加
      			'import',
      			{  // 按需引入backstage-vue3组件
        			libraryName: 'backstage-vue3',
       				libraryDirectory: 'lib',
        			customStyleName: () => {
          				return 'backstage-vue3/lib/css/index.css'
        			},
      			},
    		],
	]
}
```

## 使用

```js
<BsForm
  v-model="form"
  class="BaseForm"
  :config="config"
/>

import { BsTable, BsForm } from 'backstage-vue3'
```

## ant-design-vue使用

如果你是使用的element-plus你可以直接忽略此步骤，如果你使用的是ant-design-vue，你需要在main.js顶部添加

```js
window.uiLanguage = 'ant'
```

# 注意事项

**按需引入会对组件传入的所有props进行类型校验，如下：**

![1693816439592](/backstage-vue3/static/image/README/1693816439592.png)

可以直接导入内置提供的接口，来保证传入的数据符合类型校验：

```js
<BsForm
  v-model="form"
  class="BaseForm"
  :config="config"
/>

import { BsTable, BsForm, formConfig } from 'backstage-vue3'

const config = ref<formConfig>({
  ...
})
```

# 示例页面

https://chenyuhuan.gitee.io/backstage-vue3/#/home
