// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount") //recupera conteúdo do input pelo id
const currency = document.getElementById("currency") // pega a opção que o cliente selecionou da moeda

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {  // recupera o que foi digitado no input
    const hasCaracterrsRegex = /\D+/g //para capturar caracteres tipo texto
    amount.value =amount.value.replace(hasCaracterrsRegex, "") //substitui os caracteres por nada
})

// Capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
    event.preventDefault() // para não recarrgar a tela

    console.log(currency.value)
}