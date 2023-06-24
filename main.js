import { router, render } from "./lib";
import test from "./nav/test";
import addCat from "./page/admin/project/addCat";
import addPost from "./page/admin/project/addPost";
import addProject from "./page/admin/project/addProject";
import addteam from "./page/admin/project/addteam";
import catEdit from "./page/admin/project/catEdit";
import editproject from "./page/admin/project/editproject";
import editteam from "./page/admin/project/editteam";
import listCat from "./page/admin/project/listCat";
import listPost from "./page/admin/project/listPost";
import listProject from "./page/admin/project/listProject";
import listteam from "./page/admin/project/listteam";
import postEdit from "./page/admin/project/postEdit";
import homeAdmin from "./page/admin/user/home";
import user from "./page/admin/user/user";
import userEdit from "./page/admin/user/userEdit";
import about from "./page/project/about";
import contact from "./page/project/contact";
import home from "./page/project/home";
import homePage from "./page/project/homePage";
import posts from "./page/project/posts";
import project from "./page/project/project";
import projects_detail from "./page/project/projects_detail";
import project_detail from "./page/project/project_detail";
import sigin from "./page/sigin/sigin";

const app = document.querySelector("#app");

router.on(("/"), () => render(home, app))
router.on(("/:id/project_detail"), (params) => render(() => project_detail(params), app))
router.on(("/test"), () => render(test, app))
router.on(("/contact"), () => render(contact, app))
router.on(("/project"), () => render(project, app))
router.on(("/about"), () => render(about, app))
router.on(("/posts"), () => render(posts, app))
router.on(("/homepage"), () => render(homePage, app))
router.on(("/:id/project"), ({data}) => render(() => projects_detail(data), app))

router.on(("/sigin"), () => render(sigin, app))

router.on(("/admin"), () => render(homeAdmin, app))
router.on(("/user"), () => render(user, app))
router.on(("/edit"), () => render(userEdit, app))

router.on(("/listpost"), () => render(listPost, app))
router.on(("/listproject"), () => render(listProject, app))
router.on(("/listpost#/listpost"), () => render(listPost, app))
router.on(("/:id/edit"), ({data}) => render(()=>postEdit(data), app))
router.on(("/:id/editcat"), ({ data }) => render(() => catEdit(data), app))
router.on("/listcat",()=> render(listCat, app))
router.on("/addpost", () => render(addPost, app))
router.on("/addcat", () => render(addCat, app))
router.on("/addteam", () => render(addteam, app))
router.on("/listteam", () => render(listteam, app))
router.on("/:id/editteam", ({data}) => render(()=>editteam(data), app))
router.on("/:id/editproject", ({ data }) => render(() => editproject(data), app))
router.on("/addproject", () => render(addProject, app))
router.resolve()