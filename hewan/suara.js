function createsoundbite(e) { var t = document.createElement("audio"); if (t.canPlayType) { for (var n = 0; n < arguments.length; n++) { var r = document.createElement("source"); r.setAttribute("src", arguments[n]); if (arguments[n].match(/\.(\w+)$/i)) r.setAttribute("type", html5_audiotypes[RegExp.$1]); t.appendChild(r) } t.load(); t.playclip = function () { t.pause(); t.currentTime = 0; t.play() }; return t } else { return { playclip: function () { throw new Error("Your browser doesn't support HTML5 audio unfortunately") } } } } var html5_audiotypes = { wav: "audio/mpeg", mp4: "audio/mp4", ogg: "audio/ogg", wav: "audio/wav" };

var anjing = createsoundbite("suara/anjing.wav");
var ayam = createsoundbite("suara/ayam.wav");
var babi = createsoundbite("suara/babi.wav");
var bebek = createsoundbite("suara/bebek.wav");
var beruang = createsoundbite("suara/beruang.wav");
var burunghantu = createsoundbite("suara/burunghantu.wav");
var burung = createsoundbite("suara/burung.wav");
var dinosaurus = createsoundbite("suara/dinosaurus.wav");
var domba = createsoundbite("suara/domba.wav");
var gajah = createsoundbite("suara/gajah.wav");
var harimau = createsoundbite("suara/harimau.wav");
var katak = createsoundbite("suara/katak.wav");
var kucing = createsoundbite("suara/kucing.wav");
var monyet = createsoundbite("suara/monyet.wav");
var kuda = createsoundbite("suara/kuda.wav");
var lumbalumba = createsoundbite("suara/lumbalumba.wav");
var paus = createsoundbite("suara/paus.wav");
var sapi = createsoundbite("suara/sapi.wav");
var serigala = createsoundbite("suara/serigala.wav");
var ular = createsoundbite("suara/ular.wav");