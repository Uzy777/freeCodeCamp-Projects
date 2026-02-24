const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");

const categoryDropdown = document.getElementById("category-dropdown");
const categoryNameEls = document.querySelectorAll(".category-name");

const addBookmarkBtn = document.getElementById("add-bookmark-button");
const closeFormBtn = document.getElementById("close-form-button");
const addBookmarkFormBtn = document.getElementById("add-bookmark-button-form");

const viewCategoryBtn = document.getElementById("view-category-button");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");

const categoryList = document.getElementById("category-list");

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");

let activeCategory = "";

function getBookmarks() {
    const raw = localStorage.getItem("bookmarks");
    if (!raw) return [];

    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch {
        return [];
    }

    if (!Array.isArray(parsed)) return [];

    const isValid = parsed.every((b) => {
        if (!b || typeof b !== "object") return false;
        if (!("name" in b) || !("category" in b) || !("url" in b)) return false;
        if (typeof b.name !== "string" || typeof b.category !== "string" || typeof b.url !== "string") {
            return false;
        }
        return true;
    });

    return isValid ? parsed : [];
}

function setCategoryNameText(value) {
    categoryNameEls.forEach((el) => {
        el.innerText = value;
    });
}

function saveBookmarks(bookmarksArr) {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarksArr));
}

function displayOrCloseForm() {
    mainSection.classList.toggle("hidden");
    formSection.classList.toggle("hidden");
}

function displayOrHideCategory() {
    mainSection.classList.toggle("hidden");
    bookmarkListSection.classList.toggle("hidden");
}

function renderCategoryList(selectedCategory) {
    categoryList.innerHTML = "";

    const bookmarks = getBookmarks();
    const matches = bookmarks.filter((b) => b.category === selectedCategory);

    if (matches.length === 0) {
        categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
        return;
    }

    const radioGroupName = "bookmark-radio";

    matches.forEach((b) => {
        const id = b.name;

        categoryList.innerHTML += `
      <div>
        <input type="radio" id="${id}" name="${radioGroupName}" value="${b.name}">
        <label for="${id}">
          <a href="${b.url}">${b.name}</a>
        </label>
      </div>
    `;
    });
}

addBookmarkBtn.addEventListener("click", () => {
    const selected = categoryDropdown.value;
    setCategoryNameText(selected);
    displayOrCloseForm();
});

closeFormBtn.addEventListener("click", () => {
    displayOrCloseForm();
});

addBookmarkFormBtn.addEventListener("click", () => {
    const bookmarks = getBookmarks();

    const bookmarkObj = {
        name: nameInput.value,
        category: categoryDropdown.value,
        url: urlInput.value,
    };

    bookmarks.push(bookmarkObj);
    saveBookmarks(bookmarks);

    nameInput.value = "";
    urlInput.value = "";

    displayOrCloseForm();
});

viewCategoryBtn.addEventListener("click", () => {
    activeCategory = categoryDropdown.value;
    setCategoryNameText(activeCategory);

    renderCategoryList(activeCategory);
    displayOrHideCategory();
});

closeListBtn.addEventListener("click", () => {
    displayOrHideCategory();
});

deleteBookmarkBtn.addEventListener("click", () => {
    const selectedRadio = categoryList.querySelector('input[type="radio"]:checked');
    if (!selectedRadio) return;

    const selectedName = selectedRadio.value;
    const bookmarks = getBookmarks();

    const updated = bookmarks.filter(
        (b) => !(b.name === selectedName && b.category === activeCategory)
    );

    saveBookmarks(updated);
    renderCategoryList(activeCategory);
});