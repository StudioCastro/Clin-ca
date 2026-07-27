export default function BlogContentBlocks({ blocks }) {
  return (
    <div className="prose-custom space-y-5">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <h2 key={index} className="font-display text-brand-black text-2xl font-semibold">
              {block.text}
            </h2>
          )
        }
        if (block.type === 'list') {
          return (
            <ul key={index} className="text-brand-black/75 list-disc space-y-2 pl-6">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }
        return (
          <p key={index} className="text-brand-black/75">
            {block.text}
          </p>
        )
      })}
    </div>
  )
}
