// Referencia a los elementos del DOM
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');
const outputDiv = document.getElementById('output');
const errorMsg = document.getElementById('errorMsg');

// Función para encriptar texto
function encriptar(texto) {
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return textoEncriptado;
}

// Función para desencriptar texto
function desencriptar(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textoDesencriptado;
}

// Validación de texto
function esValido(texto) {
    const regex = /^[a-z\s]+$/; // Solo minúsculas y espacios
    return regex.test(texto);
}

// Evento para el botón de encriptar
encryptBtn.addEventListener('click', () => {
    const texto = inputText.value.trim();
    if (esValido(texto)) {
        errorMsg.textContent = '';
        outputText.value = encriptar(texto);
        outputDiv.style.display = 'block';
    } else {
        errorMsg.textContent = 'Error: No se aceptan mayúsculas ni caracteres especiales.';
        outputDiv.style.display = 'none';
    }
});

// Evento para el botón de desencriptar
decryptBtn.addEventListener('click', () => {
    const texto = inputText.value.trim();
    if (esValido(texto)) {
        errorMsg.textContent = '';
        outputText.value = desencriptar(texto);
        outputDiv.style.display = 'block';
    } else {
        errorMsg.textContent = 'Error: No se aceptan mayúsculas ni caracteres especiales.';
        outputDiv.style.display = 'none';
    }
});

// Evento para el botón de copiar
copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles.');
});