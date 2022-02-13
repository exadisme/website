const blogModal = document.querySelector(".latestpost")
const blogbtn = document.querySelector("#blog");
const projectSelect = document.querySelector("#projects");
const closeBlogModal = document.querySelector("#closeblog");
const linkHovers = document.querySelectorAll(".link-hover");
const underLinkModals = document.querySelectorAll(".underlink");

const blogButton = function () {
    if (!blogModal.classList.contains("hidden")) {
        blogModal.classList.add("hidden");   
    } else {
        blogModal.classList.remove("hidden");   
    }
}

blogbtn.addEventListener("click", blogButton);

closeBlogModal.addEventListener("click", function () {
    blogModal.classList.add("hidden");
});

// linkHovers[1].addEventListener("mouseover", function () {
//          underLinkModals[1].classList.remove("hidden");
// });


for (let i = 0; i < linkHovers.length; i++) {
    linkHovers[i].addEventListener("mouseover", function () {
        underLinkModals[i].classList.remove("hidden");
    });
        linkHovers[i].addEventListener("mouseout", function () {
            underLinkModals[i].classList.add("hidden");
    });
}
