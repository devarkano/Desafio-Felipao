function classificarNivel(experiencia) {
    if (experiencia < 1000) {
        return "ferro";
    } else if (experiencia >= 1001 && experiencia <= 2000) {
        return "bronze";
    } else if (experiencia >= 2001 && experiencia <= 5000) {
        return "prata";
    } else if (experiencia >= 6001 && experiencia <= 7000) {
        return "ouro";
    } else if (experiencia >= 7001 && experiencia <= 8000) {
        return "platina";
    } else if (experiencia >= 8001 && experiencia <= 9000) {
        return "ascendente";
    } else if (experiencia >= 9001 && experiencia <= 10000) {
        return "imortal";
    } else {
        return "radiante";
    }
}

let nome = "Gandalf"; 
let experiencia = 12470; 
let nivel = classificarNivel(experiencia);
console.log(`O herói de nome ${nome} está no nível ${nivel}.`);
