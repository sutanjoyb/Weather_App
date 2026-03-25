const url = 'https://open-weather13.p.rapidapi.com/fivedaysforcast?latitude=40.730610&longitude=-73.935242&lang=EN';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd3f33ef297msh1d66f3fb0082a3dp1ae6b0jsn97ca457e2e2c',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

fetch(url, options)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.error(error));