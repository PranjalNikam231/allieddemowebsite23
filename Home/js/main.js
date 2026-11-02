document.addEventListener("DOMContentLoaded", function() {
    const productBtn = document.getElementById("productBtn");
    const dropdown = productBtn.parentElement;

    // Toggle dropdown on click
    productBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevents page jump
        dropdown.classList.toggle("show");
    });

    // Close the dropdown if the user clicks anywhere outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.getElementsByClassName("dropdown");
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
});