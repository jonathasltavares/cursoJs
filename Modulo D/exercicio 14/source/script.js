function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora_atual = data.getHours()
    

    msg.innerHTML = `Agora são ${hora_atual} horas.`
    if (hora_atual >= 6 && hora_atual < 12){
        //bom dia
        img.src = 'image/fotomanha.png'
        document.body.style.background = "blue"
    } else if (hora_atual >=12 && hora_atual <18){
        //boa tarde
        img.src = 'image/fototarde.png'
        document.body.style.background = "orange"
    } else{
        //boa noite 
        img.src = 'image/fotonoite.png'
        document.body.style.background = "grey"
    }

}

