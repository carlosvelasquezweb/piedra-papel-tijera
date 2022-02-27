//op = ["Piedra", "Papel", "Tijera"];

const op = [0, 1, 2];
var opMaquina;

const aleatorio = (minimo, maximo) => {
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    console.info(numero)
    return numero;
}


const mostrarResultado = (resultado, maquina, usuario) => {

    return document.getElementById('efecto').innerHTML = `<h1>¡${resultado}!</h1> <h3>La maquina eligio ${maquina} y tu ${usuario}.</h3>`;
}


const usuario = (eleccionUsuario) => {
    opMaquina = parseInt(eleccionUsuario);
    opMaquina = aleatorio(0, 2);


    if (eleccionUsuario == 0) {//el usuario eligio Piedra 
        if (op[opMaquina] == 1) {//si la maquina eligio Papel 
            mostrarResultado('Perdiste', 'Papel', 'Piedra');
        } else {
            if (op[opMaquina] == 2) {
                mostrarResultado('Ganaste', 'Tijera', 'Piedra');
            } else {
                if (op[opMaquina] == 0) {
                    mostrarResultado('Empate', 'Piedra', 'Piedra');
                }
            }
        }
    }

    if (eleccionUsuario == 1) {//el usuario eligio Papel 
        if (op[opMaquina] == 2) {
            mostrarResultado('Perdiste', 'Tijera', 'Papel');
        } else {
            if (op[opMaquina] == 0) {
                mostrarResultado('Ganaste', 'Piedra', 'Papel');
            } else {
                if (op[opMaquina] == 1) {
                    mostrarResultado('Empate', 'Papel', 'Papel');
                }
            }
        }
    }

    if (eleccionUsuario == 2) {//el usuario eligio Tijera 
        if (op[opMaquina] == 1) {
            mostrarResultado('Ganaste', 'Papel', 'Tijera');
        } else {
            if (op[opMaquina] == 0) {
                mostrarResultado('Perdiste', 'Piedra', 'Tijera');
            } else {
                if (op[opMaquina] == 2) {
                    mostrarResultado('Empate', 'Tijera', 'Tijera');
                }
            }
        }
    }

    document.getElementById('efecto').style.display = "";
}



const quitarEfecto = () => {
    document.getElementById('efecto').style.display = "none";
}