;(function () {
  if (typeof window === 'undefined') return;
  if (window.__MARS_V3_LOADED) return;
  window.__MARS_V3_LOADED = true;

  var SITES = {
    landing: {
      name: 'Bradbury Landing (Landing Site)',
      coords: '4.5895° S, 137.4417° E',
      elev: '-4,501 m (MOLA)',
      formation: 'Aeolis Palus Alluvial Plain',
      hazardText: 'CAUTION: HIGH SLOPE SCOUR PITS & LOOSE ROCK DEBRIS',
      hazLabel: '⚠ HAZARD: HIGH SLOPE & SHARP ROCKS',
      hazards: [
        [-6.13, 0.38, 2.52], [-4.29, 1.61, 5.62],
        [-11.33, 1.75, 9.35], [-17.57, 0.30, 4.81]
      ],
      safePath: [
        [3.10, 0.87, -3.83], [7.87, 0.34, -11.33], [10.94, 0.25, -7.75],
        [13.13, 0.46, -3.41], [14.84, 0.32, 0.07], [16.71, -0.60, 1.87],
        [22.64, -0.80, 1.15], [28.05, -0.97, -0.52], [34.11, -0.91, -2.10],
        [39.93, -0.97, -4.00], [45.44, -0.92, -5.21], [50.26, -1.02, -6.89]
      ]
    },
    pahrump: {
      name: 'Pahrump Hills (Basal Mt. Sharp)',
      coords: '4.5912° S, 137.4011° E',
      elev: '-4,460 m (MOLA)',
      formation: 'Basal Mount Sharp Mudstone',
      hazardText: 'WARNING: HIGH SLOPE (>20°) & JAGGED ROCK OUTCROPS',
      hazLabel: '⚠ HAZARD: HIGH SLOPE & ROCKS',
      hazards: [
        [1.48, 0.65, 1.42], [2.53, 0.13, 4.46], [43.88, 2.12, -4.17],
        [30.54, 4.50, -14.19], [23.51, 4.69, -15.83], [-3.63, 2.55, -9.45],
        [-7.23, -0.25, 5.70], [-6.02, -3.46, 18.23], [13.61, -4.42, 41.53],
        [15.29, -5.40, 44.48], [3.18, -1.17, 6.28], [27.71, -0.49, 6.15],
        [34.46, -0.94, 10.72], [40.39, -1.38, 14.81], [34.76, -1.29, 13.80]
      ],
      safePath: [
        [-7.99, 2.43, -11.73], [-11.71, 2.45, -10.62], [-10.86, 2.01, -7.44],
        [-10.01, 1.13, -3.54], [-9.49, 0.52, 0.44], [11.86, -0.27, 1.90]
      ]
    },
    marias: {
      name: 'Marias Pass (Contact Zone)',
      coords: '4.5981° S, 137.3885° E',
      elev: '-4,425 m (MOLA)',
      formation: 'Stimson-Murray Contact',
      hazardText: 'WARNING: STEEP ESCARPMENT SLOPES & FRACTURE ROCKS',
      hazLabel: '⚠ HAZARD: HIGH SLOPE & LOOSE ROCKS',
      hazards: [
        [13.10, -0.19, 21.81], [15.81, -1.56, 25.15], [21.44, -3.12, 26.57],
        [18.88, -2.79, 30.04], [21.39, -3.83, 33.32], [9.80, -0.40, 20.79],
        [9.57, -0.37, 18.10], [38.72, -5.51, 35.43], [28.22, -6.12, 38.47],
        [26.65, -5.16, 33.23], [24.23, -3.30, 25.38], [22.98, -4.92, 36.75],
        [-20.22, 3.25, 0.27], [-15.25, 1.93, 1.32], [-9.67, 0.13, 3.53],
        [-5.58, 0.50, 5.23], [-8.73, -1.04, 11.92], [-10.19, 0.22, 12.83],
        [-14.84, 0.42, 16.68], [-18.35, 0.60, 16.00], [-18.31, 0.59, 16.00],
        [-17.84, 3.03, 5.87], [-22.22, 3.75, 3.51], [29.29, 8.57, -22.96],
        [42.18, 7.76, -30.36], [27.27, -0.15, 11.80], [27.23, -0.03, 11.61],
        [25.35, -0.86, 16.40], [23.39, -1.41, 20.19]
      ],
      safePath: [
        [-4.04, -0.95, 16.04], [0.46, -1.16, 17.61], [3.93, -1.07, 13.37],
        [7.73, -1.06, 10.80], [13.38, -0.08, 9.03], [15.40, -0.03, 12.16],
        [7.96, -0.74, 16.08], [10.55, -3.44, 33.87], [3.55, -3.96, 35.64],
        [11.11, -4.83, 39.44], [16.77, -5.53, 42.24], [7.47, -5.83, 43.33],
        [12.43, -6.26, 45.57], [17.88, -6.33, 46.02], [13.98, -7.31, 51.71],
        [7.93, -6.96, 52.22], [9.26, -7.43, 55.30], [8.13, -8.39, 56.51],
        [9.60, -7.74, 58.65], [9.72, -8.06, 60.83], [15.30, -8.07, 56.43],
        [18.28, -8.43, 59.20], [19.49, -9.55, 55.32]
      ]
    },
    murray: {
      name: 'Murray Buttes (Bagnold Dune Gap)',
      coords: '4.6382° S, 137.4019° E',
      elev: '-4,410 m (MOLA)',
      formation: 'Stimson Sandstone / Murray',
      hazardText: 'CAUTION: HIGH BUTTE TALUS SLOPES (>22°) & SHARP ROCKS',
      hazLabel: '⚠ HAZARD: HIGH SLOPE (>22°) & ROCKS',
      hazards: [
        [25.93, -1.13, 31.42], [37.13, -0.46, 37.33], [44.99, 1.11, 36.36],
        [52.68, 2.70, 35.15], [48.76, 2.96, 34.24], [42.35, 3.96, 33.56],
        [25.80, 1.22, 29.30], [-37.19, 2.15, -16.98], [-76.73, 3.88, -36.29],
        [18.85, 4.95, -1.32], [22.10, 6.69, 2.90], [33.44, 2.36, 26.42],
        [-28.47, 2.59, -23.33], [-33.14, 1.69, -16.36], [2.13, 1.41, -18.66],
        [8.78, 1.41, -18.40]
      ],
      safePath: [
        [-11.01, -2.18, 12.88], [-9.49, -1.95, 9.93], [-16.47, -2.06, 7.62],
        [-7.37, -1.23, 4.32], [-9.17, -0.63, 3.45], [-5.20, -0.43, 3.52],
        [-10.85, -1.13, 0.02], [-13.59, -0.67, -0.36], [-9.77, -0.98, -1.29],
        [-8.54, -0.53, -3.82], [-7.12, 0.15, -6.14], [-5.89, 0.40, -9.38],
        [-5.84, 0.50, -11.63], [-13.65, 0.71, -11.47], [-10.23, 1.57, -15.18],
        [-4.77, 1.50, -15.89], [-3.08, 1.27, -13.38], [0.04, 1.10, -9.73],
        [0.88, 0.68, -5.24], [-0.46, 0.69, -4.57], [-2.50, 0.32, -2.04],
        [4.34, 1.54, -3.25], [9.71, 0.46, -3.94], [9.02, 0.90, 1.51]
      ]
    }
  };

  function bootMarsV3() {
    // Continuously remove any older HUD panels or coordinate pickers from old bundles
    setInterval(function () {
      ['mars-astronaut-hud', 'mars-eva-hud-v2', 'mars-surveyor-box', 'mars-3d-labels', 'mars-3d-labels-v2'].forEach(function (id) {
        var el = document.getElementById(id);
        if (el && el.parentNode) el.parentNode.removeChild(el);
      });
    }, 250);

    if (document.getElementById('mars-eva-hud-v3')) return;

    var style = document.createElement('style');
    style.innerHTML = `
      #mars-eva-hud-v3 {
        position: fixed !important;
        top: 16px !important;
        right: 16px !important;
        width: 365px !important;
        background: rgba(8, 14, 24, 0.94) !important;
        border: 1px solid rgba(0, 229, 255, 0.7) !important;
        border-left: 4px solid #00e5ff !important;
        border-radius: 6px !important;
        color: #e4f2ff !important;
        font-family: 'Courier New', Consolas, monospace !important;
        font-size: 12px !important;
        padding: 12px 14px !important;
        z-index: 2147483647 !important;
        pointer-events: none !important;
        box-shadow: 0 8px 28px rgba(0, 0, 0, 0.85) !important;
      }
      #mars-eva-hud-v3 * { box-sizing: border-box !important; }
      .eva3-hdr {
        display: flex; justify-content: space-between; align-items: center;
        border-bottom: 1px solid rgba(0, 229, 255, 0.35);
        padding-bottom: 6px; margin-bottom: 8px;
        color: #00e5ff; font-weight: bold; font-size: 12px;
      }
      .eva3-btn {
        pointer-events: auto !important;
        background: rgba(0, 229, 255, 0.18); border: 1px solid #00e5ff;
        color: #00e5ff; font-family: inherit; font-size: 10px;
        padding: 3px 8px; cursor: pointer; border-radius: 3px;
      }
      .eva3-select-label {
        color: #ffd54f; font-size: 10.5px; font-weight: bold;
        margin-bottom: 4px; display: block;
      }
      .eva3-select {
        pointer-events: auto !important; width: 100%;
        background: rgba(0, 25, 45, 0.95); color: #00e5ff;
        border: 1px solid #00e5ff; padding: 5px 6px;
        font-family: inherit; font-size: 11.5px; font-weight: bold;
        margin-bottom: 10px; border-radius: 3px; cursor: pointer;
      }
      .eva3-row { display: flex; justify-content: space-between; margin: 4px 0; font-size: 11.5px; }
      .eva3-label { color: #90caf9; }
      .eva3-bar-bg {
        width: 100%; height: 6px; background: rgba(255, 255, 255, 0.14);
        border-radius: 3px; overflow: hidden; margin: 4px 0 8px 0;
      }
      .eva3-bar-fill {
        height: 100%; background: linear-gradient(90deg, #00e676, #00e5ff);
        width: 98.4%;
      }
      .eva3-alert {
        margin-top: 8px; padding: 6px 8px;
        background: rgba(255, 82, 82, 0.18); border: 1px solid #ff5252;
        border-radius: 4px; color: #ff8a80; font-size: 10.5px; font-weight: bold;
      }
      .eva3-layers {
        margin-top: 10px; padding-top: 8px;
        border-top: 1px solid rgba(0, 229, 255, 0.3);
        pointer-events: auto !important;
      }
      .eva3-layers-title { color: #ffd54f; font-weight: bold; font-size: 11px; margin-bottom: 6px; }
      .eva3-chk {
        display: flex; align-items: center; gap: 8px;
        margin: 6px 0 3px 0; cursor: pointer; font-size: 11.5px; font-weight: bold;
      }
      .eva3-legend { font-size: 10px; color: #b0bec5; margin-left: 22px; margin-bottom: 6px; }
      #mars-3d-labels-v3 {
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        pointer-events: none !important; z-index: 2147483646; overflow: hidden;
      }
      .mars3-tag {
        position: absolute; transform: translate(-50%, -100%);
        font-family: 'Courier New', Consolas, monospace;
        font-size: 11px; font-weight: bold; padding: 3px 8px;
        border-radius: 3px; white-space: nowrap;
        background: rgba(10, 14, 22, 0.92);
        box-shadow: 0 3px 10px rgba(0,0,0,0.85);
      }
      .mars3-tag-haz {
        color: #ff8a80; border: 1.5px solid #ff1744;
        border-left: 5px solid #ff1744;
      }
      .mars3-tag-safe {
        color: #69f0ae; border: 1.5px solid #00e676;
        border-left: 5px solid #00e676;
      }
    `;
    document.head.appendChild(style);

    var labelContainer = document.createElement('div');
    labelContainer.id = 'mars-3d-labels-v3';
    document.body.appendChild(labelContainer);

    var hud = document.createElement('div');
    hud.id = 'mars-eva-hud-v3';
    hud.innerHTML = `
      <div class="eva3-hdr">
        <span>NASA EVA HUD // GALE CRATER</span>
        <button id="eva3-toggle-btn" class="eva3-btn">HIDE</button>
      </div>
      <div id="eva3-hud-body" style="display:block;">
        <span class="eva3-select-label">CHOOSE LOCATION (SHOWS SITE HAZARDS & PATH):</span>
        <select id="eva3-site-select" class="eva3-select">
          <option value="landing">1. Bradbury Landing (Landing Site)</option>
          <option value="pahrump">2. Pahrump Hills (Basal Mt. Sharp)</option>
          <option value="marias">3. Marias Pass (Contact Zone)</option>
          <option value="murray">4. Murray Buttes (Bagnold Dune Gap)</option>
        </select>

        <div class="eva3-row"><span class="eva3-label">O2 RESERVE:</span><span id="eva3-o2">98.4% (04:12:09)</span></div>
        <div class="eva3-bar-bg"><div id="eva3-o2-bar" class="eva3-bar-fill"></div></div>

        <div class="eva3-row"><span class="eva3-label">SUIT PRESSURE:</span><span id="eva3-press">29.6 kPa (NOMINAL)</span></div>
        <div class="eva3-row"><span class="eva3-label">SUIT BATTERY:</span><span id="eva3-batt">94.0%</span></div>
        <div class="eva3-row"><span class="eva3-label">REMS EXT TEMP:</span><span id="eva3-temp">-48.2 °C (7.4 mbar)</span></div>
        <div class="eva3-row"><span class="eva3-label">RAD DOSIMETER:</span><span id="eva3-rad">0.024 mSv/h</span></div>
        <div class="eva3-row"><span class="eva3-label">COORDINATES:</span><span id="eva3-coords">4.5895° S, 137.4417° E</span></div>
        <div class="eva3-row"><span class="eva3-label">ELEVATION:</span><span id="eva3-elev">-4,501 m (MOLA)</span></div>
        <div class="eva3-row"><span class="eva3-label">GEOLOGY:</span><span id="eva3-geo">Aeolis Palus Alluvial Plain</span></div>

        <div id="eva3-hazard-box" class="eva3-alert">
          CAUTION: HIGH SLOPE SCOUR PITS & LOOSE ROCK DEBRIS
        </div>

        <div class="eva3-layers">
          <div class="eva3-layers-title">GALE CRATER 3D TERRAIN LAYERS</div>
          <label class="eva3-chk">
            <input type="checkbox" id="chk3-hazards" checked>
            <span style="color:#ff5252;">■ Red Rectangles: High Slope & Rock Hazards</span>
          </label>
          <div class="eva3-legend">3D Rectangular Zones Marking High Slopes & Rocks</div>
          <label class="eva3-chk">
            <input type="checkbox" id="chk3-safe" checked>
            <span style="color:#00e676;">● Green Route: Safe Astronaut Walking Path</span>
          </label>
          <div class="eva3-legend">Connected 3D Low-Slope Bedrock Traverse Route</div>
        </div>
      </div>
    `;
    document.body.appendChild(hud);

    var bodyEl = document.getElementById('eva3-hud-body');
    var toggleBtn = document.getElementById('eva3-toggle-btn');
    toggleBtn.addEventListener('click', function () {
      if (bodyEl.style.display === 'none') {
        bodyEl.style.display = 'block';
        toggleBtn.textContent = 'HIDE';
      } else {
        bodyEl.style.display = 'none';
        toggleBtn.textContent = 'SHOW';
      }
    });

    var rootGroup3D = null;
    var hazGroup3D = null;
    var safeGroup3D = null;
    var trackedLabels = [];
    var currentSiteKey = 'landing';

    // 100% Three.js r84 compatible 3D Red Hazard Rectangle (uses BoxGeometry & CylinderGeometry)
    function addHazardRectangleR84(group, wx, wy, wz) {
      var w = 2.6;
      var d = 1.8;

      // Semi-transparent red rectangular pad
      var padGeom = new THREE.BoxGeometry(w, 0.06, d);
      var padMat = new THREE.MeshBasicMaterial({
        color: 0xff1744,
        transparent: true,
        opacity: 0.48,
        depthTest: false
      });
      var pad = new THREE.Mesh(padGeom, padMat);
      pad.position.set(wx, wy + 0.08, wz);
      pad.renderOrder = 995;
      group.add(pad);

      // 4 glowing bright-red border bars forming the rectangle outline
      var borderMat = new THREE.MeshBasicMaterial({
        color: 0xff8a80,
        depthTest: false
      });
      var barN = new THREE.Mesh(new THREE.BoxGeometry(w, 0.10, 0.08), borderMat);
      barN.position.set(wx, wy + 0.10, wz - d / 2);
      barN.renderOrder = 996;
      group.add(barN);

      var barS = new THREE.Mesh(new THREE.BoxGeometry(w, 0.10, 0.08), borderMat);
      barS.position.set(wx, wy + 0.10, wz + d / 2);
      barS.renderOrder = 996;
      group.add(barS);

      var barE = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.10, d), borderMat);
      barE.position.set(wx + w / 2, wy + 0.10, wz);
      barE.renderOrder = 996;
      group.add(barE);

      var barW = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.10, d), borderMat);
      barW.position.set(wx - w / 2, wy + 0.10, wz);
      barW.renderOrder = 996;
      group.add(barW);

      // Vertical beacon pole holding the warning sign
      var pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.35, 12),
        new THREE.MeshBasicMaterial({ color: 0xff1744, depthTest: false })
      );
      pole.position.set(wx, wy + 0.70, wz);
      pole.renderOrder = 996;
      group.add(pole);
    }

    // 100% Three.js r84 compatible Green Waypoint + 3D Connecting Beam
    function addSafeNodeR84(group, wx, wy, wz) {
      var ring = new THREE.Mesh(
        new THREE.RingGeometry(0.32, 0.55, 28),
        new THREE.MeshBasicMaterial({
          color: 0x00e676,
          side: THREE.DoubleSide,
          depthTest: false
        })
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(wx, wy + 0.08, wz);
      ring.renderOrder = 995;
      group.add(ring);

      var core = new THREE.Mesh(
        new THREE.SphereGeometry(0.16, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0x69f0ae, depthTest: false })
      );
      core.position.set(wx, wy + 0.12, wz);
      core.renderOrder = 996;
      group.add(core);
    }

    function addSafeBeamR84(group, p1, p2) {
      var v1 = new THREE.Vector3(p1[0], p1[1] + 0.12, p1[2]);
      var v2 = new THREE.Vector3(p2[0], p2[1] + 0.12, p2[2]);
      var dist = v1.distanceTo(v2);
      if (dist < 0.05) return;

      var beamGeom = new THREE.CylinderGeometry(0.06, 0.06, dist, 10);
      beamGeom.translate(0, dist / 2, 0);
      beamGeom.rotateX(Math.PI / 2);

      var beamMat = new THREE.MeshBasicMaterial({
        color: 0x00e676,
        transparent: true,
        opacity: 0.85,
        depthTest: false
      });
      var beam = new THREE.Mesh(beamGeom, beamMat);
      beam.position.copy(v1);
      beam.lookAt(v2);
      beam.renderOrder = 995;
      group.add(beam);
    }

    function registerLabel(worldVec, text, cssClass, category) {
      var div = document.createElement('div');
      div.className = 'mars3-tag ' + cssClass;
      div.textContent = text;
      labelContainer.appendChild(div);
      trackedLabels.push({ pos: worldVec, el: div, cat: category });
    }

    function renderSiteLayers(siteKey) {
      var sceneEl = document.querySelector('a-scene');
      if (!sceneEl || !sceneEl.object3D || !window.THREE) return;

      currentSiteKey = siteKey;
      var s = SITES[siteKey] || SITES.landing;

      var cEl = document.getElementById('eva3-coords');
      var eEl = document.getElementById('eva3-elev');
      var gEl = document.getElementById('eva3-geo');
      var hEl = document.getElementById('eva3-hazard-box');
      if (cEl) cEl.textContent = s.coords;
      if (eEl) eEl.textContent = s.elev;
      if (gEl) gEl.textContent = s.formation;
      if (hEl) hEl.textContent = s.hazardText;

      // Remove any previous overlay groups or temporary spheres
      var toRemove = [];
      sceneEl.object3D.traverse(function (obj) {
        if (
          obj.name === 'GaleOverlayMesh' ||
          obj.name === 'GaleCraterWorldRoot' ||
          obj.name === 'GaleCraterOverlayRoot' ||
          obj.name === 'CustomMarsLayersV2' ||
          obj.name === 'CustomMarsLayersV3'
        ) {
          toRemove.push(obj);
        }
      });
      for (var r = 0; r < toRemove.length; r++) {
        if (toRemove[r].parent) toRemove[r].parent.remove(toRemove[r]);
      }

      labelContainer.innerHTML = '';
      trackedLabels = [];

      rootGroup3D = new THREE.Group();
      rootGroup3D.name = 'CustomMarsLayersV3';
      hazGroup3D = new THREE.Group();
      safeGroup3D = new THREE.Group();

      for (var i = 0; i < s.hazards.length; i++) {
        var h = s.hazards[i];
        addHazardRectangleR84(hazGroup3D, h[0], h[1], h[2]);
        registerLabel(
          new THREE.Vector3(h[0], h[1] + 1.45, h[2]),
          s.hazLabel,
          'mars3-tag-haz',
          'haz'
        );
      }

      for (var j = 0; j < s.safePath.length; j++) {
        var pt = s.safePath[j];
        addSafeNodeR84(safeGroup3D, pt[0], pt[1], pt[2]);
        if (j > 0) {
          addSafeBeamR84(safeGroup3D, s.safePath[j - 1], pt);
        }
        if (j === 0 || j === Math.floor(s.safePath.length / 2)) {
          registerLabel(
            new THREE.Vector3(pt[0], pt[1] + 0.95, pt[2]),
            '✔ SAFE PATH: LOW SLOPE BEDROCK',
            'mars3-tag-safe',
            'safe'
          );
        }
      }

      rootGroup3D.add(hazGroup3D);
      rootGroup3D.add(safeGroup3D);
      sceneEl.object3D.add(rootGroup3D);
    }

    var siteSelect = document.getElementById('eva3-site-select');
    siteSelect.addEventListener('change', function () {
      renderSiteLayers(siteSelect.value);
    });

    // Auto-detect when the user switches sites via the Access Mars map URL/state or when a-scene reloads
    setInterval(function () {
      var sceneEl = document.querySelector('a-scene');
      if (!sceneEl || !sceneEl.object3D || !window.THREE) return;

      var attached = false;
      for (var i = 0; i < sceneEl.object3D.children.length; i++) {
        if (sceneEl.object3D.children[i].name === 'CustomMarsLayersV3') {
          attached = true;
          break;
        }
      }
      if (!attached) {
        renderSiteLayers(currentSiteKey);
      }
    }, 500);

    function updateHUDLoop() {
      requestAnimationFrame(updateHUDLoop);

      var sceneEl = document.querySelector('a-scene');
      if (!sceneEl || !sceneEl.camera || !window.THREE) return;

      var cHaz = document.getElementById('chk3-hazards');
      var cSafe = document.getElementById('chk3-safe');
      var showHaz = cHaz ? !!cHaz.checked : true;
      var showSafe = cSafe ? !!cSafe.checked : true;

      if (hazGroup3D) hazGroup3D.visible = showHaz;
      if (safeGroup3D) safeGroup3D.visible = showSafe;

      var camera = sceneEl.camera;
      var camPos = new THREE.Vector3();
      camera.getWorldPosition(camPos);
      var w = window.innerWidth;
      var h = window.innerHeight;

      for (var i = 0; i < trackedLabels.length; i++) {
        var item = trackedLabels[i];
        var catVisible = (item.cat === 'haz' && showHaz) || (item.cat === 'safe' && showSafe);
        if (!catVisible) {
          item.el.style.display = 'none';
          continue;
        }
        var dist = camPos.distanceTo(item.pos);
        var projected = item.pos.clone().project(camera);
        if (projected.z > 1.0 || projected.z < -1.0 || dist > 75) {
          item.el.style.display = 'none';
          continue;
        }
        var sx = (projected.x * 0.5 + 0.5) * w;
        var sy = (-(projected.y * 0.5) + 0.5) * h;
        item.el.style.display = 'block';
        item.el.style.left = sx + 'px';
        item.el.style.top = sy + 'px';
      }
    }
    requestAnimationFrame(updateHUDLoop);

    // Live Telemetry Ticker
    var o2 = 98.4;
    var batt = 94.0;
    var secs = 15129;
    setInterval(function () {
      o2 = Math.max(0, o2 - 0.01);
      batt = Math.max(0, batt - 0.005);
      secs = Math.max(0, secs - 1);

      var hrs = String(Math.floor(secs / 3600)).padStart(2, '0');
      var mins = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
      var s = String(secs % 60).padStart(2, '0');
      var temp = (-48.2 + Math.sin(Date.now() / 8000) * 1.5).toFixed(1);
      var press = (29.6 + Math.cos(Date.now() / 5000) * 0.1).toFixed(1);
      var rad = (0.024 + Math.abs(Math.sin(Date.now() / 6000)) * 0.004).toFixed(3);

      var o2El = document.getElementById('eva3-o2');
      var barEl = document.getElementById('eva3-o2-bar');
      var pressEl = document.getElementById('eva3-press');
      var battEl = document.getElementById('eva3-batt');
      var tempEl = document.getElementById('eva3-temp');
      var radEl = document.getElementById('eva3-rad');

      if (o2El) o2El.textContent = o2.toFixed(1) + '% (' + hrs + ':' + mins + ':' + s + ')';
      if (barEl) barEl.style.width = o2.toFixed(1) + '%';
      if (pressEl) pressEl.textContent = press + ' kPa (NOMINAL)';
      if (battEl) battEl.textContent = batt.toFixed(1) + '%';
      if (tempEl) tempEl.textContent = temp + ' °C (7.4 mbar)';
      if (radEl) radEl.textContent = rad + ' mSv/h';
    }, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootMarsV3);
  } else {
    bootMarsV3();
  }
})();
