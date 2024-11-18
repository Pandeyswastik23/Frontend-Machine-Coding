const sectionData = [
  {
    id: Math.random(),
    title: "Section 1",
    content: "Content for section1",
  },
  {
    id: Math.random(),
    title: "Section 2",
    content: "Content for section2",
  },
  {
    id: Math.random(),
    title: "Section 3",
    content: "Content for section3",
  },
  {
    id: Math.random(),
    title: "Section 4",
    content: "Content for section4",
  },
  {
    id: Math.random(),
    title: "Section 5",
    content: "Content for section5",
  },
];

const accordionContainer = document.querySelector(".accordion-container");

function renderSections() {
  sectionData.forEach((section, index) => {
    const accHeader = document.createElement("li");
    accHeader.classList.add("header");
    accHeader.textContent = section.title;
    accHeader.setAttribute("data-id", section.id);

    if (index === 0) accHeader.classList.add("active");

    accordionContainer.appendChild(accHeader);

    const accContent = document.createElement("div");
    accContent.classList.add("acc-content");
    accContent.textContent = section.content;
    accContent.setAttribute("id", section.id);

    if (index === 0) accContent.classList.add("active");

    accordionContainer.appendChild(accContent);
  });
}

function switchSections(event) {
  const selectedSection = event.target;

  console.log(selectedSection);

  const sectionId = selectedSection.getAttribute("data-id");

  document.querySelectorAll(".header").forEach((header) => {
    header.classList.remove("active");
  });

  document.querySelectorAll(".acc-content").forEach((content) => {
    content.classList.remove("active");
  });

  selectedSection.classList.add("active");
  const selectedContent = document.getElementById(sectionId);

  if (selectedContent) selectedContent.classList.add("active");
}
accordionContainer.addEventListener("click", switchSections);
renderSections();
