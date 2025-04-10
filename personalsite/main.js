document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleBuild");
  const buildInfo = document.getElementById("buildInfo");
  const buildContainer = document.getElementById("buildContainer");

  let isDayForm = true;

  // Display the default build (Day Form)
  displayBuild("Day");

  // Add event listener for toggling Day and Night Form
  toggleButton.addEventListener("click", function () {
    isDayForm = !isDayForm;
    const form = isDayForm ? "Day" : "Night";
    displayBuild(form);
  });

  function displayBuild(form) {
    if (form === "Day") {
      buildInfo.innerHTML = `
        <h3>Day Form Build</h3>
        <p>Focuses on **damage output** with high ability strength.</p>
        <ul>
          <li>Mods: Strength Mods (Umbral Intensify, Transient Fortitude)</li>
          <li>Abilities: **Maim** for AOE damage</li>
          <li>Weapons: High-crit weapons like the **Tigris Prime**.</li>
          <li>Focus on maximizing damage with Strength Mods and critical damage multipliers.</li>
        </ul>
        <h4>Recommended Mods for Day Build</h4>
        <ul>
          <li>Umbral Intensify</li>
          <li>Transient Fortitude</li>
          <li>Blind Rage</li>
          <li>Power Drift</li>
        </ul>
        <h4>Relics for Equinox</h4>
        <ul>
          <li>Equinox Neuroptics - Lith S7</li>
          <li>Equinox Chassis - Meso B3</li>
          <li>Equinox Systems - Neo R5</li>
          <li>Equinox Blueprint - Axi C3</li> <!-- Added Relic for Blueprint -->
        </ul>
      `;
      toggleButton.textContent = "Switch to Night Form";
    } else {
      buildInfo.innerHTML = `
        <h3>Night Form Build</h3>
        <p>Focuses on **healing and support**, ideal for team play.</p>
        <ul>
          <li>Mods: Efficiency Mods (Streamline, Fleeting Expertise)</li>
          <li>Abilities: **Mend** for healing</li>
          <li>Weapons: Consider using **Nikana Prime** for utility.</li>
          <li>Focus on healing, crowd control, and providing buffs for your team.</li>
        </ul>
        <h4>Recommended Mods for Night Build</h4>
        <ul>
          <li>Streamline</li>
          <li>Fleeting Expertise</li>
          <li>Vitality</li>
          <li>Flow</li>
        </ul>
        <h4>Relics for Equinox</h4>
        <ul>
          <li>Equinox Neuroptics - Lith S7</li>
          <li>Equinox Chassis - Meso B3</li>
          <li>Equinox Systems - Neo R5</li>
          <li>Equinox Blueprint - Axi C3</li> <!-- Added Relic for Blueprint -->
        </ul>
      `;
      toggleButton.textContent = "Switch to Day Form";
    }
  }

  // Fetching Warframe Data (example API endpoint)
  async function fetchWikiData() {
    const apiUrl = "https://api.warframestat.us/warframes"; // Example endpoint
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data); // For debugging
      displayWarframeData(data); // Displaying API data dynamically
    } catch (error) {
      console.error("Failed to fetch wiki data:", error);
    }
  }

  // Fetch the data on page load
  fetchWikiData();

  // Function to display fetched Warframe data
  function displayWarframeData(data) {
    // Filter out only relevant Warframes (e.g., Equinox)
    const relevantWarframes = data.filter(warframe => 
      warframe.name === "Equinox" || warframe.name === "Equinox Prime"
    );

    if (relevantWarframes.length > 0) {
      buildContainer.innerHTML = `
        <h2>Available Warframes</h2>
        <ul>
          ${relevantWarframes.map(warframe => `
            <li>
              <strong>${warframe.name}</strong><br>
              <em>${warframe.description || "No description available"}</em>
              <p><strong>Day Build</strong>: Focus on damage with high ability strength.</p>
              <p><strong>Night Build</strong>: Focus on healing and support.</p>
            </li>
          `).join("")}
        </ul>
      `;
    } else {
      buildContainer.innerHTML = "<p>No Warframes available.</p>";
    }
  }
});
