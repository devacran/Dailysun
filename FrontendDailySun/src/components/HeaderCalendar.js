const HeaderCalendar = data => {
  const parent = document.getElementById("header-calendar__right");
  const headerSectionRight = document.createElement("div");
  headerSectionRight.innerHTML = `
    <div>${data.name}</div>
  `;
  parent.appendChild(headerSectionRight);
};
export default HeaderCalendar;
