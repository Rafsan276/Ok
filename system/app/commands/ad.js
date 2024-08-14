export const setup = {
  name: "ad",
  version: "40.0.3",
  permission: "Users",
  creator: "John Lester",
  description: "Ad edit profile picture",
  category: "Image Generation",
  usages: ["","[userID]","[@mention]"],
  mainScreenshot: ["/media/ad/screenshot/main.jpg"],
  screenshot: ["/media/ad/screenshot/1.jpg","/media/ad/screenshot/2.jpg","/media/ad/screenshot/3.jpg"],
  cooldown: 5,
  isPrefix: true
};
export const domain = {"ad": setup.name}
export const execCommand = async function({api, event, key, kernel, umaru, args, keyGenerator, Users, context}) {
  await umaru.createJournal(event);
  let mentions = Object.keys(event.mentions);
  (mentions.length === 0 && /^[0-9]+$/.test(args[0])) ? mentions[0] = args[0]: (event.type == "message_reply" && event.messageReply.attachments.length !== 0 && event.messageReply.attachments[0].type == "photo") ? "" : (event.type == "message_reply") ? mentions[0] = event.messageReply.senderID : (mentions.length === 0) ? mentions[0] = event.senderID: mentions[0] = mentions[0];
  return api.sendMessage({body: context, attachment: await kernel.readStream(["ad"], {key: key, targetID: (event.type == "message_reply" && event.messageReply.attachments.length !== 0 && event.messageReply.attachments[0].type == "photo") ? await kernel.readImageFromURL(event.messageReply.attachments[0].url) :await Users.getImage(mentions[0])})}, event.threadID, async() => {
    await umaru.deleteJournal(event);
  }, event.messageID)
}