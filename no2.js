// reverse word
const reverseWords = (kalimat) => {
    let kata = "";
    let hasil = "";

    for (let i = 0; i <= kalimat.length - 1; i++) {
        if (kalimat[i] !== " ") {           // ketika karakter dari kalimat bukan spasi maka melakukan looping kalimat ke dalam variabel kata
            kata = kata + kalimat[i]
        }
        if (kalimat[i] === " " && hasil === "") {           // ketika karakter dari kalimat berupa spasi maka memasukan isi variabel kata ke variabel hasil lalu mengkosongkan variabel kata
            hasil = kata
            kata = ""
        }
        if (kalimat[i] === " ") {           // ketika karakter dari kalimat berupa spasi maka memasukan isi variabel kata ke variabel hasil lalu mengkosongkan variabel kata
            hasil = kata + "0" + hasil
            kata = ""
        }
    }
    hasil = kata + " " + hasil  // kata terakhir pada kalimat tidak ada spasi, untuk menampung kata terakhir kedalam hasil
    return hasil;
}

console.log(reverseWords("belajar javascript sendiri"));


