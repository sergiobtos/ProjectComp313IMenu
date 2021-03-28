//Data
var nameWait = {
  name1: { Name: "Demo1" },
  name2: { Name: "Demo2" },
  name3: { Name: "Demo3" },
};

//DOM
var demo1 = document.getElementById("demo1");
var delete1Btn = document.getElementById("delete1Btn");
var assigned1Btn = document.getElementById("assigned1Btn");
//
var demo2 = document.getElementById("demo2");
var delete2Btn = document.getElementById("delete2Btn");
var assigned2Btn = document.getElementById("assigned2Btn");
//
var demo3 = document.getElementById("demo3");
var delete3Btn = document.getElementById("delete3Btn");
var assigned3Btn = document.getElementById("assigned3Btn");

demo1.innerText = nameWait.name1.Name;
//
demo2.innerText = nameWait.name2.Name;
//
demo3.innerText = nameWait.name3.Name;
//
delete1Btn.addEventListener("click", () => {
  demo1.innerText = "Deleted";
  assigned1Btn.remove();
});

assigned1Btn.addEventListener("click", () => {
  demo1.innerText = "Assigned";
  delete1Btn.remove();
});
//
delete2Btn.addEventListener("click", () => {
  demo2.innerText = "Deleted";
  assigned2Btn.remove();
});

assigned2Btn.addEventListener("click", () => {
  demo2.innerText = "Assigned";
  delete2Btn.remove();
});
//
delete3Btn.addEventListener("click", () => {
  demo3.innerText = "Assigned";
  assigned3Btn.remove();
});

assigned3Btn.addEventListener("click", () => {
  demo3.innerText = "Assigned";
  delete3Btn.remove();
});
