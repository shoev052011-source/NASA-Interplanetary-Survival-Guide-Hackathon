# NASA Interplanetary Survival Guide - Gale Crater VR & Telemetry HUD

An interactive 3D WebVR / WebGL survival and terrain navigation system built for the **NASA Interplanetary Survival Guide Hackathon**. This application allows astronauts and mission planners to explore real Curiosity Rover sites inside **Gale Crater, Mars**, visualize 3D terrain hazards, and plot safe traverse pathways in real time.

## Key Features
* **4 Real Gale Crater Exploration Sites:** Switch seamlessly between **Bradbury Landing**, **Pahrump Hills**, **Marias Pass**, and **Murray Buttes** with accurate coordinates and elevation telemetry.
* **3D Hazard Detection Layer:** Toggleable 3D spatial hazard bounding boxes highlighting steep slopes, sharp ridges, cliffs, and loose trenches.
* **Safe Traverse Pathways:** Toggleable 3D navigation corridors showing optimal rover/astronaut travel routes across hazardous Martian terrain.
* **Interactive Mission Control HUD:** Real-time telemetry readout with clean default-off layer management for unobstructed initial surface observation.

## How We Built It (Tech Stack)
* **3D & WebVR Rendering:** Built using **A-Frame (v1.0.4)** and **Three.js / WebGL** for cross-platform 3D rendering in the browser.
* **Frontend & Telemetry UI:** Custom HTML5, CSS3, and vanilla JavaScript for dynamic scene state updates and real-time coordinate switching.
* **Deployment & Version Control:** Hosted live on **Vercel** with continuous deployment connected to **GitHub**.

## AI Tools & Attribution
In accordance with hackathon transparency guidelines, AI tools were used as coding and debugging collaborators during development:
* **Google Gemini:** Used for pair-programming, debugging A-Frame/Three.js 3D layer rendering, writing custom HUD toggle scripts, and troubleshooting Git/PowerShell deployment workflows.

## How to Run Locally
1. Clone this repository: git clone https://github.com/shoev052011-source/NASA-Interplanetary-Survival-Guide-Hackathon.git
2. Serve the public directory: python -m http.server 3002 --directory public
3. Open http://127.0.0.1:3002 in Google Chrome.

---

## 🛰️ Curiosity Rover Specs & Milestones
* **Weight Difference:** Curiosity weighs 1,982 lbs (899 kg) on Earth, but only 743 lbs (337 kg) in Mars's lower gravity. *(Source: Wikipedia — https://en.wikipedia.org/wiki/Curiosity_(rover))*
* **Distance Traveled:** Since landing in August 2012, the rover has driven over 23.7 miles (38.16 km) across the Martian surface as of late 2026. *(Source: NASA Mars Science Laboratory — https://science.nasa.gov/mission/msl-curiosity/)*
* **Elevation Climbed:** In August 2026, Curiosity achieved a massive milestone by reaching a 1-kilometer elevation gain as it climbed up the slope of Mount Sharp. *(Source: NASA Mars Science Laboratory — https://science.nasa.gov/mission/msl-curiosity/)*
* **Speed Limits:** The rover's top speed is about 90 meters (300 feet) per hour, though it averages roughly 30 meters (98 feet) per hour while navigating hazards. *(Source: Wikipedia — https://en.wikipedia.org/wiki/Curiosity_(rover))*
* **Drill Sampling:** The rover has used the drill on its robotic arm to successfully collect 42 powderized rock samples. *(Source: NASA Mars Science Laboratory — https://science.nasa.gov/mission/msl-curiosity/)*

## ☄️ Gale Crater Terrain & History
* **Massive Scale:** Gale Crater is a massive impact basin spanning 154 kilometers (96 miles) in diameter. *(Source: Wikipedia — https://en.wikipedia.org/wiki/Gale_(crater))*
* **Central Peak:** Mount Sharp (officially named Aeolis Mons) rises directly from the middle of the crater basin. *(Source: Wikipedia — https://en.wikipedia.org/wiki/Gale_(crater))*
* **Ancient Water:** The crater contains extensive evidence of past water, including mudcracks, ancient streambeds, and wave ripples indicating shallow water that may have been up to 2 meters deep. *(Source: NASA Science — https://science.nasa.gov/resource/curiosity-rover-report-august-5-2015-three-years-on-mars/)*
* **Organic Discoveries:** The rover has discovered carbon-containing organic molecules and nitrogen in forms usable to life, suggesting the crater could have once sustained living organisms. *(Source: NASA Mars Science Laboratory — https://science.nasa.gov/mission/msl-curiosity/)*

## ⚠️ Environmental Hazards in Gale Crater
* **Wheel-Shredding Ventifacts:** Curiosity has sustained significant punctures, cracks, and tears in its 0.75mm-thick aluminum wheels due to "ventifacts" — small, highly sharpened, wind-sculpted pointy rocks embedded in the Martian sand. *(Source: The Planetary Society — https://www.planetary.org/articles/08190630-curiosity-wheel-damage)*
* **Treacherous Sand Traps:** Areas of cohesionless sand (like the "Hidden Valley" dune field) pose a severe risk of permanently trapping the rover; Curiosity experiences substantial wheel slip when trying to climb sandy slopes steeper than 10 degrees. *(Source: NASA "On a Mission" Podcast — https://www.nasa.gov/podcasts/on-a-mission/how-to-drive-a-mars-rover-s4e8/)*
* **Cosmic & Solar Radiation:** Without Earth's thick atmosphere and magnetic field, Gale Crater is bathed in intense radiation. The rover's Radiation Assessment Detector (RAD) measures a biological dose equivalent of about 0.52 millisieverts per day (mSv/d), highlighting a major life-limiting hazard for future human exploration. *(Source: NASA Mars Science Laboratory — https://science.nasa.gov/mission/msl-curiosity/)*
* **High-Energy UV Exposure:** The surface is subjected to intense Ultraviolet (UV) radiation (composed of roughly 5% UVC, 15% UVB, and 80% UVA), requiring thick planetary shielding or habitats to protect future astronauts. *(Source: National Library of Medicine — https://pmc.ncbi.nlm.nih.gov/articles/PMC12130865/)*
