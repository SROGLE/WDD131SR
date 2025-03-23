document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleBuild");
    const buildInfo = document.getElementById("buildInfo");

    let isDayForm = true;

    toggleButton.addEventListener("click", function() {
        isDayForm = !isDayForm;

        if (isDayForm) {
            buildInfo.innerHTML = `
                <h3>Day Form Build</h3>
                <p>Focuses on **damage output** with high ability strength.</p>
                <ul>
                    <li>Mods: Strength Mods (Umbral Intensify, Transient Fortitude)</li>
                    <li>Abilities: **Maim** for AOE damage</li>
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
                </ul>
            `;
            toggleButton.textContent = "Switch to Day Form";
        }
    });
});
