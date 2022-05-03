function multiple_3_5(n) {
  // corps de la fonction ici

  let somme = 0

  for(let i = 0; i < n; i++){
    if(i % 3 == 0 || i % 5 == 0){
      //le reste de la division entre i et 5 ou 3 donne 0
      somme += i

    }
  }

  return somme

}

console.log(multiple_3_5(15))

// module.exports = multiple_3_5;