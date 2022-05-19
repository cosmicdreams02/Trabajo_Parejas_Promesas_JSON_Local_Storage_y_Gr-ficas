/* Utilizando la siguiente API: https://dog.ceo/dog-api/

Que devuelve imágenes aleatorias, habrá que ir coleccionando diferentes razas de perros pulsando un botón e ir rellenando una matriz (4x5) como la que se ve en las imágenes.

Se va añadiendo cada imágen a una casilla, además de almacenar los perros que van apareciendo para poder sacar estadísticas al final.

En caso de que alguna raza esté repetida, no se pondrá en la colección.

Cuando se haya completado todo el álbum aparecerá una gráfica de todas las razas que han salido y la de veces que se han ido contando.

Las imágenes ilustran el funcionamiento, pero la apariencia de la aplicación depende del grupo y se debe cuidar tanto como el funcionamiento; además se deben usar conocimientos de Flexbox y Grid en la medida de las posibilidades del diseño. */


const apiUrl = 'https://dog.ceo/api/breeds/image/random';

const btn = document.querySelector('#perro');

btn.addEventListener('click', (e) => {
  let arrayURL = [];
  let obj = {};
  let i = 0;
  if (localStorage.getItem('perritos') == null) {  // Se busca la clave perrito, si no esta nos devuelve null.
    localStorage.setItem('perritos', JSON.stringify([])); // En caso de no estar la creamos con un objeto vacío que contenga una cadena.
  }

  fetch(apiUrl)    // Llamada a la url.
    .then((response) => response.json())   // La promesa nos devuevle un JSON, y nos lo convierte a un objeto. Sigue siendo una promesa.
    .then(({ message }) => {               // De la promesa resuelta, se extrae el "message".
      let imagen = document.querySelector('.perroprincipal');  // Creamos una variable imagen donde almacenamos la url de la imagen principal.
  
      imagen.setAttribute('src', message);   // A esa imagen al atributo src le damos el valor del message que extrajimos es decir la url.
      let array = message.split('/');  // Cogemos la url y la dividimos cada vez que haya / gracias a .split. Y la almacenamos en la variable array como array.

      arrayURL = JSON.parse(localStorage.getItem('perritos'));   // Cargo del localstorage lo que tengo dentro de la clave "perritos", y lo convierto con .parse a un array. Y lo almacenamos en array URL.
      let busqueda = arrayURL.find((item) => item.id == array[4]);  // Comprobar si la raza ya existe. Es decir que la raza sea la misma clave que hemos guardado array.

      if (busqueda == undefined) {  // Con esta condición comprobamos si la raza no se ha repetido. 
        obj = { [array[4]]: message };  // Creo un objeto que tenga la clave raza: con valor url es decir "message".
        arrayURL.push(obj);   // Ahora al array le agregamos el objeto.

        arrayURL.forEach((element) => {   // Recorremos el array.
          let valores = Object.values(element);  // // En la variable valores guardamos un nuevo array solo con los valores del objeto. (LAS URL).
          valores.forEach((elem) => { // Recorremos las url.
            i++;                      // Usamos el contador i para coger los selectores de las imagenes. 
            let img = document.querySelector(`#img${i}`);
            img.setAttribute('src', elem);
          });
        });
        localStorage.setItem('perritos', JSON.stringify(arrayURL));
      } else {
        console.log('ya está');
      }
    });
});




