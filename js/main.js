// Initialize page
const secRowID = document.getElementById('secRowID');

// Page content variables
let homePageStart = `<div class="scanBar" id="scanBarID">
<svg class="svgBox">
  <line x1="50%" y1="0" x2="50%" y2="100%" style="stroke:#000;stroke-width:2" />
</svg>
</div>
<div class="crossBar" id="crossBarID">
<svg class="svgBox">
  <line x1="0" y1="50%" x2="100%" y2="50%" style="stroke:#000;stroke-width:2" />
</svg>
</div>
<div class="scanning" id="scanningID">
  <p class="scanText1" id="scanText1ID">STAND BY:</p>
  <p class="scanText2" id="scanText2ID">User Scan In Progress</p>
  <p class="scanText2" id="scanText2ID">Complete: <span id="scanSpan">0</span>%</p>
</div>
<div class="nameBox" id="nameBoxID">
<p>Phillip A. Clapham</p>
<p>====================</p>
<p>Software Developer</p>
</div>`;

// Display initial home page on site load
secRowID.innerHTML = homePageStart;

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
}, 100);
