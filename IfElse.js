let belanja = 1_200_000;
let diskon = 0;
let totalBelanja = 0;
let infoDiskon = "";

if (belanja > 0 && belanja < 500_000) {
  diskon = 0;
  infoDiskon = "Tidak ada diskon pada pembelian dibawah 500.000";
} else if (belanja >= 500_000 && belanja <= 1_000_000) {
  diskon = belanja * (5 / 100);
  infoDiskon = "Mendapatkan diskon sebesar 5%";
} else if (belanja > 1_000_000) {
  diskon = belanja * (10 / 100);
  infoDiskon = "Mendapatkan diskon 10%";
} else {
  console.log("Error : Jumlah belanja invalid");
}

totalBelanja = belanja - diskon;

if (belanja>= 0) {
  console.log(infoDiskon);
  console.log("Belanja Anda = " + belanja);
  console.log("Total diskon = " + diskon);
  console.log("Total belanja = " + totalBelanja);
}
