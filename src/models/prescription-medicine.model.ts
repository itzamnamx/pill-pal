export class PrescriptionMedicine {
  constructor(public id: string, public name: string,
              public activeSubstance: string, public dose: string, public units: number) {}
}
