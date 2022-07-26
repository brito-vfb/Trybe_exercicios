const danoDragon = (dragon) => (Math.round(Math.random()*(dragon.strength - 15)+15));
const danoWarrior = (warrior) => (Math.round(Math.random()*(warrior.strength* warrior.weaponDmg - warrior.strength)+warrior.strength));
const danoMageCalc = (mage) => {
    if (mage.mane < 15){
        return 'Não possui mana suficiente'
    } 
    return Math.round(Math.random()*(mage.intelligence * 2 - mage.intelligence) + mage.intelligence)
};
const danoMage = (mage) => ({ dano: danoMageCalc(mage), mana: 15 });


const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};
  
const battleMembers = { mage, warrior, dragon };

const gameActions = (mage, warrior, dragon) => ({
  warriorDamage (danoWarrior) {
    const hit = danoWarrior(warrior);
    dragon.healthPoints -= hit;
    warrior.damage = hit;
  },
  mageDamage (danoMage) {
    if (danoMage(mage) !== 'Não possui mana suficiente') {
      const magic = danoMage(mage);
      dragon.healthPoints -= magic.dano;
      mage.damage = magic.dano;
      mage.mana -= magic.mana; 
    }
  },
  dragonDamage (danoDragon) {
    const dragonHit = danoDragon(dragon);
    dragon.damage = dragonHit;
    warrior.healthPoints -= dragonHit;
    mage.healthPoints -= dragonHit;
  },
  endRound () {
    battleMembers.mage = mage;
    battleMembers.warrior = warrior;
    battleMembers.dragon = dragon;
    return battleMembers;
  },
});
const round1 = gameActions(mage, warrior, dragon);

for (let index = 1; index > 0; index += 1) {
  const rounds = round1.endRound()
  if (rounds.mage.healthPoints < 1 && rounds.warrior.healthPoints < 1) {
    console.log('entrou');
    console.log(`O Dragão venceu, a batalha durou ${index} rodadas`);
    index = -1;
  } else if (rounds.dragon.healthPoints < 1) {
    console.log(`Os herois venceram, a batalha durou ${index} rodadas`);
    index = -1;
  } else {
    round1.warriorDamage(danoWarrior);    
    round1.mageDamage(danoMage);
    round1.dragonDamage(danoDragon);
    console.log(`Rodada ${index}`)
    console.log(round1.endRound());
  }
}