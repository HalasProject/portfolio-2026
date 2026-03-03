import { readdirSync, existsSync } from "fs";
import path from "path";

const IMAGE_EXT = [".png", ".jpg", ".jpeg", ".webp", ".gif"];

/**
 * Returns image paths from public/projects/[slug]/ for use in the project detail page.
 * Paths are returned as public URLs (e.g. /projects/trackfast/1.png).
 */
export function getProjectGalleryImages(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "projects", slug);
  if (!existsSync(dir)) return [];

  const files = readdirSync(dir);
  const images = files
    .filter((f) => IMAGE_EXT.includes(path.extname(f).toLowerCase()))
    .sort((a, b) => {
      const na = parseInt(path.basename(a, path.extname(a)), 10);
      const nb = parseInt(path.basename(b, path.extname(b)), 10);
      if (!isNaN(na) && !isNaN(nb)) return na - nb;
      return a.localeCompare(b);
    })
    .map((f) => `/projects/${slug}/${f}`);

  return images;
}
