let username = document.getElementById("name")
let surname = document.getElementById("surname")
let age = document.getElementById("age")
let email = document.getElementById("email")
let form = document.getElementById("form")

form.addEventListener("submit", myget)

function myget(e) {
    e.preventDefault()

    let data = {
        "name": username.value,
        "surname": surname.value,
        "age": age.value,
        "email": email.value
    }

    axios.post("https://655c87ff25b76d9884fd7a47.mockapi.io/users", data)
    console.log("sadasd");
    console.log("grfhj");
}