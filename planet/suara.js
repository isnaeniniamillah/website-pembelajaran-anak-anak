function createsoundbite(e) { var t = document.createElement("audio"); if (t.canPlayType) { for (var n = 0; n < arguments.length; n++) { var r = document.createElement("source"); r.setAttribute("src", arguments[n]); if (arguments[n].match(/\.(\w+)$/i)) r.setAttribute("type", html5_audiotypes[RegExp.$1]); t.appendChild(r) } t.load(); t.playclip = function () { t.pause(); t.currentTime = 0; t.play() }; return t } else { return { playclip: function () { throw new Error("Your browser doesn't support HTML5 audio unfortunately") } } } } var html5_audiotypes = { mp3: "audio/mpeg", mp4: "audio/mp4", ogg: "audio/ogg", wav: "audio/wav" };

var merkurius = createsoundbite("suara/merkurius.wav");
var bumi = createsoundbite("suara/bumi.wav");
var jupiter = createsoundbite("suara/jupiter.wav");
var mars = createsoundbite("suara/mars.wav");
var neptunus = createsoundbite("suara/neptunus.wav");
var saturnus = createsoundbite("suara/saturnus.wav");
var uranus = createsoundbite("suara/uranus.wav");
var venus = createsoundbite("suara/venus.wav");