import { notFound } from "next/navigation";


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
  }) {
  const { slug } = await params;
  
  return (
    <div className="layout">{slug}</div>
  );
}
