document.addEventListener('DOMContentLoaded', function() {
    const typeButtons = document.querySelectorAll('[data-type]');
    const foodCategories = document.getElementById('foodCategories');
    const drinkCategories = document.getElementById('drinkCategories');
    const filterButtons = document.querySelectorAll('[data-filter]');
    const menuItems = document.querySelectorAll('.menu-item');

    typeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const type = button.getAttribute('data-type');
            
            typeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            if (type === 'food') {
                foodCategories.classList.remove('hidden');
                drinkCategories.classList.add('hidden');
                // Default filter for food
                filterItems('food', 'brunch');
            } else {
                foodCategories.classList.add('hidden');
                drinkCategories.classList.remove('hidden');
                // Default filter for drinks
                filterItems('drinks', 'coffee');
            }
        });
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            const type = button.closest('.btn-group').id === 'foodCategories' ? 'food' : 'drinks';

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            filterItems(type, filter);
        });
    });

    function filterItems(type, filter) {
        menuItems.forEach(item => {
            if (item.getAttribute('data-type') === type && item.getAttribute('data-category') === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    // Set default visibility
    filterItems('food', 'brunch');
});