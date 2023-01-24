const SEARCH_GOOGLE_VALUE = document.getElementById('SEARCH_GOOGLE_VALUE');

SEARCH_GOOGLE_VALUE.addEventListener("keypress", (keyboard) => {
if (keyboard.key == "Enter") {
    let value = SEARCH_GOOGLE_VALUE.value;
    value = value.replace(' ', '+');
    
    let link = "https://www.google.com/search?q=" + value;
    window.open(link);
}
});
