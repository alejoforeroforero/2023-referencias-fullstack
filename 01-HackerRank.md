1. Complete the function solveMeFirst to compute the sum of two integers.

        function solveMeFirst(a, b) {
        // Hint: Type return a+b below 
        return(a+b); 
        }


        function main() {
            var a = parseInt(readLine());
            var b = parseInt(readLine());;

            var res = solveMeFirst(a, b);
            console.log(res);
        }

        
2. Given an array of integers, find the sum of its elements. For example, if the array 6 1 2 3 4 10 11 so return 31

        function simpleArraySum(ar) {
            // Write your code here
        
            let suma = 0;            
            ar.map(numero => suma += numero)            
            return suma;
        }

        function main() {
            const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

            const arCount = parseInt(readLine().trim(), 10);

            const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));
            
            const result = simpleArraySum(ar);

            ws.write(result + '\n');

            ws.end();
        }

3. Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

    The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

    The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

    If a[i] > b[i], then Alice is awarded 1 point.
    If a[i] < b[i], then Bob is awarded 1 point.
    If a[i] = b[i], then neither person receives a point.
    Comparison points is the total points a person earned.

    Given a and b, determine their respective comparison points.

        function compareTriplets(a, b) {
    
            let puntosA = 0;
            let puntosB = 0;
            
            for(const [index, valueA] of a.entries()){
                
                const valueB = b[index];
                
                if(valueA > valueB){
                    puntosA++;
                }else if(valueA < valueB){
                    puntosB++;
                }
            }

            
            let result = [puntosA, puntosB]; 
            
            console.log(result)
            
            return result;
        }

        function main() {
            const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

            const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

            const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

            const result = compareTriplets(a, b);

            ws.write(result.join(' ') + '\n');

            ws.end();
        }


4. In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

*Ojo en javascript hay que poner la variable en let y asignarle un valor para que el tipo sea de números, de lo contrario sale NaN

        function aVeryBigSum(ar) {
            // Write your code here    
            let result = 0;    
            ar.map(numero => result += numero);    
            return result;
        }

        function main() {
            const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

            const arCount = parseInt(readLine().trim(), 10);

            const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));
            
            const result = aVeryBigSum(ar);

            ws.write(result + '\n');

            ws.end();
        }


5. Calcular la diferencia en las diagonales de una matrix.

        const array = [ 
            [1, 2, 3 ,12], 
            [1, 8, 3, 3],
            [1, 2, 9, -3],
            [1, 2, 9, 5],        
        ]

Respuesta:

    function calcularDierencia(arr){
        
        let index = 0;
        let index2 = arr.length -1;
        let n1 = 0;
        let n2 = 0;

        for(let i=0; i<arr.length; i++){

            let fila = arr[i];

            for(let j=0; j<fila.length; j++){

                if(j === index){
                    n1 += fila[j];
                }

                if(j=== index2){
                    n2 += fila[j];
                }
            }
            index2--
            index++;
        }

        let difference = n1 - n2;

        if(difference <0){
            difference = difference*-1;
        }

        let d2 = Math.abs(n1 - n2);

        console.log(d2);
    }

6. Plus minus

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Respueta:

        const radios = [2, 3, 0, -3, -1]

        function raidosEnLista(lista){

            let pos = 0;
            let neg = 0;
            let zero = 0;

            let radios = []

            lista.forEach(numero=>{
                if(numero>0){
                pos++
                }else if(numero<0){
                neg++
                }else{
                zero++
                }
            })

            const posR = pos/lista.length;
            const negR = neg/lista.length;
            const zerR = zero/lista.length;

            console.log(posR.toFixed(6)) 
            console.log(negR.toFixed(6)) 
            console.log(zerR.toFixed(6))
        }