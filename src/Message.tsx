function Message() {
  const msg = 'Ready for another challenge 👍';
  // const msg = '';
  if (msg)
    return <h1>Hello World 🙋 {msg}</h1>;
  return <h1>Hello World 🙋</h1>;
}

export default Message;