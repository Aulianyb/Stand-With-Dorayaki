import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError(); 
    console.error(error); 

    return (
        <>
            <h1> Waduh </h1>
            <img src="src/assets/404.jpg"></img>
            <p> 404 Not Found</p>
        </>
    );
}