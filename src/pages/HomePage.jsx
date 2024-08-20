import Header from "../UI/Header";
import Footer from "../UI/Footer";
import TipsLayout from "../features/Tips/TipsLayout";
import FilterBox from "../features/Tips/FilterBox";
import TipsContextProvider from "../context/TipsContextProvider";

function HomePage() {
  return (
    <TipsContextProvider>
      <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
        <Header />
        <FilterBox />

        <TipsLayout />
        <Footer />
      </div>
    </TipsContextProvider>
  );
}

export default HomePage;
