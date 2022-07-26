let usuario = document.getElementById('usuario')
let senha = document.getElementById('senha')

function enviar() {
    if (usuario.value.length >= 5 && senha.value.length >= 8) {
        alert(`${usuario.value}, cadastro efetuado com sucesso.`)
    }
}
