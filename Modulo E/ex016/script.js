var botao = window.document.getElementById('botão')
botao.addEventListener('click' , contando)
function  contando(){
var ini = window.document.getElementById('txti')
var fi = window.document.getElementById('txtf')
var pul = window.document.getElementById('txtp')
var res = window.document.querySelector('div#res')
    if (ini.value.length === 0 || fi.value.length === 0 || pul .value.length === 0 || ini.value == null ||
        fi.value == null || pul == null){
    //window.alert("ERRO! Verifique os dados e tente novamente")
    res.innerHTML = 'Impossível contar.'
}   else {
    res.innerHTML = 'Contando: '  
    var i = Number(ini.value)
    var f = Number(fi.value)
    var p = Number(pul.value)
    if (p<=0) {
        alert(`Considerando "De quanto em quanto = 1"`)
        p = 1
    }
   if (i < f){
     for (let c = i ; c<= f ; c=c+p){
        res.innerHTML += `${c} \u{1F449}`}
}   else {
    for(let c = i ; c>= f ; c-=p){
        res.innerHTML += `${c} \u{1F449}`
   
    } res.innerHTML+= `\u{1F3C1}`}
    res.innerHTML+= `\u{1F3C1}`
}}

   