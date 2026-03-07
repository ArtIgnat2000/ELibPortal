// Auto-incremented by GitHub Actions
export const APP_VERSION = typeof __BUILD_NUMBER__ !== 'undefined' ? String(__BUILD_NUMBER__) : '1';
export const BUILD_DATE = typeof __BUILD_DATE__ !== 'undefined' ? String(__BUILD_DATE__) : new Date().toISOString().slice(0, 10);
