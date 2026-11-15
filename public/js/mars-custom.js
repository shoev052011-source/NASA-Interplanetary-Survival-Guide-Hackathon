// NASA Gale Crater Mission Sites & Custom 3D Hazard/Safe Path Data
const marsSites = {
    bradbury: {
        name: "Bradbury Landing",
        lat: "-4.5895", lon: "137.4417", elev: "-4503m",
        hazards: [
            { x: 5, z: -10, width: 2, height: 1.5, depth: 0.5, desc: "⚠ HAZARD: HIGH SLOPE & ROCKS" },
            { x: -8, z: -15, width: 3, height: 2, depth: 0.5, desc: "⚠ HAZARD: SHARP RIDGE" },
            { x: 12, z: -20, width: 2.5, height: 1.2, depth: 0.5, desc: "⚠ HAZARD: LOOSE TRENCH" },
            { x: -5, z: -25, width: 2, height: 1.8, depth: 0.5, desc: "⚠ HAZARD: DUNE SLOPE" }
        ],
        safePaths: [
            { start: { x: 0, y: 0.1, z: 0 }, end: { x: 5, y: 0.1, z: -10 } },
            { start: { x: 5, y: 0.1, z: -10 }, end: { x: 10, y: 0.1, z: -18 } },
            { start: { x: 0, y: 0.1, z: 0 }, end: { x: -8, y: 0.1, z: -15 } },
            { start: { x: -8, y: 0.1, z: -15 }, end: { x: -12, y: 0.1, z: -22 } }
        ]
    },
    pahrump: {
        name: "Pahrump Hills",
        lat: "-4.8912", lon: "137.3621", elev: "-4420m",
        hazards: Array.from({ length: 15 }, (_, i) => ({
            x: (Math.sin(i) * 18),
            z: -5 - (i * 2),
            width: 1.5, height: 1.5, depth: 0.5,
            desc: `⚠ HAZARD: OUTCROP SLOPE #${i+1}`
        })),
        safePaths: [
            { start: { x: 0, y: 0.1, z: 0 }, end: { x: -5, y: 0.1, z: -10 } },
            { start: { x: -5, y: 0.1, z: -10 }, end: { x: -10, y: 0.1, z: -20 } },
            { start: { x: 0, y: 0.1, z: 0 }, end: { x: 6, y: 0.1, z: -12 } }
        ]
    },
    marias: {
        name: "Marias Pass",
        lat: "-4.5510", lon: "137.4012", elev: "-4580m",
        hazards: Array.from({ length: 29 }, (_, i) => ({
            x: ((i % 5) * 4) - 10,
            z: -6 - (Math.floor(i / 5) * 3),
            width: 2, height: 1.2, depth: 0.4,
            desc: `⚠ HAZARD: CLAYSTONE RIDGE #${i+1}`
        })),
        safePaths: Array.from({ length: 23 }, (_, i) => ({
            start: { x: (i % 4) * 3 - 5, y: 0.1, z: -i * 1.5 },
            end: { x: ((i + 1) % 4) * 3 - 5, y: 0.1, z: -(i + 1) * 1.5 }
        }))
    },
    murray: {
        name: "Murray Buttes",
        lat: "-4.8450", lon: "137.3890", elev: "-4490m",
        hazards: Array.from({ length: 16 }, (_, i) => ({
            x: Math.cos(i) * 15,
            z: -8 - (i * 1.8),
            width: 2.2, height: 2, depth: 0.6,
            desc: `⚠ HAZARD: BUTTE CLIFF #${i+1}`
        })),
        safePaths: Array.from({ length: 24 }, (_, i) => ({
            start: { x: Math.sin(i) * 5, y: 0.1, z: -i * 1.2 },
            end: { x: Math.sin(i+1) * 5, y: 0.1, z: -(i+1) * 1.2 }
        }))
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const siteSelect = document.getElementById('site-select');
    const toggleHazards = document.getElementById('toggle-hazards');
    const togglePaths = document.getElementById('toggle-paths');
    const telemetryBox = document.getElementById('telemetry-box');
    const marsLayers = document.getElementById('mars-layers');

    // Ensure checkboxes are explicitly OFF by default
    toggleHazards.checked = false;
    togglePaths.checked = false;

    function updateScene() {
        const currentSiteKey = siteSelect.value;
        const site = marsSites[currentSiteKey];

        // Update Telemetry HUD text
        telemetryBox.innerHTML = `
            Site: <b>${site.name}</b><br>
            Lat/Lon: ${site.lat}° S, ${site.lon}° E<br>
            Elevation: ${site.elev}<br>
            Hazards Loaded: ${site.hazards.length} | Safe Waypoints: ${site.safePaths.length}
        `;

        // Clear existing layers
        marsLayers.innerHTML = '';

        // Render Hazards ONLY if checkbox is checked
        if (toggleHazards.checked) {
            site.hazards.forEach(h => {
                const box = document.createElement('a-box');
                box.setAttribute('position', `${h.x} ${h.height/2} ${h.z}`);
                box.setAttribute('width', h.width);
                box.setAttribute('height', h.height);
                box.setAttribute('depth', h.depth);
                box.setAttribute('color', '#ff3333');
                box.setAttribute('opacity', '0.7');
                
                // Warning text above hazard
                const text = document.createElement('a-text');
                text.setAttribute('value', h.desc);
                text.setAttribute('position', `0 ${h.height/2 + 0.5} 0`);
                text.setAttribute('align', 'center');
                text.setAttribute('scale', '1.5 1.5 1.5');
                text.setAttribute('color', '#ffcccc');
                box.appendChild(text);

                marsLayers.appendChild(box);
            });
        }

        // Render Safe Paths ONLY if checkbox is checked
        if (togglePaths.checked) {
            site.safePaths.forEach(p => {
                const cylinder = document.createElement('a-cylinder');
                const dx = p.end.x - p.start.x;
                const dz = p.end.z - p.start.z;
                const length = Math.sqrt(dx*dx + dz*dz);
                const midX = (p.start.x + p.end.x) / 2;
                const midZ = (p.start.z + p.end.z) / 2;
                const angle = Math.atan2(dx, dz) * (180 / Math.PI);

                cylinder.setAttribute('position', `${midX} 0.05 ${midZ}`);
                cylinder.setAttribute('radius', '0.15');
                cylinder.setAttribute('height', length);
                cylinder.setAttribute('rotation', `90 ${angle} 0`);
                cylinder.setAttribute('color', '#00ffc8');
                cylinder.setAttribute('opacity', '0.8');

                marsLayers.appendChild(cylinder);
            });
        }
    }

    // Event Listeners
    siteSelect.addEventListener('change', updateScene);
    toggleHazards.addEventListener('change', updateScene);
    togglePaths.addEventListener('change', updateScene);

    // Initial render call
    updateScene();
});
