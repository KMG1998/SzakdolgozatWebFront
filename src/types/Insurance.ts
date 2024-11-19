type Insurance = undefined | {
  id: string,
  vehicleId: string
  validUntil: Date;
  issuer: string;
  insuranceNumber: string;
}

export default Insurance
