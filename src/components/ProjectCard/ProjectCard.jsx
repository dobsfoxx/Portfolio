export default function ProjectCard({ title, description, url }) {
  return (
    <article className="card p-6 bg-white border rounded-lg ">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      {url && (
        <a className="mt-4 inline-block text-primary hover:underline" href={url} target="_blank" rel="noreferrer">Ver projeto →</a>
      )}
    </article>
  )
}