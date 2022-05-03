function leapYear(year) {
  // corps de la fonction ici

  //voir si l'année est divisible par 4
  if(year % 4 == 0){
    if(year % 100 == 0){
      if(year % 400 == 0){
        return true
      }else{
        return false
      }
    }else{
      return true
    }
  }else{
    return false
  }
}

module.exports = leapYear;