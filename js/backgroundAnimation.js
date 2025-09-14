
// Realistic police-style timing with developer color variations
const orbs = document.querySelectorAll('.color-orb');

// Developer-focused color combinations that complement red/blue
const devColorSets = [
    // Use CSS custom properties to respect theme
    { bg: 'radial-gradient(circle, var(--primary-color, #0066ff), var(--secondary-color, #003399))', shadow: 'var(--primary-color, rgba(0, 100, 255, 0.6))' },
    { bg: 'radial-gradient(circle, #ff0040, #cc0033)', shadow: 'rgba(255, 0, 64, 0.6)' },
    { bg: 'radial-gradient(circle, #00ff9f, #00cc7a)', shadow: 'rgba(0, 255, 159, 0.6)' },
    { bg: 'radial-gradient(circle, #9d4edd, #7209b7)', shadow: 'rgba(157, 78, 221, 0.6)' },
    { bg: 'radial-gradient(circle, #ff6b35, #e55100)', shadow: 'rgba(255, 107, 53, 0.6)' }
];

// Realistic police light timing - slower and more authentic
function adjustPoliceSpeed() {
    orbs.forEach((orb, index) => {
        // Stagger the timing like real police cars
        const baseDelay = index * -0.35; // More realistic stagger
        orb.style.animationDelay = `${baseDelay}s, ${baseDelay}s`;
        orb.style.animationDuration = '1.4s, 2s'; // Slower, more realistic
    });
}

// Occasionally intensify like emergency situations
setInterval(() => {
    orbs.forEach(orb => {
        orb.style.animationDuration = '1.0s, 5s'; // Speed up briefly
        setTimeout(() => {
            orb.style.animationDuration = '1.6s, 5s'; // Slow back down
        }, 3000);
    });
}, 15000); // Less frequent intensity changes

// Subtle color rotation while keeping red/blue dominant
let colorIndex = 0;
setInterval(() => {
    orbs.forEach((orb, index) => {
        // Keep first two orbs as red/blue primary
        if (index < 2) return;

        const colorSet = devColorSets[(colorIndex + index) % devColorSets.length];
        orb.style.background = colorSet.bg;
        orb.style.boxShadow = `0 0 60px ${colorSet.shadow}`;
    });
    colorIndex = (colorIndex + 1) % devColorSets.length;
}, 12000); // Slower color changes

// Enhanced hover effects with developer theme
document.querySelector('.content-div').addEventListener('mousemove', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    e.currentTarget.style.background = `
                radial-gradient(circle at ${x}% ${y}%, 
                rgba(0, 100, 255, 0.08) 0%, 
                rgba(0, 255, 159, 0.04) 25%,
                rgba(255, 0, 64, 0.03) 50%,
                rgba(255, 255, 255, 0.05) 70%)
            `;
});

document.querySelector('.content-div').addEventListener('mouseleave', (e) => {
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
});

// Initialize realistic police timing
adjustPoliceSpeed();
