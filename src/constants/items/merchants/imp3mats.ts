import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const imp3matsItems: { [id: string]: EvoItem } = {
  'Fire Rising': {
    id: 'Fire Rising',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'FireRising',
    description: 'Blinding fire.',
    effects: [],
    crafting: [],
    source: 'Imp3Mats',
  },
  'Incinerator': {
    id: 'Incinerator',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'Incinerator',
    description: 'Universe fire.',
    effects: [],
    crafting: [
      'Fire Demon',
      'Fire Lotus',
    ],
    source: 'Imp3Mats',
  },
  'Curse of Hell': {
    id: 'Curse of Hell',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'CurseOfHell',
    description: 'Too much suffering.',
    effects: [],
    crafting: [
      'Incinerator',
      'Mystery',
      'Mystical',
      'Draconic Trinity',
      'Nether Reactor',
    ],
    source: 'Imp3Mats',
  },
  'Fire Stone': {
    id: 'Fire Stone',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'FireStone',
    description: 'Encapsulates hell.',
    effects: [],
    crafting: [
      'Incinerator',
      'Curse of Hell',
      'Nether Reactor',
    ],
    source: 'Imp3Mats',
  },
  'Crystal of Eternal Flame': {
    id: 'Crystal of Eternal Flame',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'CrystalOfEternalFlame',
    description: 'Burn in hell.',
    effects: [],
    crafting: [
      'Fire Rising',
      'Fire Stone',
      'Nether Reactor',
    ],
    source: 'Imp3Mats',
  },
  'Demonic Flame': {
    id: 'Demonic Flame',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'DemonicFlame',
    description: "The fire from the demonic fiend's mouth.",
    effects: [],
    crafting: [
      'Dragon Tooth',
      'Crystal of Eternal Flame',
    ],
    source: 'Imp3Mats',
  },
  "Imp's Tail": {
    id: "Imp's Tail",
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'ImpsTail',
    description: 'Cut from the tail of the demonic fiend.',
    effects: [],
    crafting: [
      'Dragon Egg',
      'Crystal of Eternal Flame',
    ],
    source: 'Imp3Mats',
  },
  "Blessing of Fire": {
    id: 'Blessing of Fire',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'BlessingOfFire',
    description: 'The blessing of the ferocious Demonic Fiend.',
    effects: [],
    crafting: [
      'Blessing of Dragon',
      'Crystal of Eternal Flame',
    ],
    source: 'Imp3Mats',
  },
  "Hellish Behemoth": {
    id: 'Hellish Behemoth',
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'HellishBehemoth',
    description: 'The definition of incineration.',
    effects: [],
    crafting: [
      'Demonic Flame',
      "Imp's Tail",
      'Blessing of Fire',
      'Nether Reactor',
    ],
    source: 'Imp3Mats',
  },
}