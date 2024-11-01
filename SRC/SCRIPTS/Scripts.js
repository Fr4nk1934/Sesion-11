function calcular() {
    const a = parseFloat(document.getElementById("num1").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(a)) {
        resultado.textContent = "Ingrese una calificación válida";
        return;
    }

    if (a >= 90) {
        resultado.textContent = "Aprobado con Honores";
    } else if (a >= 70) {
        resultado.textContent = "Aprobado";
    } else {
        resultado.textContent = "Reprobado";
    }
}
function comprobar() {
    const b = parseFloat(document.getElementById("num2").value);
    const comprobacion = document.getElementById("modular");

    if (isNaN(b)) {
        comprobacion.textContent = "Ingrese un numero";
        return;
    }

    if (b % 2 === 0) {
        comprobacion.textContent = "Es Par";
    } else {
        comprobacion.textContent = "Es Impar";
    }
}
function descuento(){
    const c = parseFloat(document.getElementById("num3").value);
    const total = document.getElementById("total");

    if (isNaN(c)) {
        total.textContent = "Ingrese un monto valido";
        return;
    }
    if(c>100){
        let descontar = c - 0.1*c;
        total.textContent = "Aplica Descuento";
        total1.textContent = "Total a pagar: "+ descontar;
    }else {
        total.textContent ="No aplica descuento";
    }
}
function adivinar(){
    const d = parseFloat(document.getElementById("num4").value);
    const igualdad = document.getElementById("igualdad");
    let number1 = Math.floor(Math.random()*10);

    if (isNaN(d)) {
        igualdad.textContent = "Ingrese un numero";
        return;
    }
    if (d == number1){
        igualdad.textContent = "¡Felicidades, adivinaste el número";
    }else{
        igualdad.textContent = "Lo siento, el numero era:"+ number1;                
    }
}