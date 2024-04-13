import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const imp1Items: { [id: string]: EvoItem } = {
  "Atlantean's Tome": {
    id: "Atlantean's Tome",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNSpellBookBLS',
    description: 'This tome bears the markings of an extremely powerful high templar of ages past, and contains specific instructions on how to better channel psionic forces.',
    effects: ['+800 Intelligence', '+3750 Mana', '+5% Cooldown speed'],
    source: 'City of Illusions',
    sourceShort: 'Imp 1',
    materialFor: ["Legend of Freya", "Book of Hylia", "Concentrated Energy"]
  },
  'Demonic Aggression': {
    id: 'Demonic Aggression',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNDemonicBoots2',
    description: 'During the dark age, dark dwarves forged many equipments to grant the power of destruction, this boots is one of the finest piece they created.',
    effects: [
      '+300 All stats',
      '+20% Attack speed',
      '+90 Move speed',
      'Active: Teleport to any Inn. Cooldown 30s.',
    ],
    source: 'City of Illusions',
    sourceShort: 'Imp 1',
  },
  Faith: {
    id: 'Faith',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNINV_Weapon_Bow_08',
    description: 'What could be more powerful than Windforce? Created by runewords "OhmJahLemEld", the Faith Grand Matron Bow is truly one of the most godlike bows ever created in history, cutting down all its opponents with ease.',
    effects: ['+4000 Damage', '+15% Attack speed'],
    source: 'City of Illusions',
    sourceShort: 'Imp 1',
    materialFor: ['Soulshot']
  },
  "Neptune's Eye": {
    id: "Neptune's Eye",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTN_CR_wGem',
    description: 'This beautiful gem is rumoured to be the eye of the famous god of whales, Neptune. Therefore, it is of no surprise why the carrier\'s vitality becomes as colossal as Neptune himself.',
    effects: ['+11 000 Health', '+8250 Mana'],
    source: 'City of Illusions',
    sourceShort: 'Imp 1',
    materialFor: ["Tainted Neptune's Eye"]
  },
  'The Grandfather': {
    id: 'The Grandfather',
    restriction: EvoItemRestictions.SWORDSMAN,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNINV_Weapon_Halberd_10',
    description: '',
    effects: ['+1600 Damage', '+200 Armor'],
    source: 'City of Illusions',
    sourceShort: 'Imp 1',
    materialFor: ['Blinding Light of Destiny']
  },
  'The Patriarch': {
    id: 'The Patriarch',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNINV_Sword_25',
    description: 'This powerful sword is widely known for the Battle of the Gods, where it was used to strike down Mars himself.',
    effects: [
      '+4000 Damage',
      'Passive: 70% chance to deal 3x Physical Damage.',
    ],
    source: 'City of Illusions',
    sourceShort: 'Imp 1',
    materialFor: ['Cruel Blade']
  },
  "Winter's Heart": {
    id: "Winter's Heart",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.LEGENDARY,
    icon: 'BTNheartofwinterGS',
    description: 'Legend has it that Winter encased all of her inner energies within this beautiful sapphire amulet. The amulet itself seems cold to the touch.',
    effects: ['+800 Intelligence', '+80 Mana Regen', '+5% Cooldown speed'],
    source: 'City of Illusions',
    sourceShort: 'Imp 1',
    materialFor: ["Winter's Soul"]
  },
  'Blessing of Darkness': {
    id: 'Blessing of Darkness',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'BTNAstral_Blessing',
    description: 'The blessing of the corrupted Doppelganger.',
    effects: [],
    source: 'City of Illusions',
    sourceShort: 'Imp 1',
    materialFor: ["Esper's Ring", "Hyperion", "Glow Orb", "Vagabond", "Malevolent", "Storm Sanctuary", "Deathgazer", "Blade of Despair", "Mystery", "Eve", "Drakath's Armor", "Necrotic Sword of Doom"]
  },
  'Mantle of Darkness': {
    id: 'Mantle of Darkness',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'BTNNazgulRider',
    description:
      'The mantle of Nazgul the Rider. It was infamous because of its unique mysterious characteristics that enables the wielder to blend with the shadow.',
    effects: [],
    source: 'City of Illusions',
    sourceShort: 'Imp 1',
    materialFor: ["Paw of Lightning", "Darkforge Plate", "Mystral Staff", "Malevolent", "Storm Sanctuary", "Book of Hylia", "Sword of the Occult", "Concentrated Energy", "Mystery", "Link to the Past", "Titan's Mitt"]
  },
  'Sphere of Doom': {
    id: 'Sphere of Doom',
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'SphereOfDoom',
    description: 'Misery.',
    effects: [],
    source: 'City of Illusions',
    materialFor: ["Everlasting Youth", "Sovereign Sword", "Crisis Core", "Drakath's Armor", "Moon Pearl", "Necrotic Sword of Doom", "Sinister Staff", "Sword of Akasha", "Ungodly Reaper of Nulgath"]
  },
};
