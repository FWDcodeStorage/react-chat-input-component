# **CHAT INPUT COMPONENT** WITH **EMOJI MART** **REACT**

## _Feel free to customize it_

This is a simple chat input component with Emoji Mart integration, allowing users to enter text messages and add emojis to enhance their communication experience. 😃

## **Features**

- Text input: Users can enter text messages in the input field.
- Emoji support: Users can access a wide range of emojis through the Emoji Mart integration and add them to their messages.
- Submit message: Users can submit their message by pressing the "▶️" button or pressing Enter.

## **EMOJI MART INSTALLATION**

1.Run the following command

```bash
 npm install --save emoji-mart @emoji-mart/data @emoji-mart/react
```

2.Import Data from emoji-mart/data

```bash
import data from 'emoji-mart/data'
```

3.Import Picker from emoji-mart/react

```bash
import Picker from 'emoji-mart/react'
```

4.Use it in your project

```bash
<Picker data={data} onEmojiSelect={console.log} />
```

## **Example**

To see a live example, you can run the following commands:

```bash
git clone https://github.com/your-username/chat-input-component.git
cd chat-input-component
npm install
npm run dev
```

### CUSTOMIZATION

The Chat Input Component can be easily customized to match your application's design and requirements. You can modify the styling, add additional functionality, or integrate it with other components to create a seamless chat experience.
