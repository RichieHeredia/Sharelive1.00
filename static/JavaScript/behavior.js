{% load static %}
function countDown(y, m, d, h, selector) {

  simplyCountdown(selector, {
    year: y, // required
    month: m, // required
    day: d, // required
    hours: h, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
      days: 'día',
      hours: 'hora',
      minutes: 'minuto',
      seconds: 'segundo',
      pluralLetter: 's'
    },
    plural: false, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: true, //Use UTC as default
    onEnd: function() {

      return;
    }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
  });


};
countDown(2020, 6, 12, 12, ".counter-1e");
countDown(2020, 6, 2, 11, ".counter-2e");
countDown(2020, 7, 2, 16, ".counter-3e");
countDown(2020, 5, 8, 17, ".counter-4e");
countDown(2020, 5, 6, 21, ".counter-5e");
countDown(2020, 5, 11, 1, ".counter-6e");


// username
// Get the username
function getData() {
  var username = document.getElementById('username').value;
  var modal = document.getElementById("id01");
  var btnin = document.getElementById('sign');
  var parr = document.getElementById('msg');
  //menu options
  var lib = document.getElementById('library');

  if (username === "sharelive") {
    console.log(username);
    modal.style.display = "none";
    btnin.remove();
    parr.innerHTML = '<h1 style="color:white;">' + username[0] + '</h1>';
    lib.href = "{% url 'biblioteca' %}";

  } else {
    console.log("usuario no registrado");
    alert("usuario no registrado");
    modal.style.display = "none";
  }

}
// end get username
// vertical carousel jquery
$(document).ready(function() {
  $("#waterwheel-carousel").waterwheelCarousel({
    orientation: 'vertical',
    separation: 130,
    horizonOffset: 60,
    opacityMultiplier: .8
  });
});
// end vertical carousel jquery

// changing the properties of the prom box
// eventos de clic
var numOfcategories = document.querySelectorAll(".prom").length;
// bg im
var fondo = document.getElementById("prom-container");

// category description
var mes_box = document.getElementById("mes_box");
// link ads
var adsLink = document.getElementById("ads");

for (var i = 0; i < numOfcategories; i++) {
  document.querySelectorAll(".prom")[i].addEventListener("click", function() {

    var itemTriggered = this.getAttribute("class")[8];
    console.log(itemTriggered);
    if (itemTriggered === "1") {
      // cambio de fondo de pag
      fondo.style.backgroundImage ='url("Articles/prom1.jpeg")';
      fondo.style.backgroundPosition = 'center';
      fondo.style.backgroundSize = 'cover';
      fondo.style.backgroundRepeat = 'no-repeat';
      fondo.style.opacity = "0.8";
      //cambio de descripción de categoria
      mes_box.innerHTML = "Ver más";
      //ads link
      adsLink.href = "https://www.bbccerveceria.com/agegate?destination=";

    } else if (itemTriggered === "2") {
      // cambiode fondo de pag
      fondo.style.backgroundImage = 'url("Articles/prom2.jpeg")';
      fondo.style.backgroundPosition = 'center';
      fondo.style.backgroundSize = 'cover';
      fondo.style.backgroundRepeat = 'no-repeat';
      fondo.style.opacity = "0.8";
      //cambio de descripción de categoria
      mes_box.innerHTML = "Ver más";
      //ads link
      adsLink.href = "https://www.bwcolombia.co/promociones/";

    } else if (itemTriggered === "3") {
      // cambiode fondo de pag
      fondo.style.backgroundImage = 'url("Articles/prom3.jpeg")';
      fondo.style.backgroundPosition = 'center';
      fondo.style.backgroundSize = 'cover';
      fondo.style.backgroundRepeat = 'no-repeat';
      fondo.style.opacity = "0.8";
      //cambio de descripción de categoria
      mes_box.innerHTML = "Ver más";
      //ads link
      adsLink.href = "https://www.ppc.com.co/product-category/promociones/";

    } else if (itemTriggered === "4") {
      // cambiode fondo de pag
      fondo.style.backgroundImage = 'url("Articles/c1.jpg")';
      fondo.style.backgroundPosition = 'center';
      fondo.style.backgroundSize = 'cover';
      fondo.style.backgroundRepeat = 'no-repeat';
      fondo.style.opacity = "0.8";
      //cambio de descripción de categoria
      mes_box.innerHTML = "Ver más";
      //ads link
      adsLink.href = "https://www.lahamburgueseria.com/promociones.html";
    } else if (itemTriggered === "5") {
      // cambiode fondo de pag
      fondo.style.backgroundImage = 'url("Articles/c2.jpg")';
      fondo.style.backgroundPosition = 'center';
      fondo.style.backgroundSize = 'cover';
      fondo.style.backgroundRepeat = 'no-repeat';
      fondo.style.opacity = "0.8";
      //cambio de descripción de categoria
      mes_box.innerHTML = "Ver más";
      //ads link
      adsLink.href = "https://www.dominos.com.co/";

    } else if (itemTriggered === "6") {
      // cambiode fondo de pag
      fondo.style.backgroundImage = 'url("Articles/prom1.jpeg")';
      fondo.style.backgroundPosition = 'center';
      fondo.style.backgroundSize = 'cover';
      fondo.style.backgroundRepeat = 'no-repeat';
      fondo.style.opacity = "0.8";
      //cambio de descripción de categoria
      mes_box.innerHTML = "Ver más";
      //ads link
      adsLink.href = "https://www.bbccerveceria.com/agegate?destination=";
    }
  });
}

// end changing the properties prom box
function texto(x) {
  var iden = x.getAttribute("id");
  var headline = document.getElementById("headline");
  console.log(iden);
  switch (iden) {
    case "imagen1":
      headline.innerHTML = "Barcelona vs Real Madrid";
      break;
    case "imagen2":
      headline.innerHTML = "Vive Live from Home";
      break;
    case "imagen3":
      headline.innerHTML = "El mejor StandUp group";
      break;
    case "imagen4":
      headline.innerHTML = "Recuerda lo mejor de tí";
      break;
    case "imagen5":
      headline.innerHTML = "Vive y disfruta con amigos";
      break;
    case "imagen6":
      headline.innerHTML = "Independencia digital";
      break;
    case "imagen7":
      headline.innerHTML = "Disfruta de este concierto";
      break;
    case "imagen8":
      headline.innerHTML = "los hits del momento";
      break;
    case "imagen9":
      headline.innerHTML = "Pacquiao vs Mayweather";
      break;
    case "imagen10":
      headline.innerHTML = "Super Bowl";
      break;

  }


  // if (iden === "imagen1") {
  //   headline.innerHTML = "Live from Home";
  // }else if(){
  //
  // }
}

function deltext(y) {
  // var parentremove = document.getElementById("imagen");
  // parentremove.remove();
}
