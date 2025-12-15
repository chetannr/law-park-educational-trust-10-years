import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname, basename } from 'path'
import { existsSync } from 'fs'

const IMAGES_DIRS = ['public/images', 'public']
const QUALITY = 85 // WebP quality (0-100)

async function optimizeImage(inputPath, outputPath) {
  try {
    const metadata = await sharp(inputPath).metadata()
    const fileSize = (await stat(inputPath)).size
    
    // Convert to WebP with optimization
    await sharp(inputPath)
      .webp({ 
        quality: QUALITY,
        effort: 6 // Higher effort = better compression but slower
      })
      .toFile(outputPath)
    
    const optimizedSize = (await stat(outputPath)).size
    const savings = ((fileSize - optimizedSize) / fileSize * 100).toFixed(1)
    
    console.log(`✓ ${basename(inputPath)} → ${basename(outputPath)} (${(fileSize / 1024).toFixed(1)}KB → ${(optimizedSize / 1024).toFixed(1)}KB, ${savings}% smaller)`)
    
    return { original: fileSize, optimized: optimizedSize, savings }
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message)
    return null
  }
}

async function processDirectory(dir) {
  const files = await readdir(dir)
  const imageExtensions = ['.jpg', '.jpeg', '.png']
  let totalOriginal = 0
  let totalOptimized = 0
  
  for (const file of files) {
    const filePath = join(dir, file)
    const ext = extname(file).toLowerCase()
    
    if (imageExtensions.includes(ext)) {
      const webpPath = filePath.replace(ext, '.webp')
      
      // Skip if WebP already exists and is newer
      if (existsSync(webpPath)) {
        const originalStat = await stat(filePath)
        const webpStat = await stat(webpPath)
        if (webpStat.mtime > originalStat.mtime) {
          console.log(`⊘ Skipping ${file} (WebP already exists and is newer)`)
          continue
        }
      }
      
      const result = await optimizeImage(filePath, webpPath)
      if (result) {
        totalOriginal += result.original
        totalOptimized += result.optimized
      }
    }
  }
  
  if (totalOriginal > 0) {
    const totalSavings = ((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1)
    console.log(`\n📊 Total: ${(totalOriginal / 1024).toFixed(1)}KB → ${(totalOptimized / 1024).toFixed(1)}KB (${totalSavings}% smaller)`)
  }
}

async function main() {
  console.log('🖼️  Optimizing images to WebP format...\n')
  for (const dir of IMAGES_DIRS) {
    await processDirectory(dir)
  }
  console.log('\n✅ Image optimization complete!')
}

main().catch(console.error)
