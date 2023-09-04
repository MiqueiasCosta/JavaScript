var pasword = document.getElementById('txt1')
var complete_list = document.getElementById('resp')
var c_lista = document.getElementById('listando')
var body = document.getElementById('criar')

let contador = 0
let lista = []
let botao = document.createElement('button')
botao.innerHTML = 'Flinalizar'
botao.style.width = '70px'
botao.style.height = '20px'


botao.addEventListener('click', function (){
    let n_aleatorio = Math.floor(Math.random()*lista.length)
    window.alert(`O nome soretado foi (${lista[n_aleatorio]})`)
})




function btn(){
    let listar = "<li>"+pasword.value+"</li>"
    lista.push(pasword.value)
    c_lista.innerHTML += listar
    contador+=1
    if (lista.length > 1){
        body.appendChild(botao)
    }
}