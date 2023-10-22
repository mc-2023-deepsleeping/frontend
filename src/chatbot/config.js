import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'GaiBro';

const config = {
  initialMessages: [createChatBotMessage(`Hi I'm GaiBro can search through the web :)`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;