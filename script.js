let contadorItem = 0 ;
let comida = "";
let comidaPreco = 0;
let bebida = "";
let bebidaPreco = 0;
let sobremesa ="";
let sobremesaPreco = 0;
/* aprendemos na Sexta-feira, dia 01 de abril, sobre escopo global */

function toggleSeletor(item, nome, valor){
const comidaSelecionado = document.querySelector(".prato.selecionado");
   if( comidaSelecionado !== null){
   comidaSelecionado.classList.remove("selecionado");
   contadorItem = contadorItem - 1;
   }
item.classList.add("selecionado");
contadorItem = contadorItem + 1
comida = nome;
 comidaPreco = valor;
 validarPedido();

     /* Antes eu usei IF e ELSE, o que estava me permetindo desselecionar o item, o que ia contra o requisito */
    /* lembrar que assim como no html e css, posso colocar 2 ou mais itens no 'querySelector' */
    /* Tirar dúvida se usar const ou let, no selecionado, teria uma grande diferença no projeto */
}
    
function toggleDrink(item, nome, valor){
const bebidaSelecionada = document.querySelector(".drink.selecionado");
   if (bebidaSelecionada !== null){
   bebidaSelecionada.classList.remove("selecionado");
   contadorItem = contadorItem - 1;
   } 
 item.classList.add("selecionado");
 contadorItem = contadorItem + 1
 bebida = nome;
 bebidaPreco = valor;
 validarPedido();

}
    
       
function toggleDessert(item, nome, valor){
const sobremesaSelecionada = document.querySelector(".dessert.selecionado");
if (sobremesaSelecionada !== null){
      sobremesaSelecionada.classList.remove("selecionado");
      contadorItem = contadorItem - 1;
      }
item.classList.add("selecionado");
contadorItem = contadorItem + 1
sobremesa= nome;
sobremesaPreco = valor;
validarPedido();

}

  function validarPedido(){
    const botaoPedido = document.querySelector(".botao");
   if (contadorItem === 1){
      botaoPedido.innerHTML = "Selecione mais dois itens"
   }
    else if (contadorItem === 2){
       botaoPedido.innerHTML ="Selecione o último item"
    }
   if (contadorItem === 3){
    botaoPedido.classList.add("habilitado");
    botaoPedido.innerHTML = "Fechar pedido";
    document.querySelector(".botao").onclick = function(){
       checar()

       /* A linha 67 é a mágica que faz adiciona a tag onclick em uma div. Se eu usasse a tag button, eu poderia usar o disable = true /false */
    }
    }
     /* Para uma função funcionar, ela precisa de uma ação. Esse só funciona porque está sendo verificada nos "toggles"*/
   }
      

   function checar(){
      const total = comidaPreco + bebidaPreco + sobremesaPreco;
      const elementoCheck = document.querySelector(".sobrepor")
      elementoCheck.classList.remove("escondido");
      const textoComida = document.querySelector(".comida");
      textoComida.innerHTML = `${comida}`;
      const precoComida = document.querySelector(".precoComida")
      precoComida.innerHTML = `${comidaPreco.toFixed(2)}`
      const textoBebida = document.querySelector(".bebida");
      textoBebida.innerHTML = `${bebida}`;
      const precoBebida = document.querySelector(".precoBebida");
      precoBebida.innerHTML = `${bebidaPreco.toFixed(2)}`
      const textoSobremesa = document.querySelector(".sobremesa");
      textoSobremesa.innerHTML = `${sobremesa}`;
      const precoSobremesa = document.querySelector(".precoSobremesa");
      precoSobremesa.innerHTML = `${sobremesaPreco.toFixed(2)}`
      const valorTotal = document.querySelector(".precoTotal");
      valorTotal.innerHTML = `R$${total.toFixed(2)}`
   }
      function cancelar(){
         const elementoCheck = document.querySelector(".sobrepor")
      elementoCheck.classList.add("escondido");
      }
   function mensagemBotao(){
      const total = comidaPreco + bebidaPreco + sobremesaPreco;
      const cliente = prompt("Qual é o seu nome?");
      const rua = prompt("Qual o seu endereço?")
      const contato = 5521976021269
      const mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
      - Prato: ${comida}
      - Bebida: ${bebida}
      - Sobremesa: ${sobremesa}
      Total: R$ ${total.toFixed(2)}
      
      Nome: ${cliente}
      Endereço: ${rua}`);

      const siteWpp = `https://wa.me/${contato}?text=${mensagem}`
      
      window.open(siteWpp);
   }


    