let endpoint = "https://api.binance.com/api/v3/ticker/price";
fetch(endpoint)
  .then((responde) => responde.json())
  .then((data) => mostrarDAta(data))
  .catch((error) => console.log(error));

const mostrarDAta = (data) => {
  console.log(data);

  let body = "";

  for (let i=0; i < data.length; i++) {
    body += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`
}
document.getElementById('data').innerHTML = body

  document.getElementById("data").innerHTML = body;
};
