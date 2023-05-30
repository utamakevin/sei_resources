function minNumOfVertices(edges) {
    let result = []
    let allOrigin = []
    let allDestination = []
  
    edges.forEach(([origin, destination]) => {
      allOrigin.push(origin)
      allDestination.push(destination)
    })
    // console.log(allOrigin, allDestination)
  
    allOrigin.forEach(origin => {
      if (result.indexOf(origin) === -1 && !allDestination.includes(origin)) {
        result.push(origin)
      }
    })
    console.log(result)
  }
  
  minNumOfVertices([[0,1],[0,2],[2,5],[3,4],[4,2]])
  minNumOfVertices([[0,1],[2,1],[3,1],[1,4],[2,4]])