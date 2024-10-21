//your JS code here. If required.

        const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 
                       'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
                       'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

        // Function to sort bands ignoring certain words
        function sortBands(bands) {
            const ignoreWords = ['a', 'an', 'the'];

            return bands.sort((a, b) => {
                // Function to create a compare key by removing ignore words
                const compareKey = (band) => {
                    return band.toLowerCase().replace(/\b(?:a|an|the)\s+/g, '').trim();
                };
                return compareKey(a) > compareKey(b) ? 1 : -1;
            });
        }

        // Get sorted bands
        const sortedBands = sortBands(bands);

        // Get the unordered list element
        const bandList = document.getElementById('band');

        // Create list items and append them to the unordered list
        sortedBands.forEach(band => {
            const li = document.createElement('li');
            li.textContent = band; // Set text content to band name
            bandList.appendChild(li); // Append list item to the band list
        });