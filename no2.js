// reverse word
const reverseWords = (kalimat) => {
    let kata = "";
    let hasil = "";

    for (let i = 0; i <= kalimat.length - 1; i++) {
        if (kalimat[i] !== " ") {           // ketika karakter bukan spasi maka melakukan looping kalimat ke dalam variabel kata
            kata = kata + kalimat[i]
        }
        if (kalimat[i] === " ") {           // ketika karakter berupa spasi maka memasukan isi variabel kata ke variabel hasil lalu mengkosongkan variabel kata
            hasil = kata + " " + hasil
            kata = ""
        }
    }
    hasil = kata + " " + hasil  // di akhir kalimat tidak ada spasi, untuk menampung kata terakhir kedalam hasil
    return hasil;
}

console.log(reverseWords("jalan makan siomay"));


// // program to reverse a string

// function reverseString(str) {

//     // empty string
//     let newString = [""];
//     let newString2 = [];
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString = newString + str[i];
//     }
//     for (let j = 0; j <= newString.length - 1; j--) {
//         newString2 += newString[j];
//     }
//     return newString2;
// }

// // take input from the user
// console.log(reverseString("makan siomay"));



