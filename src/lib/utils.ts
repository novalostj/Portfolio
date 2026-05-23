export const BASE_PATH = "/Portfolio";

export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}
