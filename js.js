

function calcular() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const imc = peso / altura ** 2

    if (imc <= 17) {
        alert('muito abaixo do peso')
    }
    else if (imc > 17 && imc <= 18.5) {
        alert('abaixo do peso')
    }
    else if (imc > 18.5 && imc <= 25) {
        alert('peso normal')
    }
    else if (imc > 25 && imc <= 30) {
        alert('obesidade')
    }
    else if (imc > 30 && imc <= 35) {
        alert('obesidade severa')
    }
    else {
        alert('obesidade morbita')
    }
    alert(` seu IMC é de: ${imc.toFixed(1)}`)
}

function reset() {
    document.getElementById('peso').value = "";
    document.getElementById('altura').value='';
}