const path = require('path')
const fs = require('fs')

const resolve = (dir) => {
  return path.resolve(__dirname, './' + dir)
}


function getComponentEntries() {
  let mainComponentsPath = []

  // 将src/components所有子目录中的index.tsx传入， 仅子节点，不包括孙子节点
  const files = fs.readdirSync(resolve('src/components'))
  mainComponentsPath = files.filter((fileName) => {
    return fileName !== 'CustomDynamicComponent.tsx'
  }).map((fileName) => 'src/components/' + fileName + '/index.tsx')

  // src/components/BsForm/components组件处理
  let formComponentsPath = []
  const formFiles = fs.readdirSync(resolve('src/components/BsForm/components'))
  formComponentsPath = formFiles.filter((fileName) => {
    return fileName !== 'index.ts'
  }).map((fileName) => 'src/components/BsForm/components/' + fileName)

  const extraComponents = ['src/components/BsDialog/BsFormDialog/index.tsx', 'src/components/BsDialog/BsListDialog/index.tsx']

  return [...mainComponentsPath, ...formComponentsPath, ...extraComponents]
}

module.exports = {
  entryPoints: getComponentEntries(),
  out: 'public/static/apiDocs2',
  disableSources: true,
}
