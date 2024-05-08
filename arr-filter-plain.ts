const arr: Array<number | null> = [1, 2, 3, null];

arr.filter(Boolean).map((s) => {
  console.log(s);
  //          ^?
});
