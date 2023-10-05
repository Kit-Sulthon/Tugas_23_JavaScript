function Tugas(value) {
  return value >= 15;
}

let Tugas23 = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66].filter(Tugas);

console.log(Tugas23);
