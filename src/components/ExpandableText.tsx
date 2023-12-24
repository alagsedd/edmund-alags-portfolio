import { useState } from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  gameDetails: string;
}
const ExpandableText = ({ gameDetails }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const trimmed =
    gameDetails.length > 30 && !isExpanded
      ? gameDetails.slice(0, 30) + " ..."
      : gameDetails;

  return (
    <div>
      <p className="m-3">
        {trimmed}

        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline"
          colorScheme="teal"
          size="sm"
        >
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      </p>
    </div>
  );
};

export default ExpandableText;
