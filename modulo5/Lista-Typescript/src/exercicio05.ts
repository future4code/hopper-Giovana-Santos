//Ex 5
type Dados = {
    name: string,
    email: string,
    role: string
}
const usuario: Dados[] = [
    {name: "Rogério", email: "roger@email.com", role: "user"},
    {name: "Ademir", email: "ademir@email.com", role: "admin"},
    {name: "Aline", email: "aline@email.com", role: "user"},
    {name: "Jéssica", email: "jessica@email.com", role: "user"},  
    {name: "Adilson", email: "adilson@email.com", role: "user"},  
    {name: "Carina", email: "carina@email.com", role: "admin"}      
] 
const ehADM = (array: Dados[]) => {
    return array
    .filter(administrador => administrador.role === "admin")
    .map(administrador => administrador.email)
}
console.log(ehADM(usuario))