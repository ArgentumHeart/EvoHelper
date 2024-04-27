import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const angelCloudsItems: { [id: string]: EvoItem } = {
  'Corrupted Crystal': {
    id: 'Corrupted Crystal',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'BTNBlackPlague',
    description:
      'The ultimate essence of corruption. It haunts the soul of the wielder, granting absolute protection.',
    effects: ['+15 000 Health', '+30% Spell resist'],
    crafting: [
      'Soul Crystal',
      "Harbinger's Essence",
      'Ultra Armor Piece',
      'Mantle of Darkness',
      'Diamond',
    ],
    source: 'Angel of Clouds',
  },
  "Esper's Ring": {
    id: "Esper's Ring",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: 'BTNINV_Jewelry_Ring_05',
    description:
      'Made with the finest gemstones ever to be discovered, this ring grants great presence of mind to the bearer.',
    effects: [
      '+750 Intelligence',
      '+150 Armor',
      'Active: Restores [10% Max + 50% Int] Mana. Cooldown 12s.',
    ],
    crafting: [
      "Duriel's Shell",
      'Sapphire',
      'Energy Wand',
      'Ruby',
      'Diamond',
      'Blessing of Darkness',
    ],
    source: 'Angel of Clouds',
  },
  'Darkforge Plate': {
    id: 'Darkforge Plate',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.FORGED,
    icon: 'BTNBlackArmor',
    description:
      'Forged in the deepest pits of hell, this plate is more durable than the materials found in Silvasia.',
    effects: ['+300 Armor', 'Passive: Reduce dmg taken from attacks by 10%.'],
    crafting: [
      'Black Hades',
      'Ultra Armor Piece',
      'Ruby',
      "Harbinger's Essence",
      'Mantle of Darkness',
    ],
    source: 'Angel of Clouds',
  },
  Hyperion: {
    id: 'Hyperion',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.FORGED,
    icon: 'BTNEldarArmor',
    description:
      'As titans fell, the world was shattered. The remains of the almighty titan Hyperion is used by the finest blacksmiths in Silvasia to craft this armor that resembles his force.',
    effects: [
      '+600 Agility',
      '+150 Armor',
      'Passive: Prevents the wielder from taking Physical Damage above 40% of Max HP.',
    ],
    crafting: [
      'Mythical Armor Piece',
      'Blessing of Darkness',
      'Golden Fragment',
      'Diamond',
    ],
    source: 'Angel of Clouds',
  },
  'Mystral Staff': {
    id: 'Mystral Staff',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: 'BTNArcaneStaff',
    description:
      'A mysterious glowstaff used by dark casters to manipulate shadow magic.',
    effects: ['+900 Intelligence', '+60 Mana Regen', '+10% Cooldown reduction'],
    crafting: [
      'Hand of Blessed Light',
      'Sealed Demise',
      'Ultra Weapon Piece',
      'Ultra Handle Piece',
      'Amethyst',
      'Mantle of Darkness',
    ],
    source: 'Angel of Clouds',
  },
  'Glow Orb': {
    id: 'Glow Orb',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'BTNOrb',
    description: 'The orb that contains the power of the elements.',
    effects: ['+400 All stats', '+10% Cooldown reduction'],
    crafting: ['Hell Diamond', 'Ruby', 'Diamond', 'Blessing of Darkness'],
    source: 'Angel of Clouds',
  },
  Vagabond: {
    id: 'Vagabond',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: 'BTNAmethystRing',
    description:
      'An elegant ring, found in the Land of Mystery to guide wanderers through the mysterious nights by its shimmering glow.',
    effects: [
      '+1000 Intelligence',
      '+30 Mana Regen',
      '+10% Cooldown reduction',
      'Active: Deals [32,500 + 32.5% Max MP] Pure Damage to enemies within 550 AOE. Cooldown 30s',
    ],
    crafting: [
      'Pandora',
      'Amethyst',
      'Sealed Demise',
      "Harbinger's Essence",
      'Diamond',
      'Blessing of Darkness',
    ],
    source: 'Angel of Clouds',
  },
  Cryocell: {
    id: 'Cryocell',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.FORGED,
    icon: 'BTNRuneBladeFrost',
    description:
      'Used by the Conqueror of Ice in the Battle of Glacier Mountain, this is the symbol of their triumph against the fire nation.',
    effects: [
      '+4400 Damage',
      '+8800 Health',
      'Active: Steals 1.5% Max HP of target and slows AS and MS by 50% for 3 seconds. Cooldown 40s',
      'Passive: Slows the target by 15%.',
    ],
    crafting: [
      'Song of Ice',
      'Blade of the Ruined King',
      'Sapphire',
      'Draconic Trinity',
    ],
    source: 'Angel of Clouds',
  },
  Destruction: {
    id: 'Destruction',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: 'BTNGrimSeal',
    description:
      'When the dragons fell against humanity, their powers were gathered and harnessed by the Lord of Magic and put in this staff as the symbol of destruction.',
    effects: [
      '+1275 Intelligence',
      '+5% Cooldown reduction',
      'Passive: Spellcast grants 1 Stack, at 3 Stacks, the next basic attack deals [14,000 + 70% Int] Pure Damage in a huge area.',
    ],
    crafting: [
      "Bethrezen's Flame",
      'Ruby',
      'Diabolic Orb',
      "Harbinger's Essence",
      'Mystery',
      'Draconic Trinity',
    ],
    source: 'Angel of Clouds',
  },
  Malevolent: {
    id: 'Malevolent',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.FORGED,
    icon: 'BTNMongooseBlade',
    description:
      'The corrupted assassin blade. Crafted with evil intent, mortals lose their will by wielding this sword.',
    effects: [
      '+900 Agility',
      '+30% Attack speed',
      "Passive: Each hit reduces enemy's armor by 1 for 5 seconds(Max: 20).",
    ],
    crafting: [
      'Phantom Dancer',
      'Sealed Demise',
      'Mantle of Darkness',
      'Blessing of Darkness',
      'Mythical Weapon Piece',
      'Draconic Trinity',
    ],
    source: 'Angel of Clouds',
  },
  'Storm Sanctuary': {
    id: 'Storm Sanctuary',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'BTNStormShield',
    description:
      'The magical tool used by heroes to exit the dark reflection of the present time.',
    effects: [
      '+500 All stats',
      '+75 Armor',
      "Active: Toggles between 'all attacks' or 'boss-only attacks' for passive to proc.",
      'Passive: Negate one instance of Physical Damage and grants 1,200 Armor for 2.5 seconds. Cooldown 25s.',
    ],
    crafting: [
      'Magic Mirror',
      "Harbinger's Essence",
      'Mythical Armor Piece',
      'Mantle of Darkness',
      'Blessing of Darkness',
      'Draconic Trinity',
    ],
    source: 'Angel of Clouds',
  },
};
