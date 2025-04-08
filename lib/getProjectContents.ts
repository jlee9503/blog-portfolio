import matter from "gray-matter";
import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "data/content");

// export async function getProjectContents() {
//   const files = await fs.readdir(contentDir); // Read directory asynchronously

//   return Promise.all(
//     files.map(async (filename) => {
//       const fileContent = await fs.readFile(
//         path.join(contentDir, filename),
//         "utf-8"
//       );
//       const { data, content } = matter(fileContent);

//       return {
//         ...data,
//         content,
//       };
//     })
//   );
// }

export async function getProjectContents() {
  // Get list of files in content directory
  const files = fs
    .readdirSync(contentDir)
    .filter((filename) => filename.endsWith(".md"));

  return files
    .map((filename) => {
      const filePath = path.join(contentDir, filename);
      try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);

        return { ...data, content };
      } catch (error) {
        console.error(`Error reading file "${filename}":`, error);
        return null; // Skip corrupted files
      }
    })
    .filter(Boolean); // Remove null values
}

export async function getProjectContent(slug: string) {
  try {
    const decodedSlug = decodeURIComponent(slug);

    if (!/^[a-zA-Z0-9-_]+$/.test(decodedSlug)) {
      throw new Error(`Invalid slug: ${decodedSlug}`);
    }

    const filePath = path.join(contentDir, `${decodedSlug}.md`);
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return { data, content };
  } catch (error) {
    console.error("Error reading file:", error);
    return null;
  }
}

export async function getProjectSlugs() {
  const files = fs.readdirSync(contentDir);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, "")); // Remove .md extension
}