// زر التبديل للوضع الداكن/الفاتح
const themeToggleBtn = document.getElementById('themeToggle');

themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        themeToggleBtn.textContent = '🌙 الوضع الداكن';
    } else {
        themeToggleBtn.textContent = '☀️ الوضع الفاتح';
    }
});

// نموذج التواصل
const contactForm = document.getElementById('contactForm');
const welcomeMessage = document.getElementById('welcomeMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    welcomeMessage.textContent = `شكراً لتواصلك يا ${username}! تم إرسال رسالتك بنجاح.`;
    welcomeMessage.style.color = '#2ea043';
    contactForm.reset();
});let randomNumber = Math.floor(Math.random() * 10) + 1;

function playGuessGame() {
    let userGuess = document.getElementById('guessInput').value;
    let resultText = document.getElementById('gameResult');
    
    if (userGuess == randomNumber) {
        resultText.innerText = "🎉 مبروك! إجابة صحيحة، أنت بطل!";
        resultText.style.color = "#00e676";
    } else {
        resultText.innerText = "❌ محاولة خاطئة! حاول مجدداً.";
        resultText.style.color = "#ff1744";
    }
}