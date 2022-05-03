
function productSign(n, m) {
  // corps de la fonction ici
  let product = n * m

  if(product < 0){
    return -1
  }else if(product > 0){
    return 1
  }else{
    return 0
  }
}

module.exports = productSign;