document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('skills'); // Ensure this matches the HTML ID
    toggleButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
});
