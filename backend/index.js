const express = require('express')
const cors = require('cors')
const axios = require('axios')
const privateKey = 'feb32e6f-ee4e-44d0-be36-aa73650140a7'

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
