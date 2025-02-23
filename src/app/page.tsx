import { prisma } from "@/lib/prisma";

export const revalidate = 5;

export default async function Home() {
  const jobPosts = await prisma.jobPost.findMany();

  console.info({ jobPosts });

  return (
    <div>
      <h1>Job Posts</h1>
      <ul>
        {jobPosts.map((jobPost) => (
          <li key={jobPost.id}>
            <h2>{jobPost.title}</h2>
            <p>{jobPost.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
