//Data
var orders = {
  order1: { Name: "Demo1", Table: "Table 1" },
  order2: { Name: "Demo2", Table: "Table 2" },
  order3: { Name: "Demo3", Table: "Table 3" },
};

//DOM
var demo1 = document.getElementById("demo1");
var table1 = document.getElementById("table1");
var delete1Btn = document.getElementById("delete1Btn");
var done1Btn = document.getElementById("done1Btn");
//
var demo2 = document.getElementById("demo2");
var table2 = document.getElementById("table2");
var delete2Btn = document.getElementById("delete2Btn");
var done2Btn = document.getElementById("done2Btn");
//
var demo3 = document.getElementById("demo3");
var table3 = document.getElementById("table3");
var delete3Btn = document.getElementById("delete3Btn");
var done3Btn = document.getElementById("done3Btn");

demo1.innerText = orders.order1.Name;
table1.innerText = orders.order1.Table;
//
demo2.innerText = orders.order2.Name;
table2.innerText = orders.order2.Table;
//
demo3.innerText = orders.order3.Name;
table3.innerText = orders.order3.Table;
//
delete1Btn.addEventListener("click", () => {
  demo1.innerText = "Deleted";
  table1.innerText = "Deleted";
  done1Btn.remove();
});

done1Btn.addEventListener("click", () => {
  demo1.innerText = "Completed";
  table1.innerText = "Completed";
  delete1Btn.remove();
});
//
delete2Btn.addEventListener("click", () => {
  demo2.innerText = "Deleted";
  table2.innerText = "Deleted";
  done2Btn.remove();
});

done2Btn.addEventListener("click", () => {
  demo2.innerText = "Completed";
  table2.innerText = "Completed";
  delete2Btn.remove();
});
//
delete3Btn.addEventListener("click", () => {
  demo3.innerText = "Deleted";
  table3.innerText = "Deleted";
  done3Btn.remove();
});

done3Btn.addEventListener("click", () => {
  demo3.innerText = "Completed";
  table3.innerText = "Completed";
  delete3Btn.remove();
});
