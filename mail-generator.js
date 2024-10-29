function gerarEmailAlias(baseEmail, indice) {
    const [usuario, dominio] = baseEmail.split('@');
    return `${usuario}+indicado${indice}@${dominio}`;
}


const baseEmail = "---";  // Coloque seu email base aqui
const quantidadeDeEmails = 5;  
const emailsGerados = [];

for (let i = 1; i <= quantidadeDeEmails; i++) {
    emailsGerados.push(gerarEmailAlias(baseEmail, i));
}

console.log("Emails para indicação:");
emailsGerados.forEach((email) => console.log(email));
