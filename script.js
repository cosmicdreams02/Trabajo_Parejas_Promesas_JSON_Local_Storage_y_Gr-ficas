const apiUrl = 'https://dog.ceo/api/breeds/image/random';

const btn = document.querySelector('#perro');


btn.addEventListener('click', (e) => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then(({message}) => {
      let imagen = document.querySelector('.perroprincipal');
      imagen.setAttribute('src', message);
      let array=message.split('/')
      
      localStorage.setItem(array[4], message);
      let box = document.querySelector('#dos');
      let url = localStorage.getItem(array[4])
      box.setAttribute('src',url );
      console.log(box);
    });
});

function recorridoRazas () {



  for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    alert(`${key}: ${localStorage.getItem(key)}`);
  }
  
}


