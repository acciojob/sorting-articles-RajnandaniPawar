//your JS code here. If required.

        const bands = [
            'The Plot in You',
            'The Devil Wears Prada',
            'Pierce the Veil',
            'Norma Jean',
            'The Bled',
            'Say Anything',
            'The Midway State',
            'We Came as Romans',
            'Counterparts',
            'Oh, Sleeper',
            'A Skylit Drive',
            'Anywhere But Here',
            'An Old Dog'
        ];

        // Function to sort the bands
        function sortBands(bands) {
            const ignoreWords = ['a', 'an', 'the'];

            return bands.sort((a, b) => {
                const strippedA = a.toLowerCase().replace(/^(a |an |the )/i, '');
                const strippedB = b.toLowerCase().replace(/^(a |an |the )/i, '');

                return strippedA.localeCompare(strippedB);
            });
        }

        // Display the sorted bands in the unordered list
        function displaySortedBands() {
            const sortedBands = sortBands(bands);
            const bandList = document.getElementById('band');

            sortedBands.forEach(band => {
                const li = document.createElement('li');
                li.textContent = band;
                bandList.appendChild(li);
            });
        }

        // Call the function to display sorted bands
        displaySortedBands();
