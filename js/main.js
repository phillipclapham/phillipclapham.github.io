// Initialize page
const secRowID = document.getElementById('secRowID');

// Page content variables
let homePageStart = `<div class="scanBar" id="scanBarID">
<svg class="svgBox" id="svgBoxID1">
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
<svg class="svgBox" id="svgBoxID2">
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
</div>`;

// Display initial home page on site load
secRowID.innerHTML = homePageStart;

// After 15 seconds, transition home page to next animation
const firstPageJump = setTimeout(() => {
  const scanBarID = document.getElementById('scanBarID');
  const svgBoxID1 = document.getElementById('svgBoxID1');
  const svgBoxID2 = document.getElementById('svgBoxID2');
  const crossBarID = document.getElementById('crossBarID');
  const scanningID = document.getElementById('scanningID');
  const nameBoxID = document.getElementById('nameBoxID');
  
  // Fade all but nameBox, move up NameBox, and move on with initial animation
  // const firstFade = setInterval(() => {
    
  // }, 50);
}, 5000);