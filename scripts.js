document.querySelector('.finder').addEventListener('focusout',function(){
location.replace("https://www.google.com/search?q=" +     document.querySelector('.finder').textContent);
});