/* eslint-disable react/prop-types */

export const WordBox = ({ text }) => {
  const words = text.split(" ");

  return (
    <div className="word-box-container">
      {words.map((word, index) => (
        <div key={index} className="word-box">
          {word}
        </div>
      ))}
    </div>
  );
};
