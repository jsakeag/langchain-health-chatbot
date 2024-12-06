  // Config starter code
  import { createChatBotMessage } from "react-chatbot-kit";
  
  const config = {
    // change this to the message you want to be sent to the user when they first open the chatbot
    initialMessages: [createChatBotMessage(`Hey there! What questions do you have?`)],
    customStyles: {
        botMessageBox: {
          backgroundColor: '#376B7E',
        },
        chatButton: {
          backgroundColor: '#5ccc9d',
        },
      },
      botName: 'Reproductive Health Helper',
  }
  
  export default config