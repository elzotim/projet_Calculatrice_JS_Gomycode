var rerupHis =()=>{
    return document.getElementById("valeur").innerText
}
var AfficheHis =(num)=>{
   document.getElementById("valeur").innerText=(num)
}
AfficheHis(9*9)
var rerupoutput =()=>{
    return document.getElementById("valeur_output").innerText
}
var Afficheoutput =(num)=>{
    if (num=="") {
        document.getElementById("valeur_output").innerText=num
    } else {
   document.getElementById("valeur_output").innerText=getFrormatendNumber(num)
        
    }
}

getFrormatendNumber=(num)=>{

    var n =Number(num);
    var value=n.toLocaleString("fr")
    return value
}
Afficheoutput("81")
var renversenumeroFormat=()=>{
    
}