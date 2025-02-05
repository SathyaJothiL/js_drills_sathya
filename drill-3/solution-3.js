function f1(u) {
  let l = Object.keys(u);
  let filtr = l.filter((x) => u[x].interests[0].includes("Video Games"));
  return filtr;
}

function f2(u, country) {
  let l = Object.keys(u);
  let filtr = l.filter((x) => u[x].nationality === country);
  return filtr;
}

function f3(u) {
  let l = Object.keys(u);
  let filtr = l.filter((x) => u[x].qualification === "Masters");
  return filtr;
}

function f4(u) {
  let l = Object.keys(u);
  let mp = l.map((x) => [x, u[x].desgination]);
  let g = {};
  for (i of mp) {
    if (i[1].includes("Python")) {
      if (!g["python"]) {
        g["python"] = [];
      }
      g["python"].push(i[0]);
    }
    if (i[1].includes("Golang")) {
      if (!g["Golang"]) {
        g["Golang"] = [];
      }
      g["Golang"].push(i[0]);
    }
    if (i[1].includes("Javascript")) {
      if (!g["javascript"]) {
        g["javascript"] = [];
      }
      g["javascript"].push(i[0]);
    }
  }
  return g;
}
module.exports = { f1: f1, f2: f2, f3: f3, f4: f4 };
