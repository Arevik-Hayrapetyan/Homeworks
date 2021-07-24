import Blog from "../components/Blog";
import CreatePost from "../components/CreatePost";
import Login from "../components/Login";

export const Routes = {
  blog: () => ({ url: "/", text: "Blog", component: Blog }),
  CreatePost: () => ({ url: "/post", text: "Blog", component: CreatePost }),
  Login: () => ({ url: "/login", text: "Login", component: Login }),
};