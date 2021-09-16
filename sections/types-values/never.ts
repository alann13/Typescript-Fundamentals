// A bottom type is a type that describe no possible value allowed by the system.
// never type is a bottom type.

//example
class Car {
  drive() {
    console.log('driving..')
  }
}

class Truck {
  tow() {
    console.log('trucking..')
  }
}

type Vehicle = Truck | Car

class UnreachableError extends Error {
  constructor(_nvr: never, message: string) {
    super(message)
  }
}

const obtainRandomVehicle = (): any => {
  console.log('this does nothing.')
}

let myVehicle: Vehicle = obtainRandomVehicle()

if (myVehicle instanceof Truck) {
  myVehicle.tow()
} else if (myVehicle instanceof Car) {
  myVehicle.drive()
} else {
  // when returned value of obtainRandomVehicle() is not a type Car nor Truck
  // then it should hold no possible value. Hence never types.
  throw new UnreachableError(myVehicle, `Unexpected vehicle type: ${myVehicle}`)
}
