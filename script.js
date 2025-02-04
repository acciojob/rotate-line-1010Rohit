//your JS code here. If required.
//your JS code here. If required.
let angle = 0;

        const line = document.getElementById('line');

        function rotateLine() {

            angle += 2;

            line.style.transform = rotate(${angle}deg);

            setTimeout(rotateLine, 20);

        }

        rotateLine();
