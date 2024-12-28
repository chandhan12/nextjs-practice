import axios from "axios";
import Link from "next/link";



export default async function Home() {
 
  return (
    <div className="flex flex-col justify-center h-screen items-center">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
               <h1>Todo Application</h1>
            </div>
        </div>
        <Link className="m-2 border-2 border-purple-600 rounded-md p-1" href={'/signup'}>Sign Up</Link>
        <Link className="m-2 border-2 border-purple-600 rounded-md p-1" href={'/signin'}>Sign In</Link>
    </div>
  );
}
