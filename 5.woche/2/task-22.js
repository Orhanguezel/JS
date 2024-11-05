/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived 
ten minutes too early to an appointment, so you decided to take the opportunity to go for a 
short walk. The city provides its citizens with a Walk Generating App on their phones -- 
everytime you press the button it sends you an array of one-letter strings representing 
directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each 
letter (direction) and you know it takes you one minute to traverse one city block, so create 
a function that will return true if the walk the app gives you will take you exactly ten minutes 
(you don't want to be early or late!) and will, of course, return you to your starting point. 
Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters 
('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's 
standing still!).

Cartesia şehrinde yaşıyorsun ve burada tüm yollar mükemmel bir ızgara şeklinde düzenlenmiş. Bir 
randevuya on dakika erken geldin, bu yüzden bu fırsatı değerlendirip kısa bir yürüyüşe çıkmaya 
karar verdin. Şehir, vatandaşlarına telefonlarında bir Yürüyüş Oluşturma Uygulaması sunuyor - her 
düğmeye bastığında, sana yürümen gereken yönleri temsil eden bir dizi tek harfli string gönderiyor 
(örneğin ['n', 's', 'w', 'e']). Her harf (yön) için sadece bir blok yürüyorsun ve bir şehir bloğunu 
geçmek bir dakika sürüyor. Bu nedenle, uygulamanın verdiği yürüyüşün seni tam olarak on dakikada 
götürecek olup olmadığını belirten bir fonksiyon oluştur. Ayrıca, tabii ki seni başladığın noktaya 
geri döndürmeli. Eğer bunlar sağlanıyorsa true, aksi takdirde false döndür.

Not: Her zaman geçerli bir dizi alacaksın, bu dizi rastgele yön harfleri ('n', 's', 'e', ya da 'w') 
içerecek. Hiçbir zaman boş bir dizi gönderilmeyecek (bu bir yürüyüş değil, ayakta durmak olur!).
*/

function isValidWalk(walk) {
    // 1. Yürüyüş 10 adım değilse direkt false döndür
    if (walk.length !== 10) return false;

    // 2. Kuzey-güney ve doğu-batı adımlarını say
    let northSouth = 0;
    let eastWest = 0;

    // 3. Her bir adımı kontrol et
    for (let direction of walk) {
        if (direction === 'n') northSouth++;  // Kuzeye gidiyorsa 1 ekle
        if (direction === 's') northSouth--;  // Güneye gidiyorsa 1 çıkar
        if (direction === 'e') eastWest++;    // Doğuya gidiyorsa 1 ekle
        if (direction === 'w') eastWest--;    // Batıya gidiyorsa 1 çıkar
    }

    // 4. Kuzey-Güney ve Doğu-Batı dengedeyse (yani başladığın yere dönmüşsün)
    return northSouth === 0 && eastWest === 0;
}


console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // false
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'w'])); // true
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'w', 'w'])); // false