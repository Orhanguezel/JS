const readline = require('readline');

// readline arayüzü oluştur
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Item sınıfı
class Item {
  constructor(isim, miktar) {
    this.isim = isim;
    this.miktar = miktar;
  }

  displayItem() {
    console.log(`${this.isim}: ${this.miktar}`);
  }
}

// Alışveriş Listesi sınıfı
class ShoppingList {
  constructor() {
    this.items = [];
    this.totalCount = 0; // Bonus görev 1: toplam ürün sayacı
  }

  addItem(item) {
    this.items.push(item);
    this.totalCount += item.miktar; // Toplam sayacı güncelle
  }

  findItemByName(isim) {
    return this.items.find(item => item.isim === isim);
  }

  updateItem(isim, yeniMiktar) {
    const item = this.findItemByName(isim);
    if (item) {
      this.totalCount -= item.miktar; // Önce eski miktarı çıkar
      item.miktar = yeniMiktar;
      this.totalCount += yeniMiktar; // Yeni miktarı ekle
      console.log(`${isim} güncellendi.`);
    } else {
      console.log(`${isim} bulunamadı.`);
    }
  }

  deleteItem(isim) {
    const index = this.items.findIndex(item => item.isim === isim);
    if (index !== -1) {
      this.totalCount -= this.items[index].miktar; // Toplam sayacı güncelle
      this.items.splice(index, 1);
      console.log(`${isim} silindi.`);
    } else {
      console.log(`${isim} bulunamadı.`);
    }
  }

  displayList() {
    console.log("\nAlışveriş Listesi:");
    this.items.forEach(item => item.displayItem());
    console.log(`Toplam ürün sayısı: ${this.totalCount}`);
  }
}

// Alışveriş listesi nesnesi oluştur
const shoppingList = new ShoppingList();

// Başlangıç ürünlerini ekle
shoppingList.addItem(new Item("Ekmek", 1));
shoppingList.addItem(new Item("Süt", 2));
shoppingList.addItem(new Item("Elma", 5));

// Kullanıcıdan veri almak için yardımcı fonksiyon
const askQuestion = (question) => {
  return new Promise(resolve => rl.question(question, answer => resolve(answer)));
};

// Ana işlem fonksiyonu
async function main() {
  // Başlangıç listesini göster
  shoppingList.displayList();

  // Ürün ekleme döngüsü
  while (true) {
    const addMore = await askQuestion("\nYeni bir ürün eklemek ister misiniz? (evet/hayır): ");
    if (addMore.toLowerCase() !== 'evet') break;

    const isim = await askQuestion("Ürün adı: ");
    const miktar = parseInt(await askQuestion("Ürün miktarı: "), 10);
    shoppingList.addItem(new Item(isim, miktar));
  }

  // Ürün güncelleme seçeneği
  const editItem = await askQuestion("\nBir ürünü güncellemek ister misiniz? (evet/hayır): ");
  if (editItem.toLowerCase() === 'evet') {
    const isim = await askQuestion("Güncellemek istediğiniz ürün adı: ");
    const yeniMiktar = parseInt(await askQuestion("Yeni miktar: "), 10);
    shoppingList.updateItem(isim, yeniMiktar);
  }

  // Ürün silme seçeneği
  const deleteItem = await askQuestion("\nBir ürünü silmek ister misiniz? (evet/hayır): ");
  if (deleteItem.toLowerCase() === 'evet') {
    const isim = await askQuestion("Silmek istediğiniz ürün adı: ");
    shoppingList.deleteItem(isim);
  }

  // Son listeyi göster
  shoppingList.displayList();

  // Programı kapat
  rl.close();
}

// Ana fonksiyonu çalıştır
main();
