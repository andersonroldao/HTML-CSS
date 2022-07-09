function enviar(params) {
    var nome = document.getElementById("inome");
    var sobrenome = document.getElementById("isobrenome");

    if (nome.value != "" && sobrenome.value != "") {
        alert(`Obrigado sr(a) ${nome.value} ${sobrenome.value} os seus dados foram encaminhados com sucesso.`)
    }
}