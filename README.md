# Cat Calorie Calculator Core

TypeScript utilities for cat calorie planning using RER/DER-style veterinary logic.

Built by [pawsandpounds.com](https://pawsandpounds.com).

## Installation

```bash
npm install cat-calorie-calculator-core
```

## Quick Start

```ts
import { rerKg, dailyCatCalories } from "cat-calorie-calculator-core"

const rer = rerKg(4.5) // ~215 kcal/day baseline

const maintenance = dailyCatCalories(4.5, {
  neutered: true,
  active: false,
})

const weightLoss = dailyCatCalories(4.5, {
  neutered: true,
  active: false,
  goal: "weight_loss",
})
```

## API

### `rerKg(kg: number): number`
Returns resting energy requirement baseline using `70 * kg^0.75`.

### `dailyCatCalories(kg: number, profile: CatProfile): number`
Returns rounded daily kcal target based on goal and profile.

`CatProfile`:

```ts
type CatProfile = {
  neutered: boolean
  active: boolean
  goal?: "maintenance" | "weight_loss"
}
```

## Notes

- This package is educational and planning-oriented.
- Always validate feeding changes with a licensed veterinarian.

## License

MIT