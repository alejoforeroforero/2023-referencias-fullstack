begin();

function begin(){
    document.write("This is \
    a program,\
    parace que si funciona\
    en este caso podría funcionar si hubiese una\
    chorrera de texto");

    var x=1, y=2,
    z=
    x+y;
}


function addNode () { 
    var textNode = document.createTextNode(" This is a new text node");  
    document.getElementById("firstP").appendChild(textNode); 
} 

window.addEventListener('click', ()=>{
    addNode();
    console.log('hice un cambio')
})