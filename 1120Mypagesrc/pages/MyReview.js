import { useState } from 'react';
import ReviewTr from '../components/ReviewTr';
import { v4 as uuid } from 'uuid';
import Footer from './Footer';

export default function MyReview() {
  const [reviews, setreviews] = useState([
    {
      item: '어니언 베이글',
      date: '2022-11-11',
      write: '상품평 쓰기',
    }, {
      item: '초코식빵',
      date: '2022-11-09',
      write: '상품평 쓰기',
    },
    {
      item: '초코소라빵',
      date: '2022-10-11',
      write: '상품평 쓰기',
    },
    {
      item: '휘낭시에',
      date: '2022-09-15',
      write: '상품평 쓰기',
    },
  ]);

  return (
    <>
      <div className="table_count">
        <div className="count">
          총<span> {reviews.length} </span>건
        </div>
      </div>
      <table className="tbl_mypage">
        <colgroup>
          <col />
          <col style={{ width: 150 }} />
          <col style={{ width: 170 }} />
        </colgroup>
        <thead>
          <tr>
            <th>상품정보</th>
            <th>주문일</th>
            <th>작성</th>
          </tr>
        </thead>
        <tbody className="reviewContents">
          <>
            {reviews.map((item) => (
              <ReviewTr key={uuid()} item={item} />
            ))}
          </>
        </tbody>
      </table>
      {/* <header>
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
        <h3 className="sub_title">리뷰관리</h3>
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
                <a href="." className="underline">
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
        <div className="notice_info_list">
          <ul>
            <li>- 한번에 조회 가능한 기간은 최대 6개월입니다.</li>
            <li>
              - 상품평은 배송완료된 상품에 한하여 주문일로부터 90일내 작성
              가능합니다.
            </li>
          </ul>
        </div>
        <section className="my_review">
          <ul className="tab review_tab" id="paginganchor">
            <li className="active">
              <a href="#writeable_review">작성가능한 리뷰</a>
            </li>
            <li>
              <a href="#my_review">나의 리뷰</a>
            </li>
          </ul>
          <div className="write_review">
            <div id="writeable_review">
             
            </div>
            <div id="my_review">
              <div className="table_count">
                <div className="count">
                  총<span> 0 </span>건
                </div>
              </div>
              <table className="tbl_mypage">
                <colgroup>
                  <col style={{ width: 340 }} />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th>상품정보</th>
                    <th>내용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="empty">
                    <td colSpan={2} className="no_data">
                      작성하신 상품평이 없습니다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main> */}
      {/* <Footer /> */}
    </>
  );
}