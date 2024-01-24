let tabsBlock = document.querySelector(".tabs-block");
let buttonsBlock = document.querySelector(".tabs-buttons");
let tabsButtons = buttonsBlock.querySelectorAll(".tab-btn")
let tabsLine = document.querySelector(".tabs-line");
let tabsContent = document.querySelectorAll(".text-content");
let menuHamburger = document.querySelector(".menu-hamburger");
let configurations = JSON.parse(tabsBlock.dataset.tabsConfig);

// SET INITIAL CONFIGURATIONS OF THE TABS
function initialConfig() {
    if(configurations.buttonStyle) {
        tabsButtons[0].classList.add("active");
        tabsLine.style.display = "none";
        buttonsBlock.style.borderBottom = "none";
    }
    if(configurations.lineStyle) {
        tabsButtons.forEach(btn => btn.classList.remove("active"));
        tabsLine.style.display = "block";
        buttonsBlock.style.borderBottom = "2px solid #eeeeee";
        let firstButton = tabsButtons[0];
        tabsLine.style.width = `${firstButton.offsetWidth}px`;
        tabsLine.style.left = `${firstButton.offsetLeft}px`;
    }
    if(configurations.tabStyle) {
        buttonsBlock.style.borderBottom = "none";
        tabsButtons.forEach((btn, i) => i != 0 ? btn.classList.add("tab-style") : "");
    }
}
initialConfig();

// WORKING FOR EACH BUTTON CLICK
tabsButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(configurations.buttonStyle) {
            tabsButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        }
        if(configurations.lineStyle) {
            tabsLine.style.width = `${button.offsetWidth}px`;
            tabsLine.style.left = `${button.offsetLeft}px`;
        }
        if(configurations.tabStyle) {
            tabsButtons.forEach(btn => btn.classList.add("tab-style"));
            button.classList.remove("tab-style");
        }
        tabsContent.forEach(tab => tab.classList.remove("active"));
        tabsContent[button.dataset.tabid].classList.add("active"); 
    });
});



