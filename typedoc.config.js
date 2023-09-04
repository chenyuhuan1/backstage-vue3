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

  let formComponentsPath = []
  const formFiles = fs.readdirSync(resolve('src/components/BsForm/components'))
  formComponentsPath = formFiles.filter((fileName) => {
    return fileName !== 'index.ts'
  }).map((fileName) => 'src/components/BsForm/components/' + fileName)

  console.log(mainComponentsPath, formComponentsPath)
  return [...mainComponentsPath, ...formComponentsPath]
}

module.exports = {
  entryPoints: getComponentEntries(),
  out: 'apiDocs2',
  disableSources: true,
}
