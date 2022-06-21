function carregar(){
    var data = new Date();
    hora = data.getHours();
    minutos = data.getMinutes();
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')
    msg.innerHTML = `são ${hora} horas e ${minutos} minutos`
    //mudar imagem
    if(hora >= 0 && hora <= 12){
        img.src = "imagens/manha.jpg"    
        document.body.style.background = '#e2cd9f'    
    }else if(hora > 12 && hora < 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
}
