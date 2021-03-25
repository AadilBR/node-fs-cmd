const fs = require('fs')

let stats = fs.statSync('./poem.js')
console.log(`taille du fichier : ${stats.size}`)