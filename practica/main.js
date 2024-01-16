const usuario = {
    id:1,
    nombre:'Alejandro',
    edad:43,
    profesion:'Músico'
}

Object.keys(usuario).forEach(key=>{
    let text = key + ': ' + usuario[key]
    console.log(text)
})
