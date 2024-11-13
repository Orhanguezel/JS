Anladım! O halde benzer bir proje hazırlayayım. Bu proje, bir **alışveriş listesi yönetim sistemi** olacak. Kullanıcıdan bazı bilgiler alarak liste oluşturacak, düzenleyecek ve sonunda listeyi gösterecek. Soruları Türkçe olarak veriyorum, böylece senin için rahat bir öğrenme süreci olacak.

### Proje: Basit Alışveriş Listesi Yönetim Uygulaması

---

#### Görev 1: `Item` adında bir sınıf oluşturun.
- Bu sınıf, bir alışveriş listesindeki bir öğeyi temsil edecektir.
- Sınıf, şu özelliklere sahip olmalı:
  - `isim`: Ürün ismini temsil eder.
  - `miktar`: Ürünün miktarını temsil eder.
- Ayrıca bir `displayItem` adlı metot ekleyin. Bu metot, ürün ismini ve miktarını ekrana yazdırır.

---

#### Görev 2: Alışveriş listesine ürün ekleyin.
- `Item` sınıfını kullanarak en az üç farklı ürün için örnekler oluşturun (örn: Ekmek, Süt, Elma gibi).
- Ürünler oluşturulduktan sonra, kullanıcıdan ürün eklemek isteyip istemediğini sorun. Kullanıcı `evet` derse, yeni bir ürün ve miktar girerek listeye ekleme yapın.
- Girdiyi almak için `readline` kütüphanesini veya HTML ile basit bir form kullanabilirsiniz.

---

#### Görev 3: Listeyi düzenleme seçeneği ekleyin.
- Kullanıcıya, listedeki ürünleri düzenlemek isteyip istemediğini sorun.
- Eğer kullanıcı düzenleme yapmak isterse:
  - Düzenlemek istediği ürünün adını sorun.
  - Yeni miktar girilmesini sağlayın ve ürünü güncelleyin.
- Eğer düzenlemek istemezse, bir sonraki göreve geçin.

---

#### Görev 4: Listeyi görüntüleyin.
- Kullanıcının alışveriş listesindeki tüm ürünleri ve miktarlarını ekrana yazdırın.
- Ayrıca toplam kaç ürün olduğunu da ekrana gösterin.

---

### Bonus Görev 1

Bir **toplam ürün sayacı** ekleyin. Kullanıcı ürün ekledikçe veya düzenledikçe bu sayacı güncelleyin ve sonunda toplam ürün sayısını gösterin.

---

### Bonus Görev 2

Kullanıcıya ürün silme seçeneği verin. 
- Kullanıcı, silmek istediği ürünün adını girerek ürünü listeden kaldırabilsin.
- Kullanıcı silmek istemezse, direkt olarak listeyi görüntüleyin.

---

![solution](solution.gif "solution")

---

Bu alıştırmayı yaparken, kullanıcıdan veri almak için `readline` kütüphanesini veya HTML formu kullanabilirsin. Çalışmanın sonunda kullanıcıdan gelen cevapları kaydederek listeyi ekranda gösterebilirsin. 

Yardımcı olmamı istediğin yerlerde bana yazabilirsin! Kolay gelsin ve iyi çalışmalar! 🎉