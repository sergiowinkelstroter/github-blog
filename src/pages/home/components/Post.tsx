import { NavLink } from "react-router-dom";

export interface PostData {
  title: string;
  updated_at: string;
  url: string;
  body: string;
  number: number;
}

interface PostProps {
  post: PostData;
}

export const Post = ({ post }: PostProps) => {
  return (
    <NavLink
      to={`/post/${post.number}`}
      className="w-[416px] p-5 bg-base-post rounded-xl shadow-profile flex flex-col"
    >
      <div className="flex items-start justify-between mb-5 gap-4">
        <h1 className="text-base-title font-bold text-xl">{post.title}</h1>
        <span className="text-base-span text-sm">Há 1 dia</span>
      </div>
      <p className="text-base text-base-text">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript
      </p>
    </NavLink>
  );
};
