function setOutput(id, value) {
    document.getElementById(id).innerText = value;
}

function verificaParOuImpar() {
    const n = parseInt(document.getElementById('numero1').value);

    setOutput('out1', n % 2 === 0 ? "Par" : "Ímpar");
}

function verificaMaior() {
    const n1 = parseInt(document.getElementById('num1').value);
    const n2 = parseInt(document.getElementById('num2').value);

    setOutput('out2', n1 === n2 ? "Números iguais" : `Maior: ${n1 > n2 ? n1 : n2}`);
}

function verificaVoto() {
    const ano = parseInt(document.getElementById('anoNascimento').value);
    const idade = new Date().getFullYear() - ano;

    setOutput('out3', idade >= 16 ? "Pode votar" : "Não pode votar");
}

function calculaSalario() {
    const salario = parseFloat(document.getElementById('salario').value);
    const reajuste = parseFloat(document.getElementById('reajuste').value);

    const novoSalario = salario + (salario * reajuste / 100);

    setOutput('out4', `Novo salário: R$ ${novoSalario.toFixed(2)}`);
}

function diaSemana() {
    const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const n = parseInt(document.getElementById('dia').value);

    setOutput('out5', dias[n - 1] || "Número inválido");
}

function contarAte() {
    const n = parseInt(document.getElementById('num6').value);

    let txt = "";
    for (let i = 1; i <= n; i++) txt += i + " ";

    setOutput('out6', txt.trim());
}

function somaMenores() {
    const n = parseInt(document.getElementById('num7').value);

    let soma = 0;
    for (let i = 1; i < n; i++) soma += i;

    setOutput('out7', `Soma: ${soma}`);
}

function impares() {
    const n = parseInt(document.getElementById('num8').value);

    let txt = "";
    for (let i = 1; i <= n; i += 2) txt += i + " ";

    setOutput('out8', txt.trim());
}

function somaMenores30() {
    const arr = document.getElementById('lista9').value.split('-').map(Number);
    const soma = arr.filter(n => n < 30).reduce((a, b) => a + b, 0);

    setOutput('out9', `Soma: ${soma}`);
}

function contaMaiores50() {
    const arr = document.getElementById('lista10').value.split('/').map(Number);
    const total = arr.filter(n => n > 50).length;

    setOutput('out10', `Qtd: ${total}`);
}

function inverterString() {
    const str = document.getElementById('string11').value;
    let invertida = '';

    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }

    setOutput('out11', invertida);
}

function formatarString() {
    const str = document.getElementById('string12').value;
    if (str.length < 2) return setOutput('out12', str.toUpperCase());

    const result = str[0].toUpperCase() + str.slice(1, -1) + str[str.length - 1].toUpperCase();
    setOutput('out12', result);
}