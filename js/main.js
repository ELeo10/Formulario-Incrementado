const btn = document.getElementById('btn');
const form = document.getElementById('form');
const nome = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const conSenha = document.getElementById('conSenha');
const endereco = document.getElementById('endereco');
const anoInput = document.getElementById('data');
const tel = document.getElementById('telefone');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let data = new Date(),
    ano = data.getFullYear();

    idade = ano - anoInput.value;

    if (idade < 18) {
        alert('Você precisa ter acima de 18 anos!');
        return;
    }

    if (anoInput === "") {
        alert('Por favor, preencha a idade.')
    }

    if (nome.value === "") {
        alert('Por favor, preencha o nome.');
        return;
    }

    if (emailInput.value === "" || !emailValidacao(emailInput.value)) {
        alert('Por favor, insira um email válido!');
        return;
    }

    if (!senhaValidacao(senhaInput.value, 8, 20)) {
        alert('A senha precisa ter no mínimo 8 e no máximo 20 dígitos.');
        return;
    }

    if (conSenha.value != senhaInput.value) {
        alert('As senhas precisam ser as mesmas.');
        return;
    }

    if (endereco.value === "") {
        alert('Por favor, preencha o endereço.');
        return;
    }

    if (tel.value === "" || !telValidacao(tel.value)) {
        alert('Por favor, insira um número de telefone válido');
        return;
    }

    form.submit();
});

function emailValidacao(email) {
    const emailRegex = new RegExp (
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

function senhaValidacao(password, minDigits, maxDigits) {
    if (password.length >= minDigits && password.length <= maxDigits) {
        return true;
    }

    return false;
}

function telValidacao(telefone) {
    const telRegex = new RegExp (
        /^([0-9]{2})[0-9]{9}$/
    );

    if (telRegex.test(telefone)) {
        return true;
    }

    return false;
}