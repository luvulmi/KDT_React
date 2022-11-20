import { useState, useRef } from 'react';
import ItemTr from '../components/ItemTr';
import { v4 as uuid } from 'uuid';
import Footer from './Footer';

export default function MyItem() {
  const items = [
    {
      item: '어니언 베이글',
      status: '답변완료',
      qdate: '2022-11-01',
      title: '재입고',
      qcontent: '재입고 안되나요 ㅠㅠㅠ',
      adate: '2022-11-02',
      acontent: '해당 상품 주문 가능하세요. ^^',
    },
  ];

  const [itemList, setitemList] = useState(items);
  const selectRef = useRef();

  function lookup() {
    if (selectRef.current.value === '전체') {
      setitemList(items);
    } else {
      const array = items.filter((item) => {
        return item.status === selectRef.current.value;
      });
      setitemList(array);
    }
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
        <h3 className="sub_title">상품문의</h3>
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
        <div className="table_count">
          <div className="count">
            총<span> {items.length} </span>건
          </div>
          <select className="normal" name="searchOrder" id="searchOrder" ref={selectRef}>
            <option value="전체">전체</option>
            <option value="접수완료">접수완료</option>
            <option value="답변완료">답변완료</option>
          </select>
          <button onClick={lookup}>조회</button>
        </div>
        <table className="tbl_mypage tbl_qna">
          <colgroup>
            <col style={{ width: 200 }} />
            <col style={{ width: 400 }} />
          </colgroup>
          <thead>
            <tr>
              <th>상품정보</th>
              <th>문의내용</th>
            </tr>
          </thead>
          <tbody className="itemContents">
            <>
              {itemList.map((item) => (
                <ItemTr key={uuid()} item={item} />
              ))}
            </>
          </tbody>
        </table>
        <ul className="pagination">
          <li className="first" />
          <li className="prev" />
          <li className="active" />
          <li className="next" />
          <li className="last" />
        </ul>
        <div className="notice_info_list">
          <h3>안내 드립니다</h3>
          <ul>
            <li>
              - 상품과 관련없는 내용, 비방, 광고, 불건전한 내용의 글은 사전 동의
              없이 삭제될 수 있습니다.
            </li>
            <li>
              - 아직 궁금하신 점이 있으신가요? 고객센터(02-345-5439)로 문의해주세요.
              <a href="../community/community_FAQ.html">FAQ 보러가기</a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}