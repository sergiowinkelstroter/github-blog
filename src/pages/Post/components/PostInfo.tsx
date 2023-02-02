import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "phosphor-react";
import { NavLink } from "react-router-dom";
import { SiglePostData } from "../Post";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface PostInfoProps {
  data: SiglePostData | undefined;
}

export const PostInfo = ({ data }: PostInfoProps) => {
  let date = new Date(data!.created_at);

  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
  });

  return (
    <div className="-mt-20 flex flex-col p-8 bg-base-profile  rounded-lg shadow-profile">
      <header className="flex items-center justify-between text-blue text-xs uppercase font-bold">
        <NavLink to={"/"} className="flex items-center gap-1">
          <CaretLeft size={18} /> Voltar
        </NavLink>
        <a href={data!.html_url} className="flex gap-2 items-center">
          <span>Ver no github</span>
          <ArrowSquareOut size={16} />
        </a>
      </header>
      <div className="mt-4">
        <h1 className="text-base-title font-bold text-2xl ">{data!.title}</h1>
        <div className="flex gap-8 mt-2 text-base-span text-base">
          <span className="flex gap-2">
            <GithubLogo size={20} />
            {data!.user.login}
          </span>
          <span className="flex gap-2">
            <CalendarBlank size={20} />
            {publishedDateRelativeToNow}
          </span>
          <span className="flex gap-2">
            <ChatCircle size={20} />
            {data!.comments} comentários
          </span>
        </div>
      </div>
    </div>
  );
};
