import { BitchedOutChibi } from "./chibi";

describe("BitchedOutChibi", () => {

  test("has the correct name", () => {
    const chibi = new BitchedOutChibi();

    expect(chibi.name).toBe("Bitched Out Chibi");
  });

  test("has the correct rarity", () => {
    const chibi = new BitchedOutChibi();
    expect(chibi.rarity).toBe('uncommon');
  })

  test('has the correct Tsun annoyance value', () => {
    const chibi = new BitchedOutChibi();
    expect(chibi.tsunAnnoyance).toBe(8);
  })

});