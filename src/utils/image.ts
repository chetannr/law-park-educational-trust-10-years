/**
 * Get image sources for <picture> element with WebP and fallback
 */
export function getImageSources(originalPath: string): {
  webp: string
  fallback: string
} {
  const baseUrl = import.meta.env.BASE_URL
  
  // Handle paths that might already include baseUrl
  let cleanPath = originalPath
  if (originalPath.startsWith(baseUrl)) {
    cleanPath = originalPath.slice(baseUrl.length)
  } else if (originalPath.startsWith('/')) {
    cleanPath = originalPath.slice(1)
  }
  
  // Remove base path if present
  if (!cleanPath.startsWith('images/') && !cleanPath.includes('/')) {
    cleanPath = `images/${cleanPath}`
  }
  
  // Get file name without extension
  const nameWithoutExt = cleanPath.substring(0, cleanPath.lastIndexOf('.'))
  
  return {
    webp: `${baseUrl}${nameWithoutExt}.webp`,
    fallback: `${baseUrl}${cleanPath}`,
  }
}

