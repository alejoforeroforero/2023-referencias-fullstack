- Map an array and find the Max value with MathObj:

        const gastos=[
            {
                nombre:'carne',
                valor:14500
            },
            {
                nombre:'leche',
                valor:2000
            },
            {
                nombre:'Miel',
                valor:6000
            }
        ]

        function empezar(){

           const valores = gastos.map(gasto => gasto.valor);

           const valorMaximo = Math.max(...valores);

           console.log(valorMaximo);
        }
