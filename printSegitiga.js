const printSegitiga = 5

if (typeof printSegitiga != "number"){
    console.log("Data harus number")
} else{
    if(printSegitiga<=0){
        console.log("Nomor harus lebih dari 0")
    } else {
        let col =""
        for (let i=printSegitiga; i>0; i--){
            for(let j=1; j<=i; j++){
                col += `${j} `
            }
            col +="\n"
        }
        console.log(col)
    }
}