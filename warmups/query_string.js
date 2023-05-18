// given the following sample url

// let url = "http://omdbapi.com/?t=jaws&apikey=123456&page=5"
// write a function that accepts a url as an argument and extract and returns just the query string formatted as an object

// parseQueryString(url)
// returns the following

// {
//   t: "jaws",
//   apikey: "123456",
//   page: "5"
// }
// here is another example

// let url = "https://api.giphy.com/v1/gifs/search?q=cats&limit=10"

// parseQueryString(url)
// returns the following

// {
//   q: "cats",
//   limit: "10"
// }

function parseQueryString(url) {
    const queryString = url.slice(url.indexOf('?') + 1)
    const keyValuePairArr = queryString.split('&')
    
    let resultObj = {}
    
    for(pair of keyValuePairArr) {
        const [ key, value ] = pair.split('=')
        resultObj[key] = value
    }

    return resultObj
}

console.log(parseQueryString("https://api.giphy.com/v1/gifs/search?q=cats&limit=10"))