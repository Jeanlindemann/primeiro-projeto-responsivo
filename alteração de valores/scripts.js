const Button = document.querySelector('button')
const currencySelect = Document.querySelector('.currency-select')
 
function convertCurence(){
  const inputCurrencyValue = document.querySelector('.input-currency').value
  const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
  const currencyValueconverted = document.querySelector('.currency-value')
  
  console.log("currencySelect")
  const dolarToday = 5.2
  const euroToday = 6.2

  const convertedValue = inputCurrencyValue/dolarToday

  if(currencySelect.value == "dolar"){

  }

  if(currencySelect.value == "euro"){

  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR',{
    style:'currency',
    currency:'BRL'
  }).format(inputCurrencyValue)

  currencyValueconverted.innerHTML = new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD'
  }).format(convertedValue)

}

Button.addEventListener('click', convertCurence)
   




