/*
Tile Teamwork Tactics
In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.

Examples
possibleBonus(3, 7) ➞ true

possibleBonus(1, 9) ➞ false

possibleBonus(5, 3) ➞ false
Notes
You cannot move backward (which is why example #3 doesn't work).
If you are already on the same tile, return false, as you would be advancing away.
Expect only positive integer inputs.

Takım Çalışması Stratejileri
Bir masa oyununda, bir taş altı yüzlü bir zarın sonucu olarak 1-6 kare ileri hareket edebilir. Eğer taşınızı başka bir oyuncunun taşıyla aynı kareye getirirseniz, her ikiniz de bir bonus kazanırsınız.

Bir sonraki zar atışında arkadaşınızın taşının bulunduğu kareye ulaşabilir misiniz? Sizin pozisyonunuzu (a) ve arkadaşınızın pozisyonunu (b) alan bir fonksiyon oluşturun ve herhangi bir zar atışında bonus kazanmanın mümkün olup olmadığını gösteren bir boolean (doğru/yanlış) sonucu döndürsün.

Örnekler:
```javascript
possibleBonus(3, 7) ➞ true

possibleBonus(1, 9) ➞ false

possibleBonus(5, 3) ➞ false
```

Notlar:
- Geriye doğru hareket edemezsiniz (bu yüzden 3. örnek çalışmıyor).
- Eğer zaten aynı karedeyseniz, false döndürün çünkü ileri gitmiş olursunuz.
- Sadece pozitif tam sayı girişleri bekleyin.

*/

function possibleBonus(a, b) {
	
    return a < b && a + 6 >= b;
}

console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));