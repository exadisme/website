const blogModal = document.querySelector(".latestpost")
const blogbtn = document.querySelector("#blog");
const projectSelect = document.querySelector("#projects");
const closeBlogModal = document.querySelector("#closeblog")

const blogButton = function () {
    if (!blogModal.classList.contains("hidden")) {
        blogModal.classList.add("hidden")   
    } else {
        blogModal.classList.remove("hidden")   
    }
}

blogbtn.addEventListener("click", blogButton)
closeBlogModal.addEventListener("click", function () {
    blogModal.classList.add("hidden")
})