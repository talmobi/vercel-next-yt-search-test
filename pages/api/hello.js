// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const yts = require( 'yt-search' )

async function handler (req, res) => {
  res.statusCode = 200

  const r = await yts( 'superman' )
  res.json({ name: r.videos[ 0 ].title })
}

export default handler
