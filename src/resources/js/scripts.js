// Example: Dynamically load course details based on query parameters
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course');
    
    if (courseId) {
        // Load course details based on courseId
        document.getElementById('course-title').innerText = getCourseTitle(courseId);
    }
});

function getCourseTitle(courseId) {
    const courses = {
        1: 'Web Development',
        2: 'Data Science',
        3: 'Cloud Computing'
    };
    return courses[courseId] || 'Unknown Course';
}
