function setup(){
    print("Attention mesdames et messieurs...");
    rollDice(6);
    rollDice(6);
    rollDice(6);
    print("Rien ne va plus les jeux sont lancés!");
}

function rollDice(diceside) {
  d = 1 + int(random(diceside));
  print("Rolling..." + d);
}
