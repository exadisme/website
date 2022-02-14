const blogModal = document.querySelector(".latestpost")
const blogbtn = document.querySelector("#blog");
const projectSelect = document.querySelector("#projects");
const closeBlogModal = document.querySelector("#closeblog");
const linkHovers = document.querySelectorAll(".link-hover");
const underLinkModals = document.querySelectorAll(".underlink");

// Modal for most recent blog post
const blogButton = function() {
    if (!blogModal.classList.contains("hidden")) {
        blogModal.classList.add("hidden");   
    } else {
        blogModal.classList.remove("hidden");   
    }
}

// Close recent blog model
blogbtn.addEventListener("click", blogButton);

closeBlogModal.addEventListener("click", function() {
    blogModal.classList.add("hidden");
});

// Creates mouseover events for link labels
for (let i = 0; i < linkHovers.length; i++) {
    linkHovers[i].addEventListener("mouseover", function() {
        underLinkModals[i].classList.remove("hidden");
    });
    linkHovers[i].addEventListener("mouseout", function() {
        underLinkModals[i].classList.add("hidden");
    });
}
