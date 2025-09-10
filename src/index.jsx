import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router'
import App from './component/App'
import Main from './component/Main'
import Details from './component/Details'
import Error from './component/Error'

const router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {path: '/', element: <Main /> },
    {path: '/details/:id', element: <Details /> },
    {path: '*', element: <Error /> }
  ] }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
