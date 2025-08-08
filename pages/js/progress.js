
window.onload = function () {
    const done = localStorage.getItem("lesson1_done");
    const bar = document.getElementById("progressBar");
    if (done === "true") {
        bar.value = 100;
    } else {
        bar.value = 0;
    }
};
