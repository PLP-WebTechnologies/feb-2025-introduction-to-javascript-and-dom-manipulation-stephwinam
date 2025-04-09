function changeText() {
    const heading = document.getElementById("main-heading");
    heading.textContent = "You changed the heading! 🎉";
  }
  
  function changeStyle() {
    const description = document.getElementById("description");
    description.style.color = "teal";
    description.style.fontSize = "1.5rem";
    description.style.fontWeight = "bold";
  }
  
  function addElement() {
    const container = document.getElementById("container");
    const newPara = document.createElement("p");
    newPara.textContent = "This paragraph was added dynamically!";
    newPara.style.color = "teal";
    newPara.className = "dynamic";
    container.appendChild(newPara);
  }
  
  function removeElement() {
    const container = document.getElementById("container");
    const lastElement = container.querySelector(".dynamic");
    if (lastElement) {
      container.removeChild(lastElement);
    } else {
      alert("No element to remove!");
    }
  }
  