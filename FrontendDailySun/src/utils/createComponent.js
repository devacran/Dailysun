class Component {
  constructor(options) {
    this.options = options;
    this.createComponent();
  }
  createComponent() {
    const { parent, className, id } = this.options;
    this.parent = document.getElementById(parent);
    this.component = document.createElement("div");
    className && this.component.setAttribute("class", className);
    id && this.component.setAttribute("id", id);
  }
  renderComponent($element) {
    this.parent.innerHTML = "";
    if (typeof $element === "string") {
      this.component.innerHTML = $element;
    }

    if (typeof $element === "object") {
      this.component.innerHTML = $element.join(``);
    }
    this.parent.appendChild(this.component);
  }
}
export default Component;
//options
//$element could be a html node string or array of nodes strings
// {
//   parent: id of the node where the element will be placed
//   className: classname that will have the component
//   id: id that will have the component
// }
