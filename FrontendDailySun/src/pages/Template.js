import Header from "../components/Header";
import Footer from "../components/Footer";

const Template = async appState => {
  await Header(appState);
  await Footer();
};
export default Template;
