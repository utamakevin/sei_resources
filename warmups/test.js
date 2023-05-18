// 1. save the object in a file named test.js
// 2. write code to print in the terminal the svg image url for the 4 of spades
// 3. iterate over all the cards to print in the terminal the following:
// KING of HEARTS
// 8 of CLUBS
// 4 of SPADES
// 4. use setInterval to console log the string ping every second

let res = {
  data: {
    success: true,
    cards: [
        {
          image: "https://deckofcardsapi.com/static/img/KH.png",
          value: "KING",
          suit: "HEARTS",
          code: "KH"
        },
        {
          image: "https://deckofcardsapi.com/static/img/8C.png",
          value: "8",
          suit: "CLUBS",
          code: "8C"
        },
        {
          image: "https://deckofcardsapi.com/static/img/4S.png",
          images: {
            svg: "https://deckofcardsapi.com/static/img/4S.svg",
            png: "https://deckofcardsapi.com/static/img/4S.png"
          },
          value: "4",
          suit: "SPADES",
          code: "4S",
        }        
    ],
    deck_id: "3p40paa87x90",
    remaining: 50
  }
}


console.log(res.data.cards[2].images.svg)

for(let i = 0; i < res.data.cards.length ; i++) {
  let card = res.data.cards[i]
  console.log(`${card.value} of ${card.suit}`)
}

setInterval(() => 
  console.log('ping'), 1000)