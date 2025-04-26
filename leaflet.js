const bounds = [[0,0], [8666,14938]];

var map = L.map('map', {
    crs: L.CRS.Simple,
    closePopupOnClick: false,
    maxBoundsViscocity: 0,
    minZoom: -2.5,
    maxZoom: 1,
    updateWhenZooming: true,
    noWrap: true
}).setView([3300 , 3910], zoom = -1).setMaxBounds(bounds);

L.imageOverlay('mystruneworldmap.jpg', bounds).addTo(map);

// Map Images

// Mystrune
const mystruneMap = "cities/mystrune/mystrune.svg"
const thriceDrownedMap = "cities/mystrune/thrice_drowned.svg"
const stoneybeckMap = "cities/mystrune/stoneybeck.svg"
const stocktonOnTeesMap = "cities/mystrune/stockton-on-tees.svg"
const kingsFallMap = "cities/mystrune/kings_fall.svg"
const talonfordMap = "cities/mystrune/talonford.svg"
const foamdockMap = "cities/mystrune/foamdock.svg"
const greenmoorMap = "cities/mystrune/greenmoor.svg"
const whitecliffMap = "cities/mystrune/whitecliff.svg"
const muntleMap = "cities/mystrune/muntle.svg"
const highfieldFortMap = "cities/mystrune/highfield_fort.svg"
const silverthroatFallsMap = "cities/mystrune/silverthroat_falls.svg"
const elmswyckMap = "cities/mystrune/elmswyck.svg"
const alderlyMap = "cities/mystrune/alderly.svg"
const suthburyMap = "cities/mystrune/suthbury.svg"
const offasHoldMap = "cities/mystrune/offas_hold.svg"
const eirasRunMap = "cities/mystrune/eiras_run.svg"
const havencrestMap = "cities/mystrune/havencrest.svg"

// Wessengard

const tiefenbachMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const thalgrunMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const schwarzwaldMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const konigsruhMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const nordmarkMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const meerwatchMap = '<img src="cities/mystrune/mystrune.svg"></img>'

// Gharnata

const amunsRestMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const laylaqanMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const arkzumMap = '<img src="cities/mystrune/mystrune.svg"></img>'

// Harrowvale

const hochburgMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const eisenhafenMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const grimholtMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const drachenfelsMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const wolfsgardMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const newLendraMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const oldLendraMap = '<img src="cities/mystrune/mystrune.svg"></img>'


// Castelbruzzo

const portoFioraMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const sienaraMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const valtameriMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const fiumerossoMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const torvoMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const lunaraCastraMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const vallegraziaMap = '<img src="cities/mystrune/mystrune.svg"></img>'

// Himawara

const ryujinmaruMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const baiyueMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const jiangkazeMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const tengrikhanMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const kagemyrMap = '<img src="cities/mystrune/mystrune.svg"></img>'

// Lochlannar

const caerBranMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const brynTaraMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const erynDaleMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const tirNaMarMap = '<img src="cities/mystrune/mystrune.svg"></img>'

// Mercia's Reach

const lannarverthMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const tregorienMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const kerzhalMap = '<img src="cities/mystrune/mystrune.svg"></img>'

// Vyrnirheim

const helsvikMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const frostreachMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const haldrimsPyreMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const rimeforgeMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const thaldrimMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const ravengardMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const vallengardeMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const drangsaettrMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const brinjarsHoldMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const niflsteadMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const windermereMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const draugrvikMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const montelorneMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const lorrenthalMap = '<img src="cities/mystrune/mystrune.svg"></img>'

// Aesgareth

const skjornhaldMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const eyrunsteadMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const isfjornMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const thorvaaldMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const runestoneKeepMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const sternbjornKeepMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const frosthavenMap = '<img src="cities/mystrune/mystrune.svg"></img>'

// Morrigan's Dominion

const dolmenwoodMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const aescburyMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const wychmereMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const dunMorriganMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const morlaixHollowMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const sceaftesburhMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const cynehelmMap = '<img src="cities/mystrune/mystrune.svg"></img>'

// Vaelgrund

const vetrfjallMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const torvaenMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const bjarnholdMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const braemoorMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const vorthallMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const fenlowMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const stonehelmMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const tyrwinnMap = '<img src="cities/mystrune/mystrune.svg"></img>'

// Thynglad & The South

const branthollowMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const hrafngardMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const skrnsteadMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const hjallvikMap = '<img src="cities/mystrune/mystrune.svg"></img>'

// Lendra & Pendrill's Gap

const brinhildsWatchMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const thorinsHoldMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const glorindoreMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const pendrillsGapMap = '<img src="cities/mystrune/mystrune.svg"></img>'

// Sijilmassa

const amanziNtsunduMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const sharifanHoldMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const azZahratMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const nubiraharMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const rashidaharMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const banuSalamanMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const abuFayadahMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const alKhazadMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const tetuoacemMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const adDamaliMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const kasbahAlQadimMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const qasrAlMarrMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const alMuradMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const salamaharMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const nurwadMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const emurAlBinMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const hassanahMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const kharizQalAtMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const qasrulNurMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const zharabadMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const alMiskMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const rahmahqanMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const tzindarMap = '<img src="cities/mystrune/mystrune.svg"></img>'

// The Northfold

const deepdaleMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const carstonUponShoreMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const dragonsRestMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const keuzMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const eldremarHarborMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const sallysOrchardMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const highfieldMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const brynhavenMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const eldoriaMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const redbayMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const theJunctionMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const longbowMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const sentinelsCreekMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const windvaleMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const theBulwarkMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const koromeMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const glenArborMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const mythwealdHollowMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const hameMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const stillwoodMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const gullPointeMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const longmeadowsMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const doranBayMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const everreachMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const thistlewicksLandingMap = '<img src="cities/mystrune/mystrune.svg"></img>'

// Llyandros

const redcliffMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const emberdaleMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const greenhillMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const blackmoorMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const eldradorMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const whitethorneMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const silvermistMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const thronfordMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const eldhamMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const thunderfallMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const theSpireMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const lillycrossMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const hilltopMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const starlightsHollowMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const ivorycliffeMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const whalehornMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const rogueyardMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const stCresthillMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const shipsHavenMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const theThirstMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const rivermouthMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const abandonementMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const glimerdeepMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const whisperingBluffsMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const brooksideMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const runewoodMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const mossbrookMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const amberfangHoldMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const caerlechMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const willowbrookMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const dawnbreakMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const yhaEntheasMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const briarsteadMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const glimmerbrookMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const brumMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const autumnrunMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const shadowglenMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const seersSquareMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const theForumMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const githraedMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const highGavgonachMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const ervelfirthMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const clomaHillMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const edwardsHeadMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const guildworthMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const wingentFieldMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const lynnsFollyMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const vyrlysGateMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const rivermistMap = '<img src="cities/mystrune/mystrune.svg"></img>'
const todeaFallsMap = '<img src="cities/mystrune/mystrune.svg"></img>'





// Popups




// Mystrune


const mystrunePopup =                                                                                                                                               
`<div class="customPopup"><h1>City Map</h1><a href=${mystruneMap} target=_blank"><img style="max-height:500px;max-width:500px;" src=${mystruneMap}></a></img><div><h1>Mystrune</h1><p><strong>Población:</strong> 87,592 hab., <strong>Tamaño:</strong> 2,826 acres<br /><strong>Demografía:</strong> Humano (70%), Mediano (20%), Dracónido (3%), Tiefling (1%), Enano (1%), Elfo (1%), Semielfo (1%), Semiorco (1%), Tabaxi (1%), Gnomo (1%)</p><p>Establecida sobre una costa besada por zafiros, donde las brumas se aferran a menudo como velos espectrales en el abrazo del amanecer, la ciudad de Mystrune se alza – un testimonio tanto de opulencia como del perdurable susurro de leyendas olvidadas. Esta extensa ciudad capital es un tapiz tejido con los hilos de innumerables sueños, cuyas grandiosas avenidas resuenan con la sinfonía del comercio, el arte y secretos susurrados transportados por la brisa acariciada por el mar. Cada deleite imaginable se encuentra en el vibrante corazón de la ciudad de Mystrune: desde vitrales celestiales que iluminan pináculos opulentos hasta calles empedradas que susurran relatos de emperadores olvidados desde hace mucho tiempo.</p><p>La ciudad de Mystrune se halla bajo el dominio del Rey Theron Brightspire, un soberano humano cuya estirpe se remonta a incontables generaciones de fuerza humana y victorias bendecidas por lo celestial.</p><p>A la edad de 48 años, Theron encarna la imagen misma de la fuerza y la realeza, un reinado cimentado en una tradición inquebrantable y aderezado con un toque de reforma audaz. Imparte respeto no solo mediante una fuerza férrea (aunque su Guardia Legionaria Aurum se mantiene siempre vigilante), sino a través de un carisma cultivado que atrae lealtad y disipa los murmullos del descontento. Conocido por empuñar la legendaria espada larga “La Gracia de Aurum”, imbuida de magia ancestral que, según se dice, otorga visiones de glorias olvidadas, Theron equilibra la tradición con un agudo sentido del progreso, fomentando el prestigio de la ciudad de Mystrune como un faro del logro humano y un punto de encuentro, tejido como un tapiz, de diversas culturas dentro de su reino. Prioriza grandiosos proyectos de infraestructura, impulsando el corazón económico de la ciudad mientras asegura que sus defensas se mantengan impenetrables frente a cualquier aspirante a usurpador o a la oscuridad invasora más allá del velo. Su reinado susurra ambición celestial y una voluntad resuelta de ver ver florecer la ciudad de Mystrune como testimonio del legado humano y la maestría en el escenario mundial.</p><h2>Puntos de Interés</h2><h3>Tiendas Generales:</h3><ul><li><strong>El Emporio de Scriven:</strong> Propiedad de Elara Scriven, una ágil mujer elfa de 230 años, este refugio para los amantes de la buena comida rebosa de especias exóticas, aceites culinarios relucientes e ingredientes míticos que se dice poseen propiedades restauradoras.</li><li><strong>El Engranaje y el Cartógrafo:</strong> Dirigida por Grungle Ironforge, un robusto artesano enano de 185 años, la tienda rebosa de engranajes intrincados, brújulas celestiales y mapas que representan islas inexploradas en el borde de los mundos conocidos.</li><li><strong>Seda y Hechizo:</strong> Lysandra Nightshade, una elegante tejedora tiefling de 127 años, selecciona hilos imbuídos con sutiles encantamientos – desde susurros de serena calma hasta sedas traslúcidas tejidas con destellos proféticos.</li><li><strong>La Menagerie Curiosa:</strong> El Magistrado Thorne Briarwood, un erudito humano de 58 años y renombrado naturalista, preside esta menagerie donde criaturas exóticas como salamandras de fuego, lirios cantores y halcones tocados por la luna se comercian con una pizca de reverencia erudita.</li><li><strong>La Armería Aetherbright:</strong> Dirigida por Kendra Brightforge, una herrera humana de 42 años reconocida por su innovación, la armería ofrece armas besadas por fuego celestial, cuyos filos destellan tenuemente con una energía de otro mundo.</li></ul><h3>Herrerías:</h3><ul><li><strong>Los Yunques de Grimforge:</strong> Olav Grimforge, un guerrero enano curtido de 254 años, forja armaduras de placas inquebrantables y espadas largas magistralmente elaboradas con runas que susurran relatos de antiguas batallas.</li><li><strong>La Forja Whisperwind:</strong> Lyra Moonwhisper, una elegante artesana elfa de 168 años, fabrica ganzúas delicadas, armamento de asedio finamente ajustado y hojas ceremoniales ornamentadas imbuidas con un resplandor celestial.</li><li><strong>La Herrería Dragonfire:</strong> Bardin Ironmaw, un temible herrero semi-orco de 147 años, talla armas a partir de huesos de dragón recuperados – cuyos filos se calientan con un ardor persistente y dracónico. Bestial, pero bello.</li><li><strong>El Yunque del Ruiseñor:</strong> Maeve Nightingale, una ágil inventora y herrera gnoma de 83 años, combina arte e ingenio, creando instrumentos musicales que estallan en ráfagas de fuerza concusiva cuando se tocan en armonías específicas.</li><li><strong>La Fundición Corazón de Forja:</strong> Corvus Tideborn, un estoico artesano humano de 49 años con una conexión a las profundidades, forja armas a partir de tesoros hundidos recuperados – imbuidas de una energía oceánica inquietante pero seductora.</li></ul><h3>Templos:</h3><ul><li><strong>Templo de Selûne:</strong> La Suma Sacerdotisa Aella Silvermoon, una elegante elfa lunar devota a la diosa de la paz y la protección, de 245 años, preside este templo que cuenta con un observatorio astronómico para trazar constelaciones en sus jardines iluminados por la luna.</li><li><strong>Santuario de Moradin:</strong> El Clérigo Maestro Gareth Stonehammer, un devoto sacerdote enano de 178 años, custodia la forja sagrada en este templo dedicado a la fuerza y la artesanía. Los visitantes dejan ofrendas de herramientas finamente elaboradas, bendecidas con una resiliencia divina.</li><li><strong>Collegium de Eldath:</strong> Elowyn Whisperwind, una enigmática druida elfa de 215 años, supervisa un santuario donde los susurros del Bosque se entrelazan con lecciones arcanas y hierbas curativas se cultivan en muros vivientes.</li><li><strong>Culto de Tymora:</strong> Jade Whisperglimmer, una astuta pícara mediana convertida en sacerdotisa de 68 años, preside un templo cuyas consultas de adivinación y juegos de azar se rumorea están bendecidos por la voluble diosa de la suerte.</li><li><strong>El Bastión del Guardián de los Juramentos:</strong> La Mariscal Valeria Stormbreak, una paladina humana y líder de la guardia de la ciudad de 42 años, rige los juramentos sagrados en este bastión dedicado a la fuerza, la justicia y a una vigilancia inquebrantable.</li></ul><h3>Tabernas y Posadas:</h3><ul><li><strong>La Sirena Salada:</strong> Fiona Brightsail, una ardiente capitana pirata convertida en posadera de 52 años, dirige su establecimiento con risas y un carácter áspero pero cálido. Un espíritu pirata y mariscos frescos son sus señas de identidad.</li><li><strong>Melodías a la Luz de la Luna:</strong> Eamon Bardbright, un carismático bardo humano de 38 años, encanta a los comensales con melodías e historias en su posada adornada con tapices celestiales tejidos con sedas besadas por el polvo de estrellas.</li><li><strong>El Nido del Grifo:</strong> Aeris Skyborn, una elegante elfa alada con una sabiduría forjada en los años (265), recibe a los huéspedes en su nido en la cima de la torre más alta de la ciudad – un refugio donde constelaciones celestiales se observan a través de vitrales y secretos susurrados se mezclan con la luz de las estrellas.</li><li><strong>El Hogar de la Forja Enana:</strong> Brogni Stonebeard, un jovial maestro cervecero enano de 130 años, mantiene una taberna bulliciosa renombrada por sus potentes brebajes y las ruidosas historias contadas en jarros en un ambiente reminiscentemente forjado.</li><li><strong>Sauces Susurrantes:</strong> La otra empresa de Lysandra Nightshade – esta posada está envuelta en secretos, con habitaciones de las que se dice que susurros encantados revelan verdades ocultas si se escucha lo suficientemente atento.</li></ul><h3>Otros Puntos de Interés:</h3><ul><li><strong>El Observatorio Espectral:</strong> Encumbrado en lo alto de una torre del reloj coronada por un espejo celestial en constante movimiento, otorga visión hacia planos astrales distantes cuando la ciudad se envuelve en la niebla matutina – los visitantes podrían presenciar apariciones fugaces y susurros de más allá.</li><li><strong>El Bosque Susurrante:</strong> Un oasis oculto en las profundidades de la ciudad donde antiguos árboles laten con una luz esmeralda viviente; se rumorea que concede deseos si se dejan ofrendas susurradas en sus ramas cubiertas de musgo.</li><li><strong>El Argentotheum:</strong> Este enigmático museo alberga artefactos de imperios olvidados y maravillas celestiales, con salones plateados que resuenan con los murmullos de glorias pasadas y custodiados por una silenciosa esfinge de piedra – los secretos en su interior pueden cambiar el destino de quien los descubre.</li><li><strong>El Bazar Astral:</strong> Un mercado clandestino que aparece únicamente bajo el resplandeciente ciclo lunar noctis, donde ingredientes arcanos, poderosos encantamientos y saberes prohibidos se intercambian abiertamente bajo un cielo salpicado de constelaciones jamás vistas en otro lugar.</li><li><strong>La Fortaleza Dragonspire:</strong> Las leyendas cuentan que esta colosal torre de vigilancia fue alguna vez el hogar de un anciano dragón adormecido; hoy es un centro de aprendizaje arcano donde magos maestros se sumergen en textos prohibidos y se buscan susurros olvidados de lenguas dracónicas.</li></ul><p>Dentro de la ciudad de Mystrune, la vida se despliega como un intrincado tapiz tejido con hilos de asombro, fe y el duradero atractivo de secretos que esperan ser desvelados.</p></div></div>`;

const thriceDrownedPopup =
`<div class="customPopup" style="min-width:500px;"><h1>City Map</h1><a href=${thriceDrownedMap} target="_blank"><img style="max-height:500px;max-width:500px;" src=${thriceDrownedMap}></a></img><div><h1>Tres Veces Ahogado</h1><p><strong>Población</strong>: 3,249, Size: 105 acres<br /><strong>Demografía</strong>: Humano (76%), Elfo (9%), Mediano (5%), Enano (3%), Gnomo (3%), Semielfo (2%), Semiorco (1%), Dracónido (1%)</p><p><strong>Tres Veces Ahogado</strong> se alza donde convergen dos poderosos ríos: el Silvertear y el Duskfall. Su nombre, una ironía sardónica hacia su historia de haber sido inundada rotundamente <em>dos veces</em> y reconstruida cada vez, ha evolucionado hasta convertirse en un dicho local que habla menos de melancolía y más de un espíritu inquebrantable. Gobernada por el pragmático y carismático Lord Yrmennoth Lamot, cuyo linaje se remonta a sus fundadores, la milicia de 200 miembros es tanto una guardia comunitaria unida como una fuerza de protección local.</p><p>Tres Veces Ahogado puede haber sido moldeada por el agua, pero su espíritu permanece indomable. En su corazón, entre calles empedradas y plazas de mercado bañadas por el sol, la vida florece:</p><h2>Lugares Destacados:</h2><ol><li><strong>Provisiones Sunforge</strong>: Un emporio cavernoso de bienes generales con un laberinto de delicias importadas y necesidades mundanas, desde sedas élficas hasta herramientas enanas. Cada estante cuenta una historia de conexiones lejanas.</li><li><strong>El Yunque de Plata</strong>: Donde el clamor del martillo sobre el acero entona una sinfonía de creación. Borin Ironforge (un enano robusto cuya barba tiene más fragmentos de metal que cabello, y cuya mirada refleja el fuego de las forjas ancestrales) transforma el hierro en obras maestras, desde utensilios sencillos hasta relicarios sagrados.</li><li><strong>El Dragón Sumergido</strong>: Una taberna bulliciosa donde se mezclan relatos de antiguas inundaciones, aventuras lejanas y profecías susurradas con el fuerte aroma de la cerveza local.</li><li><strong>El Faro en Reposo</strong>: Un santuario para viajeros cansados, gestionado por la gentil medioelfa Elara Nightshade (de lengua plateada que calma almas inquietas y cuyo hogar atrae a todos con su calor).</li><li><strong>Hilos Finos</strong>: Una modesta tienda dirigida por Tifawyn Fimblenamble (una joven gnoma), que ofrece los mejores productos a precios moderados para los locales, aunque desconfía de los forasteros: <em>"¡ni siquiera se han ahogado una vez!"</em>.</li></ol><p><strong>Templo</strong>: Un santuario subterráneo tallado en roca viva, dedicado a <strong>Tyr, Señor de la Justicia Forjada</strong>. En sus salas sagradas, las plegarias resuenan en paredes de obsidiana pulida, y destellos de luz celestial emergen de pozos sagrados. El Sumo Sacerdote Caelon Stoneheart (un enano estoico de voz atronadora) guía a los fieles por caminos de acción justa y fortalece su espíritu ante las adversidades.</p><h2>Personajes Notables:</h2><ol><li><strong>Eldrin Briarwood</strong> (cartógrafo elfo y cronista de tierras olvidadas): Un nómada de corazón, cuyos mapas guardan secretos de civilizaciones perdidas. Consulta al Templo de los Senderos Profundos para planear sus expediciones.</li><li><strong>Coanys</strong> (medioelfa bardo cuyas melodías entretejen alegría y dolor): Su voz arrastra a los oyentes con historias de héroes de eras pasadas y amores perdidos en el campo.</li><li><strong>Silas Brassboots</strong> (gnomo inventor cuyos artefactos son tan ingeniosos como impredecibles): Sueña con mecanismos alimentados por energía celestial y trabaja incansable en su taller sobre <em>"El Alambique Susurrante"</em>. Muchos creen que sus creaciones podrían salvar a la ciudad de su destino acuático.</li><li><strong>Moira "Tideborn" Silverstream</strong> (halfling cartógrafa y guardiana de conocimiento local): Lee los susurros de la historia en las corrientes fluviales, ofreciendo consejos y visiones del pasado y futuro de la ciudad. Su vida parece fluir al ritmo de los ríos.</li></ol></div></div>`;

const stoneybeckPopup =
`<div class="customPopup" style="min-width:500px;"><h1>City Map</h1><a href=${stoneybeckMap} target="_blank"><img style="max-height:500px;max-width:500px;" src=${stoneybeckMap}></a></img><div><h1>Stoneybeck</h1><p><strong>Nombre:</strong> Stoneybeck<br /><strong>Población:</strong> 710, <strong>Tamaño:</strong> 22 acres</p><p>Stoneybeck debe su prosperidad al corazón de un gigante dormido: una colosal sala enana tallada en la roca viva llamada Hammerhold. Construida por sus ancestros hace milenios, sostiene la ciudad en la superficie como un testimonio de su artesanía sin igual y dominio sobre la tierra y el fuego. Glinain Steelpick, descendiente de ese linaje y actual magistrado, gobierna con un puño de hierro pragmático, enfocado en mantener minas y forjas prósperas que alimentan el corazón enano y la alianza enano-humana. La milicia, compuesta principalmente por guardias enanos reforzados por levas humanas robustas, vigila tanto amenazas superficiales como susurros de inquietud subterránea desde las profundidades ancestrales.</p><p>La vida de Stoneybeck fluye no solo por rutas comerciales, sino también por un río desviado —sus aguas canalizadas bajo tierra para alimentar las forjas, una maravilla de su intrincado sistema de canalización.</p><h2>Negocios Destacados:</h2><ul><li><strong>El Yunque de Corazón de Hierro (Ironhearth Anvil):</strong> Una forja cavernosa dominada por el Maestro Herrero Borin Ironhearth, cuya risa retumba con cada golpe de martillo. Forja desde herramientas utilitarias hasta hachas enanas ceremoniales, imbuidas de bendiciones ancestrales y susurros de la tierra.</li><li><strong>Delicia del Explorador (Delver's Delight):</strong> Gestionada por la ágil enana Brynja Stoneclaw, esta tienda es un tesoro de armas afinadas y munición arcana. Atiende tanto a aventureros como a equipos de excavación enanos.</li><li><strong>Emporio de Stoneybeck (Stoneybeck Emporium):</strong> Un bazar cavernoso repleto de bienes mundanos y artesanías locales: tapices tejidos, adornos de obsidiana tallada, tallas óseas detalladas y frascos de mineral cristalizado brillante. Cada estante susurra historias de las profundidades o las llanuras circundantes.</li><li><strong>La Jarra del Minero (The Miner&apos;s Mug):</strong> Una taberna bulliciosa donde mineros y aventureros se relajan entre aromas terrosos y cerveza potente elaborada con un toque de raíz ígnea enana. Su propietario, Grimgar Oakenshield, entretiene con sagas subterráneas.</li><li><strong>La Cota de Malla (The Chainmail):</strong> Ubicada en lo alto de la sala enana, esta posada ofrece vistas panorámicas incomparables de las llanuras bajo la luna. Sus habitaciones, sorprendentemente refinadas, brindan lujo entre el encanto rudo.</li><li><strong>El Maullido del Gato (The Cats Meow):</strong> Escondido cerca del desagüe del río desviado, es más que un lugar para jugar cartas. Dirigido por Lyra Nightsong (una mujer humana delgada pero perspicaz), ofrece lecturas sobre profecías olvidadas y rituales de adivinación, mezclando folclore y energía arcana.</li><li><strong>Gruta Reluciente (Glimmering Grotto):</strong> Bañada por la luz etérea de gemas extraídas de la sala enana, exhibe una deslumbrante variedad de piedras raras: amatistas, citrinos y ópalos.</li></ul><h2>Personajes de Interés:</h2><ul><li><strong>Magistrado Glinain Steelpick:</strong> Descendiente de la nobleza enana ancestral, empuña un martillo de guerra forjado por su linaje tanto como su autoridad legal. Prioriza la fortaleza y prosperidad de Stoneybeck, con un toque de terquedad enana.</li><li><strong>Anciano Grimgar Oakenshield (Dueño de La Jarra del Minero):</strong> Más que un anfitrión jovial, es una crónica viviente de la historia de Stoneybeck, guardando fragmentos de sabiduría enana y ecos espectrales de excavaciones olvidadas.</li><li><strong>Lyra Nightsong (Dueña de El Maullido del Gato):</strong> Aunque discreta, sus lecturas revelan más sobre las personas que sobre los versos crípticos que canaliza.</li></ul></div></div>`;

const stocktonOnTeesPopup =
`<div class="customPopup" style="min-width:500px;"><h1>City Map</h1><a href=${stocktonOnTeesMap} target="_blank"><img style="max-height:500px;max-width:500px;" src=${stocktonOnTeesMap}></a></img><div><h1>Stockton-on-Tees</h1><p><strong>Nombre:</strong> Stockton-on-Tees<br /><strong>Población:</strong> 62, <strong>Tamaño:</strong> 4 acres</p><p>Ubicado junto a un río de suaves meandros, Stockton-on-Tees es una aldea donde casi siempre se escucha el susurro de las praderas azotadas por el viento y se siente la suave caricia del sol en el rostro. Su historia es la de generaciones cuidando tierras fértiles, un legado no tallado en piedra, sino tejido en ricas alfombras de césped y pastos vibrantes que nutren a las ciudades circundantes. Finare Hildenni, descendiente de los primeros administradores cuyo linaje resuena en baladas locales, gobierna como su Guardiana, con una sabiduría arraigada en el lore ancestral y la observación de las estaciones cambiantes. La pequeña milicia de Stockton-on-Tees no es una fuerza, sino una vigilancia unida—vecinos que protegen contra saqueadores o susurros de bestias salvajes en las tierras indómitas más allá.</p><p>La vida aquí gira en torno a los lazos comunitarios y el ritmo de la naturaleza. Los campos abiertos son su corazón, cada brizna de hierba un testimonio de su dedicación y armonía con la tierra.</p><h2>Negocios Destacados:</h2><ul><li><strong>La Espina de la Rosa:</strong> Cerca del centro de Stockton-on-Tees se alza una forja gastada por el tiempo, sus llamas titilando bajo el cielo crepuscular. Supervisada por el estoico Will Thorne, aquí se forjan herramientas sencillas pero duraderas: guadañas para cosechar su abundancia, carros resistentes para transportar heno y armaduras o armas modestas cuando se necesitan.</li><li><strong>El Arado Verde:</strong> Una bulliciosa tienda repleta de necesidades y delicias locales. Sus estantes exhiben textiles tejidos a mano, frutas preservadas de cosechas abundantes y cerámica de barro.</li><li><strong>La Taberna y Posada El Cardo y la Flor:</strong> El corazón comunitario de Stockton, dirigido por la anciana Thistle (una humana mayor). Su cálida chimenea atrae a viajeros cansados, mientras el aire se llena de relatos entre jarras de hidromiel y platos de guisos sabrosos. Cada noche, la sala común se transforma en un canto vibrante de risas, historias compartidas y contemplación silenciosa bajo las constelaciones celestiales pintadas en el techo.</li></ul></div></div>`;

const kingsFallPopup =
`<div class="customPopup" style="min-width:500px;"><h1>City Map</h1><a href=${kingsFallMap} target="_blank"><img style="max-height:500px;max-width:500px;" src=${kingsFallMap}></a></img><div><h1>King's Fall</h1><p><strong>Población</strong>: 238, <strong>Tamaño</strong>: 7 acres</p><p>Antaño un terreno sagrado donde un rey legendario encontró su final hace siglos, <strong>La Caída del Rey</strong> (King's Fall) ahora lleva el manto de una elaborada farsa turística. Cada establecimiento afirma estar construido sobre el lugar donde murió el monarca caído, compitiendo por visitantes con relatos extravagantes y precios inflados. El verdadero lugar de descanso del rey olvidado sigue siendo un misterio, lo que permite a los aldeanos perpetuar el engaño bajo el gobierno benévolo (pero fácilmente distraído) del Magistrado <strong>Brobern Steson</strong>. Una milicia diezmada, más preocupada por su pan diario que por profecías antiguas, hace poco por disipar la historia inventada.</p><h2>Puntos de Interés:</h2><ul><li><strong>La Forja Corazón de Hierro</strong>: El humo se eleva sin cesar de esta bulliciosa forja, donde el Maestro Herrero <strong>Throg</strong> martilla armas y armaduras, cada inscripción con un toque de bravuconería local que afirma linaje de los herreros del propio rey.</li><li><strong>La Fortuna de Barrow</strong>: Un emporio de bienes generales repleto de artículos mundanos y baratijas turísticas. Cada estante proclama una historia fabricada: <em>"En posesión del Tesorero del Rey"</em> o <em>"Usado en rituales sagrados en honor al monarca caído"</em>.</li><li><strong>El Cántaro Espectral</strong>: La taberna más antigua del pueblo, con vigas gastadas y lámparas de aceite parpadeantes que susurran historias olvidadas. La tabernera <strong>Moira</strong> sirve una cerveza que sabe sospechosamente al río cercano, pero afirma que alguna vez fue disfrutada por el propio rey.</li><li><strong>Curiosidades Grimhollow</strong>: Una tienda abarrotada de reliquias polvorientas, desde cálices astillados hasta armaduras deslustradas, cada una con una historia igualmente descabellada de procedencia real. El propietario, un hombre demacrado llamado <strong>Alistair</strong>, observa todo con intensidad inquietante.</li><li><strong>La Biblioteca del Sabio</strong>: Escondido tras El Cántaro Espectral, esta librería tranquila ofrece más que historias polvorientas. Los rumores dicen que <strong>Elara</strong> (la alquimista) también vende en secreto diarios codificados y conocimiento prohibido, accesible solo para quienes descifren sus pistas crípticas.</li></ul><h2>Posadas:</h2><ul><li><strong>El Bastión del Estandarte del Dragón</strong>: Presume de un vitral que muestra al (ficticio) dragón espectral que custodiaba la tumba del rey. Impecablemente limpia y con precios exorbitantes, sus afirmaciones son las más absurdas. Ofrecen sales de baño <em>"antaño sagradas"</em> y aseguran que el agua del pozo está imbuida con la esencia del rey.</li><li><strong>El Reposo del Errante</strong>: Una acogedora posada favorita de viajeros cansados de la farsa de La Caída del Rey. Sus relatos menos grandilocuentes y comidas caseras son un respiro bienvenido.</li><li><strong>El Sepulcro Susurrante</strong>: Una posada construida en una colina (convenientemente ubicada) con vistas panorámicas <em>"sobre la tumba"</em> y susurros espectrales llevados por el viento.</li><li><strong>El Descanso del Rey</strong>: Una posada pintoresca en el centro del pueblo, gestionada por <strong>Arthund</strong> (un humano joven). Afirma ser el lugar real donde el rey fue asesinado, con <em>"certificados de autenticidad"</em> firmados por un ejército de escribas adornando sus paredes.</li></ul><h2>Personajes de Interés:</h2><ul><li><strong>Magistrado Brobern Steson</strong>: Un hombre corpulento y jovial más interesado en el lucrativo comercio de historia inventada que en sus implicaciones éticas. Hace la vista gorda al engaño mientras sus arcas de impuestos sigan llenas.</li><li><strong>Elara</strong>: La enigmática alquimista y dueña del Scriptorium del Sabio. Sus secretos y motivos se ocultan tras capas de encanto excéntrico y brebajes potentes. Parece saber más sobre el rey olvidado de lo que revela.</li><li><strong>Lord Harrington</strong>: Un noble visitante que llega con su séquito, afirmando buscar el lugar de descanso perdido del rey por un artefacto poderoso que, según rumores, está enterrado allí. Aunque muchos lo ven como otro teatro, la obsesión genuina de Harrington podría desenterrar más verdad de la pretendida.</li></ul></div></div>`;

const talonfordPopup =
`<div class="customPopup" style="min-width:500px;"><h1>City Map</h1><a href=${talonfordMap} target="_blank"><img style="max-height:500px;max-width:500px;" src=${talonfordMap}></a></img><div><h1>Talonford</h1><p><strong>Nombre:</strong> Talonford<br /><strong>Población:</strong> 1.250, <strong>Tamaño:</strong> 40 acres</p><p>Talonford se alza con elegancia en la confluencia de un río fértil y el mar abierto, su corazón es un tapiz tejido de comercio y tranquilidad costera. Fundada menos por conquista que por su geografía ventajosa, ha sido durante mucho tiempo un puesto comercial modesto pero próspero para la región. Giles Grigthe, un aristócrata humano con más plata en sus arcas que destreza marcial, gobierna con un aire de prosperidad refinada en lugar de control férreo. La pequeña milicia sirve principalmente como vigilancia portuaria y patrulla costera, su fuerza reside menos en fortificaciones y más en una red bien engrasada de acuerdos comerciales y alianzas marítimas.</p><p>Con el vasto mar como su protector natural, Talonford se afianza como una arteria vital para el comercio regional, fomentando el crecimiento mediante el comercio en lugar del dominio territorial.</p><h2>Negocios Destacados:</h2><ul><li><strong>Armamentos Marea de Hierro:</strong> Ubicada en el bullicioso frente costero, su fragua resuena con el ritmo de los martillos y los gritos de las gaviotas mezclados con el aire salado. El Maestro Herrero Eamon Riversong forja herramientas duraderas para la navegación: anclas resistentes, ganchos de aparejo afilados y brújulas detalladas que guían a los barcos en alta mar.</li><li><strong>El Farol del Marinero:</strong> Un emporio repleto de necesidades mundanas e importaciones exóticas de tierras lejanas. La cerámica de barro se alinea junto a tapices que representan criaturas marinas fantásticas, sedas con secretos entre sus hilos y especias que prometen viajes gustativos.</li><li><strong>Puesto Comercial Vientosalado:</strong> Más que un puesto, es el corazón palpitante de la red marítima de Talonford. Una red de muelles conecta filas de puestos rebosantes de pescado fresco de redes locales, conchas y perlas de profundidades submarinas, vinos añejados en bodegas costeras y reliquias ancestrales rescatadas de naufragios olvidados.</li><li><strong>El Grifo Salado:</strong> Sus vigas susurran historias de incontables viajes y noches de grog compartidas. Los parroquianos disfrutan de un brebaje potente elaborado con algas marinas locales e historias de marineros salados, cada una añadiendo otra marca en la constante evolución de la vida costera de Talonford.</li><li><strong>El Reposo del Navegante:</strong> Escondida tras los muelles bulliciosos, ofrece descanso a viajeros y comerciantes. Sus habitaciones limpias y luminosas con vistas al puerto brindan un santuario del ritmo implacable del mar abierto, meciendo a los huéspedes con el suave chapoteo de las olas contra la piedra.</li></ul></div></div>`;

const foamdockPopup =
`<div class="customPopup" style="min-width:500px;"><h1>City Map</h1><a href=${foamdockMap} target="_blank"><img style="max-height:500px;max-width:500px;" src=${foamdockMap}></a></img><div><h1>Foamdock</h1><p><strong>Población:</strong> 6.176, <strong>Tamaño:</strong> 206 acres</p><p>Foamdock surgió de un refugio tallado en el corazón de un archipiélago alguna vez sin ley. Un capitán pirata llamado <strong>Ancis Lowe</strong>, conocido por su astucia, lideró a su variopinta tripulación para buscar indultos no por medios tradicionales, sino fundando un asentamiento modelo que abrazara su espíritu inconformista. Ahora gobierna con una mezcla de pragmatismo pirata y genuino cuidado por el vibrante tapiz de la ciudad. La milicia de Foamdock, una mezcla de <strong>lobos de mar veteranos</strong> y guardacostas recién formados, se enfoca menos en tácticas de asedio y más en respuestas rápidas ante cualquier amenaza en las aguas inquietas.</p><p>Su identidad sigue arraigada al mar: las atalayas son mástiles reutilizados, las reuniones estallan en mercados al aire libre y un toque de rebeldía salada impregna el aire. Ejemplo de ello es su <strong>Ayuntamiento</strong>: ancla la goleta pirata <em>Sea Serpent</em>, ahora atracada en la plaza central, cuyo timón sirve como faro para proclamas civiles y debates que resuenan con ecos de viejas canciones marineras.</p><h2>Negocios Destacados:</h2><ol><li><strong>El Estela del Yunque:</strong> Ubicada cerca de los muelles, esta forja crea herramientas duraderas: anclas, accesorios navales y tallas de serpientes marinas míticas usadas como amuletos. Sus armas personalizadas susurran historias del legado pirata.</li><li><strong>El Cartógrafo Salado:</strong> Un laberinto de cartas náuticas antiguas, sedas exóticas y artefactos rescatados de viajes olvidados. Exhibe la colección personal de Ancis, cada pieza con una historia tejida en sus grietas.</li><li><strong>La Moneda del Errante:</strong> Aquí, el trueque es arte. Bajo lámparas parpadeantes, se intercambian fortunas, telas finas y especias de puertos lejanos junto a relatos de alta mar.</li><li><strong>El Consorcio del Marino:</strong> Una red de puestos en un muelle de piedra, donde pescadores, mercaderes de gemas y narradores enigmáticos tejen el comercio de Foamdock.</li><li><strong>El Ahogado:</strong> Galeón reconvertido en taberna, donde el humo de pipa y los cantos marineros se mezclan con susurros de romances y traiciones.</li><li><strong>El Huso de la Sirena:</strong> Innnave con entrada discreta que esconde un <em>speakeasy</em>. Aquí, brebajes fuertes se intercambian por códigos piratas olvidados y rumores de paraísos insulares.</li><li><strong>El Kraken Oxidado:</strong> Antro de risas saladas y su famosa cerveza "Beso del Kraken", tan potente que inspira leyendas… y peleas.</li><li><strong>La Gaviota del Patíbulo:</strong> Posada con vistas al mar, atrae a mercantes y capitanes que buscan elegancia costera entre el caos portuario.</li></ol><h2>Personajes de Interés:</h2><ul><li><strong>Ancis Lowe (Capitán Gobernante):</strong> Combina el encanto canalla con un gobierno astuto, equilibrando su pasado pirata y su presente como líder. Siempre vigilante del mar y del corazón de Foamdock.</li><li><strong>Silas "Salado" Hawthorne (Dueño de El Cartógrafo Salado):</strong> Guardián de secretos marítimos y confidente de Ancis. Sus mapas y estantes esconden historias de islas perdidas, guiando a curiosos con complicidad y una sonrisa.</li></ul></div></div>`;

const greenmoorPopup =
`<div class="customPopup" style="min-width:500px;"><h1>City Map</h1><a href=${greenmoorMap} target="_blank"><img style="max-height:500px;max-width:500px;" src=${greenmoorMap}></a></img><div><h1>Greenmoor</h1><p><strong>Población:</strong> 140, <strong>Tamaño:</strong> 3 acres</p><p>Construida en un páramo protegido al borde de un bosque alfombrado de esmeralda, <strong>Greenmoor</strong> susurra historias de comienzos humildes. Fundada por un pequeño grupo de <strong>gente del bosque</strong> y sus familias que buscaban refugio de merodeadores en tiempos pasados, ha permanecido como un remanso de paz bajo la <strong>vigilancia benevolente de Helmund</strong>, un anciano humano cuya sabiduría es tan profunda como los valles que la rodean.</p><p><strong>En los modestos límites de Greenmoor:</strong></p><ul><li><strong>El Hogar de Elhonna:</strong> Esta iglesia humilde pero acogedora, dedicada a <strong>Elhonna</strong>, la diosa élfica de los bosques, rebosa de humo fragante de leña y el suave resplandor de <strong>hogueras eternas</strong>. Los fieles se reúnen para himnos sencillos y bendiciones, sus vidas entrelazadas con los ciclos de las estaciones celebrados por su fe.</li><li><strong>El Yunque Torcido:</strong> Este centro bullicioso sirve tanto de refugio para viajeros cansados como del corazón del comercio de Greenmoor. El aroma de pan recién horneado en su <strong>horno comunal</strong> se mezcla con los sabrosos olores de carnes asadas en la <strong>tabla del carnicero</strong>, todo bajo el ritmo del martilleo del herrero y las risas joviales del tabernero. Aquí, los chismes fluyen tan libremente como la cerveza, y se satisfacen necesidades desde herramientas resistentes hasta simples placeres como un guiso caliente en una noche ventosa.</li></ul><p>Greenmoor puede ser pequeña, pero su espíritu es inmenso: un testimonio de la fuerza perdurable que se encuentra en la <strong>satisfacción tranquila</strong> y la <strong>comunidad</strong>.</p></div></div>`;

const whitecliffPopup =
`<div class="customPopup" style="min-width:500px;"><h1>City Map</h1><a href=${whitecliffMap} target="_blank"><img style="max-height:500px;max-width:500px;" src=${whitecliffMap}></a></img><div><h1>Whitecliff</h1><p><strong>Población:</strong> 64,387, <strong>Tamaño:</strong> 3,4282 acres <br /> <strong>Demografía:</strong> Humano (74%), Elfo (8%), Enano (5%), Mediano (4%), Dracónido (3%), Tiefling (1%),  Semielfo (1%), Semiorco (1%), Tabaxi (1%), Gnomo (1%)</p><p>Encaramada en lo alto de acantilados de marfil, donde cada amanecer tiñe de oro y amatista un mar zafiro, se alza el radiante bastión de fe conocido como Whitecliff. Gobernada por un intrincado tapiz de sacerdocio y tradición sagrada, la ciudad es un testimonio de Lathander, el Señor del Alba, cuya vigilante presencia trae no solo luz, sino también defensa contra las sombras que acechan al mundo. La ciudad misma exhala una aura de serenidad celestial: templos esculpidos como perlas puras coronan sus alturas, las avenidas resuenan con plegarias entretejidas en susurros de brisa marina, y cada morada insinúa una vida de devoción armoniosa hacia su deidad radiante.</p><p>La Soberana Asteria Deakin, una humana de 72 inviernos, gobierna Whitecliff con gracia inquebrantable y perspicacia espiritual. Sus ojos guardan la sabiduría de siglos consagrados bajo la mirada del Señor del Alba. Aunque no empuña cetro terrenal, sus proclamas tienen el peso de un decreto celestial, guiando tanto asuntos cívicos como rituales sagrados dentro del dominio fiel.</p><h2>Tiendas Generales</h2><ol><li><strong>Provisiones Sunhollow</strong> dirigida por Kaelen Stormbreath (un robusto enano de 234 años): sus mejores provisiones saladas llevan susurros de las bendiciones de Lathander, dicen ahuyentar pesadillas y fortalecer el espíritu contra la penumbra.</li><li><strong>El Tapiz del Tejedor Astral</strong> (Elara Nightsong, una elegante tejedora élfica de 187 años): cursa hilos que brillan con luz espectral, tejidos en tapices sagrados, una fusión de arte celestial y diseño imbuido de fe.</li><li><strong>El Santuario del Escriba</strong>: Un refugio para el saber y la liturgia, supervisado por la devota sacerdotisa humana Lyra Sunweaver (46 años). En sus salones sagrados se preservan textos sagrados y códices iluminados que susurran las enseñanzas de Lathander.</li><li><strong>Implementos Dawnforge</strong>: Una forja sagrada abierta cada amanecer bajo la Aguja Radiante, donde un enano envuelto en un manto espectral llamado Elessar Stoneheart (edad desconocida, pero se rumorea que estuvo allí cuando la ciudad surgió) forja herramientas benditas con invocaciones susurradas a Lathander. Sus creaciones están imbuidas de fuerza y luz celestial.</li><li><strong>El Vivero del Arbolario Sagrado </strong> (un archivo viviente de flora entrelazada con fe), cuidado por Avani Lanstegan (una humana en sintonía con la naturaleza, 54 años). Aquí, flores besadas por la luna guardan plegarias y recuerdos sagrados en sus pétalos.</li></ol><h2>Templos</h2><ol><li><strong>La Aguja Radiante</strong>: Una majestuosa aguja de marfil que se eleva hacia los cielos, con vitrales que representan tapices celestiales. Gobernada por la Soberana Asteria Deakin desde su cámara de oración en la cima.</li><li><strong>Santuario del Crepúsculo Esmeralda</strong> (Templo de Sendarine): Un santuario en un bosque perpetuamente cubierto de musgo dentro de las murallas, cuidado por el Anciano Rowan Oakheart (humano de 88 años, cuya sabiduría rivaliza con la de los árboles). Ofrece bendiciones mediante susurros a árboles ancestrales.</li><li><strong>Catedral de la Llama Azur</strong>: Aquí yacen reliquias sagradas bañadas en luz matutina eterna. Supervisada por la Sacerdotisa Lyra Silverdawn (52 años), famosa por su toque curativo que canaliza la radiación del Señor del Alba.</li><li><strong>Santuario de Obsidiana de la Llama Ascendente</strong> (Templo de Boccob y otros): Una estructura recluida de mármol negro en las profundidades de la ciudad. Malkor Nightshadow (un taimado tiefling de ojos como brasas, 241 años), su enigmático sacerdote-mago, guía a los fieles en caminos de devoción disciplinada.</li><li><strong>Profundidades de Piedra Lunar</strong> (Templo de Umberlee): Una cámara de mosaicos sinuosos que muestra mareas celestiales y maravillas acuáticas, atendida por Aethra Coralespire (una serena sacerdotisa halfling de ojos como mares tranquilos, 34 años). Susurra profecías reveladas mediante conchas sagradas.</li></ol><h2>Tabernas y Posadas</h2><ol><li><strong>"El Hogar de Piedra Solar"</strong>: Un refugio acogedor con mesas comunales y comidas compartidas ante hogueras sagradas (dirigido por Elara, una humana enérgica de 46 años).</li><li><strong>Posada de la Aguja Astral</strong>: Encaramada en terrazas con vistas celestiales, ofrece lecturas susurradas por Aeravyn Starglimmer (65 años), cuyas melodías con su laúd plateado mezclan fe y alegría terrenal.</li><li><strong>El Paso del Peregrino</strong>: Un puerto sagrado para viajeros, gestionado por la gentil viuda Lyra Hopeheart (71 años). Sus vigas de corazón de roble guardan historias de devoción distante y fe silenciosa.</li><li><strong>Serenata del Alba</strong>: Taberna en el corazón de la ciudad donde Bardinn Aurumbright (un bardo jubiloso de 38 años, cuyo laúd entona himnos imbuidos de luz sagrada) lidera veladas de música y alegría entretejida con melodías piadosas.</li><li><strong>El Abrazo del Bosque Susurrante</strong>: Escondido dentro del Templo de los Susurros de Duskwood, ofrece elixires tranquilos (infundidos con energía lunar) servidos por Grekari Lannan (un elfo del bosque de 215 años, cuyo rostro impasible guarda sabiduría ancestral).</li></ol><h2>Tiendas Mágicas</h2><ol><li><strong>Elixires Celestiales</strong>: Una cámara consagrada donde la Hermana Helena (sacerdotisa humana devota, 43 años) mezcla ingredientes sagrados bendecidos por la llama de la ciudad, creando bálsamos y elixires que fortalecen el espíritu contra males espirituales.</li><li><strong>Augurios Astrales</strong>: La vidente Lyra Fernsh (mística élfica de 190 años) explora el cosmos desde una torre-claustro en la Aguja Radiante, usando un astrolabio de marfil para crear talismanes encantados y pronósticos que revelan giros sagrados en la vida de los fieles.</li><li><strong>La Forja Bendecida por la Luna</strong>: Aquí, Aelle Sunforge (una enana de cabello plateado tocada por luz y sombra, 256 años) graba runas sagradas en objetos cotidianos, transformándolos en guardianes contra la oscuridad, imbuidos con el poder de Lathander.</li><li><strong>El Telar Plateado del Alba</strong>: Elara Nightshade (humana de 43 años), tejedora en las profundidades de la Aguja Radiante, crea tapices y vestimentas donde cada hilo guarda una plegaria susurrada a Lathander, imbuida de su luz y armonía celestial.</li></ol><h2>Otros Lugares de Interés</h2><ol><li><strong>Jardín del Oráculo</strong>: Un bosque sagrado donde flores conscientes, adornadas con motivos celestiales, "hablan" mediante sus flores, ofreciendo visiones a almas elegidas. Cuidado por las Hermanas del Alba Floreciente, sacerdotisas que interpretan sus susurros.</li><li><strong>El Faro de Lathander</strong>: Un gigantesco reloj de sol de bronce, siempre envuelto en fuego sagrado alimentado por himnos al amanecer. Su luz santa vigila contra las sombras.</li><li><strong>Archivos de la Piedra del Alba</strong>: Ocultos bajo la Aguja Radiante, constelaciones vivas trazan eventos celestes antiguos, y escrituras en pilares de marfil susurran historias olvidadas de Lathander a eruditos y videntes.</li><li><strong>La Forja Celestial</strong>: Una forja geotérmica colosal que susurra con el corazón de Whitecliff. Solo Kargron Gaerdavohk, alias "El Yunque" (enano que forja armas y herramientas benditas por el Señor del Alba), la atiende.</li><li><strong>Profundidades de Piedra Lunar</strong>: Siete pozos sagrados donde aguas consagradas fluyen en armonías celestes, abiertos en días especiales. Se dice que guardan ecos de la primera luz de Lathander, usados para bautismos y visiones profundas.</li></ol><p>Estos elementos se entrelazan para pintar un vívido retrato de Whitecliff: un bastión de fe donde cada piedra susurra devoción, cada atardecer sangra el recuerdo del amanecer, y cada alba lleva la promesa de la vigilancia de Lathander. Más que una ciudad de poder terrenal, es un santuario celestial nutrido por una fe inquebrantable en la luz eterna.</p></div></div>`;

const muntlePopup =
`<div class="customPopup" style="min-width:500px;"><h1>City Map</h1><a href=${muntleMap} target="_blank"><img style="max-height:500px;max-width:500px;" src=${muntleMap}></a></img><div><h1>Muntle</h1><p><strong>Nombre:</strong> Muntle<br /><strong>Población:</strong> 112, <strong>Tamaño:</strong> 11 acres</p><p>Muntle, un refugio fundado por gnomos y resguardado por un anillo de empalizadas robustas, resiste la sinfonía incesante de lluvia que ha definido su existencia por generaciones. Fundado por Galsa Starpocket, una gnoma visionaria cuyo espíritu brilla tanto como sus herramientas de manitas, Muntle sirve como un faro de ingenio contra los aguaceros implacables.</p><h2>Puntos de Interés:</h2><ul><li><strong>El Cáliz Reluciente:</strong> Escondido bajo un techo cubierto de musgo esmeralda vibrante (diseñado para desviar hasta el aguacero más intenso), esta acogedora taberna es más que un refugio para almas cansadas. Sus lámparas de aceite parpadeantes proyectan una cálida luz sobre vigas manchadas por el agua, mientras el aroma de tortas de bellota especiadas e hidromiel de nuez y miel se mezcla con murmullos de relatos susurrados y juegos creados por gnomos.</li><li><strong>Engranajes y Calderos:</strong> Testimonio del espíritu inventivo de Galsa, este taller desordenado rebosa de engranajes relucientes, componentes encantados y artefactos experimentales. Más que una tienda, es un menagerie de inventos que ofrece soluciones para la vida bajo la lluvia perpetua: brotes de riego automático, pararrayos en forma de paraguas y rumores de creaciones aún por revelar.</li><li><strong>El Pozo Susurrante:</strong> Tallado en un afloramiento de granito cubierto de musgo cerca del corazón de la aldea, este pozo no solo provee agua limpia. Es un punto focal para reuniones comunitarias, donde se comparten historias bajo una cúpula protectora tejida, y el suave gorgoteo de sus aguas calma las mentes inquietas en la sinfonía de la lluvia eterna.</li></ul></div></div>`;

const highfieldFortPopup =
`<div class="customPopup" style="min-width:500px;"><h1>City Map</h1><a href=${highfieldFortMap} target="_blank"><img style="max-height:500px;max-width:500px;" src=${highfieldFortMap}></a></img><div><h1>Highfield Fort</h1><p><strong>Nombre:</strong> Fuerte Highfield<br /><strong>Población:</strong> 147, <strong>Tamaño:</strong> 9 acres</p><p>Encaramado en un peñasco azotado por el viento que domina un paso traicionero, el Fuerte Highfield vigila como centinela contra las tierras salvajes que lo rodean. Fundado hace siglos por clanes enanos expulsados de sus baluartes ancestrales por incursiones de goblins, se ha convertido en un pilar estratégico para la defensa de la frontera del reino. Su actual Guardiana, Frinan Sharpaxe, es tan severa como ruda. La milicia de la fortaleza, una compañía endurecida de guerreros enanos, vigila sin descanso el bandidaje y las amenazas monstruosas que acechan en las tierras salvajes circundantes.</p><h2>Puntos de Interés:</h2><ul><li><strong>El Yunque de Dragonforge:</strong> El ritmo del martillo contra el acero resuena en el corazón del fuerte. Dirigido por el enano sin maestro Bjorn Grimhearth, sus creaciones van desde armaduras y armas funcionales hasta tallas enanas intrincadas imbuidas de runas protectoras.</li><li><strong>El Alijo del Guardián:</strong> Escondida en una robusta torre de vigilancia, esta tienda ofrece más que necesidades básicas. Junto a carnes secas, frutas preservadas y herramientas utilitarias, alberga ungüentos curativos potentes, diseños de ingeniería de asedio enanos y artefactos de obsidiana tallados con motivos curiosos —restos de antiguos enemigos conservados como trofeos macabros.</li><li><strong>La Taberna del Posadero del Cuervo:</strong> Encaramada sobre el bullicioso patio de la armería, su nombre es un guiño a los vigilantes del fuerte. Los parroquianos disfrutan de jarras de cerveza especiada elaborada con hierbas de montaña y guisos robustos, compartidos con camaradería bulliciosa. Las historias de encuentros cercanos contra redadas de goblins y emboscadas de bandidos sazonan cada velada.</li><li><strong>El Reposo de Piedra Sombría:</strong> Un refugio refinado en el corazón mismo de la fortaleza. Decorado con tapices que representan héroes enanos ancestrales y con habitaciones comunes sorprendentemente lujosas, atiende a nobles visitantes o comerciantes exhaustos que buscan un santuario frente a la crudeza de la frontera.</li></ul></div></div>`;

const silverthroatFallsPopup =
`<div class="customPopup" style="min-width:500px;"><h1>City Map</h1><a href=${silverthroatFallsMap} target="_blank"><img style="max-height:500px;max-width:500px;" src=${silverthroatFallsMap}></a></img><div><h1>Silverthroat Falls</h1><p><strong>Nombre:</strong> Silverthroat Falls<br /><strong>Población:</strong> 3,803, <strong>Tamaño:</strong> 127 acres</p><p>Silverthroat Falls debe su existencia y prosperidad a un descubrimiento fortuito: vetas abundantes de plata ocultas bajo el corazón de una magnífica cascada. Urijor Tendriis, un explorador élfico perspicaz, fundó este asentamiento en un rincón antes indómito del mundo. Ahora, bajo su gobierno juicioso, Silverthroat se ha convertido en un centro comercial vibrante, impulsado por la exportación de hilo de plata finamente hilado y otros minerales raros de las laderas circundantes. La afluencia de riqueza atrajo la atención de varias religiones, creando una fascinante convergencia de comercio y devoción en el corazón del pueblo.</p><p>Aunque no está impulsada religiosamente, la prosperidad de Silverthroat ha cultivado un paisaje espiritual único:</p><h2>Iglesias:</h2><ul><li><strong>La Aguja Radiante:</strong> Bañada por la luz matutina que filtra sus vitrales de flores celestiales, esta capilla dedicada a Lathander irradia calidez y optimismo. Su jardín de oración al aire libre resuena con cantos de pájaros y susurros de bendiciones para días prósperos.</li><li><strong>El Arbolado Susurrante:</strong> Anidado entre abedules plateados cuyas hojas brillan como luz lunar hilada, este bosquecillo dedicado a Sehanine Moonbow exhala tranquilidad. Ofrendas de piedras lunares y tapices tejidos adornan sus altares, buscando guía lunar e inspiración celestial.</li><li><strong>Santuario de las Balanzas:</strong> Decorado con mosaicos de monedas fluyentes y escenas de trueque, este templo de Zilchus refleja el espíritu económico de Silverthroat. Sus salones bullen con mercaderes devotos cuyas plegarias silenciosas por tratos justos y cosechas abundantes son testimonio de su fe en la prosperidad.</li><li><strong>La Fe Forjada:</strong> Construido con granito tallado en formas geométricas casi impecables, este templo austero pero inquebrantable simboliza el orden y la tradición. Sus clérigos registran meticulosamente juramentos y juicios en sus salas sagradas, usando balanzas de plata celestial como símbolo de equidad.</li></ul><h2>Tiendas:</h2><ul><li><strong>El Emporio del Hilo de Plata:</strong> Más que una mercería, alberga una variedad ecléctica de telas finamente tejidas: desde linos cotidianos hasta prendas relucientes imbuidas de encantamientos protectores (favoritos de clérigos y paladines). El hilo de plata brillante es su joya principal, codiciado para vestiduras sagradas y talismanes poderosos.</li><li><strong>El Guantelete de Plata:</strong> Esta armería ofrece más que armas mundanas. Símbolos sagrados, martillos de guerra benditos y escudos con runas de protección atraen a clérigos y paladines de lejos. También incluye herramientas cotidianas forjadas con magia celestial: cinceles de cantero que susurran bendiciones o teteras encantadas para rituales.</li><li><strong>El Brebaje Argenta:</strong> Esta bulliciosa botica va más allá de ungüentos curativos. Pociones imbuidas de energía divina, aguas benditas consagradas por clérigos visitantes e ingredientes tan raros que inspiran susurros de lore olvidado atraen a curiosos de la fe y eruditos.</li></ul></div></div>`;

const elmswyckPopup =
`<div class="customPopup" style="min-width:500px;"><h1>City Map</h1><a href=${elmswyckMap} target="_blank"><img style="max-height:500px;max-width:500px;" src=${elmswyckMap}></a></img><div><h1>Elmswyck</h1><p><strong>Población:</strong> 98, <strong>Tamaño:</strong> 7 acres</p><p>Los habitantes de Elmswyck son dotados de una abundancia de inspiración lírica, transmitiendo a sus descendientes el don de narrar historias y componer canciones. Hoy en día, Elmswyck se erige como un renombrado campo de pruebas para bardos aspirantes, cada uno compitiendo por reconocimiento en el gran Festival Anual de la Luna Melódica. La juez del festival, una experimentada bardo llamada Aelarys "Voz de Plata", evalúa sus actuaciones con un oído atento tanto a la melodía como al sentimiento, eligiendo al vencedor cuya destreza artística deje la impresión más duradera en los habitantes.</p><h2>Puntos de Interés:</h2><ul><li><strong>La Pluma de Roble:</strong> Una encantadora librería rebosante de partituras, diccionarios de rimas y voluminosos libros de folclore muy usados. El aroma del pergamino envejecido se mezcla con el humo de pipa, creando un santuario para los bardos que perfeccionan su arte y para los habitantes que buscan relatos tejidos con tinta y verso.</li><li><strong>Los Laúdes Laberínticos:</strong> Tallados en la madera noble de olmos sagrados, estos instrumentos susurran secretos cuando son tocados por una mano experta. Propiedad y cuidado de un solitario tallador de madera, se dice que sostener uno, imbuido con el espíritu mismo del bosque, puede despertar emociones raramente capturadas en simples versos mortales.</li></ul></div></div>`;

const alderlyPopup =
`<div class="customPopup" style="min-width:500px;"><h1>City Map</h1><a href=${alderlyMap} target="_blank"><img style="max-height:500px;max-width:500px;" src=${alderlyMap}></a></img><div><h1>Alderly</h1><p><strong>Población:</strong> 42, <strong>Tamaño:</strong> 2 acres</p><p>Alderly, un fragmento de civilización enclavado entre antiguos robles y pinos que susurran, es un pequeño poblado que se aferra a la tradición en un mundo en constante cambio. Fundado por talladores de madera que buscaban un respiro de las bulliciosas ciudades portuarias de la costa, su historia resuena con el suave ritmo de torno en torno y el folklore transmitido a lo largo de generaciones. La actual administradora del poblado, Elara Thorne, una mujer cuyo linaje se remonta a los fundadores de Alderly, gobierna con mano firme pero justa, valorando la armonía comunal y la autosuficiencia.</p><h2>Lugares Destacados</h2><ul><li><strong>La Rama Torcida:</strong> Un taller desordenado repleto de tallados a medio terminar, maderas fragantes y el retumbar rítmico de los aprendices de Elara Thorne mientras aprenden su oficio. El aroma a aserrín y aceite impregna el ambiente, testimonio de generaciones de maestría artística.</li><li><strong>Cabaña "El Pozo Susurrante":</strong> Esta acogedora cabaña de piedra, situada en el borde del poblado, alberga al anciano de la aldea, conocido simplemente como Old Hearth. En su interior cálido, relatos tejidos por el crepitar del fuego y compartidos con tazas de sidra especiada han forjado el tapiz del folklore de Alderly durante siglos.</li></ul></div></div>`;

const suthburyPopup =
`<div class="customPopup" style="min-width:500px;"><h1>City Map</h1><a href=${suthburyMap} target="_blank"><img style="max-height:500px;max-width:500px;" src=${suthburyMap}></a></img><div><h1>Suthbury</h1><p><strong>Población:</strong> 1,538, <strong>Tamaño:</strong> 50 acres</p><p>Suthbury, bastión del comercio y la industria en el extremo sur de Mystrune, ha sido durante mucho tiempo el eje logístico para sus vecinos del norte. Fundada por comerciantes pragmáticos que buscaban consolidar el comercio a lo largo de rutas comerciales vitales, rechazó las inclinaciones arcanas de sus vecinos septentrionales en favor de soluciones sólidas basadas en estructuras duraderas. Gobernada por un Gremio de Mercaderes cuyos consejos, en constante cambio, priorizan la prosperidad económica y la armonía cívica, Suthbury es un testimonio de la ingeniosidad práctica sobre el embrujo esotérico.</p><h2>Puntos de Interés</h2><ul><li><strong>La Brújula Rota:</strong> Un gran emporio repleto de mapas meticulosamente elaborados, cartas náuticas y globos celestiales. Astrólogos patrocinados por el gremio ofrecen sus conocimientos aquí, asegurando que las rutas comerciales queden trazadas para un mañana próspero.</li><li><strong>Cooperativa de Husos y Forja:</strong> El retumbar rítmico de martillos golpeando el acero se mezcla con el zumbido de ruedas giratorias en este bullicioso taller. Maestros herreros y tejedores colaboran bajo un mismo techo, produciendo bienes duraderos y muy codiciados en todo Mystrune.</li><li><strong>La Posada del Descanso de la Serpiente:</strong> Más que simples alojamientos, es un cruce de caminos donde se tejen chismes y se cierran tratos. Viajeros de rincones lejanos cuentan historias sobre jarros de cerveza, mientras comerciantes susurran proposiciones en rincones sombríos.</li><li><strong>La Bodega de Sal:</strong> Rebosante de la abundancia del sur costero, este bullicioso mercado ofrece una gran variedad de pescado conservado, carnes saladas y especias que se comercian a lo largo de Mystrune. El trueque y el regateo amistoso son parte de la rutina diaria.</li><li><strong>Sombrerería Brillo Dorado:</strong> Desde simples gorros campesinos hasta elegantes sombreros adornados con flores tejidas, este establecimiento atiende a todos los gustos y ocasiones. Sus vibrantes escaparates atraen tanto a quienes buscan practicidad como a los amantes de la moda.</li><li><strong>Viales y Tribulaciones:</strong> Escondido en una calle empedrada, sus aromas terrosos esconden una vasta sabiduría en remedios curativos. El propietario, de avanzada edad, reparte remedios transmitidos a lo largo de generaciones, combinando la practicidad con la sabiduría del folklore.</li></ul></div></div>`;

const offasHoldPopup =
`<div class="customPopup" style="min-width:500px;"><h1>City Map</h1><a href=${offasHoldMap} target="_blank"><img style="max-height:500px;max-width:500px;" src=${offasHoldMap}></a></img><div><h1>Offa's Hold</h1><p><strong>Población:</strong> 387, <strong>Tamaño:</strong> 25 acres</p><p>Ubicada en lo alto de un escarpado promontorio que domina un peligroso paso montañoso, Offa's Hold se erige como un baluarte de lealtad inquebrantable. Gobernada por el resuelto medio orco Snakhagr, su corazón late con un solemne orgullo que evoca la antigua leyenda del sacrificio entretejida en su identidad. La fortaleza-ciudad nació de la leyenda de Eira Dimlight y Offa Grund: en un momento de aniquilación inminente, Offa sostuvo con firmeza el paso mientras Eira buscaba ayuda que nunca regresó. Este acto perdurable de devoción define su ethos: una fidelidad inquebrantable y fortaleza frente a la adversidad. Una persistente tensión con el cercano asentamiento de Eira's Run, nacido de la supuesta hazaña heroica de la mediana, colorea su historia y alimenta una silenciosa rivalidad transmitida de generación en generación.</p><h2>Puntos de Interés</h2><ul><li><strong>La Armería Stormbreaker:</strong> Más que una mera colección de armas y armaduras, este salón resuena con susurros de un valor ancestral. Desde espadas largas finamente forjadas hasta robustas ballestas de asedio, su inventario refleja la fuerza pragmática que se valora en sus muros. Los visitantes también pueden examinar cascos intrincados con viseras moldeadas como hocicos de lobos, un tributo silencioso a su juramento de custodia.</li><li><strong>La Posada del Hogar Centelleante:</strong> Su sala común crepita de calidez a pesar del frío que a menudo se cuela de las cumbres circundantes. Rebosantes hogazas de cebada, guisos sabrosos condimentados con hierbas locales de montaña, y una espumosa cerveza elaborada con agua derretida de glaciares atraen tanto a viajeros fatigados como a lugareños, en busca de consuelo y agradables conversaciones.</li><li><strong>Las Curiosidades de Grimwood:</strong> Escondido bajo un vigilante gárgola encaramado sobre el arco de entrada, este ecléctico emporio ofrece más que simples mercancías mundanas. Tomos polvorientos de saber olvidado, extrañamente hermosas figurillas talladas en obsidiana y rumores de amuletos encantados atraen a curiosos y coleccionistas de lejos, atestiguando su afinidad por lo inusual y los ecos del pasado.</li></ul></div></div>`;

const eirasRunPopup =
`<div class="customPopup" style="min-width:500px;"><h1>City Map</h1><a href=${eirasRunMap} target="_blank"><img style="max-height:500px;max-width:500px;" src=${eirasRunMap}></a></img><div><h1>Eira's Run</h1><p><strong>Población:</strong> 216 hab., <strong>Tamaño:</strong> 13 acres<br /><p>Nacida de una legendaria historia de osadía y devoción, Eira's Run se erige como testimonio del espíritu de la resiliencia. Fundada por la exploradora mediana Eira Dimlight, luego de que su poco probable compañera –el paladín medio orco Offa Grund (cuya naturaleza vacilante se refleja en la persistente rivalidad con el cercano Offa's Hold)– se quedara atrás, dejándola emprender su camino en solitario contra adversidades insuperables, la aldea encarna el coraje inquebrantable de Eira: un pueblo forjado con la determinación necesaria para sobreponerse a la adversidad. Aunque no existe un gobernante único, un consejo comunal dirige la comunidad, haciendo eco de la fuerza compartida que dio origen al asentamiento. La milicia, ferozmente independiente y hábil en la supervivencia en los bosques, actúa como encarnación viva del espíritu de su homónima –siempre vigilante, siempre dispuesta a enfrentar los desafíos de frente.</p><h2>Puntos de Interés</h2><ul><li><strong>El Cartógrafo Polvoriento:</strong> Más que un simple tendero de mapas y saber geográfico, este establecimiento funciona también como punto de encuentro comunal. Sillones desgastados flanquean hogueras parpadeantes, relatos susurrados se mezclan con el crepitar de las llamas, y aventureros buscan tanto direcciones como conversación en sus paredes marcadas por el tiempo.</li><li><strong>Provisiones de Briarwood:</strong> Rebosante de carnes curadas, quesos añejados a la perfección en bodegas subterráneas y de una vibrante miel cosechada de los bosques circundantes, este bullicioso mercado atiende tanto a las necesidades básicas como a los gustos refinados de la comunidad unida.</li><li><strong>El Arrullo del Yunque:</strong> El retumbar rítmico del martillo del herrero se funde con el murmullo constante del arroyo cercano. Esta forja ofrece no solo herramientas y armas resistentes, sino también intrincadas piezas de metal trabajadas con runas protectoras –talismanes que, según se dice, alejan la inquietud persistente de su historia.</li><li><strong>La Casa de Té de los Sauces Susurrantes:</strong> Escondida bajo un dosel de ramas de sauce, célebres por su etéreo susurro en la brisa vespertina, este sereno refugio brinda un respiro y propicia conversaciones profundas. Los vitrales que representan escenas de resiliencia y crecimiento proyectan una luz caleidoscópica sobre los comensales que disfrutan de bebidas endulzadas con miel y repostería recién horneada.</li></ul></div></div>`;

const havencrestPopup =
`<div class="customPopup" style="min-width:500px;"><h1>City Map</h1><a href=${havencrestMap} target="_blank"><img style="max-height:500px;max-width:500px;" src=${havencrestMap}></a></img><div><h1>Havencrest</h1><p><strong>Población:</strong> 1,538, <strong>Tamaño:</strong> 50 acres</p><p>Havencrest, un conjunto de madera envejecida y robustos adoquines que se aferran a la accidentada costa norte, se erige como un eco espectral de los sueños expansionistas abandonados de Mystrune. Fundada hace siglos durante una ferviente era de ambición imperial, se concibió como un puesto avanzado contra la expansión wessengardiana —una visión que se disolvió con el tiempo y el cambiante flujo del poder. Hoy, Havencrest se sitúa en la periferia, y sus habitantes consideran su vínculo con el reino continental más como una inscripción desvanecida que como una realidad vivida. Han forjado su existencia a partir de un paisaje implacable, abrazando una independencia ruda que evoca el espíritu de la frontera. El pueblo es gobernado por un colectivo conocido como el Consejo de Marea, elegido mediante tradiciones ásperas y sin ataduras a las normas cortesanas de Mystrune.</p><h2>Puntos de Interés</h2><ul><li><strong>La Forja Salada:</strong> Una forja cavernosa donde el hierro susurra relatos del viento marino mientras el acero fundido danza bajo un cielo vigilante. El linaje del maestro forjador se remonta a la fundación del pueblo, y sus herramientas son un testimonio silencioso de generaciones que han moldeado su mundo a partir de los elementos implacables.</li><li><strong>La Cala del Pescador:</strong> Un bullicioso frente marítimo donde los muelles desgastados rebosan de vida y la brisa salina se hace sentir en el aire. Los pescadores reparan redes, regatean por sus capturas y comparten la sabiduría adquirida con esfuerzo, mientras las gaviotas claman en lo alto, componiendo un coro de resiliencia costera.</li><li><strong>El Hogar de Havenwood:</strong> La casa comunal del pueblo —más que una simple taberna, es el escenario de veladas bardas en las que se susurran leyendas locales sobre jarros de cerveza artesanal, siendo el corazón donde convergen rumores y noticias de tierras lejanas.</li><li><strong>El Faro:</strong> Erigido en el acantilado más alto, su farol corta las brumas costeras con un propósito inquebrantable. Su cuidador lo atiende con devoción, actuando como un centinela silencioso contra los incesantes murmullos del mar inquieto.</li><li><strong>La Torre del Escritor:</strong> Una torre esbelta que alberga una pequeña pero bien surtida biblioteca. En ella reside el historiador del pueblo, quien narra sus vidas y teje relatos a partir de experiencias ganadas con esfuerzo —historias que rara vez se encuentran en los grandiosos archivos de Mystrune.</li><li><strong>El Manantial de la Niebla:</strong> Un oasis de tranquilidad escondido entre el bullicio de la vida costera. Este manantial, sagrado desde rituales olvidados hace mucho tiempo, susurra con una calma mística que atrae a las almas fatigadas y ofrece esperanza ante las mareas siempre cambiantes.</li></ul></div></div>`;


// Wessengard

const tiefenbachPopup =
`<div class="customPopup"><h1>Tiefenbach</h1>You have no information about this place yet...</div></div>`;

const thalgrunPopup =
`<div class="customPopup"><h1>Thalgrün</h1>You have no information about this place yet...</div></div>`;

const schwarzwaldPopup =
`<div class="customPopup"><h1>Schwarzwald</h1>You have no information about this place yet...</div></div>`;

const konigsruhPopup =
`<div class="customPopup"><h1>Königsruh</h1>You have no information about this place yet...</div></div>`;

const nordmarkPopup =
`<div class="customPopup"><h1>Nordmark</h1>You have no information about this place yet...</div></div>`;

const meerwatchPopup =
`<div class="customPopup"><h1>Meerwatch</h1>You have no information about this place yet...</div></div>`;

// Gharnata

const amunsRestPopup =
`<div class="customPopup"><h1>Amun's Rest</h1>You have no information about this place yet...</div></div>`;

const laylaqanPopup =
`<div class="customPopup"><h1>Laylaqan</h1>You have no information about this place yet...</div></div>`;

const arkzumPopup =
`<div class="customPopup"><h1>Arkzum</h1>You have no information about this place yet...</div></div>`;


// Harrowvale

const hochburgPopup =
`<div class="customPopup"><h1>Hochburg</h1>You have no information about this place yet...</div></div>`;

const eisenhafenPopup =
`<div class="customPopup"><h1>Eisenhafen</h1>You have no information about this place yet...</div></div>`;

const grimholtPopup =
`<div class="customPopup"><h1>Grimholt</h1>You have no information about this place yet...</div></div>`;

const drachenfelsPopup =
`<div class="customPopup"><h1>Drachenfels</h1>You have no information about this place yet...</div></div>`;

const wolfsgardPopup =
`<div class="customPopup"><h1>Wolfsgard</h1>You have no information about this place yet...</div></div>`;

const newLendraPopup =
`<div class="customPopup"><h1>New Lendra</h1>You have no information about this place yet...</div></div>`;

const oldLendraPopup =
`<div class="customPopup"><h1>Old Lendra</h1>You have no information about this place yet...</div></div>`;


// Castelbruzzo

const portoFioraPopup =
`<div class="customPopup"><h1>Porto Fiora</h1><p>You have no information about this place yet...</p></div>`;

const sienaraPopup =
`<div class="customPopup"><h1>Sienara</h1><p>You have no information about this place yet...</p></div>`;

const valtameriPopup =
`<div class="customPopup"><h1>Valtameri</h1><p>You have no information about this place yet...</p></div>`;

const fiumerossoPopup = 
`<div class="customPopup"><h1>Fiumerosso</h1><p>You have no information about this place yet...</p></div>`;

const torvoPopup =
`<div class="customPopup"><h1>Torvo</h1><p>You have no information about this place yet...</p></div>`;

const lunaraCastraPopup =
`<div class="customPopup"><h1>Lunara Castra</h1><p>You have no information about this place yet...</p></div>`;

const vallegraziaPopup =
`<div class="customPopup"><h1>Vallegrazia</h1><p>You have no information about this place yet...</p></div>`;


// Himawara Popups

const ryujinmaruPopup = 
`<div class="customPopup"><h1>Ryujinmaru</h1><p>You have no information about this place yet...</p></div>`;

const baiyuePopup = 
`<div class="customPopup"><h1>Baiyue</h1><p>You have no information about this place yet...</p></div>`;

const jiangkazePopup = 
`<div class="customPopup"><h1>Jiangkaze</h1><p>You have no information about this place yet...</p></div>`;

const tengrikhanPopup = 
`<div class="customPopup"><h1>Tengrikhan</h1><p>You have no information about this place yet...</p></div>`;

const kagemyrPopup = 
`<div class="customPopup"><h1>Kagemyr</h1><p>You have no information about this place yet...</p></div>`;

// Lochlannar Popups

const caerBranPopup = 
`<div class="customPopup"><h1>Caer Bran</h1><p>You have no information about this place yet...</p></div>`;

const brynTaraPopup = 
`<div class="customPopup"><h1>Bryn Tara</h1><p>You have no information about this place yet...</p></div>`;

const erynDalePopup = 
`<div class="customPopup"><h1>Eryn Dale</h1><p>You have no information about this place yet...</p></div>`;

const tirNaMarPopup = 
`<div class="customPopup"><h1>Tir Na Mar</h1><p>You have no information about this place yet...</p></div>`;

// Mercia's Reach Popups

const lannarverthPopup = 
`<div class="customPopup"><h1>Lannarverth</h1><p>You have no information about this place yet...</p></div>`;

const tregorienPopup = 
`<div class="customPopup"><h1>Tregorien</h1><p>You have no information about this place yet...</p></div>`;

const kerzhalPopup = 
`<div class="customPopup"><h1>Kerzhal</h1><p>You have no information about this place yet...</p></div>`;


// Vyrnirheim

const helsvikPopup = 
`<div class="customPopup"><h1>Helsvik</h1><p>You have no information about this place yet...</p></div>`;

const frostreachPopup = 
`<div class="customPopup"><h1>Frostreach</h1><p>You have no information about this place yet...</p></div>`;

const haldrimsPyrePopup = 
`<div class="customPopup"><h1>Haldrim's Pyre</h1><p>You have no information about this place yet...</p></div>`;

const rimeforgePopup = 
`<div class="customPopup"><h1>Rimeforge</h1><p>You have no information about this place yet...</p></div>`;

const thaldrimPopup = 
`<div class="customPopup"><h1>Thaldrim</h1><p>You have no information about this place yet...</p></div>`;

const ravengardPopup = 
`<div class="customPopup"><h1>Ravengard</h1><p>You have no information about this place yet...</p></div>`;

const vallengardePopup = 
`<div class="customPopup"><h1>Vallengarde</h1><p>You have no information about this place yet...</p></div>`;

const drangsaettrPopup = 
`<div class="customPopup"><h1>Drangsaettr</h1><p>You have no information about this place yet...</p></div>`;

const brinjarsHoldPopup = 
`<div class="customPopup"><h1>Brinjar's Hold</h1><p>You have no information about this place yet...</p></div>`;

const niflsteadPopup = 
`<div class="customPopup"><h1>Niflestead</h1><p>You have no information about this place yet...</p></div>`;

const windermerePopup = 
`<div class="customPopup"><h1>Windermere</h1><p>You have no information about this place yet...</p></div>`;

const draugrvikPopup = 
`<div class="customPopup"><h1>Draugrvik</h1><p>You have no information about this place yet...</p></div>`;

const montelornePopup = 
`<div class="customPopup"><h1>Montelorne</h1><p>You have no information about this place yet...</p></div>`;

const lorrenthalPopup = 
`<div class="customPopup"><h1>Lorrenthal</h1><p>You have no information about this place yet...</p></div>`;


// Aesgareth Popups

const skjornhaldPopup = 
`<div class="customPopup"><h1>Skjornhald</h1><p>You have no information about this place yet...</p></div>`;

const eyrunsteadPopup = 
`<div class="customPopup"><h1>Eyrunstead</h1><p>You have no information about this place yet...</p></div>`;

const isfjornPopup = 
`<div class="customPopup"><h1>Isfjorn</h1><p>You have no information about this place yet...</p></div>`;

const thorvaaldPopup = 
`<div class="customPopup"><h1>Thorvaald</h1><p>You have no information about this place yet...</p></div>`;

const runestoneKeepPopup = 
`<div class="customPopup"><h1>Runestone Keep</h1><p>You have no information about this place yet...</p></div>`;

const sternbjornKeepPopup = 
`<div class="customPopup"><h1>Sternbjorn Keep</h1><p>You have no information about this place yet...</p></div>`;

const frosthavenPopup = 
`<div class="customPopup"><h1>Frosthaven</h1><p>You have no information about this place yet...</p></div>`;

// Morrigan's Dominion Popups

const dolmenwoodPopup = 
`<div class="customPopup"><h1>Dolmenwood</h1><p>You have no information about this place yet...</p></div>`;

const aescburyPopup = 
`<div class="customPopup"><h1>Aescbury</h1><p>You have no information about this place yet...</p></div>`;

const wychmerePopup = 
`<div class="customPopup"><h1>Wychmere</h1><p>You have no information about this place yet...</p></div>`;

const dunMorriganPopup = 
`<div class="customPopup"><h1>Dun Morrigan</h1><p>You have no information about this place yet...</p></div>`;

const morlaixHollowPopup = 
`<div class="customPopup"><h1>Morlaix Hollow</h1><p>You have no information about this place yet...</p></div>`;

const sceaftesburhPopup = 
`<div class="customPopup"><h1>Sceaftesburh</h1><p>You have no information about this place yet...</p></div>`;

const cynehelmPopup = 
`<div class="customPopup"><h1>Cynehelm</h1><p>You have no information about this place yet...</p></div>`;

// Vaelgrund Popups

const vetrfjallPopup = 
`<div class="customPopup"><h1>Vetrfjall</h1><p>You have no information about this place yet...</p></div>`;

const torvaenPopup = 
`<div class="customPopup"><h1>Torvaen</h1><p>You have no information about this place yet...</p></div>`;

const bjarnholdPopup = 
`<div class="customPopup"><h1>Bjarnhold</h1><p>You have no information about this place yet...</p></div>`;

const braemoorPopup = 
`<div class="customPopup"><h1>Braemoor</h1><p>You have no information about this place yet...</p></div>`;

const vorthallPopup = 
`<div class="customPopup"><h1>Vorthall</h1><p>You have no information about this place yet...</p></div>`;

const fenlowPopup = 
`<div class="customPopup"><h1>Fenlow</h1><p>You have no information about this place yet...</p></div>`;

const stonehelmPopup = 
`<div class="customPopup"><h1>Stonehelm</h1><p>You have no information about this place yet...</p></div>`;

const tyrwinnPopup = 
`<div class="customPopup"><h1>Tyrwinn</h1><p>You have no information about this place yet...</p></div>`;


// Thynglad & The South Popups

const branthollowPopup = 
`<div class="customPopup"><h1>Branthollow</h1><p>You have no information about this place yet...</p></div>`;

const hrafngardPopup = 
`<div class="customPopup"><h1>Hrafngard</h1><p>You have no information about this place yet...</p></div>`;

const skrnsteadPopup = 
`<div class="customPopup"><h1>Skrnstead</h1><p>You have no information about this place yet...</p></div>`;

const hjallvikPopup = 
`<div class="customPopup"><h1>Hjallvik</h1><p>You have no information about this place yet...</p></div>`;

// Lendra & Pendrill's Gap Popups

const brinhildsWatchPopup = 
`<div class="customPopup"><h1>Brinhild's Watch</h1><p>You have no information about this place yet...</p></div>`;

const thorinsHoldPopup = 
`<div class="customPopup"><h1>Thorin's Hold</h1><p>You have no information about this place yet...</p></div>`;

const glorindorePopup = 
`<div class="customPopup"><h1>Glorindore</h1><p>You have no information about this place yet...</p></div>`;

const pendrillsGapPopup = 
`<div class="customPopup"><h1>Pendrill's Gap</h1><p>You have no information about this place yet...</p></div>`;



// Sijilmassa Popups

const amanziNtsunduPopup = 
`<div class="customPopup"><h1>Amanzi-ntsundu</h1><p>You have no information about this place yet...</p></div>`;

const sharifanHoldPopup = 
`<div class="customPopup"><h1>Sharifan Hold</h1><p>You have no information about this place yet...</p></div>`;

const azZahratPopup = 
`<div class="customPopup"><h1>Az-Zharat</h1><p>You have no information about this place yet...</p></div>`;

const nubiraharPopup = 
`<div class="customPopup"><h1>Nubirahar</h1><p>You have no information about this place yet...</p></div>`;

const rashidaharPopup = 
`<div class="customPopup"><h1>Rashidahar</h1><p>You have no information about this place yet...</p></div>`;

const banuSalamanPopup = 
`<div class="customPopup"><h1>Banu-Salaman</h1><p>You have no information about this place yet...</p></div>`;

const abuFayadahPopup = 
`<div class="customPopup"><h1>Abu-Fayadah</h1><p>You have no information about this place yet...</p></div>`;

const alKhazadPopup = 
`<div class="customPopup"><h1>Al-Khazad</h1><p>You have no information about this place yet...</p></div>`;

const tetuoacemPopup = 
`<div class="customPopup"><h1>Tetuoacem</h1><p>You have no information about this place yet...</p></div>`;

const adDamaliPopup = 
`<div class="customPopup"><h1>Ad Damali</h1><p>You have no information about this place yet...</p></div>`;

const kasbahAlQadimPopup = 
`<div class="customPopup"><h1>Kasbah Al-Qadim</h1><p>You have no information about this place yet...</p></div>`;

const qasrAlMarrPopup = 
`<div class="customPopup"><h1>Qasr Al-Marr</h1><p>You have no information about this place yet...</p></div>`;

const alMuradPopup = 
`<div class="customPopup"><h1>Al-Murad</h1><p>You have no information about this place yet...</p></div>`;

const salamaharPopup = 
`<div class="customPopup"><h1>Salamahar</h1><p>You have no information about this place yet...</p></div>`;

const nurwadPopup = 
`<div class="customPopup"><h1>Nurwad</h1><p>You have no information about this place yet...</p></div>`;

const emurAlBinPopup = 
`<div class="customPopup"><h1>Emur Al-Bin</h1><p>You have no information about this place yet...</p></div>`;

const hassanahPopup = 
`<div class="customPopup"><h1>Hassanah</h1><p>You have no information about this place yet...</p></div>`;

const kharizQalAtPopup = 
`<div class="customPopup"><h1>Khariz-Qal'at</h1><p>You have no information about this place yet...</p></div>`;

const qasrulNurPopup = 
`<div class="customPopup"><h1>Qasrul-Nur</h1><p>You have no information about this place yet...</p></div>`;

const zharabadPopup = 
`<div class="customPopup"><h1>Zharabad</h1><p>You have no information about this place yet...</p></div>`;

const alMiskPopup = 
`<div class="customPopup"><h1>Al-Misk</h1><p>You have no information about this place yet...</p></div>`;

const rahmahqanPopup = 
`<div class="customPopup"><h1>Rahmahqan</h1><p>You have no information about this place yet...</p></div>`;

const tzindarPopup = 
`<div class="customPopup"><h1>Tzindar</h1><p>You have no information about this place yet...</p></div>`;


// The Northfold Popups

const deepdalePopup = 
`<div class="customPopup"><h1>Deepdale</h1><p>You have no information about this place yet...</p></div>`;

const carstonUponShorePopup = 
`<div class="customPopup"><h1>Carston-upon-shore</h1><p>You have no information about this place yet...</p></div>`;

const dragonsRestPopup = 
`<div class="customPopup"><h1>Dragon's Rest</h1><p>You have no information about this place yet...</p></div>`;

const keuzPopup = 
`<div class="customPopup"><h1>Keuz</h1><p>You have no information about this place yet...</p></div>`;

const eldremarHarborPopup = 
`<div class="customPopup"><h1>Eldremar Hold</h1><p>You have no information about this place yet...</p></div>`;

const sallysOrchardPopup = 
`<div class="customPopup"><h1>Sally's Orchard</h1><p>You have no information about this place yet...</p></div>`;

const highfieldPopup = 
`<div class="customPopup"><h1>Highfield</h1><p>You have no information about this place yet...</p></div>`;

const brynhavenPopup = 
`<div class="customPopup"><h1>Brynhaven</h1><p>You have no information about this place yet...</p></div>`;

const eldoriaPopup = 
`<div class="customPopup"><h1>Eldoria</h1><p>You have no information about this place yet...</p></div>`;

const redbayPopup = 
`<div class="customPopup"><h1>Redbay</h1><p>You have no information about this place yet...</p></div>`;

const theJunctionPopup = 
`<div class="customPopup"><h1>The Junction</h1><p>You have no information about this place yet...</p></div>`;

const longbowPopup = 
`<div class="customPopup"><h1>Longbow</h1><p>You have no information about this place yet...</p></div>`;

const sentinelsCreekPopup = 
`<div class="customPopup"><h1>Sentinel's Creek</h1><p>You have no information about this place yet...</p></div>`;

const windvalePopup = 
`<div class="customPopup"><h1>Windvale</h1><p>You have no information about this place yet...</p></div>`;

const theBulwarkPopup = 
`<div class="customPopup"><h1>The Bulwark</h1><p>You have no information about this place yet...</p></div>`;

const koromePopup = 
`<div class="customPopup"><h1>Korome</h1><p>You have no information about this place yet...</p></div>`;

const glenArborPopup = 
`<div class="customPopup"><h1>Glen Arbor</h1><p>You have no information about this place yet...</p></div>`;

const mythwealdHollowPopup = 
`<div class="customPopup"><h1>Mythweald Hollow</h1><p>You have no information about this place yet...</p></div>`;

const hamePopup = 
`<div class="customPopup"><h1>Hame</h1><p>You have no information about this place yet...</p></div>`;

const stillwoodPopup = 
`<div class="customPopup"><h1>Stillwood</h1><p>You have no information about this place yet...</p></div>`;

const gullPointePopup = 
`<div class="customPopup"><h1>Gull Pointe</h1><p>You have no information about this place yet...</p></div>`;

const longmeadowsPopup = 
`<div class="customPopup"><h1>Longmeadows</h1><p>You have no information about this place yet...</p></div>`;

const doranBayPopup = 
`<div class="customPopup"><h1>Doran Bay</h1><p>You have no information about this place yet...</p></div>`;

const everreachPopup = 
`<div class="customPopup"><h1>Everreach</h1><p>You have no information about this place yet...</p></div>`;

const thistlewicksLandingPopup = 
`<div class="customPopup"><h1>Thistlewick's Landing</h1><p>You have no information about this place yet...</p></div>`;



// Llyandros Popups

const redcliffPopup = 
`<div class="customPopup"><h1>Redcliff</h1><p>You have no information about this place yet...</p></div>`;

const emberdalePopup = 
`<div class="customPopup"><h1>Emberdale</h1><p>You have no information about this place yet...</p></div>`;

const greenhillPopup = 
`<div class="customPopup"><h1>Greenhill</h1><p>You have no information about this place yet...</p></div>`;

const blackmoorPopup = 
`<div class="customPopup"><h1>Blackmoor</h1><p>You have no information about this place yet...</p></div>`;

const eldradorPopup = 
`<div class="customPopup"><h1>Eldrador</h1><p>You have no information about this place yet...</p></div>`;

const whitethornePopup = 
`<div class="customPopup"><h1>Whitethorne</h1><p>You have no information about this place yet...</p></div>`;

const silvermistPopup = 
`<div class="customPopup"><h1>Silvermist</h1><p>You have no information about this place yet...</p></div>`;

const thronfordPopup = 
`<div class="customPopup"><h1>Thronford</h1><p>You have no information about this place yet...</p></div>`;

const eldhamPopup = 
`<div class="customPopup"><h1>Eldham</h1><p>You have no information about this place yet...</p></div>`;

const thunderfallPopup = 
`<div class="customPopup"><h1>Thunderfall</h1><p>You have no information about this place yet...</p></div>`;

const theSpirePopup = 
`<div class="customPopup"><h1>The Spire</h1><p>You have no information about this place yet...</p></div>`;

const lillycrossPopup = 
`<div class="customPopup"><h1>Lillycross</h1><p>You have no information about this place yet...</p></div>`;

const hilltopPopup = 
`<div class="customPopup"><h1>Hilltop</h1><p>You have no information about this place yet...</p></div>`;

const starlightsHollowPopup = 
`<div class="customPopup"><h1>Starlight's Hollow</h1><p>You have no information about this place yet...</p></div>`;

const ivorycliffePopup = 
`<div class="customPopup"><h1>Ivorycliffe</h1><p>You have no information about this place yet...</p></div>`;

const whalehornPopup = 
`<div class="customPopup"><h1>Whalehorn</h1><p>You have no information about this place yet...</p></div>`;

const rogueyardPopup = 
`<div class="customPopup"><h1>Rogueyard</h1><p>You have no information about this place yet...</p></div>`;

const stCresthillPopup = 
`<div class="customPopup"><h1>St. Cresthill</h1><p>You have no information about this place yet...</p></div>`;

const shipsHavenPopup = 
`<div class="customPopup"><h1>Ship's Haven</h1><p>You have no information about this place yet...</p></div>`;

const theThirstPopup = 
`<div class="customPopup"><h1>The Thirst</h1><p>You have no information about this place yet...</p></div>`;

const rivermouthPopup = 
`<div class="customPopup"><h1>Rivermouth</h1><p>You have no information about this place yet...</p></div>`;

const abandonementPopup = 
`<div class="customPopup"><h1>Abandonement</h1><p>You have no information about this place yet...</p></div>`;

const glimerdeepPopup = 
`<div class="customPopup"><h1>Glimmerdeep</h1><p>You have no information about this place yet...</p></div>`;

const whisperingBluffsPopup = 
`<div class="customPopup"><h1>Whispering Bluff's</h1><p>You have no information about this place yet...</p></div>`;

const brooksidePopup = 
`<div class="customPopup"><h1>Brookside</h1><p>You have no information about this place yet...</p></div>`;

const runewoodPopup = 
`<div class="customPopup"><h1>Runewood</h1><p>You have no information about this place yet...</p></div>`;

const mossbrookPopup = 
`<div class="customPopup"><h1>Mossbrook</h1><p>You have no information about this place yet...</p></div>`;

const amberfangHoldPopup = 
`<div class="customPopup"><h1>Amberfang Hold</h1><p>You have no information about this place yet...</p></div>`;

const caerlechPopup = 
`<div class="customPopup"><h1>Caerlech</h1><p>You have no information about this place yet...</p></div>`;

const willowbrookPopup = 
`<div class="customPopup"><h1>Willowbrook</h1><p>You have no information about this place yet...</p></div>`;

const dawnbreakPopup = 
`<div class="customPopup"><h1>Dawnbreak</h1><p>You have no information about this place yet...</p></div>`;

const yhaEntheasPopup = 
`<div class="customPopup"><h1>Yha Entheas</h1><p>You have no information about this place yet...</p></div>`;

const briarsteadPopup = 
`<div class="customPopup"><h1>Briarstead</h1><p>You have no information about this place yet...</p></div>`;

const glimmerbrookPopup = 
`<div class="customPopup"><h1>Glimmerbrook</h1><p>You have no information about this place yet...</p></div>`;

const brumPopup = 
`<div class="customPopup"><h1>Brum</h1><p>You have no information about this place yet...</p></div>`;

const autumnrunPopup = 
`<div class="customPopup"><h1>Autumnrun</h1><p>You have no information about this place yet...</p></div>`;

const shadowglenPopup = 
`<div class="customPopup"><h1>Shadowglen</h1><p>You have no information about this place yet...</p></div>`;

const seersSquarePopup = 
`<div class="customPopup"><h1>Seer's Square</h1><p>You have no information about this place yet...</p></div>`;

const theForumPopup = 
`<div class="customPopup"><h1>The Forum</h1><p>You have no information about this place yet...</p></div>`;

const githraedPopup = 
`<div class="customPopup"><h1>Githraed</h1><p>You have no information about this place yet...</p></div>`;

const highGavgonachPopup = 
`<div class="customPopup"><h1>High Gavgonach</h1><p>You have no information about this place yet...</p></div>`;

const ervelfirthPopup = 
`<div class="customPopup"><h1>Ervelfirth</h1><p>You have no information about this place yet...</p></div>`;

const clomaHillPopup = 
`<div class="customPopup"><h1>Cloma Hill</h1><p>You have no information about this place yet...</p></div>`;

const edwardsHeadPopup = 
`<div class="customPopup"><h1>Edward's Head</h1><p>You have no information about this place yet...</p></div>`;

const guildworthPopup = 
`<div class="customPopup"><h1>Guildworth</h1><p>You have no information about this place yet...</p></div>`;

const wingentFieldPopup = 
`<div class="customPopup"><h1>Wingent Field</h1><p>You have no information about this place yet...</p></div>`;

const lynnsFollyPopup = 
`<div class="customPopup"><h1>Lynn's Folly</h1><p>You have no information about this place yet...</p></div>`;

const vyrlysGatePopup = 
`<div class="customPopup"><h1>Vyrlysgate</h1><p>You have no information about this place yet...</p></div>`;

const todeaFallsPopup = 
`<div class="customPopup"><h1>Todea Falls</h1><p>You have no information about this place yet...</p></div>`;

const rivermistPopup = 
`<div class="customPopup"><h1>Rivermist</h1><p>You have no information about this place yet...</p></div>`;

// specify popup options

const customOptions = {
    minWidth: "220", // set max-width
    maxHeight: "500"
};


// Markers

// Mystrune

const mystrune = L.latLng([ 3700, 3910 ]);
L.marker(mystrune).addTo(map).bindPopup(mystrunePopup, customOptions).addTo(map)

const thriceDrowned = L.latLng([ 3848, 4666 ]);
L.marker(thriceDrowned).addTo(map).bindPopup(thriceDrownedPopup, customOptions).addTo(map)

const stoneybeck = L.latLng([ 3648, 4434 ]);
L.marker(stoneybeck).addTo(map).bindPopup(stoneybeckPopup, customOptions).addTo(map)

const stocktonOnTees = L.latLng([ 3454, 4474 ]);
L.marker(stocktonOnTees).addTo(map).bindPopup(stocktonOnTeesPopup, customOptions).addTo(map)

const kingsFall = L.latLng([ 3416, 4154 ]);
L.marker(kingsFall).addTo(map).bindPopup(kingsFallPopup, customOptions).addTo(map)

const talonford = L.latLng([ 3512, 3782 ]);
L.marker(talonford).addTo(map).bindPopup(talonfordPopup, customOptions).addTo(map)

const foamdock = L.latLng([ 3204, 3666 ]);
L.marker(foamdock).addTo(map).bindPopup(foamdockPopup, customOptions).addTo(map)

const greenmoor = L.latLng([ 3230, 3920 ]);
L.marker(greenmoor).addTo(map).bindPopup(greenmoorPopup, customOptions).addTo(map)

const whitecliff = L.latLng([ 2910, 3712 ]);
L.marker(whitecliff).addTo(map).bindPopup(whitecliffPopup, customOptions).addTo(map)

const muntle = L.latLng([ 2958, 3958 ]);
L.marker(muntle).addTo(map).bindPopup(muntlePopup, customOptions).addTo(map)

const highfieldFort = L.latLng([ 3164, 4398 ]);
L.marker(highfieldFort).addTo(map).bindPopup(highfieldFortPopup, customOptions).addTo(map)

const silverthroatFalls = L.latLng([ 2900, 4156 ]);
L.marker(silverthroatFalls).addTo(map).bindPopup(silverthroatFallsPopup, customOptions).addTo(map)

const elmswyck = L.latLng([ 2588, 4522 ]);
L.marker(elmswyck).addTo(map).bindPopup(elmswyckPopup, customOptions).addTo(map)

const alderly = L.latLng([ 2422, 4072 ]);
L.marker(alderly).addTo(map).bindPopup(alderlyPopup, customOptions).addTo(map)

const suthbury = L.latLng([ 2328, 4356 ]);
L.marker(suthbury).addTo(map).bindPopup(suthburyPopup, customOptions).addTo(map)

const offasHold = L.latLng([ 2286, 4674 ]);
L.marker(offasHold).addTo(map).bindPopup(offasHoldPopup, customOptions).addTo(map)

const eirasRun = L.latLng([ 2036, 4486 ]);
L.marker(eirasRun).addTo(map).bindPopup(eirasRunPopup, customOptions).addTo(map)

const havencrest = L.latLng([ 3302, 3164 ]);
L.marker(havencrest).addTo(map).bindPopup(havencrestPopup, customOptions).addTo(map)

// Wessengard

const tiefenbach = L.latLng([ 5064, 3358 ]);
L.marker(tiefenbach).addTo(map).bindPopup(tiefenbachPopup, customOptions).addTo(map)

const thalgrun = L.latLng([ 5108, 2820 ]);
L.marker(thalgrun).addTo(map).bindPopup(thalgrunPopup, customOptions).addTo(map)

const schwarzwald = L.latLng([ 5420, 2288 ]);
L.marker(schwarzwald).addTo(map).bindPopup(schwarzwaldPopup, customOptions).addTo(map)

const konigsruh = L.latLng([ 5828, 2874 ]);
L.marker(konigsruh).addTo(map).bindPopup(konigsruhPopup, customOptions).addTo(map)

const nordmark = L.latLng([ 5804, 2168 ]);
L.marker(nordmark).addTo(map).bindPopup(nordmarkPopup, customOptions).addTo(map)

const meerwatch = L.latLng([ 6330, 2504 ]);
L.marker(meerwatch).addTo(map).bindPopup(meerwatchPopup, customOptions).addTo(map)

// Gharnata

const amunsRest = L.latLng([ 7123, 1448 ]);
L.marker(amunsRest).addTo(map).bindPopup(amunsRestPopup, customOptions).addTo(map)

const laylaqan = L.latLng([ 7053, 2118 ]);
L.marker(laylaqan).addTo(map).bindPopup(laylaqanPopup, customOptions).addTo(map)

const arkzum = L.latLng([ 7418, 2335 ]);
L.marker(arkzum).addTo(map).bindPopup(arkzumPopup, customOptions).addTo(map)

// Harrowvale

const hochburg = L.latLng([ 6180, 7710 ]);
L.marker(hochburg).addTo(map).bindPopup(hochburgPopup, customOptions).addTo(map)

const eisenhafen = L.latLng([ 6545, 7901 ]);
L.marker(eisenhafen).addTo(map).bindPopup(eisenhafenPopup, customOptions).addTo(map)

const grimholt = L.latLng([ 6228, 8162 ]);
L.marker(grimholt).addTo(map).bindPopup(grimholtPopup, customOptions).addTo(map)

const drachenfels = L.latLng([ 6311, 8605 ]);
L.marker(drachenfels).addTo(map).bindPopup(drachenfelsPopup, customOptions).addTo(map)

const wolfsgard = L.latLng([ 5795, 8173 ]);
L.marker(wolfsgard).addTo(map).bindPopup(wolfsgardPopup, customOptions).addTo(map)

const newLendra = L.latLng([ 5424, 8166 ]);
L.marker(newLendra).addTo(map).bindPopup(newLendraPopup, customOptions).addTo(map)

const oldLendra = L.latLng([ 5284, 8145 ]);
L.marker(oldLendra).addTo(map).bindPopup(oldLendraPopup, customOptions).addTo(map)

// Castelbruzzo

const portoFiora = L.latLng([ 5273, 8595 ]);
L.marker(portoFiora).addTo(map).bindPopup(portoFioraPopup, customOptions).addTo(map)

const sienara = L.latLng([ 5412, 9151 ]);
L.marker(sienara).addTo(map).bindPopup(sienaraPopup, customOptions).addTo(map)

const valtameri = L.latLng([ 5703, 9526 ]);
L.marker(valtameri).addTo(map).bindPopup(valtameriPopup, customOptions).addTo(map)

const fiumerosso = L.latLng([ 5975, 9880 ]);
L.marker(fiumerosso).addTo(map).bindPopup(fiumerossoPopup, customOptions).addTo(map)

const torvo = L.latLng([ 5520, 9927 ]);
L.marker(torvo).addTo(map).bindPopup(torvoPopup, customOptions).addTo(map)

const lunaraCastra = L.latLng([ 5119, 10093 ]);
L.marker(lunaraCastra).addTo(map).bindPopup(lunaraCastraPopup, customOptions).addTo(map)

const vallegrazia = L.latLng([ 5012, 10303 ]);
L.marker(vallegrazia).addTo(map).bindPopup(vallegraziaPopup, customOptions).addTo(map)


// Himawara

const ryujinmaru = L.latLng([ 5720, 10218 ]);
L.marker(ryujinmaru).addTo(map).bindPopup(ryujinmaruPopup, customOptions).addTo(map)

const baiyue = L.latLng([ 6106, 10694 ]);
L.marker(baiyue).addTo(map).bindPopup(baiyuePopup, customOptions).addTo(map)

const jiangkaze = L.latLng([ 5800, 11068 ]);
L.marker(jiangkaze).addTo(map).bindPopup(jiangkazePopup, customOptions).addTo(map)

const tengrikhan = L.latLng([ 5370, 10970 ]);
L.marker(tengrikhan).addTo(map).bindPopup(tengrikhanPopup, customOptions).addTo(map)

const kagemyr = L.latLng([ 5320, 11492 ]);
L.marker(kagemyr).addTo(map).bindPopup(kagemyrPopup, customOptions).addTo(map)


// Lochlannar

const caerBran = L.latLng([ 6364, 11722 ]);
L.marker(caerBran).addTo(map).bindPopup(caerBranPopup, customOptions).addTo(map)

const brynTara = L.latLng([ 5964, 11750 ]);
L.marker(brynTara).addTo(map).bindPopup(brynTaraPopup, customOptions).addTo(map)

const erynDale = L.latLng([ 6062, 12166 ]);
L.marker(erynDale).addTo(map).bindPopup(erynDalePopup, customOptions).addTo(map)

const tirNaMar = L.latLng([ 8024, 12264 ]);
L.marker(tirNaMar).addTo(map).bindPopup(tirNaMarPopup, customOptions).addTo(map)


// Mercia's Reach

const lannarverth = L.latLng([ 6408, 12754 ]);
L.marker(lannarverth).addTo(map).bindPopup(lannarverthPopup, customOptions).addTo(map)

const tregorien = L.latLng([ 7146, 13592 ]);
L.marker(tregorien).addTo(map).bindPopup(tregorienPopup, customOptions).addTo(map)

const kerzhal = L.latLng([ 6796, 12666 ]);
L.marker(kerzhal).addTo(map).bindPopup(kerzhalPopup, customOptions).addTo(map)


// Vyrnirheim

const helsvik = L.latLng([ 4068, 13261 ]);
L.marker(helsvik).addTo(map).bindPopup(helsvikPopup, customOptions).addTo(map)

const frostreach = L.latLng([ 4505, 13002 ]);
L.marker(frostreach).addTo(map).bindPopup(frostreachPopup, customOptions).addTo(map)

const haldrimsPyre = L.latLng([ 4669, 12768 ]);
L.marker(haldrimsPyre).addTo(map).bindPopup(haldrimsPyrePopup, customOptions).addTo(map)

const rimeforge = L.latLng([ 4550, 13879 ]);
L.marker(rimeforge).addTo(map).bindPopup(rimeforgePopup, customOptions).addTo(map)

const thaldrim = L.latLng([ 4908, 13366 ]);
L.marker(thaldrim).addTo(map).bindPopup(thaldrimPopup, customOptions).addTo(map)

const ravengard = L.latLng([ 5114, 12903 ]);
L.marker(ravengard).addTo(map).bindPopup(ravengardPopup, customOptions).addTo(map)

const vallengarde = L.latLng([ 5024, 13943 ]);
L.marker(vallengarde).addTo(map).bindPopup(vallengardePopup, customOptions).addTo(map)

const drangsaettr = L.latLng([ 5436, 14009 ]);
L.marker(drangsaettr).addTo(map).bindPopup(drangsaettrPopup, customOptions).addTo(map)

const brinjarsHold = L.latLng([ 5535, 13652 ]);
L.marker(brinjarsHold).addTo(map).bindPopup(brinjarsHoldPopup, customOptions).addTo(map)

const niflstead = L.latLng([ 5637, 13237 ]);
L.marker(niflstead).addTo(map).bindPopup(niflsteadPopup, customOptions).addTo(map)

const windermere = L.latLng([ 5674, 14294 ]);
L.marker(windermere).addTo(map).bindPopup(windermerePopup, customOptions).addTo(map)

const draugrvik = L.latLng([ 5826, 13760 ]);
L.marker(draugrvik).addTo(map).bindPopup(draugrvikPopup, customOptions).addTo(map)

const montelorne = L.latLng([ 5950, 13342 ]);
L.marker(montelorne).addTo(map).bindPopup(montelornePopup, customOptions).addTo(map)

const lorrenthal = L.latLng([ 6086, 14317 ]);
L.marker(lorrenthal).addTo(map).bindPopup(lorrenthalPopup, customOptions).addTo(map)


// Aesgareth

const skjornhald = L.latLng([ 3491, 13163 ]);
L.marker(skjornhald).addTo(map).bindPopup(skjornhaldPopup, customOptions).addTo(map)

const eyrunstead = L.latLng([ 3429, 12932 ]);
L.marker(eyrunstead).addTo(map).bindPopup(eyrunsteadPopup, customOptions).addTo(map)

const isfjorn = L.latLng([ 3702, 12740 ]);
L.marker(isfjorn).addTo(map).bindPopup(isfjornPopup, customOptions).addTo(map)

const thorvaald = L.latLng([ 3962, 12662 ]);
L.marker(thorvaald).addTo(map).bindPopup(thorvaaldPopup, customOptions).addTo(map)

const runestoneKeep = L.latLng([ 4028, 12122 ]);
L.marker(runestoneKeep).addTo(map).bindPopup(runestoneKeepPopup, customOptions).addTo(map)

const sternbjornKeep = L.latLng([ 3654, 11714 ]);
L.marker(sternbjornKeep).addTo(map).bindPopup(sternbjornKeepPopup, customOptions).addTo(map)

const frosthaven = L.latLng([ 4881, 11918 ]);
L.marker(frosthaven).addTo(map).bindPopup(frosthavenPopup, customOptions).addTo(map)



// Morrigan's Dominion

const dolmenwood = L.latLng([ 4934, 10852 ]);
L.marker(dolmenwood).addTo(map).bindPopup(dolmenwoodPopup, customOptions).addTo(map)

const aescbury = L.latLng([ 4723, 11268 ]);
L.marker(aescbury).addTo(map).bindPopup(aescburyPopup, customOptions).addTo(map)

const wychmere = L.latLng([ 4341, 11075 ]);
L.marker(wychmere).addTo(map).bindPopup(wychmerePopup, customOptions).addTo(map)

const dunMorrigan = L.latLng([ 4239, 10671 ]);
L.marker(dunMorrigan).addTo(map).bindPopup(dunMorriganPopup, customOptions).addTo(map)

const morlaixHollow = L.latLng([ 3964, 10744 ]);
L.marker(morlaixHollow).addTo(map).bindPopup(morlaixHollowPopup, customOptions).addTo(map)

const sceaftesburh = L.latLng([ 4057, 10269 ]);
L.marker(sceaftesburh).addTo(map).bindPopup(sceaftesburhPopup, customOptions).addTo(map)

const cynehelm = L.latLng([ 3922, 10005 ]);
L.marker(cynehelm).addTo(map).bindPopup(cynehelmPopup, customOptions).addTo(map)


// Vaelgrund

const vetrfjall = L.latLng([ 3041, 12155 ]);
L.marker(vetrfjall).addTo(map).bindPopup(vetrfjallPopup, customOptions).addTo(map)

const torvaen = L.latLng([ 2481, 12363 ]);
L.marker(torvaen).addTo(map).bindPopup(torvaenPopup, customOptions).addTo(map)

const bjarnhold = L.latLng([ 2564, 11745 ]);
L.marker(bjarnhold).addTo(map).bindPopup(bjarnholdPopup, customOptions).addTo(map)

const braemoor = L.latLng([ 2491, 11335 ]);
L.marker(braemoor).addTo(map).bindPopup(braemoorPopup, customOptions).addTo(map)

const vorthall = L.latLng([ 2140, 11672 ]);
L.marker(vorthall).addTo(map).bindPopup(vorthallPopup, customOptions).addTo(map)

const fenlow = L.latLng([ 1741, 11594 ]);
L.marker(fenlow).addTo(map).bindPopup(fenlowPopup, customOptions).addTo(map)

const stonehelm = L.latLng([ 1388, 11538 ]);
L.marker(stonehelm).addTo(map).bindPopup(stonehelmPopup, customOptions).addTo(map)

const tyrwinn = L.latLng([ 1591, 11202 ]);
L.marker(tyrwinn).addTo(map).bindPopup(tyrwinnPopup, customOptions).addTo(map)


// Thynglad & The South

const branthollow = L.latLng([ 1996, 10921 ]);
L.marker(branthollow).addTo(map).bindPopup(branthollowPopup, customOptions).addTo(map)

const hrafngard = L.latLng([ 1637, 10713 ]);
L.marker(hrafngard).addTo(map).bindPopup(hrafngardPopup, customOptions).addTo(map)

const skrnstead = L.latLng([ 1273, 10427 ]);
L.marker(skrnstead).addTo(map).bindPopup(skrnsteadPopup, customOptions).addTo(map)

const hjallvik = L.latLng([ 806, 10825 ]);
L.marker(hjallvik).addTo(map).bindPopup(hjallvikPopup, customOptions).addTo(map)


// TLendra & Pendrill's Gap

const brinhildsWatch = L.latLng([ 4380, 8754 ]);
L.marker(brinhildsWatch).addTo(map).bindPopup(brinhildsWatchPopup, customOptions).addTo(map)

const thorinsHold = L.latLng([ 3788, 9086 ]);
L.marker(thorinsHold).addTo(map).bindPopup(thorinsHoldPopup, customOptions).addTo(map)

const glorindore = L.latLng([ 3944, 9390 ]);
L.marker(glorindore).addTo(map).bindPopup(glorindorePopup, customOptions).addTo(map)

const pendrillsGap = L.latLng([ 3048, 10006 ]);
L.marker(pendrillsGap).addTo(map).bindPopup(pendrillsGapPopup, customOptions).addTo(map)


// Sijilmassa

const amanziNtsundu = L.latLng([ 7770, 7991 ]);
L.marker(amanziNtsundu).addTo(map).bindPopup(amanziNtsunduPopup, customOptions).addTo(map)

const sharifanHold = L.latLng([ 7397, 9230 ]);
L.marker(sharifanHold).addTo(map).bindPopup(sharifanHoldPopup, customOptions).addTo(map)

const azZahrat = L.latLng([ 7820, 9557 ]);
L.marker(azZahrat).addTo(map).bindPopup(azZahratPopup, customOptions).addTo(map)

const nubirahar = L.latLng([ 7639, 9755 ]);
L.marker(nubirahar).addTo(map).bindPopup(nubiraharPopup, customOptions).addTo(map)

const rashidahar = L.latLng([ 7314, 9862 ]);
L.marker(rashidahar).addTo(map).bindPopup(rashidaharPopup, customOptions).addTo(map)

const banuSalaman = L.latLng([ 6926, 9379 ]);
L.marker(banuSalaman).addTo(map).bindPopup(banuSalamanPopup, customOptions).addTo(map)

const abuFayadah = L.latLng([ 7098, 9603 ]);
L.marker(abuFayadah).addTo(map).bindPopup(abuFayadahPopup, customOptions).addTo(map)

const alKhazad = L.latLng([ 7084, 9855 ]);
L.marker(alKhazad).addTo(map).bindPopup(alKhazadPopup, customOptions).addTo(map)

const tetuoacem = L.latLng([ 7002, 10210 ]);
L.marker(tetuoacem).addTo(map).bindPopup(tetuoacemPopup, customOptions).addTo(map)

const adDamali = L.latLng([ 6574, 9843 ]);
L.marker(adDamali).addTo(map).bindPopup(adDamaliPopup, customOptions).addTo(map)

const kasbahAlQadim = L.latLng([ 6724, 10201 ]);
L.marker(kasbahAlQadim).addTo(map).bindPopup(kasbahAlQadimPopup, customOptions).addTo(map)

const qasrAlMarr = L.latLng([ 7991, 9852 ]);
L.marker(qasrAlMarr).addTo(map).bindPopup(qasrAlMarrPopup, customOptions).addTo(map)

const alMurad = L.latLng([ 7683, 10091 ]);
L.marker(alMurad).addTo(map).bindPopup(alMuradPopup, customOptions).addTo(map)

const salamahar = L.latLng([ 8122, 10518 ]);
L.marker(salamahar).addTo(map).bindPopup(salamaharPopup, customOptions).addTo(map)

const nurwad = L.latLng([ 7774, 10788 ]);
L.marker(nurwad).addTo(map).bindPopup(nurwadPopup, customOptions).addTo(map)

const emurAlBin = L.latLng([ 7961, 11066 ]);
L.marker(emurAlBin).addTo(map).bindPopup(emurAlBinPopup, customOptions).addTo(map)

const hassanah = L.latLng([ 7607, 11032 ]);
L.marker(hassanah).addTo(map).bindPopup(hassanahPopup, customOptions).addTo(map)

const kharizQalAt = L.latLng([ 8212, 11280 ]);
L.marker(kharizQalAt).addTo(map).bindPopup(kharizQalAtPopup, customOptions).addTo(map)

const qasrulNur = L.latLng([ 7768, 11293 ]);
L.marker(qasrulNur).addTo(map).bindPopup(qasrulNurPopup, customOptions).addTo(map)

const zharabad = L.latLng([ 7146, 11063 ]);
L.marker(zharabad).addTo(map).bindPopup(zharabadPopup, customOptions).addTo(map)

const alMisk = L.latLng([ 7139, 11574 ]);
L.marker(alMisk).addTo(map).bindPopup(alMiskPopup, customOptions).addTo(map)

const rahmahqan = L.latLng([ 6802, 11510 ]);
L.marker(rahmahqan).addTo(map).bindPopup(rahmahqanPopup, customOptions).addTo(map)

const tzindar = L.latLng([ 6495, 11119 ]);
L.marker(tzindar).addTo(map).bindPopup(tzindarPopup, customOptions).addTo(map)


// The Northfold

const deepdale = L.latLng([ 3948, 5142 ]);
L.marker(deepdale).addTo(map).bindPopup(deepdalePopup, customOptions).addTo(map)

const carstonUponShore = L.latLng([ 4290, 5000 ]);
L.marker(carstonUponShore).addTo(map).bindPopup(carstonUponShorePopup, customOptions).addTo(map)

const dragonsRest = L.latLng([ 4251, 5374 ]);
L.marker(dragonsRest).addTo(map).bindPopup(dragonsRestPopup, customOptions).addTo(map)

const keuz = L.latLng([ 4457, 5219 ]);
L.marker(keuz).addTo(map).bindPopup(keuzPopup, customOptions).addTo(map)

const eldremarHarbor = L.latLng([ 4644, 4835 ]);
L.marker(eldremarHarbor).addTo(map).bindPopup(eldremarHarborPopup, customOptions).addTo(map)

const sallysOrchard = L.latLng([ 4714, 5174 ]);
L.marker(sallysOrchard).addTo(map).bindPopup(sallysOrchardPopup, customOptions).addTo(map)

const highfield = L.latLng([ 4861, 4831 ]);
L.marker(highfield).addTo(map).bindPopup(highfieldPopup, customOptions).addTo(map)

const brynhaven = L.latLng([ 4950, 5143 ]);
L.marker(brynhaven).addTo(map).bindPopup(brynhavenPopup, customOptions).addTo(map)

const eldoria = L.latLng([ 5128, 5026 ]);
L.marker(eldoria).addTo(map).bindPopup(eldoriaPopup, customOptions).addTo(map)

const redbay = L.latLng([ 5565, 4939 ]);
L.marker(redbay).addTo(map).bindPopup(redbayPopup, customOptions).addTo(map)

const theJunction = L.latLng([ 5230, 5238 ]);
L.marker(theJunction).addTo(map).bindPopup(theJunctionPopup, customOptions).addTo(map)

const longbow = L.latLng([ 5034, 5379 ]);
L.marker(longbow).addTo(map).bindPopup(longbowPopup, customOptions).addTo(map)

const sentinelsCreek = L.latLng([ 5241, 5649 ]);
L.marker(sentinelsCreek).addTo(map).bindPopup(sentinelsCreekPopup, customOptions).addTo(map)

const windvale = L.latLng([ 5124, 5897 ]);
L.marker(windvale).addTo(map).bindPopup(windvalePopup, customOptions).addTo(map)

const theBulwark = L.latLng([ 4945, 5994 ]);
L.marker(theBulwark).addTo(map).bindPopup(theBulwarkPopup, customOptions).addTo(map)

const korome = L.latLng([ 4648, 6081 ]);
L.marker(korome).addTo(map).bindPopup(koromePopup, customOptions).addTo(map)

const glenArbor = L.latLng([ 4447, 6158 ]);
L.marker(glenArbor).addTo(map).bindPopup(glenArborPopup, customOptions).addTo(map)

const mythwealdHollow = L.latLng([ 5470, 6120 ]);
L.marker(mythwealdHollow).addTo(map).bindPopup(mythwealdHollowPopup, customOptions).addTo(map)

const hame = L.latLng([ 5186, 6287 ]);
L.marker(hame).addTo(map).bindPopup(hamePopup, customOptions).addTo(map)

const stillwood = L.latLng([ 4864, 6395 ]);
L.marker(stillwood).addTo(map).bindPopup(stillwoodPopup, customOptions).addTo(map)

const gullPointe = L.latLng([ 5811, 6350 ]);
L.marker(gullPointe).addTo(map).bindPopup(gullPointePopup, customOptions).addTo(map)

const longmeadows = L.latLng([ 5618, 6426 ]);
L.marker(longmeadows).addTo(map).bindPopup(longmeadowsPopup, customOptions).addTo(map)

const doranBay = L.latLng([ 5544, 6797 ]);
L.marker(doranBay).addTo(map).bindPopup(doranBayPopup, customOptions).addTo(map)

const everreach = L.latLng([ 5179, 6825 ]);
L.marker(everreach).addTo(map).bindPopup(everreachPopup, customOptions).addTo(map)

const thistlewicksLanding = L.latLng([ 5775, 4507 ]);
L.marker(thistlewicksLanding).addTo(map).bindPopup(thistlewicksLandingPopup, customOptions).addTo(map)

 

// Llyandros

const redcliff = L.latLng([ 2077, 5071 ]);
L.marker(redcliff).addTo(map).bindPopup(redcliffPopup, customOptions).addTo(map)

const emberdale = L.latLng([ 2586, 5007 ]);
L.marker(emberdale).addTo(map).bindPopup(emberdalePopup, customOptions).addTo(map)

const greenhill = L.latLng([ 2717, 5120 ]);
L.marker(greenhill).addTo(map).bindPopup(greenhillPopup, customOptions).addTo(map)

const blackmoor = L.latLng([ 2452, 5462 ]);
L.marker(blackmoor).addTo(map).bindPopup(blackmoorPopup, customOptions).addTo(map)

const eldrador = L.latLng([ 2137, 5736 ]);
L.marker(eldrador).addTo(map).bindPopup(eldradorPopup, customOptions).addTo(map)

const whitethorne = L.latLng([ 2436, 5834 ]);
L.marker(whitethorne).addTo(map).bindPopup(whitethornePopup, customOptions).addTo(map)

const silvermist = L.latLng([ 2658, 5886 ]);
L.marker(silvermist).addTo(map).bindPopup(silvermistPopup, customOptions).addTo(map)

const thronford = L.latLng([ 2980, 5153 ]);
L.marker(thronford).addTo(map).bindPopup(thronfordPopup, customOptions).addTo(map)

const eldham = L.latLng([ 3306, 5193 ]);
L.marker(eldham).addTo(map).bindPopup(eldhamPopup, customOptions).addTo(map)

const thunderfall = L.latLng([ 3093, 5712 ]);
L.marker(thunderfall).addTo(map).bindPopup(thunderfallPopup, customOptions).addTo(map)

const theSpire = L.latLng([ 3192, 6053 ]);
L.marker(theSpire).addTo(map).bindPopup(theSpirePopup, customOptions).addTo(map)

const lillycross = L.latLng([ 3374, 6187 ]);
L.marker(lillycross).addTo(map).bindPopup(lillycrossPopup, customOptions).addTo(map)

const hilltop = L.latLng([ 2937, 6445 ]);
L.marker(hilltop).addTo(map).bindPopup(hilltopPopup, customOptions).addTo(map)

const starlightsHollow = L.latLng([ 2458, 6236 ]);
L.marker(starlightsHollow).addTo(map).bindPopup(starlightsHollowPopup, customOptions).addTo(map)

const ivorycliffe = L.latLng([ 1882, 6130 ]);
L.marker(ivorycliffe).addTo(map).bindPopup(ivorycliffePopup, customOptions).addTo(map)

const whalehorn = L.latLng([ 1353, 6350 ]);
L.marker(whalehorn).addTo(map).bindPopup(whalehornPopup, customOptions).addTo(map)

const rogueyard = L.latLng([ 1089, 6328 ]);
L.marker(rogueyard).addTo(map).bindPopup(rogueyardPopup, customOptions).addTo(map)

const stCresthill = L.latLng([ 1238, 6795 ]);
L.marker(stCresthill).addTo(map).bindPopup(stCresthillPopup, customOptions).addTo(map)

const shipsHaven = L.latLng([ 1099, 7216 ]);
L.marker(shipsHaven).addTo(map).bindPopup(shipsHavenPopup, customOptions).addTo(map)

const theThirst = L.latLng([ 1729, 7391 ]);
L.marker(theThirst).addTo(map).bindPopup(theThirstPopup, customOptions).addTo(map)

const rivermouth = L.latLng([ 2508, 6944 ]);
L.marker(rivermouth).addTo(map).bindPopup(rivermouthPopup, customOptions).addTo(map)

const abandonement = L.latLng([ 3076, 7098 ]);
L.marker(abandonement).addTo(map).bindPopup(abandonementPopup, customOptions).addTo(map)

const glimerdeep = L.latLng([ 3774, 5635 ]);
L.marker(glimerdeep).addTo(map).bindPopup(glimerdeepPopup, customOptions).addTo(map)

const whisperingBluffs = L.latLng([ 3864, 6033 ]);
L.marker(whisperingBluffs).addTo(map).bindPopup(whisperingBluffsPopup, customOptions).addTo(map)

const brookside = L.latLng([ 3732, 6511 ]);
L.marker(brookside).addTo(map).bindPopup(brooksidePopup, customOptions).addTo(map)

const runewood = L.latLng([ 3999, 6800 ]);
L.marker(runewood).addTo(map).bindPopup(runewoodPopup, customOptions).addTo(map)

const mossbrook = L.latLng([ 3892, 7105 ]);
L.marker(mossbrook).addTo(map).bindPopup(mossbrookPopup, customOptions).addTo(map)

const amberfangHold = L.latLng([ 2291, 7723 ]);
L.marker(amberfangHold).addTo(map).bindPopup(amberfangHoldPopup, customOptions).addTo(map)

const caerlech = L.latLng([ 2529, 8054 ]);
L.marker(caerlech).addTo(map).bindPopup(caerlechPopup, customOptions).addTo(map)

const willowbrook = L.latLng([ 2127, 8175 ]);
L.marker(willowbrook).addTo(map).bindPopup(willowbrookPopup, customOptions).addTo(map)

const dawnbreak = L.latLng([ 1930, 8693 ]);
L.marker(dawnbreak).addTo(map).bindPopup(dawnbreakPopup, customOptions).addTo(map)

const yhaEntheas = L.latLng([ 2854, 8379 ]);
L.marker(yhaEntheas).addTo(map).bindPopup(yhaEntheasPopup, customOptions).addTo(map)

const briarstead = L.latLng([ 2850, 8796 ]);
L.marker(briarstead).addTo(map).bindPopup(briarsteadPopup, customOptions).addTo(map)

const glimmerbrook = L.latLng([ 2479, 8850 ]);
L.marker(glimmerbrook).addTo(map).bindPopup(glimmerbrookPopup, customOptions).addTo(map)

const brum = L.latLng([ 3114, 9108 ]);
L.marker(brum).addTo(map).bindPopup(brumPopup, customOptions).addTo(map)

const autumnrun = L.latLng([ 3271, 8921 ]);
L.marker(autumnrun).addTo(map).bindPopup(autumnrunPopup, customOptions).addTo(map)

const shadowglen = L.latLng([ 3312, 8421 ]);
L.marker(shadowglen).addTo(map).bindPopup(shadowglenPopup, customOptions).addTo(map)

const seersSquare = L.latLng([ 3578, 7482 ]);
L.marker(seersSquare).addTo(map).bindPopup(seersSquarePopup, customOptions).addTo(map)

const theForum = L.latLng([ 3988, 7603 ]);
L.marker(theForum).addTo(map).bindPopup(theForumPopup, customOptions).addTo(map)

const githraed = L.latLng([ 3853, 8114 ]);
L.marker(githraed).addTo(map).bindPopup(githraedPopup, customOptions).addTo(map)

const highGavgonach = L.latLng([ 4081, 8410 ]);
L.marker(highGavgonach).addTo(map).bindPopup(highGavgonachPopup, customOptions).addTo(map)

const ervelfirth = L.latLng([ 4448, 6810 ]);
L.marker(ervelfirth).addTo(map).bindPopup(ervelfirthPopup, customOptions).addTo(map)

const clomaHill = L.latLng([ 4526, 8332 ]);
L.marker(clomaHill).addTo(map).bindPopup(clomaHillPopup, customOptions).addTo(map)

const edwardsHead = L.latLng([ 4659, 8207 ]);
L.marker(edwardsHead).addTo(map).bindPopup(edwardsHeadPopup, customOptions).addTo(map)

const guildworth = L.latLng([ 4519, 7838 ]);
L.marker(guildworth).addTo(map).bindPopup(guildworthPopup, customOptions).addTo(map)

const wingentField = L.latLng([ 4833, 7810 ]);
L.marker(wingentField).addTo(map).bindPopup(wingentFieldPopup, customOptions).addTo(map)

const lynnsFolly = L.latLng([ 4894, 7439 ]);
L.marker(lynnsFolly).addTo(map).bindPopup(lynnsFollyPopup, customOptions).addTo(map)

const vyrlysGate = L.latLng([ 5034, 7188 ]);
L.marker(vyrlysGate).addTo(map).bindPopup(vyrlysGatePopup, customOptions).addTo(map)

const rivermist = L.latLng([ 5214, 7755 ]);
L.marker(rivermist).addTo(map).bindPopup(rivermistPopup, customOptions).addTo(map)

const todeaFalls = L.latLng([ 5280, 7421 ]);
L.marker(todeaFalls).addTo(map).bindPopup(todeaFallsPopup, customOptions).addTo(map)


// Util

function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);



