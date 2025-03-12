const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Ensure the correct 'list' element is selected

button.addEventListener('click', function() {
    // Check if input is not empty
    if (input.value.trim() !== '') {
        // Create a new list item (li)
        const li = document.createElement('li');
        li.textContent = input.value;

        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        // Add the delete functionality
        deleteButton.addEventListener('click', function() {
            list.removeChild(li); // Remove the li from the list
            input.focus(); // Focus back to the input field
        });

        // Append delete button to the list item and list item to the list
        li.append(deleteButton);
        list.append(li);

        // Clear the input field
        input.value = '';

        // Focus back to the input field
        input.focus();
    } else {
        // If input is empty, just focus on the input field
        input.focus();
    }
});


