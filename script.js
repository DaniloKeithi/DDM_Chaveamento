let timesOitavas = [
    "1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D",
    "3A", "3B", "3C", "3D", "9A", "9B", "9C", "9D"
];

let quartas = [];
let semifinal = [];
let finalistas = [];
let campeao = "";

function avancarFase(fase) {
    let winner = "";

    if (fase === 1) {

        for (let i = 1; i <= 8; i++) {
            let scoreA = parseInt(document.getElementById(`score${i}A`).value) || 0;
            let scoreB = parseInt(document.getElementById(`score${i}B`).value) || 0;
            let teamA = document.getElementById(`team${i}A`).value;
            let teamB = document.getElementById(`team${i}B`).value;

            winner = scoreA > scoreB ? teamA : teamB;
            quartas.push(winner);
            alert(`${winner} avançou para as Quartas de Final!`);
        }


        for (let i = 1; i <= 4; i++) {
            document.getElementById(`teamQ${i}A`).value = quartas[i * 2 - 2];
            document.getElementById(`teamQ${i}B`).value = quartas[i * 2 - 1];
        }

    } else if (fase === 2) {

        for (let i = 1; i <= 4; i++) {
            let scoreA = parseInt(document.getElementById(`scoreQ${i}A`).value) || 0;
            let scoreB = parseInt(document.getElementById(`scoreQ${i}B`).value) || 0;
            let teamA = document.getElementById(`teamQ${i}A`).value;
            let teamB = document.getElementById(`teamQ${i}B`).value;

            winner = scoreA > scoreB ? teamA : teamB;
            semifinal.push(winner);
            alert(`${winner} avançou para as Semifinais!`);
        }


        for (let i = 1; i <= 2; i++) {
            document.getElementById(`teamS${i}A`).value = semifinal[i * 2 - 2];
            document.getElementById(`teamS${i}B`).value = semifinal[i * 2 - 1];
        }

    } else if (fase === 3) {

        for (let i = 1; i <= 2; i++) {
            let scoreA = parseInt(document.getElementById(`scoreS${i}A`).value) || 0;
            let scoreB = parseInt(document.getElementById(`scoreS${i}B`).value) || 0;
            let teamA = document.getElementById(`teamS${i}A`).value;
            let teamB = document.getElementById(`teamS${i}B`).value;

            winner = scoreA > scoreB ? teamA : teamB;
            finalistas.push(winner);
            alert(`${winner} avançou para a Final!`);
        }


        document.getElementById(`teamFA`).value = finalistas[0];
        document.getElementById(`teamFB`).value = finalistas[1];

    } else if (fase === 4) {

        let scoreA = parseInt(document.getElementById("scoreFA").value) || 0;
        let scoreB = parseInt(document.getElementById("scoreFB").value) || 0;
        let teamA = document.getElementById("teamFA").value;
        let teamB = document.getElementById("teamFB").value;

        campeao = scoreA > scoreB ? teamA : teamB;
        localStorage.setItem("campeao", campeao); 
        document.getElementById("winnerName").textContent = campeao;
        alert(`${campeao} é o Campeão!`);
    }

    atualizarFases();
}

function atualizarFases() {
    if (quartas.length === 8) {
        document.getElementById("oitavas").style.display = "none";
        document.getElementById("quartas").style.display = "block";
    }
    if (semifinal.length === 4) {
        document.getElementById("quartas").style.display = "none";
        document.getElementById("semifinal").style.display = "block";
    }
    
    if (finalistas.length === 2) {
        document.getElementById("semifinal").style.display = "none";
        document.getElementById("final").style.display = "block";
    }
    if (campeao) {
        document.getElementById("final").style.display = "none";
        document.getElementById("campeao").style.display = "block";
    }

}

function mostrarGanhador() {
    window.location.href = "ganhador.html"; 
}
