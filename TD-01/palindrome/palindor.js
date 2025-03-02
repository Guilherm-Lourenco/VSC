function verifierPalindrome() {
    // Récupérer le mot de l'input
    let mot = document.getElementById("mot").value;

    // Utilisation de str.toLowerCase() pour convertir le mot en minuscules
    let motMinuscule = mot.toLowerCase();

    // Inverser le mot
    let motInverse = motMinuscule.split('').reverse().join('');

    // Vérifier si le mot est un palindrome
    let resultat = document.getElementById("resultat");
    if (motMinuscule === motInverse) {
        resultat.textContent = `"${mot}" est un palindrome !`;
        resultat.style.color = "green";
    } else {
        resultat.textContent = `"${mot}" n'est pas un palindrome.`;
        resultat.style.color = "red";
    }
}