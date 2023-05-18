// seeding the database
// So... Looks like I've dropped my dishes table by accident again and need a way to quickly insert some dummy dish records back into the database for testing. Write a standalone script named seed_dummy_dishes.js that when run will insert 20 randomly generated dishes with images into the goodfoodhunting database dishes table as dummy records.

// you can checkout https://loremipsum.io/21-of-the-best-placeholder-image-generators/ for generating place holder images and I've included an array of dish names below. may be useful..




const { appendFile } = require('fs')
const { Pool } = require('pg')
const pool = new Pool({
    database: 'goodfoodhunting',
    user: 'postgres',
    password: process.env.PASSWORDGFH
})

const dishes = ["Arepas", "Barbecue Ribs", "Bruschette with Tomato", "Bunny Chow", "Caesar Salad", "California Maki", "Caprese Salad", "Cauliflower Penne", "Cheeseburger", "Chicken Fajitas", "Chicken Milanese", "Chicken Parm", "Chicken Wings", "Chilli con Carne", "Ebiten maki", "Fettuccine Alfredo", "Fish and Chips", "French Fries", "Sausages", "French Toast", "Hummus", "Katsu Curry", "Kebab", "Lasagne", "Linguine with Clams", "Massaman Curry", "Meatballs with Sauce", "Mushroom Risotto", "Pappardelle alla Bolognese", "Pasta Carbonara", "Pasta and Beans", "Pasta with Tomato and Basil", "Peking Duck", "Philadelphia Maki", "Pho", "Pierogi", "Pizza", "Poke", "Pork Belly Buns", "Pork Sausage Roll", "Poutine", "Ricotta Stuffed Ravioli", "Risotto with Seafood", "Salmon Nigiri", "Scotch Eggs", "Seafood Paella", "Som Tam", "Souvlaki", "Stinky Tofu", "Sushi", "Tacos", "Teriyaki Chicken Donburi", "Tiramisù", "Tuna Sashimi", "Vegetable Soup"]

const img = 'http://placehold.co/600x600'

for(let i = 0; i < dishes.length; i++) {
    const sql = `INSERT INTO dishes (title, image_url) VALUES ('${dishes[i]}', '${img}') returning id;`
    
    pool.query(sql, (err, dbRes) => {
        console.log(err)
        // console.log(dbRes.rows[0].id)
    })
}
