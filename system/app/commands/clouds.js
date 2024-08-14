export const setup = {
  name: "clouds",
  version: "40.0.3",
  permission: "Users",
  creator: "John Lester",
  description: "Write text effect clouds in the sky",
  category: "Text Generation",
  usages: ["[text]"],
  mainScreenshot: ["/media/clouds/screenshot/main.jpg"],
  screenshot: ["/media/clouds/screenshot/main.jpg"],
  cooldown: 5,
  isPrefix: true
};
export const domain = {"clouds": setup.name}
export const execCommand = async function({api, event, key, kernel, umaru, args, keyGenerator, Users, context}) {
  await umaru.createJournal(event);
  let text = args.join(" ");
  if(args.length === 0) text = await Users.getName(event.senderID);
  return api.sendMessage({body: context, attachment: await kernel.readStream(["clouds"], {key: key, text: text})}, event.threadID, async() => {
    await umaru.deleteJournal(event);
  }, event.messageID)
}