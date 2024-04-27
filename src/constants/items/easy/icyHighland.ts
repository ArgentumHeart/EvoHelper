import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const icyHighlandItems: { [id: string]: EvoItem } = {
  // Icy Highland
  'Sharp Claws': {
    id: 'Sharp Claws',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.COMMON,
    icon: 'BTNClawsOfAttack',
    description: 'These sharp claws remind the user of sharp fingernails.',
    effects: ['+15 Damage'],
    source: 'Icy Highland',
  },
  'Blackpowder Musket': {
    id: 'Blackpowder Musket',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.UNCOMMON,
    icon: 'BTNHumanMissileUpOne',
    description:
      'This musket uses black gunpowder - not a powerful choice, but certainly usable.',
    effects: ['+22 Damage'],
    source: 'Icy Highland',
  },
  'Crystal Wand': {
    id: 'Crystal Wand',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.UNCOMMON,
    icon: 'BTNPriestAdept',
    description:
      'The crystal etched at the top of the aelderwood glows brightly, giving the user a sense of tranquility.',
    effects: ['+10 Damage', '+15 Intelligence'],
    source: 'Icy Highland',
  },
  'Elderwood Bow': {
    id: 'Elderwood Bow',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.UNCOMMON,
    icon: 'BTNImprovedBows',
    description:
      'This bow is made of Elderwood - a rare material found in the Elderwood Forests; hence the name.',
    effects: ['+15 Damage', '+6 Agility'],
    source: 'Icy Highland',
  },
  'Moon Armor': {
    id: 'Moon Armor',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.UNCOMMON,
    icon: 'BTNMoonArmor',
    description:
      'This armor was crafted with the sole purpose of advanced defence.',
    effects: ['+11 Armor'],
    source: 'Icy Highland',
  },
  'Superior Wand': {
    id: 'Superior Wand',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.UNCOMMON,
    icon: 'BTNWitchDoctorAdept',
    description:
      'This wand has a cut above the average wands sold on the market - it is sharper and more durable.',
    effects: ['+6 Damage', '+200 Mana'],
    source: 'Icy Highland',
  },
  'Frostfang': {
    id: 'Frostfang',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.RARE,
    icon: 'BTNThoriumMelee',
    description:
      'This powerful blade glows with an innate blue energy, and is cold to the touch.',
    effects: ['+40 Damage', 'Passive: Frost attack. Slows the target by 15%.'],
    source: 'Icy Highland',
  },
  'Frost Shield': {
    id: 'Frost Shield',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.RARE,
    icon: 'BTNThoriumArmor',
    description:
      'This shield was rumored to have been taken by the arctic wolves of the north, and were never seen again...until now.',
    effects: ['+20 Armor'],
    source: 'Icy Highland',
  },
};
