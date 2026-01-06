/*1. Produktdaten*/
const products = {
    cosmic: {
        title: "Cosmic Swing",
        tagline: "Meistere den Takt der Sterne.",
        desc: "Tauche ein in ein intergalaktisches Rhythmus-Erlebnis. Cosmic Swing kombiniert präzises Gameplay mit einem dynamischen Weltraum-Soundtrack.",
        price: "19,99 €",
        image: "assets/CosmicSwing_cover.png",
        accent: "accent-cosmic",
        titleColor: "#9d50bb"
    },
    galactic: {
        title: "Galactic Beats",
        tagline: "Bassgewitter im Orbit.",
        desc: "Der EDM-Ableger von Cosmic Swing. Härtere Beats, neonfarbene Visuals und ein exklusiver Soundtrack von interstellaren DJs.",
        price: "24,99 €",
        image: "assets/GalacticBeats_cover.png",
        accent: "accent-galactic",
        titleColor: "#39ff14"
    }
};

/*2. Shop-Logik: Produktwechsel*/
function switchProduct(key) {
    const p = products[key];

    // Texte aktualisieren
    document.getElementById('product-title').innerText = p.title;
    document.getElementById('product-tagline').innerText = p.tagline;
    document.getElementById('product-desc').innerHTML = `<p>${p.desc}</p>`;
    document.getElementById('product-price').innerText = p.price;

    // Bild aktualisieren
    const imgElement = document.getElementById('main-product-img');
    imgElement.src = p.image;
    imgElement.alt = p.title + " Cover";

    // Akzentstreifen und CSS-Variable für den Titel-Verlauf anpassen
    document.getElementById('accent-strip').className = p.accent;
    document.documentElement.style.setProperty('--dynamic-title-color', p.titleColor);
}

/*3. Lightbox-Funktionen*/
function openLightbox() {
    const modal = document.getElementById("image-modal");
    const fullImg = document.getElementById("full-image");
    const currentImg = document.getElementById("main-product-img");

    fullImg.src = currentImg.src;
    modal.style.display = "flex";
}

function closeLightbox() {
    const modal = document.getElementById("image-modal");
    if (modal) modal.style.display = "none";
}

/*4. Event-Listener*/

// Bewegung des Custom-Cursors
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Schließen der Lightbox mit der Escape-Taste
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeLightbox();
});

// Initialisierung beim Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
    // Setzt die initiale Farbe für den ersten Titel
    document.documentElement.style.setProperty('--dynamic-title-color', products.cosmic.titleColor);
});