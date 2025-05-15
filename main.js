function swapTab(tabName) {
    var tabs = document.getElementsByClassName("tab");
    for (var el in tabs) {
        if (typeof tabs[el] == "object") {
            tabs[el].classList.add('hide');
        }
    }
    document.getElementById(tabName + "-tab").classList.remove('hide');
}