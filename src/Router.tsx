import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { DefaultLayout } from "./Layout/DefaultLayout";

export const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />} path="/">
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  );
};