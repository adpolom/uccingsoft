

function sumar() {
    let val1 = document.getElementById("s1").value;
    let val2 = document.getElementById("s2").value;

    let num1 = parseFloat(val1);
    let num2 = parseFloat(val2);

    if (isNaN(num1) || isNaN(num2)) { //¿es un numero?
        alert("Error: uno de los valores no es un numero.");
        document.getElementById("rsum").textContent = ""; // limpiar resultado anterior
    } else {
        const suma = num1 + num2;
        document.getElementById("rsum").textContent = "La suma es: " + suma;
        document.getElementById("error").textContent = "";
    }
}

//error en el manejo de errores, se tiene q evaluar isNam, no si en el doc tiene algo 
//como dije en mi html siento q deberia usar una clase, para no tener que andar constantemente creando un solo para algo
//osea un etiqueta para cada una, debe haber una forma

function restar() {
    let val1 = document.getElementById("r1").value;
    let val2 = document.getElementById("r2").value;

    let num1 = parseFloat(val1);
    let num2 = parseFloat(val2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: uno de los valores no es un numero.");
        document.getElementById("rres").textContent = "";
    } else {
        const resta = num1 - num2
        document.getElementById("rres").textContent = "La resta es: " + resta;
        document.getElementById("error").textContent = "";
    }
}

function multiplicar() {
    let val1 = document.getElementById("m1").value;
    let val2 = document.getElementById("m2").value;

    let num1 = parseFloat(val1);
    let num2 = parseFloat(val2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: uno de los valores no es un numero ");
        document.getElementById("rmul").textContent = "";
    } else {
        const multiplicacion = num1 * num2
        document.getElementById("rmul").textContent = "La multiplicacion es: " + multiplicacion;
        document.getElementById("error").textContent = "";
    }
}

function dividir() {
    let val1 = document.getElementById("d1").value;
    let val2 = document.getElementById("d2").value;

    let num1 = parseFloat(val1);
    let num2 = parseFloat(val2);

    document.getElementById("rdiv").textContent = "";

    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: uno de los valores no es un numero.");
    } else if (num1 == 0 || num2 === 0) {
        alert("Error: no se puede dividir entre 0.");
    } else {
        let resultado = num1 / num2;
        document.getElementById("rdiv").textContent = "La división es: " + resultado;
    }
}






//pensemos en como funciona el manejo de erroes, previniendolos
//division entre 0, daria error, tipo de dato q no es
//podria mejorar la salida de los datos con redondeo y eso

//si o si considero q para el manejo de erroes debo usar el not a number mas practico
//considero q la verificacion debe ser personal, osea funct x funct
// debe ser una comparacion entre los dos datos ingresados
//previamente lo intente entonces deben ser con los datos especificos dle doc
//osea creo q debo usar el getelement para las comparaicones, 