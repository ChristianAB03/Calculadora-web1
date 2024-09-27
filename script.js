let display = document.getElementById('result');

// Función flecha para actualizar la pantalla
const inputValue = (value) => {
    display.value += value;
};

// Función flecha para limpiar la pantalla
const clearDisplay = () => {
    display.value = '';
};

// Funciones flecha para las operaciones
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => b !== 0 ? a/b : 'Error'; 

// Función flecha para calcular el resultado
const calculate = () => {
  try {
    // Evaluar la expresión usando las funciones flecha
    let expression = display.value;
    let operator = '';
    let [numA, numB] = [];

    // Identificar la operación 
    if (expression.includes('+')) {
      [numA, numB] = expression.split('+').map(Number);
      operator = '+';
    } else if (expression.includes('-')) {
      [numA, numB] = expression.split('-').map(Number);
      operator = '-';
    } else if (expression.includes('*')) {
      [numA, numB] = expression.split('*').map(Number);
      operator = '*';
    } else if (expression.includes('/')) {
      [numA, numB] = expression.split('/').map(Number);
      operator = '/';
    }

    // Realizar la operación correcta
    let result;
    switch (operator) {
      case '+':
        result = suma(numA, numB);
        break;
      case '-':
        result = resta(numA, numB);
        break;
      case '*':
        result = multiplicacion(numA, numB);
        break;
      case '/':
        result = division(numA, numB);
        break;
      default:
        result = 'Error';
    }

// El único lugar donde veo que se podría poner
// Template Strings sería en los resultados, sin embargo,
// en una calculadora no se vería correcto o como normalmente es. 
// Por ejemplo, "La suma de 'numA' + 'numB' es 'resultado'",   
// de igual manera le dejo el código de cómo quedaría:

/*     let result;
    switch (operator) {
      case '+':
        result = suma(numA, numB);
        display.value = 'La suma de ${numA} + ${numB} es ${result};
        break;
      case '-':
        result = resta(numA, numB);
        display.value = 'La resta de ${numA} - ${numB} es ${result};  
        break;
      case '*':
        result = multiplicacion(numA, numB);
        display.value = 'La multiplicación de ${numA} * ${numB} es ${result};
        break;
      case '/':
        result = division(numA, numB);
        display.value = 'La división de ${numA} ÷ ${numB} es ${result};
        break;
      default:
        result = 'Error';
    }
*/
    // Mostrar el resultado
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
};

