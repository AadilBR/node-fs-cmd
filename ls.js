const fs = require('fs')

// verifier la cmd line
if (process.argv.length !== 3) {
  console.log(`usage : node ls.js directory`)
  process.exit(1)
}
// check if directory exists
if (!fs.existsSync(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} does not exist`)
  process.exit(1)
}
// est-ce que c'est vraiment un répertoire ?
const stats = fs.statSync(process.argv[2])
if (!stats.isDirectory()) {
  console.log(`Error: ${process.argv[2]} is not a Directory`)
  process.exit(1)
}

// lire le répertoire
let dirTab = fs.readSync(process.argv[2], 'utf-8')

dirTab.forEach(
  (elem) => {
    console.log(elem)
  })