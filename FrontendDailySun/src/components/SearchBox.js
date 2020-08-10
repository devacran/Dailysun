import AppComponent from "../utils/createComponent.js";
import searchBoxScript from "../js/searchBox.js";
import searchIcon from "../assets/images/busqueda.png";
const SearchBox = appState => {
  const searchBox = new AppComponent({ parent: "navbar__searchBox" });
  const renderSearchBox = `
  <form class="search-box" id="search-box">
          <div id="search-box__dropdown" class="search-box__dropdown">
              <a id="search-box__dropdown-place-holder">C.P</a>
              <div
                  id="search-box__dropdown-list"
                  class="search-box__dropdown-list"
              >
                  <a>Ciudad</a>
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
          <div class="search-box__icon"><img src=${searchIcon}/></div>
      </form>
  `;
  searchBox.renderComponent(renderSearchBox);
  searchBoxScript(appState);
};
export default SearchBox;
