// Deteksi palindrome
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