import { notFound } from "next/navigation";
import { getProjectContent, getProjectSlugs } from "@/lib/getProjectContents";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs(); // Get all available slugs
  return slugs.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectContent = await getProjectContent(slug);

  if (!projectContent) {
    return notFound();
  }

  return (
    <article className="prose lg:prose-xl w-full break-words flex flex-col items-center justify-center">
      <div className="max-w-80 md:max-w-2xl lg:max-w-xl xl:max-w-4xl 2xl:max-w-6xl py-[40%] md:py-[30%] lg:py-[20%] xl:py-[15%]">
        {projectContent.data.tags.map((tag: string) => (
          <span
            key={tag}
            className="text-sm px-2 py-1 bg-gray-200 rounded-md mr-2 mb-4 inline-block"
          >
            {tag}
          </span>
        ))}
        <h1 className="text-3xl font-bold">{projectContent.data.title}</h1>
        <p className="text-gray-500 text-sm">{projectContent.data.date}</p>

        <Image
          src={projectContent.data.imgUrl}
          alt={projectContent.data.title}
          fill
          className="w-full max-h-[400px] object-cover -z-50 opacity-30"
          style={{ margin: 0 }}
        />

        <ReactMarkdown
          components={{
            a: ({
              href,
              children,
            }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500"
              >
                {children}
              </a>
            ),
          }}
        >
          {projectContent.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}