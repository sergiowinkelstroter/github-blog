import { useQuery } from "react-query";
import { PostInfo } from "./components/PostInfo";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export interface SiglePostData {
  title: string;
  html_url: string;
  user: {
    login: string;
  };
  comments: number;
  body: string;
  created_at: string;
}

export const Post = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery<SiglePostData>(["post", id], () => {
    return axios
      .get(
        `https://api.github.com/repos/sergiowinkelstroter/github-blog/issues/${id}`
      )
      .then((res) => res.data);
  });

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  let body = data?.body;

  return (
    <div className="w-3/4 m-auto">
      <PostInfo data={data} />
      <div className="my-10">
        <p className="text-base-text text-base ">
          <ReactMarkdown>{body}</ReactMarkdown>
        </p>
      </div>
    </div>
  );
};
