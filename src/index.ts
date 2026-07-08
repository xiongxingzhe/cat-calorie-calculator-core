export type CatGoal = "maintenance" | "weight_loss"
export type CatProfile = {
  neutered: boolean
  active: boolean
  goal?: CatGoal
}

export function rerKg(kg: number): number {
  if (!Number.isFinite(kg) || kg <= 0) throw new Error("kg must be > 0")
  return 70 * Math.pow(kg, 0.75)
}

export function dailyCatCalories(kg: number, profile: CatProfile): number {
  const rer = rerKg(kg)
  if (profile.goal === "weight_loss") return Math.round(rer * 0.8)
  const factor = profile.neutered ? (profile.active ? 1.3 : 1.2) : (profile.active ? 1.4 : 1.3)
  return Math.round(rer * factor)
}