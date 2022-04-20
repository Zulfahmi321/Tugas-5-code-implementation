const divideAndShort = (angka) => {
    let arrderet = angka.toString().split("0")
    let hasil = ""
    // console.log(arrderet);
    for (let i = 0; i <= arrderet.length - 1; i++) {
        hasil += arrderet[i].split("").sort().join("")
    }
    return console.log(Number(hasil));
}

divideAndShort(3214505430567);