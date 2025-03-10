// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(produto) {
    alert(`${produto} foi adicionado ao seu carrinho!`);
}

// Função para validar e enviar o formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert('Mensagem enviada com sucesso! Responderemos em breve.');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
