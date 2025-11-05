let belanja = 1_200_000;
let diskon = 0;
let totalBelanja = 0;
let infoDiskon = "";

switch (true) {
  case belanja < 5_00_000:
    diskon = 0;
    infoDiskon = "Anda tidak mendapatkan diskon";
    break;
  case belanja >= 5_00_000 && belanja <= 1_000_000:
    diskon = belanja * (5 / 100);
    infoDiskon = "Anda mendapatkan diskon 5%";
    break;
  case belanja > 1_000_000:
    diskon = belanja * (10 / 100);
    infoDiskon = "Anda mendapatkan diskon 10%";
    break;
  default:
    console.log("Error : Jumlah belanja invalid");
}

totalBelanja = belanja - diskon;
console.log(infoDiskon);
console.log("Belanja Anda = " + belanja);
console.log("Total diskon = " + diskon);
console.log("Total belanja = " + totalBelanja);
