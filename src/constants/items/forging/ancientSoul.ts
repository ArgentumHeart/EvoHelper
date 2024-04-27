import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const ancientSoulItems: { [id: string]: EvoItem } = {
  Pandora: {
    id: 'Pandora',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: 'BTNInjusticeRing',
    description:
      'The powerful ring resulted in merging four gemstones into one. Aside from its shimmering glow, the ring has imbued power within it and is capable on enhancing the wielder in every aspect.',
    effects: [
      '+675 Intelligence',
      '+5% Cooldown reduction',
      'Active: Deals [20 000 + 20% Max MP] Pure Damage to enemies within 550 AOE. Cooldown 30s.',
    ],
    crafting: ['Tome of the Unlife', 'Emerald', 'Sapphire', 'Amethyst', 'Ruby'],
    source: 'Ancient Soul',
  },
  'Hell Diamond': {
    id: 'Hell Diamond',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'BTNBlood_Stone',
    description:
      'A blood diamond in its purest form. With the powers of the ruby infused in it, it is capable of granting inner vitality and power to its wielder.',
    effects: ['+250 All stats', '+5% Cooldown reduction'],
    crafting: [
      'Blood Diamond',
      'Phoenix Stone',
      'Blood Fragment',
      'Ruby',
      'Diabolic Orb',
      'Cursed Artifact',
    ],
    source: 'Ancient Soul',
  },
  'Summoning Codex': {
    id: 'Summoning Codex',
    restriction: EvoItemRestictions.DRUID,
    rarity: EvoRarity.FORGED,
    icon: 'BTNBookOfAncientKnowledge',
    description:
      'The book of the forbidden idol, Song. It contains sacred texts and mysterious pages which have codes written on summoning mystical creatures.',
    effects: [
      '+425 All stats',
      '+5% Cooldown reduction',
      'Active: Summons an Elemental for 60 seconds. Cooldown 60s.',
    ],
    crafting: [
      'Hell Diamond',
      'Nature Fragment',
      'Ocean Fragment',
      'Amethyst',
      'Ruby',
    ],
    source: 'Ancient Soul',
  },
  'Windtalker': {
    id: 'Windtalker',
    restriction: EvoItemRestictions.CHUNIN,
    rarity: EvoRarity.FORGED,
    icon: 'BTNWindGlove',
    description:
      'The glove of elite ninjas, enhancing grip and makes wielding kunais easier.',
    effects: [
      '+1075 Agility',
      '+5% Cooldown reduction',
      'Passive: Shunpo deals additional 75% damage.',
    ],
    crafting: [
      'Contúirteacha',
      'Mythical Handle Piece',
      'Mega Handle Piece',
      'Sealed Demise',
      "Harbinger's Essence",
      'Diamond',
    ],
    source: 'Ancient Soul',
  },
  'Magic Mirror': {
    id: 'Magic Mirror',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'BTNMagicMirror',
    description:
      'The magical tool used by heroes to exit the dark reflection of the present time.',
    effects: [
      '+400 All stats',
      '+50 Armor',
      "Active: Toggles between 'all attacks' or 'boss-only attacks' for passive to proc.",
      'Passive: Negate one instance of Physical Damage and grants 800 Armor for 2.5 seconds. Cooldown 30s.',
    ],
    crafting: [
      "Hades' Artifact",
      'Cursed Artifact',
      'Sealed Demise',
      "Harbinger's Essence",
      'Golden Fragment',
      'Diamond',
    ],
    source: 'Ancient Soul',
  },
  "Tainted Neptune's Eye": {
    id: "Tainted Neptune's Eye",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'BTNEyeOfDalaran',
    description:
      "Forged with the Harbinger's Essence, the Eye of Neptune's full power is unlocked.",
    effects: [
      '+15 000 Health',
      '+11 500 Mana',
      'Active: Blocks all incoming Magic Damage for the next 5 seconds. Cooldown 40s.',
    ],
    crafting: [
      'Ocean Fragment',
      'Amethyst',
      "Neptune's Eye",
      'Ultra Armor Piece',
      "Harbinger's Essence",
      'Diamond',
    ],
    source: 'Ancient Soul',
  },
};
