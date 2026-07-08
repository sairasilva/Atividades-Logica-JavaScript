/* Alterna entre o tema escuro (padrão, com efeito de glow vermelho) e o tema claro do site,
salvando a preferência do usuário no localStorage */
function alternarTema() {
    let tema = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light"
    aplicarTema(tema)
    localStorage.setItem("tema", tema)
}

function aplicarTema(tema) {
    let botao = document.getElementById("theme-toggle")
    if (tema === "light") {
        document.documentElement.setAttribute("data-theme", "light")
        botao.textContent = "🌙"
    } else {
        document.documentElement.removeAttribute("data-theme")
        botao.textContent = "☀️"
    }
}

(function () {
    let temaSalvo = localStorage.getItem("tema")
    if (temaSalvo === "light") {
        document.documentElement.setAttribute("data-theme", "light")
    }
})()

document.addEventListener("DOMContentLoaded", function () {
    aplicarTema(document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark")
})

/* Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de
conversão é F <— (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. */
function fahrenheit() {
    alert("Conversão celsius para fahrenheit.")
    let celsius = prompt("Digite os quantos graus celsius: ")
    let fahrenheit = (celsius * 9 / 5) + 32
    alert("A conversão de " + celsius + " em fahrenheit é: " + fahrenheit)
}

/* Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de
conversão é C (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. */
function celsius() {
    alert("Conversão celsius para fahrenheit. ")
    let fahrenheit = prompt("Digite os quantos graus fahrenheit: ")
    let celsius = (fahrenheit - 32) * 5 / 9
    alert('A conversão de ' + fahrenheit + ' em celsius é: ' + celsius)
}

/* Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
Volume <- 3.14 Raio^2 * Altura */
function volumeLata() {
    alert("Calculo volume lata de óleo.")
    let raio = parseFloat(prompt("Digite o valor raio da lata: "))
    let altura = parseFloat(prompt("Digite o valor da altura da lata: "))
    let volume = 3.14 * (raio * raio) * altura
    alert("O volume da lata é: " + volume + "Cm³")
}

/* Exercício 1 - Soma de Dois Números: ler dois números e calcular a soma entre eles (soma = número1 + número2) */
function soma() {
    alert("Algoritmo de soma")
    let numero01 = parseFloat(prompt("Digite o primeiro número: "))
    let numero02 = parseFloat(prompt("Digite o segundo número: "))
    let resultado = numero01 + numero02
    alert("A soma dos valores é: " + resultado)
}

/* Exercício 2 - Subtração de Dois Números: ler dois números e calcular a subtração entre eles (resultado = número1 - número2) */
function subtracao() {
    alert("Algoritmo de subtração")
    let numero01 = parseFloat(prompt("Digite o primeiro número: "))
    let numero02 = parseFloat(prompt("Digite o segundo número: "))
    let resultado = numero01 - numero02
    alert("A subtração dos valores é: " + resultado)
}

/* Exercício 3 - Multiplicação de Dois Números: ler dois números e calcular a multiplicação entre eles (resultado = número1 * número2) */
function multiplicacao() {
    alert("Algoritmo de multiplicação")
    let numero01 = parseFloat(prompt("Digite o primeiro número: "))
    let numero02 = parseFloat(prompt("Digite o segundo número: "))
    let resultado = numero01 * numero02
    alert("A multiplicação dos valores é: " + resultado)
}

/* Exercício 4 - Divisão de Dois Números: ler dois números e calcular a divisão entre eles (resultado = número1 / número2) */
function divisao() {
    alert("Algoritmo de divisão")
    let numero01 = parseFloat(prompt("Digite o primeiro número: "))
    let numero02 = parseFloat(prompt("Digite o segundo número: "))
    let resultado = numero01 / numero02
    alert("A divisão dos valores é: " + resultado)
}

/* Exercício 5 - Área do Quadrado: ler o lado de um quadrado e calcular sua área (área = lado * lado) */
function areaQuadrado() {
    alert("Cálculo da área do quadrado")
    let lado = parseFloat(prompt("Digite o valor do lado do quadrado: "))
    let area = lado * lado
    alert("A área do quadrado é: " + area)
}

/* Exercício 6 - Perímetro do Quadrado: ler o lado de um quadrado e calcular o perímetro (perímetro = 4 * lado) */
function perimetroQuadrado() {
    alert("Cálculo do perímetro do quadrado")
    let lado = parseFloat(prompt("Digite o valor do lado do quadrado: "))
    let perimetro = 4 * lado
    alert("O perímetro do quadrado é: " + perimetro)
}

/* Exercício 7 - Área do Retângulo: ler a base e a altura de um retângulo e calcular sua área (área = base * altura) */
function areaRetangulo() {
    alert("Cálculo da área do retângulo")
    let base = parseFloat(prompt("Digite o valor da base do retângulo: "))
    let altura = parseFloat(prompt("Digite o valor da altura do retângulo: "))
    let area = base * altura
    alert("A área do retângulo é: " + area)
}

/* Exercício 8 - Perímetro do Retângulo: ler a base e a altura de um retângulo e calcular o perímetro
(perímetro = 2 * (base + altura)) */
function perimetroRetangulo() {
    alert("Cálculo do perímetro do retângulo")
    let base = parseFloat(prompt("Digite o valor da base do retângulo: "))
    let altura = parseFloat(prompt("Digite o valor da altura do retângulo: "))
    let perimetro = 2 * (base + altura)
    alert("O perímetro do retângulo é: " + perimetro)
}

/* Exercício 9 - Área do Triângulo: ler a base e a altura de um triângulo e calcular sua área (área = (base * altura) / 2) */
function areaTriangulo() {
    alert("Cálculo da área do triângulo")
    let base = parseFloat(prompt("Digite o valor da base do triângulo: "))
    let altura = parseFloat(prompt("Digite o valor da altura do triângulo: "))
    let area = (base * altura) / 2
    alert("A área do triângulo é: " + area)
}

/* Exercício 10 - Área do Círculo: ler o raio de um círculo e calcular sua área (área = π * raio²), usando π = 3.14 */
function areaCirculo() {
    alert("Cálculo da área do círculo")
    let raio = parseFloat(prompt("Digite o valor do raio do círculo: "))
    let area = 3.14 * (raio * raio)
    alert("A área do círculo é: " + area)
}

/* Exercício 11 - Comprimento da Circunferência: ler o raio de um círculo e calcular o comprimento da
circunferência (comprimento = 2 * π * raio), usando π = 3.14 */
function comprimentoCircunferencia() {
    alert("Cálculo do comprimento da circunferência")
    let raio = parseFloat(prompt("Digite o valor do raio do círculo: "))
    let comprimento = 2 * 3.14 * raio
    alert("O comprimento da circunferência é: " + comprimento)
}

/* Exercício 12 - Área do Losango: ler a diagonal maior e a diagonal menor de um losango e calcular sua área
(área = (diagonal_maior * diagonal_menor) / 2) */
function areaLosango() {
    alert("Cálculo da área do losango")
    let diagonalMaior = parseFloat(prompt("Digite o valor da diagonal maior: "))
    let diagonalMenor = parseFloat(prompt("Digite o valor da diagonal menor: "))
    let area = (diagonalMaior * diagonalMenor) / 2
    alert("A área do losango é: " + area)
}

/* Exercício 13 - Área do Trapézio: ler a base maior, a base menor e a altura de um trapézio e calcular sua área
(área = ((base_maior + base_menor) * altura) / 2) */
function areaTrapezio() {
    alert("Cálculo da área do trapézio")
    let baseMaior = parseFloat(prompt("Digite o valor da base maior: "))
    let baseMenor = parseFloat(prompt("Digite o valor da base menor: "))
    let altura = parseFloat(prompt("Digite o valor da altura: "))
    let area = ((baseMaior + baseMenor) * altura) / 2
    alert("A área do trapézio é: " + area)
}

/* Exercício 14 - Área do Paralelogramo: ler a base e a altura de um paralelogramo e calcular sua área
(área = base * altura) */
function areaParalelogramo() {
    alert("Cálculo da área do paralelogramo")
    let base = parseFloat(prompt("Digite o valor da base do paralelogramo: "))
    let altura = parseFloat(prompt("Digite o valor da altura do paralelogramo: "))
    let area = base * altura
    alert("A área do paralelogramo é: " + area)
}

/* Exercício 15 - Área e Perímetro de um Quadrado: ler o lado de um quadrado e calcular sua área (lado²)
e seu perímetro (4 * lado) */
function areaPerimetroQuadrado() {
    alert("Cálculo da área e do perímetro do quadrado")
    let lado = parseFloat(prompt("Digite o valor do lado do quadrado: "))
    let area = lado * lado
    let perimetro = 4 * lado
    alert("A área do quadrado é: " + area + " e o perímetro é: " + perimetro)
}

/* Exercício 16 - Média de Três Valores: ler três números e calcular a média aritmética
(média = (valor1 + valor2 + valor3) / 3) */
function mediaTresValores() {
    alert("Cálculo da média de três valores")
    let valor1 = parseFloat(prompt("Digite o primeiro valor: "))
    let valor2 = parseFloat(prompt("Digite o segundo valor: "))
    let valor3 = parseFloat(prompt("Digite o terceiro valor: "))
    let media = (valor1 + valor2 + valor3) / 3
    alert("A média dos valores é: " + media)
}

/* Exercício 17 - Conversão de Metros para Centímetros: ler um valor em metros e converter para centímetros
(centímetros = metros * 100) */
function metrosParaCentimetros() {
    alert("Conversão de metros para centímetros")
    let metros = parseFloat(prompt("Digite o valor em metros: "))
    let centimetros = metros * 100
    alert(metros + " metros equivalem a " + centimetros + " centímetros")
}

/* Exercício 18 - Idade em Meses e Dias: ler a idade de uma pessoa em anos e calcular a idade aproximada
em meses (anos * 12) e em dias (anos * 365) */
function idadeMesesDias() {
    alert("Cálculo da idade em meses e dias")
    let anos = parseFloat(prompt("Digite a idade em anos: "))
    let meses = anos * 12
    let dias = anos * 365
    alert("A idade em meses é: " + meses + " e em dias é: " + dias)
}

/* Exercício 19 - Salário com Aumento: ler o salário atual de um funcionário e o percentual de aumento e
calcular o novo salário (novo_salario = salario + (salario * percentual / 100)) */
function salarioComAumento() {
    alert("Cálculo do novo salário com aumento")
    let salario = parseFloat(prompt("Digite o valor do salário atual: "))
    let percentual = parseFloat(prompt("Digite o percentual de aumento: "))
    let novoSalario = salario + (salario * percentual / 100)
    alert("O novo salário é: " + novoSalario)
}

/* Exercício 20 - Valor da Compra: ler o preço de um produto e a quantidade comprada e calcular o valor
total da compra (total = preço * quantidade) */
function valorCompra() {
    alert("Cálculo do valor total da compra")
    let preco = parseFloat(prompt("Digite o preço do produto: "))
    let quantidade = parseFloat(prompt("Digite a quantidade comprada: "))
    let total = preco * quantidade
    alert("O valor total a pagar é: " + total)
}

/* Exercício 21 - Valor do Desconto: ler o valor de um produto e o percentual de desconto e calcular o
valor do desconto (desconto = preço * percentual / 100) e o preço final (preço_final = preço - desconto) */
function valorDesconto() {
    alert("Cálculo do valor do desconto e do preço final")
    let preco = parseFloat(prompt("Digite o preço do produto: "))
    let percentual = parseFloat(prompt("Digite o percentual de desconto: "))
    let desconto = preco * percentual / 100
    let precoFinal = preco - desconto
    alert("O valor do desconto é: " + desconto + " e o preço final é: " + precoFinal)
}

/* Exercício 22 - Consumo Médio de Combustível: ler a distância percorrida por um carro e o total de
combustível gasto e calcular o consumo médio (consumo = distância / combustível) */
function consumoCombustivel() {
    alert("Cálculo do consumo médio de combustível")
    let distancia = parseFloat(prompt("Digite a distância percorrida (km): "))
    let combustivel = parseFloat(prompt("Digite o total de combustível gasto (litros): "))
    let consumo = distancia / combustivel
    alert("O consumo médio é: " + consumo + " km/l")
}

/* Exercício 23 - Troca de Valores: ler dois valores armazenados nas variáveis A e B e trocar os valores entre elas */
function trocaValores() {
    alert("Troca de valores entre duas variáveis")
    let a = parseFloat(prompt("Digite o valor de A: "))
    let b = parseFloat(prompt("Digite o valor de B: "))
    let auxiliar = a
    a = b
    b = auxiliar
    alert("Após a troca, A vale: " + a + " e B vale: " + b)
}

/* Exercício 24 - Comparação de Áreas: ler o lado de um quadrado e o raio de um círculo, calcular as áreas
(área_quadrado = lado², área_círculo = π * raio²) e informar qual figura possui a maior área */
function comparacaoAreas() {
    alert("Comparação entre a área do quadrado e a área do círculo")
    let lado = parseFloat(prompt("Digite o valor do lado do quadrado: "))
    let raio = parseFloat(prompt("Digite o valor do raio do círculo: "))
    let areaQuadrado = lado * lado
    let areaCirculo = 3.14 * (raio * raio)
    let maiorFigura
    if (areaQuadrado > areaCirculo) {
        maiorFigura = "o quadrado"
    } else if (areaCirculo > areaQuadrado) {
        maiorFigura = "o círculo"
    } else {
        maiorFigura = "as duas figuras possuem áreas iguais"
    }
    alert("Área do quadrado: " + areaQuadrado + " | Área do círculo: " + areaCirculo + " | Maior área: " + maiorFigura)
}

/* Exercício 25 - Área Total de Dois Retângulos: ler a base e a altura de dois retângulos diferentes e
calcular a soma das áreas (área_total = área1 + área2) */
function areaTotalDoisRetangulos() {
    alert("Cálculo da área total de dois retângulos")
    let base1 = parseFloat(prompt("Digite a base do primeiro retângulo: "))
    let altura1 = parseFloat(prompt("Digite a altura do primeiro retângulo: "))
    let base2 = parseFloat(prompt("Digite a base do segundo retângulo: "))
    let altura2 = parseFloat(prompt("Digite a altura do segundo retângulo: "))
    let area1 = base1 * altura1
    let area2 = base2 * altura2
    let areaTotal = area1 + area2
    alert("A área total dos dois retângulos é: " + areaTotal)
}

/* Exercício 26 - Antecessor de um Valor: ler um valor e escrever o seu antecessor (antecessor = valor - 1) */
function antecessorValor() {
    alert("Cálculo do antecessor de um valor")
    let valor = parseFloat(prompt("Digite um valor: "))
    let antecessor = valor - 1
    alert("O antecessor de " + valor + " é: " + antecessor)
}

/* Exercício 27 - Área do Retângulo (Dimensões): ler a base e a altura de um retângulo e calcular sua área
(área = base * altura) */
function areaRetanguloDimensoes() {
    alert("Cálculo da área do retângulo a partir das dimensões")
    let base = parseFloat(prompt("Digite a base do retângulo: "))
    let altura = parseFloat(prompt("Digite a altura do retângulo: "))
    let area = base * altura
    alert("A área do retângulo é: " + area)
}

/* Exercício 28 - Idade em Dias: ler a idade de uma pessoa em anos, meses e dias e escrever a idade
expressa apenas em dias (considerando ano com 365 dias e mês com 30 dias) */
function idadeEmDias() {
    alert("Cálculo da idade expressa em dias")
    let anos = parseFloat(prompt("Digite a quantidade de anos: "))
    let meses = parseFloat(prompt("Digite a quantidade de meses: "))
    let dias = parseFloat(prompt("Digite a quantidade de dias: "))
    let totalAnos = anos * 365
    let totalMeses = meses * 30
    let idadeTotal = totalAnos + totalMeses + dias
    alert("A idade expressa em dias é: " + idadeTotal)
}

/* Exercício 29 - Conversão de Metros para Centímetros: ler um valor em metros e converter para centímetros
(centímetros = metros * 100) */
function conversaoMetrosCentimetros() {
    alert("Conversão de metros para centímetros")
    let metros = parseFloat(prompt("Digite o valor em metros: "))
    let centimetros = metros * 100
    alert(metros + " metro(s) equivale(m) a " + centimetros + " centímetro(s)")
}

/* Exercício 30 - Área do Quadrado e o Dobro: ler o lado de um quadrado, calcular a área (lado * lado) e
mostrar o dobro desta área */
function areaQuadradoDobro() {
    alert("Cálculo da área do quadrado e o seu dobro")
    let lado = parseFloat(prompt("Digite o valor do lado do quadrado: "))
    let area = lado * lado
    let dobroArea = area * 2
    alert("A área do quadrado é: " + area + " e o dobro da área é: " + dobroArea)
}

/* Exercício 31 - Salário por Hora Trabalhada: ler o salário por hora e o número de horas trabalhadas no mês
e calcular o total do salário (total = salarioHora * horasTrabalhadas) */
function salarioPorHora() {
    alert("Cálculo do salário a partir do valor da hora trabalhada")
    let salarioHora = parseFloat(prompt("Digite o quanto você ganha por hora (R$): "))
    let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês: "))
    let totalSalario = salarioHora * horasTrabalhadas
    alert("O total do salário no mês é: R$ " + totalSalario)
}

/* Exercício 32 - Percentual de Votos: ler o número total de eleitores de um município e o número de votos
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de
eleitores */
function percentualVotos() {
    alert("Cálculo do percentual de votos brancos, nulos e válidos")
    let totalEleitores = parseFloat(prompt("Digite o número total de eleitores: "))
    let votosBrancos = parseFloat(prompt("Digite o número de votos brancos: "))
    let votosNulos = parseFloat(prompt("Digite o número de votos nulos: "))
    let votosValidos = parseFloat(prompt("Digite o número de votos válidos: "))
    let percBrancos = (votosBrancos * 100) / totalEleitores
    let percNulos = (votosNulos * 100) / totalEleitores
    let percValidos = (votosValidos * 100) / totalEleitores
    alert("Percentual de votos brancos: " + percBrancos + "%\nPercentual de votos nulos: " + percNulos + "%\nPercentual de votos válidos: " + percValidos + "%")
}

/* Exercício 33 - Novo Salário com Reajuste: ler o salário mensal atual de um funcionário e o percentual de
reajuste e calcular o valor do novo salário (novoSalario = salarioAtual + (salarioAtual * percentual / 100)) */
function novoSalarioReajuste() {
    alert("Cálculo do novo salário com reajuste")
    let salarioAtual = parseFloat(prompt("Digite o salário atual: "))
    let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste: "))
    let aumento = salarioAtual * percentualReajuste / 100
    let novoSalario = salarioAtual + aumento
    alert("O novo salário, após o reajuste, é: R$ " + novoSalario)
}

/* Exercício 34 - Custo Final do Carro: ler o custo de fábrica de um carro, calcular e escrever o custo final
ao consumidor (percentual do distribuidor de 28% e impostos de 45%, ambos aplicados sobre o custo de fábrica) */
function custoFinalCarro() {
    alert("Cálculo do custo final de um carro novo ao consumidor")
    let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "))
    let percDistribuidor = custoFabrica * 28 / 100
    let percImpostos = custoFabrica * 45 / 100
    let custoFinal = custoFabrica + percDistribuidor + percImpostos
    alert("O custo final ao consumidor é: R$ " + custoFinal)
}

/* Exercício 35 - Salário do Vendedor (Comissão Fixa): ler o número de carros vendidos, o valor total das
vendas, o salário fixo e o valor recebido por carro vendido. Calcular e escrever o salário final do vendedor
(salário fixo + comissão fixa por carro + 5% do valor das vendas) */
function salarioVendedorComissaoFixa() {
    alert("Cálculo do salário final do vendedor de carros usados")
    let numCarrosVendidos = parseFloat(prompt("Digite o número de carros vendidos: "))
    let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas: "))
    let salarioFixo = parseFloat(prompt("Digite o salário fixo: "))
    let valorPorCarro = parseFloat(prompt("Digite o valor recebido por carro vendido: "))
    let comissaoCarros = numCarrosVendidos * valorPorCarro
    let comissaoVendas = valorTotalVendas * 5 / 100
    let salarioFinal = salarioFixo + comissaoCarros + comissaoVendas
    alert("O salário final do vendedor é: R$ " + salarioFinal)
}

/* Exercício 36 - Fahrenheit para Celsius: ler uma temperatura em graus Fahrenheit e calcular o valor
correspondente em graus Celsius (C = 5 * (F - 32) / 9) */
function fahrenheitParaCelsius() {
    alert("Conversão de Fahrenheit para Celsius")
    let f = parseFloat(prompt("Digite a temperatura em graus Fahrenheit: "))
    let c = 5 * (f - 32) / 9
    alert(f + "°F equivale(m) a " + c + "°C")
}

/* Exercício 37 - Média Ponderada (3 Notas): ler três notas de um aluno e calcular a média final ponderada,
considerando pesos 2, 3 e 5 (mediaFinal = (n1*2 + n2*3 + n3*5) / 10) */
function mediaPonderadaTresNotas() {
    alert("Cálculo da média final ponderada (pesos 2, 3 e 5)")
    let n1 = parseFloat(prompt("Digite a primeira nota: "))
    let n2 = parseFloat(prompt("Digite a segunda nota: "))
    let n3 = parseFloat(prompt("Digite a terceira nota: "))
    let mediaFinal = (n1 * 2 + n2 * 3 + n3 * 5) / 10
    alert("A média final ponderada do aluno é: " + mediaFinal)
}

/* Exercício 38 - Área do Círculo (πR²): ler o raio de um círculo, calcular e escrever a sua área (área = π * raio²) */
function areaCirculoRaio() {
    alert("Cálculo da área de um círculo a partir do raio")
    let raio = parseFloat(prompt("Digite o raio do círculo: "))
    let area = Math.PI * (raio * raio)
    alert("A área do círculo é: " + area)
}

/* Exercício 39 - Número de Lâmpadas: ler a potência da lâmpada utilizada (em watts) e as dimensões
(largura e comprimento, em metros) de um cômodo. Calcular o número de lâmpadas necessárias,
considerando 18 watts por metro quadrado */
function numeroLampadas() {
    alert("Cálculo do número de lâmpadas necessárias para um cômodo")
    let potenciaLampada = parseFloat(prompt("Digite a potência da lâmpada (em watts): "))
    let largura = parseFloat(prompt("Digite a largura do cômodo (em metros): "))
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo (em metros): "))
    let potenciaNecessaria = (largura * comprimento) * 18
    let numeroDeLampadas = Math.ceil(potenciaNecessaria / potenciaLampada)
    alert("São necessárias " + numeroDeLampadas + " lâmpada(s)")
}

/* Exercício 40 - Caixas de Azulejos: ler as dimensões de uma cozinha retangular (comprimento, largura e
altura) e calcular a quantidade de caixas de azulejos necessárias para todas as paredes, sabendo que cada
caixa possui 1.5 m² */
function caixasAzulejos() {
    alert("Cálculo da quantidade de caixas de azulejos para uma cozinha")
    let comprimento = parseFloat(prompt("Digite o comprimento da cozinha (em metros): "))
    let largura = parseFloat(prompt("Digite a largura da cozinha (em metros): "))
    let altura = parseFloat(prompt("Digite a altura da cozinha (em metros): "))
    let areaParedes = 2 * (comprimento * altura) + 2 * (largura * altura)
    let caixas = Math.ceil(areaParedes / 1.5)
    alert("São necessárias " + caixas + " caixa(s) de azulejos")
}

/* Exercício 41 - Rendimento do Táxi: ler a marcação do odômetro no início e no fim do dia, o número de
litros de combustível gasto e o valor total recebido dos passageiros. Calcular a média de consumo (km/L)
e o lucro líquido do dia, sabendo que o preço do combustível é R$ 2.90 */
function rendimentoTaxi() {
    alert("Cálculo do rendimento e do lucro líquido de um táxi")
    let odometroInicio = parseFloat(prompt("Digite a marcação do odômetro no início do dia (km): "))
    let odometroFim = parseFloat(prompt("Digite a marcação do odômetro no fim do dia (km): "))
    let litrosGastos = parseFloat(prompt("Digite o número de litros de combustível gastos: "))
    let valorRecebido = parseFloat(prompt("Digite o valor total recebido dos passageiros (R$): "))
    let precoCombustivel = 2.90
    let distanciaPercorrida = odometroFim - odometroInicio
    let consumoMedio = distanciaPercorrida / litrosGastos
    let gastoCombustivel = litrosGastos * precoCombustivel
    let lucroLiquido = valorRecebido - gastoCombustivel
    alert("Consumo médio: " + consumoMedio + " km/L\nLucro líquido do dia: R$ " + lucroLiquido)
}

/* Exercício 42 - Combustível Fórmula 1: ler o comprimento da pista (em metros), o número total de voltas
do grande prêmio, o número de reabastecimentos desejados e o consumo do carro (em km/L). Calcular o
número mínimo de litros necessários para percorrer até o primeiro reabastecimento */
function combustivelF1() {
    alert("Cálculo do número mínimo de litros até o primeiro reabastecimento")
    let comprimentoPista = parseFloat(prompt("Digite o comprimento da pista (em metros): "))
    let totalVoltas = parseFloat(prompt("Digite o número total de voltas do grande prêmio: "))
    let numReabastecimentos = parseFloat(prompt("Digite o número de reabastecimentos desejados: "))
    let consumoKmL = parseFloat(prompt("Digite o consumo do carro (em km/L): "))
    let voltasPorTrecho = totalVoltas / (numReabastecimentos + 1)
    let distanciaTrecho = (voltasPorTrecho * comprimentoPista) / 1000
    let litrosNecessarios = distanciaTrecho / consumoKmL
    alert("São necessários " + litrosNecessarios + " litros até o primeiro reabastecimento")
}

/* Exercício 43 - Maior que 10?: ler um valor e escrever a mensagem "É MAIOR QUE 10!" se o valor lido for
maior que 10, caso contrário, escrever "NÃO É MAIOR QUE 10!" */
function maiorQue10() {
    alert("Verificação se o valor é maior que 10")
    let valor = parseFloat(prompt("Digite um valor: "))
    if (valor > 10) {
        alert("É MAIOR QUE 10!")
    } else {
        alert("NÃO É MAIOR QUE 10!")
    }
}

/* Exercício 44 - Positivo ou Negativo: ler um valor e escrever se ele é positivo ou negativo
(considerar o valor zero como positivo) */
function positivoOuNegativo() {
    alert("Verificação se o valor é positivo ou negativo")
    let valor = parseFloat(prompt("Digite um valor: "))
    if (valor >= 0) {
        alert("O valor " + valor + " é POSITIVO")
    } else {
        alert("O valor " + valor + " é NEGATIVO")
    }
}

/* Exercício 45 - Custo de Maçãs: as maçãs custam R$ 1.30 cada se forem compradas menos de uma dúzia, e
R$ 1.00 cada se forem compradas pelo menos 12. Ler a quantidade comprada e calcular o custo total */
function custoMacas() {
    alert("Cálculo do custo total da compra de maçãs")
    let quantidade = parseFloat(prompt("Digite a quantidade de maçãs compradas: "))
    let precoUnitario
    if (quantidade < 12) {
        precoUnitario = 1.30
    } else {
        precoUnitario = 1.00
    }
    let custoTotal = quantidade * precoUnitario
    alert("O custo total da compra é: R$ " + custoTotal)
}

/* Exercício 46 - Média e Aprovação: ler as notas da 1ª e 2ª avaliações de um aluno, calcular a média
aritmética simples e escrever se o aluno foi ou não aprovado (média igual ou maior que 6.0 é aprovado) */
function mediaAprovacao() {
    alert("Cálculo da média e verificação de aprovação")
    let nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação: "))
    let nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação: "))
    let media = (nota1 + nota2) / 2
    if (media >= 6.0) {
        alert("Média: " + media + "\nAluno APROVADO")
    } else {
        alert("Média: " + media + "\nAluno NÃO APROVADO")
    }
}

/* Exercício 47 - Pode Votar?: ler o ano atual e o ano de nascimento de uma pessoa e escrever se ela poderá
ou não votar este ano (considerando que vota a partir dos 16 anos) */
function podeVotar() {
    alert("Verificação se a pessoa pode votar este ano")
    let anoAtual = parseFloat(prompt("Digite o ano atual: "))
    let anoNascimento = parseFloat(prompt("Digite o ano de nascimento da pessoa: "))
    let idade = anoAtual - anoNascimento
    if (idade >= 16) {
        alert("A pessoa poderá votar este ano")
    } else {
        alert("A pessoa não poderá votar este ano")
    }
}

/* Exercício 48 - Maior de Dois Valores: ler dois valores (não serão lidos valores iguais) e escrever o
maior deles */
function maiorDeDois() {
    alert("Cálculo do maior entre dois valores")
    let valor1 = parseFloat(prompt("Digite o primeiro valor: "))
    let valor2 = parseFloat(prompt("Digite o segundo valor: "))
    if (valor1 > valor2) {
        alert("O maior valor é: " + valor1)
    } else {
        alert("O maior valor é: " + valor2)
    }
}

/* Exercício 49 - Ordem Crescente (2 valores): ler dois valores (não serão lidos valores iguais) e
escrevê-los em ordem crescente */
function ordemCrescenteDois() {
    alert("Escrita de dois valores em ordem crescente")
    let valor1 = parseFloat(prompt("Digite o primeiro valor: "))
    let valor2 = parseFloat(prompt("Digite o segundo valor: "))
    if (valor1 < valor2) {
        alert("Ordem crescente: " + valor1 + ", " + valor2)
    } else {
        alert("Ordem crescente: " + valor2 + ", " + valor1)
    }
}

/* Exercício 50 - Duração do Jogo de Xadrez: ler a hora de início e a hora de fim de um jogo de xadrez
(horas inteiras), sabendo que a duração máxima é de 24 horas e que o jogo pode iniciar em um dia e
terminar no dia seguinte. Calcular a duração do jogo em horas */
function duracaoJogoXadrez() {
    alert("Cálculo da duração de um jogo de xadrez")
    let horaInicio = parseFloat(prompt("Digite a hora de início do jogo (0 a 23): "))
    let horaFim = parseFloat(prompt("Digite a hora de fim do jogo (0 a 23): "))
    let duracao
    if (horaFim >= horaInicio) {
        duracao = horaFim - horaInicio
    } else {
        duracao = (24 - horaInicio) + horaFim
    }
    alert("A duração do jogo foi de " + duracao + " hora(s)")
}

/* Exercício 51 - Salário com Hora Extra: ler o número de horas trabalhadas em um mês (4 semanas de 40h)
e o salário por hora. Horas que ultrapassarem as 160 horas mensais são pagas com acréscimo de 50%.
Calcular e escrever o salário total do funcionário */
function salarioComHoraExtra() {
    alert("Cálculo do salário com hora extra")
    let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês: "))
    let salarioHora = parseFloat(prompt("Digite o valor da hora regular (R$): "))
    let jornadaMensal = 40 * 4
    let salarioTotal
    if (horasTrabalhadas > jornadaMensal) {
        let horasExtras = horasTrabalhadas - jornadaMensal
        let valorHoraExtra = salarioHora * 1.5
        salarioTotal = (jornadaMensal * salarioHora) + (horasExtras * valorHoraExtra)
    } else {
        salarioTotal = horasTrabalhadas * salarioHora
    }
    alert("O salário total do funcionário é: R$ " + salarioTotal)
}

/* Exercício 52 - Peso Ideal (Algoritmo Corrigido): o algoritmo original do enunciado não lia a altura da
pessoa antes de calcular o peso ideal. Esta versão corrige o erro lendo o nome, o sexo (M ou F) e a altura,
calculando o peso ideal:
- para sexo masculino: peso ideal = (72.7 * altura) - 58
- para sexo feminino: peso ideal = (62.1 * altura) - 44.7 */
function pesoIdealCorrigido() {
    alert("Cálculo do peso ideal (versão corrigida do algoritmo com erros)")
    let nome = prompt("Digite o nome da pessoa: ")
    let sexo = prompt("Digite o sexo (M ou F): ").toUpperCase()
    let altura = parseFloat(prompt("Digite a altura da pessoa (em metros): "))
    let pesoIdeal
    if (sexo === "M") {
        pesoIdeal = (72.7 * altura) - 58
    } else {
        pesoIdeal = (62.1 * altura) - 44.7
    }
    alert("O peso ideal de " + nome + " é: " + pesoIdeal + " kg")
}

/* Exercício 53 - Salário com Comissão Progressiva: ler o salário fixo e o valor das vendas efetuadas pelo
vendedor. Ele recebe 3% de comissão sobre o total das vendas até R$ 1.500,00, mais 5% sobre o que
ultrapassar este valor. Calcular e escrever o salário total */
function salarioComissaoProgressiva() {
    alert("Cálculo do salário total com comissão progressiva")
    let salarioFixo = parseFloat(prompt("Digite o salário fixo: "))
    let valorVendas = parseFloat(prompt("Digite o valor total das vendas: "))
    let comissao
    if (valorVendas <= 1500) {
        comissao = valorVendas * 3 / 100
    } else {
        comissao = (1500 * 3 / 100) + ((valorVendas - 1500) * 5 / 100)
    }
    let salarioTotal = salarioFixo + comissao
    alert("O salário total do vendedor é: R$ " + salarioTotal)
}

/* Exercício 54 - Saldo Bancário: ler o número da conta, o saldo, o débito e o crédito de um cliente.
Calcular o saldo atual (saldo atual = saldo - débito + crédito) e escrever "Saldo Positivo" ou
"Saldo Negativo" */
function saldoBancario() {
    alert("Cálculo do saldo atual de uma conta bancária")
    let numeroConta = prompt("Digite o número da conta: ")
    let saldo = parseFloat(prompt("Digite o saldo: "))
    let debito = parseFloat(prompt("Digite o débito: "))
    let credito = parseFloat(prompt("Digite o crédito: "))
    let saldoAtual = saldo - debito + credito
    if (saldoAtual >= 0) {
        alert("Conta " + numeroConta + " - Saldo atual: " + saldoAtual + "\nSaldo Positivo")
    } else {
        alert("Conta " + numeroConta + " - Saldo atual: " + saldoAtual + "\nSaldo Negativo")
    }
}

/* Exercício 55 - Controle de Estoque: ler a quantidade atual, a quantidade máxima e a quantidade mínima
em estoque de um produto. Calcular a quantidade média ((máxima + mínima) / 2) e escrever
"Não efetuar compra" se a quantidade atual for maior ou igual à média, senão "Efetuar compra" */
function controleEstoque() {
    alert("Verificação da necessidade de compra de um produto")
    let qtdAtual = parseFloat(prompt("Digite a quantidade atual em estoque: "))
    let qtdMaxima = parseFloat(prompt("Digite a quantidade máxima em estoque: "))
    let qtdMinima = parseFloat(prompt("Digite a quantidade mínima em estoque: "))
    let qtdMedia = (qtdMaxima + qtdMinima) / 2
    if (qtdAtual >= qtdMedia) {
        alert("Quantidade média: " + qtdMedia + "\nNão efetuar compra")
    } else {
        alert("Quantidade média: " + qtdMedia + "\nEfetuar compra")
    }
}

/* Exercício 56 - Positivo, Negativo ou Zero: ler um valor e escrever se ele é positivo, negativo ou zero */
function positivoNegativoZero() {
    alert("Verificação se o valor é positivo, negativo ou zero")
    let valor = parseFloat(prompt("Digite um valor: "))
    if (valor > 0) {
        alert("O valor é POSITIVO")
    } else if (valor < 0) {
        alert("O valor é NEGATIVO")
    } else {
        alert("O valor é ZERO")
    }
}

/* Exercício 57 - Maior de Três Valores: ler três valores (não serão informados valores iguais) e
escrever o maior deles */
function maiorDeTres() {
    alert("Cálculo do maior entre três valores")
    let a = parseFloat(prompt("Digite o primeiro valor: "))
    let b = parseFloat(prompt("Digite o segundo valor: "))
    let c = parseFloat(prompt("Digite o terceiro valor: "))
    let maior
    if (a > b && a > c) {
        maior = a
    } else if (b > a && b > c) {
        maior = b
    } else {
        maior = c
    }
    alert("O maior valor é: " + maior)
}

/* Exercício 58 - Soma dos Dois Maiores: ler três valores (não serão informados valores iguais) e
escrever a soma dos dois maiores */
function somaDoisMaiores() {
    alert("Cálculo da soma dos dois maiores valores entre três")
    let a = parseFloat(prompt("Digite o primeiro valor: "))
    let b = parseFloat(prompt("Digite o segundo valor: "))
    let c = parseFloat(prompt("Digite o terceiro valor: "))
    let menor
    if (a < b && a < c) {
        menor = a
    } else if (b < a && b < c) {
        menor = b
    } else {
        menor = c
    }
    let soma = (a + b + c) - menor
    alert("A soma dos dois maiores valores é: " + soma)
}

/* Exercício 59 - Ordem Crescente (3 valores): ler três valores (não serão informados valores iguais) e
escrevê-los em ordem crescente */
function ordemCrescenteTres() {
    alert("Escrita de três valores em ordem crescente")
    let a = parseFloat(prompt("Digite o primeiro valor: "))
    let b = parseFloat(prompt("Digite o segundo valor: "))
    let c = parseFloat(prompt("Digite o terceiro valor: "))
    let valores = [a, b, c]
    valores.sort(function (x, y) { return x - y })
    alert("Ordem crescente: " + valores[0] + ", " + valores[1] + ", " + valores[2])
}

/* Exercício 60 - Verifica Triângulo: ler três valores (A, B e C) representando as medidas dos lados de um
triângulo e escrever se eles formam ou não um triângulo (cada lado deve ser menor que a soma dos outros
dois) */
function verificaTriangulo() {
    alert("Verificação se três medidas formam um triângulo")
    let a = parseFloat(prompt("Digite a medida do lado A: "))
    let b = parseFloat(prompt("Digite a medida do lado B: "))
    let c = parseFloat(prompt("Digite a medida do lado C: "))
    if (a < b + c && b < a + c && c < a + b) {
        alert("Os valores formam um triângulo")
    } else {
        alert("Os valores NÃO formam um triângulo")
    }
}

/* Exercício 61 - Vencedor da Partida: ler o nome de dois times e o número de gols marcados na partida por
cada um deles. Escrever o nome do vencedor ou "EMPATE" caso não haja vencedor */
function vencedorPartida() {
    alert("Verificação do vencedor de uma partida")
    let time1 = prompt("Digite o nome do primeiro time: ")
    let golsTime1 = parseFloat(prompt("Digite o número de gols do " + time1 + ": "))
    let time2 = prompt("Digite o nome do segundo time: ")
    let golsTime2 = parseFloat(prompt("Digite o número de gols do " + time2 + ": "))
    if (golsTime1 > golsTime2) {
        alert("O vencedor é: " + time1)
    } else if (golsTime2 > golsTime1) {
        alert("O vencedor é: " + time2)
    } else {
        alert("EMPATE")
    }
}

/* Exercício 62 - Compara Dois Valores: ler dois valores e imprimir "Números iguais", "Primeiro é maior" ou
"Segundo maior", conforme o caso */
function comparaDoisValores() {
    alert("Comparação entre dois valores")
    let valor1 = parseFloat(prompt("Digite o primeiro valor: "))
    let valor2 = parseFloat(prompt("Digite o segundo valor: "))
    if (valor1 === valor2) {
        alert("Números iguais")
    } else if (valor1 > valor2) {
        alert("Primeiro é maior")
    } else {
        alert("Segundo maior")
    }
}

/* Exercício 63 - Teste de Mesa (Z): ler X e Y, calcular Z = (X * Y) + 5 e definir a Resposta:
"A" se Z <= 0, "B" se Z <= 100, ou "C" caso contrário */
function testeMesaZ() {
    alert("Teste de mesa: cálculo de Z e Resposta")
    let x = parseFloat(prompt("Digite o valor de X: "))
    let y = parseFloat(prompt("Digite o valor de Y: "))
    let z = (x * y) + 5
    let resposta
    if (z <= 0) {
        resposta = "A"
    } else if (z <= 100) {
        resposta = "B"
    } else {
        resposta = "C"
    }
    alert("Z = " + z + "\nResposta = " + resposta)
}

/* Exercício 64 - Desconto Combustível: ler o número de litros vendidos e o tipo de combustível
(A-álcool, G-gasolina). Álcool: até 20L desconto de 3%, acima de 20L desconto de 5% (preço R$ 2.90/L).
Gasolina: até 20L desconto de 4%, acima de 20L desconto de 6% (preço R$ 3.30/L). Calcular o valor a pagar */
function descontoCombustivel() {
    alert("Cálculo do valor a pagar por combustível com desconto")
    let litros = parseFloat(prompt("Digite o número de litros vendidos: "))
    let tipo = prompt("Digite o tipo de combustível (A-álcool, G-gasolina): ").toUpperCase()
    let precoLitro, percentualDesconto
    if (tipo === "A") {
        precoLitro = 2.90
        percentualDesconto = litros <= 20 ? 3 : 5
    } else {
        precoLitro = 3.30
        percentualDesconto = litros <= 20 ? 4 : 6
    }
    let valorBruto = litros * precoLitro
    let desconto = valorBruto * percentualDesconto / 100
    let valorAPagar = valorBruto - desconto
    alert("Valor a pagar: R$ " + valorAPagar)
}

/* Exercício 65 - Idades (Homens e Mulheres): ler as idades de 2 homens e de 2 mulheres (idades sempre
diferentes entre si). Calcular e escrever a soma das idades do homem mais velho com a mulher mais nova,
e o produto das idades do homem mais novo com a mulher mais velha */
function idadesHomensMulheres() {
    alert("Cálculo com as idades de dois homens e duas mulheres")
    let homem1 = parseFloat(prompt("Digite a idade do primeiro homem: "))
    let homem2 = parseFloat(prompt("Digite a idade do segundo homem: "))
    let mulher1 = parseFloat(prompt("Digite a idade da primeira mulher: "))
    let mulher2 = parseFloat(prompt("Digite a idade da segunda mulher: "))
    let homemMaisVelho = homem1 > homem2 ? homem1 : homem2
    let homemMaisNovo = homem1 < homem2 ? homem1 : homem2
    let mulherMaisVelha = mulher1 > mulher2 ? mulher1 : mulher2
    let mulherMaisNova = mulher1 < mulher2 ? mulher1 : mulher2
    let soma = homemMaisVelho + mulherMaisNova
    let produto = homemMaisNovo * mulherMaisVelha
    alert("Soma (homem mais velho + mulher mais nova): " + soma + "\nProduto (homem mais novo * mulher mais velha): " + produto)
}

/* Exercício 66 - Preço de Frutas: ler a quantidade (em Kg) de morangos e de maçãs adquiridas. Até 5 Kg, o
morango custa R$ 2.50/Kg e a maçã R$ 1.80/Kg; acima de 5 Kg, R$ 2.20/Kg e R$ 1.50/Kg, respectivamente.
Se a compra ultrapassar 8 Kg no total ou R$ 25.00, aplicar 10% de desconto sobre o total */
function precoFrutas() {
    alert("Cálculo do valor a pagar em uma compra de frutas")
    let kgMorango = parseFloat(prompt("Digite a quantidade de morangos (em Kg): "))
    let kgMaca = parseFloat(prompt("Digite a quantidade de maçãs (em Kg): "))
    let precoMorango = kgMorango <= 5 ? 2.50 : 2.20
    let precoMaca = kgMaca <= 5 ? 1.80 : 1.50
    let total = (kgMorango * precoMorango) + (kgMaca * precoMaca)
    let kgTotal = kgMorango + kgMaca
    if (kgTotal > 8 || total > 25) {
        total = total - (total * 10 / 100)
    }
    alert("O valor a pagar pelo cliente é: R$ " + total)
}

/* Exercício 67 - Login de Usuário: ler um código de usuário (válido = 1234). Se for diferente, mostrar
"Usuário inválido!". Caso contrário, ler a senha (válida = 9999) e mostrar "senha incorreta" ou
"Acesso permitido" */
function loginUsuario() {
    alert("Verificação de login de usuário")
    let codigo = parseFloat(prompt("Digite o código do usuário: "))
    if (codigo !== 1234) {
        alert("Usuário inválido!")
    } else {
        let senha = parseFloat(prompt("Digite a senha: "))
        if (senha !== 9999) {
            alert("senha incorreta")
        } else {
            alert("Acesso permitido")
        }
    }
}

/* Exercício 68 - Região de Procedência: ler o código de origem de um produto e escrever a região de
procedência: 1-Sul, 2-Norte, 3-Leste, 4-Oeste, 5 ou 6-Nordeste, 7, 8 ou 9-Sudeste, 10-Centro-Oeste,
11-Noroeste. Qualquer outro código é considerado "Importado" */
function regiaoProcedencia() {
    alert("Identificação da região de procedência de um produto")
    let codigo = parseFloat(prompt("Digite o código de origem do produto: "))
    let regiao
    if (codigo === 1) {
        regiao = "Sul"
    } else if (codigo === 2) {
        regiao = "Norte"
    } else if (codigo === 3) {
        regiao = "Leste"
    } else if (codigo === 4) {
        regiao = "Oeste"
    } else if (codigo === 5 || codigo === 6) {
        regiao = "Nordeste"
    } else if (codigo === 7 || codigo === 8 || codigo === 9) {
        regiao = "Sudeste"
    } else if (codigo === 10) {
        regiao = "Centro-Oeste"
    } else if (codigo === 11) {
        regiao = "Noroeste"
    } else {
        regiao = "Importado"
    }
    alert("Região de procedência: " + regiao)
}

/* Exercício 69 - Média com Optativa: ler as notas das duas avaliações normais e a nota da avaliação
optativa (-1 caso o aluno não a tenha feito). A optativa substitui a nota mais baixa entre as duas primeiras.
Calcular a média do semestre e escrever se o aluno está Aprovado (média >= 6.0), Reprovado (média < 3.0)
ou em Exame (3.0 <= média < 6.0) */
function mediaComOptativa() {
    alert("Cálculo da média do semestre considerando a nota optativa")
    let nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação: "))
    let nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação: "))
    let notaOptativa = parseFloat(prompt("Digite a nota da avaliação optativa (-1 se não realizada): "))
    if (notaOptativa !== -1) {
        if (nota1 < nota2) {
            nota1 = notaOptativa
        } else {
            nota2 = notaOptativa
        }
    }
    let media = (nota1 + nota2) / 2
    let situacao
    if (media >= 6.0) {
        situacao = "Aprovado"
    } else if (media < 3.0) {
        situacao = "Reprovado"
    } else {
        situacao = "Exame"
    }
    alert("Média do semestre: " + media + "\nSituação: " + situacao)
}

/* Exercício 70 - Média Semestral - Aprovado: ler as notas das duas avaliações de um aluno no semestre,
calcular a média semestral e escrever a mensagem "PARABÉNS! Você foi aprovado!" somente se a média
for igual ou maior que 6.0 */
function mediaSemestralAprovado() {
    alert("Cálculo da média semestral")
    let nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação: "))
    let nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação: "))
    let media = (nota1 + nota2) / 2
    let mensagem = "Média semestral: " + media
    if (media >= 6.0) {
        mensagem += "\nPARABÉNS! Você foi aprovado!"
    }
    alert(mensagem)
}

/* Exercício 71 - Média Semestral Completa: igual ao exercício anterior, acrescentando a mensagem
"Você foi REPROVADO! Estude mais..." caso a média calculada seja menor que 6.0 */
function mediaSemestralCompleta() {
    alert("Cálculo da média semestral com mensagem de aprovação ou reprovação")
    let nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação: "))
    let nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação: "))
    let media = (nota1 + nota2) / 2
    if (media >= 6.0) {
        alert("Média semestral: " + media + "\nPARABÉNS! Você foi aprovado!")
    } else {
        alert("Média semestral: " + media + "\nVocê foi REPROVADO! Estude mais...")
    }
}

/* Exercício 72 - Valida Senha: verificar a validade de uma senha fornecida pelo usuário. A senha válida é
1234. Escrever "ACESSO PERMITIDO" se for válida, ou "ACESSO NEGADO" caso contrário */
function validaSenhaSimples() {
    alert("Validação de senha")
    let senha = parseFloat(prompt("Digite a senha: "))
    if (senha === 1234) {
        alert("ACESSO PERMITIDO")
    } else {
        alert("ACESSO NEGADO")
    }
}

/* Exercício 73 - Peso Ideal (Altura e Sexo): ler a altura e o sexo (1-feminino, 2-masculino) de uma pessoa e
calcular o peso ideal:
- para homens: (72.7 * altura) - 58
- para mulheres: (62.1 * altura) - 44.7 */
function pesoIdealAlturaSexo() {
    alert("Cálculo do peso ideal a partir da altura e do sexo")
    let altura = parseFloat(prompt("Digite a altura (em metros): "))
    let sexo = parseFloat(prompt("Digite o sexo (1-feminino, 2-masculino): "))
    let pesoIdeal
    if (sexo === 2) {
        pesoIdeal = (72.7 * altura) - 58
    } else {
        pesoIdeal = (62.1 * altura) - 44.7
    }
    alert("O peso ideal é: " + pesoIdeal + " kg")
}

/* Exercício 74 - Par ou Ímpar: ler um número inteiro positivo e escrever se ele é par ou ímpar */
function parOuImpar() {
    alert("Verificação se um número é par ou ímpar")
    let numero = parseInt(prompt("Digite um número inteiro positivo: "))
    if (numero % 2 === 0) {
        alert("O número " + numero + " é PAR")
    } else {
        alert("O número " + numero + " é ÍMPAR")
    }
}

/* Exercício 75 - Polígono Regular: ler o número de lados (3, 4 ou 5) e a medida do lado (em cm) de um
polígono regular. Se 3 lados, escrever TRIÂNGULO e o perímetro; se 4 lados, escrever QUADRADO e a área;
se 5 lados, escrever PENTÁGONO */
function poligonoRegular() {
    alert("Identificação de um polígono regular e cálculo de perímetro/área")
    let numeroLados = parseInt(prompt("Digite o número de lados (3, 4 ou 5): "))
    let lado = parseFloat(prompt("Digite a medida do lado (em cm): "))
    if (numeroLados === 3) {
        let perimetro = 3 * lado
        alert("TRIÂNGULO\nPerímetro: " + perimetro + " cm")
    } else if (numeroLados === 4) {
        let area = lado * lado
        alert("QUADRADO\nÁrea: " + area + " cm²")
    } else {
        alert("PENTÁGONO")
    }
}

/* Exercício 76 - Polígono (Completo): igual ao exercício anterior, acrescentando "NÃO É UM POLÍGONO" se o
número de lados for inferior a 3, e "POLÍGONO NÃO IDENTIFICADO" se for superior a 5 */
function poligonoCompleto() {
    alert("Identificação de polígono, incluindo casos inválidos")
    let numeroLados = parseInt(prompt("Digite o número de lados: "))
    let lado = parseFloat(prompt("Digite a medida do lado (em cm): "))
    if (numeroLados < 3) {
        alert("NÃO É UM POLÍGONO")
    } else if (numeroLados === 3) {
        let perimetro = 3 * lado
        alert("TRIÂNGULO\nPerímetro: " + perimetro + " cm")
    } else if (numeroLados === 4) {
        let area = lado * lado
        alert("QUADRADO\nÁrea: " + area + " cm²")
    } else if (numeroLados === 5) {
        alert("PENTÁGONO")
    } else {
        alert("POLÍGONO NÃO IDENTIFICADO")
    }
}

/* Exercício 77 - Calculadora de Operações: ler dois valores inteiros e uma operação (1-Adição,
2-Subtração, 3-Divisão, 4-Multiplicação). Calcular e escrever o resultado dessa operação */
function calculadoraOperacoes() {
    alert("Calculadora de operações entre dois valores")
    let valor1 = parseFloat(prompt("Digite o primeiro valor: "))
    let valor2 = parseFloat(prompt("Digite o segundo valor: "))
    let operacao = parseInt(prompt("Digite a operação (1-Adição, 2-Subtração, 3-Divisão, 4-Multiplicação): "))
    let resultado
    if (operacao === 1) {
        resultado = valor1 + valor2
    } else if (operacao === 2) {
        resultado = valor1 - valor2
    } else if (operacao === 3) {
        resultado = valor1 / valor2
    } else {
        resultado = valor1 * valor2
    }
    alert("O resultado da operação é: " + resultado)
}

/* Exercício 78 - Ordem Decrescente (3 valores): ler três valores e escrevê-los em ordem decrescente
(o usuário não informará valores iguais) */
function ordemDecrescenteTres() {
    alert("Escrita de três valores em ordem decrescente")
    let a = parseFloat(prompt("Digite o primeiro valor: "))
    let b = parseFloat(prompt("Digite o segundo valor: "))
    let c = parseFloat(prompt("Digite o terceiro valor: "))
    let valores = [a, b, c]
    valores.sort(function (x, y) { return y - x })
    alert("Ordem decrescente: " + valores[0] + ", " + valores[1] + ", " + valores[2])
}

/* Exercício 79 - Tipo de Triângulo (Lados): ler as medidas dos lados de um triângulo e escrever se ele é
Equilátero (3 lados iguais), Isósceles (2 lados iguais) ou Escaleno (3 lados diferentes) */
function tipoTrianguloLados() {
    alert("Classificação de um triângulo de acordo com seus lados")
    let a = parseFloat(prompt("Digite a medida do lado A: "))
    let b = parseFloat(prompt("Digite a medida do lado B: "))
    let c = parseFloat(prompt("Digite a medida do lado C: "))
    if (a === b && b === c) {
        alert("Triângulo Equilátero")
    } else if (a === b || b === c || a === c) {
        alert("Triângulo Isósceles")
    } else {
        alert("Triângulo Escaleno")
    }
}

/* Exercício 80 - Tipo de Triângulo (Ângulos): ler o valor de 3 ângulos de um triângulo e escrever se ele é
Acutângulo (3 ângulos menores que 90º), Retângulo (um ângulo igual a 90º) ou Obtusângulo
(um ângulo maior que 90º) */
function tipoTrianguloAngulos() {
    alert("Classificação de um triângulo de acordo com seus ângulos")
    let anguloA = parseFloat(prompt("Digite o valor do primeiro ângulo: "))
    let anguloB = parseFloat(prompt("Digite o valor do segundo ângulo: "))
    let anguloC = parseFloat(prompt("Digite o valor do terceiro ângulo: "))
    if (anguloA === 90 || anguloB === 90 || anguloC === 90) {
        alert("Triângulo Retângulo")
    } else if (anguloA > 90 || anguloB > 90 || anguloC > 90) {
        alert("Triângulo Obtusângulo")
    } else {
        alert("Triângulo Acutângulo")
    }
}

/* Exercício 81 - Operadores Lógicos: para A = V (verdadeiro), B = V (verdadeiro) e C = F (falso), avaliar as
expressões lógicas:
a) A ou (C e não B)
b) (A ou B) e (A e C) */
function operadoresLogicos() {
    alert("Avaliação de expressões lógicas para A = V, B = V e C = F")
    let a = true
    let b = true
    let c = false
    let resultadoA = a || (c && !b)
    let resultadoB = (a || b) && (a && c)
    alert("a) A ou (C e não B) = " + resultadoA + "\nb) (A ou B) e (A e C) = " + resultadoB)
}

/* Exercício 82 - Desconto por Quantidade: ler a descrição (nome), a quantidade adquirida e o preço
unitário de um produto. Calcular o total (quantidade * preço unitário), o desconto e o total a pagar
(total - desconto), sabendo que: até 5 unidades o desconto é 2%, de 6 a 10 unidades é 3%, e acima de
10 unidades é 5% */
function descontoPorQuantidade() {
    alert("Cálculo do total a pagar com desconto por quantidade")
    let nomeProduto = prompt("Digite a descrição do produto: ")
    let quantidade = parseFloat(prompt("Digite a quantidade adquirida: "))
    let precoUnitario = parseFloat(prompt("Digite o preço unitário: "))
    let total = quantidade * precoUnitario
    let percentualDesconto
    if (quantidade <= 5) {
        percentualDesconto = 2
    } else if (quantidade > 5 && quantidade <= 10) {
        percentualDesconto = 3
    } else {
        percentualDesconto = 5
    }
    let desconto = total * percentualDesconto / 100
    let totalAPagar = total - desconto
    alert("Produto: " + nomeProduto + "\nTotal: R$ " + total + "\nDesconto: R$ " + desconto + "\nTotal a pagar: R$ " + totalAPagar)
}

/* Exercício 83 - Conceito do Aluno: ler as três notas obtidas por um aluno nas verificações e a média dos
exercícios. Calcular a média de aproveitamento ((N1 + N2*2 + N3*3 + Média_dos_Exercícios) / 7) e
escrever o conceito: A (>= 9.0), B (>= 7.5 e < 9.0), C (>= 6.0 e < 7.5) ou D (< 6.0) */
function conceitoAluno() {
    alert("Cálculo do conceito do aluno a partir da média de aproveitamento")
    let n1 = parseFloat(prompt("Digite a nota da 1ª verificação: "))
    let n2 = parseFloat(prompt("Digite a nota da 2ª verificação: "))
    let n3 = parseFloat(prompt("Digite a nota da 3ª verificação: "))
    let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios: "))
    let mediaAproveitamento = (n1 + (n2 * 2) + (n3 * 3) + mediaExercicios) / 7
    let conceito
    if (mediaAproveitamento >= 9.0) {
        conceito = "A"
    } else if (mediaAproveitamento >= 7.5) {
        conceito = "B"
    } else if (mediaAproveitamento >= 6.0) {
        conceito = "C"
    } else {
        conceito = "D"
    }
    alert("Média de aproveitamento: " + mediaAproveitamento + "\nConceito: " + conceito)
}

/* Exercício 84 - Verifica Aposentadoria: ler o ano atual, o código do empregado, o ano de nascimento e o
ano de ingresso na empresa. Calcular a idade e o tempo de trabalho do empregado e escrever
"Requerer aposentadoria" se ele tiver no mínimo 65 anos, OU no mínimo 30 anos de trabalho, OU no
mínimo 60 anos de idade e 25 anos de trabalho. Caso contrário, escrever "Não requerer aposentadoria" */
function verificaAposentadoria() {
    alert("Verificação da qualificação para aposentadoria")
    let anoAtual = parseFloat(prompt("Digite o ano atual: "))
    let codigo = prompt("Digite o código do empregado: ")
    let anoNascimento = parseFloat(prompt("Digite o ano de nascimento do empregado: "))
    let anoIngresso = parseFloat(prompt("Digite o ano de ingresso na empresa: "))
    let idade = anoAtual - anoNascimento
    let tempoTrabalho = anoAtual - anoIngresso
    let mensagem
    if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
        mensagem = "Requerer aposentadoria"
    } else {
        mensagem = "Não requerer aposentadoria"
    }
    alert("Empregado: " + codigo + "\nIdade: " + idade + " anos\nTempo de trabalho: " + tempoTrabalho + " anos\n" + mensagem)
}

/* =====================================================================================
              EXERCÍCIOS EXTRAS — (soma, subtração, área do quadrado, etc.)
   ===================================================================================== */

/* ------------------------- MÓDULO 1 — Variáveis e Operadores ------------------------- */

/* M1 - Padaria: ler a quantidade de pães franceses comprados (R$ 0,75 cada) e exibir o
valor total a ser pago (total = quantidade * 0.75) */
function valorPaes() {
    alert("Cálculo do valor total da compra de pães franceses")
    let quantidade = parseInt(prompt("Digite a quantidade de pães comprados: "))
    let precoUnitario = 0.75
    let total = quantidade * precoUnitario
    alert("O valor total a pagar é: R$ " + total.toFixed(2))
}

/* M1 - Sucessor: ler um número inteiro e mostrar o seu sucessor (sucessor = valor + 1) */
function sucessorValor() {
    alert("Cálculo do sucessor de um valor")
    let valor = parseInt(prompt("Digite um número inteiro: "))
    let sucessor = valor + 1
    alert("O sucessor de " + valor + " é: " + sucessor)
}

/* M1 - Idade da pessoa: ler a idade de uma pessoa e exibir o valor informado */
function exibeIdade() {
    alert("Leitura e exibição da idade de uma pessoa")
    let idade = parseInt(prompt("Digite a idade da pessoa: "))
    alert("A idade informada foi: " + idade + " ano(s)")
}

/* M1 - Quilômetros para metros: ler uma distância em quilômetros e convertê-la para
metros (metros = quilometros * 1000) */
function quilometrosParaMetros() {
    alert("Conversão de quilômetros para metros")
    let km = parseFloat(prompt("Digite a distância em quilômetros: "))
    let metros = km * 1000
    alert(km + " km equivale(m) a " + metros + " metros")
}

/* ----------------------------- MÓDULO 2 — If e Else ----------------------------- */

/* M2 - CNH: ler a idade de uma pessoa e informar se ela já pode iniciar o processo de
obtenção da CNH (idade mínima de 18 anos) */
function podeTirarCNH() {
    alert("Verificação da idade mínima para tirar a CNH")
    let idade = parseInt(prompt("Digite a idade da pessoa: "))
    if (idade >= 18) {
        alert("A pessoa já pode iniciar o processo para obtenção da CNH")
    } else {
        alert("A pessoa ainda NÃO pode tirar a CNH (idade mínima: 18 anos)")
    }
}

/* M2 - Múltiplo de 5: ler um número inteiro e informar se ele é múltiplo de 5
(múltiplo quando o resto da divisão por 5 é zero) */
function multiploDeCinco() {
    alert("Verificação se um número é múltiplo de 5")
    let numero = parseInt(prompt("Digite um número inteiro: "))
    if (numero % 5 === 0) {
        alert("O número " + numero + " é MÚLTIPLO de 5")
    } else {
        alert("O número " + numero + " NÃO é múltiplo de 5")
    }
}

/* M2 - Ano bissexto: ler um ano e informar se ele é bissexto. Um ano é bissexto quando é
divisível por 4 e não por 100, ou quando é divisível por 400 */
function anoBissexto() {
    alert("Verificação se um ano é bissexto")
    let ano = parseInt(prompt("Digite um ano: "))
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        alert("O ano " + ano + " é BISSEXTO")
    } else {
        alert("O ano " + ano + " NÃO é bissexto")
    }
}

/* M2 - Valida sexo (M/F): ler uma letra e validar se ela corresponde a M (masculino) ou
F (feminino), informando entrada inválida nos demais casos */
function validaSexo() {
    alert("Validação da entrada do sexo (M ou F)")
    let letra = prompt("Digite o sexo (M ou F): ").toUpperCase()
    if (letra === "M") {
        alert("Sexo: Masculino")
    } else if (letra === "F") {
        alert("Sexo: Feminino")
    } else {
        alert("Entrada inválida! Digite apenas M ou F")
    }
}

/* M2 - Entre 10 e 100: ler um número e informar se ele está dentro da faixa entre 10 e
100 (inclusive) */
function entreDezECem() {
    alert("Verificação se o número está entre 10 e 100")
    let numero = parseFloat(prompt("Digite um número: "))
    if (numero >= 10 && numero <= 100) {
        alert("O número " + numero + " ESTÁ entre 10 e 100")
    } else {
        alert("O número " + numero + " NÃO está entre 10 e 100")
    }
}

/* M2 - Multa por velocidade: ler a velocidade de um veículo e informar se o motorista foi
multado, considerando o limite máximo de 60 km/h */
function verificaMulta() {
    alert("Verificação de multa por excesso de velocidade (limite 60 km/h)")
    let velocidade = parseFloat(prompt("Digite a velocidade do veículo (km/h): "))
    if (velocidade > 60) {
        alert("Motorista MULTADO! Velocidade: " + velocidade + " km/h (limite 60 km/h)")
    } else {
        alert("Dentro do limite. Velocidade: " + velocidade + " km/h")
    }
}

/* M2 - Menor de três: ler três números e informar qual deles é o menor */
function menorDeTres() {
    alert("Cálculo do menor entre três valores")
    let a = parseFloat(prompt("Digite o primeiro valor: "))
    let b = parseFloat(prompt("Digite o segundo valor: "))
    let c = parseFloat(prompt("Digite o terceiro valor: "))
    let menor = a
    if (b < menor) {
        menor = b
    }
    if (c < menor) {
        menor = c
    }
    alert("O menor valor é: " + menor)
}

/* M2 - Frete grátis: ler o valor total da compra e informar se o cliente recebe frete
grátis (compras acima de R$ 200,00) */
function freteGratis() {
    alert("Verificação de direito a frete grátis (acima de R$ 200,00)")
    let valor = parseFloat(prompt("Digite o valor total da compra: "))
    if (valor > 200) {
        alert("Parabéns! Você tem direito a FRETE GRÁTIS")
    } else {
        alert("Compra de R$ " + valor.toFixed(2) + " não atinge o valor mínimo para frete grátis")
    }
}

/* M2 - Classificação de temperatura: ler uma temperatura e informar se ela é considerada
fria (< 15°C), agradável (15°C a 25°C) ou quente (> 25°C) */
function classificaTemperatura() {
    alert("Classificação de uma temperatura (fria, agradável ou quente)")
    let temperatura = parseFloat(prompt("Digite a temperatura (°C): "))
    if (temperatura < 15) {
        alert(temperatura + "°C — Temperatura FRIA")
    } else if (temperatura <= 25) {
        alert(temperatura + "°C — Temperatura AGRADÁVEL")
    } else {
        alert(temperatura + "°C — Temperatura QUENTE")
    }
}

/* --------------------------- MÓDULO 3 — If, Elif e Else --------------------------- */

/* M3 - Conceito por nota: ler uma nota (0 a 100) e informar o conceito obtido:
A (>= 90), B (>= 80), C (>= 70), D (>= 60) ou F (< 60) */
function conceitoNota() {
    alert("Atribuição de conceito (A, B, C, D ou F) a partir da nota")
    let nota = parseFloat(prompt("Digite a nota (0 a 100): "))
    let conceito
    if (nota >= 90) {
        conceito = "A"
    } else if (nota >= 80) {
        conceito = "B"
    } else if (nota >= 70) {
        conceito = "C"
    } else if (nota >= 60) {
        conceito = "D"
    } else {
        conceito = "F"
    }
    alert("Nota: " + nota + "\nConceito: " + conceito)
}

/* M3 - Estação do ano: ler um número correspondente ao mês (1 a 12) e informar a estação
do ano no hemisfério sul */
function estacaoDoAno() {
    alert("Identificação da estação do ano a partir do mês")
    let mes = parseInt(prompt("Digite o número do mês (1 a 12): "))
    let estacao
    if (mes === 12 || mes === 1 || mes === 2) {
        estacao = "Verão"
    } else if (mes >= 3 && mes <= 5) {
        estacao = "Outono"
    } else if (mes >= 6 && mes <= 8) {
        estacao = "Inverno"
    } else if (mes >= 9 && mes <= 11) {
        estacao = "Primavera"
    } else {
        estacao = "Mês inválido!"
    }
    alert("Estação do ano: " + estacao)
}

/* M3 - IMC: ler peso e altura, calcular o IMC (peso / altura²) e informar a classificação:
Abaixo do peso (< 18.5), Normal (< 25), Sobrepeso (< 30) ou Obesidade (>= 30) */
function calculaIMC() {
    alert("Cálculo e classificação do Índice de Massa Corporal (IMC)")
    let peso = parseFloat(prompt("Digite o peso (kg): "))
    let altura = parseFloat(prompt("Digite a altura (m): "))
    let imc = peso / (altura * altura)
    let classificacao
    if (imc < 18.5) {
        classificacao = "Abaixo do peso"
    } else if (imc < 25) {
        classificacao = "Peso normal"
    } else if (imc < 30) {
        classificacao = "Sobrepeso"
    } else {
        classificacao = "Obesidade"
    }
    alert("IMC: " + imc.toFixed(2) + "\nClassificação: " + classificacao)
}

/* M3 - Faixa etária: ler a idade de uma pessoa e informar se ela é criança (até 12 anos),
adolescente (13 a 17), adulta (18 a 59) ou idosa (60 ou mais) */
function faixaEtaria() {
    alert("Classificação por faixa etária")
    let idade = parseInt(prompt("Digite a idade da pessoa: "))
    let faixa
    if (idade <= 12) {
        faixa = "Criança"
    } else if (idade <= 17) {
        faixa = "Adolescente"
    } else if (idade <= 59) {
        faixa = "Adulta"
    } else {
        faixa = "Idosa"
    }
    alert("Faixa etária: " + faixa)
}

/* M3 - Dia da semana: ler um número entre 1 e 7 e informar o dia da semana correspondente
(1-Domingo, 2-Segunda, ..., 7-Sábado) */
function diaDaSemana() {
    alert("Identificação do dia da semana (1 a 7)")
    let numero = parseInt(prompt("Digite um número entre 1 e 7: "))
    let dia
    if (numero === 1) {
        dia = "Domingo"
    } else if (numero === 2) {
        dia = "Segunda-feira"
    } else if (numero === 3) {
        dia = "Terça-feira"
    } else if (numero === 4) {
        dia = "Quarta-feira"
    } else if (numero === 5) {
        dia = "Quinta-feira"
    } else if (numero === 6) {
        dia = "Sexta-feira"
    } else if (numero === 7) {
        dia = "Sábado"
    } else {
        dia = "Número inválido!"
    }
    alert("Dia da semana: " + dia)
}

/* M3 - Vogal ou consoante: ler uma letra e informar se ela é uma vogal ou uma consoante */
function vogalOuConsoante() {
    alert("Classificação de uma letra (vogal ou consoante)")
    let letra = prompt("Digite uma letra: ").toLowerCase()
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        alert("A letra '" + letra + "' é uma VOGAL")
    } else {
        alert("A letra '" + letra + "' é uma CONSOANTE")
    }
}

/* M3 - Categoria de atleta: ler a idade de um atleta e informar sua categoria:
Infantil (até 10), Juvenil (11 a 17), Adulto (18 a 59) ou Master (60 ou mais) */
function categoriaAtleta() {
    alert("Classificação da categoria de um atleta por idade")
    let idade = parseInt(prompt("Digite a idade do atleta: "))
    let categoria
    if (idade <= 10) {
        categoria = "Infantil"
    } else if (idade <= 17) {
        categoria = "Juvenil"
    } else if (idade <= 59) {
        categoria = "Adulto"
    } else {
        categoria = "Master"
    }
    alert("Categoria do atleta: " + categoria)
}

/* M3 - Período do dia: ler uma hora (0 a 23) e informar se ela pertence ao período da
manhã (0 a 11), tarde (12 a 17) ou noite (18 a 23) */
function periodoDoDia() {
    alert("Identificação do período do dia a partir da hora")
    let hora = parseInt(prompt("Digite a hora (0 a 23): "))
    let periodo
    if (hora >= 0 && hora <= 11) {
        periodo = "Manhã"
    } else if (hora <= 17) {
        periodo = "Tarde"
    } else if (hora <= 23) {
        periodo = "Noite"
    } else {
        periodo = "Hora inválida!"
    }
    alert("Período do dia: " + periodo)
}

/* M3 - Menu do caixa eletrônico: ler uma opção de menu e informar qual operação bancária
será realizada (1-Saque, 2-Depósito, 3-Saldo, 4-Extrato, 5-Sair) */
function menuCaixaEletronico() {
    alert("Menu de operações de um caixa eletrônico")
    let opcao = parseInt(prompt("Escolha a operação:\n1 - Saque\n2 - Depósito\n3 - Saldo\n4 - Extrato\n5 - Sair"))
    let operacao
    if (opcao === 1) {
        operacao = "Saque"
    } else if (opcao === 2) {
        operacao = "Depósito"
    } else if (opcao === 3) {
        operacao = "Consulta de saldo"
    } else if (opcao === 4) {
        operacao = "Emissão de extrato"
    } else if (opcao === 5) {
        operacao = "Encerrar atendimento"
    } else {
        operacao = "Opção inválida!"
    }
    alert("Operação selecionada: " + operacao)
}

/* M3 - Faixa de tributação: ler um salário e informar sua faixa de imposto de renda:
Isento (até 2000), 7.5%, 15%, 22.5% ou 27.5%, conforme o valor */
function faixaTributacao() {
    alert("Identificação da faixa de tributação a partir do salário")
    let salario = parseFloat(prompt("Digite o salário: "))
    let faixa
    if (salario <= 2000) {
        faixa = "Isento de imposto"
    } else if (salario <= 2800) {
        faixa = "Alíquota de 7,5%"
    } else if (salario <= 3700) {
        faixa = "Alíquota de 15%"
    } else if (salario <= 4600) {
        faixa = "Alíquota de 22,5%"
    } else {
        faixa = "Alíquota de 27,5%"
    }
    alert("Salário: R$ " + salario.toFixed(2) + "\nFaixa: " + faixa)
}

/* M3 - Categoria de preço: ler o valor de um produto e informar sua categoria:
Econômico (até 50), Intermediário (até 200) ou Premium (acima de 200) */
function categoriaPreco() {
    alert("Classificação de um produto por categoria de preço")
    let valor = parseFloat(prompt("Digite o valor do produto: "))
    let categoria
    if (valor <= 50) {
        categoria = "Econômico"
    } else if (valor <= 200) {
        categoria = "Intermediário"
    } else {
        categoria = "Premium"
    }
    alert("Produto de R$ " + valor.toFixed(2) + " — Categoria: " + categoria)
}

/* M3 - Nível RPG: ler a experiência acumulada de um personagem e informar seu nível:
Iniciante (< 1000), Intermediário (< 5000), Avançado (< 10000) ou Lendário (>= 10000) */
function nivelRPG() {
    alert("Classificação do nível de um personagem de RPG pela experiência")
    let xp = parseInt(prompt("Digite a experiência acumulada do personagem: "))
    let nivel
    if (xp < 1000) {
        nivel = "Iniciante"
    } else if (xp < 5000) {
        nivel = "Intermediário"
    } else if (xp < 10000) {
        nivel = "Avançado"
    } else {
        nivel = "Lendário"
    }
    alert("Experiência: " + xp + "\nNível: " + nivel)
}

/* M3 - Classificação indicativa: ler a idade de uma pessoa e informar quais categorias de
filmes ela pode assistir (Livre, 10, 12, 14, 16 e 18 anos) */
function classificacaoIndicativa() {
    alert("Verificação das classificações indicativas que a pessoa pode assistir")
    let idade = parseInt(prompt("Digite a idade da pessoa: "))
    let categorias
    if (idade >= 18) {
        categorias = "Livre, 10, 12, 14, 16 e 18 anos"
    } else if (idade >= 16) {
        categorias = "Livre, 10, 12, 14 e 16 anos"
    } else if (idade >= 14) {
        categorias = "Livre, 10, 12 e 14 anos"
    } else if (idade >= 12) {
        categorias = "Livre, 10 e 12 anos"
    } else if (idade >= 10) {
        categorias = "Livre e 10 anos"
    } else {
        categorias = "Apenas filmes de classificação Livre"
    }
    alert("Com " + idade + " ano(s), pode assistir: " + categorias)
}

/* --------------------------- MÓDULO 4 — Operadores Lógicos --------------------------- */

/* M4 - Entrada na festa: ler a idade da pessoa e se ela possui convite, permitindo a
entrada apenas quando for maior de idade (>= 18) E possuir convite */
function entradaFesta() {
    alert("Controle de entrada em festa privada (idade e convite)")
    let idade = parseInt(prompt("Digite a idade da pessoa: "))
    let temConvite = prompt("Possui convite? (S/N): ").toUpperCase() === "S"
    if (idade >= 18 && temConvite) {
        alert("Entrada PERMITIDA")
    } else {
        alert("Entrada NEGADA (necessário ser maior de 18 anos E possuir convite)")
    }
}

/* M4 - Aprovação por nota e frequência: ler a nota e a frequência de um estudante e
informar se ele foi aprovado (nota >= 6 E frequência >= 75%) */
function aprovacaoNotaFrequencia() {
    alert("Verificação de aprovação por nota e frequência")
    let nota = parseFloat(prompt("Digite a nota do estudante (0 a 10): "))
    let frequencia = parseFloat(prompt("Digite a frequência do estudante (%): "))
    if (nota >= 6 && frequencia >= 75) {
        alert("Aluno APROVADO (nota " + nota + " e frequência " + frequencia + "%)")
    } else {
        alert("Aluno REPROVADO (necessário nota >= 6 E frequência >= 75%)")
    }
}

/* M4 - Intervalo aceitável: ler um valor e os limites mínimo e máximo e informar, com
operadores lógicos, se o valor está dentro do intervalo aceitável */
function intervaloAceitavel() {
    alert("Verificação se um valor está dentro de um intervalo aceitável")
    let valor = parseFloat(prompt("Digite o valor a ser verificado: "))
    let minimo = parseFloat(prompt("Digite o limite mínimo: "))
    let maximo = parseFloat(prompt("Digite o limite máximo: "))
    if (valor >= minimo && valor <= maximo) {
        alert("O valor " + valor + " está DENTRO do intervalo [" + minimo + ", " + maximo + "]")
    } else {
        alert("O valor " + valor + " está FORA do intervalo [" + minimo + ", " + maximo + "]")
    }
}

/* M4 - Senha segura: ler uma senha e verificar se ela atende aos requisitos mínimos
(pelo menos 8 caracteres, contendo letras E números) */
function senhaSegura() {
    alert("Verificação de senha segura (mínimo 8 caracteres, com letras e números)")
    let senha = prompt("Digite uma senha: ")
    let temTamanho = senha.length >= 8
    let temLetra = /[a-zA-Z]/.test(senha)
    let temNumero = /[0-9]/.test(senha)
    if (temTamanho && temLetra && temNumero) {
        alert("Senha SEGURA!")
    } else {
        alert("Senha FRACA! Use no mínimo 8 caracteres, com letras e números")
    }
}

/* M4 - Financiamento de imóvel: ler a renda mensal e o valor da parcela e informar se o
financiamento pode ser aprovado (parcela não pode ultrapassar 30% da renda) */
function financiamentoImovel() {
    alert("Análise de financiamento de imóvel (parcela até 30% da renda)")
    let renda = parseFloat(prompt("Digite a renda mensal: "))
    let parcela = parseFloat(prompt("Digite o valor da parcela: "))
    let limite = renda * 0.30
    if (parcela <= limite) {
        alert("Financiamento APROVADO (parcela dentro do limite de R$ " + limite.toFixed(2) + ")")
    } else {
        alert("Financiamento NEGADO (parcela acima de 30% da renda: R$ " + limite.toFixed(2) + ")")
    }
}

/* M4 - Valida data: ler dia, mês e ano e informar se a data é válida, considerando a
quantidade de dias de cada mês e anos bissextos para fevereiro */
function validaData() {
    alert("Validação de uma data (dia, mês e ano)")
    let dia = parseInt(prompt("Digite o dia: "))
    let mes = parseInt(prompt("Digite o mês: "))
    let ano = parseInt(prompt("Digite o ano: "))
    let valida = true
    let diasNoMes = 31
    if (mes < 1 || mes > 12 || ano < 1) {
        valida = false
    } else {
        if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
            diasNoMes = 30
        } else if (mes === 2) {
            let bissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0
            diasNoMes = bissexto ? 29 : 28
        }
        if (dia < 1 || dia > diasNoMes) {
            valida = false
        }
    }
    if (valida) {
        alert("A data " + dia + "/" + mes + "/" + ano + " é VÁLIDA")
    } else {
        alert("A data " + dia + "/" + mes + "/" + ano + " é INVÁLIDA")
    }
}

/* M4 - Acesso administrativo: ler o cargo de um funcionário e informar se ele possui
acesso administrativo (Gerente, Diretor ou Administrador) */
function acessoAdministrativo() {
    alert("Verificação de acesso administrativo pelo cargo")
    let cargo = prompt("Digite o cargo do funcionário: ").toLowerCase()
    if (cargo === "gerente" || cargo === "diretor" || cargo === "administrador") {
        alert("Acesso ADMINISTRATIVO concedido (cargo: " + cargo + ")")
    } else {
        alert("Acesso administrativo NEGADO (cargo: " + cargo + ")")
    }
}

/* ------------------------------- MÓDULO 5 — While ------------------------------- */

/* M5 - Números de 1 a 10: exibir todos os números de 1 a 10 utilizando o laço while */
function numeros1a10() {
    alert("Exibição dos números de 1 a 10 (while)")
    let i = 1
    let resultado = ""
    while (i <= 10) {
        resultado += i + " "
        i++
    }
    alert("Números de 1 a 10:\n" + resultado)
}

/* M5 - Contagem regressiva: exibir os números de 10 até 1 utilizando o laço while */
function contagemRegressiva() {
    alert("Contagem regressiva de 10 até 1 (while)")
    let i = 10
    let resultado = ""
    while (i >= 1) {
        resultado += i + " "
        i--
    }
    alert("Contagem regressiva:\n" + resultado)
}

/* M5 - Soma de 1 a 100: calcular a soma dos números de 1 até 100 utilizando while */
function soma1a100() {
    alert("Soma dos números de 1 até 100 (while)")
    let i = 1
    let soma = 0
    while (i <= 100) {
        soma += i
        i++
    }
    alert("A soma dos números de 1 a 100 é: " + soma)
}

/* M5 - Pares até 100: exibir apenas os números pares de 2 até 100 utilizando while */
function paresAte100() {
    alert("Números pares até 100 (while)")
    let i = 2
    let resultado = ""
    while (i <= 100) {
        resultado += i + " "
        i += 2
    }
    alert("Números pares até 100:\n" + resultado)
}

/* M5 - Ímpares até 100: exibir apenas os números ímpares de 1 até 99 utilizando while */
function imparesAte100() {
    alert("Números ímpares até 100 (while)")
    let i = 1
    let resultado = ""
    while (i <= 100) {
        resultado += i + " "
        i += 2
    }
    alert("Números ímpares até 100:\n" + resultado)
}

/* M5 - Ler até zero: ler números informados pelo usuário até que o valor 0 seja digitado,
contando quantos números foram informados (sem contar o 0) */
function lerAteZero() {
    alert("Leitura de números até que o usuário informe 0 (while)")
    let numero = parseFloat(prompt("Digite um número (0 para encerrar): "))
    let quantidade = 0
    while (numero !== 0) {
        quantidade++
        numero = parseFloat(prompt("Digite um número (0 para encerrar): "))
    }
    alert("Você informou " + quantidade + " número(s) antes do 0")
}

/* M5 - Somar valores: somar todos os valores digitados pelo usuário até que ele decida
encerrar a entrada (digitando a palavra 'fim') */
function somaValoresWhile() {
    alert("Soma de valores até o usuário encerrar com 'fim' (while)")
    let soma = 0
    let entrada = prompt("Digite um valor (ou 'fim' para encerrar): ")
    while (entrada !== null && entrada.toLowerCase() !== "fim") {
        soma += parseFloat(entrada)
        entrada = prompt("Digite um valor (ou 'fim' para encerrar): ")
    }
    alert("A soma de todos os valores é: " + soma)
}

/* M5 - Média de valores: ler números até uma condição de parada (-1) e exibir a média dos
valores informados (sem considerar o -1) */
function mediaValoresWhile() {
    alert("Cálculo da média de valores até a condição de parada -1 (while)")
    let numero = parseFloat(prompt("Digite um número (-1 para encerrar): "))
    let soma = 0
    let quantidade = 0
    while (numero !== -1) {
        soma += numero
        quantidade++
        numero = parseFloat(prompt("Digite um número (-1 para encerrar): "))
    }
    if (quantidade > 0) {
        alert("Média dos " + quantidade + " valores: " + (soma / quantidade))
    } else {
        alert("Nenhum valor foi informado")
    }
}

/* M5 - Contar números: contar quantos números foram digitados durante uma pesquisa,
encerrando quando o usuário digitar 'sair' (while) */
function contarNumeros() {
    alert("Contagem de quantos números foram digitados (while)")
    let quantidade = 0
    let entrada = prompt("Digite um número (ou 'sair' para encerrar): ")
    while (entrada !== null && entrada.toLowerCase() !== "sair") {
        quantidade++
        entrada = prompt("Digite um número (ou 'sair' para encerrar): ")
    }
    alert("Foram digitados " + quantidade + " número(s)")
}

/* M5 - Menu principal: exibir um menu que permanece em execução até que o usuário escolha
a opção de sair (4), utilizando o laço while */
function menuPrincipal() {
    alert("Menu principal em execução até o usuário sair (while)")
    let opcao = ""
    while (opcao !== "4") {
        opcao = prompt("MENU PRINCIPAL\n1 - Cadastrar\n2 - Listar\n3 - Configurações\n4 - Sair")
        if (opcao === "1") {
            alert("Você escolheu: Cadastrar")
        } else if (opcao === "2") {
            alert("Você escolheu: Listar")
        } else if (opcao === "3") {
            alert("Você escolheu: Configurações")
        } else if (opcao === "4") {
            alert("Encerrando o sistema...")
        } else {
            alert("Opção inválida! Tente novamente")
        }
    }
}

/* -------------------------------- MÓDULO 6 — For -------------------------------- */

/* M6 - Sequência de 1 a 20: exibir a sequência numérica de 1 até 20 utilizando o laço for */
function sequencia1a20() {
    alert("Sequência numérica de 1 a 20 (for)")
    let resultado = ""
    for (let i = 1; i <= 20; i++) {
        resultado += i + " "
    }
    alert("Sequência de 1 a 20:\n" + resultado)
}

/* M6 - Tabuada: ler um número e exibir a sua tabuada (de 1 a 10) utilizando o laço for */
function tabuada() {
    alert("Exibição da tabuada de um número (for)")
    let numero = parseInt(prompt("Digite um número: "))
    let resultado = ""
    for (let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "\n"
    }
    alert("Tabuada do " + numero + ":\n" + resultado)
}

/* M6 - Fatorial: ler um número e calcular o seu fatorial (n! = n * (n-1) * ... * 1)
utilizando o laço for */
function fatorial() {
    alert("Cálculo do fatorial de um número (for)")
    let numero = parseInt(prompt("Digite um número inteiro positivo: "))
    let fatorial = 1
    for (let i = 1; i <= numero; i++) {
        fatorial *= i
    }
    alert("O fatorial de " + numero + " é: " + fatorial)
}

/* M6 - Soma até N: ler um valor N e calcular a soma dos números de 1 até N utilizando for */
function somaAteN() {
    alert("Soma dos números de 1 até N (for)")
    let n = parseInt(prompt("Digite o valor de N: "))
    let soma = 0
    for (let i = 1; i <= n; i++) {
        soma += i
    }
    alert("A soma dos números de 1 até " + n + " é: " + soma)
}

/* M6 - Contar caracteres: ler uma palavra e informar quantos caracteres ela possui,
percorrendo-a com o laço for */
function contarCaracteres() {
    alert("Contagem de caracteres de uma palavra (for)")
    let palavra = prompt("Digite uma palavra: ")
    let quantidade = 0
    for (let i = 0; i < palavra.length; i++) {
        quantidade++
    }
    alert("A palavra '" + palavra + "' possui " + quantidade + " caractere(s)")
}

/* M6 - Contar vogais: ler uma frase e contar quantas vogais existem nela utilizando for */
function contarVogais() {
    alert("Contagem de vogais em uma frase (for)")
    let frase = prompt("Digite uma frase: ").toLowerCase()
    let vogais = 0
    for (let i = 0; i < frase.length; i++) {
        let c = frase[i]
        if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
            vogais++
        }
    }
    alert("A frase possui " + vogais + " vogal(is)")
}

/* M6 - Contar consoantes: ler uma frase e contar quantas consoantes existem nela
utilizando o laço for */
function contarConsoantes() {
    alert("Contagem de consoantes em uma frase (for)")
    let frase = prompt("Digite uma frase: ").toLowerCase()
    let consoantes = 0
    for (let i = 0; i < frase.length; i++) {
        let c = frase[i]
        if (c >= "a" && c <= "z" && c !== "a" && c !== "e" && c !== "i" && c !== "o" && c !== "u") {
            consoantes++
        }
    }
    alert("A frase possui " + consoantes + " consoante(s)")
}

/* M6 - Maior de dez: ler dez números e identificar o maior valor informado utilizando for */
function maiorDeDez() {
    alert("Identificação do maior valor entre dez números (for)")
    let maior = parseFloat(prompt("Digite o número 1: "))
    for (let i = 2; i <= 10; i++) {
        let numero = parseFloat(prompt("Digite o número " + i + ": "))
        if (numero > maior) {
            maior = numero
        }
    }
    alert("O maior valor informado foi: " + maior)
}

/* M6 - Menor de dez: ler dez números e identificar o menor valor informado utilizando for */
function menorDeDez() {
    alert("Identificação do menor valor entre dez números (for)")
    let menor = parseFloat(prompt("Digite o número 1: "))
    for (let i = 2; i <= 10; i++) {
        let numero = parseFloat(prompt("Digite o número " + i + ": "))
        if (numero < menor) {
            menor = numero
        }
    }
    alert("O menor valor informado foi: " + menor)
}

/* M6 - Média de dez notas: ler dez notas e calcular a média aritmética delas utilizando for */
function mediaDezNotas() {
    alert("Cálculo da média de dez notas (for)")
    let soma = 0
    for (let i = 1; i <= 10; i++) {
        let nota = parseFloat(prompt("Digite a nota " + i + ": "))
        soma += nota
    }
    let media = soma / 10
    alert("A média das dez notas é: " + media)
}

/* ------------------------------- MÓDULO 7 — Listas ------------------------------- */

/* M7 - Armazenar lista: ler dez números e armazená-los em uma lista (array), exibindo-os
ao final */
function armazenarLista() {
    alert("Armazenamento de dez números em uma lista")
    let numeros = []
    for (let i = 1; i <= 10; i++) {
        let numero = parseFloat(prompt("Digite o número " + i + ": "))
        numeros.push(numero)
    }
    alert("Lista armazenada:\n[" + numeros.join(", ") + "]")
}

/* M7 - Estatísticas da lista: ler dez números, armazená-los em uma lista e informar o
maior valor, o menor valor e a média dos elementos */
function estatisticasLista() {
    alert("Cálculo do maior, menor e média de uma lista de números")
    let numeros = []
    for (let i = 1; i <= 10; i++) {
        numeros.push(parseFloat(prompt("Digite o número " + i + ": ")))
    }
    let maior = numeros[0]
    let menor = numeros[0]
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }
        if (numeros[i] < menor) {
            menor = numeros[i]
        }
        soma += numeros[i]
    }
    let media = soma / numeros.length
    alert("Lista: [" + numeros.join(", ") + "]\nMaior: " + maior + "\nMenor: " + menor + "\nMédia: " + media)
}

/* M7 - Contar pares na lista: ler dez números em uma lista e contar quantos deles são
pares */
function contarParesLista() {
    alert("Contagem de números pares em uma lista")
    let numeros = []
    for (let i = 1; i <= 10; i++) {
        numeros.push(parseInt(prompt("Digite o número " + i + ": ")))
    }
    let pares = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares++
        }
    }
    alert("Lista: [" + numeros.join(", ") + "]\nQuantidade de pares: " + pares)
}

/* M7 - Remover duplicados: ler vários números (encerrando com 'fim') e remover os valores
repetidos, exibindo a lista sem duplicatas */
function removerDuplicados() {
    alert("Remoção de elementos repetidos de uma lista")
    let numeros = []
    let entrada = prompt("Digite um número (ou 'fim' para encerrar): ")
    while (entrada !== null && entrada.toLowerCase() !== "fim") {
        numeros.push(parseFloat(entrada))
        entrada = prompt("Digite um número (ou 'fim' para encerrar): ")
    }
    let semDuplicatas = []
    for (let i = 0; i < numeros.length; i++) {
        if (!semDuplicatas.includes(numeros[i])) {
            semDuplicatas.push(numeros[i])
        }
    }
    alert("Lista original: [" + numeros.join(", ") + "]\nSem duplicatas: [" + semDuplicatas.join(", ") + "]")
}

/* M7 - Pesquisar elemento: ler dez números em uma lista e permitir pesquisar se um valor
informado já foi registrado, indicando a posição encontrada */
function pesquisarElemento() {
    alert("Pesquisa de um elemento dentro de uma lista")
    let numeros = []
    for (let i = 1; i <= 10; i++) {
        numeros.push(parseFloat(prompt("Digite o número " + i + ": ")))
    }
    let procurado = parseFloat(prompt("Digite o valor que deseja pesquisar: "))
    let posicao = numeros.indexOf(procurado)
    if (posicao !== -1) {
        alert("O valor " + procurado + " foi encontrado na posição " + posicao + " da lista")
    } else {
        alert("O valor " + procurado + " NÃO está na lista")
    }
}

/* --------------------- MÓDULO 8 — Manipulação de Arquivos --------------------- */
/* Observação: o navegador não permite gravar arquivos diretamente no disco como em
   Python. Para reproduzir os exercícios de arquivos, o conteúdo de "alunos.txt" é
   simulado usando o localStorage do navegador. */

/* M8 - Criar arquivo de alunos: criar o "arquivo" alunos.txt e gravar cinco nomes
informados pelo usuário (simulado via localStorage) */
function criarArquivoAlunos() {
    alert("Criação do arquivo alunos.txt com cinco nomes (simulado via localStorage)")
    let nomes = []
    for (let i = 1; i <= 5; i++) {
        nomes.push(prompt("Digite o nome do aluno " + i + ": "))
    }
    localStorage.setItem("alunos.txt", nomes.join("\n"))
    alert("Arquivo 'alunos.txt' criado com sucesso!\n\n" + nomes.join("\n"))
}

/* M8 - Ler arquivo de alunos: ler e exibir todo o conteúdo do "arquivo" alunos.txt */
function lerArquivoAlunos() {
    alert("Leitura do conteúdo do arquivo alunos.txt")
    let conteudo = localStorage.getItem("alunos.txt")
    if (conteudo === null) {
        alert("O arquivo 'alunos.txt' ainda não foi criado. Use o exercício de criação primeiro.")
    } else {
        alert("Conteúdo de alunos.txt:\n\n" + conteudo)
    }
}

/* M8 - Contar linhas: ler o "arquivo" alunos.txt e informar a quantidade de linhas
(registros) armazenadas */
function contarLinhasArquivo() {
    alert("Contagem de linhas (registros) do arquivo alunos.txt")
    let conteudo = localStorage.getItem("alunos.txt")
    if (conteudo === null) {
        alert("O arquivo 'alunos.txt' ainda não foi criado. Use o exercício de criação primeiro.")
    } else {
        let linhas = conteudo.split("\n")
        alert("O arquivo possui " + linhas.length + " linha(s)/registro(s)")
    }
}

/* M8 - Analisar arquivo: ler o "arquivo" alunos.txt e informar a quantidade de linhas,
de palavras e de caracteres */
function analisarArquivo() {
    alert("Análise do arquivo alunos.txt (linhas, palavras e caracteres)")
    let conteudo = localStorage.getItem("alunos.txt")
    if (conteudo === null) {
        alert("O arquivo 'alunos.txt' ainda não foi criado. Use o exercício de criação primeiro.")
    } else {
        let linhas = conteudo.split("\n").length
        let palavras = conteudo.split(/\s+/).filter(function (p) { return p.length > 0 }).length
        let caracteres = conteudo.length
        alert("Análise de alunos.txt:\nLinhas: " + linhas + "\nPalavras: " + palavras + "\nCaracteres: " + caracteres)
    }
}