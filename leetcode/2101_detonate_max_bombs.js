// You are given a list of bombs. The range of a bomb is defined as the area where its effect can be felt. This area is in the shape of a circle with the center as the location of the bomb.

// The bombs are represented by a 0-indexed 2D integer array bombs where bombs[i] = [xi, yi, ri]. xi and yi denote the X-coordinate and Y-coordinate of the location of the ith bomb, whereas ri denotes the radius of its range.

// You may choose to detonate a single bomb. When a bomb is detonated, it will detonate all bombs that lie in its range. These bombs will further detonate the bombs that lie in their ranges.

// Given the list of bombs, return the maximum number of bombs that can be detonated if you are allowed to detonate only one bomb.

function detonate(bombs) {
  map = []
  mostDetonation = 0

  for (i = 0; i < bombs.length; i++) {
    map[i] = []
    for (j = 0; j < bombs.length; j++) {
      if (i !== j) {
        let distance = Math.sqrt(
          Math.pow(bombs[i][0] - bombs[j][0], 2) +
            Math.pow(bombs[i][1] - bombs[j][1], 2)
        )

        if (distance <= bombs[i][2]) {
          if (!map[i].includes(j)) {
            map[i].push(j)
          }
        }
      }
    }
  }

  for (k = 0; k < bombs.length; k++) {
    result = Array(bombs.length).fill(false)
    result[k] = true

    checkDetonation(k, map)

    function checkDetonation(index, map) {
      if (map.length < 1 || map[index] === undefined) {
        return
      }
      for (item of map[index]) {
        result[item] = true
        newMap = map.filter(arr => arr !== map[index])
        checkDetonation(item, newMap)
      }
      if (mostDetonation < result.filter(Boolean).length) {
        mostDetonation = result.filter(Boolean).length
      }
    }
  }
  return mostDetonation
}

console.log(
  detonate([
    [2, 1, 3],
    [6, 1, 4],
  ])
)

console.log(
  detonate([
    [1, 1, 5],
    [10, 10, 5],
  ])
)

console.log(
  detonate([
    [1, 2, 3],
    [2, 3, 1],
    [3, 4, 2],
    [4, 5, 3],
    [5, 6, 4],
  ])
)
