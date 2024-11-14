//1. ElementSelector: Öğeleri seçme ve stil ekleme.
class ElementSelector {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    addClass(className) {
        this.element.classList.add(className);
        console.log(`${className} sınıfı eklendi.`);
    }

    removeClass(className) {
        this.element.classList.remove(className);
        console.log(`${className} sınıfı çıkarıldı.`);
    }

    setStyle(property, value) {
        this.element.style[property] = value;
        console.log(`Stil güncellendi: ${property} = ${value}`);
    }

    getText() {
        return this.element.textContent;
    }

    setText(text) {
        this.element.textContent = text;
        console.log(`Metin güncellendi: ${text}`);
    }
}

// Kullanım
const element = new ElementSelector("#myElement");
element.addClass("active");
element.setStyle("color", "red");
element.setText("Yeni içerik");
console.log(element.getText());

//2. EventManager: Olay dinleyicileri ekleme ve kaldırma.
class EventManager {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    addEvent(event, callback) {
        this.element.addEventListener(event, callback);
        console.log(`${event} olayı eklendi.`);
    }

    removeEvent(event, callback) {
        this.element.removeEventListener(event, callback);
        console.log(`${event} olayı kaldırıldı.`);
    }
}

// Kullanım
const button = new EventManager("#myButton");
const handleClick = () => console.log("Butona tıklandı!");
button.addEvent("click", handleClick);
button.removeEvent("click", handleClick);

//3. DOMManipulator: Dinamik olarak içerik ekleme.
class DOMManipulator {
    constructor(parentSelector) {
        this.parentElement = document.querySelector(parentSelector);
    }

    createElement(tag, attributes = {}, content = "") {
        const element = document.createElement(tag);
        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value);
        }
        element.textContent = content;
        return element;
    }

    appendElement(tag, attributes = {}, content = "") {
        const element = this.createElement(tag, attributes, content);
        this.parentElement.appendChild(element);
        console.log(`${tag} elementi eklendi.`);
    }

    clearContent() {
        this.parentElement.innerHTML = "";
        console.log("İçerik temizlendi.");
    }
}

// Kullanım
const domManipulator = new DOMManipulator("#container");
domManipulator.appendElement("div", { class: "box" }, "Bu dinamik bir içerik.");
domManipulator.clearContent();

//4. FormHandler: Form verilerini alma ve işleme.
class FormHandler {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.formData = {};
    }

    getFormData() {
        const formData = new FormData(this.form);
        formData.forEach((value, key) => {
            this.formData[key] = value;
        });
        console.log("Form verisi alındı:", this.formData);
        return this.formData;
    }

    submit(callback) {
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.getFormData();
            callback(this.formData);
        });
    }
}

// Kullanım
const formHandler = new FormHandler("#myForm");
formHandler.submit((data) => console.log("Form gönderildi:", data));

//5. ToggleVisibility: Öğeleri gizleme veya gösterme.
class ToggleVisibility {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    show() {
        this.element.style.display = "block";
        console.log("Öğe gösterildi.");
    }

    hide() {
        this.element.style.display = "none";
        console.log("Öğe gizlendi.");
    }

    toggle() {
        if (this.element.style.display === "none") {
            this.show();
        } else {
            this.hide();
        }
    }
}

// Kullanım
const toggleElement = new ToggleVisibility("#toggleContent");
toggleElement.show();
toggleElement.hide();
toggleElement.toggle();

//6. ClassManager: Sınıf yönetimi.
class ClassManager {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    addClass(className) {
        this.element.classList.add(className);
        console.log(`${className} sınıfı eklendi.`);
    }

    removeClass(className) {
        this.element.classList.remove(className);
        console.log(`${className} sınıfı çıkarıldı.`);
    }

    toggleClass(className) {
        this.element.classList.toggle(className);
        console.log(`${className} sınıfı geçiş yapıldı.`);
    }

    hasClass(className) {
        return this.element.classList.contains(className);
    }
}

// Kullanım
const classManager = new ClassManager("#myElement");
classManager.addClass("highlight");
classManager.toggleClass("active");
console.log(classManager.hasClass("highlight")); // true veya false döndürür

//7. ElementAnimator: Basit animasyon efektleri.
class ElementAnimator {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    fadeIn(duration = 500) {
        this.element.style.opacity = 0;
        this.element.style.display = "block";
        let opacity = 0;
        const increment = 50 / duration;

        const fade = setInterval(() => {
            opacity += increment;
            if (opacity >= 1) {
                clearInterval(fade);
                opacity = 1;
            }
            this.element.style.opacity = opacity;
        }, 50);
        console.log("Fade in animasyonu başlatıldı.");
    }

    fadeOut(duration = 500) {
        let opacity = 1;
        const decrement = 50 / duration;

        const fade = setInterval(() => {
            opacity -= decrement;
            if (opacity <= 0) {
                clearInterval(fade);
                this.element.style.display = "none";
                opacity = 0;
            }
            this.element.style.opacity = opacity;
        }, 50);
        console.log("Fade out animasyonu başlatıldı.");
    }
}

// Kullanım
const animator = new ElementAnimator("#animElement");
animator.fadeIn();
animator.fadeOut();

//8. ImageEditor: Resim üzerinde efekt uygulama.

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
const editor = new ImageEditor("myCanvas", "https://example.com/image.jpg");
editor.loadImage();

// Efekt fonksiyonları
function applyGrayscale(data, i) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg;        // R
    data[i + 1] = avg;    // G
    data[i + 2] = avg;    // B
}

function applySepia(data, i) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    data[i] = Math.min(255, 0.393 * r + 0.769 * g + 0.189 * b);        // R
    data[i + 1] = Math.min(255, 0.349 * r + 0.686 * g + 0.168 * b);    // G
    data[i + 2] = Math.min(255, 0.272 * r + 0.534 * g + 0.131 * b);    // B
}

// Efekt uygulama
editor.applyEffect(applyGrayscale);
editor.applyEffect(applySepia);
// Compare this snippet from Aufgabe/JS--ornek/8.woche/3/orn/element.js:
//     }
// }
//
// // Kullanım
// const element = new ElementSelector("#myElement");
// element.addClass("active");
// element.setStyle("color", "red");




