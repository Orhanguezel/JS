class Kisi{
    private_adi:string;
    private_soyadi:string;

    get adi():string{
        return "Sayın "+this.private_adi;
    }
    set adi(value:string){
        this.private_adi = value;
    }
    kaydet(){
        console.log("Kişi Kaydedildi");
    }
}
class Personel extends Kisi{
    maasOde(){
        console.log("Maaş ödendi");
    }
}

let musteri = new Kisi();
musteri.adi = "Ali";
console.log(musteri.adi);
musteri.kaydet();
