import fetch from 'node-fetch'

async function verify(apiKey, message) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {"role": "system", "content": message}
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
// 我希望你是一个自然语言处理器。我将同时键入两段文本，一段录音转文字转写文本，对话或读独白内容可能包含任何语言。另一段是对第一段文本的内容总结。你会检测语言，并用与两段文本相同的语言进行回答。我希望你能够完整给出两段文本中文本的映射关系，以表格的形式。具体来说，由于第二段内容是第一段内容的总结，第二段中的每部分内容一定是由第一段中的内容提炼得出的。形成对应的内容不一定是完整的句子，也有可能是一个分句或是短语，或者可能是多个句子。对应表格中必须严格包含两段文本的全部内容，且不可对应空白内容。第一段：So it is, for example, if you work with a group, you have to meet with them, right? And then you have to find a time when every member is available in a desk. And like I have to find a place to meet together, that could be like probably after a few days, because everyone has their own stuff to do, like they could be having classes. They could be having a part time job. They could be like helping the professor with the research. And it's hard for you to just put everyone or get everyone together. At the same time, especially at the time, whenever you feel like you want to get the work going, so you should be done on the. But then if you work by yourself, let's say if you wake up in the middle of the night, like 1 o'clock in morning, and they feel like I wanna do some physics, and then you can just do it whatever you don't have to wait for other people.第二段：Group work requires finding a time and place to meet that accommodates everyone's busy schedules, such as classes, part-time jobs, and research commitments. This can be difficult and delay progress. Working independently allows for greater flexibility and the ability to work at any time, without needing to coordinate with others.")

// const prompt = "I hope you summarize the core content of the following texts without explanation, just the summary:"
// const p1 = 'Why does this matter? Boy, it matters a lot. Because no one gets to the corner office by sitting on the side, not at the table, and no one gets the promotion if they dont think they deserve their success, or they dont even understand their own success.I wish the answer were easy. I wish I could go tell all the young women I work for, these fabulous women,"Believe in yourself and negotiate for yourself. Own your own success." I wish I could tell that to my daughter. But its not that simple. Because what the data shows, above all else, is one thing, which is that success and likeability are positively correlated for men and negatively correlated for women. And everyones nodding, because we all know this to be true.Theres a really good study that shows this really well. Theres a famous Harvard Business School studyon a woman named Heidi Roizen. And shes an operator in a company in Silicon Valley, and she uses her contacts to become a very successful venture capitalist.'
// const p2 = 'I gave this talk at Facebook not so long ago to about 100 employees, and a couple hours later, there was a young woman who works there sitting outside my little desk, and she wanted to talk to me. I said, okay, and she sat down, and we talked. And she said, "I learned something today. I learned that I need to keep my hand up." "What do you mean?"She said, "Youre giving this talk, and you said you would take two more questions. I had my hand up with many other people, and you took two more questions. I put my hand down, and I noticed all the women did the same, and then you took more questions, only from the men." And I thought to myself,"Wow, if its me — who cares about this, obviously — giving this talk — and during this talk.'
// const p3 = 'I cant even notice that the mens hands are still raised, and the womens hands are still raised, how good are we as managers of our companies and our organizations at seeing that the men are reaching for opportunitiesmore than women?" Weve got to get women to sit at the table.Message number two: Make your partner a real partner. Ive become convinced that weve made more progress in the workforce than we have in the home. The data shows this very clearly. If a woman and a man work full-time and have a child, the woman does twice the amount of housework the man does, and the woman does three times the amount of childcare the man does. So shes got three jobs or two jobs, and hes got one. Who do you think drops out when someone needs to be home more? The causes of this are really complicated, and I dont have time to go into them. And I dont think Sunday football-watching and general laziness is the cause.'
// verify("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", prompt+p1+p2+p3)
// const summary = 'Success and likeability are positively correlated for men and negatively correlated for women. Women need to sit at the table, believe in themselves, and negotiate for themselves. Women should also make their partners a real partner, as progress in the workforce has not been matched in the home. Women still do twice the amount of housework and three times the amount of childcare compared to men, causing them to drop out of work when someone needs to be home more.'
// const prompt2 = "I will give you two parts of text. The first part is a piece of transcription, the second is a summary of the given transcription. I hope you map the contents of two parts in a table format, based on their meaning. I hope you only return the table without explanation."
// const prompt2 = "我希望你是一个自然语言处理器。我将同时键入两段文本，一段录音转文字转写文本，对话或读独白内容可能包含任何语言。另一段是对第一段文本的内容总结。你会检测语言，并用与两段文本相同的语言进行回答。我希望你能够完整给出两段文本中文本的映射关系，以表格的形式。具体来说，由于第二段内容是第一段内容的总结，第二段一定是由第一段中的内容提炼得出的更简洁的内容。第一段："

verify("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", prompt)