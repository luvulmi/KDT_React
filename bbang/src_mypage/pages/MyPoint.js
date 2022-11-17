import { useState } from 'react';
import Tr from '../components/Tr';
import { v4 as uuid } from 'uuid';
import Footer from './Footer';

export default function MyPoint() {
  const [points, setPoints] = useState([
    {
      sdate: '2022-08-11',
      category: '적립',
      content: '1,000p 적립',
      edate: '2023-09-11',
      plusp: '1,000p',
      usep: '0p',
      restp: '2,000p'
    }, {
      sdate: '2022-08-15',
      category: '소멸',
      content: '1,000p 소멸',
      edate: '2022-08-15',
      plusp: '0p',
      usep: '0p',
      restp: '1,000p'
    },
    {
      sdate: '2022-09-05',
      category: '적립',
      content: '2,000p 적립',
      edate: '2023-09-05',
      plusp: '2,000p',
      usep: '0p',
      restp: '3,000p'
    },
    {
      sdate: '2022-10-13',
      category: '사용',
      content: '3,000p 사용',
      edate: '2023-10-13',
      plusp: '0p',
      usep: '3,000p',
      restp: '0p'
    },
    {
      sdate: '2022-10-30',
      category: '적립',
      content: '2,000p 적립',
      edate: '2023-10-30',
      plusp: '2,000p',
      usep: '0p',
      restp: '2,000p'
    },
    {
      sdate: '2022-11-11',
      category: '적립',
      content: '1,000p 적립',
      edate: '2023-11-11',
      plusp: '1,000p',
      usep: '0p',
      restp: '3,000p'
    },
  ]);

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
        <h3 className="sub_title">포인트</h3>
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
                  관심상품
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
        <div className="my_point">
          <ul>
            <li className="point_icon">
              <p className="title">사용가능 포인트</p>
              <p>
                <strong id="availablePoint">3,000</strong> P
              </p>
            </li>
            <li className="point_icon plus">
              <p className="title">
                적립예정 포인트
                <span className="tooltip tooltip_icon_notice tooltipstered" />
              </p>
              <p>
                <strong id="expectingPoint">1,000</strong> P
              </p>
            </li>
            <li className="point_icon minus">
              <p className="title">
                소멸예정 포인트
                <span className="tooltip tooltip_icon_notice tooltipstered" />
              </p>
              <p>
                <strong id="expiredPoint">0</strong> P
              </p>
            </li>
          </ul>
        </div>
        <div className="table_title contents sub" id="paginganchor">
          <h4>포인트 적립 및 사용내역</h4>
        </div>
        <table className="tbl_mypage">
          <colgroup>
            <col width="125px" />
            <col width="145px" />
            <col width="" />
            <col width="140px" />
            <col width="140px" />
            <col width="140px" />
            <col width="130px" />
          </colgroup>
          <thead>
            <tr>
              <th>발생일</th>
              <th>구분</th>
              <th>내역</th>
              <th>소멸예정일</th>
              <th>적립 포인트</th>
              <th>사용 포인트</th>
              <th>잔여 포인트</th>
            </tr>
          </thead>
          <tbody className="pointContents">
            <>
              {points.map((item) => (
                <Tr key={uuid()} item={item} />
              ))}
            </>
          </tbody>
        </table>
        <div className="notice_info_list">
          <h3>안내 드립니다.</h3>
          <ul>
            <li>
              사용가능 포인트
              <ul>
                <li>- 보유한 포인트는 1원 이상 결제 시 1P부터 사용 가능합니다.</li>
              </ul>
            </li>
            <li>
              적립예정 포인트
              <ul>
                <li>
                  - 조회시점을 기준으로 상품구매 및 상품평 작성을 통해 적립받으실 수
                  있는 포인트를 예측해드립니다.
                </li>
                <li>
                  - 상품평 작성 포인트는 기본적립을 기준하므로 실제 작성 후 받는
                  포인트는 다를 수 있습니다.
                  <ul>
                    <li>
                      * 상품구매 포인트(상품 실결제가 기준 1% , 배송완료 후 7일경과
                      시 적립)
                    </li>
                    <li>
                      * 상품평 작성 포인트(배송완료 후 90일 이내 작성, 상품평 작성
                      시 기본적립 500p 기준)
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              소멸예정 포인트
              <ul>
                <li>
                  - 미사용 포인트의 사용 기한 연장 또는 쿠폰/현금 환불 요청은
                  불가합니다.
                </li>
                <li>
                  - 포인트는 소멸 예정일까지 사용 가능하며, 적립 구분에 따라 사용
                  가능 기간이 상이하므로 반드시 소멸예정일을 확인 부탁드립니다.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
      <Footer/>
    </>
  );
}