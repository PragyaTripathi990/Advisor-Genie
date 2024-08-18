var messages = [
    "The journey of a thousand miles begins with a single step. Every step you take, no matter how small, brings you closer to your destination.",
    "In the tapestry of life, every thread counts. Each experience, whether good or bad, contributes to the overall picture of who you are becoming.",
    "The wind does not change direction, but you can adjust your sails to always reach your destination. Flexibility and resilience are key to navigating life's challenges.",
    "True strength is not the absence of fear but the ability to move forward despite it. Courage is found in taking action, even when you don't feel ready.",
    "The present moment is the only one you can control. Let go of past regrets and future anxieties, and focus on making today meaningful.",
    "Success is a journey, not a destination. Embrace the process, learn from your experiences, and celebrate your progress along the way.",
    "Life's greatest lessons often come from the most unexpected places. Keep an open mind and heart, and you'll find wisdom in the most surprising places.",
    "Happiness is not a permanent state but a series of moments to be cherished. Find joy in the small things and let them illuminate your path.",
    "Growth happens outside your comfort zone. Embrace new experiences and challenges, for they are the seeds from which your potential will blossom.",
    "The quality of your life is determined by the quality of your thoughts. Cultivate a positive mindset, and you'll transform obstacles into opportunities."
]

function chatOutput() {
    var inputElement = document.getElementById("question");
    var question = inputElement.value;

    if (!question) {
        return;
    }

    var message = document.getElementById("message");
    var randomIndex = Math.floor(Math.random() * messages.length);
    var selecteMessage = messages[randomIndex];

    message.innerHTML = selecteMessage;
    inputElement.value = "";
}

function toggleGenie() {
    var lamp = document.getElementById("lamp");
    lamp.classList.toggle("active");
}

