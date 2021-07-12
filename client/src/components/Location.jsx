import React from 'react';
import BannerComponent from './Header';
import FooterComponent from './Footer';
import Menu from './Menu';
import VideoComponent from './VideoComponent';

const map = new Map();
map.set('halkidiki', {
    title: "Halkidiki",
    desc: "Shaped like Poseidon’s trident, Halkidiki’s prongs jut out into the Aegean Sea. Lush green forests extend all the way to the beachfront where reflections of golden sunlight add sparkling hues to turquoise waters. Long stretches of beautiful ever-changing shoreline, unique archaeological sites, world-renowned Christian monuments, lesser-known natural wonders and man-made masterpieces have all helped shape the region’s diverse identity, made even more interesting by the rich local culinary and cultural heritage.",
    video: 'https://www.youtube.com/watch?v=e4kowVf4Coo'
})

map.set('thessaloniki', {
    title: "Thessaloniki",
    desc: `Thessaloniki is the second largest city of Greece and the most important centre of the area. Built bu the sea,  the Thermaïkos Gulf, it is a modern metropolis bearing the marks of its stormy history and its cosmopolitan character, which give it a special beauty and charm.
    Ever since the 4th c. BC when it was founded, Thessaloniki has kept its urban character and has remained a civic centre and the hub of that region.The city’s centuries-old multicultural history has been associated with great empires, as it has known the Roman, Byzantine and Ottoman Rule. The town was also greatly influenced by many ethnic and religious groups (Jews, Latins, Armenians and others) as well as Greeks from Constantinople, Pontus [modern-day northeastern Turkey] and Asia Minor [a.k.a. Anatolia]. "`,
    video: 'https://www.youtube.com/watch?v=N6byL1CJqmU'
})

map.set('xanthi', {
    title: "Xanthi",
    desc: `Amphitheatrically built on the foot of Rodopi mountain chain, Xanthi is located in the crossroads of the Black Sea and the Aegean, Europe and Asia. Whether you are a history or tradition fan, a lover of nature, a food specialist wanting to indulge in delicious local specialties and eastern type sweets, or even an entertainment addict seeking to experience the city’s vibrant night life, the region of Xanthi will definitely satisfy even the most demanding ones amongst you.
    Take the chance to discover this unspoiled destination and let your spirit free to enjoy sounds and colours that will uplift your senses!`,
    video: 'https://www.youtube.com/watch?v=yGR8hBA0kRk'
})

map.set('tinos', {
    title: "Tinos",
    desc: `Enchanting yet still unknown to the majority of travellers, Tinos is one of the most interesting cycladic islands to visit. One can enjoy its unspoiled architecture, its picturesque 40 villages, its exquisite beaches and its traditional culture and mouthwatering gastronomy as well as the way of living that has been going on through the years.
    According to the philosopher Kastoriadis, the “hand-made Tínos” is the homeland of renowned great artists of marble carving such as Gyzis, Lytras, Chalepas, Filippotis and Sochos, who have been the last famous names to have held the baton of the island’s marble-carving tradition.`,
    video: 'https://www.youtube.com/watch?v=QO0GCkFALGA'
})

map.set('athens', {
    title: "Athens",
    desc: `Wellcome to Athens, the historical capital of Europe. Welcome to the birthplace of democracy, arts, science and philosophy of western civilisation.  Home of Plato, Socrates, Pericles, Euripides, Sophocles, Aeschylus.  Athens is one of the world’s oldest cities. It’s recorded history spanning around 3.400 years and it is being inhabited since the 11th millennium B.C. E.  Today, under the shadow of Parthenon, the contemporary urban scenery of the sprawling city reflects its exciting history, its multi- cultural modern personality as well as the infrastructure and facilities.`,
    video: 'https://www.youtube.com/watch?v=-nd5JesREds'
})

map.set('samos', {
    title: "Samos",
    desc: `Samos is an island ruled by legend and beauty. It is the island of the father of mathematics, Pythagoras, the astronomer Aristarchus and the philosopher Epicurus. It is the home of Hera and the land that hosted Herodotus and Aesop. An important center of trade in the Aegean and a major naval force in antiquity, it came into contact with important Mediterranean cultures.`,
    video: 'https://www.youtube.com/watch?v=7jLUDCkweqs'
})


export default function Location({ location, sendRoute }) {
    const sendHome = (status) => { // the callback. Use a better name
        console.log("home", status);
        sendRoute(status);
    };
    let x = location.pathname.split('/');
    let name = x[x.length - 1];
    let data = map.get(name) || map.get('halkidiki');
    return (
        <div>
            <Menu sendHome={sendHome} />
            <BannerComponent title={data.title} imageLink={`/Common/${name}.webp`} />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img className="img-fluid" style={{ height: '350px', width: '350px' }} src={`/Common/${name}_mini.webp`} alt="demo" />
                    </div>
                    <div className="col">
                        <h1>{data.title}</h1>
                        <br />
                        <p style={{ textAlign: "justify" }}>{data.desc}</p>
                    </div>
                </div>
            </div>
            <br />
            <VideoComponent videoUrl={data.video}/>
            <FooterComponent />
        </div>
    )
}