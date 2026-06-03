import { FC } from "react";

type Props = { params: Promise<{ slug: string }> };

const BlogDetails: FC<Props> = async ({ params }) => {
  const { slug } = await params;
  return (
    <>
      <h1>Blog Details</h1>
      <p>{slug}</p>
    </>
  );
};

export default BlogDetails;
