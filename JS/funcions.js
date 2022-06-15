const start = () => {
    let time = 250;
    const elements = document.getElementsByTagName("span");
    const cmd = document.getElementsByClassName("console")[0];
    const btn = document.getElementsByClassName("startBtn")[0];
    btn.innerHTML = "in progress";
    cmd.innerHTML = "---PROGRESS START---\n";
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("transitionstart", () => {
            cmd.innerHTML += `Cell ${elements[i].innerHTML} Аnimation START\n`;
            cmd.scrollTop = cmd.scrollHeight;
        })
        elements[i].addEventListener("transitionend", () => {
            cmd.innerHTML += `Cell ${elements[i].innerHTML} Аnimation END\n`;
            cmd.scrollTop = cmd.scrollHeight;
            if (i === elements.length - 1) {
                alert("success");
                cmd.innerHTML += "---PROGRESS END---\n";
                btn.innerHTML = "start";
            }
        })
        setTimeout(() => {
            elements[i].className += " revers";
        }, time);
        time += 250;
    }
}

const test = () => {
    alert("test")
}