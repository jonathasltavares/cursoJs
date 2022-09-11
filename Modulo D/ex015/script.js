var bttnver = window.document.getElementById('botao')
bttnver.addEventListener('click', verificar)

    
function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length === 0 || fano.value > ano || fano.value == null){
    window.alert('ERRO! Esta pessoa certamente não existe')
}   
    else  {
        var idade = ano - Number(fano.value)
        res.style.textAlign='center'
        res.innerHTML = `Em ${ano} essa pessoa tem/faz ${idade} anos.`
}
}
   


