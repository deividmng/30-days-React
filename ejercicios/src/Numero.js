function esPrimo(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2, raiz = Math.sqrt(num); i <= raiz; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const Numero = ({ valor }) => {
    let color = ''; // Variable para almacenar el color de fondo
  

    
    if (valor % 2 === 0) {
      // Números pares tienen fondo verde
      color = 'green';
    } else if (esPrimo(valor)) {
      // Números primos (incluyendo el 2) tienen fondo rojo
      color = 'red';
    } else  {
      // Números impares tienen fondo amarillo
      color = 'yellow';
    } 
    
    
  
    // Establece el estilo del elemento según el color calculado
    const estilo = {
      backgroundColor: color,
      color: 'white', // Color del texto (blanco en este caso)
      padding: '10px', // Puedes ajustar el padding según tus necesidades
    };
  
    return (
      <span style={estilo}>
        {valor}
      </span>
    );
  };
  
  export default Numero;
  