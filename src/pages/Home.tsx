import axios from "axios";
import React, { useEffect, useState } from "react";
import { Profile } from "../components/Profile";

export interface ProfileData {
  name: string;
  location: string;
  login: string;
  html_url: string;
  avatar_url: string;
  bio: string;
  followers: number;
}

export const Home = () => {
  const [data, setData] = useState<ProfileData>({} as ProfileData);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/sergiowinkelstroter")
      .then((response) => setData(response.data));
  }, []);

  return (
    <main>
      <Profile data={data} />
    </main>
  );
};
