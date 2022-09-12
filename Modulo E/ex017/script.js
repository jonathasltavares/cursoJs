var botao = window.document.getElementById('gerarbttn')
botao.addEventListener('click' , calcular)
function calcular(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.lenght == 0 ){
        alert('ERRO! Verifique os dados e tente novamente')
    }
    else {
       var n = Number(num.value)
       var c = 1
       tab.innerHTML=""
    }while (c<= 10){
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++

    }
    

}