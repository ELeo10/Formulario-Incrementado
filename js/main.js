const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const formBox2 = document.getElementById('form-box2');
const formBox = document.getElementById('form-box');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const conSenha = document.getElementById('conSenha');
const endereco = document.getElementById('endereco');
const anoInput = document.getElementById('ano');
const horaInput = document.getElementById('hora');
const tel = document.getElementById('telefone');
const output = document.getElementById('output');
const campoTexto = document.getElementById('campoTexto');
const form = document.getElementById('form');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (nomeInput.value === "") {
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

    if (anoInput.value === "") {
        alert('Por favor, preencha o dia da consulta.')
        return;
    }

    if (horaInput.value === "") {
        alert('Por favor, preencha o horário da consulta.')
        return;
    }

    if (tel.value === "" || !telValidacao(tel.value)) {
        alert('Por favor, insira um número de telefone válido');
        return;
    }
    
    show();
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

function show() {
    const p = document.createElement('p');
    p.innerHTML = `Nome: ${nomeInput.value}<br>`,
    p.innerHTML += `E-mail: ${emailInput.value}<br>`,
    p.innerHTML += `Senha: ${senhaInput.value}<br>`,
    p.innerHTML += `Endereço: ${endereco.value}<br>`,
    p.innerHTML += `Consulta: ${anoInput.value} às ${horaInput.value}<br>`,
    p.innerHTML += `Celular: ${tel.value}`;
    output.appendChild(p);
    formBox.style.display = "none";
    output.style.display = "flex";
    btn2.style.display = "flex";
}
