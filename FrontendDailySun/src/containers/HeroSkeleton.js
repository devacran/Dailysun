import AppComponent from "../utils/createComponent";
const TodayCardSkeleton = error => {
  const todayCardSkeleton = new AppComponent({
    parent: "today-card",
    className: "today-card__container"
  });
  let componentStr;
  if (error) {
    componentStr = `<div class='today-card today-card__skeleton--error'/>`;
  } else {
    componentStr = `<div class='today-card today-card__skeleton'/>`;
  }
  todayCardSkeleton.renderComponent(componentStr);
};
const CityCardSkeleton = error => {
  const cityCardSkeleton = new AppComponent({
    parent: "city-card",
    className: "city-card__container"
  });
  let componentStr;
  if (error) {
    componentStr = `
      <div class='city-card city-card__skeleton--error'>
        <div class='city-card__error'>Parece que hubo un error :( </div>
      </div>`;
  } else {
    componentStr = `<div class='city-card city-card__skeleton'/>`;
  }
  cityCardSkeleton.renderComponent(componentStr);
};
const HeroSkeleton = async error => {
  TodayCardSkeleton(error);
  CityCardSkeleton(error);
};
export default HeroSkeleton;
