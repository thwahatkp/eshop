import { Consumer, KafkaMessage } from "kafkajs";

export default async function (topic: string, message: KafkaMessage, partition: number, consumer: Consumer) {
  console.log(`\n----------------------------------- Message Received -----------------------------------`);
  console.log(topic, message.value.toString(), partition);
  await consumer.commitOffsets([{ topic: topic, partition: partition, offset: (Number(message.offset) + 1).toString() }]);
  console.log(`---------------------------------------------------------------------------------------\n`);
}
