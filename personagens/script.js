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
