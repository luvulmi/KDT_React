import { useRef, useState } from 'react';
import PopupAddress from '../components/PopupAddress'
import Footer from '../pages/Footer';

function MyAddress() {
  const adNum = useRef(2);

  const [values, setValues] = useState({
    name: '',
    address: '',
    number: '',
  }), [userData, setUserData] = useState([
    {
      id: 1,
      default: '기본',
      name: '김유림',
      address: '용인시 처인구 포곡읍 에버랜드 가고싶어요.',
      number: '010-2233-4455'
    },
  ]),
    [adPop, setadPop] = useState(false);

  function onClickButton() {

    if (userData.length < 11) {
      setadPop(true);
    } else {
      alert('배송지는 최대 10개까지 등록 가능합니다.');
    }
  }

  function onChangeValue(e) {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function removeAdList(e) {
    let dd = +e.target.dataset.id
    setUserData(userData.filter((ad) => ad.id !== dd));
  }

  return (
    <>
      <header>
        <nav className="header_top">
          <div>
            <a href="../index.html">
              <img src="../image/12121212-removebg-preview.png" alt="" />
            </a>
          </div>
          <div>
            <ul className="main_cate">
              <li>
                <strong>
                  <em>Bread</em>
                </strong>
                <ul className="sub_cate">
                  <a href="../shop_list/shop_list_bread.html">
                    <li>식빵</li>
                  </a>
                  <a href="../shop_list/shop_list_bread.html">
                    <li>간식빵</li>
                  </a>
                  <a href="../shop_list/shop_list_bread.html">
                    <li>건강빵</li>
                  </a>
                  <a href="../shop_list/shop_list_bread.html">
                    <li>도넛</li>
                  </a>
                  <a href="../shop_list/shop_list_bread.html">
                    <li>페스츄리/파이</li>
                  </a>
                </ul>
              </li>
              <li>
                <strong>
                  <em>Cake</em>
                </strong>
                <ul className="sub_cate">
                  <a href="../shop_list/shop_list_cake.html">
                    <li>생크림 케이크</li>
                  </a>
                  <a href="../shop_list/shop_list_cake.html">
                    <li>티라미수</li>
                  </a>
                  <a href="../shop_list/shop_list_cake.html">
                    <li>클래식 케이크</li>
                  </a>
                </ul>
              </li>
              <li>
                <strong>
                  <em>Present</em>
                </strong>
                <ul className="sub_cate">
                  <a href="../shop_list/shop_list_present.html">
                    <li>롤케이크</li>
                  </a>
                  <a href="../shop_list/shop_list_present.html">
                    <li>파운드/카스테라</li>
                  </a>
                  <a href="../shop_list/shop_list_present.html">
                    <li>구움과자/전통선물</li>
                  </a>
                </ul>
              </li>
              <li>
                <strong>
                  <em>Dessert</em>
                </strong>
                <ul className="sub_cate">
                  <a href="../shop_list/shop_list_dessert.html">
                    <li>쿠키/타르트</li>
                  </a>
                  <a href="../shop_list/shop_list_dessert.html">
                    <li>초코/캔디</li>
                  </a>
                  <a href="../shop_list/shop_list_dessert.html">
                    <li>마카롱</li>
                  </a>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <ul className="user_cate">
              <li>
                <i className="fa-solid fa-user fa-xl" />
                <ul className="sub_cate">
                  <a href="../log_in/log_in_page.html">
                    <li>로그인</li>
                  </a>
                  <a href="../order_history/order_history_page.html">
                    <li>주문내역</li>
                  </a>
                  <a href="../mypage/Mypage.html">
                    <li>마이페이지</li>
                  </a>
                </ul>
              </li>
              <li>
                <a href="../cart_page/cart_page.html">
                  <i className="fa-solid fa-cart-shopping fa-xl" />
                </a>
              </li>
              <li>
                <a href="../community/community_Notice.html">
                  <i className="fa-regular fa-comment fa-xl" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <h3 className="sub_title">주소록 관리</h3>
        <div className="mypage_menu">
          <div className="mypage_header">
            <ul>
              <li>
                <span>쇼핑 혜택</span>
              </li>
              <li>
                <span>상품 관리</span>
              </li>
              <li>
                <span>주문 관리</span>
              </li>
              <li>
                <span>활동 관리</span>
              </li>
            </ul>
          </div>
          <div className="mypage_sub">
            <ul>
              <li>
                <a href="./mypage_coupon.html" className="underline">
                  쿠폰
                </a>
              </li>
              <li>
                <a href="./mypage_point.html" className="underline">
                  포인트
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="underline">
                  장바구니
                </a>
              </li>
              <li>
                <a href="./mypage_heart.html" className="underline">
                  관심목록
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="./mypage_myorder.html" className="underline">
                  주문/배송조회
                </a>
              </li>
              <li>
                <a href="./mypage_address.html" className="underline">
                  주소록 관리
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="./mypage_review.html" className="underline">
                  리뷰관리
                </a>
              </li>
              <li>
                <a href="./mypage_one2one.html" className="underline">
                  1:1 문의
                </a>
              </li>
              <li>
                <a href="./mypage_qnahistory.html" className="underline">
                  상품문의
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bx_mypage bx_address">
          <h4>기본배송지</h4>
          <p>{userData[0].address}</p>
        </div>
        <div className="table_count">
          <div className="count">
            총<span> {userData.length}</span>건
          </div>
        </div>
        <table className="tbl_mypage">
          <tbody>
            <tr>
              <th>선택</th>
              <th>받으시는 분</th>
              <th>주소</th>
              <th>연락처</th>
              <th>관리</th>
            </tr>
            {userData.map((item, idx) => (
              <tr key={item + idx}>
                <td>{item.default}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.number}</td>
                <td>
                  {
                    item.default === '기본'
                      ? ''
                      : <button className="deleteBtn"
                        onClick={removeAdList} data-id={item.id}>삭제</button>
                  }
                </td>
              </tr>))}
          </tbody>
        </table>
        <div className="bx_btn_center">
          <button onClick={onClickButton}>배송지 등록</button>
          <button>기본배송지 설정</button>
        </div>
        {adPop && (
          <PopupAddress
            setadPop={setadPop}
            values={values}
            setValues={setValues}
            onChangeValue={onChangeValue}
            userData={userData}
            setUserData={setUserData}
            adNum={adNum}
          />
        )}
        <div className="notice_info_list">
          <h3>안내 드립니다</h3>
          <ul>
            <li>- 상품 구매시 사용하실 배송지 정보를 관리하실 수 있습니다.</li>
            <li>- 배송지는 최대 10개까지 등록하실 수 있습니다.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MyAddress;
