function fantasia(){
    var personagem =' '
    while(personagem!='homem cabeça de abóbora ' && personagem!='vampiro' && personagem!='choji' ){
            personagem = prompt ('Escolha a fantasia do Shikamaru \nHomem cabeça de abóbora \nVampiro \nLobisomen');
    }  
            
    if(personagem ==='homem cabeça de abóbora'){
            window.location.href="./shikamaro/shiFase1.html"
    }

    else if(personagem ==='vampiro'){
            window.location.href="./ino/inoFase1.html"
                    
    }

    else{
            window.location.href="./choji/chojiFase1.html"
                    
    } 
    
} 