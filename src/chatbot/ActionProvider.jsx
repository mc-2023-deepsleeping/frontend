// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const searchAI = async (message) => {
    const apiUrl = "http://34.81.38.71:5000/ask_bard";
    // const apiUrl = "http://localhost:5000/ask_bard";
    
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "Question": message }),
    };

    await fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const answer = data.answer;
            const botMessage = createChatBotMessage(answer);

        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      })
      .catch((error) => {
        console.error("Error fetching AI response:", error);
      });
  };


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            searchAI,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;