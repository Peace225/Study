export default function Services() {
  const services = [
    {
      title: "Orientation académique",
      desc: "Nous vous aidons à choisir la meilleure université selon votre profil."
    },
    {
      title: "Préparation du dossier",
      desc: "Assistance pour lettre de motivation, CV et documents académiques."
    },
    {
      title: "Suivi jusqu’à l’admission",
      desc: "Nous suivons votre dossier jusqu’à l’obtention de votre admission."
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Nos services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-4 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}