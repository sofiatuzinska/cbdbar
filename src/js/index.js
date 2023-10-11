import axios from 'axios';
import Notiflix from 'notiflix';

const refs = {
    form: document.querySelector(".js-form"),
    button: document.querySelector(".send-btn"),
}

refs.form.addEventListener("submit", submitHandler);

refs.form.addEventListener('submit', submitHandler);
const profile = {};

const TOKEN = "6686326526:AAH4qHtcRel6N6nSzMCndPlJgTSiPQ_4Bvk";
      const CHAT_ID = "-1001904526880";
      const URI_API = `https:/api.telegram.org/bot${ TOKEN }/sendMessage`;
      const success = document.getElementById('success');

function submitHandler(event) {
  event.preventDefault();

  const username = event.currentTarget.elements.username;
  const userphone = event.currentTarget.elements.userphone; 
  const useremail = event.currentTarget.elements.useremail; 
  const usercomment = event.currentTarget.elements.usercomment;

  if (username.value === '' || userphone.value === '') {
    // alert('Будь ласка, заповніть поля імені та номеру телефону!');
   return Notiflix.Notify.failure(
        'The search string cannot be empty. Please specify your search query.',
      );
  } else {
    profile.username = username.value;
    profile.userphone = userphone.value;
    profile.useremail = useremail.value;
    profile.usercomment = usercomment.value;

    console.log(profile);

  }

  let message = `<b>Нова заявка!</b>\n`;
  message += `<b>Ім'я</b> ${username.value}\n`;  
  message += `<b>телефон</b> ${userphone.value}\n`; 
  message += `<b>пошта</b> ${useremail.value}\n`; 
  message += `<b>коментар</b> ${usercomment.value}`; 
  
  axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message
    })
    .then((res) => {
  this.username.value = "";
  this.userphone.value = "";
  success.innerHTML = "Дякуємо! Скоро з Вами зв'яжуться!";
  success.style.display = "block";
  
    })
  
    .catch((err) => {
  console.warn(err);
  error.innerHTML = "Перевірте, чи введено всі дані";
  error.style.display = "block";
    })
    .finally(() => {
      console.log('end');
    })

  event.currentTarget.reset();
}

      



    //   document.getElementById('tg').addEventListener('submit', function(e) {
    //     e.preventDefault();

    //     let message = `<b>Нова заявка!</b>\n`;
    //     message += `<b>Ім'я</b> ${this.username.value}\n`;
    //     message += `<b>телефон</b> ${this.userphone.value}\n`; 
    //     message += `<b>пошта</b> ${this.useremail.value}\n`; 
    //     message += `<b>коментар</b> ${this.usercomment.value}`; 


       





    // 1. зібрати рефси 
    // 2. повісити обробник подій на кнопку
    // 3. При заповненні форми зробити перевірку на заповненість полів
    // 4. зібрати дані з форми й налаштувати відправку в ФБ месенджер 
    // 5. Очистити форму і повідомити користувача про успіх чи помилку