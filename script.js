// 音声の再生用オーディオオブジェクト
const fireSound = new Audio('bachan_friend.mp3');

// サウンドの初期設定
fireSound.loop = true; // 音声をループ再生
fireSound.volume = 0.5; // 音量を50%に設定（必要に応じて調整）

// ページが読み込まれたときに音声を再生
fireSound.play();


