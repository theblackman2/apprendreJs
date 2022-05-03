function nParite(n, parite) {
  // corps de la fonction ici
  let somme = 0
  let count = 1
  if(parite == true){
    let i = 0
    while(count <= n){
      somme += i
      i += 2
      count++
    }
  }else{
    let i = 1
    while(count <= n){
      somme += i
      i += 2
      count++
    }
  }

  return somme
}

module.exports = nParite;