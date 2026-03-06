import {useState} from "react"
import axios from "axios"

export default function Apply(){

const [form,setForm]=useState({
name:"",
email:"",
country:""
})

const submit=async(e)=>{

e.preventDefault()

await axios.post("http://localhost:5000/apply",form)

alert("Candidature envoyée")

}

return (

<div className="max-w-xl mx-auto mt-20">

<h1 className="text-3xl font-bold mb-6">Candidature</h1>

<form onSubmit={submit} className="space-y-4">

<input
className="border p-2 w-full"
placeholder="Nom"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input
className="border p-2 w-full"
placeholder="Email"
onChange={(e)=>setForm({...form,email:e.target.value})}
/>

<input
className="border p-2 w-full"
placeholder="Pays souhaité"
onChange={(e)=>setForm({...form,country:e.target.value})}
/>

<button className="bg-blue-600 text-white px-4 py-2">
Envoyer
</button>

</form>

</div>

)

}