export default function Event1({style}) {
  function setBg(e) {
    e.preventDefault();
    e.target.style.backgroundColor = 'red';
  }
  return (
    <div>
      <a href="/" style={style} onClick={setBg}>첫번째다</a>
    </div>
  )
}

