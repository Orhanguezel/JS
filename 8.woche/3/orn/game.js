
// 7. GameEngine: Oyun motoru, oyun mekaniği, fizik motoru, yapay zeka.
class GameEngine {
    constructor() {
        this.objects = [];
        this.gravity = 0.98; // Basit bir yerçekimi değeri
    }

    addObject(gameObject) {
        this.objects.push(gameObject);
    }

    update() {
        this.objects.forEach(obj => {
            obj.y += obj.vy;
            obj.vy += this.gravity;
            if (obj.y > 500) { // Yere çarpma simülasyonu
                obj.y = 500;
                obj.vy = 0;
            }
        });
    }

    start() {
        const loop = () => {
            this.update();
            requestAnimationFrame(loop);
        };
        loop();
    }
}

// Kullanım
const engine = new GameEngine();
engine.addObject({ x: 0, y: 0, vy: 0 }); // Basit bir obje
engine.start();

// 8. GameCharacter: Oyun karakteri, hareket, animasyon, ses efektleri.
class GameCharacter {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.health = 100;
        this.sound = new Audio("jump.mp3");
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
        console.log(`${this.name} karakteri ${dx}, ${dy} birim hareket etti.`);
    }

    playSound() {
        this.sound.play();
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            console.log(`${this.name} karakteri yenildi.`);
        } else {
            console.log(`${this.name} karakterinin sağlığı: ${this.health}`);
        }
    }
}

// Kullanım
const character = new GameCharacter("Kahraman", 0, 0);
character.move(10, 5);
character.playSound();
character.takeDamage(20);

// 9. GameLevel: Oyun seviyesi, harita, engeller, hedefler, puanlama.
class GameLevel {
    constructor(levelNumber) {
        this.levelNumber = levelNumber;
        this.obstacles = [];
        this.targets = [];
    }

    addObstacle(obstacle) {
        this.obstacles.push(obstacle);
    }

    addTarget(target) {
        this.targets.push(target);
    }

    checkCollision(player) {
        this.obstacles.forEach(obstacle => {
            if (player.x === obstacle.x && player.y === obstacle.y) {
                console.log("Çarpışma gerçekleşti!");
                player.takeDamage(10);
            }
        });
    }

    isLevelComplete() {
        return this.targets.length === 0;
    }
}

// Kullanım
const level = new GameLevel(1);
level.addObstacle({ x: 10, y: 5 });
level.addTarget({ x: 20, y: 10 });
level.checkCollision({ x: 10, y: 5 });
console.log(level.isLevelComplete());

// 10. GameScore: Oyun skoru, puanlama, liderlik tablosu, başarılar.
class GameScore {
    constructor() {
        this.score = 0;
        this.highScores = [];
        this.achievements = [];
    }

    increaseScore(points) {
        this.score += points;
        console.log(`Skor arttı! Güncel skor: ${this.score}`);
    }

    addHighScore(playerName) {
        this.highScores.push({ name: playerName, score: this.score });
        this.highScores.sort((a, b) => b.score - a.score);
        console.log("Liderlik tablosu güncellendi.");
    }

    unlockAchievement(achievement) {
        if (!this.achievements.includes(achievement)) {
            this.achievements.push(achievement);
            console.log(`Başarı kilidi açıldı: ${achievement}`);
        }
    }

    displayLeaderboard() {
        console.log("Liderlik Tablosu:");
        this.highScores.forEach((entry, index) => {
            console.log(`${index + 1}. ${entry.name} - ${entry.score}`);
        });
    }
}

// Kullanım
const gameScore = new GameScore();
gameScore.increaseScore(50);
gameScore.unlockAchievement("İlk Kan");
gameScore.addHighScore("Oyuncu1");
gameScore.displayLeaderboard();

//