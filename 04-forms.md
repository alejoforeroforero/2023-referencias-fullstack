    const form = tag('form', div);
    form.addEventListener('submit', (event)=>{
        event.preventDefault();

        const usuario = form.elements['usuario'].value;

        console.log(usuario);
    })

    const input = tag('input', form);
    input.name = 'usuario';
    input.type = 'text';

    const button = tag('button', form);
    button.innerHTML = 'Enviar';    