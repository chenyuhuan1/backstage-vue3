const build = require('./buildConfig/build.js')
const npmBuild = require('./buildConfig/npmBuild.js')

module.exports = process.env.ENV === 'npm' ? npmBuild : build


