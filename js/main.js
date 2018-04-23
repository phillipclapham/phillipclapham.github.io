// Initialize page
let svState = false;
const navULID = document.getElementById('navULID');
const hps1 = document.getElementById('hps1');
const hps2 = document.getElementById('hps2');
const hps3 = document.getElementById('hps3');
const hps4 = document.getElementById('hps4');
const hps5 = document.getElementById('hps5');
const hps6 = document.getElementById('hps6');
const hps7 = document.getElementById('hps7');
const hps8 = document.getElementById('hps8');
const homeBArr = document.querySelectorAll('.homeB');
const svToggle = document.getElementById('svToggle');
const navID = document.getElementById('navID');
const footerID = document.getElementById('footerID');
const scanningID = document.getElementById('scanningID');
const scanText1ID = document.getElementById('scanText1ID');
const scanText2ID = document.getElementById('scanText2ID');
const scanSpan = document.getElementById('scanSpan');
const nameBoxID = document.getElementById('nameBoxID');
const crossBarID = document.getElementById('crossBarID');
const nameBox2ID = document.getElementById('nameBox2ID');
const footerText1 = document.getElementById('footerText1');
const footerText2 = document.getElementById('footerText2');

// Nav Event Listener
function homePageShift(e) {
  if (e.target.id === 'navProfileID') {
    if (!svState) {
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
    } else {
      hps6.style.display = 'block';
      let hps6Op = 0;
      hps6.style.opacity = hps6Op;

      const hpFadeIn = setInterval(() => {
        if (hps6Op < 1) {
          hps6Op = hps6Op + .01;
          hps6.style.opacity = hps6Op;
        } else {
          clearInterval(hpFadeIn);
        }
      }, 10);
    }
  }

  if (e.target.id === 'navExpID') {
    if (!svState) {
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
    } else {
      hps7.style.display = 'block';
      let hps7Op = 0;
      hps7.style.opacity = hps7Op;

      const hpFadeIn = setInterval(() => {
        if (hps7Op < 1) {
          hps7Op = hps7Op + .01;
          hps7.style.opacity = hps7Op;
        } else {
          clearInterval(hpFadeIn);
        }
      }, 10);
    }
  }

  if (e.target.id === 'navContactID') {
    if (!svState) {
      hps4.style.display = 'block';
      let hps4Op = 0;
      hps3.style.opacity = hps4Op;

      const hpFadeIn = setInterval(() => {
        if (hps4Op < 1) {
          hps4Op = hps4Op + .01;
          hps4.style.opacity = hps4Op;
        } else {
          clearInterval(hpFadeIn);
        }
      }, 10);
    } else {
      hps8.style.display = 'block';
      let hps8Op = 0;
      hps8.style.opacity = hps8Op;

      const hpFadeIn = setInterval(() => {
        if (hps8Op < 1) {
          hps8Op = hps8Op + .01;
          hps8.style.opacity = hps8Op;
        } else {
          clearInterval(hpFadeIn);
        }
      }, 10);
    }
  }
}

navULID.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    hps1.style.display = 'none';
    hps2.style.display = 'none';
    hps3.style.display = 'none';
    hps4.style.display = 'none';
    hps5.style.display = 'none';
    hps6.style.display = 'none';
    hps7.style.display = 'none';
    hps8.style.display = 'none';
    homePageShift(e);
  }
  e.stopPropagation();
});

// Home Buttom Class Event Listeners
for (let i of homeBArr) {
  i.addEventListener('click', () => {
    hps1.style.display = 'none';
    hps2.style.display = 'none';
    hps3.style.display = 'none';
    hps4.style.display = 'none';
    hps5.style.display = 'none';
    hps6.style.display = 'none';
    hps7.style.display = 'none';
    hps8.style.display = 'none';

    if (!svState) {
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
    } else {
      let hps5Op = 0;
      hps5.style.opacity = hps5Op;
      hps5.style.display = 'block';

      const hpFadeIn = setInterval(() => {
        if (hps5Op < 1) {
          hps5Op = hps5Op + .01;
          hps5.style.opacity = hps5Op;
        } else {
          clearInterval(hpFadeIn);
        }
      }, 10);
    }
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

// SV Toggle
svToggle.addEventListener('click', () => {
  if (!svState) {
    footerText1.style.display = 'none';
    footerText2.style.display = 'block';

    hps1.style.display = 'none';
    hps2.style.display = 'none';
    hps3.style.display = 'none';
    hps4.style.display = 'none';
    hps5.style.display = 'block';

    let hpsOp = 0.0;
    hps5.style.opacity = hpsOp;

    navID.style.background = "#b30000";
    footerID.style.background = "#b30000";
    nameBox2ID.style.background = "#b30000";

    const svFadeIn = setInterval(() => {
      if (hpsOp < 1) {
        hpsOp = hpsOp + .01;
        hps5.style.opacity = hpsOp;
      } else {
        clearInterval(svFadeIn);
      }
    }, 10);

    svState = true;
  } else {
    footerText1.style.display = 'block';
    footerText2.style.display = 'none';

    hps5.style.display = 'none';
    hps6.style.display = 'none';
    hps7.style.display = 'none';
    hps8.style.display = 'none';
    hps1.style.display = 'block';

    let hpsOp = 0.0;
    hps1.style.opacity = hpsOp;

    navID.style.background = "#000";
    footerID.style.background = "#000";
    nameBox2ID.style.background = "#000";

    const svFadeIn = setInterval(() => {
      if (hpsOp < 1) {
        hpsOp = hpsOp + .01;
        hps1.style.opacity = hpsOp;
      } else {
        clearInterval(svFadeIn);
      }
    }, 10);

    svState = false;
  }
});