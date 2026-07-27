// Loader ESM usado só pelo script de sitemap (executado fora do Vite, via Node puro).
// Os dados importados (treatments.js, blogPosts.js) importam imagens .webp/.png/.svg,
// que o Vite resolve normalmente, mas o Node não entende fora do bundler.
// Aqui, esses imports viram apenas uma string com o caminho do arquivo (não é usado
// pelo script de sitemap, que só lê slug/categoria/data).
const ASSET_EXTENSIONS = /\.(webp|png|jpe?g|gif|svg)$/

export function load(url, context, nextLoad) {
  if (ASSET_EXTENSIONS.test(url)) {
    return {
      format: 'module',
      shortCircuit: true,
      source: `export default ${JSON.stringify(url)}`,
    }
  }
  return nextLoad(url, context)
}
