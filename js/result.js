/**Página de simulação: Deve receber da página inicial os dados informados pelo usuário e então calcular e 
 * informar na tela o valor de cada parcela a ser paga, além do valor real do empréstimo. Para tanto, devem 
 * ser utilizadas as fórmulas abaixo:
 *valorReal = valorEmprestado * (1 + (taxaJuros/100) * nroParcelas) 
 * valorParcela = valorReal / nroParcelas
*/

const search = window.location.search;
console.log(search);
const params = new URLSearchParams(search);
console.log(params);

const $ = document.querySelector.bind(document);

const valorEmprestado = Number(params.get("valor"));
const taxaJuros = Number(params.get("juros"));
const numParcelas = Number(params.get("parcelas"));

const emprestimoScan = $("#emprestimo");
const jurosScan = $("#valorJuros");
const parcelasScan = $("#qtdParcelas");
const valorTotal = $("#valorRealEmprestimo");
const valorParcelado = $("#valorParcelas");

emprestimoScan.innerText = `R$${valorEmprestado}`;
jurosScan.innerText = `${taxaJuros}`;
parcelasScan.innerText = `${numParcelas}`;

const valorReal = valorEmprestado * ( 1 + (taxaJuros / 100) * numParcelas );
valorTotal.innerText = `R$${Math.floor(valorReal, 2)}`;

valorParcela = valorReal / numParcelas;
const valorParcelaReal = Math.floor(valorParcela, 2);
valorParcelado.innerText = `R$${Math.floor(valorParcela, 2)}`;