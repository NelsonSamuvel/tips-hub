import {  useState} from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import TipsLayout from "../features/Tips/TipsLayout";
import FilterBox from "../features/Tips/FilterBox";
import TipsContextProvider from "../context/TipsContextProvider";
import AddTipsModal from "../features/Tips/AddTipsModal";


function HomePage() {

  const [showModal,setShowModal] = useState(true);



  return (
    <TipsContextProvider>
      <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
        <Header onShow = {()=>setShowModal(show => !show)} />
        <FilterBox />
        {showModal && <AddTipsModal/>}
        <TipsLayout />
        <Footer />
      </div>
    
    </TipsContextProvider>
  );
}

export default HomePage;
