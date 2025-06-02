function swapTab(tabName) {
    const tabs = Array.from(document.querySelectorAll(".tab"));
    const targetTab = document.getElementById(tabName + "-tab");
    const activeTab = tabs.find(tab => tab.classList.contains("active"));

    if (activeTab === targetTab) return;

    const targetIndex = tabs.indexOf(targetTab);
    const activeIndex = activeTab ? tabs.indexOf(activeTab) : -1;

    const slideOutX = activeIndex < targetIndex ? -150 : 150;
    const slideInX = activeIndex < targetIndex ? 150 : -150;

    if (activeTab) {
        activeTab.style.opacity = "0";
        activeTab.style.transform = `translateX(${slideOutX}px)`;

        setTimeout(() => {
            activeTab.style.display = "none";
            activeTab.classList.remove("active");

            targetTab.style.display = "flex";
            targetTab.style.opacity = "0";
            targetTab.style.transform = `translateX(${slideInX}px)`;

            void targetTab.offsetHeight;

            targetTab.classList.add("active");
            targetTab.style.opacity = "1";
            targetTab.style.transform = "translateX(0)";
        }, 500);
    } else {
        targetTab.style.display = "block";
        targetTab.style.opacity = "0";
        targetTab.style.transform = `translateX(${slideInX}px)`;

        void targetTab.offsetHeight;

        targetTab.classList.add("active");
        targetTab.style.opacity = "1";
        targetTab.style.transform = "translateX(0)";
    }
}
