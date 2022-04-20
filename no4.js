const divideAndShort = (angka) => {
    if (typeof angka !== "number") {
        return 'data angka harus berupa number'
    }
    let arrderet = angka.toString().split("0")
    let hasil = ""
    // console.log(arrderet);
    for (let i = 0; i <= arrderet.length - 1; i++) {
        hasil += arrderet[i].split("").sort().join("")
    }
    return Number(hasil);
}

console.log(divideAndShort("3214505430567"));
console.log(divideAndShort(3214505430567));