/* // CommonJs, every file is a module (by default)
// Modules = Encapsulated Code (only share minimum) 
const names = require('./names')
const sayHi = require('./utils')

sayHi(names.Adam)*/

const os = require('os')
const path = require('path/posix')
const user = os.userInfo()
console.log(user)

console.log(`The System Uptime is ${os.uptime()/60/60/24} days.`) // return in seconds


  