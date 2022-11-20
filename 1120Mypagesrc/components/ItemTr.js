import { useState } from 'react';
export default function ItemTr({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  function spread() {
    setIsOpen(!isOpen);
  }

  return (
    <tr>
      <td>{item.item}</td>
      <td className="question">
        <div className="tit" onClick={spread}>
          <span className="status">{item.status}</span>
          <br />
          <span className="date">{item.qdate}</span>
          <br/>
          <strong className="secret">
            <a href=".">{item.title}</a>
          </strong>
        </div>
        {isOpen && (
          <div className="cont">
            <div className="ask">
              <strong className="tit_sub">질문</strong>
              <p className="txt">{item.qcontent}</p>
            </div>
            <div className="answer">
              <strong className="tit_sub">답변</strong>
              <p className="txt">
                <span className="date">{item.adate}</span>
                <br />
                {item.acontent}
              </p>
            </div>
          </div>
        )}
      </td>
    </tr>
  )
}