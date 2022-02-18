let senha = "0123"; // Altere este valor para menos de 6 caracteres ou mais de 6 caracteres

// Cria a condição que checa a quantia de caracteres
if (senha.length < 6) {
  console.log("Faltam", +senha.length, "caracteres");
} else console.log("Sua senha está ok :)");
