// GTA 5 Style Police Light Animation
const orbs = document.querySelectorAll('.color-orb');

// GTA 5 style alternating flash pattern
function setupGTAPoliceLights() {
    // Red orbs (1, 2, 3) - flash together
    const redOrbs = [orbs[0], orbs[1], orbs[2]];
    // Blue orbs (4, 5) - flash together but offset from red
    const blueOrbs = [orbs[3], orbs[4]];
    
    // Create alternating flash effect like GTA 5
    let flashState = true;
    
    setInterval(() => {
        redOrbs.forEach((orb, index) => {
            if (orb) {
                const delay = index * 0.1;
                setTimeout(() => {
                    orb.style.opacity = flashState ? '0.8' : '0.2';
                    orb.style.transform = flashState ? 'scale(1.15)' : 'scale(0.95)';
                }, delay * 1000);
            }
        });
        
        // Blue flashes opposite to red
        setTimeout(() => {
            blueOrbs.forEach((orb, index) => {
                if (orb) {
                    const delay = index * 0.1;
                    setTimeout(() => {
                        orb.style.opacity = !flashState ? '0.8' : '0.2';
                        orb.style.transform = !flashState ? 'scale(1.15)' : 'scale(0.95)';
                    }, delay * 1000);
                }
            });
        }, 50);
        
        flashState = !flashState;
    }, 500); // Flash every 500ms like GTA 5 police lights
}

// Initialize GTA 5 police light effect
if (orbs.length > 0) {
    setupGTAPoliceLights();
}
