import { EvoItem } from '../item';
import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';

export const angelNature: { [id: string]: EvoItem } = {
  Deathgazer: {
    id: 'Deathgazer',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: 'Deathgazer',
    description: '',
    effects: [
      '+875 Intelligence',
      '+5% Cooldown Reduction',
      '+90 Mana Regen',
      'Active: Hex target for 1.25 second. Cooldown 20s.',
    ],
    crafting: [
      'Scepter of Oblivion',
      'Nature Fragment',
      'Cursed Artifact',
      "Harbinger's Essence",
      'Diamond',
      'Blessing of Darkness',
    ],
    source: 'Angel of Nature',
  },
  'Ancient Dragon Book': {
    id: 'Ancient Dragon Book',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: 'AnciendDragonBook',
    description:
      'Written in draconic language, it contains forbidden spells that allow the summoning of dragon elementals.',
    effects: [
      '+500 All stats',
      '+10% Cooldown Reduction',
      '+90 Mana Regen',
      'Active: Summons a Dragon Elemental for 60 seconds. Cooldown 75s.',
    ],
    crafting: [
      'Summoning Codex',
      'Cursed Artifact',
      'Sealed Demise',
      'Draconic Trinity',
    ],
    source: 'Angel of Nature',
  },
  'Final Emerald Blade': {
    id: 'Final Emerald Blade',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'FinalEmeraldBlade',
    description:
      "The peak of the Emerald Blade. The blade's power has increased so much that it can no longer store the viridescent essence within the blade, surrounding it with immense natural energies.",
    effects: [
      '+2500 Damage',
      '+150 Armor',
      '+6000 Health',
      'Active: Gains 60% AS for 10 seconds. Cooldown 25s.',
    ],
    crafting: ['Crystallized Emerald Blade', 'Emerald', 'Draconic Trinity'],
    source: 'Angel of Nature',
  },
  'Eclair La Demes': {
    id: 'Eclair La Demes',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: 'EclairLaDemes',
    description:
      'The essence of the forbidden spell used by Wizard Hannah. It is rumored that the spell has granted her eternal energy that allowed her to overwhelm the Raven.',
    effects: [
      '+1000 Intelligence',
      '+5000 Mana',
      '+10% Cooldown Reduction',
      '+15% Mana efficiency',
    ],
    crafting: [
      "Atlantean's Tome",
      'Diamond',
      'Mythical Handle Piece',
      'Draconic Trinity',
    ],
    source: 'Angel of Nature',
  },
  'Dragon Totem': {
    id: 'Dragon Totem',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: 'DragonTotem',
    description:
      'Made with the skull of an extinct dragon, the totem possesses natural powers that are unmatched.',
    effects: [
      '+900 Intelligence',
      '+65 Health Regen',
      '+50 MP Regen',
      '+10% Cooldown Reduction',
      "Active: Heals target's HP for [10 000 + 8% Max HP] and provide 100 Armor for 5s. Heals and buffs nearby allies for 50% of the amount. Cooldown 15s.",
    ],
    crafting: [
      'Scepter of Mastery',
      'Nature Fragment',
      'Emerald',
      'Draconic Trinity',
    ],
    source: 'Angel of Nature',
  },
  "Winter's Soul": {
    id: "Winter's Soul",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: 'WintersSoul',
    description:
      'A powerful capsule that stores the power of Winter. The orb glows from within, causing the environment to be frozen by its mere presence.',
    effects: [
      '+950 Intelligence',
      '+95 Health Regen',
      '+0.3% MP Regen',
      '+10% Cooldown Reduction',
    ],
    crafting: [
      "Winter's Heart",
      'Ocean Fragment',
      'Sapphire',
      'Draconic Trinity',
    ],
    source: 'Angel of Nature',
  },
  'Dragon Bow': {
    id: 'Dragon Bow',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.FORGED,
    icon: 'DragonBow',
    description:
      'Regarded as the "Bow of End", shots made using this bow is highly precise and deadly, while being lightweight that allows for great agility.',
    effects: [
      '+6000 Damage',
      'Active: Gains 3750 Damage for 10 seconds. Cooldown 25s.',
    ],
    crafting: [
      'Windforce',
      'Mythical Handle Piece',
      'Dragon Tooth',
      'Draconic Trinity',
    ],
    source: 'Angel of Nature',
  },
  'Claw of Midnight': {
    id: 'Claw of Midnight',
    restriction: EvoItemRestictions.SHAPESHIFTER,
    rarity: EvoRarity.FORGED,
    icon: 'ClawOfMidnight',
    description:
      'The claw of the Dragon of Pure Darkness. It is so tainted and deadly that being scratched by it means sure death.',
    effects: [
      '+1125 Damage',
      '+25% Attack speed',
      'Passive: 35% chance to deal 12,000 Magic Damage in a huge AOE.',
    ],
    crafting: ['Paw of Lightning', 'Mystical', 'Draconic Trinity'],
    source: 'Angel of Nature',
  },
  Nightshadow: {
    id: 'Nightshadow',
    restriction: EvoItemRestictions.CHUNIN,
    rarity: EvoRarity.FORGED,
    icon: 'Nightshadow',
    description:
      'The shadow kunai used by professional ninjas to perform mass assasinations.',
    effects: [
      '+1100 Agility',
      '+10% Cooldown Reduction',
      'Passive: Spellcast deals [4500 + 22.5% Agi] Pure Damage to all enemies within 350 AOE. Deals 200% against non-bosses.',
    ],
    crafting: ['Doombringer', 'Mystical', 'Draconic Trinity'],
    source: 'Angel of Nature',
  },
  'Blasting Rod': {
    id: 'Blasting Rod',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: 'BlastingRod',
    description: 'The dreaded staff imbued with powerful crimson magic.',
    effects: [
      '+1000 Intelligence',
      '+70 Mana Regen',
      '+15% Cooldown Reduction',
    ],
    crafting: [
      'Mystral Staff',
      'Ruby',
      'Sealed Demise',
      'Mythical Handle Piece',
      'Draconic Trinity'
    ],
    source: 'Angel of Nature',
  },
  Windspeaker: {
    id: 'Windspeaker',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.FORGED,
    icon: 'Windspeaker',
    description: 'The dreaded staff imbued with powerful crimson magic.',
    effects: [
      '+1100 Agility',
      '+20% Attack speed',
      'Passive: Every basic attacks increase AS by 1% for 5 seconds(Max: 15%).',
    ],
    crafting: [
      'Runic bow',
      'Emerald',
      'Sapphire',
      'Sealed Demise',
      "Harbinger's Essence",
      'Draconic Trinity',
    ],
    source: 'Angel of Nature',
  },
};
