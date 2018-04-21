// Initialize page
const secRowID = document.getElementById('secRowID');

// Page content variables
let homePageStart = `<div class="scanBar" id="scanBarID">
<svg class="svgBox">
  <line x1="10%" y1="0" x2="10%" y2="50%" style="stroke:#000;stroke-width:1" />
  <line x1="20%" y1="0" x2="20%" y2="25%" style="stroke:#000;stroke-width:1" />
  <line x1="30%" y1="0" x2="30%" y2="37.5%" style="stroke:#000;stroke-width:1" />
  <line x1="40%" y1="25%" x2="40%" y2="50%" style="stroke:#000;stroke-width:1" />
  <line x1="50%" y1="0" x2="50%" y2="100%" style="stroke:#000;stroke-width:2" />
  <line x1="60%" y1="50%" x2="60%" y2="75%" style="stroke:#000;stroke-width:1" />
  <line x1="70%" y1="62.5%" x2="70%" y2="100%" style="stroke:#000;stroke-width:1" />
  <line x1="80%" y1="75%" x2="80%" y2="100%" style="stroke:#000;stroke-width:1" /> 
  <line x1="90%" y1="50%" x2="90%" y2="100%" style="stroke:#000;stroke-width:1" />  
  <line x1="0" y1="22.5%" x2="45%" y2="22.5%" style="stroke:#000;stroke-width:1" />
  <line x1="0" y1="23.75%" x2="25%" y2="23.75%" style="stroke:#000;stroke-width:1" />
  <line x1="0" y1="25%" x2="60%" y2="25%" style="stroke:#000;stroke-width:1" />
  <line x1="35%" y1="26.25%" x2="60%" y2="26.25%" style="stroke:#000;stroke-width:1" />
  <line x1="15%" y1="27.5%" x2="60%" y2="27.5%" style="stroke:#000;stroke-width:1" />
  <line x1="40%" y1="72.5%" x2="85%" y2="72.5%" style="stroke:#000;stroke-width:1" />
  <line x1="40%" y1="73.75%" x2="65%" y2="73.75%" style="stroke:#000;stroke-width:1" />
  <line x1="40%" y1="75%" x2="100%" y2="75%" style="stroke:#000;stroke-width:1" />
  <line x1="75%" y1="76.25%" x2="100%" y2="76.25%" style="stroke:#000;stroke-width:1" />
  <line x1="55%" y1="77.5%" x2="100%" y2="77.5%" style="stroke:#000;stroke-width:1" />
</svg>
</div>
<div class="crossBar" id="crossBarID">
<svg class="svgBox">
  <line x1="0" y1="50%" x2="100%" y2="50%" style="stroke:#000;stroke-width:2" />
</svg>
</div>
<div class="scanning" id="scanningID">
  <p class="scanText1">STAND BY:</p>
  <p class="scanText2">Scan For Awesomeness In Progress</p>
</div>
<div class="nameBox" id="nameBoxID">
<p>Phillip A. Clapham</p>
<p>====================</p>
<p>Software Developer</p>
</div>
<div class="scanComplete" id="scanCompleteID">
  <p class="scanText1 scanBlink">ATTENTION:</p>
  <p class="scanText2 scanBlink">AWESOMENESS FOUND</p>
  <br><br>
  <p class="scanText1">LOCATION:</p>
  <p class="scanText2">Currently connected client</p>
  <br><br>
  <p class="scanText1">RECOMMENDATION:</p>
  <p class="scanText2">Reach out to Phill, he's awesome too!</p>
</div>`;

// Display initial home page on site load
secRowID.innerHTML = homePageStart;

// Initialize home page animation
const scanBarID = document.getElementById('scanBarID');
const crossBarID = document.getElementById('crossBarID');
const scanningID = document.getElementById('scanningID');
const nameBoxID = document.getElementById('nameBoxID');
const scanCompleteID = document.getElementById('scanCompleteID');

setTimeout(()=> {
  // Move up namebox and crossbar
  let nameBoxPos = 50;
  nameBoxID.style.top = `${nameBoxPos}%`;
  crossBarID.style.opacity = '0.2';

  const animOneOne = setInterval(() => {
    if (nameBoxPos > 15) {
      nameBoxPos--;
      nameBoxID.style.top = `${nameBoxPos}%`;
    } else {
      clearInterval(animOneOne);
    }
  }, 30);

  // Fade out scanning
  let scanningOp = 7;
  scanningID.style.opacity = `0.${scanningOp}`;
  scanningID.style.animation = "none";

  const animOneTwo = setInterval(() => {
    if (scanningOp > 0) {
      scanningOp--;
      scanningID.style.opacity = `0.${scanningOp}`;
    } else {
      clearInterval(animOneTwo);
      scanningID.style.display = "none";
    }
  }, 30);

  // Fade In Awesomeness Found Box
  setTimeout(() => {
    let scOp = 0;
    scanCompleteID.style.display = 'inline';
    scanCompleteID.style.opacity = `0.${scOp}`;

    const animOneThree = setInterval(() => {
      if (scOp <= 9) {
        scOp++;
        if (scOp === 10) {
          scanCompleteID.style.opacity = `1.0`;
        } else {
          scanCompleteID.style.opacity = `0.${scOp}`;
        }
      } else {
        clearInterval(animOneThree);
      }
    }, 150);
  }, 1000);
    
}, 5000);