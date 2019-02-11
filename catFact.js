
const proxyurl = "https://cors-anywhere.herokuapp.com/";
let url = "https://cat-fact.herokuapp.com/facts/random?animal=cat&amount=1";
let fact = document.querySelector("#fact");


fetch(proxyurl + url)
.then(function(response) {
    return response.json()
  })
.then(function(data){
    fact.innerHTML = data.text;
})


