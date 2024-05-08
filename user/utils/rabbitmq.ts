// import { MSG_QUEUE_URL } from "../config";
// import amqp from "amqplib";
// async function createChannel() {
//   try {
//     const connection = await amqp.connect(MSG_QUEUE_URL);

//     const channel = await connection.createChannel();

//     const queueName = "hello";

//     channel.assertQueue(queueName, { durable: true });

//     return channel;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// export async function publishMessage(msg: string) {
//   try {
//     const channel = await createChannel();
//     const queueName = "hello";
//     channel.sendToQueue(queueName, Buffer.from(msg));
//     console.log(`Sent "queueName: ${queueName}" "message: ${msg}"`);
//   } catch (error) {
//     console.error("Error in publishMessage:", error);
//   }
// }

// export const subscribeMessage = async () => {
//   const channel = await createChannel();
//   const queueName = "hello";
//   channel.assertQueue(queueName, { durable: true });
//   console.log("Waiting for messages...");
//   channel.consume(queueName, (msg) => {
//     events(msg.content.toString(), channel);
//   });
// };