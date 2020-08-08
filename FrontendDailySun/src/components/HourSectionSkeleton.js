const HourSectionSkeleton = () => {
  const parent = document.getElementById("hour-section");
  const hourCards = document.createElement("div");
  const renderHours = `<div class='hour-section__error'>Parece que hubo un error :(</div>`;
  hourCards.innerHTML = renderHours;
  parent.appendChild(hourCards).setAttribute("class", "hour-section__info");
};
export default HourSectionSkeleton;
