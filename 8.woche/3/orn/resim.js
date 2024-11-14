//1. Resim Yükleme Sınıfı
//Resim yükleme sınıfı, belirli bir resmi belirli bir HTML elementine yüklemek için kullanılır.
//Bu sınıf, resmin yüklenme durumunu kontrol etmek için olay dinleyicileri içerir.
//Resim yükleme sınıfını oluşturalım.

class ImageLoader {
    constructor(url, containerId) {
        this.url = url; // Resim URL'si
        this.containerId = containerId; // Resmi eklemek istediğiniz elementin ID'si
    }

    loadImage() {
        const img = new Image();
        img.src = this.url;

        img.onload = () => {
            console.log("Resim başarıyla yüklendi.");
            document.getElementById(this.containerId).appendChild(img);
        };

        img.onerror = () => {
            console.error("Resim yüklenirken hata oluştu.");
        };
    }
}

// Kullanım
const loader = new ImageLoader("https://example.com/image.jpg", "imageContainer");
loader.loadImage();

console.clear();

//2. Resmi <canvas> Üzerine Çizme ve Düzenleme Sınıfı
//Resmi <canvas> üzerine çizme ve düzenleme sınıfı, belirli bir resmi <canvas> elementi üzerine çizmek ve düzenlemek için kullanılır.
//Bu sınıf, resmi çizme, boyama, döndürme gibi işlemleri yapabilir.
//Resmi <canvas> üzerine çizme ve düzenleme sınıfını oluşturalım.

class CanvasImageEditor {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
    }

    loadImage(url) {
        const img = new Image();
        img.src = url;

        img.onload = () => {
            this.context.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            console.log("Resim canvas üzerine yüklendi.");
        };
        
        img.onerror = () => {
            console.error("Canvas üzerine resim yüklenirken hata oluştu.");
        };
    }

    applyGrayscale() {
        const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = avg;        // R
            data[i + 1] = avg;    // G
            data[i + 2] = avg;    // B
        }

        this.context.putImageData(imageData, 0, 0);
        console.log("Grayscale efekti uygulandı.");
    }
}

// Kullanım
const editor = new CanvasImageEditor("myCanvas");
editor.loadImage("https://example.com/image.jpg");
editor.applyGrayscale(); // Grayscale efekti uygular

console.clear();

//3. Resmi <canvas> Üzerine Çizme ve Düzenleme Sınıfı ile Örnek Uygulama
//Resmi <canvas> üzerine çizme ve düzenleme sınıfını kullanarak örnek bir uygulama yapalım.
//Bu uygulamada, resmi <canvas> üzerine yükleyecek ve belirli bir efekt uygulayacaktır.

class ImageEditor {
    constructor(canvasId, imageUrl) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
        this.imageUrl = imageUrl;
    }

    loadImage() {
        const img = new Image();
        img.src = this.imageUrl;

        img.onload = () => {
            this.context.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            console.log("Resim canvas üzerine yüklendi.");
        };

        img.onerror = () => {
            console.error("Canvas üzerine resim yüklenirken hata oluştu.");
        };
    }

    applyEffect(effect) {
        const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            effect(data, i);
        }

        this.context.putImageData(imageData, 0, 0);
        console.log("Efekt uygulandı.");
    }
}

// Kullanım
const editor2 = new ImageEditor("myCanvas", "https://example.com/image.jpg");
editor2.loadImage();
editor2.applyEffect((data, i) => {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg;        // R
    data[i + 1] = avg;    // G
    data[i + 2] = avg;    // B
});

console.clear();

//4. Resim Üzerinde Boyutlandırma ve Dönüştürme Sınıfı
//Resim üzerinde boyutlandırma ve dönüştürme sınıfı, belirli bir resmi boyutlandırmak ve dönüştürmek için kullanılır.
//Bu sınıf, resmi boyutlandırma, döndürme, aynalama gibi işlemleri yapabilir

class ImageTransformer {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
        this.image = new Image();
    }

    loadImage(url) {
        this.image.src = url;
        this.image.onload = () => {
            this.context.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
            console.log("Resim yüklendi ve çizildi.");
        };
    }

    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.context.drawImage(this.image, 0, 0, width, height);
        console.log("Resim yeniden boyutlandırıldı.");
    }

    rotate(angle) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.save();
        this.context.translate(this.canvas.width / 2, this.canvas.height / 2);
        this.context.rotate((angle * Math.PI) / 180);
        this.context.drawImage(this.image, -this.image.width / 2, -this.image.height / 2);
        this.context.restore();
        console.log(`Resim ${angle} derece döndürüldü.`);
    }
}

// Kullanım
const transformer = new ImageTransformer("myCanvas");
transformer.loadImage("https://example.com/image.jpg");
transformer.resize(300, 200); // 300x200 boyutunda yeniden boyutlandırır
transformer.rotate(90); // 90 derece döndürür

console.clear();

//Resim Yükleme ve Önizleme Sınıfı

class ImageUploader {
    constructor(inputId, previewId) {
        this.inputElement = document.getElementById(inputId);
        this.previewElement = document.getElementById(previewId);

        this.inputElement.addEventListener("change", (event) => this.loadImage(event));
    }

    loadImage(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.previewElement.src = e.target.result;
                console.log("Resim yüklendi ve önizleme yapıldı.");
            };
            reader.readAsDataURL(file);
        } else {
            console.error("Lütfen geçerli bir resim dosyası yükleyin.");
        }
    }
}

// Kullanım
// HTML'de bir <input type="file" id="fileInput"> ve <img id="preview"> olduğundan emin olun
const uploader = new ImageUploader("fileInput", "preview");

console.clear();

//6. Resmi İndirilebilir Hale Getirme Sınıfı
//Resmi indirilebilir hale getirme sınıfı, belirli bir resmi indirilebilir hale getirmek için kullanılır.
//Bu sınıf, resmi belirli bir dosya adıyla indirme işlemini yapabilir.

class DownloadableImage {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
    }

    downloadImage(filename = "image.png") {
        const link = document.createElement("a");
        link.href = this.canvas.toDataURL("image/png");
        link.download = filename;
        link.click();
        console.log("Resim indirildi.");
    }
}

// Kullanım
const downloader = new DownloadableImage("myCanvas");
// Bir işlem yapıldıktan sonra kullanıcıya resmi indirme seçeneği sunar
downloader.downloadImage("edited-image.png");

console.clear();


