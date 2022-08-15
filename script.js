let lanche;

function selecionarLanche(classeBotao){

    const botaoSelecionado = document.querySelector('.lanche .selecionado');
    if ( botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado');
    }

    const seletor = '.'+classeBotao;    
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    const imagem = botao.querySelector('.vetor')
    const imagens = document.querySelectorAll ('.vetor');
        function verificaClasse(img){
            if(!img.classList.contains('escondido')){
                img.classList.add('escondido')
            }   
        }
    imagens.forEach(verificaClasse)
    if( imagem.classList.contains('escondido')){
        imagem.classList.remove('escondido')
    }
    
    lanche = botao.innerHTML;

    habilitarBotao();
}

let bebidas;
function selecionarBebida(classeBotao){

    const botaoSelecionado = document.querySelector('.bebida .selecionado');

    if ( botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado');
    }

    const seletor = '.'+classeBotao;    
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    const imagem = botao.querySelector('.vetor1')
    const imagens = document.querySelectorAll ('.vetor1');
        function verificaClasse(img){
            if(!img.classList.contains('escondido')){
                img.classList.add('escondido')
            }   
        }
    imagens.forEach(verificaClasse)
    if( imagem.classList.contains('escondido')){
        imagem.classList.remove('escondido')
    }

    bebidas = botao.innerHTML;

    habilitarBotao();
}

let sobremesas;

function selecionarSobremesa(classeBotao){

    const botaoSelecionado = document.querySelector('.sobremesa .selecionado');

    if ( botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado');
    }

    const seletor = '.'+classeBotao;    
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    const imagem = botao.querySelector('.vetor2')
    const imagens = document.querySelectorAll ('.vetor2');
        function verificaClasse(img){
            if(!img.classList.contains('escondido')){
                img.classList.add('escondido')
            }   
        }
    imagens.forEach(verificaClasse)
    if( imagem.classList.contains('escondido')){
        imagem.classList.remove('escondido')
    }

    sobremesas = botao.innerHTML;

    habilitarBotao();
}

function habilitarBotao(){
    if ( lanche !== undefined){
        if(bebidas !== undefined ){
            if(sobremesas !== undefined){
                const painelAntigo = document.querySelector ('.selecionar-pedidos');
                painelAntigo.classList.add('selecionar')
                painelAntigo.innerHTML =  "Fechar Pedido"
            }
        }  
    } 
}

let uri = `Olá, gostaria de fazer o pedido:
- Prato: ${lanche}
- Bebida: ${bebidas}
- Sobremesa: ${sobremesas}
Total: ${lanche + bebidas + sobremesas}`;
let encoded = encodeURIComponent(uri);


function abrirZap(){
    const zap = document.querySelector ('.selecionar-pedidos.selecionar')
        if (zap !== null){
            window.open( "https://wa.me/5561985760071?text=" + uri)
        }
}