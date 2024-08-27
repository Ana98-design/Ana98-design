document.getElementById('encrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    if (validateInput(inputText)) {
        document.getElementById('output-text').value = encryptText(inputText);
    } else {
        document.getElementById('validation-message').style.color = 'red';
    }
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    if (validateInput(inputText)) {
        document.getElementById('output-text').value = decryptText(inputText);
    } else {
        document.getElementById('validation-message').style.color = 'red';
    }
});

document.getElementById('copy-btn').addEventListener('click', () => {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado!');
});

function encryptText(text) {
    // Implementar lógica de criptografia simples (exemplo)
    return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join('');
}

function decryptText(text) {
    // Implementar lógica de descriptografia simples (exemplo)
    return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 3)).join('');
}

function validateInput(text) {
    const regex = /^[a-z\s]*$/;
    return regex.test(text);