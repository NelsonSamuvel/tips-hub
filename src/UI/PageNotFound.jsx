import { useNavigate } from "react-router-dom";
import Button from "./Button";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="p-4 h-36 space-y-4">
      <p className="text-lg font-semibold">Page Not Found☹️</p>
      <Button onClick={() => navigate(-1, { replace: true })}>
        &larr;Go back
      </Button>
    </div>
  );
}

export default PageNotFound;
