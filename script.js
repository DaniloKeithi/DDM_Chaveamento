let timesOitavas = [
    "Time A", "Time B", "Time C", "Time D", "Time E", "Time F", "Time G", "Time H",
    "Time I", "Time J", "Time K", "Time L", "Time M", "Time N", "Time O", "Time P"
];

let quartas = [];
let semifinal = [];
let finalistas = [];
let campeao = "";

function proximo(fase) {
    let winner = "";

    if (fase === 1) {
        // Oitavas de Final
        for (let i = 1; i <= 8; i++) {
            let scoreA = parseInt(document.getElementById(`score${i}A`).value) || 0;
            let scoreB = parseInt(document.getElementById(`score${i}B`).value) || 0;
            let teamA = document.getElementById(`team${i}A`).value;
            let teamB = document.getElementById(`team${i}B`).value;

            winner = scoreA > scoreB ? teamA : teamB;
            quartas.push(winner);
            alert(`${winner} avançou para as Quartas de Final!`);
        }
    } else if (fase === 2) {
        // Quartas de Final
        for (let i = 1; i <= 4; i++) {
            let scoreA = parseInt(document.getElementById(`scoreQ${i}A`).value) || 0;
            let scoreB = parseInt(document.getElementById(`scoreQ${i}B`).value) || 0;
            let teamA = document.getElementById(`teamQ${i}A`).value;
            let teamB = document.getElementById(`teamQ${i}B`).value;

            winner = scoreA > scoreB ? teamA : teamB;
            semifinal.push(winner);
            alert(`${winner} avançou para as Semifinais!`);
        }
    } else if (fase === 3) {
        // Semifinal
        for (let i = 1; i <= 2; i++) {
            let scoreA = parseInt(document.getElementById(`scoreS${i}A`).value) || 0;
            let scoreB = parseInt(document.getElementById(`scoreS${i}B`).value) || 0;
            let teamA = document.getElementById(`teamS${i}A`).value;
            let teamB = document.getElementById(`teamS${i}B`).value;

            winner = scoreA > scoreB ? teamA : teamB;
            finalistas.push(winner);
            alert(`${winner} avançou para a Final!`);
        }
    } else if (fase === 4) {
        // Final
        let scoreA = parseInt(document.getElementById("scoreFA").value) || 0;
        let scoreB = parseInt(document.getElementById("scoreFB").value) || 0;
        let teamA = document.getElementById("teamFA").value;
        let teamB = document.getElementById("teamFB").value;

        campeao = scoreA > scoreB ? teamA : teamB;
        localStorage.setItem("campeao", campeao); // Salva o campeão no localStorage
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
    window.location.href = "ganhador.html"; // Redireciona para a página do ganhador
}
