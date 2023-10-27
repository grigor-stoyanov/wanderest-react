import {createBrowserRouter} from 'react-router-dom';
import Landing from './Layouts/Landing/Landing';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Home from './Layouts/Home/Home';
const router = createBrowserRouter([
    {
        path:'/',
        element:<Landing/>,
        errorElement: <ErrorBoundary/>,
    },{
        path:'/home',
        element:<Home/>
    }
]);



export default router;