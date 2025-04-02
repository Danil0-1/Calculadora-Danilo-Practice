function appendNumber(number) {
    document.getElementById('display').value += number
}

function appendOperator(operator) {
    let display = document.getElementById('display')
    let lastChar = display.value.slice(-1)
    if ('+-*/'.includes(lastChar)) return
    display.value += operator
}

function calculate() {
    let display = document.getElementById('display')
    try {
        display.value = eval(display.value)
    } catch {
        display.value = 'Error....'
    }
}

function clearDisplay() {
    document.getElementById('display').value = ''
}
