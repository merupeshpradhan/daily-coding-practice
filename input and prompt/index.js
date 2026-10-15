function detials() {
  const name = document.getElementById("name");
  const age = document.getElementById("age");
  const villageName = document.getElementById("villageName");

  alert(
    "Name:- " +
      name.value +
      " \n" +
      "Age:- " +
      age.value +
      " \n" +
      "Village name:- " +
      villageName.value,
  );
}

function insidePromptTakeInput() {
  const name = prompt("Eneter your name");
  //   const name = String(prompt("Eneter your name"));
  const age = prompt("Enter your age");
  //   const age = Number(prompt("Enter your age"));
  const villageName = String(prompt("Enter your village name"));

  console.log(typeof name);
  console.log(typeof age);
  console.log(typeof villageName);

  alert(
    "- You name is: " +
      name +
      "\n" +
      "- Your age is: " +
      age +
      "\n" +
      "- Your village name:- " +
      villageName,
  );
}
