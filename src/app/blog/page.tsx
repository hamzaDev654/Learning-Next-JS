import Link from "next/link";
import { FC } from "react";

const BlogPage: FC = () => {
  return (
    <main>
      <h1>The Blog</h1>
      <p>
        <Link href="/blog/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="/blog/post-1">Post 1</Link>
      </p>
    </main>
  );
};

export default BlogPage;
