export const setup = {
  name: "yes",
  version: "3.1.1",
  permission: "Users",
  creator: "John Lester",
  description: "Comment on the board ( ͡° ͜ʖ ͡°)",
  category: "Memes",
  usages: ["[text]"],
  mainScreenshot: ["/media/yes/screenshot/main.jpg"],
  screenshot: ["/media/yes/screenshot/main.jpg"],
  cooldown: 5,
  isPrefix: true
};
export const domain = {"yes": setup.name}
export const execCommand = async function({api, event, key, kernel, args, umaru, context, prefix, usage}) {
  let text = args.join(" ");
  if (!text) return usage(this, prefix, event);
  await umaru.createJournal(event);
  return api.sendMessage({body: context, attachment: await kernel.readStream(["yes"], {key: key, text: text})}, event.threadID, async() => {
    await umaru.deleteJournal(event);
  }, event.messageID)
}