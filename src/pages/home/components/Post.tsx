import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export interface PostData {
  title: string;
  created_at: string;
  url: string;
  body: string;
  number: number;
}

interface PostProps {
  post: PostData;
}

export const Post = ({ post }: PostProps) => {
  const navigate = useNavigate();

  let body = post.body;
  let date = new Date(post.created_at);

  if (body.length > 200) {
    body = body.substring(200, 0) + "...";
  }

  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
  });

  return (
    <button
      onClick={() => navigate(`/post/${post.number}`)}
      className="w-[416px] h-[260px] p-5 bg-base-post rounded-xl shadow-profile flex flex-col"
    >
      <div className="flex items-start justify-between mb-5 gap-4">
        <h1 className="text-base-title font-bold text-xl">{post.title}</h1>
        <span className="text-base-span text-sm">
          {publishedDateRelativeToNow}
        </span>
      </div>
      <p className="text-base text-base-text ">
        <ReactMarkdown>{body}</ReactMarkdown>
      </p>
    </button>
  );
};
