const apiUrl = 'https://dog.ceo/api/breeds/image/random';

const btn = document.querySelector('#perro');


btn.addEventListener('click', (e) => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((message) => {
      console.log(message);
      
    });
});
