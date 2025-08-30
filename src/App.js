import "./App.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

function App({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="container">
      <h1>Star Rating</h1>
      <div className="star-rating">
        {[...Array(noOfStars)].map((star, index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              size={40}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              className={index <= (hover || rating) ? "active" : "inactive"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
