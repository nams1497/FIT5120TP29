document.addEventListener("DOMContentLoaded", function() {
    // temporary data for local testing
    // temporary data for local testing
    // temporary data for local testing
    // temporary data for local testing
    // temporary data for local testing
    // assuming this is the data returned by the backend)
    const validPostCodes = ["3000", "3001", "3002"]; 
    const uvIndexData = {
        "3000": 8,
        "3001": 7,
        "3002": 9
    };   
    
    // Function 1 post code search box and following default display
    /* Location Search */
    const form = document.getElementById("post-code-form");
    const postCodeInput = document.getElementById("post-code-input");
    const searchButton = form.querySelector("button[type='button']");
    const ErrorModal = document.getElementById("error-modal");

    /* Hidden 4-Main-FEATURE Details （valid location) */
    const contentAfterPostcode = document.querySelector(".content-after-postcode");

    /* UV Index */
    const uvIndexBackendSpan = document.getElementById("uv-index-backend");

    searchButton.addEventListener("click", function(event) {
        event.preventDefault(); 
        // Get the post code entered by the user
        const postCode = postCodeInput.value; 
    
        // correct postcode
        if (validPostCodes.includes(postCode)) {
            // Return the post Code
            const locationSpan = document.getElementById("location");
            locationSpan.textContent = postCode;
    
            // Empty the input box
            postCodeInput.value = "";

            // display the Hidden 4-Main-FEATURE Details
            contentAfterPostcode.style.display = "block";

            // Display UV index number
            uvIndexBackendSpan.textContent = uvIndexData[postCode];

            // Update default sunscreen tips and amount based on user type selection
            updateSunscreenInfo();
        } 

        // wrong postcode
        else {
            // display error pop-up
            ErrorModal.style.display = "block";
        }  
    });
    

    // Function 2 update different sunscreen content while user type changing 
    /* Sunscreen Amount and Default Value*/
    const sunscreenTipsSpan = document.getElementById("sunscreen-tips-js");
    const sunscreenAmountBackendSpan = document.getElementById("sunscreen-amount-backend");
    const userTypeSSSelect = document.getElementById("user-type-ss");
    const defaultSunscreenTips = "For babies under 6 months, the American Academy of Dermatology advises against the use of any sunscreen due to undeveloped skin barriers. Opt for physical sun protection such as appropriate clothing.";
    const defaultSunscreenAmount = "NONE";

    function updateSunscreenInfo() {
        switch (userTypeSSSelect.value) {
            case "Baby":
                sunscreenTipsSpan.textContent = defaultSunscreenTips;
                sunscreenAmountBackendSpan.textContent = defaultSunscreenAmount;
                break;
            case "Children/Teenager":
                sunscreenTipsSpan.textContent = "Choose sunscreens free from fragrances, alcohol, and other irritants for gentler protection.";
                // Waiting for follow-up updates
                // Waiting for follow-up updates
                // Waiting for follow-up updates
                // Waiting for follow-up updates
                // Waiting for follow-up updates
                sunscreenAmountBackendSpan.textContent = "TBD"; 
                break;
            case "Adult":
                sunscreenTipsSpan.textContent = "None";
                // Waiting for follow-up updates
                // Waiting for follow-up updates
                // Waiting for follow-up updates
                // Waiting for follow-up updates
                // Waiting for follow-up updates
                sunscreenAmountBackendSpan.textContent = "TBD"; 
                break;
            default:
                break;
        }
    }
    // change user type 
    userTypeSSSelect.addEventListener("change", updateSunscreenInfo);


    // Function 3 set reminder with time and note
    /* Reminder List*/
    const createButton = document.getElementById('create');
    const reminderModal = document.getElementById('reminder-modal');
    const reminderForm = document.getElementById('reminder-form');

    createButton.addEventListener('click', function() { 
        // Get current date YYYY-MM-DD
        const currentDate = new Date().toISOString().split('T')[0];
        document.getElementById('reminder-date').textContent = currentDate;

        // Pop-up
        reminderModal.style.display = 'block';
    });

    reminderForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const date = document.getElementById('reminder-date').textContent;
        const time = document.getElementById('reminder-time').value;

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `${date} ${time} <button class="delete-button">Delete</button>`;

        // Add the new list item to the reminder list
        const reminderList = document.getElementById('reminder-list-ul');
        reminderList.appendChild(listItem);

        // Hide the modal and reset the form
        reminderModal.style.display = 'none';
        event.target.reset();
    });

    // Function 4 Close Modal
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.error-modal, .reminder-modal, .reminder-message-modal, .view-history-modal, .data-visualization-modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Function 5 delete a specific reminder
    function reminderDeleteButtonClick(event) {
        if (event.target.classList.contains('delete-button')) {
            const listItem = event.target.parentElement;
            listItem.remove();
        }
    }
    document.addEventListener('click', reminderDeleteButtonClick);


    // Function 6 View History
    /* View History Modal*/
    const viewHistoryModal = document.getElementById('view-history-modal');
    const viewHistoryButton = document.getElementById('view-history');

    viewHistoryButton.onclick = function() {
        viewHistoryModal.style.display = 'block';
        //Waiting for follow-up updates
        // Waiting for follow-up updates
        // Waiting for follow-up updates
        // Waiting for follow-up updates
        // Waiting for follow-up updates
    }

    // Function 7 Data Visualization
    /* Data Visualization Modal*/
    const dataVisualizationModal = document.getElementById('data-visualization-modal');
    const dataVisualizationLink = document.getElementById('data-visualization-link');

    dataVisualizationLink.onclick = function() {
        dataVisualizationModal.style.display = 'block';
        // Waiting for follow-up updates
        // Waiting for follow-up updates
        // Waiting for follow-up updates
        // Waiting for follow-up updates
        // Waiting for follow-up updates
    }  
});
















