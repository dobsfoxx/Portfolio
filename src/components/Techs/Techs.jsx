
export default function Techs({ techs = [] }) {
  return (
    <section id="techs" className=" bg-white p-8">
      <div className="container w-full">
        <h2 className="text-4xl font-bold text-center">Tecnologias</h2>
        <p className="mt-2 text-gray-600 text-center">Ferramentas e linguagens que utilizo.</p>

        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {techs.map((t, i) => {
            const name = t.name
            const icon =  t.icon
            return (
              <div key={i} className="flex items-center gap-2 px-3 py-1 bg-white border rounded-full text-sm shadow-sm">
                {
                  <img src={icon} alt={`${name} icon`} className="w-8 h-8" />
                }
                <div>{name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
