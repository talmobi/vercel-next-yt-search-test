// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const yts = require( 'yt-search' )

async function handler (req, res) {
  console.log( 'api called ended' )
  res.statusCode = 200

  let title
  try {
    const r = await yts( 'superman' )
    title = r.videos[ 0 ].title
    console.log( 'title: ' + title )
  } catch ( e ) {
    console.log( e )
  }

  res.json({ name: title })

  console.log( 'api called ended' )
}

export default handler
