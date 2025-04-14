// No need for province info containers since we're opening in new page

// Map of English titles to actual filenames
const provinceMap = {
    'Aleppo': 'Aleppo' ,
    'Damascus': 'Damascus',
    'RifDimashq': 'RifDimashq',
    'Daraa': 'Daraa',
    'Quneitra': 'Quneitra',
    'As-Suwayda': 'As-Suwayda',
    'Idlib': 'Idlib',
    'Latakia': 'Latakia',
    'Tartus': 'Tartus',
    'Hama': 'Hama',
    'Homs': 'Homs',
    'Deir': 'Deir',
    'Raqqa': 'Raqqa',
    'Al-Hasakah': 'Al-Hasakah'
};

// Add event listeners to all map areas
document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get province name and key
        const provinceKey = this.getAttribute('title');
        
        // Get the filename from the map
        const fileName = provinceMap[provinceKey];
        
        if (!fileName) {
            console.error('Province not found in map:', provinceKey);
            return;
        }
        
        // Open province page in new window
        window.open(`provinces/${encodeURIComponent(fileName)}.html`, '_blank');
    });

    // Add hover effects
    area.addEventListener('mouseover', function() {
        this.style.opacity = '0.8';
        this.style.cursor = 'pointer';
    });

    area.addEventListener('mouseout', function() {
        this.style.opacity = '1';
    });
});

// No need for close functionality since we're using new pages
