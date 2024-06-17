document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search-bar');
    const searchResults = document.getElementById('search-results');

    searchBar.addEventListener('input', function() {
        const query = searchBar.value.toLowerCase().trim();
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';

        if (query === '') {
            return;
        }

        if (query.includes('bwz')) {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <img src="images/chinesedog.jpg" alt="BWZ Song" class="cover-image" style="width: 50px; height: 50px; margin-right: 10px;">
                <span>BWZ Song</span>
            `;
            resultItem.addEventListener('click', function() {
                window.location.href = 'index.html';
            });
            searchResults.appendChild(resultItem);
            searchResults.style.display = 'block';
        } else {
            const noResults = document.createElement('div');
            noResults.classList.add('no-results');
            noResults.textContent = `No search results for "${searchBar.value}"`;
            searchResults.appendChild(noResults);
            searchResults.style.display = 'block';
        }
    });
});
