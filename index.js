let i = 0;
const btn = document.querySelector(".addTask").addEventListener("click", () => {
  const task = document.querySelector(".txtInp").value; //getting task input value
  const taskDiv = document.createElement("div"); // create taskdiv
  //made dynamic class
  const getcName = Math.floor(Math.random() * 100);
  const dcName = getcName.toString();
  taskDiv.classList = `class-${dcName} align-items-center d-flex justify-content-between`
  document.querySelector(".addedTask").appendChild(taskDiv);
  const elm = document.createElement("div"); //created div to sav
  const btn = document.createElement("button");
  btn.innerHTML = "Delete"

  btn.className = `dltbtn-${i++} btn btn-danger`
  const check = document.querySelector(`.class-${dcName}`).appendChild(elm);
  elm.innerHTML = task;

  document.querySelector(`.class-${dcName}`).appendChild(btn);
  setTimeout(() => {
    document.querySelector(`dltbtn-${i}`).addEventListener("onclick", () => {
      alert("i am clicked")
    }
      , 100)


  })

});

