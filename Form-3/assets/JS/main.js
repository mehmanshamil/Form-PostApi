let discount = document.getElementById("discount")
let stock = document.getElementById("stock")
let title = document.getElementById("title")
let country = document.getElementById("country")
let price = document.getElementById("price")
let description = document.getElementById("description")
let quality = document.getElementById("quality")
let customersCount = document.getElementById("customersCount")
let category = document.getElementById("category")
let city = document.getElementById("city")
let form = document.getElementById("form")

form.addEventListener("submit", myget)

function myget(e) {
    e.preventDefault()

    let data = {
        "discount": discount.value,
        "title": title.value,
        "country": country.value,
        "price": price.value,
        "description": description.value,
        "quality": quality.value,
        "customersCount": customersCount.value,
        "category": category.value,
        "stock": stock.value,
        "city": city.value
    }

    axios.post("https://655c87ff25b76d9884fd7a47.mockapi.io/users", data)
}