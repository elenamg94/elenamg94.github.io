var A= 10
var B= 20
document.write("<p> Que ",A, " es menor que ",B," <strong> Y </strong> que ",B ," es menor que ",A," es: ",A<B&&B<A,"</p>")

document.write("<p> Que ",A, " es menor que ",B," <strong> O </strong> que ",B ," es menor que ",A," es: ",A<B||B<A,"</p>")

document.write("<p> Que ",A, " es menor que ",B," <strong> Y </strong> que ",B," es menor que ",A," es: ",A<B&&B<A," salvo que empleemos el operador ! delante de la expresión, entonces lo negaremos y se convertirá en ",!A<B&&B<A,"</p>")