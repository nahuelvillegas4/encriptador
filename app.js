function addImage() {
    // Crear un nuevo elemento de imagen
    let boton = document.getElementById('1')
    let img = document.createElement("img");

    // Establecer el atributo src de la imagen
    img.src = "https://via.placeholder.com/150";

    // Establecer atributos adicionales (opcional)
    img.alt = "Imagen de ejemplo";
    img.width = 150; // Ancho en píxeles
    img.height = 150; // Alto en píxeles

    // Encontrar el contenedor donde se agregará la imagen
    let container = document.getElementById("imageContainer");
    boton.classList.remove('hidden') //le saca la funcion de que desaparezca

    // Agregar la imagen al contenedor
    container.appendChild(img);
}

function encriptar() {
    const regex = /^[a-z]+$/
    let texto = document.getElementById('textoIngresado').value
    if (texto == ''){
        return
    }

    if (!(regex.test(texto))){
        alert('El texto ingresado debe contener solamente letras minusculas y sin acento')
        return
    }
    let palabraEncriptada = ''

    let palabra = texto.split("")

    for (let index = 0; index < palabra.length; index++) {
        
        if (palabra[index] == 'a') {
            palabraEncriptada += 'ai'
        }

        else if (palabra[index] == 'e') {
            palabraEncriptada += 'enter'
        }

        else if (palabra[index] == 'i') {
            palabraEncriptada += 'imes'
        }

        else if (palabra[index] == 'o') {
            palabraEncriptada += 'ober'
        }

        else if (palabra[index] == 'u') {
            palabraEncriptada += 'ufat'
        }
        
        else {
            palabraEncriptada += palabra[index]
        }
    }

    quitarInicio()
    asignartexto(palabraEncriptada)
}

function desencriptar(){
    const regex = /^[a-z]+$/
    let texto = document.getElementById('textoIngresado').value
    if (texto == ''){
        return
    }

    if (!(regex.test(texto))){
        alert('El texto ingresado debe contener solamente letras minusculas y sin acento')
        return
    }
    let palabraDesencriptada = ''

    let palabra = texto

    for (let index = 0; index < palabra.length; index++) {
        if (palabra.substring(index, index + 2) === 'ai') {
            palabraDesencriptada += 'a';
            index += 1;
            continue
        } else if (palabra.substring(index, index + 5) === 'enter') {
            palabraDesencriptada += 'e';
            index += 4;
            continue
        } else if (palabra.substring(index, index + 4) === 'imes') {
            palabraDesencriptada += 'i';
            index += 3;
            continue
        } else if (palabra.substring(index, index + 4) === 'ober') {
            palabraDesencriptada += 'o';
            index += 3;
            continue
        } else if (palabra.substring(index, index + 4) === 'ufat') {
            palabraDesencriptada += 'u';
            index += 3;
            continue
        } else {
            palabraDesencriptada += palabra[index];
        } 
    }

    quitarInicio()
    asignartexto(palabraDesencriptada)
}

function quitarInicio(){
    let img = document.getElementById('imagen')
    img.classList.add('hidden')

    let contenedor = document.getElementById('contenedor__bienvenida')
    contenedor.classList.add('hidden')

    let bienvenida = document.getElementById('bienvenida')
    bienvenida.classList.add('hidden')

    let bienvenidaTitulo = document.getElementById('bienvenida_titulo')
    bienvenidaTitulo.classList.add('hidden')

    let bienvenidaTexto = document.getElementById('bienvenida_texto')
    bienvenidaTexto.classList.add('hidden')
}


function asignartexto(palabra){
    let areaTexto = document.getElementById('resultado__area__texto');
    let botonCopiar = document.getElementById('copiar')
    let contenedor = document.getElementById('resultado')
    let contenedoResultado = document.getElementById('contenedor__resultado')

    contenedor.classList.remove('hidden')

    contenedoResultado.classList.remove('contenedor__inicio')
    contenedoResultado.classList.add('contenedor__encriptado__desencriptado')

    botonCopiar.classList.remove('hidden')
    areaTexto.classList.remove('hidden')

    areaTexto.innerHTML = palabra;
    areaTexto.style.height = '';
    areaTexto.style.height = areaTexto.scrollHeight + 'px' //permite modificar la altura del textarea de acuerdo a lo escrito en el input para no scrolear

    return
}

function copiar(){
    let areaTexto = document.querySelector('textarea');
    setearPortapapeles(areaTexto.innerHTML)
}

async function setearPortapapeles(text) {
    const type = "text/plain";
    const blob = new Blob([text], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    await navigator.clipboard.write(data);
  }

function ajustarAltura() {
    const ingreso = document.getElementById('textoIngresado');

    ingreso.addEventListener('input', function(){
        console.log('entro')
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px'
        this.style.padding = '10'
    })
}

document.addEventListener('DOMContentLoaded', function(){
    ajustarAltura();
})