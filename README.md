# retro-spec — data branch

This branch holds only personal data: JSON files and images.
It has no history in common with `main` (the app code).

## Structure

```
data/
  cars.json
  phones.json
  laptops.json
public/images/
  cars/
  phones/
  laptops/
```

## Adding an entry

1. Edit the relevant JSON file
2. Add your image to `public/images/{category}/{slug}.jpg`
3. Commit and push — the site rebuilds automatically

## Image naming

Match the `image` field in the JSON exactly, e.g.:
- JSON: `"image": "cars/2025-ford-bronco.jpg"`
- File: `public/images/cars/2025-ford-bronco.jpg`
