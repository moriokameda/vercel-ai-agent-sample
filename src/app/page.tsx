'use client';

import {useChat} from "@ai-sdk/react";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl py-24 mx-auto stretch">
      <div className="flex flex-col space-y-4 mb-16">
        {messages.map(message => (
          <div 
            key={message.id} 
            className={`p-4 rounded-lg ${
              message.role === 'user' 
                ? 'bg-blue-100 dark:bg-blue-900 self-end' 
                : 'bg-gray-100 dark:bg-gray-800 self-start'
            } max-w-[95%] md:max-w-[70%]`}
          >
            <div className="font-bold mb-1">
              {message.role === 'user' ? 'User' : 'AI'}
            </div>
            <div className="whitespace-pre-wrap">
              {message.parts.map((part, i) => {
                switch (part.type) {
                  case 'text':
                    return <div key={`${message.id}-${i}`}>{part.text}</div>;
                }
              })}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl mb-8">
        <input
          className="w-full p-3 border border-zinc-300 dark:bg-zinc-800 
                     dark:border-zinc-700 rounded-lg shadow-lg focus:outline-none 
                     focus:ring-2 focus:ring-blue-500"
          value={input}
          placeholder="メッセージを入力..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
