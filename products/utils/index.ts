import events from "../controller/events";

import { Kafka, Partitioners } from "kafkajs";

const kafka = new Kafka({
  clientId: "products-service",
  brokers: ["kafka:9092"],
});

const createProducer = async () => {
  const producer = kafka.producer({
    createPartitioner: Partitioners.LegacyPartitioner,
  });

  await producer.connect();
  return producer;
};
export { createProducer };

export async function publishMessage(topic: string, msg: string) {
  try {
    const producer = await createProducer();
    await producer.send({
      topic,
      messages: [{ value: msg }],
    });
    console.log("Message published successfully...", msg);
  } catch (error) {
    console.error("Error in publishMessage:", error);
  }
}

export const subscribeMessage = async (groupId: string, topics: string[]) => {
  const consumer = kafka.consumer({ groupId });
  await consumer.connect();
  await consumer.subscribe({ topics, fromBeginning: true });

  await consumer.run({
    autoCommit: false,
    eachMessage: async ({ topic, partition, message }) => {
      events(topic, message, partition, consumer);
    },
  });
};
