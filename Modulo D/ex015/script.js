function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var sexo = document.getElementById('')
    var res = document.getElementById('res')

    if (fano.value.length === 0 || fano.value > ano || fano.value == null){
    window.alert('ERRO! Esta pessoa certamente não existe')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var sexo = ''
        if(fsex[0].checked){
            sexo = 'masculino'
            if(idade>=0 && idade<=10){
                img.setAttribute('src', 'image/criancaMasc.jpg')
            }
            else if(idade>10 && idade<21){
                img.setAttribute('src', 'image/jovemMasc.jpg')
            }
            else if(idade>21 && idade<50){
                img.setAttribute('src', 'image/adultoMasc.jpg')
            }
            else if(idade>50){
                img.setAttribute('src', 'image/idosoMasc.jpg')
            }
        }else if(fsex[1].checked){
            sexo = 'feminino'
            if(idade>=0 && idade<=10){
                img.setAttribute('src', 'image/criancaFem.jpg')
            }
            else if(idade>10 && idade<21){
                img.setAttribute('src', 'image/jovemFem.jpg')
            }
            else if(idade>21 && idade<50){
                img.setAttribute('src', 'image/adultoFem.jpg')
            }
            else if(idade>50){
                img.setAttribute('src', 'image/idosoFem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos uma pessoa do sexo ${sexo} com ${idade} anos`
        res.appendChild(img)
    }
}
   


