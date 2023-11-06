import { Button } from "@mui/material";
import { useState } from "react";

interface Props {
  projectDetails: string;
}
const ExpandableText = ({ projectDetails }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const trimmed =
    projectDetails.length > 30 && !isExpanded
      ? projectDetails.slice(0, 100) + " ..."
      : projectDetails;

  return (
    <div>
      <p className="m-3">
        {trimmed}
        <Button onClick={() => setIsExpanded(!isExpanded)} variant="outlined">
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      </p>
    </div>
  );
};

export default ExpandableText;
