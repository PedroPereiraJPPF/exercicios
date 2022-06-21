function contar() {
    inicio = document.getElementById('inicio')
    fim = document.getElementById('fim')
    passo = document.getElementById('passo');
    result = document.getElementById('resultado')
    if (inicio.value.length == 0 || fim.value.length == 0) {
        result.innerText = 'dados faltando....'
    } else {
        if (passo.value == 0) {
            alert(`passo considerado como 1`)
            passo = 1
        } else {
            passo = Number(passo.value)
        }
        result.innerText = 'contando: '
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        if (fim > inicio) {
            for (i = inicio; i <= fim; i += passo) {
                result.innerText += ` -> ${i} `
            }
        } else {
            for (i = inicio; i >= fim; i -= passo) {
                result.innerText += ` -> ${i} `
            }
        }
    }

}