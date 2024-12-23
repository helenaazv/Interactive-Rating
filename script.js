const ratingButtons = document.querySelectorAll('.rating'); //Selects all elements with class rating
const submitButton = document.getElementById('submit-button'); //Selects element with submit-button ID
const ratingPlaceholder = document.getElementById('rating-placeholder'); //Selects element with rating-placeholder ID

let selectedRating = null; 

//Adds a click event listener to each rating button.
ratingButtons.forEach(button => { 
  button.addEventListener('click', () => { 
        
    //Resets styles for all buttons to their default state.
    ratingButtons.forEach(btn => { 
      btn.style.backgroundColor = 'hsl(212, 14%, 25%)';
      btn.style.color = 'hsl(217, 12%, 63%)';
    });

    //Updates the style of the clicked button to indicate selection.
    button.style.backgroundColor = 'hsl(25, 97%, 53%)';
    button.style.color = 'hsl(213, 19%, 18%)';

    selectedRating = button.getAttribute('data-value'); //Value of the clicked button is stored in Selected Rating
  });
});

//Adds a click event listener to the submit button.
submitButton.addEventListener('click', () => { 
    if (selectedRating) {
      
      //Hide feedback card and show thank-you card
      document.getElementById('feedback-card').style.display = 'none';
      document.getElementById('thank-you-card').style.display = 'flex';
  
      ratingPlaceholder.textContent = `${selectedRating}`; //Updates the thank-you message with the selected rating

    } else { 
      alert('Please select a rating before submitting.');
    }
  });