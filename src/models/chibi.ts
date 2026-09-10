import type { TrainingSession } from "./training.js";

export class Chibi {
  name: string;
  rarity: string;
  tsunAnnoyance: number;

  constructor(name: string, rarity: string, tsunAnnoyance: number) {
    this.name = name;
    this.rarity = rarity;
    this.tsunAnnoyance = tsunAnnoyance;
  }

  getTrainingBehavior(): string {
    return "Chibi trains.";
  }

  getActivitationChance(session: TrainingSession):number {
    return 0
  }
}

class BitchedOutChibi extends Chibi {
  constructor() {
    super('Bitched Out Chibi', 'uncommon', 8);
  }

  getTrainingBehavior(): string {
    return 'Chibi fails a weight she can do easily'
  }

  canActivate(lift: string, reps: number): boolean {
  return lift === "squat" && reps >= 3;
}
}

class SandBaggingChibi extends Chibi {
  constructor() {
    super('Sand Bagging Chibi', 'common', 7);
  }

  getTrainingBehavior(): string{
    return 'Chibi could go heavier, but doesnt wanna'
  }
}

class TinyDumbbellChibi extends Chibi{
  constructor() {
    super('Tiny Dumbbell Chibi', 'uncommon', 9);
  }

  getTrainingBehavior(): string {
    return 'Pink, Green, Purple?'
  }
}

class LockedInChibi extends Chibi {
  constructor() {
    super('Locked In Chibi', 'Epic', 0)
  }

  getTrainingBehavior(): string {
    return "No complaints, just pure execution"
  }
}

class SSJ2Chibi extends Chibi{
  constructor() {
    super('SSJ2 Chibi', 'Ultra Rare', 0)
  }

  getTrainingBehavior(): string{
    return "Let's load something fun! "
  }
}