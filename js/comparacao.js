const frm = document.querySelector("form");
const resp = document.querySelector("p");

let salarioMinimo = [
    { salario: 510.00, ano: 2010 },
    { salario: 545.00, ano: 2011 },
    { salario: 622.00, ano: 2012 },
    { salario: 678.00, ano: 2013 },
    { salario: 724.00, ano: 2014 },
    { salario: 788.00, ano: 2015 },
    { salario: 880.00, ano: 2016 },
    { salario: 937.00, ano: 2017 },
    { salario: 954.00, ano: 2018 },
    { salario: 998.00, ano: 2019 },
    { salario: 1039.00, ano: 2020 },
    { salario: 1100.00, ano: 2021 },
    { salario: 1212.00, ano: 2022 },
    { salario: 1320.00, ano: 2023 },
    { salario: 1412.00, ano: 2024 }
];

let inflacao_array = [
    { ipca: 5.91, ano: 2010 },
    { ipca: 6.50, ano: 2011 },
    { ipca: 5.84, ano: 2012 },
    { ipca: 5.91, ano: 2013 },
    { ipca: 6.41, ano: 2014 },
    { ipca: 10.67, ano: 2015 },
    { ipca: 6.29, ano: 2016 },
    { ipca: 2.95, ano: 2017 },
    { ipca: 3.75, ano: 2018 },
    { ipca: 4.31, ano: 2019 },
    { ipca: 4.52, ano: 2020 },
    { ipca: 10.06, ano: 2021 },
    { ipca: 5.78, ano: 2022 },
    { ipca: 4.62, ano: 2023 },
    { ipca: 4.51, ano: 2024 }
];

frm.addEventListener("submit", (e) => {
    const salarioChecked = frm.inSalario.checked;
    const inflacaoChecked = frm.inInflacao.checked;
    const comparacaoChecked = frm.inComparacao.checked;

    let output = "";

    if (salarioChecked) {
        for (let salarios of salarioMinimo) {
            let salario = salarios.salario.toFixed(2).toString().replace(".", ",");
            let ano = salarios.ano.toString();
            output += `Ano: ${ano}\nSalario Minimo: R$ ${salario}\n\n`;
        }
    }

    if (inflacaoChecked) {
        for (let lista_ipca of inflacao_array) {
            let ipca = lista_ipca.ipca.toFixed(2).toString().replace(".", ",");
            let ano = lista_ipca.ano.toString();
            output += `Ano: ${ano}\nInflação IPCA: ${ipca}%\n\n`;
        }
    }

    if (comparacaoChecked) {
        for (let i = 0; i < salarioMinimo.length; i++) {
            let ano = salarioMinimo[i].ano;
            let salario = salarioMinimo[i].salario;
            let percentualCrescimento;
            let crescimentoFormatado;

            if (i > 0) {
                let salarioAnterior = salarioMinimo[i - 1].salario;
                let diferenca = salario - salarioAnterior;
                percentualCrescimento = (diferenca / salarioAnterior) * 100;
                crescimentoFormatado = percentualCrescimento.toFixed(2).replace(".", ",") + "%";
            } else {
                crescimentoFormatado = "-";
            }

            let ipca = inflacao_array[i].ipca;
            let salarioFormatado = salario.toFixed(2).replace(".", ",");
            let ipcaFormatado = ipca.toFixed(2).replace(".", ",");
            ano = ano.toString();
            output += `Ano: ${ano}\nSalario Minimo: R$ ${salarioFormatado}\nCrescimento Salarial: ${crescimentoFormatado}\nInflação IPCA: ${ipcaFormatado}%\n\n`;
        }
    }

    resp.innerText = output;

    e.preventDefault();
});

frm.addEventListener("reset", () => {
    resp.innerText = "";
});
