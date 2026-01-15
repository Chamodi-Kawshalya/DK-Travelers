document.addEventListener("DOMContentLoaded", function(){

    // Modal Elements
    const modal = document.getElementById("bookingModal");
    const openBtns = document.querySelectorAll(".open-modal");
    const closeBtn = modal.querySelector(".close");
    const tourNameInput = document.getElementById("tourName");

    // Open modal and set tour name
    openBtns.forEach(btn => {
        btn.addEventListener("click", function(){
            modal.style.display = "block";
            const tourTitle = this.parentElement.querySelector("h3").innerText;
            tourNameInput.value = tourTitle;
        });
    });

    // Close modal when clicking X
    closeBtn.addEventListener("click", function(){
        modal.style.display = "none";
    });

    // Close modal when clicking outside
    window.addEventListener("click", function(e){
        if(e.target === modal){
            modal.style.display = "none";
        }
    });

    // Optional: Booking form submit alert
    const bookingForm = document.getElementById("bookingForm");
    if(bookingForm){
        bookingForm.addEventListener("submit", function(e){
            e.preventDefault();
            alert("Thank you! Your booking request has been submitted.");
            modal.style.display = "none";
            bookingForm.reset();
        });
    }

});
