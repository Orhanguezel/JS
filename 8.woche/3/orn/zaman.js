

// Zaman ile ilgili metotlar
// JavaScript'te zaman ile ilgili işlemler yapmak için kullanabileceğiniz birçok metot bulunmaktadır.
// Aşağıda bu metotları açıklamalar ve örneklerle birlikte listeledim.

//1. 1. new Date() JavaScript'te yeni bir tarih ve saat nesnesi oluşturmak için new Date() kullanılır. 
//Varsayılan olarak, bu metod çalıştırıldığında geçerli tarih ve saat alınır.
const date = new Date();
console.log(date); // Çıktı: "2021-09-21T10:00:00.000Z"

//2. getTime()getTime() metodu, 1970-01-01T00:00:00Z tarihinden itibaren geçen milisaniye sayısını döndürür. 
//Bu sayı, Unix Timestamp olarak da bilinir.
const date2 = new Date();
console.log(date2.getTime()); // Çıktı: 1632200400000

//3. getFullYear(), getMonth(), getDate()
//getFullYear() metodu, yıl bilgisini döndürür.
//getMonth() metodu, ay bilgisini döndürür. (0-11 arasında bir değer döndürür)
//getDate() metodu, ayın gününü döndürür. (1-31 arasında bir değer döndürür)
const date3 = new Date();
console.log(date3.getFullYear()); // Çıktı: 2021
console.log(date3.getMonth()); // Çıktı: 8
console.log(date3.getDate()); // Çıktı: 21

//4. getHours(), getMinutes(), getSeconds(), getMilliseconds()
//getHours() metodu, saat bilgisini döndürür. (0-23 arasında bir değer döndürür)
//getMinutes() metodu, dakika bilgisini döndürür. (0-59 arasında bir değer döndürür)
//getSeconds() metodu, saniye bilgisini döndürür. (0-59 arasında bir değer döndürür)
//getMilliseconds() metodu, milisaniye bilgisini döndürür. (0-999 arasında bir değer döndürür)
const date4 = new Date();
console.log(date4.getHours()); // Çıktı: 10
console.log(date4.getMinutes()); // Çıktı: 0
console.log(date4.getSeconds()); // Çıktı: 0
console.log(date4.getMilliseconds()); // Çıktı: 0

//5. toLocaleDateString() ve toLocaleTimeString()
//toLocaleDateString() metodu, tarihi yerel tarih biçimine dönüştürür.
//toLocaleTimeString() metodu, saati yerel saat biçimine dönüştürür.
const date5 = new Date();
console.log(date5.toLocaleDateString()); // Çıktı: "21.09.2021"
console.log(date5.toLocaleTimeString()); // Çıktı: "13:00:00"

console.clear();

// JavaScript sınıfları içinde zamana dayalı bazı metotların nasıl kullanılabileceğini göstereceğim. 
// Bu metotlar, sınıfın yapısına ve amacına bağlı olarak farklı şekillerde kullanılabilir.

//1. Kronometre (Stopwatch) Sınıfı
//Kronometre (stopwatch) sınıfı, belirli bir süreyi ölçmek için kullanılır.
class Stopwatch {
    constructor() {
        this.startTime = null;
        this.endTime = null;
        this.running = false;
        this.duration = 0;
    }

    start() {
        if (this.running) {
            console.log("Kronometre zaten çalışıyor.");
            return;
        }
        this.running = true;
        this.startTime = new Date();
        console.log("Kronometre başlatıldı.");
    }

    stop() {
        if (!this.running) {
            console.log("Kronometre zaten durdurulmuş.");
            return;
        }
        this.running = false;
        this.endTime = new Date();
        this.duration += (this.endTime - this.startTime) / 1000; // Saniye cinsinden
        console.log(`Kronometre durduruldu. Geçen süre: ${this.duration} saniye`);
    }

    reset() {
        this.startTime = null;
        this.endTime = null;
        this.running = false;
        this.duration = 0;
        console.log("Kronometre sıfırlandı.");
    }

    getDuration() {
        return this.duration;
    }
}

const stopwatch = new Stopwatch();
stopwatch.start();
setTimeout(() => stopwatch.stop(), 5000); // 5 saniye sonra kronometreyi durdur
setTimeout(() => stopwatch.start(), 2000); // 2 saniye sonra kronometreyi başlat
setTimeout(() => stopwatch.stop(), 7000); // 7 saniye sonra kronometreyi durdur
setTimeout(() => console.log(stopwatch.getDuration()), 8000); // 8 saniye sonra geçen süreyi yazdır
setTimeout(() => stopwatch.reset(), 9000); // 9 saniye sonra kronometreyi sıfırla

console.clear();

//2. Geri Sayım Sayacı (Countdown Timer)
//Geri sayım sayacı (countdown timer) sınıfı, belirli bir süreyi geri saymak için kullanılır.

class CountdownTimer {
    constructor(seconds) {
        this.seconds = seconds;
        this.intervalId = null;
    }

    start() {
        if (this.intervalId) {
            console.log("Geri sayım zaten başlatılmış.");
            return;
        }

        console.log(`Geri sayım başladı: ${this.seconds} saniye`);
        this.intervalId = setInterval(() => {
            if (this.seconds > 0) {
                console.log(`${this.seconds}...`);
                this.seconds--;
            } else {
                console.log("Süre doldu!");
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        }, 1000);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            console.log("Geri sayım durduruldu.");
            this.intervalId = null;
        } else {
            console.log("Geri sayım zaten durdurulmuş.");
        }
    }

    reset(seconds) {
        this.stop();
        this.seconds = seconds;
        console.log(`Geri sayım sıfırlandı: ${seconds} saniye`);
    }
}

const countdown = new CountdownTimer(5);
countdown.start();
setTimeout(() => countdown.stop(), 3000); // 3 saniye sonra geri sayımı durdur
setTimeout(() => countdown.start(), 4000); // 4 saniye sonra geri sayımı başlat
setTimeout(() => countdown.reset(10), 5000); // 5 saniye sonra geri sayımı sıfırla

console.clear();

//3. Belirli Bir Süre Sonra İşlem Yapma (Timeout Timer)
//Belirli bir süre sonra işlem yapmak için setTimeout() fonksiyonu kullanılır.
//Bu fonksiyon, belirli bir süre sonra verilen işlemi gerçekleştirmek için kullanılır.
//setTimeout() fonksiyonu, iki parametre alır: birincisi işlem, ikincisi ise süredir.

setTimeout(() => {
    console.log("Merhaba, ben setTimeout fonksiyonu ile belirli bir süre sonra çalışan işlemim.");
}

    , 5000); // 5 saniye sonra çalışacak işlem

console.clear();

//4. Belirli Aralıklarla İşlem Yapma (Interval Timer)
//Belirli aralıklarla işlem yapmak için setInterval() fonksiyonu kullanılır.
//Bu fonksiyon, belirli aralıklarla verilen işlemi gerçekleştirmek için kullanılır.
//setInterval() fonksiyonu, iki parametre alır: birincisi işlem, ikincisi ise süredir.

setInterval(() => {
    console.log("Merhaba, ben setInterval fonksiyonu ile belirli aralıklarla çalışan işlemim.");
}
    
        , 2000); // 2 saniyede bir çalışacak işlem

console.clear();


//5. Tarih ve Saat Gösterici (Current Date and Time Display)
//Tarih ve saat gösterici sınıfı, geçerli tarihi ve saati göstermek için kullanılır.

class DateTimeDisplay {
    constructor() {
        this.intervalId = null;
    }

    start() {
        if (this.intervalId) {
            console.log("Zaman göstergesi zaten başlatılmış.");
            return;
        }

        this.intervalId = setInterval(() => {
            const now = new Date();
            console.log(now.toLocaleTimeString());
        }, 1000);

        console.log("Zaman göstergesi başlatıldı.");
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            console.log("Zaman göstergesi durduruldu.");
            this.intervalId = null;
        } else {
            console.log("Zaman göstergesi zaten durdurulmuş.");
        }
    }
}

const timeDisplay = new DateTimeDisplay();
timeDisplay.start();
setTimeout(() => timeDisplay.stop(), 5000); // 5 saniye sonra zaman göstergesini durdur

console.clear();

//6. Zamanlayıcı (Scheduler)
//Zamanlayıcı (scheduler) sınıfı, belirli bir süre sonra belirli bir işlemi gerçekleştirmek için kullanılır.

class Scheduler {
    constructor() {
        this.tasks = [];
    }

    addTask(task, time) {
        this.tasks.push({ task, time });
    }

    start() {
        this.tasks.forEach(({ task, time }) => {
            setTimeout(() => {
                task();
            }, time);
        });
    }
}

const scheduler = new Scheduler();
scheduler.addTask(() => console.log("Task 1"), 2000); // 2 saniye sonra task 1
scheduler.addTask(() => console.log("Task 2"), 4000); // 4 saniye sonra task 2
scheduler.addTask(() => console.log("Task 3"), 6000); // 6 saniye sonra task 3
scheduler.start();

console.clear();

//7. Zamanlayıcı (Scheduler) Sınıfı ile Örnek Uygulama
//Zamanlayıcı (scheduler) sınıfı ile örnek bir uygulama yapalım.
//Bu uygulamada, belirli aralıklarla ekrana mesaj yazdıran bir zamanlayıcı sınıfı oluşturacağız.

class MessageScheduler {
    constructor() {
        this.messages = [];
        this.intervalId = null;
    }

    addMessage(message, interval) {
        this.messages.push({ message, interval });
    }

    start() {
        let index = 0;
        this.intervalId = setInterval(() => {
            console.log(this.messages[index].message);
            index = (index + 1) % this.messages.length;
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
    }
}

const messageScheduler = new MessageScheduler();
messageScheduler.addMessage("Merhaba, ben bir mesajım.", 1000);
messageScheduler.addMessage("Ben de bir mesajım.", 2000);
messageScheduler.addMessage("Ve ben de bir mesajım.", 3000);
messageScheduler.start();
setTimeout(() => messageScheduler.stop(), 10000); // 10 saniye sonra zamanlayıcıyı durdur

console.clear();