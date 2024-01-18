const form = document.getElementById('form-info');
let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeInfo = document.getElementById('nome-info');
    const inputNumeroInfo = document.getElementById('numero-info');
    
    if(inputNumeroInfo.value.toString().length >= 12){
        alert(`Insira Um Número Válido`);
        return;
    }
    
    let linha = '<tr>';
    linha += `<td>${inputNomeInfo.value}</td>`;
    linha += `<td>${inputNumeroInfo.value}</td>`;
    const tamanhoNumero = inputNumeroInfo.value.toString().length;
    if (tamanhoNumero === 8 || tamanhoNumero === 10) {
        linha += '<td><img src="/images/telefone.png" alt="telefone"></td>';
    } else if (tamanhoNumero === 9 || tamanhoNumero === 11) {
        linha += '<td><img src="/images/celular.png" alt="celular"></td>';
    }
    linha += '</tr>';
    
    linhas += linha;
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

})