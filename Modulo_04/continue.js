//La declaración continue se utiliza dentro de los Bucles For. Nos permite omitir alguna de las iteraciones si se cumple una condición específica.

i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i == 3)
      continue;
   n += i;
}