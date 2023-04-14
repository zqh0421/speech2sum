import fetch from 'node-fetch'

async function verify(apiKey) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {"role": "user", "content": "Say this is a test"}
      ]
    })
  }
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options)
    const data = await response.json()
    console.log(data)
    console.log(data.choices[0].message)
  } catch (err) {
    console.log(err)
  }
}

verify("sk-")
