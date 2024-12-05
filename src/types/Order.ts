interface Order{
  id:string
  customerId: string
  driverId: string
  startAddress: string
  destinationAddress: string
  startDateTime: string
  finishDateTime: string | undefined
  price: number
  closureType: number
}

