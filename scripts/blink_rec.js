const rec = document.querySelectorAll(".block");

let blockIs = true;

setInterval(function () {
    rec.forEach(function (block) {
        if (blockIs) {
            block.style.visibility = "hidden";
        } else {
            block.style.visibility = "visible";
        }
    });
    blockIs = !blockIs;
}, 800);

