function verificar(){
    //window.alert("Funcionando...");
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('div#res');
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }else{
        let fsex = document.getElementsByName('radsex'); //Pega o valor do radio    
        let idade = ano - Number(fano.value); //calcula a idade
        let genero = '';
        let img = document.createElement('img'); //cria uma tag img
        img.setAttribute('id', 'foto'); //cria um id para a tag img
        if (fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe_homem.png');
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem_homem.png');
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto_homem.png');
            }else{
                //Idoso
                img.setAttribute('src', 'idoso_homem.png');
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe_mulher.png');
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem_mulher.png');
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto_mulher.png');
            }
            else{
                //Idoso
                img.setAttribute('src', 'idoso_mulher.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}