const url='https://reqres.in/api/users?page=1';
var imag= document.getElementById("articulo");
fetch(url)
.then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

      console.log(myJson.data);
      imag.innerHTML = `

      <img src="${myJson.data[1].avatar}" width="450px;" height="250px;">
      <p>${myJson.data[1].first_name} ${myJson.data[1].last_name}</p>
      <p>${myJson.data[1].email}</p>
      `

  });
