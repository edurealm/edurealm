document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const menu = document.getElementById("menu");

  toggleButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("show");
    toggleButton.textContent = isOpen ? "✕" : "☰";
  });

  // ✅ Automatically close menu when any nav link is clicked
  const navLinks = menu.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        toggleButton.textContent = "☰";
      }
    });
  });
});


// 🔄 Optional: Unused function, can be removed if not used
function toggleMenu() {
  document.getElementById("menu").classList.toggle("hidden");
}


// ✅ Job form redirection
document.getElementById("jobForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const role = document.getElementById("job-role").value;

  const redirectLinks = {
    content_writer: "https://forms.gle/b2n7BCJsNwJgQqeX6",
    graphic_designer: "https://forms.gle/wi5t7rRLb5d9hPWx8",
    coordinator: "https://forms.gle/35S1BtUBNcTzmcaC7",
    executive: "https://forms.gle/BvS3M3abzUfH5SQw8"
  };

  if (role && redirectLinks[role]) {
    window.location.href = redirectLinks[role];
  } else {
    alert("Please select a job position.");
  }
});


// ✅ Refresh Home link
document.getElementById("homeLink").addEventListener("click", function (e) {
  e.preventDefault();
  location.reload();
});


