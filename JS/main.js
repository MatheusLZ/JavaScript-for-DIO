function validaIdade (idade){
    var validar;
    if (idade >= 18){
    validar = true
}
    else{
    validar = false
}
    return validar;
}

var idade = prompt("Qual sua idade? ");
console.log(validaIdade(idade));