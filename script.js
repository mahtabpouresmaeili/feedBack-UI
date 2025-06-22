const ratingEls = document.querySelectorAll('.rating'); 

const BtnEl= document.getElementById('btn')

const containerEl = document.getElementById('conteiner');

let selectedRating ="";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener('click', (event) => {
    console.log(event.target.innerText || event.target.parentNode.innerText);

    selectedRating = event.target.innerText || event.target.parentNode.innerText;
    
    // اول همه کلاس‌های active رو حذف کن
    ratingEls.forEach((el) => {el.classList.remove('active')});

    // بعد به باکس انتخاب‌شده کلاس active بده
    ratingEl.classList.add('active');
  });
});

BtnEl.addEventListener('click', (e) => {
    if (selectedRating !== ""){
        containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <br>
        <p> we appreciate your feedback!</p>
        `

    }
    
   })

 
  


 
