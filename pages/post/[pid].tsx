import { useRouter } from "next/router";
import { posts } from "../../data/posts";
import { Post } from "../post";

const PostWithData = () => {
  const router = useRouter();
  const { pid } = router.query;
  if (!pid) {
    return <p>No such entry found!</p>;
  }
  const pidInt = Array.isArray(pid) ? parseInt(pid[0]) : parseInt(pid);
  if (pidInt === NaN) {
    return <p>Incorrect post id - please use only a number!</p>;
  }

  // simulate looking up in a database
  const post = posts.find((p) => p.postID === pidInt);
  if (!post) {
    return <p>No such post found!</p>;
  }

  return (
    <Post>
      <p>post: {post.title}</p>
    </Post>
  );
};

export default PostWithData;
