// 1.AudioPlayer: Ses dosyasını oynatma, duraklatma ve ses seviyesi ayarlama.
class AudioPlayer {
    constructor(audioUrl) {
        this.audio = new Audio(audioUrl);
    }

    play() {
        this.audio.play();
        console.log("Ses çalmaya başladı.");
    }

    pause() {
        this.audio.pause();
        console.log("Ses duraklatıldı.");
    }

    setVolume(volume) {
        if (volume >= 0 && volume <= 1) {
            this.audio.volume = volume;
            console.log(`Ses seviyesi: ${volume * 100}%`);
        } else {
            console.error("Ses seviyesi 0 ile 1 arasında olmalıdır.");
        }
    }
}

// Kullanım
const audioPlayer = new AudioPlayer("https://www.example.com/audio.mp3");
audioPlayer.play();
audioPlayer.setVolume(0.5); // Ses seviyesini %50 olarak ayarla



// 2. VideoPlayer: Video dosyasını oynatma, duraklatma, ileri veya geri sarma, ses seviyesi ayarlama.
class VideoPlayer {
    constructor(videoElementId) {
        this.video = document.getElementById(videoElementId);
    }

    play() {
        this.video.play();
        console.log("Video çalmaya başladı.");
    }

    pause() {
        this.video.pause();
        console.log("Video duraklatıldı.");
    }

    seek(time) {
        if (time >= 0 && time <= this.video.duration) {
            this.video.currentTime = time;
            console.log(`Video ${time} saniyeye sarıldı.`);
        } else {
            console.error("Geçersiz zaman değeri.");
        }
    }

    setVolume(volume) {
        if (volume >= 0 && volume <= 1) {
            this.video.volume = volume;
            console.log(`Ses seviyesi: ${volume * 100}%`);
        } else {
            console.error("Ses seviyesi 0 ile 1 arasında olmalıdır.");
        }
    }
}

// Kullanım
// HTML'de <video id="myVideo" src="video.mp4"></video> gibi bir etiket olduğundan emin olun
const videoPlayer = new VideoPlayer("myVideo");
videoPlayer.play();
videoPlayer.seek(30); // Videoyu 30. saniyeye sar
videoPlayer.setVolume(0.5); // Ses seviyesini %50 olarak ayarla

// 3. AudioRecorder: Mikrofon girişinden ses kaydı yapma ve kaydı oynatma.
class AudioRecorder {
    constructor() {
        this.mediaRecorder = null;
        this.audioChunks = [];
    }

    async startRecording() {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.ondataavailable = (event) => this.audioChunks.push(event.data);
        this.mediaRecorder.onstop = this.playRecording.bind(this);
        
        this.audioChunks = [];
        this.mediaRecorder.start();
        console.log("Ses kaydı başladı.");
    }

    stopRecording() {
        if (this.mediaRecorder && this.mediaRecorder.state === "recording") {
            this.mediaRecorder.stop();
            console.log("Ses kaydı durduruldu.");
        }
    }

    playRecording() {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
        console.log("Kayıt çalınıyor.");
    }
}

// Kullanım
const recorder = new AudioRecorder();
await recorder.startRecording();
// recorder.stopRecording(); // Kaydı durdurmak için bu metodu çağırın

// 4 .WebcamStreamer: Web kamerasından video akışını alma ve görüntüleme.
class WebcamStreamer {
    constructor(videoElementId) {
        this.videoElement = document.getElementById(videoElementId);
        this.stream = null;
    }

    async startStream() {
        try {
            this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
            this.videoElement.srcObject = this.stream;
            console.log("Web kamerası başlatıldı.");
        } catch (error) {
            console.error("Web kamerasına erişim izni verilmedi veya cihaz desteklemiyor.", error);
        }
    }

    stopStream() {
        if (this.stream) {
            this.stream.getTracks().forEach(track => track.stop());
            this.videoElement.srcObject = null;
            console.log("Web kamerası durduruldu.");
        }
    }
}

// Kullanım
// HTML'de <video id="webcamVideo" autoplay></video> etiketi olduğundan emin olun
const webcam = new WebcamStreamer("webcamVideo");
await webcam.startStream(); // Web kamerasını başlat
// webcam.stopStream(); // Web kamerasını durdurmak için bu metodu çağırın

// 5 .AudioLevelMeter: Mikrofon girişini analiz ederek ses seviyesini görselleştirme.
class AudioLevelMeter {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
        this.audioContext = null;
        this.analyser = null;
    }

    async start() {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const source = this.audioContext.createMediaStreamSource(stream);
        this.analyser = this.audioContext.createAnalyser();
        source.connect(this.analyser);

        this.analyser.fftSize = 256;
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        this.draw();
    }

    draw() {
        requestAnimationFrame(this.draw.bind(this));
        this.analyser.getByteFrequencyData(this.dataArray);

        const level = this.dataArray.reduce((a, b) => a + b) / this.dataArray.length;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "green";
        this.context.fillRect(0, this.canvas.height - level, this.canvas.width, level);
    }
}

// Kullanım
// HTML'de bir <canvas id="audioCanvas" width="300" height="100"></canvas> etiketi olduğundan emin olun
const audioMeter = new AudioLevelMeter("audioCanvas");
await audioMeter.start();

// 6. VideoEditor: Video dosyasını düzenleme, kırpma, efekt ekleme, ses düzenleme.
class VideoEditor {
    constructor(videoElementId) {
        this.video = document.getElementById(videoElementId);
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
    }

    applyFilter(filter) {
        this.video.addEventListener("play", () => {
            const drawFrame = () => {
                if (this.video.paused || this.video.ended) return;

                this.context.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
                const frame = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);

                for (let i = 0; i < frame.data.length; i += 4) {
                    if (filter === "grayscale") {
                        const avg = (frame.data[i] + frame.data[i + 1] + frame.data[i + 2]) / 3;
                        frame.data[i] = frame.data[i + 1] = frame.data[i + 2] = avg;
                    }
                }

                this.context.putImageData(frame, 0, 0);
                requestAnimationFrame(drawFrame);
            };
            drawFrame();
        });
    }

    trim(start, end) {
        this.video.currentTime = start;
        setTimeout(() => {
            this.video.pause();
        }, (end - start) * 1000);
    }
}

// Kullanım
const videoEditor = new VideoEditor("videoElementId");
videoEditor.applyFilter("grayscale");
videoEditor.trim(5, 10); // Videoyu 5-10 saniye arasında oynat
