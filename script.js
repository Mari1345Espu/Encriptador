const textUser = document.querySelector(".text-user");
const message = document.querySelector(".text-message");

//Funciones de uso
function btnEncriptar(){
    const textoEncriptado = encriptar(textUser.value)
    message.value = textoEncriptado
    textUser.value= "";
    message.style.backgroundImage= "none"
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textUser.value)
    message.value = textoDesencriptado
    textUser.value= "";
    message.style.backgroundImage= "none"
}
//Funcionalidades botones
function btnCopiar(){
    var messageEncriptado =  message.value;
    navigator.clipboard.writeText(messageEncriptado);
}
function btnBorrar(){ 
    textUser.value=""
    textUser.focus();  
    message.value=""
    message.style.backgroundImage="initial"
}
    

function encriptar(stringEncritada){

    let mCodigo = ["a", "e", "i", "o", "u"];
    let eCodigo = ["ai","enter", "imes", "ober", "ufat"];
    stringEncritada= stringEncritada.toLowerCase()
    
    for(let i = mCodigo.length - 1; i >= 0; i--){
        if(stringEncritada.includes(mCodigo[i])){
            stringEncritada=stringEncritada.replaceAll(mCodigo[i], eCodigo[i])
        }
    }
    return stringEncritada
}

function desencriptar(stringDesencriptada){
    let mCodigo = ["a", "e", "i", "o", "u"];
    let eCodigo = ["ai","enter", "imes", "ober", "ufat"];
    stringDesencriptada= stringDesencriptada.toLowerCase()
    
    for(let i=0; i<eCodigo.length; i ++){
        if(stringDesencriptada.includes(eCodigo[i])){
            stringDesencriptada=stringDesencriptada.replaceAll(eCodigo[i], mCodigo[i])
        }
    }
    return stringDesencriptada
}

