// Charger plus de projets dans le pied de page

// vérifier quelle est la page active (via URL)
// dans la liste aléatoire des projets, choisir les deux suivants.

// définir liste des projets
var SevenDevices = [
	"Ipod-Nano", 
	"Maitre-Yoda",
	"Manette-PS2",
	"Oculus-Quest2",
  "Pioneer",
  "Polaroid",
  "Telecommande"
];

// 2. On établit un ordre aléatoire

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

shuffle(SevenDevices);

// On définit le nom de notre Cookie

var SevenDevicesID = "SevenDevicesSite";

// 3. On vérifie si le Cookie a déjà été défini:

var SevenDevicesProgress = Cookies.get(SevenDevicesID);