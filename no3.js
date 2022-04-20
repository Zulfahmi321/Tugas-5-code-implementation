const ArkFood = (harga, voucher, jarak, pajak) => {
    // validasi harga harus angka
    if (typeof harga !== "number") {
        return console.log('Harga harus berupa number');
    }
    // validasi voucher harus string
    if (typeof voucher !== "string") {
        return console.log('Voucher harus berupa string');
    }
    // validasi jarak harus number
    if (typeof jarak !== "number") {
        return console.log('jarak harus berupa number');
    }
    // validasi pajak  boolean
    if (typeof pajak !== "boolean") {
        return console.log('pajak harus berupa boolean');
    }

    let potongan = 0
    let ongkir = 0
    let kenaPajak = 0
    // pengkondisian
    if (voucher.toUpperCase() === "ARKAFOOD5" && harga >= 50000 && harga <= 100000) {
        potongan = harga * 50 / 100
    }
    if (voucher.toUpperCase() === "ARKAFOOD5" && harga >= 100000) {
        potongan = 50000
    }
    if (voucher.toUpperCase() === "DITRAKTIRDEMY" && harga >= 25000 && harga <= 50000) {
        potongan = harga * 60 / 100
    }
    if (voucher.toUpperCase() === "DITRAKTIRDEMY" && harga >= 50000) {
        potongan = 30000
    }
    // pengkondisian jarak
    if (jarak <= 2) {
        ongkir = 5000
    }
    if (jarak > 2) {
        ongkir = 5000 + ((jarak - 2) * 3000)
    }

    // pengkondisian pajak
    if (pajak === true) {
        kenaPajak = harga * 5 / 100
    }

    return console.log(`harga: ${harga} \n potongan : ${potongan} \n Biaya Antar: ${ongkir} \n pajak : ${kenaPajak} \n subtotal : ${harga - potongan + ongkir + kenaPajak}`);
}
ArkFood(50000, 'ARKAFOOD5', 2, false);