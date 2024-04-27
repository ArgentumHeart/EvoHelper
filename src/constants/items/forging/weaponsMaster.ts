import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const weaponsMasterItems: { [id: string]: EvoItem } = {
  // Weapons Master
  'Blade of the Ruined King': {
    id: 'Blade of the Ruined King',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'BTNAAA_BotRK',
    description:
      'The blade forged by the fallen king himself. Its purpost is to serve judgement against his foes and to avenge his fallen comrades.',
    effects: [
      '+2000 Damage',
      '125 Armor',
      '+4400 HP',
      'Active: 45 AS for 10s. Cooldown 25s',
    ],
    crafting: [
      'Time Sabres',
      'Ruby',
      'Diabolic Orb',
      "Cursed Artifact",
      'Sealed Demise',
    ],
    source: 'Weapons Master',
  },
  Contúirteacha: {
    id: 'Contúirteacha',
    restriction: EvoItemRestictions.CHUNIN,
    rarity: EvoRarity.FORGED,
    icon: 'BTNGlovesOfTheDeathLord',
    description:
      'The gloves of the renowned hunter, Iscontua, that have been used for his execution techniques. He has slain over a thousand enemies using these to perform his deadly execution against evil-doers.',
    effects: [
      '+525 Agility',
      '+5% Cooldown Speed',
      'Passive: Shunpo deals additional 50% damage.',
    ],
    crafting: [
      'Ultra Weapon Piece',
      'Lavender Fragment',
      "Hydra's Bane",
      'Black Soul',
    ],
    source: 'Weapons Master',
  },
  'Emerald Blade': {
    id: 'Emerald Blade',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'BTN_BladeG',
    description:
      'A sword crafted with pure emerald. Its shiny edge can slice through enemies at will. It is said that the wielder becomes greedy, going into a state of frenzy at some time.',
    effects: [
      '+1100 Damage',
      '+60 Armor',
      '+3000 Health',
      'Active: +30% AS for 10 seconds. Cooldown 35s.',
    ],
    crafting: [
      'Ultra Weapon Piece',
      'Mega Handle Piece',
      'Mega Armor Piece',
      'Nature Fragment',
      'Emerald',
      "Hydra's Bane",
    ],
    source: 'Weapons Master',
  },
  'Crystallized Emerald Blade': {
    id: 'Crystallized Emerald Blade',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'BTNEmbarBlade',
    description:
      'A sword crafted with pure emerald in its purest form. Its shiny edge can slice through enemies at will. It is said that the wielder becomes greedy, going into a state of frenzy at some time.',
    effects: [
      '+2000 Damage',
      '+125 Armor',
      '+4400 Health',
      'Active: +45% AS for 10 seconds. Cooldown 30s.',
    ],
    crafting: [
      'Emerald Blade',
      'Ultra Weapon Piece',
      'Ultra Handle Piece',
      'Ultra Armor Piece',
      'Emerald',
      "Harbinger's Essence",
    ],
    source: 'Weapons Master',
  },
  'Feral Totem': {
    id: 'Feral Totem',
    restriction: EvoItemRestictions.SHAPESHIFTER,
    rarity: EvoRarity.FORGED,
    icon: 'BTNStrengthOfTheWild',
    description:
      'This powerful totem increases the speed and ferocity of those in tune with the wild.',
    effects: ['+500 Intelligence', '+15% Attack speed'],
    crafting: [
      'Ultra Handle Piece',
      'Mega Handle Piece',
      'Nature Fragment',
      "Hydra's Bane",
    ],
    source: 'Weapons Master',
  },
  'Hand of God': {
    id: 'Hand of God',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.FORGED,
    icon: 'BTNSpell_Holy_Devotion',
    description:
      "The Hand of God was once worn by God himself in the Devil's War, and is famed for its superior defence.",
    effects: ['+110 Armor', '+15% Attack speed'],
    crafting: [
      'Ultra Armor Piece',
      'Mega Handle Piece',
      'Amethyst',
      'Black Soul',
    ],
    source: 'Weapons Master',
  },
  Moonfang: {
    id: 'Moonfang',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.FORGED,
    icon: 'BTNSoulBlades',
    description:
      'A glowblade forged with power shards, able to synthesize a very powerful weapon that resembles the shape of the moon.',
    effects: ['+2000 Damage', '+400 Agility'],
    crafting: [
      'Mega Weapon Piece',
      'Mega Handle Piece',
      'Ocean Fragment',
      "Hydra's Bane",
      'Cursed Artifact',
    ],
    source: 'Weapons Master',
  },
  'Runic Bow': {
    id: 'Runic Bow',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.FORGED,
    icon: 'BTNRunestoneLongbow',
    description:
      'By disenchanting the powers of the essences stored from evil and purifying the Dark Bow, it has harnessed into a bow that grants the wielder stronger aim and ease of use.',
    effects: ['+800 Agility', '+20% Attack speed'],
    crafting: [
      'Dark Bow',
      'Diabolic Orb',
      'Cursed Artifact',
      'Sealed Demise',
      "Harbinger's Essence",
      'Golden Fragment',
    ],
    source: 'Weapons Master',
  },
  'The Executioner': {
    id: 'The Executioner',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.FORGED,
    icon: 'BTNINV_Weapon_Halberd_11',
    description:
      'This Decapitator was made for one sole purpose: to execute all who dare oppose the wielder.',
    effects: ['+175 Agility', '+175 Strength'],
    crafting: [
      'Rare Weapon Piece',
      'Rare Handle Piece',
      'Quicksilver Fragment',
      'Silver',
      "Hydra's Bane",
    ],
    source: 'Weapons Master',
  },
  'Song of Ice': {
    id: 'Song of Ice',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.FORGED,
    icon: 'BTNBladeoftheFrostWarrior',
    description:
      'Found in the iciest cave in Silvasia, this sword was frozen to absolute zero, making the blade very chilly.',
    effects: [
      '+1800 Damage',
      'Passive: Frost attack. Slows the target by 15%.',
    ],
    crafting: [
      'Frostbrand',
      'Ocean Fragment',
      'Sapphire',
      'Ultra Weapon Piece',
      'Ultra Handle Piece',
      'Cursed Artifact',
    ],
    source: 'Weapons Master',
  },
  Windforce: {
    id: 'Windforce',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.FORGED,
    icon: 'BTNINV_Weapon_Bow_06',
    description:
      'The Windforce is one of the most famed legendary bows ever made. Each shot from the hydra bow usually means instant death.',
    effects: [
      '+4800 Damage',
      'Active: +3000 damage for 10 seconds. Cooldown 25s.',
    ],
    crafting: [
      'Eagle Eye',
      'Ultra Weapon Piece',
      'Ultra Handle Piece',
      'Golden Fragment',
      'Diamond',
    ],
    source: 'Weapons Master',
  },
  'Paw of Lightning': {
    id: 'Paw of Lightning',
    restriction: EvoItemRestictions.SHAPESHIFTER,
    rarity: EvoRarity.FORGED,
    icon: 'BTNAdvancedStrengthOfTheWild',
    description:
      'The paws of the fabled Silvasian God of Lightning, granting immense electrifying touch.',
    effects: [
      '+900 Intelligence',
      '+20% Attack speed',
      'Active: 35% chante to deal 9000 AoE magic damage',
    ],
    crafting: [
      'Feral Totem',
      'Ultra Weapon Piece',
      'Ultra Handle Piece',
      'Sealed Demise',
      "Harbinger's Essence",
    ],
    source: 'Weapons Master',
  },
};
