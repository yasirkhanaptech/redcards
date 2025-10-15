
// ✅ Smart Base Path Detector
let basePath = "";

// Agar current page html folder ke andar hai
if (window.location.pathname.includes("/html/")) {
  basePath = "./"; // same folder
} else {
  basePath = "html/"; // home page se html folder ke andar
}
// ✅ Page Mapping
const searchPages = {
  "birthday": "forhim.html",
  "for him": "forhim.html",
  "for her": "forher.html",
  "father": "forfather.html",
  "son": "forson.html",
  "husband": "forhusband.html",
  "brother": "forbrother.html",
  "uncle": "foruncle.html",
  "nephew": "fornephew.html",
  "daughter": "fordaughter.html",
  "mother": "formother.html",
  "wife": "forwife.html",
  "sister": "forsister.html",
  "aunt": "foraunt.html",
  "niece": "forniece.html",
  "anniversary": "anniversery.html",
  "mothers day": "motherday.html",
  "valentine day": "valentineday.html",
  "eid": "eid.html",
  "ramadan": "ramadan.html",
  "14 august": "14august.html",
  "about": "about-us.html",
  "contact": "contact.html",
  "archies": "archies.html",
  "hallmark": "hallmark.html",
  "papyrus": "papyrus.html",
  "faq": "faq.html",                // ✅ added FAQ page
  "policies": "policies.html" // ✅ added Privacy Policy page
};

// ✅ Universal Search Function
function handleSearch(formId, inputId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const query = document.getElementById(inputId).value.toLowerCase().trim();

    if (searchPages[query]) {
      // ✅ auto redirect using detected basePath
      window.location.href = basePath + searchPages[query];
    } else {
      alert("❌ No results found! Please use valid keywords related to our website.");
    }
  });
}
// ✅ Run for both forms
handleSearch("searchForm1", "searchInput1"); 
handleSearch("searchForm", "searchInput");  


let index = 0;
const slides = document.querySelectorAll(".slider-box img");

function showSlide() {
  let prevIndex = index;
  index = (index + 1) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.remove("active", "prev");
    if (i === index) {
      slide.classList.add("active");
    }
    if (i === prevIndex) {
      slide.classList.add("prev");
    }
  });
}

setInterval(showSlide, 2000); // 2 sec auto transition


/* ===== Typing Words Animation ===== */
const words = ["Birthday", "Occasions", "Holidays", "Brands"];
const typingSpeed = 30;
const deletingSpeed = 50;
const holdDelay = 1100;
const betweenDelay = 300;

const el = document.getElementById('cycle-prefix');

let wordIndex = 0;
let charIndex = 0;
let typing = true;

function typeLoop() {
  const current = words[wordIndex];
  if (typing) {
    charIndex++;
    el.textContent = current.slice(0, charIndex);
    el.classList.remove('nocaret');
    if (charIndex === current.length) {
      typing = false;
      setTimeout(typeLoop, holdDelay);
    } else {
      setTimeout(typeLoop, typingSpeed);
    }
  } else {
    charIndex--;
    el.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      wordIndex = (wordIndex + 1) % words.length;
      typing = true;
      el.classList.add('nocaret');
      setTimeout(typeLoop, betweenDelay);
    } else {
      setTimeout(typeLoop, deletingSpeed);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeLoop, 400);
});


document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".brands-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.add("animate");
        observer.unobserve(section); // Run only once
      }
    });
  }, { threshold: 0.3 });

  observer.observe(section);
});
// brands
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".brand-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, i * 200); // ek ek card delay se aayega
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});

// review section
// Select form and container
const reviewForm = document.getElementById("reviewForm");
const reviewsContainer = document.getElementById("reviews-container");

// Load saved reviews from localStorage
let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

// Function to display all reviews
function displayReviews() {
  reviewsContainer.innerHTML = "";
  reviews.forEach((r, index) => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
        <div class="card review-card text-center p-3 shadow-sm h-100">
          <h5>${r.name}</h5>
          <p class="text-warning">${r.rating}</p>
          <p class="text-muted">"${r.review}"</p>
          <button class="btn btn-sm btn-danger delete-btn" onclick="deleteReview(${index})">Delete</button>
        </div>
      `;
    reviewsContainer.appendChild(col);
  });
}

// Delete review with confirmation
function deleteReview(index) {
  if (confirm("Are you sure you want to delete this review?")) {
    reviews.splice(index, 1);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    displayReviews();
  }
}

// Initial display
displayReviews();

// Handle review form submission
reviewForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const review = document.getElementById("review").value;
  const rating = document.getElementById("rating").value;

  reviews.push({ name, review, rating });
  localStorage.setItem("reviews", JSON.stringify(reviews));
  displayReviews();
  reviewForm.reset();

  // Close modal
  const modal = bootstrap.Modal.getInstance(document.getElementById("reviewModal"));
  modal.hide();
});


// modal  him or her

function showImage(img) {
  document.getElementById("modalImage").src = img.src;
}


// modal other pages

function showImage(imgElement) {
  // Image set karo
  document.getElementById("modalImage").src = imgElement.src;

  // Price set karo
  let price = imgElement.getAttribute("data-price") || "Price not available";
  document.getElementById("modalPrice").textContent = "Price: " + price;
}

// contact form



