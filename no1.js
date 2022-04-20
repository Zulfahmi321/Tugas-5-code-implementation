// Deteksi palindrome
function checkPalindrome(kata) {
    if (typeof kata !== "string") { //validasi untuk input kata berupa string
        return "Kata yang dimasukan harus berupa string";
    }
    let kataTerbalik = ""
    //melakukan perulangan panjang kata sampai kondisi terpenuhi
    for (let i = kata.length - 1; i >= 0; i--) {
        kataTerbalik = kataTerbalik + kata[i];
    }
    // mengecek apakah kata yang dimasukan sama dengan kata yang telah di perulangkan
    if (kata.toLowerCase() === kataTerbalik.toLowerCase()) {
        return 'palindrom'; // jika iya print palindrom
    }
    return ('bukan palindrom'); // jika tidak print bukan palindrom
}

console.log(checkPalindrome(123));
console.log(checkPalindrome("makan"));
console.log(checkPalindrome("Makam"));