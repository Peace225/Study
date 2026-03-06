export default function Destinations() {
  const countries = [
    { name: "Canada" },
    { name: "France" },
    { name: "Royaume-Uni" },
    { name: "États-Unis" },
    { name: "Espagne" },
    { name: "Australie" }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Destinations populaires</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {countries.map((c, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{c.name}</h3>
              <p className="mt-3 text-gray-600">
                Découvrez les opportunités d’études en {c.name}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}