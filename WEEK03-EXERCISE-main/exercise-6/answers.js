function save() {
  // TODO: ให้ใช้ LocalStorage ในการบันทึก Array นี้ ด้วย key people
  const people = [
    { name: "Aariz Bennett", age: 24 },
    { name: "Najma Shaffer", age: 17 },
    { name: "Jill Schmitt", age: 32 },
    { name: "Anita Rose", age: 44 },
  ];
  let myJSON = JSON.stringify(people);
  localStorage.setItem("people", myJSON);
}

function read() {
  return JSON.parse(localStorage.getItem("people"));
}

function remove() {
  localStorage.removeItem("people");
}
