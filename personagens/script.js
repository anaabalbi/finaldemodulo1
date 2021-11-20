function comecar(){
        alert('Vamos começar!')
        var personagem =' '
        while(personagem!='shikamaro' && personagem!='ino' && personagem!='choji' ){
                personagem = prompt ('Escolha o seu personagem? \nShikamaro \nIno \nChoji');
        }  
                
        if(personagem ==='shikamaro'){
                window.location.href="./shikamaro/shiFase1.html"
        }

        else if(personagem ==='ino'){
                window.location.href="./ino/inoFase1.html"
                        
        }

        else{
                window.location.href="./choji/chojiFase1.html"
                        
        } 
        
}   