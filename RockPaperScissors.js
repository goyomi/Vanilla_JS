// 가위바위보 게임 함수 
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 이미지 변경관련 변수와 함수 
const randomImg = document.getElementById("randomImg");
const imgs = ['./Asset/icon_scissors.svg', './Asset/icon_rock.svg', './Asset/icon_paper.svg'];
let imgChangeTimer;
let computerChoiceIndex;

function startImgChange() {
  imgChangeTimer = setInterval(ChangeImgs, 100);
}
function stopImgChange() {
  clearInterval(imgChangeTimer);
}
function ChangeImgs() {
  computerChoiceIndex = getRandomInteger(0, 2);
  randomImg.src = imgs[computerChoiceIndex];
}

// 사용자 선택 및 게임 결과 처리 함수 
let userRsp = null;

function rspPlayer() {
  const rsp = ["scissors", "rock", "paper"];
  const computerRsp = rsp[computerChoiceIndex];

  const winValue = {
    scissors: "rock",
    rock: "scissors",
    paper: "paper",
  };

  console.log("사용자가 선택한 것", userRsp);
  console.log("컴퓨터가 선택한 것", computerRsp);

  const resultMessage =
    userRsp === computerRsp
      ? "무승부입니다."
      : winValue[userRsp] === computerRsp
        ? "이겼습니다."
        : "패배하셨습니다.";

  alert(resultMessage);
  startImgChange();
}

// 이벤트 리스너
document.querySelector('#userClicked').addEventListener("click", function (event) {
  stopImgChange();

  let clickElement = event.target;
  if (clickElement.tagName === 'IMG') {
    clickElement = clickElement.parentElement;
  }

  userRsp = clickElement.id;
  rspPlayer();
});

document.addEventListener("DOMContentLoaded", function () {
  startImgChange();
});
