document.addEventListener("DOMContentLoaded", function() {
    // Function 1: Update sunscreen content based on user type selection
    const sunscreenTipsSpan = document.getElementById("sunscreen-tips-js");
    const sunscreenAmountBackendSpan = document.getElementById("sunscreen-amount-backend");
    const userTypeSSSelect = document.getElementById("user-type-ss");

    function updateSunscreenInfo() {
        switch (userTypeSSSelect.value) {
            case "Baby":
                sunscreenTipsSpan.textContent = "For babies under 6 months, the American Academy of Dermatology advises against the use of any sunscreen due to undeveloped skin barriers. Opt for physical sun protection such as appropriate clothing.";
                sunscreenAmountBackendSpan.textContent = "Not applicable";
                break;
            case "Children/Teenager":
                sunscreenTipsSpan.textContent = "Choose sunscreens free from fragrances, alcohol, and other irritants for gentler protection.";
                sunscreenAmountBackendSpan.textContent = sunscreenData;
                break;
            case "Adult":
                sunscreenTipsSpan.textContent = "Not applicable";
                sunscreenAmountBackendSpan.textContent = sunscreenData;
                break;
            default:
                break;
        }
    }

    // Update sunscreen info on page load
    updateSunscreenInfo();

    // Listen for changes in user type selection and update sunscreen info accordingly
    userTypeSSSelect.addEventListener("change", updateSunscreenInfo);

    // Function 2: Set reminder with time and note
    const createButton = document.getElementById('create');
    const reminderModal = document.getElementById('reminder-modal');
    const reminderForm = document.getElementById('reminder-form');

    createButton.addEventListener('click', function() {
        // Get current date in YYYY-MM-DD format
        const currentDate = new Date().toISOString().split('T')[0];
        document.getElementById('reminder-date').textContent = currentDate;

        // Display the reminder modal
        reminderModal.style.display = 'block';
    });

    reminderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const date = document.getElementById('reminder-date').textContent;
        const time = document.getElementById('reminder-time').value;

        // Create a new list item for the reminder
        const listItem = document.createElement('li');
        listItem.innerHTML = `${date} ${time} <button class="delete-button">Delete</button>`;

        // Add the new list item to the reminder list
        const reminderList = document.getElementById('reminder-list-ul');
        reminderList.appendChild(listItem);

        // Hide the modal and reset the form
        reminderModal.style.display = 'none';
        event.target.reset();
    });

    // Function 3: Close Modal
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.reminder-modal, .reminder-message-modal, .view-history-modal, .data-visualization-modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Function 4: Delete a specific reminder
    function reminderDeleteButtonClick(event) {
        if (event.target.classList.contains('delete-button')) {
            const listItem = event.target.parentElement;
            listItem.remove();
        }
    }
    document.addEventListener('click', reminderDeleteButtonClick);

    // Function 5: View History
    const viewHistoryContainer = document.getElementById('view-history-container');
    const viewHistoryButton = document.getElementById('view-history');

    viewHistoryButton.onclick = function() {
        viewHistoryContainer.style.display = 'block';
    };

    viewHistoryContainer.onclick = function() {
        viewHistoryContainer.style.display = 'none';
    };  

    // Function 6: Cloth Recommendation
    const clothingRecommendationContent = document.querySelector('.clothing-recommendation-content');
    const skinTypeCRSelect = document.getElementById('skin-type-cr');

    function displayClothingRecommendation() {
        let recommendation = '';


        // Keep it blank when there is no postal code entered.
        if (!clothingData) {
            clothingRecommendationContent.textContent = '';
            return;
        }

        switch (clothingData) {
            case 'light':
                recommendation = 'UV index is low. There are no specific clothing restrictions for outdoor activities.';
                break;
            case 'medium':
                recommendation = 'UV index is moderate. Wear protective clothing, such as long-sleeved shirts and pants, when spending extended time outdoors.';
                break;
            case 'heavy':
                recommendation = 'UV index is high. Minimize skin exposure by wearing long-sleeved shirts, long pants, and wide-brimmed hats. Stay in the shade as much as possible.';
                break;
            default:
                recommendation = '';
                break;
        }

        switch (skinTypeCRSelect.value) {
            case 'Default':
                break;
            case 'Sensitive Skin':
                recommendation += '\nFor sensitive skin, choose loose-fitting, breathable fabrics and consider using UV-protective clothing for added protection.';
                break;
            default:
                break;
        }

        clothingRecommendationContent.textContent = recommendation;
    }

    // Display default clothing recommendation on page load
    displayClothingRecommendation();

    // User change options
    skinTypeCRSelect.addEventListener('change', displayClothingRecommendation);




    // Function 7 Data Visualization
    const dataVisualizationContainer = document.getElementById('data-visualization-container');
    const dataVisualizationLink = document.getElementById('data-visualization-link');

    dataVisualizationLink.onclick = function(event) {
        event.preventDefault(); 
        dataVisualizationContainer.style.display = 'block';
    };

    dataVisualizationContainer.onclick = function() {
        dataVisualizationContainer.style.display = 'none';
    };
});

































