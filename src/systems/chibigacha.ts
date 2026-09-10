import { Chibi } from "../models/Chibi";
import type { TrainingSession } from "../models/training.js";

class ChibiGacha {
  chibis: Chibi[];
    constructor(chibis: Chibi[]) {
    this.chibis = chibis;
  }

  pull(session: TrainingSession): Chibi {
const eligibleChibis = this.chibis.filter(
  chibi => chibi.getActivationChance(session) > 0
);
  }
}
