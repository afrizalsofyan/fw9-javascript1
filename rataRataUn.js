let mtk = 80
let bahasaIndonesia = 90
let bahasaInggris = 89
let ipa = 69

let sumValue = 0
let gradeValue

if (mtk == null || bahasaIndonesia == null || bahasaInggris == null || ipa == null){
    console.log("nilai harus diisi")
} else {
    sumValue = (mtk + bahasaIndonesia + bahasaInggris + ipa)/4
    if (sumValue >= 90 && sumValue <=100){
        gradeValue = 'A'
    } else if (sumValue >= 80 && sumValue <=89){
        gradeValue = 'B'
    } else if (sumValue >= 70 && sumValue <=79){
        gradeValue = 'C'
    } else if (sumValue >= 60 && sumValue <=69){
        gradeValue = 'D'
    } else if (sumValue >= 0 && sumValue <=59){
        gradeValue = 'E'
    } else {
        gradeValue = 'Grade tidak ditemukan. Nilai yang diinputkan salah!!!'
    }
}

console.log(`Rata-rata = ${sumValue}
Grade = ${gradeValue}`)