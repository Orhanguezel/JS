

class AnimationLoop2 {
    constructor(duration) {
        this.duration = duration; // Animasyon süresi (milisaniye)
        this.startTime = null;
        this.intervalId = null;
    }

    start() {
        this.startTime = Date.now();
        this.intervalId = setInterval(() => {
            const elapsed = Date.now() - this.startTime;

            if (elapsed < this.duration) {
                console.log(`Animasyon devam ediyor: ${elapsed} ms`);
            } else {
                console.log("Animasyon bitti.");
                clearInterval(this.intervalId); // Döngüyü durdur
            }
        }, 16); // Yaklaşık 60 FPS
    }
}

const animation2 = new AnimationLoop2(3000); // 3 saniyelik bir animasyon döngüsü
animation2.start();

console.clear();

//9. Geriye Kalan Süreyi Görüntüleme (Remaining Time Display)
//Geriye kalan süreyi görüntülemek için RemainingTimeDisplay sınıfını oluşturalım.
//Bu sınıf, belirli bir süre sonra geriye kalan süreyi ekrana yazdıracaktır.
class RemainingTimeDisplay {
    constructor(totalTime) {
        this.totalTime = totalTime; // Toplam süre (milisaniye)
        this.intervalId = null;
    }

    start() {
        let remainingTime = this.totalTime;
        this.intervalId = setInterval(() => {
            if (remainingTime > 0) {
                console.log(`Kalan süre: ${remainingTime / 1000} saniye`);
                remainingTime -= 1000;
            } else {
                console.log("Süre doldu.");
                clearInterval(this.intervalId);
            }
        }, 1000);
    }
}

const remainingTimer = new RemainingTimeDisplay(5000); // 5 saniye kalan süre sayacı
remainingTimer.start();

console.clear();

//10. Geri Sayım Sayacı (Countdown Timer)
//Geri sayım sayacı (countdown timer) sınıfını kullanarak geri sayım yapalım.
//Bu sınıf, belirli bir süreyi geri sayacak ve süre bittiğinde bir mesaj yazdıracaktır.

class CountdownTimer {
    constructor(seconds) {
        this.seconds = seconds;
        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(() => {
            if (this.seconds > 0) {
                console.log(`${this.seconds} saniye kaldı.`);
                this.seconds--;
            } else {
                console.log("Süre doldu!");
                clearInterval(this.intervalId);
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
    }
}

const countdown = new CountdownTimer(5); // 5 saniye geri sayım
countdown.start();

console.clear();

//11. Belirli Gün/Saatte İşlem Yapma (Scheduled Task)
//Belirli bir gün ve saatte işlem yapmak için ScheduledTask sınıfını oluşturalım.
class ScheduledTask {
    constructor(targetHour, targetMinute) {
        this.targetHour = targetHour;
        this.targetMinute = targetMinute;
        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(() => {
            const now = new Date();
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();

            if (currentHour === this.targetHour && currentMinute === this.targetMinute) {
                console.log("Planlanmış görev yürütüldü!");
                clearInterval(this.intervalId);
            }
        }, 60000); // Her dakika kontrol ediyor
    }
}

const task = new ScheduledTask(15, 30); // Saat 15:30’da bir görev çalıştırır
task.start();

console.clear();

//12. İşlem Yapmak İçin Son Tarih (Deadline)
//Belirli bir tarihe kadar işlem yapmak için Deadline sınıfını oluşturalım.
//Bu sınıf, belirli bir tarihe kadar geriye sayacak ve süre bittiğinde bir mesaj yazdıracaktır.
class Deadline {
    constructor(targetDate) {
        this.targetDate = new Date(targetDate);
    }

    start() {
        const countdown = setInterval(() => {
            const now = new Date();
            const remainingTime = this.targetDate - now;

            if (remainingTime <= 0) {
                console.log("Son tarih geldi!");
                clearInterval(countdown);
            } else {
                const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
                const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
                console.log(`Kalan süre: ${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye`);
            }
        }, 1000);
    }
}

const deadline = new Deadline("2024-12-01T00:00:00"); // Belirli bir tarihe kadar süreyi gösterir
deadline.start();

console.clear();


