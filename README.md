# Item

Work in progress to demo how you might render IIIF `items` entries in a composable method. Entries can be of type `Canvas` `Manifest` or `Collection`.

## Install

```
npm install @mathewjordan/item
```

## Usage

### Simple Method
```tsx
<Item item={canvas} />
```


### Composable Method (w/ children)
```tsx
<Item.Root item={canvas} >
  <Item.Thumbnail />
  <Item.Label />
  <Item.Summary />
</Item.Root>
```
