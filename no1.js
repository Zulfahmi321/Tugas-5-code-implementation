// // Deteksi palindrom
// function checkPalindrome(string) {
//     const panjang = string.length;
//     //melakukan perulangan panjang string sampai kondisi terpenuhi
//     for (let i = 0; i < panjang; i++) {
//         console.log(i);
//         // mengecek apakah huruf pertama dan huruf terakhir sama
//         if (string.toLowerCase()[i] !== string.toLowerCase()[panjang - 1 - i]) {

//             return 'bukan palindrom';
//         }
//     }
//     return 'palindrom';
// }

// // panggil fungsi
// console.log(checkPalindrome('MakAM'));
// console.log(checkPalindrome('madam'));


// Deteksi palindrom
function checkPalindrome(kata) {
    if (typeof kata !== "string") { //validasi untuk input kata berupa string
        return console.log("Kata yang dimasukan harus berupa string");
    }
    let kata2 = ""
    //melakukan perulangan panjang kata sampai kondisi terpenuhi
    for (let i = kata.length - 1; i >= 0; i--) {
        kata2 = kata2 + kata[i];
    }
    // mengecek apakah kata yang dimasukan sama dengan kata yang telah di perulangkan
    if (kata.toLowerCase() === kata2.toLowerCase()) {
        return console.log('palindrom'); // jika iya print palindrom
    }
    return console.log('bukan palindrom'); // jika tidak print bukan palindrom
}

checkPalindrome("Makam")