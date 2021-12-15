const player1={
    id:1898,
    nom : "maamdou",
    prenom:"samamb",
    age:20,
    salut:function () {
        return ` bonjou ${this.nom}  vous avez l'id ${this.id}`
    }
};
console.log(player1.salut())
var mama =player1["nom"];
console.log("----------------------------------------------------");

console.log(mama)
player2 ={
    ...player1,id:100,type : "jaguar",
    puissance:{
        debut:100,
        milieux:20,
        fin:11
    },
    
}
console.log("----------------------------------------------------");

console.log(player2.puissance.milieux)
console.log("----------------------------------------------------");
console.log(player2.salut());