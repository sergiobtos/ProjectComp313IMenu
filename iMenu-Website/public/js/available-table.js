//Data
var tables = {
  table1: { Table: "Table 1" },
  table2: { Table: "Table 2" },
  table3: { Table: "Table 3" },
};

//DOM
var table1 = document.getElementById("table1");
var delete1Btn = document.getElementById("delete1Btn");
//
var table2 = document.getElementById("table2");
var delete2Btn = document.getElementById("delete2Btn");
//
var table3 = document.getElementById("table3");
var delete3Btn = document.getElementById("delete3Btn");

table1.innerText = tables.table1.Table;
//
table2.innerText = tables.table2.Table;
//
table3.innerText = tables.table3.Table;
//
delete1Btn.addEventListener("click", () => {
  table1.innerText = "Deleted";
});

//
delete2Btn.addEventListener("click", () => {
  table2.innerText = "Deleted";
});

//
delete3Btn.addEventListener("click", () => {
  table3.innerText = "Deleted";
});
