import React, { ReactNode } from "react";
import {
  CanvasNormalized,
  CollectionNormalized,
  ContentResource,
  InternationalString,
  ManifestNormalized,
} from "@iiif/presentation-3";
import { ItemProvider } from "@/context/item-context";
import Figure from "@/layouts/Figure";
import Label from "@/components/Label";
import Summary from "@/components/Summary";
import Thumbnail from "@/components/Thumbnail";

interface ItemProps {
  callback: (id: string) => void;
  children?: ReactNode | ReactNode[];
  item: CanvasNormalized | CollectionNormalized | ManifestNormalized;
}

interface ItemComposition {
  Root: React.FC<ItemProps>;
  Label: React.FC;
  Summary: React.FC;
  Thumbnail: React.FC;
}

const Item: ItemComposition & React.FC<ItemProps> = ({
  callback,
  children,
  item,
}) => {
  const { label, thumbnail, summary } = item;

  return (
    <div item-root onClick={() => callback(item.id)}>
      <ItemProvider
        initialState={{
          label: label as InternationalString,
          summary: summary as InternationalString,
          thumbnail: thumbnail as unknown as ContentResource[],
        }}
      >
        {children ? children : <Figure />}
      </ItemProvider>
    </div>
  );
}; 

Item.Root = Item;
Item.Label = Label;
Item.Summary = Summary;
Item.Thumbnail = Thumbnail;

export default Item;
