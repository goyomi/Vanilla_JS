function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function rspPlayer(userRsp) {
  const rsp = ["가위", "바위", "보"];
  const computerRsp = rsp[getRandomInteger(0, 2)];

  const winValue = {
    가위: "보",
    바위: "가위",
    보: "바위",
  };

  console.log("사용자가 선택한 것", userRsp);
  console.log("컴퓨터가 선택한 것", computerRsp);

  const result =
    userRsp === computerRsp
      ? "무승부"
      : winValue[userRsp] === computerRsp
        ? "승리"
        : "패배";

  if (result === "무승부") alert("무승부입니다.");
  if (result === "승리") alert("이겼습니다.");
  if (result === "패배") alert("패배하셨습니다.");
}