const Shaan = {
  name: 'Shaan',
  sirName: 'Zaman',
  age: 1
}

const Daniya = {
  name: "Daniya",
  sirName: "Zaman",
  age: 5,
};

function dice(state) {
  console.log(`${this.name} ${state} !`);
}

dice.call(Daniya, "Won");