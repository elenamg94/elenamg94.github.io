alert("Bienvenido al examen final")
var nombre = prompt ("Introduzca su nombre")
alert("Bienvenido al examen "+nombre )

if (nombre[0] == "a"||nombre[0] =="e"||nombre[0] =="i"||nombre[0] =="o"||nombre[0] =="u")
{
  document.write("<p>La primera letra de tu nombre es una vocal.</p>");
  
}
  
else 
{
  document.write("<p>La primera letra de tu nombre es una consonante.</p>");
}

switch (nombre["i"])
{
  case "a": document.write("<p>La letra de tu nombre es una vocal.</p>");
    break;
   case "e": document.write("<p>La  letra de tu nombre es una vocal.</p>");
    break;
   case "i": document.write("<p>La letra de tu nombre es una vocal.</p>");
    break;
   case "o": document.write("<p>La letra de tu nombre es una vocal.</p>");
    break;
    case "u": document.write("<p>La  letra de tu nombre es una vocal.</p>");
    break;
  default: document.write ("La letra es una consonante");
     
}