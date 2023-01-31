import { useQuery } from "react-query";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import axios from "axios";
import { PostData } from "./components/Post";
import { useState } from "react";

export const Home = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useQuery("post", () => {
    return axios
      .get(
        "https://api.github.com/search/issues?q=repo:sergiowinkelstroter/github-blog"
      )
      .then((res) => res.data);
  });

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  const filter = data.items.filter((item: any) =>
    item.title.toLowerCase().includes(search)
  );

  console.log(filter);

  return (
    <div className="w-3/4 m-auto">
      <Profile />

      <section className="flex flex-col w-full mt-16 gap-2">
        <div className="flex justify-between">
          <h1 className="text-base-subtitle font-bold text-lg">Publicações</h1>
          <span className="text-base-span text-sm">
            {data.total_count}{" "}
            {data.total_count === 1 ? "publicaçao" : "publicações"}
          </span>
        </div>
        <input
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          value={search}
          type="text"
          placeholder="Buscar conteúdo"
          className="bg-base-input border border-base-border p-3 rounded-md text-base-text placeholder:text-base-label focus:outline-none focus:border-blue"
        />
      </section>
      <section className="w-full flex flex-wrap my-12 gap-8 justify-center">
        {filter.length > 0
          ? filter.map((post: PostData) => (
              <Post key={post.title} post={post} />
            ))
          : data.items.map((post: PostData) => (
              <Post key={post.title} post={post} />
            ))}
      </section>
    </div>
  );
};
