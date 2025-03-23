let saldo = 100;
const simbolos = ["🐺", "🌕", "🍖", "⭐", "💰"];

document.getElementById("spin-button").addEventListener("click", girarSlots);

function girarSlots() {
    if (saldo < 10) {
        document.getElementById("mensagem").innerText = "Saldo insuficiente!";
        return;
    }
    saldo -= 10;
    document.getElementById("saldo").innerText = saldo;
    
    const slots = ["slot1", "slot2", "slot3"];
    slots.forEach(slot => {
        document.getElementById(slot).style.transform = "rotateX(360deg)";
        setTimeout(() => {
            let symbol = simbolos[Math.floor(Math.random() * simbolos.length)];
            document.getElementById(slot).innerText = symbol;
            document.getElementById(slot).style.transform = "rotateX(0deg)";
        }, 500);
    });
    
    setTimeout(() => {
        let slot1 = document.getElementById("slot1").innerText;
        let slot2 = document.getElementById("slot2").innerText;
        let slot3 = document.getElementById("slot3").innerText;
        
        if (slot1 === slot2 && slot2 === slot3) {
            document.getElementById("mensagem").innerText = "Você ganhou 50 moedas!";
            saldo += 50;
            document.getElementById("saldo").innerText = saldo;
        } else {
            document.getElementById("mensagem").innerText = "Tente novamente!";
        }
    }, 600);
}