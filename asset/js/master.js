let storyMode = 1;
function ourStory() {
  if (storyMode % 2) {
    document.querySelector('.story > div').style.display = 'block';
  } else {
    document.querySelector('.story > div').style.display = 'none';
  }
  storyMode++;
}

let joinMode = 1;

function joinUs() {
  if (joinMode % 2) {
    document.querySelector('.join-us > div').style.display = 'block';
  } else {
    document.querySelector('.join-us > div').style.display = 'none';
  }
  joinMode++;
}

let menuMode = 1;

function openMenuHandle() {
  if (menuMode % 2) {
    document.querySelector('.mega-menu > ul').style.display = 'block';
    document.querySelector('.line-2').style.cssText =
      'transform:translateX(30px);opacity:0';
    document.querySelector('.line-1').style.cssText =
      'transform: rotate(40deg);transform-origin: left;';
    document.querySelector('.line-3').style.cssText =
      'transform: rotate(-40deg);transform-origin: left;';
  } else {
    document.querySelector('.mega-menu > ul').style.display = 'none';
    document.querySelector('.line-2').style.cssText =
      'transform:translateX(0);opacity:1';
    document.querySelector('.line-1').style.cssText =
      'transform: rotate(0deg);';
    document.querySelector('.line-3').style.cssText =
      'transform: rotate(0)';
  }

  menuMode++;
}

let showReg = 1;
function registerShowHandle() {
  if (showReg % 2) {
    document.querySelector('.register-box > div').style.cssText =
      'transform:translateX(0)';
    document.querySelector('.register-box').style.cssText =
      'opacity:1;visibility:visible';
  } else {
    document.querySelector('.register-box > div').style.cssText =
      'transform:translateX(-100%)';
    document.querySelector('.register-box').style.cssText =
      'opacity:0;visibility:hidden';
  }

  showReg++;
}

let count = 1;
function SearchToggle() {
  const searchInp = document.querySelector('header .input-groups');
  if (count % 2) {
    searchInp.classList.remove('d-none');
    searchInp.style.cssText =
      'position:absolute;left: -100%;top: 35px;';
  } else {
    searchInp.classList.add('d-none');
    searchInp.style.cssText = '';
  }

  count++;
}

function MegaMenu() {
  const items = [
    ...document.querySelectorAll('.mega-menu > ul > li'),
  ];

  items.map((value) => {
    if (value.classList.contains('d-none')) {
      value.classList.remove('d-none');
      value.classList.add('d-flex');
    } else {
      value.classList.add('d-none');
    }
  });
}

function ToggleSubMenu(event) {
  const menuStyle = window.getComputedStyle(
    event.target.nextElementSibling
  );

  if (window.innerWidth < 994) {
    if (menuStyle.display == 'none') {
      event.target.nextElementSibling.style.display = 'flex';
    } else {
      event.target.nextElementSibling.style.display = 'none';
    }
  }
}
