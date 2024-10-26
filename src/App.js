import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);

  function handlePrevious() {
    setCount((prev) => Math.max(prev - 1, 1));
  }

  function handleNext() {
    setCount((prev) => Math.min(prev + 1, 3));
  }

  return (
    <>
      {show && (
        <div className="steps">
          <Numbers count={count} />
          <Message count={count} />
          <Buttons
            count={count}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
          <div className="close" onClick={() => setShow((is) => !is)}>
            X
          </div>
        </div>
      )}
    </>
  );
}

function Numbers({ count }) {
  return (
    <div className="numbers">
      <div className={count >= 1 ? "active" : ""}>
        <span>1</span>
      </div>
      <div className={count >= 2 ? "active" : ""}>
        <span>2</span>
      </div>
      <div className={count >= 3 ? "active" : ""}>
        <span>3</span>
      </div>
    </div>
  );
}

function Message({ count }) {
  return (
    <div className="message">
      <div>
        Step {count}: {count === 1 && "Learn react✡️"}
        {count === 2 && "Apply for job😎"}
        {count === 3 && "Invest your income🤑"}
      </div>
    </div>
  );
}

function Buttons({ count, handlePrevious, handleNext }) {
  return (
    <div className="buttons">
      <button onClick={handlePrevious} disabled={count <= 1}>
        <span>PREVIOUS</span>
      </button>
      <button onClick={handleNext} disabled={count >= 3}>
        <span>NEXT</span>
      </button>
    </div>
  );
}
