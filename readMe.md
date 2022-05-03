1. Ecrire une fonction `n_parite(n, parite)` qui prend deux arguments n et parite, et calcule la somme de n premiers
nombres pairs si parite est vrai sinon de n premiers nombres impairs


2. Ecrire une fontion `productSign(a, b)` qui demande deux nombres à l’utilisateur et l’informe ensuite si leur produit est négatif , positif ou nul.

3. Si nous énumérons tous les nombres naturels en dessous de N qui sont des multiples de 3 ou 5,
nous obtenons 3, 5, 6 et 9. La somme de ces multiples est 23. Trouvez la somme (`multiple_3_5(N)`) de tous les multiples de 3 ou 5 en dessous de N.

4. Un jour supplémentaire est ajouté au calendrier presque tous les quatre ans comme le 29 février,
et le jour est appelé un jour bissextile. Il corrige le calendrier du fait que notre planète
met environ 365,25 jours pour orbiter autour du soleil. Une année bissextile contient un jour bissextile. Dans le calendrier grégorien, trois conditions sont utilisées pour identifier les années bissextiles :
    * L'année peut être également divisée par 4, est une année bissextile, sauf si :
    * L'année peut être divisée par 100, ce n'est PAS une année bissextile, sauf si :
    * L'année est également divisible par 400. C'est alors une année bissextile.

    Cela signifie que dans le calendrier grégorien, les années 2000 et 2400 sont des années bissextiles,
tandis que 1800, 1900, 2100, 2200, 2300 et 2500 ne sont PAS des années bissextiles. La source

    Étant donné une année, ecrire une fonction `leapYear(year)` qui détermine si c'est une année bissextile. Si c'est une année bissextile, retourner
le booléen True, sinon renvoie False.