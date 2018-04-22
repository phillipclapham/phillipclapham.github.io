// Initialize page
const navULID = document.getElementById('navULID');
const hps1 = document.getElementById('hps1');
const hps2 = document.getElementById('hps2');
const hps3 = document.getElementById('hps3');
const hps4 = document.getElementById('hps4');
const homeBArr = document.querySelectorAll('.homeB');

// Nav Event Listener
function homePageShift(e) {
  if (e.target.id === 'navProfileID') {

    hps2.style.display = 'block';
    let hps2Op = 0;
    hps2.style.opacity = hps2Op;

    const hpFadeIn = setInterval(() => {
      if (hps2Op < 1) {
        hps2Op = hps2Op + .01;
        hps2.style.opacity = hps2Op;
      } else {
        clearInterval(hpFadeIn);
      }
    }, 10);
  }

  if (e.target.id === 'navExpID') {

    hps3.style.display = 'block';
    let hps3Op = 0;
    hps3.style.opacity = hps3Op;

    const hpFadeIn = setInterval(() => {
      if (hps3Op < 1) {
        hps3Op = hps3Op + .01;
        hps3.style.opacity = hps3Op;
      } else {
        clearInterval(hpFadeIn);
      }
    }, 10);
  }

  if (e.target.id === 'navContactID') {

    hps4.style.display = 'block';
    let hps4Op = 0;
    hps4.style.opacity = hps4Op;

    const hpFadeIn = setInterval(() => {
      if (hps4Op < 1) {
        hps4Op = hps4Op + .01;
        hps4.style.opacity = hps4Op;
      } else {
        clearInterval(hpFadeIn);
      }
    }, 10);
  }
}

navULID.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    hps1.style.display = 'none';
    hps2.style.display = 'none';
    hps3.style.display = 'none';
    hps4.style.display = 'none';
    homePageShift(e);
  }
  e.stopPropagation();
});

// Home Buttom Class Event Listeners
for (let i of homeBArr) {
  i.addEventListener('click', (e) => {
    hps2.style.display = 'none';
    hps3.style.display = 'none';
    hps4.style.display = 'none';

    let hps1Op = 0;
    hps1.style.opacity = hps1Op;
    hps1.style.display = 'block';

    const hpFadeIn = setInterval(() => {
      if (hps1Op < 1) {
        hps1Op = hps1Op + .01;
        hps1.style.opacity = hps1Op;
      } else {
        clearInterval(hpFadeIn);
      }
    }, 10);
  });
}

// Scan animation
function scanComplete() {
  let xPos = 50;
  nameBoxID.style.top = `${xPos}%`;
  crossBarID.style.top = `${xPos}%`;

  const moveUp = setInterval(() => {
    if (xPos > 26) {
      xPos--;
      nameBoxID.style.top = `${xPos}%`;
      crossBarID.style.top = `${xPos}%`;
    } else {
      clearInterval(moveUp);
    }
  }, 10);
  
  scanText1ID.style.animation = 'none';
  scanText2ID.style.animation = 'none';
  scanningID.innerHTML = `<p class="scanText1 scanResult1" id="scanText1ID">SCAN COMPLETE</p>
  <p class="scanText2 scanResult2" id="scanText2ID">RESULTS:<br>Current user is awesome.</p>
  <p class="scanText2 scanResult2" id="scanText3ID">RECOMMENDATIONS:<br>Click the links above to find out more about me and check out my work.</p>`;
}

const scanningID = document.getElementById('scanningID');
const scanText1ID = document.getElementById('scanText1ID');
const scanText2ID = document.getElementById('scanText2ID');
const scanSpan = document.getElementById('scanSpan');
const nameBoxID = document.getElementById('nameBoxID');
const crossBarID = document.getElementById('crossBarID');

let ssNum = 0;

const completePerc = setInterval(() => {
  if (ssNum < 100) {
    ssNum++;
    scanSpan.innerText = ssNum;
  } else {
    scanComplete();
    clearInterval(completePerc);
  }
}, 50);
