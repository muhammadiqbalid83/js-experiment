function handleMouseOver(event) {
  console.log(event);
}

// recommend
document
  .getElementById("start")
  .addEventListener("click", function handleClick() {
    //event object
    //contains information about the event
    document.addEventListener("mouseover", handleMouseOver);
  });

document
  .getElementById("stop")
  .addEventListener("mouseover", function handleClick() {
    //event object
    //contains information about the event
    document.removeEventListener("mouseover", handleMouseOver);
  });

document.addEventListener("keyup", function (e) {
  console.log("keypress");
  console.log(e.key);
  if (e.key === "2") {
    e.preventDefault();
  }
});

document.getElementById("username").addEventListener("focus", function (event) {
  console.log("focus event happened");
});

//
