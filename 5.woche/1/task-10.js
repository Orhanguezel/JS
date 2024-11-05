/*
Tower of Hanoi
There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.

Tower of Hanoi

Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

Examples
towerHanoi(3) ➞ 7

towerHanoi(5) ➞ 31

towerHanoi(0) ➞ 0
Notes
The amount of discs is always a positive integer.
1 disc can be changed per move.

**Hanoi Kulesi**

Üç kule vardır. Oyunun amacı, tüm diskleri üçüncü kuleye taşımaktır, ancak daha büyük bir diski daha küçük bir diskin üzerine koyamazsınız. Oyunu oynamak veya Hanoi Kulesi hakkında daha fazla bilgi edinmek için Kaynaklar sekmesine göz atın.

**Hanoi Kulesi**

Bir fonksiyon oluşturun; bu fonksiyon bir argüman olarak disk sayısını alır ve oyunu tamamlamak için gereken minimum adım sayısını döndürür.

**Örnekler**
```javascript
towerHanoi(3) ➞ 7

towerHanoi(5) ➞ 31

towerHanoi(0) ➞ 0
```

**Notlar**
- Disk sayısı her zaman pozitif bir tam sayıdır.
- Her hamlede yalnızca 1 disk taşınabilir.
*/

function towerHanoi(n) {
    return Math.pow(2, n) - 1;
}

console.log(towerHanoi(3));
console.log(towerHanoi(5));
console.log(towerHanoi(0));