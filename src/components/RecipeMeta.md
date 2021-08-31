Everything:

```tsx
<RecipeMeta
  flags={{
    vegan: false,
    vegetarian: true,
    glutenFree: true,
    dairyFree: false,
    noAddedSugar: true
  }}
  margaritasFavorite
  cuisines={['Mexican']}
  tags={['Breakfast', 'Baking', 'SpicyAsHell']}
  time={45}
  overnight
/>
```

No time:

```tsx
<RecipeMeta
  flags={{
    vegan: false,
    vegetarian: true,
    glutenFree: true,
    dairyFree: false,
    noAddedSugar: true
  }}
  artemsFavorite
  cuisines={['Russian']}
  tags={['Breakfast', 'Baking', 'SpicyAsHell']}
/>
```

Without tags but with time and cuisine:

```tsx
<RecipeMeta
  flags={{
    vegan: true,
    vegetarian: true,
    glutenFree: true,
    dairyFree: false,
    noAddedSugar: false
  }}
  time={20}
  cuisines={['Mexican']}
/>
```

Overnight recipe:

```tsx
<RecipeMeta
  flags={{
    vegan: true,
    vegetarian: true,
    glutenFree: true,
    dairyFree: false,
    noAddedSugar: false
  }}
  time={45}
  cuisines={[]}
  overnight
/>
```
