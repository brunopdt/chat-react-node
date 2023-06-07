const express = require('express')
const cors = require('cors')
const axios = require('axios')
const privateKey = '2e8d08a7-e4d7-44dc-8072-19590259254e'

const app = express()
app.use(express.json())
app.use(cors({ origin: true }))

app.post('/authenticate', async (req, res) => {
  const { username } = req.body

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { 'private-key': privateKey } }
    )
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json({ error: e.response.data })
  }
})

app.listen(3001)
