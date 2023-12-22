// //common js every file is a module
// //modules-encapsulated code (only share minimum)
//   const names =require("./names")
//   //n Node.js, require() is a function used to import modules. It is the primary way to include external modules that are either built-in Node.js modules, installed through npm (Node Package Manager), or user-created modules.
//   //The require() function takes the path or name of the module as an argument and returns the module's exports, which can be functions, objects, or variables defined in the module.
//   //Example usage of require():
//   const sayhi=require('./util')
//   const alter=require('./alternate-flavour')
//   const val=require('./mind-grades')
// //   sayhi('vijaya')  /// default we have to call the modules
// //   sayhi(names.yesu)
// //   //sayhi(nam)
////os module////...................
// const os =require('os')
// console.log(`Hostname: ${os.hostname()}`)
// console.log(`Platform:${os.platform()}`)
// console.user=os.userInfo()
// console.log( `the system update is ${os.uptime()} seconds`)
// const currentos={
//     name:os.type(),
//     release: os.release(),
//     totalmem: os.totalmem(),
//     freemem:os.freemem()
// }
// console.log(currentos)
//path module..............................
const path=require('path')
console.log(path.sep)
const filepath=path.join('/conent/','subfolder','test.txt')
console.log(filepath)
const base=path.basename(filepath)
console.log(base)
