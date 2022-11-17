import '../styles/popup.css'

function PopUp({ setadPop, values, setValues, onChangeValue, userData, setUserData, adNum }) {

  function onPopUpOff() {
    setadPop(false);
    setValues({
      ...values,
      name: '',
      address: '',
      number: '',
    });
  }

  function onClickAdd() {
    if (values.name && values.address && values.number) {

      console.log(++adNum.current);

      setUserData([...userData, {
        id: adNum.current,
        name: values.name,
        address: values.address,
        number: values.number,
      }]);


      setValues({
        ...values,
        name: '',
        address: '',
        number: '',
      });

      onPopUpOff();
    } else {
      alert('전부 입력하세요.');
    }
  }

  return (

    <div id="popup">
      <div className="popup-body">
        <div>
          <h2>주소 등록</h2>
          <table className="pop-table">
            <colgroup>
              <col style={{ width: 130 }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>
                  받으시는 분 <span>*</span>
                </th>
                <td>
                  <input type="text" name='name' value={values.name} onChange={onChangeValue} />
                </td>
              </tr>
              <tr>
                <th>
                  휴대폰번호 <span>*</span>
                </th>
                <td>
                  <input type="text" name='number' value={values.number} onChange={onChangeValue} placeholder="-포함 입력하세요."
                  />
                </td>
              </tr>
              <tr>
                <th>
                  주소 <span>*</span>
                </th>
                <td className="multi_input_row">
                  <input type="text" name='address' value={values.address} onChange={onChangeValue} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="btn_wrap">
          <button type="submit" onClick={onClickAdd}>확인</button>
          <button type="button" onClick={onPopUpOff}>취소</button>
        </div>
        {/* <form>
            <div>
              <label>
                이름 :
                <input type="text" name='name' value={values.name} onChange={onChangeValue} />
              </label>
            </div>
            <div>
              <label>
                주소 :
                <input type="text" name='address' value={values.address} onChange={onChangeValue} />
              </label>
            </div>
            <div>
              <label>
                전화번호 :
                <input type="text" name='number' value={values.number} onChange={onChangeValue} />
              </label>
            </div>
            <button type="button" onClick={onPopUpOff}>취소</button>
            <button type="submit" onClick={onClickAdd}>확인</button>
          </form> */}
      </div>
    </div >

  );
};

export default PopUp;