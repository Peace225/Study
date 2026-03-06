import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import { collection, getDocs } from "firebase/firestore"
// import { db } from "../firebase"

const mockPosts = [
  {
    id: 1,
    title: "5 conseils pour réussir vos études à l'étranger",
    excerpt:
      "Découvrez nos conseils pratiques pour réussir votre admission et vous adapter rapidement dans votre pays d’accueil.",
    image: "/blog/blog1.jpg",
    slug: "5-conseils-etudes-etranger"
  },
  {
    id: 2,
    title: "Comment préparer votre dossier universitaire",
    excerpt:
      "Lettre de motivation, CV, et documents : nos astuces pour un dossier solide et convaincant.",
    image: "/blog/blog2.jpg",
    slug: "preparer-dossier-universitaire"
  },
  {
    id: 3,
    title: "Top 10 des destinations étudiantes en 2026",
    excerpt:
      "Découvrez les destinations les plus prisées par les étudiants pour 2026 et pourquoi elles sont attractives.",
    image: "/blog/blog3.jpg",
    slug: "top-10-destinations-2026"
  }
]

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Ici tu peux récupérer depuis Firebase Firestore si nécessaire
    // const fetchPosts = async () => {
    //   const querySnapshot = await getDocs(collection(db, "posts"))
    //   const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    //   setPosts(data)
    // }
    // fetchPosts()

    // Pour l'instant on utilise les mock
    setPosts(mockPosts)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Blog & Actualités</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map(post => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-blue-600 font-semibold hover:underline"
              >
                Lire la suite
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}