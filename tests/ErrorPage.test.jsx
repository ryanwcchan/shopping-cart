import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../src/pages/ErrorPage";
import Root from "../src/Root";
import { render, screen } from "@testing-library/react";

describe('Error Handling', () => {
    it('should render error page', () => {
        const ThrowErrorComponent = () => {
            throw new Error('Test error');
        }

        const testRouter = createBrowserRouter([
            {
                path: '/',
                element: <Root />,
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: '/',
                        element: <ThrowErrorComponent />,
                    }
                ]
            }
        ])
    
        render(<RouterProvider router={testRouter} />)

        expect(screen.getByText(/Error Page/)).toBeInTheDocument();
    })
})