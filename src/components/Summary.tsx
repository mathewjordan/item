import React from "react";
import { useItemContext } from "@/context/item-context";
import { InternationalString } from "@iiif/presentation-3";
import { getLabelAsString } from "@/lib/label";

const Summary: React.FC = () => {
  const { summary } = useItemContext();

  return <span>{getLabelAsString(summary as InternationalString)}</span>;
};

export default Summary;
