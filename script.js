let angle = 0;

const line = document.getElementById('line');

function rotateLine() {
    angle += 2;
    
    // Fix: Template literal with backticks (`) and proper transform syntax
    line.style.transform = `rotate(${angle}deg)`; 

    setTimeout(rotateLine, 20); // Call rotateLine again after 20ms
}

rotateLine();
