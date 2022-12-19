import React from "react";
import { useItemContext } from "@/context/item-context";
import { InternationalString } from "@iiif/presentation-3";
import { getLabelAsString } from "@/lib/label";

const Label: React.FC = () => {
  const { label } = useItemContext();

  return <>{getLabelAsString(label as InternationalString)}</>;
};

export default Label;
