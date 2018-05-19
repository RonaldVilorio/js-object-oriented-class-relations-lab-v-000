let store = {drivers: [],passengers: [],trips: []}
let driverId = 0
class Driver{
  constructor(name){
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(trip =>{return trip.driverId === this.id})
  }
  passengers(){
    // debugger
    return store.passengers.filter(passenger =>{return passenger})
  }

}
let passengerId = 0
class Passenger{
  constructor(name){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(trip=>{return trip.passengerId === this.id})
  }
  drivers(){
    return store.drivers.filter(driver =>{return driver})
  }

}
let tripId = 0
class Trip{
  constructor(){
    this.id = ++tripId
    store.trips.push(this)
    if (driverId){
      this.driverId = driverId
    }
    if (passengerId){
      this.passengerId = passengerId
    }
  }
    passenger(){
      return store.passengers.find(passenger =>{return passenger.id === this.passengerId})
    }
    driver(){
      // debugger
      // const driver = function.bind(this.driverId)
      return store.drivers.find(driver => {return driver.id === this.driverId})
    }



}
