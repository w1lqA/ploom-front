document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const uploadArea = document.getElementById('uploadArea');
    const uploadBtn = document.getElementById('uploadBtn');
    const fileInput = document.getElementById('fileInput');
    const generateBtn = document.getElementById('generateBtn');
    const promptInput = document.getElementById('promptInput');
    const notification = document.getElementById('notification');
    const queryExamples = document.querySelectorAll('.query-example');

    function showNotification(message) {
        notification.textContent = message;
        notification.classList.remove('translate-y-24');
        notification.classList.add('translate-y-0');
        setTimeout(() => {
            notification.classList.remove('translate-y-0');
            notification.classList.add('translate-y-24');
        }, 3000);
    }

    function toggleSidebar() {
        sidebar.classList.toggle('right-0');
        sidebar.classList.toggle('right-[-400px]');
        sidebarToggle.classList.toggle('rotate-90');
    }

    // Загрузка файлов
    uploadBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) handleFileSelect(e.target.files[0]);
    });

    // Drag and drop
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        uploadArea.addEventListener(eventName, () => {
            uploadArea.classList.add('border-blue-500', 'bg-gray-700');
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, () => {
            uploadArea.classList.remove('border-blue-500', 'bg-gray-700');
        }, false);
    });

    uploadArea.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files.length > 0) handleFileSelect(files[0]);
    });

    function handleFileSelect(file) {
        if (file && file.type.startsWith('image/')) {
            showNotification(`Файл "${file.name}" загружен`);
        } else {
            showNotification('Пожалуйста, выберите изображение');
        }
    }

    generateBtn.addEventListener('click', () => {
        const prompt = promptInput.value.trim();
        if (!fileInput.files[0] && !prompt) {
            showNotification('Загрузите изображение или введите описание');
            return;
        }
        
        showNotification('Создаём 3D модель...');
        setTimeout(() => showNotification('3D модель успешно создана!'), 2000);
    });

    // Обработчики меню
    sidebarToggle.addEventListener('click', toggleSidebar);
    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('right-0') && !sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
            toggleSidebar();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('right-0')) toggleSidebar();
    });
});