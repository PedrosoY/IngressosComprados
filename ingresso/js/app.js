// Função para atualizar a quantidade de ingressos disponíveis na interface
function atualizarQuantidade(tipo, novaQuantidade) {
    if (tipo === 'superior') {
        document.getElementById('qtd-superior').innerText = novaQuantidade;
    } else if (tipo === 'inferior') {
        document.getElementById('qtd-inferior').innerText = novaQuantidade;
    } else {
        document.getElementById('qtd-pista').innerText = novaQuantidade;
    }
}

// Função para realizar a compra de ingressos
function comprar() {
    let tipoDoEngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeIngressos = document.getElementById('qtd').value;

    let textoQuantidadeIngressosSuperior = document.getElementById('qtd-superior');
    let textoQuantidadeIngressosPista = document.getElementById('qtd-pista');
    let textoQuantidadeIngressosInferior = document.getElementById('qtd-inferior');

    let quantidadeIngressosSuperior = parseInt(textoQuantidadeIngressosSuperior.innerText);
    let quantidadeIngressosPista = parseInt(textoQuantidadeIngressosPista.innerText);
    let quantidadeIngressosInferior = parseInt(textoQuantidadeIngressosInferior.innerText);

    if (!isNaN(quantidadeIngressos) && quantidadeIngressos > 0) {
        if (tipoDoEngresso === 'superior') {
            if (quantidadeIngressosSuperior > 0) {
                quantidadeIngressosSuperior -= quantidadeIngressos;
                atualizarQuantidade('superior', quantidadeIngressosSuperior);
            } else {
                alert(`Não há como comprar a quantidade ${quantidadeIngressos} de ingressos, pois só temos ${quantidadeIngressosSuperior}`);
            }
        } else if (tipoDoEngresso === 'inferior') {
            if (quantidadeIngressosInferior > 0) {
                quantidadeIngressosInferior -= quantidadeIngressos;
                atualizarQuantidade('inferior', quantidadeIngressosInferior);
            } else {
                alert(`Não há como comprar a quantidade ${quantidadeIngressos} de ingressos, pois só temos ${quantidadeIngressosInferior}`);
            }
        } else {
            if (quantidadeIngressosPista > 0) {
                quantidadeIngressosPista -= quantidadeIngressos;
                atualizarQuantidade('pista', quantidadeIngressosPista);
            } else {
                alert(`Não há como comprar a quantidade ${quantidadeIngressos} de ingressos, pois só temos ${quantidadeIngressosPista}`);
            }
        }
    }
}
