function createsoundbite(e) { var t = document.createElement("audio"); if (t.canPlayType) { for (var n = 0; n < arguments.length; n++) { var r = document.createElement("source"); r.setAttribute("src", arguments[n]); if (arguments[n].match(/\.(\w+)$/i)) r.setAttribute("type", html5_audiotypes[RegExp.$1]); t.appendChild(r) } t.load(); t.playclip = function () { t.pause(); t.currentTime = 0; t.play() }; return t } else { return { playclip: function () { throw new Error("Your browser doesn't support HTML5 audio unfortunately") } } } } var html5_audiotypes = { mp3: "audio/mpeg", mp4: "audio/mp4", ogg: "audio/ogg", wav: "audio/wav" };
var mouseoversound = createsoundbite("suara/A.mp3");
var merah = createsoundbite("suara/merah.mp3");
var biru = createsoundbite("suara/biru.mp3");
var hijau = createsoundbite("suara/hijau.mp3");
var oranye = createsoundbite("suara/oranye.mp3");
var kuning = createsoundbite("suara/kuning.mp3");
var pink = createsoundbite("suara/pink.mp3");
var hitam = createsoundbite("suara/hitam.mp3");
var coklat = createsoundbite("suara/coklat.mp3");
var abu = createsoundbite("suara/abu.mp3");
var ungu = createsoundbite("suara/ungu.mp3");
var birumuda = createsoundbite("suara/birumuda.mp3");
var silver = createsoundbite("suara/silver.mp3");
var hijaumuda = createsoundbite("suara/hijaumuda.mp3");
var magenta = createsoundbite("suara/magenta.mp3");
var maroon = createsoundbite("suara/maroon.mp3");
var gold = createsoundbite("suara/gold.mp3");
var birutua = createsoundbite("suara/birutua.mp3");
var putih = createsoundbite("suara/putih.mp3");