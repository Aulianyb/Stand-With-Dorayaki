import { Link } from "react-router-dom"; 

function Title(){
   return(
    <>
        <div class="circle"></div>
    </>
   ); 
}

export default function Stores(){
    return(<>
        <Title />
        <h1>STORE PAGE</h1>
        <Link to={'menu/1'}> Menu </Link>
    </>);
}