import searchBoxScript from "../js/searchBox.js";
const SearchBox = appState => {
  const parent = document.getElementById("navbar__searchBox");
  const searchBox = document.createElement("div");
  const renderSearchBox = `
  <form class="search-box" id="search-box">
          <div id="search-box__dropdown" class="search-box__dropdown">
              <a id="search-box__dropdown-place-holder">zip code</a>
              <div
                  id="search-box__dropdown-list"
                  class="search-box__dropdown-list"
              >
                  <a>City</a>
              </div>
          </div>
          <div class="search-box__input" id="search-box__input">
              <input placeholder="Buscar" autofocus />
              <div
                  id="search-box__dropdown-suggestion-list"
                  class="search-box__dropdown-suggestion-list"
              >
              </div>
          </div>
      </form>
  `;
  parent.innerHTML = "";
  searchBox.innerHTML = renderSearchBox;
  parent.appendChild(searchBox);
  searchBoxScript(appState);
};
export default SearchBox;
