// Classlar

class Ev{
    _odaSayisi:number;
    _pencereSayisi:number;
    _kat:number;
    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this._odaSayisi=odaSayisi;
        this._pencereSayisi=pencereSayisi;
        this._kat=kat;
    }
    yemekYe(){
        console.log("Yemek yenildi");
    }
}
let ev = new Ev(3,4,5);
ev.yemekYe();