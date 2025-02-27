function trouverMotLePlusLong() {
    let phrase = document.getElementById("phrase").value;

    // Utilisation de str.replace() pour nettoyer la phrase
    let phraseNettoyee = phrase.replace(/[^a-zA-ZÀ-ÿ0-9\s]/g, "");

    // Utilisation de str.split() pour séparer les mots
    let mots = phraseNettoyee.split(" ");

    // Utilisation de reduce() pour trouver le mot le plus long
    let motLePlusLong = mots.reduce((longest, current) => current.length > longest.length ? current : longest, "");

    document.getElementById("result").textContent = "Le mot le plus long est : " + motLePlusLong;
}