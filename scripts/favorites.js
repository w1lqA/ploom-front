document.addEventListener('DOMContentLoaded', function() {
    const projectsGrid = document.getElementById('projectsGrid');
    const addProjectBtn = document.getElementById('addProjectBtn');
    const notification = document.getElementById('notification');
    const addModal = document.getElementById('addModal');
    const addForm = document.getElementById('addForm');

    let projects = [
        {
            id: 1,
            title: "Космический корабль",
            description: "Футуристический дизайн",
            image: "https://via.placeholder.com/400x250/333/fff?text=Космический+корабль",
            date: "2024-01-15",
            category: "vehicles"
        },
        {
            id: 2,
            title: "Фэнтези дракон",
            description: "Мифическое существо", 
            image: "https://via.placeholder.com/400x250/333/fff?text=Фэнтези+дракон",
            date: "2024-01-10",
            category: "characters"
        },
        {
            id: 3,
            title: "Современный дом",
            description: "Архитектурный проект",
            image: "https://via.placeholder.com/400x250/333/fff?text=Современный+дом",
            date: "2024-01-05",
            category: "buildings"
        }
    ];

    function showNotification(message) {
        notification.textContent = message;
        notification.classList.remove('translate-y-[100px]');
        notification.classList.add('translate-y-0');
        setTimeout(() => {
            notification.classList.remove('translate-y-0');
            notification.classList.add('translate-y-[100px]');
        }, 3000);
    }

    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'bg-dark-card rounded-xl border border-dark-border overflow-hidden transition-all duration-300 hover:border-gray-500 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] project-card';
        card.innerHTML = `
            <div class="relative h-48 overflow-hidden project-image">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-300">
                <button class="absolute top-2 right-2 bg-black bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center text-red-500 hover:bg-opacity-90 hover:scale-110 transition-all duration-300" data-id="${project.id}">♥</button>
            </div>
            <div class="p-5">
                <h3 class="text-lg font-medium mb-2">${project.title}</h3>
                <p class="text-gray-400 text-sm mb-3 leading-relaxed">${project.description}</p>
                <div class="flex justify-between text-gray-400 text-xs mb-4">
                    <span>${new Date(project.date).toLocaleDateString('ru-RU')}</span>
                    <span>${getCategoryName(project.category)}</span>
                </div>
                <div class="flex gap-2">
                    <button class="flex-1 bg-dark-border hover:bg-dark-hover text-white py-2 rounded-lg transition-colors duration-300 text-sm border border-transparent hover:border-gray-500 view-btn">Открыть</button>
                    <button class="flex-1 bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:bg-opacity-10 py-2 rounded-lg transition-colors duration-300 text-sm delete-btn">Удалить</button>
                </div>
            </div>
        `;

        const deleteBtn = card.querySelector('.delete-btn');
        const viewBtn = card.querySelector('.view-btn');
        const favoriteBtn = card.querySelector('button.bg-opacity-70');

        deleteBtn.addEventListener('click', () => {
            projects = projects.filter(p => p.id !== project.id);
            renderProjectsGrid();
            showNotification('Проект удалён');
        });

        viewBtn.addEventListener('click', () => {
            showNotification(`Открываем проект: ${project.title}`);
        });

        favoriteBtn.addEventListener('click', () => {
            projects = projects.filter(p => p.id !== project.id);
            renderProjectsGrid();
            showNotification('Проект удалён из избранного');
        });

        return card;
    }

    function getCategoryName(category) {
        const categories = {
            'characters': 'Персонажи',
            'vehicles': 'Транспорт',
            'buildings': 'Здания', 
            'objects': 'Объекты'
        };
        return categories[category] || 'Другое';
    }

    function renderProjectsGrid() {
        projectsGrid.innerHTML = '';
        projects.forEach(project => {
            projectsGrid.appendChild(createProjectCard(project));
        });
    }

    function openAddModal() {
        addForm.reset();
        addModal.classList.remove('hidden');
    }

    function handleAddSubmit(e) {
        e.preventDefault();
        const newProject = {
            id: Date.now(),
            title: "Новый проект",
            description: "Описание нового проекта",
            image: "https://via.placeholder.com/400x250/333/fff?text=Новый+проект",
            date: new Date().toISOString().split('T')[0],
            category: "objects"
        };
        projects.push(newProject);
        renderProjectsGrid();
        closeModals();
        showNotification('Проект добавлен в избранное');
    }

    function closeModals() {
        addModal.classList.add('hidden');
    }

    // Обработчики
    addProjectBtn.addEventListener('click', openAddModal);
    addForm.addEventListener('submit', handleAddSubmit);
    document.getElementById('addModalClose').addEventListener('click', closeModals);
    document.getElementById('cancelAdd').addEventListener('click', closeModals);
    addModal.addEventListener('click', (e) => e.target === addModal && closeModals());
    document.addEventListener('keydown', (e) => e.key === 'Escape' && closeModals());

    // Боковое меню
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('right-0');
        sidebar.classList.toggle('right-[-350px]');
        sidebarToggle.classList.toggle('active');
    });

    renderProjectsGrid();
});