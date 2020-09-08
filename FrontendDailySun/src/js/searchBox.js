import { getData, getTodayData } from "../utils/network.js";
function searchBoxScript(appState) {
  let todayData;
  const searchBox = document.getElementById("search-box");
  const dropDown = document.getElementById("search-box__dropdown");
  const searchBoxInput = document.getElementById("search-box__input");
  const dropDownSuggestionList = document.getElementById(
    "search-box__dropdown-suggestion-list"
  );
  const dropDownList = document.getElementById("search-box__dropdown-list");
  dropDown.onclick = evn => {
    toggleDropdown(dropDownList);
    if (evn.target !== dropDown) {
      const selectedOption = evn.target;
      const placeHolder = dropDown.querySelector(
        "#search-box__dropdown-place-holder"
      );
      const previusOption = placeHolder.textContent;
      placeHolder.textContent = selectedOption.textContent;
      selectedOption.textContent = previusOption;
    }
  };

  window.onclick = evn => {
    if (!searchBox.contains(evn.target)) {
      closeDropdown(dropDownSuggestionList);
      closeDropdown(dropDownList);
    }
  };
  searchBoxInput.onclick = evn => {
    const placeHolder = searchBoxInput.querySelector("input");
    todayData && toggleDropdown(dropDownSuggestionList);
    if (evn.target !== searchBoxInput) {
      const selectedOption = evn.target;
      const previusOption = placeHolder.placeholder;
      placeHolder.value = selectedOption.textContent;
      placeHolder.focus();
    }
  };
  searchBoxInput.oninput = async () => {
    const placeHolder = searchBoxInput.querySelector("input");
    if (!placeHolder.value) {
      closeDropdown(dropDownSuggestionList);
    }
    openDropdown(dropDownSuggestionList);
    //Aqui haces el llamado a la api
    let results = []; //estos se llenan con la api
    //const data = await getData('placeholder.value')
    try {
      const res = await getTodayData({ city: placeHolder.value });
      todayData = res && res.data.body;
      todayData && results.push(todayData);
    } catch (err) {
      console.log(err);
    }
    let renderDropDownSuggestionList = [];
    results.length > 0 &&
      results.forEach(result => {
        let cityName = result.name;
        let country = result.sys.country;
        renderDropDownSuggestionList.push(`<a>${cityName} ${country}</a>`);
      });

    dropDownSuggestionList.innerHTML = renderDropDownSuggestionList.join(``);
  };

  searchBox.onsubmit = evn => {
    evn.preventDefault();
    appState.state = {
      ...appState.state,
      todayData,
      location: todayData.coord
    };
  };
  const toggleDropdown = list => {
    if (list.style.display === "block") {
      list.style.display = "none";
    } else {
      list.style.display = "block";
    }
  };
  const openDropdown = list => {
    list.style.display === "block";
  };
  const closeDropdown = list => {
    list.style.display = "none";
  };
}
export default searchBoxScript;
