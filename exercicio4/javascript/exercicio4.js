function gerar(){
    numero = document.getElementById('numero')
    if(numero.value.length == 0){
        alert('insira algum valor')
    }else{
        numero = Number(numero.value)
        tabuada = document.getElementById('select')
        tabuada.innerHTML = ''
        for(i = 1; i<=10; i++){
            multi = numero*i
            let item = document.createElement('option')
            item.text = `${numero}x${i} = ${multi}`
            tabuada.appendChild(item)
        }
    }
}