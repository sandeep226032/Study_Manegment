'use client'
import { useSearchParams } from "next/navigation";
import Schoolsign from "../../componenets/schoolsign.js";
import Studentsign from "../../componenets/studentsign.js";
import Teachersign from "../../componenets/teachersign.js";

export default function Signup() {
    const searchparams=useSearchParams();
    const role=searchparams.get("role");
    return (
        <>
     {
        role=="School" && <Schoolsign></Schoolsign>
     }
    {
        role=="Student" && <Studentsign></Studentsign>
    }
    {
        role=="Teacher" && <Teachersign></Teachersign>
    }
        </>
    )
}