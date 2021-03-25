const fs = require('fs')


const readFile = (fichier) => {
  if (fichier) {
    const txt = fs.readFileSync(fichier, 'utf-8')
    console.log(txt)
  }
  else {
    console.log('Error 404')
  }
}

const writeFile = (fichier, txt) => {
  if (fichier) {
    fs.writeFileSync(fichier, txt)
  } else {
    console.log('error 404')
  }

}

switch (process.argv[2]) {
  case 'lire':
    readFile(process.argv[3])
  case 'écrire':
    writeFile(process.argv[3], process.argv[4])
}