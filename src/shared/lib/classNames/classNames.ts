
type Mods = Record<string, boolean | string>

export function classNames(clc: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    clc,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([calssName, value]) => Boolean(value))
      .map(([calssName]) => calssName)
  ].join(" ")
}