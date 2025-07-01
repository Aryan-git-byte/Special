document.addEventListener('DOMContentLoaded', () => {
    // --- Floating Hearts Animation ---
    const heartsContainer = document.querySelector('.floating-hearts-container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 5 + 5 + 's'; // 5-10 seconds
        heart.style.opacity = Math.random() * 0.5 + 0.3; // 0.3-0.8 opacity
        heart.style.width = heart.style.height = Math.random() * 15 + 15 + 'px'; // 15-30px

        heartsContainer.appendChild(heart);

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    setInterval(createHeart, 300);

    // --- 50 Reasons Cards Generation ---
    const reasons = [
        "Your infectious laughter that brightens my day.",
        "The way you always know how to make me smile.",
        "Your unwavering support in everything I do.",
        "Your kind heart and compassion for others.",
        "The sparkle in your eyes when you're excited.",
        "Your incredible determination to achieve your goals.",
        "The comfort I feel just being in your presence.",
        "Your unique sense of style.",
        "The silly jokes only we understand.",
        "How you make me feel safe and loved.",
        "Your wisdom and insightful perspectives.",
        "The way you handle challenges with grace.",
        "Your amazing ability to listen without judgment.",
        "Your beautiful singing voice (even when you deny it!).",
        "The thoughtful little things you do for me.",
        "Your adventurous spirit that encourages me to try new things.",
        "Your genuine curiosity about the world.",
        "The way you look at me.",
        "Your sweet sleepy voice in the mornings.",
        "Your passion for [mention a specific hobby/interest].",
        "The quiet moments we share that mean the most.",
        "Your ability to forgive and understand.",
        "The way you light up a room when you enter it.",
        "Your gentle touch that reassures me.",
        "Your amazing cooking/baking skills.",
        "The confidence you inspire in me.",
        "Your honesty, even when it's tough to hear.",
        "Your patience and understanding.",
        "The sound of your footsteps when you come home.",
        "Your ability to find beauty in simple things.",
        "The way you protect me.",
        "Your warm hugs that feel like home.",
        "Your unwavering loyalty to your loved ones.",
        "Your clever wit and quick thinking.",
        "The way you make ordinary moments extraordinary.",
        "Your soft hand in mine.",
        "Your unique perspective that makes me see things differently.",
        "Your adorable quirks that make you, YOU.",
        "The effort you put into our relationship.",
        "Your radiant smile.",
        "How you push me to be a better person.",
        "Your quiet strength.",
        "The way you always pick me up when I'm down.",
        "Your playful teasing.",
        "The peace I feel when I'm with you.",
        "Your charming awkwardness sometimes.",
        "The memories we've created and the ones yet to come.",
        "How you make me feel like the most important person in the world.",
        "Every single moment we share.",
        "Simply everything about you."
    ];

    const reasonCardsSlider = document.getElementById('reasonCardsSlider');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    reasons.forEach((reason, index) => {
        const card = document.createElement('div');
        card.classList.add('reason-card');
        card.innerHTML = `
            <span class="card-number">#${index + 1}</span>
            <p class="card-teaser">Click to reveal...</p>
            <p class="card-full-message">${reason}</p>
        `;
        card.addEventListener('click', () => {
            card.classList.toggle('revealed');
        });
        reasonCardsSlider.appendChild(card);
    });

    // Horizontal Scroll Functionality
    const scrollAmount = 350; // Adjust based on card width + gap

    nextArrow.addEventListener('click', () => {
        reasonCardsSlider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    prevArrow.addEventListener('click', () => {
        reasonCardsSlider.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // --- Daily Sweet Note ---
    const dailyNoteText = document.getElementById('daily-note-text');
    const dailyNotes = [
        "Just a reminder: you are truly amazing, and I'm incredibly lucky to have you in my life. You light up my world."
    ];

    const randomNote = dailyNotes[Math.floor(Math.random() * dailyNotes.length)];
    dailyNoteText.textContent = randomNote;

    // --- Secret Message Box Reveal ---
    const secretMessageBox = document.getElementById('secretMessageBox');
    secretMessageBox.addEventListener('click', () => {
        secretMessageBox.classList.add('revealed');
    });

    // --- Countdown to Next Meeting ---
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        // IMPORTANT: Set YOUR ACTUAL NEXT MEETING DATE HERE.
        // Example: new Date('YYYY-MM-DDTHH:mm:ss')
        const nextMeetingDate = new Date('2025-07-20T10:00:00'); // <--- REPLACE THIS DATE & TIME
        const now = new Date();
        const difference = nextMeetingDate - now;

        if (difference < 0) {
            countdownElement.textContent = "Can't wait to see you soon!";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdownElement.textContent = `Just ${days}d ${hours}h ${minutes}m ${seconds}s until we meet again!`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});