var culpable = window.prompt("¿Eres culpable?"); // si, no 

  

if(culpable=="si")
{ 

document.write("<p>Irás a la cárcel</p>"); 

}
else if(culpable=="no"){ 

document.write("<p>Irás a casa</p>"); 

}
else
{ 

document.write("<p>La documentación por favor</p>"); 

} 



var mayordeedad = window.prompt("¿Eres mayor de edad?"); // si, no 

  

if(mayordeedad=="si")
{ 

document.write("<p>Puedes conducir</p>"); 

}
else if(mayordeedad=="no"){ 

document.write("<p>No puedes conducir</p>"); 

}
else
{ 

document.write("<p>Responde otra vez</p>"); 

}   