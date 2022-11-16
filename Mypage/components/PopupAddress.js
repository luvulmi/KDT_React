import '../styles/popup.css'

const PopUp = ({ setadPop, values, setValues, onChangeValue, userData, setUserData }) => {
  function onPopUpOff() {
    setadPop(false);
  }

  function onClickAdd(e) {
    e.preventDefault();
    setUserData([...userData, {
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
  }

  return (
    <>
      <div id="popup">
        <div className="popup-body">
          <form>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default PopUp;