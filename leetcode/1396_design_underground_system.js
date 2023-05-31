// An underground railway system is keeping track of customer travel times between different stations. They are using this data to calculate the average time it takes to travel from one station to another.

// Implement the UndergroundSystem class:

// void checkIn(int id, string stationName, int t)
// A customer with a card ID equal to id, checks in at the station stationName at time t.
// A customer can only be checked into one place at a time.
// void checkOut(int id, string stationName, int t)
// A customer with a card ID equal to id, checks out from the station stationName at time t.
// double getAverageTime(string startStation, string endStation)
// Returns the average time it takes to travel from startStation to endStation.
// The average time is computed from all the previous traveling times from startStation to endStation that happened directly, meaning a check in at startStation followed by a check out from endStation.
// The time it takes to travel from startStation to endStation may be different from the time it takes to travel from endStation to startStation.
// There will be at least one customer that has traveled from startStation to endStation before getAverageTime is called.
// You may assume all calls to the checkIn and checkOut methods are consistent. If a customer checks in at time t1 then checks out at time t2, then t1 < t2. All events happen in chronological order.

class UndergroundSystem {
    constructor() {
        this.head = []
        this.log = []
    }

    checkIn(id, stationName, t) {
        let record = {}
        record.id = id
        record.startStation = stationName
        record.startTime = t
        this.head.push(record)
    }
    
    checkOut(id, stationName, t) {
        let startData = this.head.find(entry => entry.id === id)

        let startStation = startData.startStation
        let endStation = stationName

        let startTime = startData.startTime
        let endTime = t
        let travelTime = endTime - startTime

        let dataIndex = id

        this.log[dataIndex] = {}
        this.log[dataIndex].startStation = startStation
        this.log[dataIndex].endStation = endStation
        this.log[dataIndex].travelTime = travelTime
    }

    getAverageTime(startStation, endStation) {
        let log = this.log.filter(entry => entry.startStation === startStation && entry.endStation === endStation)

        let travelTimeArr = []
        log.forEach(entry => travelTimeArr.push(entry.travelTime))

        let totalTravelTime = travelTimeArr.reduce((total, time) => total + time, 0)
        let timesTravelled = log.length

        return totalTravelTime / timesTravelled
    }

    getHead() {
        return this.head
    } 

    getLog() {
        return this.log
    } 
}

// Example 1:
// undergroundSystem = new UndergroundSystem();
// undergroundSystem.checkIn(45, "Leyton", 3);
// undergroundSystem.checkIn(32, "Paradise", 8);
// undergroundSystem.checkIn(27, "Leyton", 10);
// undergroundSystem.checkOut(45, "Waterloo", 15);  // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
// undergroundSystem.checkOut(27, "Waterloo", 20);  // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
// undergroundSystem.checkOut(32, "Cambridge", 22); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14
// undergroundSystem.getAverageTime("Paradise", "Cambridge"); // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
// undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11
// // console.log(undergroundSystem.getLog())


// Example 2
undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(10, "Leyton", 3);
undergroundSystem.checkOut(10, "Paradise", 8); // Customer 10 "Leyton" -> "Paradise" in 8-3 = 5
console.log(undergroundSystem.getAverageTime("Leyton", "Paradise")); // return 5.00000, (5) / 1 = 5
undergroundSystem.checkIn(5, "Leyton", 10);
undergroundSystem.checkOut(5, "Paradise", 16); // Customer 5 "Leyton" -> "Paradise" in 16-10 = 6
console.log(undergroundSystem.getAverageTime("Leyton", "Paradise")); // return 5.50000, (5 + 6) / 2 = 5.5
undergroundSystem.checkIn(2, "Leyton", 21);
undergroundSystem.checkOut(2, "Paradise", 30); // Customer 2 "Leyton" -> "Paradise" in 30-21 = 9
console.log(undergroundSystem.getAverageTime("Leyton", "Paradise")); // return 6.66667, (5 + 6 + 9) / 3 = 6.66667