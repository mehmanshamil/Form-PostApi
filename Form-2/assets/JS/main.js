let surname = document.getElementById("surname")
let email = document.getElementById("email")
let password = document.getElementById("password")
let adress = document.getElementById("adress")
let country = document.getElementById("country")
let form = document.getElementById("form")

form.addEventListener("submit", myget)

function myget(e) {
    e.preventDefault()

    let data = {
        "surname": surname.value,
        "email": email.value,
        "country": country.value,
        "password": password.value,
        "adress": adress.value
    }

    axios.post("https://655c87ff25b76d9884fd7a47.mockapi.io/users", data)
    console.log("sadasd");
    console.log("grfhj");
}