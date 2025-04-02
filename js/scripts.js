
//Placeholder: es el relleno base del input, el texto guía (html en input y textarea)
//Readonly: es visible y se puede copiar, pero no se puede modificar. (html en input y textarea). El valor value no es obligatorio ponerlo, pero solo se puede modificar internamente, el usuario no.

//Acent-color: cambia los colores de controles de formulario (css para checkbox, radio, range y progress.)

//Atributos: min (valor mínimo), max (valor máx), step (intervalos entre valores permitidos), value de input-range (valor inicial)

//Propiedad scale en un :hover (css) scale es función en la propiedad transform, cambia de tamaño cuando el usuario pasa el ratón.

const selectedLengthElement = document.getElementById('selected-length')
const rangeBarElement = document.getElementById('range')

selectedLengthElement.textContent = `LENGTH: ${rangeBarElement.value}`

const generatePasswordButtonElement = document.getElementById('generate-password-button')

//¿Por qué aunque no ponga ${} lo pone como string.
rangeBarElement.previousElementSibling.textContent = rangeBarElement.min
rangeBarElement.nextElementSibling.textContent = rangeBarElement.max


const resultPassword = document.getElementById('result-password')

//Event: input (cuando se mueve) / change (cuando lo suelta)
const adaptLengthNumber = () => {
    selectedLengthElement.textContent = `LENGTH: ${rangeBarElement.value}`
}
rangeBarElement.addEventListener('input', adaptLengthNumber)

const generateAleatoryCharacter = () => {
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/</>' 
   const number = Math.floor(Math.random()*characters.length-1)
   const aleatoryCharacter = characters.charAt(number)
   return aleatoryCharacter
}

const generateAleatoryPassword = () => {
    let aleatoryPassword = ''
    for (let i = 0; i<rangeBarElement.value; i++){
      aleatoryPassword += generateAleatoryCharacter()  
    }
    resultPassword.value = aleatoryPassword
}
generatePasswordButtonElement.addEventListener('click', generateAleatoryPassword)





