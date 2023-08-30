var numero1 = document.getElementById('n1') 
var numero2 = document.getElementById('n2') 
var operador = document.getElementById('op')
let res =  document.getElementById('resp') 
let opera = ['/','*','-','+','%','**']


let n1 = numero1.value
let n2 = numero2.value    

function calc(){
    if (n1 == '' && !n2 == ''){
    window.alert('Preencha todas as partes.')
    }
    if(opera.includes(operador.value)){
        switch (operador.value){
            case '/':
                res.innerHTML = `${numero1.value} ${operador.value} ${numero2.value} = ${numero1.value/numero2.value}`
                break
            case '*':
                res.innerHTML = `${numero1.value} ${operador.value} ${numero2.value} = ${numero1.value*numero2.value}`
                break
            case '-':
                res.innerHTML = `${numero1.value} ${operador.value} ${numero2.value} = ${numero1.value-numero2.value}`
                break
            case '+':
                res.innerHTML = `${numero1.value} ${operador.value} ${numero2.value} = ${numero1.value+numero2.value}`
                break
            case '%':
                res.innerHTML = `${numero1.value} ${operador.value} ${numero2.value} = ${numero1.value%numero2.value}`
                break
            case '**':
                res.innerHTML = `${numero1.value} ${operador.value} ${numero2.value} = ${numero1.value**numero2.value}`
                break
        }
        
    }else{
        window.alert('Operador inexistente')
        
    }
}