import matter from "gray-matter";
import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "data/content");

export async function getProjectContents() {
  const files = fs.readdirSync(contentDir);

  return files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(contentDir, filename),
      "utf-8"
    );
    const { data, content } = matter(fileContent);

    return {
      ...data,
      content,
    };
  });
}

export function getProjectContent(slug: string) {
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return { data, content };
}