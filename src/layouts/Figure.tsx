import React from "react";
import Thumbnail from "@/components/Thumbnail";
import Label from "@/components/Label";

const Figure: React.FC = () => {
  return (
    <figure>
      <Thumbnail />
      <figcaption>
        <Label />
      </figcaption>
    </figure>
  );
};

export default Figure;
