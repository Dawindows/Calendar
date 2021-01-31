// Open add event box
document.querySelector("#add-event").addEventListener("click", (event) => {
  location.href = "./event.html";
});

//create event in html
const dateEvent = JSON.parse(localStorage.getItem("occasion"));
dateEvent.forEach((item, key) => {
  let str = "";
  str = item.weekdays + "-" + item.time.replace(/(:00)/, "");
  const addContent = document.querySelector("#" + str.toLowerCase());

  addContent.innerHTML += `
      <div class="event-title">
          <span>${item.eventName}</span> 
          <button class="delete-event" onclick="deleteThis(this)" event-id="${item.id}">&times;</button>
      </div>
  `;
});

// delete event
const buttonDelete = document.querySelectorAll(".delete-event");
buttonDelete.forEach((item, i, buttonDelete) => {
  item.onclick = function deleteThis() {
    const delteId = this.getAttribute("event-id");
    const conf = confirm("you shur?");
    if (conf) {
      dateEvent.forEach((item, key) => {
        if (item.id === Number(delteId)) {
          delete dateEvent[key];
          const newDateEvent = dateEvent.filter((item) => {
            return item !== undefined && item !== null;
          });
          localStorage.setItem("occasion", JSON.stringify(newDateEvent));
          window.location.reload();
        }
      });
    }
  };
});
