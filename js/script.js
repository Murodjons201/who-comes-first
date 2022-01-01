let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elPeople = document.querySelector(".people");
let elBicycle = document.querySelector(".bicycle");
let elCar = document.querySelector(".car");
let elPlane = document.querySelector(".plane");
let elError = document.querySelector(".error");

const peopleHowLongWalk = function (num) {
  let peopleSpeedHour = Math.floor(num / 3.6);
  let peopleSpeedMinutes = (num / 3.6 - peopleSpeedHour).toFixed(1) * 60;
  return `${peopleSpeedHour}-h va ${peopleSpeedMinutes}-m`;
};

const bicycleHowLongWalk = function (num) {
  let bicycleSpeedHour = Math.floor(num / 20.1);
  let bicycleSpeedMinutes = (num / 20.1 - bicycleSpeedHour).toFixed(1) * 60;
  return `${bicycleSpeedHour}-h va ${bicycleSpeedMinutes}-m`;
};

const carHowLongWalk = function (num) {
  let carSpeedHour = Math.floor(num / 70);
  let carSpeedMinutes = (num / 70 - carSpeedHour).toFixed(1) * 60;
  return `${carSpeedHour}-h va ${carSpeedMinutes}-m`;
};

const planeHowLongWalk = function (num) {
  let planeSpeedHour = Math.floor(num / 800);
  let planeSpeedMinutes = (num / 800 - planeSpeedHour).toFixed(1) * 60;
  return `${planeSpeedHour}-h va ${planeSpeedMinutes}-m`;
};

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = elFormInput.value;

  if (inputValue < 0 || isNaN(inputValue)) {
    elError.textContent = "Iltimos 0 dan katta son kiriting!";
    return;
  } else {
    elError.textContent = undefined;
  }

  elPeople.textContent = peopleHowLongWalk(inputValue);
  elBicycle.textContent = bicycleHowLongWalk(inputValue);
  elCar.textContent = carHowLongWalk(inputValue);
  elPlane.textContent = planeHowLongWalk(inputValue);
});
