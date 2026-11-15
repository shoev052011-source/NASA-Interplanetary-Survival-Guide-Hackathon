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
