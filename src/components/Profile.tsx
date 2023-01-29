import { ProfileData } from "../pages/Home";
import github from "../assets/github.svg";
import { ArrowSquareOut, GithubLogo, House, Users } from "phosphor-react";

interface ProfileProps {
  data: ProfileData;
}

export const Profile = ({ data }: ProfileProps) => {
  return (
    <div className="-mt-20 w-3/4 m-auto  flex p-8 bg-base-profile gap-8 rounded-lg shadow-profile">
      <img className="w-36 h-36 rounded-md" src={data.avatar_url} alt="" />
      <div className="w-full flex flex-col pt-2">
        <header className="flex justify-between">
          <h3 className="text-base-title font-bold text-2xl">{data.name}</h3>
          <a
            href={data.html_url}
            className="text-blue flex gap-2 font-bold items-center"
          >
            <span className="text-sm">GITHUB</span>
            <ArrowSquareOut size={16} />
          </a>
        </header>
        <p className="text-base-text text-base mt-2">{data.bio}</p>
        <div className="flex gap-8 mt-10">
          <span className="flex gap-2 text-base-subtitle items-center  text-base">
            <GithubLogo size={20} />
            {data.login}
          </span>
          <span className="flex gap-2 text-base-subtitle items-center text-base">
            <House size={20} />
            {data.location}
          </span>
          <span className="flex gap-2 text-base-subtitle items-center text-base">
            <Users size={20} />
            {data.followers}
            <span>seguidores</span>
          </span>
        </div>
      </div>
    </div>
  );
};
