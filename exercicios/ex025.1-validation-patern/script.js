let nome = document.getElementById('name')
let email = document.getElementById('email')
let tel = document.getElementById('tel')
let msg = document.getElementById('res')

function validacaoEmail(field) {
    let usuario = field.value.substring(0, field.value.indexOf("@"))
    let dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length)

    if (usuario.length >= 1 &&
        dominio.length >= 3 &&
        usuario.search("@") == -1 &&
        dominio.search("@") == -1 &&
        usuario.search(" ") == -1 &&
        dominio.search(" ") == -1 &&
        dominio.search(".") != -1 &&
        dominio.indexOf(".") >= 1 &&
        dominio.lastIndexOf(".") < dominio.length - 2) {
        res.innerHTML = ""
    } else {
        res.innerHTML = `<p><font color="red">E-mail inválido.</font></p>`
    }
}

function enviar() {
    if (nome.value.length >= 5 &&
        tel.value.length >= 8 &&
        res.innerHTML.length == 0) {
        alert(`${nome.value}, cadastro enviado com sucesso.`)
    } else {
        res.innerHTML = `<p><font color="red">Dados inválidos.</font></p>`
    }
}