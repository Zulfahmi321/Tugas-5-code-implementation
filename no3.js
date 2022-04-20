const ArkFood = (harga, voucher, jarak, pajak) => {
    // validasi harga harus angka
    if (typeof harga !== "number") {
        return 'Harga harus berupa number';
    }
    // validasi voucher harus string
    if (typeof voucher !== "string") {
        return 'Voucher harus berupa string';
    }
    // validasi jarak harus number
    if (typeof jarak !== "number") {
        return 'jarak harus berupa number';
    }
    // validasi jarak tidak boleh kurang dari nol
    if (jarak <= 0) {
        return 'jarak harus lebih dari nol';
    }
    // validasi pajak  boolean
    if (typeof pajak !== "boolean") {
        return 'pajak harus berupa boolean';
    }

    let potongan = 0
    let ongkir = 5000
    let kenaPajak = 0
    // pengkondisian
    if (voucher.toUpperCase() === "ARKAFOOD5" && harga >= 50000) {
        potongan = harga * 50 / 100
        if (potongan >= 50000) {
            potongan = 50000
        }
    }

    if (voucher.toUpperCase() === "DITRAKTIRDEMY" && harga >= 25000) {
        potongan = harga * 60 / 100
        if (potongan >= 30000) {
            potongan = 30000
        }
    }

    // pengkondisian jarak
    if (jarak > 2) {
        ongkir += (jarak - 2) * 3000
    }

    // pengkondisian pajak
    if (pajak === true) {
        kenaPajak = harga * 5 / 100
    }

    return ` harga: ${harga} \n potongan : ${potongan} \n Biaya Antar: ${ongkir} \n pajak : ${kenaPajak} \n subtotal : ${harga - potongan + ongkir + kenaPajak}`;
}
console.log(ArkFood("50000", 'ARKAFOOD5', 2, true));
console.log(ArkFood(50000, 1234, 2, false));
console.log(ArkFood(50000, 'ARKAFOOD5', "2", true));
console.log(ArkFood(50000, 'ARKAFOOD5', 2, "false"));
console.log(ArkFood(50000, 'ARKAFOOD5', -2, true));
console.log(ArkFood(500000, 'ARKAFOOD5', 5, true));