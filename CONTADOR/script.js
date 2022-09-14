function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        //alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando: <br>' // Quebra de linha
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p == 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){ // Contagem crescente
            for(let contador = i; contador <= f; contador += p){
                res.innerHTML += `${contador} \u{1F449}`
            }
        }else{ // Contagem regressiva
            for(let contador = i; contador >= f; contador -= p){
                res.innerHTML += `${contador} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
}