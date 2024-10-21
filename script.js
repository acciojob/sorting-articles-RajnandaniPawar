//your JS code here. If required.

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil'
                   'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
                   'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
                   'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    // Function to sort band names ignoring 'a', 'an', 'the'
    function sortBands(bands) {
        return bands.sort((a, b) => {
            // Normalize both band names by removing the ignored words
            const normalizedA = a.replace(/^(a|an|the)\s+/i, '').toLowerCase();
            const normalizedB = b.replace(/^(a|an|the)\s+/i, '').toLowerCase();
            
            // Compare the normalized names
            return normalizedA.localeCompare(normalizedB);
        });
    }

    // Sort the bands
    const sortedBands = sortBands(bands);

    // Get the unordered list element
    const bandList = document.getElementById('band');

    // Populate the unordered list with sorted bands
    sortedBands.forEach(band => {
        const listItem = document.createElement('li'); // Create a list item
        listItem.textContent = band; // Set the text content to the band name
        bandList.appendChild(listItem); // Append the list item to the unordered list
    });
