const button = document.getElementById(" convertor ")
const select = document.getElementById("currency-select")


const dolar = 5.2
const euro = 6.3
const bitcon = 0.0000095


const convertorValor = () => {
    const inputReais = document.getElementById("input-real").value
    const realValue = document.getElementById("real-value")
    const dolarValue = document.getElementById("dolar-value")


    realValue.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === "US$ Dolar americano") {
        
        dolarValue.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
    ).format(inputReais / dolar);
    }

   if (select.value === "€ Euro") {
    dolarValue.innerHTML = new Intl.NumberFormat('de-DE',
    { style: 'currency', currency: 'EUR' }
   ).format(inputReais / euro);

   if (select.value === "Bitcon") {
    dolarValue.innerHTML = new Intl.NumberFormat('de-DE',
    { style: 'currency', currency: 'EUR' }
   ).format(inputReais / bitcon);
    
   }
}
}

const changeCurreny = () => {
    const currencyNames = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === 'US$ Dolar americano') {
        currencyNames.innerHTML = "Dolar"
        currencyImg.src = "./asset/estados-unidos (1) 1.png"
    }

    if (select.value === '€ Euro') {
        currencyNames.innerHTML = "Euro"
        currencyImg.src = "./asset/Design sem nome 1.png"
    }

    if (select.value === 'Bitcon') {
        currencyNames.innerHTML = "Bitcon"
        currencyImg.src = "./asset/Design sem nome (1) 1.png"
    }
    
    convertorValor()
}




button.addEventListener('click',convertorValor)
select.addEventListener('change',changeCurreny)