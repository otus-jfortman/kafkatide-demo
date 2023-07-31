import KafkaTide from 'kafkatide'

const { consume, produce } = new KafkaTide({
  brokers: ['localhost:29092'],
  clientId: 'kafkatide-demo'
})

const topic = 'a.kafkatide.demo'

const { message$ } = consume({
  topic,
  config: {
    groupId: 'kafkatide-demo',
    allowAutoTopicCreation: true
  },
})

console.log(`Subscribing to topic: ${topic}`)
message$.subscribe((m) => {
  console.log(`received: ${m.value}`)
  m.workComplete()
})