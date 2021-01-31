//Info event
const eventName = document.querySelector(".event-name"),
  members = document.querySelector("#members"),
  weekdays = document.querySelector("#weekdays"),
  time = document.querySelector("#time");

const occasions = getEvent() || [];

//Create event
//similarity check
document.querySelector("#create-event").addEventListener("click", (event) => {
  const dataOccasions = getEvent() || [];
  const dateInfo = dataOccasions.find((item, key) => {
    return item.weekdays === weekdays.value && item.time === time.value;
  });

  dateInfo ? 
    alert("Filed to create an event. Time slot is already booked")
    : addOccasions();
});

//create new event
function addOccasions() {
  const occasion = {
    eventName: eventName.value,
    members: members.value,
    weekdays: weekdays.value,
    time: time.value,
    id: Date.now(),
  };

  occasions.push(occasion);

  localStorage.setItem("occasion", JSON.stringify(occasions));
  location.href = "./index.html";
}

function getEvent() {
  return JSON.parse(localStorage.getItem("occasion"));
}

//button canle
document.querySelector("#canle").addEventListener("click", async (event) => {
  location.href = "./index.html";
});
