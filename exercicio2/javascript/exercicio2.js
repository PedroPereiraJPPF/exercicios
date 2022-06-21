function gerar(){
    data = new Date()
    AnoAtual = data.getFullYear()
    nasc = document.getElementById('ano')
    nascN = Number(nasc.value) 
    if(nasc.value.length == 0 || nascN > AnoAtual){
        alert('idade invalida')
    }else{
        idade = AnoAtual-nascN
        sexo = document.getElementsByName('sexo')
        gen = ''
        if(sexo[0].checked){
            gen = 'homem'
        }else{
            gen = 'mulher'
        }
        mensagem = document.getElementById('texto')
        mensagem.style.textAlign = 'center'
        mensagem.innerHTML = `detectado ${gen} com ${idade} anos`
    }
}