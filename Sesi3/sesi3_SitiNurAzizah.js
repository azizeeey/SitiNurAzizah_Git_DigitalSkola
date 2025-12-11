// Buatlah segitia asterik dengan menggunakan loop statement 

function buatSegitigaAsterik(baris) {
    let hasil = '';
    for (let i = 1; i <= baris; i++) {
        for (let j = 0; j < i; j++) {
            hasil += '*';
        }
        hasil += '\n';
    }
    return hasil;
}

// Test dengan 3 baris
console.log(buatSegitigaAsterik(3));
