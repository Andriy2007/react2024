import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {ErrorPage} from "./pages/ErorPage";
import TodosPage from "./pages/TodosPage";
import CommentsPage from "./pages/CommentsPage";
import AlbumsPage from "./pages/AlbumsPage";
import PostsPage from "./pages/PostsPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [

            {
                path: 'todos', element: <TodosPage/>,
            },
            {
                path: 'albums', element: <AlbumsPage/>,
            },
            {
                path: 'comments', element: <CommentsPage/>, children: [
                    {
                        path: 'post', element: <PostsPage/>,
                    }

                ]
            }
        ]
    }
]);

export {
    router
}