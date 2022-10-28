//se agregan nombres significativos a las variables

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $name = document.querySelector('name');
const $blog = document.querySelector('#blog');
const $loc = document.querySelector('.location');


//se agrega el modificador async para poder utilizar la instruccion await
async function displayUser(username) {
  $name.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $name.textContent = '${data.name}';
  $blog.textContent = '${data.blog}';
  $loc.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $name.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);

