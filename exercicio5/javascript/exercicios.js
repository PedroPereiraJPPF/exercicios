array = []
result = document.getElementById('resultado')
function adicionar(){
    result.innerHTML = ''
    num = document.getElementById('num')
    if(num.value.length == 0){
        alert('insira algo')
    }else{
        opçoes = document.getElementById('opçoes')
        numero = Number(num.value)
        array.push(numero)
        item = document.createElement('option')
        item.text = numero
        opçoes.appendChild(item)
    }
}
//console.log(array)
function mostrar(){
    if(array.length == 0){
        alert('ainda não existem valores inseridos')
    }else{
        soma = 0
        for(i = 0; i < array.length; i++){
            soma += array[i]
        }
        media = soma/array.length
        maior = Math.max.apply(null, array)
        menor = Math.min.apply(null, array)
        result.innerHTML = `temos um total de ${array.length} valores<br>`
        result.innerHTML += `o maior numero é ${maior}<br>`
        result.innerHTML += `o menor numero é ${menor}<br>`
        result.innerHTML += `a soma dos numeros é ${soma}<br>`
        result.innerHTML += `a media é é ${media.toFixed(2)}`
    }
}