const inputEl = document.getElementById("input");
const textInfoEl = document.getElementById("text-info");
const meaningContainer = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");
async function fetchAPI(word){
    try {
        textInfoEl.style.display = "block";
        textInfoEl.style.display = "none";  
        textInfoEl.innerText = `Searching the meaning of "${word}"`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    const result = await fetch(url).then((res)=> res.json());   
    textInfoEl.style.display = "none"
    meaningContainer.style.display = "block"
    titleEl.innerText = result[0].word;
    meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
    audioEl.src = result[0].phonetics[0].audio;
    console.log(result)

    } catch (error) {
        console.log(error)
        textInfoEl.innerText = `Network error try again later`;
    }
    

}


inputEl.addEventListener("keyup", (e)=>{
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value)
    }
})