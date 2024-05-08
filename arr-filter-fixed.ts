import '@total-typescript/ts-reset/filter-boolean';

const a: Array<number | null> = [1, 2, 3, null];

const filtered = a.filter(Boolean);
filtered.map((s) => {
  console.log(s);
  //          ^?
});
