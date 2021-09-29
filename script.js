let cep = document.getElementById('cep');
let endereco = document.getElementById('endereco');
let bairro = document.getElementById('bairro');
let cidade = document.getElementById('cidade');
let uf = document.getElementById('uf');

let cepValue = cep.value;

if (cepValue != 8) {
    alert('CEP no formato incorreto');
}

if (localStorage.getItem(cepValue)) {
    console.log("INFORMAÇÕES VINDAS DO CACHE")

    const dados = JSON.parse(localStorage.getItem(cepValue));

    endereco.value = response.logradouro;
    bairro.value = response.bairro;
    cidade.value = response.localidade;
    estado.value = response.uf;

    return
}


cep.addEventListener('focusout', () => {
    fetch('https://viacep.com.br/ws/' + cepValue + '/json/')
    .then(response => {
        return response.json();
    })
    .then(response => {
        endereco.value = response.logradouro;
        bairro.value = response.bairro;
        cidade.value = response.localidade;
        estado.value = response.uf;

        const stringResponse = JSON.stringify(response);
        localStorage.setItem(cep.value, stringResponse);
    })
    .catch(erro => {
        alert('Erro ao procurar CEP')
        endereco.value = '';
        bairro.value = '';
        cidade.value = '';
        uf.value = '';
    })
})



/*
"cep": "01001-000",
"logradouro": "Praça da Sé",
"complemento": "lado ímpar",
"bairro": "Sé",
"localidade": "São Paulo",
"uf": "SP",
*/