let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

//soal 1
let myData = {...data, name: 'Afrizal', email: 'afrizalafaandi@gmail.com', hobby: ["Main Game", "Musik", "Film"]}
console.log(myData)

//soal 2
let {address} = data
let {street, city} = address
// console.log(`${address.street}, ${address.city}`)
console.log(`${street}, ${city}`)
