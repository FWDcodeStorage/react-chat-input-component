import { useState } from "react";
import "./App.css";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

function App() {
  const [message, setMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [submittedText, setSubmittedText] = useState([]);

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setMessage(message + emoji);
    setShowEmoji(!showEmoji);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedText((prevState) => [
      ...prevState,
      {
        message: message,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
        }),
      },
    ]);
    setMessage("");
  };

  return (
    <div className='app w-[90vw] h-[90vh] mx-auto flex flex-col justify-center gap-4 items-center py-2 px-4'>
      <div className='table border-2 border-white flex-auto w-full rounded-md p-2 sm:text-xl tracking-wide text-lg'>
        {submittedText.map((text, index) => (
          <div
            key={index}
            className='p-3 border border-yellow-100 mb-3 w-fit rounded-full'
          >
            {text.message}{" "}
            <span className='text-sm text-gray-500 font-extralight'>
              {text.time}
            </span>
          </div>
        ))}
      </div>

      <div className='chat-footer h-[20%] rounded-md w-full border border-white hover:shadow-lg hover:shadow-yellow-200 flex'>
        <form onSubmit={handleSubmit} className='flex gap-2 w-full'>
          <div className='w-full rounded-md relative flex items-end p-2'>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Type...'
              className='h-full outline-none sm:w-[90%] w-full bg-transparent px-[.2em] sm:text-lg tracking-wide text-md font-light'
              cols='30'
              rows='3'
            ></textarea>

            <span
              onClick={() => setShowEmoji(!showEmoji)}
              className='cursor-pointer sm:text-[1.5rem] text-sm hover:scale-75'
            >
              😄
            </span>

            {showEmoji && (
              <div className='absolute bottom-[100%] right-0'>
                <Picker
                  data={data}
                  emojiSize={24}
                  emojiButtonSize={28}
                  onEmojiSelect={addEmoji}
                  maxFrequentRows={0}
                />
              </div>
            )}
          </div>

          <button
            className='sm:w-[10%] w-fit h-full  text-white flex justify-center items-center px-[.2em] sm:text-[2rem] text-base hover:scale-75'
            type='submit'
          >
            ▶️
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
