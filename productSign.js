
function productSign(n, m) {
  // corps de la fonction ici
  let product = n * m

  if(product < 0){
    return "le produit est négatif"
  }else if(product > 0){
    return "le produit est positif"
  }else{
    return "le produit est nul"
  }
}

module.exports = productSign;