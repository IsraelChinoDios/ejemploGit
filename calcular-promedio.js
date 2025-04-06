// calculadora.js

/**
 * Suma dos números.
 * @param {number} a Primer número.
 * @param {number} b Segundo número.
 * @returns {number} La suma de a y b.
 */
function sumar(a, b) {
    return a + b;
  }
  
  /**
   * Calcula el promedio de un arreglo de números.
   * @param {number[]} numeros - Array de números.
   * @returns {number} El promedio de los números.
   */
  function calcularPromedio(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
      return 0;
    }
    let suma = 0;
    for (const num of numeros) {
      suma += num;
    }
    return suma / numeros.length;
  }
  
  // Ejemplo de uso:
  const datos = [10, 20, 30, 40];
  console.log("El promedio es:", calcularPromedio(datos));
  