
import data from './data';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className='container'>
      <h1>Paragraph Generator</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input
          type='number'
          id='amount'
          value={count}
          max={10}
          min={1}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn btn-generate'>generate</button>
        <button type="reset" className='btn btn-clear' onClick={() => setText([])}>clear</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
