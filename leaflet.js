//var bounds = [[0,0], [14938,8666]];
var bounds = [[0,0], [8666,14938]];

var map = L.map('map', {
    crs: L.CRS.Simple,
    closePopupOnClick: false,
    maxBoundsViscocity: 0,
    minZoom: -2.5,
    maxZoom: 1,
    updateWhenZooming: true,
    noWrap: true
}).setView([3300 , 3910], zoom = -1).setMaxBounds(bounds);

L.imageOverlay('mystrune.jpg', bounds).addTo(map);

//map.fitBounds(bounds);


var sol = L.latLng([ 3700, 3910 ]);
var mystruneMap = '<img src="cities/mystrune/mystrune.svg"></img>'
// custom popup image + text
const customPopup =
  '<div class="customPopup"><img style="max-height:500px;max-width:500px;" src="cities/mystrune/mystrune.png"></img><div><h1>Mystrune, Capital</h1><p><strong>Población:</strong> 87.592 | <strong>Tamaño:</strong> 2.826 acres</p><p><strong>Demografía:</strong> Humano (70%), Mediano (20%), Dracónido (3%), Tiefling (1%), Enano (1%), Elfo (1%), Medio elfo (1%), Medio orco (1%), Tabaxi (1%), Gnomo (1%)</p><p>Encaramada sobre una costa besada por el zafiro, donde la niebla se aferra como velos espectrales, Mystrune se erige como un testamento de opulencia y sabiduría ancestral. El rey Theron Brightspire, de 48 años, gobierna con su legendaria espada larga "La Gracia de Aurum", equilibrando tradición y progreso mientras cosecha lealtad y respeto.</p><h2>Puntos de Interés</h2><h3>Tiendas Generales:</h3><ul><li><strong>Emporio de Scriven:</strong> Elara Scriven (230, elfa) - Especias raras y tesoros culinarios.</li><li><strong>El Engranaje y Cartógrafo:</strong> Grungle Ironforge (185, enano) - Mapas y herramientas celestiales.</li><li><strong>Seda y Hechizo:</strong> Lysandra Nightshade (127, tiefling) - Telas encantadas y sedas proféticas.</li><li><strong>La Curiosa Casa de Fieras:</strong> Thorne Briarwood (58, humano) - Criaturas exóticas y conocimientos eruditos.</li><li><strong>Aetherbright Armory:</strong> Kendra Brightforge (42, humana) - Armamento forjado con esencia celestial.</li></ul><h3>Herrerías:</h3><ul><li><strong>Yunques de Grimforge:</strong> Olav Grimforge (254, enano) - Armaduras y hojas con runas talladas.</li><li><strong>Fragua Susurroviento:</strong> Lyra Moonwhisper (168, elfa) - Armas imbuidas de energía celestial.</li><li><strong>Herrería Fuegodracónico:</strong> Bardin Ironmaw (147, medio orco) - Armamento hecho con huesos de dragón.</li><li><strong>El Yunque del Ruiseñor:</strong> Maeve Nightingale (83, gnomo) - Instrumentos con efectos mágicos.</li><li><strong>Fundición Corazón de Forja:</strong> Corvus Tideborn (49, humano) - Artefactos de temática oceánica.</li></ul><h3>Templos:</h3><ul><li><strong>Templo de Selûne:</strong> Aella Silvermoon (245, elfa lunar) - Observatorio lunar y estudio de astros.</li><li><strong>Santuario de Moradin:</strong> Gareth Stonehammer (178, enano) - Forja sagrada y artesanías divinas.</li><li><strong>Colegio de Eldath:</strong> Elowyn Whisperwind (215, elfa) - Hierbas curativas y enseñanzas druídicas.</li><li><strong>Culto de Tymora:</strong> Jade Whisperglimmer (68, mediana) - Juegos de azar y lecturas de fortuna.</li><li><strong>Bastión del Juramento:</strong> Valeria Stormbreak (42, humana) - Justicia y liderazgo de la guardia urbana.</li></ul><h3>Tabernas y Posadas:</h3><ul><li><strong>La Sirena Salada:</strong> Fiona Brightsail (52, humana) - Espíritu pirata y festines de mariscos.</li><li><strong>Melodías Lunares:</strong> Eamon Bardbright (38, humano) - Baladas celestiales y tapices de polvo estelar.</li><li><strong>El Percho del Grifo:</strong> Aeris Skyborn (265, elfa alada) - Vistas estelares y vidrieras celestiales.</li><li><strong>El Hogar de la Fragua Enana:</strong> Brogni Stonebeard (130, enano) - Brebajes potentes y camaradería bulliciosa.</li><li><strong>Sauces Susurrantes:</strong> Lysandra Nightshade (tiefling) - Habitaciones encantadas con secretos susurrados.</li></ul><h3>Otros Puntos de Interés:</h3><ul><li><strong>El Observatorio Espectral:</strong> Torre del reloj que revela planos astrales y apariciones fugaces.</li><li><strong>El Bosque Susurrante:</strong> Oasis bañado en luz esmeralda donde se rumorea que se conceden deseos.</li><li><strong>El Argentotheum:</strong> Museo de maravillas celestiales y artefactos ancestrales.</li><li><strong>El Bazar Astral:</strong> Mercado nocturno de artefactos arcanos y conocimientos prohibidos.</li><li><strong>Fortaleza Agujadracónica:</strong> Torre arcana y sede de conocimiento dracónico ancestral.</li></ul><p>Mystrune es un tapiz de maravilla y misterio, donde cada adoquín guarda una historia y cada susurro un secreto por revelar.</p></div></div>';

// specify popup options

const customOptions = {
  minWidth: "220", // set max-width
  maxHeight: "500"
};



L.marker(sol).addTo(map).bindPopup(customPopup, customOptions).addTo(map)



var sol = L.latLng([ 3200, 3658 ]);
L.marker(sol).addTo(map).bindPopup('Sol');

function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);



