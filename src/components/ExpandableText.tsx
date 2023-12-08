import { Button } from "@mui/material";
import { useState } from "react";

interface Props {
  gameDetails: string;
}
const ExpandableText = ({ gameDetails }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const trimmed =
    gameDetails.length > 30 && !isExpanded
      ? gameDetails.slice(0, 100) + " ..."
      : gameDetails;

  return (
    <div>
      <p className="m-3">
        {trimmed}
        <Button
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outlined"
        >
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      </p>
    </div>
  );
};

export default ExpandableText;
