// If else
let auth = true;
if (!auth) {
    console.log("Anda Gagal Login");
} else {
    console.log("Anda Berhasil Login")
}

// Nested If
let gender = "Laki - Laki"
if (gender == "Laki - Laki") {
    console.log("Jenis Kelamin Anda " + gender)
} else if (gender == "Perempuan"){
    console.log("Jenis Kelamin Anda " + gender)
} else {
    console.log("Jenis Kelamin Anda tidak diketahui");
}

// Switch Case
let laptop = "Acer";
switch (laptop) {
    case "Asus":
        console.log("Kamu Memilih Brand Laptop Asus")
        break;
    case "Acer":
        console.log("Kamu Memilih Brand Laptop Acer")
        break;
    case "Hp":
        console.log("Kamu Memilih Brand Laptop Hp")
        break;
    case "Lenovo":
        console.log("Kamu Memilih Brand Laptop Lenovo")
        break;
    case "MSI":
        console.log("Kamu Memilih Brand Laptop MSI")
        break;
    default:
        console.log("Kamu Memilih Selain yang ada didaftar");
        break;
}


// For Statement

for (let num = 3; num > 0; num--) {
    console.log("Hitung mundur dimulai dari : " + num);
}

// While 

let uang = 10000
while (uang > 0) {
    console.log("Kamu memiliki uang sebesar = Rp." + uang + ",-");
    break;
}

// Do While
let jarak = 10
do{
    console.log("Jarak sampai tujuan tersisa " + jarak + " KM");
    jarak--;
} while (jarak >= 0) {
    console.log("Kamu sudah sampai tujuan");
}


// Function

function volumPersegi(a,b,c) {
    return a * b * c;
}

console.log("Hasil dari perhitungan volume persegi = " + volumPersegi(3,5,2));