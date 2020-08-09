import AppComponent from "../utils/createComponent.js";
const HourSectionSkeleton = () => {
  const hourSectionSkeleton = new AppComponent({
    parent: "hour-section",
    className: "hour-section__info"
  });
  const componentStr = `<div class='hour-section__error'>Parece que hubo un error :(</div>`;
  hourSectionSkeleton.renderComponent(componentStr);
};
export default HourSectionSkeleton;
