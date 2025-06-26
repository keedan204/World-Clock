function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  //Toronto
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");
  let torontoTime = moment().tz("Canada/Eastern");

  torontoDateElement.innerHTML = torontoTime.format("MMMM Do, YYYY");
  torontoTimeElement.innerHTML = torontoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
