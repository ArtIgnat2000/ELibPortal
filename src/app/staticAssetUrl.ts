const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
const BUILD_VERSION = `${__BUILD_DATE__}-${__BUILD_NUMBER__}`

export function buildStaticAssetUrl(assetPath: string) {
  const normalizedPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`
  return `${BASE}${normalizedPath}?v=${BUILD_VERSION}`
}