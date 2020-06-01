//eventos de clic bliblioteca
{% load static %}
var numOfcategories = document.querySelectorAll(".event").length;
//bg img
var fondo = document.getElementById("main");
//cards imgs
var imag1 = document.getElementById("img1");
var imag2 = document.getElementById("img2");
var imag3 = document.getElementById("img3");
var imag4 = document.getElementById("img4");
var imag5 = document.getElementById("img5");
var imag6 = document.getElementById("img6");
var imag7 = document.getElementById("img7");
var imag8 = document.getElementById("img8");
var imag9 = document.getElementById("img9");
var imag10 = document.getElementById("img10");
//category description
var des = document.getElementById("descrip");
var pdes= document.getElementById("pdes");
//number of cards
var num1= document.getElementById("carta1");
var num2= document.getElementById("carta2");
var num3= document.getElementById("carta3");
var num4= document.getElementById("carta4");
var num5= document.getElementById("carta5");
var num7= document.getElementById("carta7");
var num6= document.getElementById("carta6");
var num8= document.getElementById("carta8");
var num9= document.getElementById("carta9");
var num10= document.getElementById("carta10");
//src video
// var srcvid = document.getElementById("player");

for (var i = 0; i < numOfcategories; i++) {
  document.querySelectorAll(".event")[i].addEventListener("click", function() {

    var itemTriggered = this.getAttribute("class")[0];
    console.log(itemTriggered);
    if (itemTriggered === "s") {
      // cambio de fondo de pag
      fondo.style.backgroundImage = 'url("static/Multimedia/cat1.jpg")';
      fondo.style.backgroundPosition = '0 0';
      fondo.style.opacity = "0.9";
      // cambio de caratulas
      img1.src="Articles/1.jpg";
      num1.innerHTML="<strong>#1</strong>"
      img2.src="Articles/2.jpg";
      num2.innerHTML="<strong>#2</strong>"
      img3.src="Articles/3.jpg";
      num3.innerHTML="<strong>#3</strong>"
      img4.src="Articles/4.jpg";
      num4.innerHTML="<strong>#4</strong>"
      img5.src="Articles/5.jpg";
      num5.innerHTML="<strong>#5</strong>"
      img6.src="Articles/6.jpg";
      num6.innerHTML="<strong>#6</strong>"
      img7.src="Articles/7.jpg";
      num7.innerHTML="<strong>#7</strong>"
      img8.src="Articles/8.png";
      num8.innerHTML="<strong>#8</strong>"
      img9.src="Articles/9.jpg";
      num9.innerHTML="<strong>#9</strong>"
      img10.src="Articles/10.jpg";
      num10.innerHTML="<strong>#10</strong>"
      //cambio de descripción de categoria
      des.innerHTML = "Standup Comedy";
      pdes.innerHTML = "Sabemos que te encanta reírte y por eso hemos seleccionado los mejores shows y stand-up  en vivo y de lanzamiento del mundo";
      //cambio src player
      // srcvid.setAttribute("src","https://www.youtube.com/embed/xkWZhQ67Cq0");


    } else if (itemTriggered === "g") {
      // cambiode fondo de pag
      fondo.style.backgroundImage = 'url("Multimedia/cat2.jpg")';
      fondo.style.backgroundPosition = '0 0';
      fondo.style.opacity = "0.9";
      // cambio de caratulas
      img1.src="Articles/o1.jpg";
      img2.src="Articles/o2.jpg";
      img3.src="Articles/o3.jpg";
      img4.src="Articles/o4.jpg";
      img5.src="Articles/o5.jpg";
      img6.src="Articles/o6.jpg";
      img7.src="Articles/o7.jpg";
      img8.src="Articles/o8.jpg";
      img9.src="Articles/o9.jpg";
      img10.src="Articles/o10.jpg";
      //cambio de descripción de categoria
      des.innerHTML="Hobbies";
      pdes.innerHTML = "Tus pasatiempos favoritos hacen parte importante de tu vida por eso hemos seleccionado los mas impactantes para ti.";
      // cambio src player
      // srcvid.setAttribute("src","https://player.twitch.tv/?channel=playbattlegrounds&parent=www.example.com");
    } else if (itemTriggered === "c") {
        // cambiode fondo de pag
      fondo.style.backgroundImage = 'url("Multimedia/cat3.jpg")';
      fondo.style.backgroundPosition = '0 0';
      fondo.style.opacity = "0.9";
      // cambio de caratulas
      img1.src="Articles/g1.jpg";
      img2.src="Articles/g2.jpg";
      img3.src="Articles/g3.jpg";
      img4.src="Articles/g4.jpg";
      img5.src="Articles/g5.jpg";
      img6.src="Articles/g6.jpg";
      img7.src="Articles/g7.jpg";
      img8.src="Articles/g8.jpg";
      img9.src="Articles/g9.jpg";
      img10.src="Articles/g10.jpg";
      //cambio de descripción de categoria
      des.innerHTML="Conciertos en vivo";
      pdes.innerHTML = "Llena tu vida de buenas vibras y canta en compañía de tus artistas favoritos. Hemos escogido para ti los mejores exponentes de la música del Mudo…";
      //cambio de src player
      // srcvid.src = "https://player.twitch.tv/?channel=insomniac&parent=www.example.com";
    } else if (itemTriggered === "m") {
      // cambiode fondo de pag
      fondo.style.backgroundImage = 'url("Multimedia/cat4.jpg")';
      fondo.style.backgroundPosition = '0 0';
      fondo.style.opacity = "0.9";
      // cambio de caratulas
      img1.src="Articles/m1.jpg";
      img2.src="Articles/m2.jpg";
      img3.src="Articles/m3.jpg";
      img4.src="Articles/m4.jpg";
      img5.src="Articles/m5.jpg";
      img6.src="Articles/m6.png";
      img7.src="Articles/m7.jpg";
      img8.src="Articles/m8.jpg";
      img9.src="Articles/m9.jpg";
      img10.src="Articles/m10.jpeg";
      //cambio de descripción de categoria
      des.innerHTML="Conferencias ,clases y cursos";
      pdes.innerHTML = "En un mundo de constante cambio es importante que estemos actualizados y en búsqueda de nuestro crecimiento personal y físico.";
      //cambio src player
      // srcvid.src = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmileniotelevision%2Fvideos%2F942788656139566%2F&show_text=0&width=560";

    }
  });
}
