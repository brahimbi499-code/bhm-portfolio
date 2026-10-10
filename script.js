// Sample Data
const gamesData = [
    { id: 1, name: 'Cyber Rush', category: 'Action', rating: '4.8/5', icon: '⚡' },
    { id: 2, name: 'Quest Legends', category: 'RPG', rating: '4.6/5', icon: '🗡️' },
    { id: 3, name: 'Brain Maze', category: 'Puzzle', rating: '4.4/5', icon: '🧩' },
    { id: 4, name: 'Champion Arena', category: 'Sports', rating: '4.7/5', icon: '🏅' },
    { id: 5, name: 'Empire Builder', category: 'Strategy', rating: '4.5/5', icon: '🏰' },
    { id: 6, name: 'Sky Jumper', category: 'Action', rating: '4.3/5', icon: '🚀' }
];

const communityFeaturesData = [
    { icon: '💬', title: 'Real-time Chat', desc: 'Instant messaging with gamers worldwide' },
    { icon: '🎯', title: 'Game Groups', desc: 'Join communities for your favorite games' },
    { icon: '🏆', title: 'Achievements', desc: 'Earn badges and climb the leaderboards' },
    { icon: '📺', title: 'Streaming', desc: 'Watch and broadcast your gameplay' },
    { icon: '👥', title: 'Clans', desc: 'Create or join gaming clans' },
    { icon: '🎊', title: 'Events', desc: 'Participate in exclusive community events' }
];

const tournamentsData = [
    {
        id: 1,
        name: 'World Championship 2024',
        game: 'Cyber Rush',
        prize: '$100,000',
        participants: '1,250',
        status: 'active'
    },
    {
        id: 2,
        name: 'RPG Masters Tourney',
        game: 'Quest Legends',
        prize: '$50,000',
        participants: '856',
        status: 'active'
    },
    {
        id: 3,
        name: 'Speed Runners Cup',
        game: 'Sky Jumper',
        prize: '$25,000',
        participants: '342',
        status: 'upcoming'
    }
];

// Initialize Page
document.addEventListener('DOMContentLoaded', function() {
    loadGames();
    loadCommunityFeatures();
    loadTournaments();
    loadContentFromStorage();
});

// Load Games
function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = gamesData.map(game => `
        <div class="game-card">
            <div class="game-card-image">${game.icon}</div>
            <div class="game-card-content">
                <h3>${game.name}</h3>
                <p>${game.category}</p>
                <div class="game-card-rating">⭐ ${game.rating}</div>
                <button class="btn btn-secondary" style="width: 100%;">Play Now</button>
            </div>
        </div>
    `).join('');
}

// Load Community Features
function loadCommunityFeatures() {
    const featureContainer = document.getElementById('communityFeatures');
    featureContainer.innerHTML = communityFeaturesData.map(feature => `
        <div class="feature-card">
            <div class="feature-icon">${feature.icon}</div>
            <h3>${feature.title}</h3>
            <p>${feature.desc}</p>
        </div>
    `).join('');
}

// Load Tournaments
function loadTournaments() {
    const tournamentsList = document.getElementById('tournamentsList');
    tournamentsList.innerHTML = tournamentsData.map(tournament => `
        <div class="tournament-card">
            <div class="tournament-header">
                <h3 class="tournament-title">${tournament.name}</h3>
                <span class="tournament-badge">${tournament.status === 'active' ? 'LIVE' : 'UPCOMING'}</span>
            </div>
            <div class="tournament-info">
                <div class="tournament-info-item">
                    <div class="tournament-info-label">Game</div>
                    <div class="tournament-info-value">${tournament.game}</div>
                </div>
                <div class="tournament-info-item">
                    <div class="tournament-info-label">Prize Pool</div>
                    <div class="tournament-info-value">${tournament.prize}</div>
                </div>
                <div class="tournament-info-item">
                    <div class="tournament-info-label">Participants</div>
                    <div class="tournament-info-value">${tournament.participants}</div>
                </div>
            </div>
            <button class="btn btn-secondary tournament-btn">Register Now</button>
        </div>
    `).join('');
}

// Scroll to Games
function scrollToGames() {
    document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
}

// Store Content in LocalStorage
function saveContentToStorage(section, data) {
    const content = JSON.parse(localStorage.getItem('siteContent')) || {};
    content[section] = data;
    localStorage.setItem('siteContent', JSON.stringify(content));
}

// Load Content from Storage
function loadContentFromStorage() {
    const content = JSON.parse(localStorage.getItem('siteContent')) || {};
    
    if (content.hero) {
        document.getElementById('heroTitle').textContent = content.hero.title;
        document.getElementById('heroSubtitle').textContent = content.hero.subtitle;
    }
    
    if (content.gamesSection) {
        document.getElementById('gamesTitle').textContent = content.gamesSection.title;
    }
    
    if (content.community) {
        document.getElementById('communityTitle').textContent = content.community.title;
        document.getElementById('communityDesc').textContent = content.community.desc;
    }
    
    if (content.nav) {
        document.getElementById('navBrand').textContent = content.nav.brand;
    }
    
    if (content.footer) {
        document.getElementById('footerTitle').textContent = content.footer.title;
        document.getElementById('footerDesc').textContent = content.footer.desc;
        document.getElementById('footerCopy').textContent = content.footer.copy;
    }
}

// Admin Link
document.querySelector('.admin-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'admin-panel.html';
});

// Navigation Active Link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});