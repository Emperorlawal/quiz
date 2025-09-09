const questions = [
 //Geography questions.....
  { q: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: 2},
  { q: "Which is the largest desert in the world?", options: ["Sahara", "Gobi", "Kalahari", "Artic"], answer: 0},
  { q: "Mount Everest is located in which mountain range?", options: ["Alps", "Andes", "Himalayas", "Rockies"], answer: 2},
  { q: "Which river is the longest in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: 1},
  { q: "Which country has the most time zones?", options: ["Russia", "USA", "France", "China"], answer: 2},
  { q: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], answer: 1},
  { q: "Which ocean is the deepest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3},
  { q: "The Great Wall of China was primarily built to protect against which group?", options: ["Mongols", "Huns", "Persians", "Romans"], answer: 0},
  { q: "Which continent has the most countries?", options: ["Asia", "Africa", "Europe", "South America"], answer: 1},
  { q: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Japan"], answer: 3},
  { q: "What is the chemical symbol for water?", options: ["H20", "CO2", "02", "NaC1"], answer: 0},
  { q: "Which planet is known as the Red  Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1},
  { q: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2},
  { q: "Who was the first President of the United States?", options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"], answer: 2},
  { q: "In which year did World War II end?", options: ["1945", "1939", "1942", "1953"], answer: 0},
  { q: "Who was known as the Iron Lady?", options: ["Angela Merkel", "Indira Gandhi", "Margaret Thatcher", "Golda Meir"], answer: 2},
  { q: "Which language has the most native speakers worldwide?", options: ["English", "Hindi", "Mandarin Chinese", "Spanish"], answer: 2},
  { q: "Which country is known for inventing pizza?", options: ["France", "USA", "Greece", "Italy"], answer: 3},
  { q: "Who wrote the play Romeo and Juliet?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], answer: 1},
  { q: "Who is the current CEO of Tesla?", options: ["Elon Musk", "Sundar Pichai", "Jeff Bezos", "Tim Cook"], answer: 0},
  { q: "Which footballer has won the most Ballon d'Or awards (as of 2024)?", options: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Luka Modric"], answer: 1},
  { q: "Who became the youngest Nobel Peace Prize Winner?", options: ["Malala Yousafzai", "Greta Thunberg", "Kailash Satyarthi", "Nelson Mandela"], answer: 0},
  { q: "Which company created the iPhone?", options: ["Microsoft", "Google", "Apple", "Samsung"], answer: 2},
  { q: "Which tech billionaire founded Space X?", options: ["Jeff Bezos", "Mark Zuckerberg", "Elon Musk", "Bill Gates"], answer: 2},
  { q: "What is the main purpose of a firewall in a computer system?", options: ["Boost speed", "Cool down the system", "Block unauthorized access", "Backup data"], answer: 2},
  { q: "Which country developed the humanoid robot 'Asimo'?", options: ["China", "USA", "Japan", "Germany"], answer: 2}, 
  { q: "Which social media platform is known for viral dance challenges?", options: ["Facebook", "Instagram", "Tiktok", "X"], options: 2},
  { q: "Who played Iron Man in the Marvel movies?", options: ["Chris Hemsworth", "Tom Holland", "Robert Downey Jr.", "Chris Evans"], answer: 2 },
  { q: "Which artist released the hit song 'Blinding Lights?", options: ["Justin Bieber", "The Weekend", "Drake", "Ed Sheeran"], answer: 1},
  { q: "What's the only mammal capable of true flight?", options: ["Flying squirrel", "Bat", "Eagle", "Parrot"], answer: 1},
  { q: "Which parts of your body continues to grow after death?", options: ["Nails", "Hair", "Both", "None"], answer: 3},
  { q: "Which US State is the Grand Canyon located in?", options: ["Nevada", "Arizona", "Utah", "Colorado"], answer: 1},
  { q: "Who was the first female Prime Minister of India?", options: ["Sonia Gandhi", "Indira Gandhi", "Pratibha Patil", "Sarojini Naidu"], answer: 1},
  { q: "Which war ended with the Treaty of Versailles?", options: ["World War 1", "World War 2", "Crimean War", "Napoleonic Wars"], answer: 0},
  { q: "Who was the first emperor of the Roman Empire?", options: ["Julius Caesar", "Augustus", "Nero", "Caligula"], answer: 1},
  { q: "The Berlin Wall fell in which year?", options: ["1987", "1989", "1991", "1993"], answer: 1},
  { q: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Quartz"], answer: 2},
  { q: "Which organ pumps blood throughout the human body?", options: ["Brain", "Liver", "Heart", "Lungs"], answer: 2},
  { q: "What is the boiling point of water at sea level?", options: ["90°C", "95°C", "100°C", "105°C"], answer: 2},
  { q: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"], answer: 2},
  { q: "Which platform is mainly known for short-form content?", options: ["Facebook", "Tiktok", "Twitter", "Linkedln"], answer: 1},
  { q: "In which country did the Olympic Games originate?", options: ["Italy", "France", "Greece", "Germany"], answer: 2},
  { q: "Which K-pop band has gained global fame?", options: ["EXO", "BTS", "BLACKPINK", "GOT7"], answer: 1},
  { q: "What is the name of the highest-grossing movie of all time (as of 2025)?", options: ["Avatar", "Avengers: Endgame", "Titanic", "The Lion King"], answer: 0},
  { q: "Which athlete holds the world record for the 100m sprint?", options: ["Usain Bolt", "Yohan Blake", "Tyson Gay", "Carl Lewis"], answer: 0},
  { q: "Who is the current President of France (as of 2025)?", options: ["François Hollande", "Emmanuel Macron", "Marine Le Pen", "Édouard Philippe"], answer: 1},
  { q: "Which tech company developed ChatGPT?", options: ["Google", "OpenAI", "Microsoft", "Meta"], answer: 1},
  { q: "Which country successfully landed a spacecraft on the Moon's south pole in 2023?", options: ["China", "USA", "Russia", "India"], answer: 3},
];

let selectedQuestions = [];
let timer;
let timeLeft = 180;
let username = "";

function startQuiz() {
  username = document.getElementById("username").value.trim();
  if (!username) return alert("Please enter your name");

  selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 15);
  document.getElementById("start-page").classList.add("hidden");
  document.getElementById("quiz-page").classList.remove("hidden");
  loadQuestions();
  startTimer();
}

function loadQuestions() {
  const form = document.getElementById("quiz-form");
  form.innerHTML = "";
  selectedQuestions.forEach((q, i) => {
    const block = document.createElement("div");
    block.innerHTML = `<p>${i + 1}. ${q.q}</p>` +
      q.options.map((opt, idx) =>
        `<label><input type="radio" name="q${i}" value="${idx}"> ${opt}</label><br>`
).join("");
    form.appendChild(block);
});
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = formatTime(timeLeft);
    document.getElementById("progress").style.width = `${((180 - timeLeft) / 180) * 100}%`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      submitQuiz();
}
}, 1000);
}

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function submitQuiz() {
  clearInterval(timer);
  const form = document.getElementById("quiz-form");
  let score = 0;
  selectedQuestions.forEach((q, i) => {
    const selected = form[`q${i}`].value;
    if (parseInt(selected) === q.answer) score++;
});

  const iq = Math.round((score * 10) + ((180 - timeLeft) / 6));
  const rating = iq>= 130? "Genius": iq>= 115? "Gifted": iq>= 100? "Average": "Developing";

  document.getElementById("quiz-page").classList.add("hidden");
  document.getElementById("result-page").classList.remove("hidden");
  document.getElementById("result-summary").textContent =
    `${username}, your IQ is ${iq} (${rating}). You scored ${score}/15.`;

  document.getElementById("whatsapp-share").href =
    `https://wa.me/?text=I scored ${iq} (${rating}) on the 21st Emperor Global IQ Quiz!`;
}

function downloadPDF() {
  const { jsPDF} = window.jspdf;
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4"});

  const score = selectedQuestions.reduce((acc, q, i) => {
    const selected = document.getElementById("quiz-form")[`q${i}`]?.value;
    return acc + (parseInt(selected) === q.answer? 1: 0);
}, 0);
  const iq = Math.round((score * 10) + ((180 - timeLeft) / 6));
  const rating = iq>= 130? "Genius": iq>= 115? "Gifted": iq>= 100? "Average": "Developing";
  const date = new Date().toLocaleDateString();
  const verifyURL = `https://yourdomain.com/verify?name=${encodeURIComponent(username)}&iq=${iq}`;

  // Create QR code
  const qrDiv = document.createElement("div");
  qrDiv.style.display = "none";
  document.body.appendChild(qrDiv);
  new QRCode(qrDiv, {
    text: verifyURL,
    width: 100,
    height: 100,
    correctLevel: QRCode.CorrectLevel.H
});

  setTimeout(() => {
    const qrCanvas = qrDiv.querySelector("canvas");
    const qrDataURL = qrCanvas.toDataURL("image/png");

    // Background
    doc.setFillColor(18, 18, 18);
    doc.rect(0, 0, 297, 210, "F");

    // Title
    doc.setTextColor(255, 215, 0);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.text("21st Emperor Global IQ Test Certificate", 148.5, 40, { align: "center"});

    // Details
    doc.setFontSize(18);
    doc.text(`Awarded to: ${username}`, 148.5, 70, { align: "center"});
    doc.text(`IQ Score: ${iq}`, 148.5, 90, { align: "center"});
    doc.text(`Rating: ${rating}`, 148.5, 110, { align: "center"});
    doc.text(`Date: ${date}`, 148.5, 130, { align: "center"});

    // Signature lines
    doc.setLineWidth(0.5);
    doc.line(40, 160, 90, 160);
    doc.text("Authorized Signatory", 65, 170, { align: "center"});

    doc.line(207, 160, 257, 160);
    doc.text("Director", 232, 170, { align: "center"});

    // QR Code
    doc.addImage(qrDataURL, "PNG", 130, 175, 35, 35);
    doc.setFontSize(10);
    doc.text("Scan to verify", 148.5, 215, { align: "center"});

    doc.save(`${username}_IQ_Certificate.pdf`);
    qrDiv.remove();
}, 500);
}