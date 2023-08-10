const check = document.querySelector(".check");
const message = document.querySelector(".message");
const again = document.querySelector(".again");
const secretnumber = Math.trunc(Math.random() * 20) + 1;
const allmMssage = function (message2) {
  document.querySelector(".message").textContent = message2;
};
let score = 20;
let highscore = 0;

check.addEventListener("click", () => {
  const testPlay = Number(document.querySelector(".guess").value);

  if (!testPlay) {
    allmMssage(`no Number`);
  } else if (testPlay === secretnumber) {
    allmMssage(`corret Number`);
    document.querySelector(".number").textContent = secretnumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "40rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (testPlay !== secretnumber) {
    allmMssage(testPlay > secretnumber ? `hight Number🧨` : `low Number🧨`);
    score--;
    document.querySelector(".score").textContent = score;
    if (score < 1) {
      document.querySelector(".score").textContent = 0;
      message.textContent = `game Over`;
    }
  }
});

again.addEventListener("click", () => {
  score = 20;
  document.querySelector(".number").textContent = `?`;
  document.querySelector("body").style.backgroundColor = `#222`;
  message.textContent = `Start guessing...`;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = " ";
});
