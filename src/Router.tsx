import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Post } from "./pages/Post/Post";
import { DefaultLayout } from "./Layout/DefaultLayout";

export const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />} path="/">
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  );
};
