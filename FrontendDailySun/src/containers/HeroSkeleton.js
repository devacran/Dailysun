const TodayCardSkeleton = () => {
  const parent = document.getElementById("today-card");
  const todayCard = document.createElement("div");
  const renderTodayCard = `<div class='today-card today-card__skeleton'/>`;
  parent.innerHTML = "";
  todayCard.innerHTML = renderTodayCard;
  parent.appendChild(todayCard).setAttribute("class", "today-card__container");
};
const CityCardSkeleton = appState => {
  const parent = document.getElementById("city-card");
  const cityCard = document.createElement("div");
  const renderCityCard = `
    <div class='city-card city-card__skeleton'>
      <a id='cambiar'>Cambiar estado</a>
      <div class='city-card__error'>Parece que hubo un error :( </div>
    </div>
    `;
  parent.innerHTML = "";
  cityCard.innerHTML = renderCityCard;
  parent.appendChild(cityCard).setAttribute("class", "city-card__container");
};
const HeroSkeleton = async () => {
  TodayCardSkeleton();
  CityCardSkeleton();
};
export default HeroSkeleton;
