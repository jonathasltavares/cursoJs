var bttnver = window.document.getElementById('botao')
bttnver.addEventListener('click', verificar)

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length === 0 || fano.value > ano || fano.value == null){
        window.alert('[ERRO!] Verifique os dados e tente novamente')
    }
    else{
        var idade = ano - Number(fano.value)
}
   
}
