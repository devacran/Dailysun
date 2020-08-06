import $footer from "../pug/footer/_footer.pug";

function Header() {
  document.getElementById("footer").innerHTML = $footer;
}

export default Header;
