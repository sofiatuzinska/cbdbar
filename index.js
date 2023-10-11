const refs = {
    form: document.querySelector(".js-form"),
    button: document.querySelector(".send-btn"),
}

refs.form.addEventListener("submit", handleSearch);

async function handleSearch(event) {
    event.preventDefault();
    refs.searchBtn.disabled = true;