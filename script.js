const twitterBtn     = document.getElementById('twitter');
const whatsappBtn     = document.getElementById('whatsapp');
const downloadBtn     = document.getElementById('download');
const quoteContainer     = document.getElementById('quote-container');
const quoteText     = document.getElementById('quote');
const greetingText     = document.getElementById('greeting');
const quote = quoteText.innerText ;
const greeting = greetingText.innerText;
var site = "Selamat Hari Idul Fitri 1445H https://idulfitri1445h.vercel.app";

var quoteArray = [
    "Dari dulu terus mencari, meski hati masih sendiri, jangan pernah bersusah hati, karena hari ini Idul Fitri. Semoga kita yang sendiri bisa saling berbagi, minal aidin walfaizin mohon maaf lahir dan batin. ~ [Rimba & Keluarga]",
    "Mata sering salah menatap, mulut sering salah berucap, hati sering salah prasangka, dengan niat yang tulus dan suci saya mengucapkan mohon maaf lahir dan batin. ~ [Rimba & Keluarga]",
    "Untuk hati yang pernah terluka oleh tajamnya lidah. Untuk jiwa yang tersakiti oleh buruknya sikap dan perilaku. Selamat Idul Fitri dan mohon maaf lahir dan batin. ~ [Rimba & Keluarga]",
    "Takbir, tahmid, tahlil telah berkumandang. Memecah keheningan malam. Mengantar rasa syukur kepada-Nya. Esok pagi menyambut hari yang fitri. Selamat Hari Raya Idul Fitri. Taqabbalallahu Minna Wa Minkum. ~ [Rimba & Keluarga]"
]  

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quoteArray.length));
    document.getElementById('quote').innerHTML = quoteArray[randomNumber];
}

function ButtonClick() {
    var link = document.createElement('a');
    link.href = "covid_19 Handbook.pdf";
    link.download = "covid_19 Handbook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);    
}
function show_alert() {
    alert("Selamat Hari Idul Fitri 1449H");
           
}

// Tweet Quote
function tweetQuote() {    
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} -  ${site}`;
    window.open(twitterUrl, '_blank');
}

function whatsappPost() {

    const whatsappUrl = `https://api.whatsapp.com/send?text=${quote} - ${site}`;
    window.open(whatsappUrl, '_blank');
}

twitterBtn.addEventListener('click', tweetQuote);
whatsappBtn.addEventListener('click', whatsappPost);

newQuote();