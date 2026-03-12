const certificates = (window.certificatesData || []).sort((a, b) => {
  return new Date(b.date || "2000-01-01") - new Date(a.date || "2000-01-01");
});

const certGrid = document.getElementById("certGrid");
const filtersBox = document.getElementById("filters");
const themeToggle = document.getElementById("themeToggle");
const typingText = document.getElementById("typingText");

const categories = ["All", ...new Set(certificates.map(c => c.category).filter(Boolean))];
let activeCategory = "All";

function niceDate(value) {
  if (!value) return "Date not available";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function getThumbClass(item) {
  const text = `${item.category || ""} ${item.type || ""} ${item.issuer || ""}`.toLowerCase();

  if (text.includes("microsoft")) return "thumb-microsoft";
  if (text.includes("coursera")) return "thumb-coursera";
  if (text.includes("iot")) return "thumb-iot";
  if (text.includes("robot")) return "thumb-robotics";
  if (text.includes("machine learning") || text.includes("ml")) return "thumb-ml";

  return "thumb-default";
}

function getThumbLabel(item) {
  const text = `${item.category || ""} ${item.type || ""}`.toLowerCase();

  if (text.includes("microsoft")) return "MS";
  if (text.includes("coursera")) return "CS";
  if (text.includes("iot")) return "IoT";
  if (text.includes("robot")) return "RB";
  if (text.includes("machine learning") || text.includes("ml")) return "ML";

  return "PDF";
}

function getFilePath(fileName) {
  if (!fileName) return "#";
  return `certificates/${encodeURIComponent(fileName)}`;
}

function createCertificateCard(item) {
  const filePath = getFilePath(item.file);
  const hasFile = filePath !== "#";

  return `
    <a class="cert-card-link" href="${filePath}" ${hasFile ? 'target="_blank" rel="noreferrer"' : ""}>
      <article class="cert-card">
        <div class="cert-thumb ${getThumbClass(item)}">
          <div class="thumb-badge">${getThumbLabel(item)}</div>
          <div class="thumb-title">${item.title || "Untitled Certificate"}</div>
          <div class="thumb-sub">${item.issuer || "Unknown Issuer"}</div>
        </div>

        <div class="cert-meta">
          <span class="pill">${item.category || "General"}</span>
          <span class="pill">${item.type || item.issuer || "Certificate"}</span>
        </div>

        <h3>${item.title || "Untitled Certificate"}</h3>
        <p>${item.issuer || "Unknown Issuer"}</p>
        <p>${niceDate(item.date)}</p>
        <span class="cert-link">${hasFile ? "Open Certificate →" : "Certificate file missing"}</span>
      </article>
    </a>
  `;
}

function renderFilters() {
  if (!filtersBox) return;

  filtersBox.innerHTML = categories.map(cat => `
    <button
      class="filter-btn ${cat === activeCategory ? "active" : ""}"
      data-category="${cat}"
      type="button"
    >
      ${cat}
    </button>
  `).join("");

  filtersBox.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderFilters();
      renderCertificates();
    });
  });
}

function renderCertificates() {
  if (!certGrid) return;

  const visible = activeCategory === "All"
    ? certificates
    : certificates.filter(item => item.category === activeCategory);

  if (!visible.length) {
    certGrid.innerHTML = `
      <div class="glass cert-intro">
        <p>No certificates found in this category.</p>
      </div>
    `;
    return;
  }

  certGrid.innerHTML = visible.map(createCertificateCard).join("");
}

function initThemeToggle() {
  if (!themeToggle) return;

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
}

function initTypingEffect() {
  if (!typingText) return;

  const words = [
    "BCA Student",
    "AI Enthusiast",
    "Web Developer",
    "Robotics & IoT Learner"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    typingText.textContent = currentWord.slice(0, charIndex);

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
    } else if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  typeEffect();
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderCertificates();
  initThemeToggle();
  initTypingEffect();
});