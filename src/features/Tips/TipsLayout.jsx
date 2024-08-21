import Loader from "../../UI/Loader";
import { filterItems, searchFilterTip } from "../../utils/helper";
import TipsNotFound from "./TipsNotFound";
import { useTips } from "../../context/TipsContextProvider";
import { useSearchParams } from "react-router-dom";
import TipsItem from "./TipsItem";
import { useSearchFilter } from "../../context/SearchContextProvider";

function TipsLayout() {
  const { tips, status } = useTips();
  const { searchBy } = useSearchFilter();

  const { searchedTip } = useSearchFilter();

  const [searchParams] = useSearchParams();
  const language = searchParams.get("lang") || "all";

  let filteredTips = tips;
  if (language !== "all")
    filteredTips = filterItems(tips, "language", language);

  const isSearchTip = searchedTip.length > 0;

  if (isSearchTip) {
    filteredTips = searchFilterTip(filteredTips, searchedTip, searchBy);
  }

  if (!filteredTips.length) return <TipsNotFound searchBy={searchBy} />;

  return (
    <div className="px-3 py-4">
      <div className="relative">
        {status === "loading" && <Loader />}
        <ul className="mt-4 px-2 sm:px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTips.map((tip) => (
            <TipsItem key={tip.id} tip={tip} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TipsLayout;
