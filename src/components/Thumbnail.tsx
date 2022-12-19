import React, { useEffect, useState } from "react";
import { useItemContext } from "@/context/item-context";
import { placeholder } from "@/lib/base64";

const Thumbnail: React.FC = () => {
  const [src, setSrc] = useState<string>(placeholder);
  const { thumbnail } = useItemContext();

  /**
   * hacky functionality to set the src from a IIIF thumbnail
   */
  useEffect(() => {
    if (thumbnail && thumbnail.length > 0) setSrc(thumbnail[0].id as string);
  }, [thumbnail]);

  return <div item-thumbnail=""><img src={src} /></div>;
};

export default Thumbnail;
