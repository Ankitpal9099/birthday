$(document).ready(function () {
    // Countdown Timer
    const birthdayDate = new Date("2024-10-01T00:00:00").getTime();

    const countdownFunction = setInterval(function () {
        const now = new Date().getTime();
        const distance = birthdayDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance > 0) {
            $('#countdown').html(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        } else {
            clearInterval(countdownFunction);
            $('#countdown').html("🎂 Happy Birthday! 🎂");
        }
    }, 1000);

    // Surprise Button
    $('#surpriseButton').click(function () {
        $('#surpriseMessage').fadeToggle();
    });

    // Birthday Wishes List
    $('#submitWish').click(function () {
        let wish = $('#wishInput').val();
        if (wish) {
            $('#wishList').append(`<li>${wish}</li>`);
            $('#wishInput').val('');
        }
    });

    // Secret Message Reveal
    $('#revealButton').click(function () {
        if ($('#secretInput').val() === "bestfriend") {
            $('#secretMessage').fadeIn();
        }
    });

    // Confetti Effect
    $('#partyButton').click(function () {
        confetti();
    });

    // Slideshow Effect
    let slides = document.querySelectorAll('.slide');
    let index = 0;
    setInterval(() => {
        slides.forEach(img => img.style.display = "none");
        slides[index].style.display = "block";
        index = (index + 1) % slides.length;
    }, 3000);
});
$(document).ready(function () {
    let music = document.getElementById("birthdayMusic");
    let musicButton = $("#musicToggle");

    musicButton.click(function () {
        if (music.paused) {
            music.play();
            musicButton.text("🔊 Pause Music");
        } else {
            music.pause();
            musicButton.text("🎵 Play Music");
        }
    });
});
