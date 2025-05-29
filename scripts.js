// Cotação de moedas do dia.
const USD = 5.70
const EUR = 6.41
const GBP = 7.65
const JPY = 0.0396
const AUD = 3.65
const CHF = 6.87
const CAD = 4.12
const CNY = 0.79

// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount") //recupera conteúdo do input pelo id
const currency = document.getElementById("currency") // pega a opção que o cliente selecionou da moeda
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {  // recupera o que foi digitado no input
    const hasCaracterrsRegex = /\D+/g //para capturar caracteres tipo texto
    amount.value =amount.value.replace(hasCaracterrsRegex, "") //substitui os caracteres por nada
})

// Capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
    event.preventDefault() // para não recarrgar a tela

    switch (currency.value){ // indentifica qual é a moeda selecionada
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
        case "JPY":
            convertCurrency(amount.value, JPY, "¥")
            break
        case "AUD":
            convertCurrency(amount.value, AUD, "AU$")
            break
        case "CHF":
            convertCurrency(amount.value, CHF, "CHF")
            break
        case "CAD":
            convertCurrency(amount.value, CAD, "C$")
            break
        case "CNY":
            convertCurrency(amount.value, CNY, "¥")
            break
    } 
    //console.log(currency.value)
}
// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
    //console.log(amount, price, symbol)
    try {
        // Exibindo a cotação da moeda selecionada.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        //Calcula o total.
        let total = amount * price

        // Verifica se o resultado não é um numero
        if(isNaN(total)){
            return alert("Por favor, digite o valor corretamente para converter.")
        }

        // Formatar o valor total
        total = formatCurrencyBRL(total).replace("R$", "")

        // Exibir o resultado total
        result.textContent = `${total} Reais`

        // Aplica a classe que exibe o footer para mostrar o resultado.
        footer.classList.add("show-result")
    } catch (error) {
        // Remove a classe do footer removendo ele da tela.
        footer.classList.remove("show-result")
        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde")
    }
}
// Formata a moeda em real Brasileiro.
function formatCurrencyBRL(value){
    // Converte para número para utilizar o toLocaleString para formatar no padrão BRL (R$ 00,00)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}
