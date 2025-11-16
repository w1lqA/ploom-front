// sidebar.js - универсальная логика для бокового меню
function initSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    if (!sidebarToggle || !sidebar) return;

    function toggleSidebar() {
        sidebar.classList.toggle('right-0');
        sidebar.classList.toggle('right-[-350px]');
        sidebarToggle.classList.toggle('hidden');
    }

    // Обработчики меню
    sidebarToggle.addEventListener('click', toggleSidebar);
    
    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('right-0') && 
            !sidebar.contains(e.target) && 
            !sidebarToggle.contains(e.target)) {
            toggleSidebar();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('right-0')) {
            toggleSidebar();
        }
    });
}

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', initSidebar);