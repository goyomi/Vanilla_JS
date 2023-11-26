// 헤더
document.addEventListener("DOMContentLoaded", function () {
  fetch('/common/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });
});

// 푸터
document.addEventListener("DOMContentLoaded", function () {
  fetch('/common/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});

function checkId(tar, value) {
  let returnVal = false;
  if (tar.id === value || tar.parentElement.id === value) {
    returnVal = true;
  }
  return returnVal;
}

function returnTar(tar, value) {
  let returnVal = tar;
  if (tar.parentElement.id === value) {
    returnVal = tar.parentElement;
  }
  return returnVal;
}

const gnb = document.querySelector('#gnb');
const container = document.querySelector('#container');
const btnViewMenu = document.querySelector('#viewMenu');

// 메뉴 버튼
function menuClickFn(tar) {
  if (checkId(tar, 'viewMenu')) {
    const menuBtn = returnTar(tar, 'viewMenu');
    if (gnb.classList.contains('open')) {
      // 버튼 애니메이션
      const menuBtnTransitionendFunc = obj => {
        menuBtn.removeEventListener('transitionend', menuBtnTransitionendFunc);
        menuBtn.classList.remove('next_close', 'close');
      };
      menuBtn.classList.add('next_close');
      menuBtn.addEventListener('transitionend', menuBtnTransitionendFunc);
      gnb.classList.remove('open');
      // 딤드 레이어 애니메이션
      const containerTransitionendFunc = obj => {
        menuBtn.removeEventListener('transitionend', containerTransitionendFunc);
        container.classList.remove('dimed');
      };
      menuBtn.addEventListener('transitionend', containerTransitionendFunc);
      container.classList.remove('active');
    } else {
      // 버튼 애니메이션
      const menuBtnTransitionendFunc = obj => {
        menuBtn.removeEventListener('transitionend', menuBtnTransitionendFunc);
        menuBtn.classList.remove('prev_close');
        menuBtn.classList.add('close');
      };
      menuBtn.classList.add('prev_close');
      menuBtn.addEventListener('transitionend', menuBtnTransitionendFunc);
      gnb.classList.add('open');
      container.classList.add('dimed', 'active');
    }
  }
}

window.addEventListener('click', obj => {
  const tar = obj.target;
  menuClickFn(tar);
});
window.addEventListener('resize', obj => {
  if (window.matchMedia('(min-width:1024px)').matches) {
    btnViewMenu.classList.remove('close');
    gnb.classList.remove('open');
    container.classList.remove('dimed', 'active');
  }
});

