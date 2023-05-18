// given the following object

const params = {
  t: "jaws",
  apikey: "123456",
  page: "5"
}
// write a function to convert it to a query string

// "?t=jaws&apikey=123456&page=5"

function objectToQueryString(object) {
    let queryArray = []
    for(const key in object) {
        queryArray.push(`${key}=${object[key]}`)
    }
    
    return '?'.concat(queryArray.join('&'))
}

console.log(objectToQueryString(params))