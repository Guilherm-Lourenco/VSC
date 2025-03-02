const plats = [
    "Pizza napolitaine (Italie)",
    "Sushi (Japon)",
    "Pad thaï (Thaïlande)",
    "Hamburger (États-Unis)",
    "Tacos al pastor (Mexique)",
    "Ramen (Japon)",
    "Paella (Espagne)",
    "Curry Massaman (Thaïlande)",
    "Boeuf bourguignon (France)",
    "Pho (Vietnam)",
    "Lasagnes (Italie)",
    "Moussaka (Grèce)",
    "Feijoada (Brésil)",
    "Couscous (Afrique du Nord)",
    "Nasi goreng (Indonésie)",
    "Dumplings (Chine)",
    "Pierogi (Pologne)",
    "Kimchi jjigae (Corée)",
    "Arepas (Venezuela)",
    "Pastel de nata (Portugal)"
];

document.getElementById("tirage").addEventListener("click", function() {
    const indexAleatoire = Math.floor(Math.random() * plats.length);
    const platChoisi = plats[indexAleatoire];
    document.getElementById("resultat").textContent = platChoisi;
});