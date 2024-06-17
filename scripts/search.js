document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search-bar');
    const searchResults = document.getElementById('search-results');

    const songs = [
        { keyword: 'dog', image: '/images/doge.webp', title: 'Dog Song', url: '../index.html' },
        { keyword: 'bear', image: '/images/bear.avif', title: 'Bear Song', url: '/pages/bear-song.html' },
        { keyword: 'duck', image: '/images/duck.webp', title: 'Duck Song', url: '/pages/duck-song.html' },
        { keyword: 'penguin', image: '/images/penguin.webp', title: 'Penguin Song', url: '/pages/penguin-song.html' },
        { keyword: 'panda', image: '/images/panda.jpg', title: 'Panda Song', url: '/pages/panda-song.html' }
    ];

    searchBar.addEventListener('input', function() {
        const query = searchBar.value.toLowerCase().trim();
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';

        if (query === '') {
            return;
        }

        const filteredSongs = songs.filter(song => song.keyword.includes(query));
        if (filteredSongs.length > 0) {
            filteredSongs.forEach(song => {
                const resultItem = createResultItem(song);
                searchResults.appendChild(resultItem);
            });
            searchResults.style.display = 'block';
        } else {
            const noResults = document.createElement('div');
            noResults.classList.add('no-results');
            noResults.textContent = `No search results for "${query}"`;
            searchResults.appendChild(noResults);
            searchResults.style.display = 'block';
        }
    });

    function createResultItem(song) {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `
            <img src="${song.image}" alt="${song.title}" class="cover-image" style="width: 50px; height: 50px; margin-right: 10px;">
            <span>${song.title}</span>
        `;
        resultItem.addEventListener('click', function() {
            window.location.href = song.url; // Redirect to the song's specific page
        });
        return resultItem;
    }
});