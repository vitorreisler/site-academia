const Contato = () => {
  return (
    <form className="flex flex-col items-center gap-3">
      <label htmlFor="email">Email:</label>
      <input
        className="w-64 border border-yellow-500 rounded shadow-md px-1"
        type="text"
        name=""
        id="email"
      />
      <label htmlFor="message">Message:</label>
      <textarea
        className="w-80 border border-yellow-500 rounded shadow-md px-1"
        name=""
        id="message"
        cols="30"
        rows="5"
      ></textarea>
      <button className="max-w-[100px] bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded">
        Send
      </button>{" "}
    </form>
  );
};

export default Contato;
