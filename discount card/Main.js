let mesaj = 
`
Magzamız'a hoşgeldiniz. Discount kartınız varmı ? 
1-Evet
2-Hayır
`;

const urunler = [
    {
        urunIsmi : "Yogurt",
        fiyat : 45       
    },
    {
        urunIsmi : "Kahve",
        fiyat: 100
    },
    {
        urunIsmi : "Dana kıyma",
        fiyat : 300
    }

]

let sonuc = confirm(mesaj);

if(sonuc){
    let isim = prompt("Adınızı Giriniz :");
    let soyisim = prompt("Soyiminizi giriniz")

    const musteri = new Musteri(isim,soyisim,sonuc,urunler);
    let odenecekTutar = musteri.hesapla();

    alert(
        `Müşteri Bilgileri : ${musteri.isim} ${musteri.soyisim}
        Ödenecek Tutar : ${odenecekTutar}`
    );
}else{
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar : ${odenecekTutar} `)

}