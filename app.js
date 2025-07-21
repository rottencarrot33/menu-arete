document.addEventListener('DOMContentLoaded', function () {
    const typeButtons = document.querySelectorAll('[data-type]');
    const foodCategories = document.getElementById('foodCategories');
    const drinkCategories = document.getElementById('drinkCategories');
    const filterButtons = document.querySelectorAll('[data-filter]');
    const menuItems = document.querySelectorAll('.menu-item');

    // Filter function
    function filterItems(type, filter) {
        menuItems.forEach(item => {
            if (item.getAttribute('data-type') === type && item.getAttribute('data-category') === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    // Activate button function
    function activateButton(groupId, filter) {
        const group = document.getElementById(groupId);
        const buttons = group.querySelectorAll('[data-filter]');
        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
        });
    }

    // Set up type button logic
    typeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const type = button.getAttribute('data-type');

            typeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            if (type === 'food') {
                foodCategories.classList.remove('hidden');
                drinkCategories.classList.add('hidden');
                activateButton('foodCategories', 'appetizers');
                filterItems('food', 'appetizers');
            } else {
                foodCategories.classList.add('hidden');
                drinkCategories.classList.remove('hidden');
                activateButton('drinkCategories', 'softdrinks');
                filterItems('drinks', 'softdrinks');
            }
        });
    });

    // Set up category filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            const type = button.closest('.btn-group').id === 'foodCategories' ? 'food' : 'drinks';

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            filterItems(type, filter);
        });
    });

    // Prevent card clicks from doing anything
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // <-- Important to stop bubbling
        });
    });

    // ✅ Default load: food + appetizers
    document.querySelector('[data-type="food"]').classList.add('active');
    foodCategories.classList.remove('hidden');
    drinkCategories.classList.add('hidden');
    activateButton('foodCategories', 'appetizers');
    filterItems('food', 'appetizers');
});
