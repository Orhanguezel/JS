/*
How Many Days Between Two Dates
Create a function that takes two dates and returns the number of days between the first and second date.

Examples
getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
) ➞ 6


getDays(
  new Date("December 29, 2018"),
  new Date("January 1, 2019")
) ➞ 3
// Dates may not all be in the same month/year.


getDays(
  new Date("July 20, 2019"),
  new Date("July 30, 2019")
) ➞ 10
Notes
N/A

İşte sorunun Türkçe çevirisi:

### Soru:
İki tarihi alan ve ilk tarihle ikinci tarih arasındaki gün sayısını döndüren bir fonksiyon oluşturun.

### Örnekler:
```javascript
getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
) ➞ 6

getDays(
  new Date("December 29, 2018"),
  new Date("January 1, 2019")
) ➞ 3
// Tarihler aynı ay/yıl içinde olmayabilir.

getDays(
  new Date("July 20, 2019"),
  new Date("July 30, 2019")
) ➞ 10
```

### Notlar:
Herhangi bir ek bilgi gerekmemektedir.
*/

function getDays(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

console.log(getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
)); // 6