const WIDTH = 80;
const HEIGHT = 40;
const CHARS = " .:-=+*#%@"; // Characters ordered from dim to bright

let time = 0;

function renderTornado() {
    // Clear terminal screen and reset cursor position
    console.clear();
    let frame = "";

    for (let y = 0; y < HEIGHT; y++) {
        // Normalize y-coordinate from -1 to 1
        let ny = (y / HEIGHT) * 2 - 1;

        // Define the width of the funnel at this height (wider at the top, narrow at the bottom)
        let funnelRadius = Math.pow(ny + 1.2, 1.8) * 12;

        // Twisting wave center line of the tornado
        let centerX = (WIDTH / 2) + Math.sin(ny * 4 + time * 2) * 10 * (ny + 1);

        for (let x = 0; x < WIDTH; x++) {
            // Distance from the twisting center line of the tornado
            let dx = x - centerX;

            // Determine if the coordinate lands inside the swirling tube
            if(Math.abs(dx) < funnelRadius) {
                // Generate a pseudo-3D lighting texture effect using trigonometry
                let angle = Math.acos(dx /funnelRadius);

                // Add twist and rotational speed over time
                let dynamicWave = Math.sin(angle * 3 + ny * 8 - time * 5);

                // Calculate surface intensity (brightness)
                let intensity = Math.floor((dynamicWave + 1) * 0.5 * (CHARS.length - 1));

                // Ensure array index bounds stay safe
                intensity = Math.max(0, Math.min(CHARS.length - 1, intensity));

                frame += CHARS[intensity];
            } else {
                frame += " "; // Empty background air space
            }
        }
       frame += "\n";
    }

     console.log(frame);
        time += 0.05; // Control rotation speed
}

// Run the render function continuously at ~60 frames per second
setInterval(renderTornado, 16);