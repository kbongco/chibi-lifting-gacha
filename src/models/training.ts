class TrainingSession {
  movement: string;
  movementType: string;
  weight: number;
  reps: number;
  rpe: number;

  constructor(
    movement: string,
    movementType: string,
    weight: number,
    reps: number,
    rpe: number
  ) {
    this.movement = movement;
    this.movementType = movementType;
    this.weight = weight;
    this.reps = reps;
    this.rpe = rpe;
  }
}