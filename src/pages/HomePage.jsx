import { useState } from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import TipsLayout from "../features/Tips/TipsLayout";
import FilterBox from "../features/Tips/FilterBox";
import TipsContextProvider from "../context/TipsContextProvider";
import AddTipsModal from "../features/Tips/AddTipsModal";

function HomePage() {
  const [showModal, setShowModal] = useState(false);

  function handleClose() {
    setShowModal((show) => !show);
  }

  return (
    <TipsContextProvider>
      <div className="grid h-dvh grid-rows-[auto_1fr_auto] relative">
        <Header onShow={handleClose} />
        <div className="relative">
          <FilterBox />
          {showModal && <AddTipsModal onClose={handleClose} />}
          <TipsLayout />
        </div>
        <Footer />
      </div>
    </TipsContextProvider>
  );
}

export default HomePage;
