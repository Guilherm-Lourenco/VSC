function creerPyramide() {
    let etages = parseInt(document.getElementById("etages").value);
    let pyramideDiv = document.getElementById("pyramide");
    pyramideDiv.innerHTML = ""; // Effacer la pyramide précédente

    for (let i = 1; i <= etages; i++) {
        let espaceAvant = " ".repeat(etages - i);
        let etoiles = "*".repeat(i); // Toutes les étoiles collées
        let ligne = espaceAvant + etoiles + espaceAvant;
        let ligneDiv = document.createElement("div");
        ligneDiv.textContent = ligne;
        pyramideDiv.appendChild(ligneDiv);
    }
}