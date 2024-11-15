// inherit örneği
class Kisi{
    kaydet(){
        console.log("Kişi kaydedildi");
    }

}
class Musteri extends Kisi{
    satisYap(){
        console.log("Satış Yapıldı");
    }

}
class Personel extends Kisi{
    maasOde(){
        console.log("Maaş ödendi");
    }

}

let musteri = new Musteri();
musteri.kaydet();
musteri.satisYap();

let personel = new Personel();
personel.kaydet();
personel.maasOde();
