const inputNascimento = document.getElementById('nascimento');
inputNascimento.onkeydown = function (event){
    if (event.key === 'Enter'){
        calcularIdade();
    }
}
document.getElementById('adicionar').addEventListener('click', calcularIdade);
function calcularIdade() {
    var nascimento = document.getElementById('nascimento').value;
    var dataAtual = date.getDate();
    var diferenca = dataAtual.diff(nascimento);
    alert(diferenca);
}