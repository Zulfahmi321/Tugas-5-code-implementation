// reverse word
const reverseWord = (kalimat) => {
    let kata = "";
    let hasil = "";

    for (let i = 0; i <= kalimat.length - 1; i++) {
        if (kalimat[i] !== " ") {           // ketika karakter bukan spasi maka melakukan looping kalimat ke dalam var kata
            kata = kata + kalimat[i]
        }
        if (kalimat[i] === " ") {           // ketika karakter berupa spasi maka memasukan isi variabel kata ke var hasil lalu mengkosongkan var kata
            hasil = kata + " " + hasil
            kata = ""
        }
    }
    hasil = kata + " " + hasil  // di akhir kalimat tidak ada spasi, untuk menampung kata terakhir kedalam hasil
    return console.log(hasil);
}

reverseWord("jalan makan siomay")



