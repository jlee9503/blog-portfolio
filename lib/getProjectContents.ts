import matter from "gray-matter";
import fs from "fs/promises"; // Use fs/promises for async functions
import path from "path";

const contentDir = path.join(process.cwd(), "data/content");

export async function getProjectContents() {
  const files = await fs.readdir(contentDir); // Read directory asynchronously

  return Promise.all(
    files.map(async (filename) => {
      const fileContent = await fs.readFile(
        path.join(contentDir, filename),
        "utf-8"
      );
      const { data, content } = matter(fileContent);

      return {
        ...data,
        content,
      };
    })
  );
}

export async function getProjectContent(slug: string) {
  const filePath = path.join(contentDir, `${slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return { data, content };
  } catch (error) {
    console.error("Error reading file:", error);
    return null;
  }
}