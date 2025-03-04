document.addEventListener("DOMContentLoaded", () => {
    // Menu Toggle
    const menuButton = document.querySelector("#menu-toggle");
    const menu = document.querySelector("#nav-links");

    function toggleMenu() {
        menu.classList.toggle("hide");
    }

    function handleResize() {
        if (window.innerWidth > 1000) {
            menu.classList.remove("hide");
        } else {
            menu.classList.add("hide");
        }
    }

    menuButton.addEventListener("click", toggleMenu);
    window.addEventListener("resize", handleResize);
    handleResize(); // Run once on load

    // Image Viewer Modal
    function viewerTemplate(pic, alt) {
        return `
            <div class="viewer">
                <button class="close-viewer">X</button>
                <img src="${pic}" alt="${alt}">
            </div>`;
    }

    function viewHandler(event) {
        if (event.target.tagName === "IMG") {
            const clickedImage = event.target;
            const srcParts = clickedImage.src.split("-");
            const fullImageSrc = srcParts[0] + "-full.jpeg";
            
            document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImageSrc, clickedImage.alt));

            document.querySelector(".close-viewer").addEventListener("click", closeViewer);
        }
    }

    function closeViewer() {
        document.querySelector(".viewer").remove();
    }

    document.querySelector(".gallery").addEventListener("click", viewHandler);
});
