// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const yts = require( 'yt-search' )

export default (req, res) => {
  res.statusCode = 200

  ;( async function () {
    const r = await yts( 'superman' )
    res.json({ name: r.videos[ 0 ].title })
  } )()

}
