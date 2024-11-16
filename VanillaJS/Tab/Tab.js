const tabData = [
  { id: "Tab1", title: "First Tab", content: "This is the content of Tab 1" },
  { id: "Tab2", title: "Second Tab", content: "This is the content of Tab 2" },
  { id: "Tab3", title: "Third Tab", content: "This is the content of Tab 3" },
  { id: "Tab4", title: "Fourth Tab", content: "This is the content of Tab 4" },
  { id: "Tab5", title: "Fifth Tab", content: "This is the content of Tab 5" },
  { id: "Tab6", title: "Sixth Tab", content: "This is the content of Tab 6" },
];

const tabList = document.querySelector(".tab-list");
const tabDesc = document.querySelector(".tab-desc");

function createTabs() {
  tabData.map((tab, index) => {
    const tabTitle = document.createElement("li");
    tabTitle.classList.add("tab-title");
    tabTitle.textContent = tab.title;
    tabTitle.setAttribute("data-tab-id", tab.id);

    if (index === 0) tabTitle.classList.add("active");

    tabList.appendChild(tabTitle);

    const tabContent = document.createElement("div");
    tabContent.classList.add("tab-content");
    tabContent.textContent = tab.content;
    tabContent.setAttribute("id", tab.id);

    if (index === 0) tabContent.classList.add("active");

    tabDesc.appendChild(tabContent);
  });
}

function switchTabs(evt) {
  const selectedTab = evt.target;
  console.log(selectedTab);
  const tabId = selectedTab.getAttribute("data-tab-id");

  document.querySelectorAll(".tab-title").forEach((tab) => {
    tab.classList.remove("active");
  });

  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });
  selectedTab.classList.add("active");

  const selectedContent = document.getElementById(tabId);
  console.log(selectedContent);
  if (selectedContent) {
    selectedContent.classList.add("active");
  }
}

tabList.addEventListener("click", switchTabs);

createTabs();
