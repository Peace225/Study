export default function Universities() {
  const universities = [
    "Harvard University",
    "University of Toronto",
    "Oxford University",
    "MIT",
    "Cambridge University",
    "EPFL"
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Universités partenaires</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {universities.map((u, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <p className="font-semibold">{u}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}