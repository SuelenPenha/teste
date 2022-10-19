let encryptbtn = document.getElementById('encrypt-btn'); // Este e o caminho que ciptografar a mesangem (minha cont, wrote the comnet on the wrong line XD LOL) 
let eInput = document.getElementById('encryptedInput-1');// this is actually our encrypted iNPUT where the encrypt message will be displayed
let pInput = document.getElementById('plainInput')// plaint text input 
let inputs = [eInput,pInput]
letcopyBtn = document.getElementById('copyToclipBoars')

inputs.forEach( input => {
    input.oninput =() => {
        input.value = input.value.toUpperCase() //this will turn all the characters that we type into the input to be uppercase letters
    }
})