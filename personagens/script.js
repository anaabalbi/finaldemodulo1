function comecar(){
        alert('Vamos começar!')
        var personagem =' '
        while(personagem!='shikamaru' && personagem!='ino' && personagem!='choji' ){
                personagem = prompt ('Escolha o seu personagem? \nShikamaru \nIno \nChoji');
        }  
        var selaciona = personagem.toUpperCase()        
        if(selaciona ==='SHIKAMARU'){
                window.location.href="./shikamaru/shiFase1.html"
        }

        else if(selaciona ==='INO'){
                window.location.href="./ino/inoFase1.html"
                        
        }

        else{
                window.location.href="./choji/chojiFase1.html"
                        
        } 
        
}   


function enigma1(){
        var resposta = prompt('Entre com a resposta correta')
        var chance =1
        var cont=0;
        while(cont<1)
                if(resposta==20){
                        window.location.href="./shikamaru/shiFase3.html"
                        break
                }
                else if(chance<2){
                        alert('Resposta erra, você tem mais 1 chance')
                        resposta = prompt('Entre com a resposta correta')
                        chance++
                }
                else{
                        window.location.href="../../game over/gameover.html"
                }
                cont++

        }
        
                
}

