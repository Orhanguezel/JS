

//8.Zamanlayıcı ile Animasyon Oluşturma (Animation Loop)
//Zamanlayıcı (scheduler) sınıfını kullanarak basit bir animasyon oluşturalım.
//Bu animasyonda, ekranda bir kareyi belirli aralıklarla hareket ettireceğiz.

class AnimationLoop {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(() => {
            console.clear();
            this.x = (this.x + 1) % 10;
            this.y = (this.y + 1) % 10;
            console.log(" ".repeat(this.y) + "■");
        }, 100);
    }

    stop() {
        clearInterval(this.intervalId);
    }
}

const animationLoop = new AnimationLoop();
animationLoop.start();
setTimeout(() => animationLoop.stop(), 5000); // 5 saniye sonra animasyonu durdur

console.clear();

/*
class AnimationLoop2 {
    constructor(duration) {
        this.duration = duration; // Animasyon süresi (milisaniye)
        this.startTime = null;
    }

    start() {
        const animate = (timestamp) => {
            if (!this.startTime) this.startTime = timestamp;
            const elapsed = timestamp - this.startTime;

            if (elapsed < this.duration) {
                console.log(`Animasyon devam ediyor: ${elapsed.toFixed(0)} ms`);
                requestAnimationFrame(animate); // Bir sonraki kareyi çağır
            } else {
                console.log("Animasyon bitti.");
            }
        };

        requestAnimationFrame(animate); // İlk kareyi başlat
    }
}

const animation2 = new AnimationLoop2(3000); // 3 saniyelik bir animasyon döngüsü
animation2.start();

*/

console.clear();
