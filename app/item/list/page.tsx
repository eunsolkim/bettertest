"use client";
import React, { useState, useEffect } from "react";

// 가짜 데이터 생성
// const fakeOrders = Array.from({ length: 36 }, (_, index) => ({
//   no: index + 1,
//   image: `IMG1234567${index + 1}`,
//   name: `상품 ${index + 1}`,
//   price: `₩${(index + 1) * 1000}`,
//   product_colors: "아름다운",
//   stock: index % 3 === 0 ? "34" : index % 3 === 1 ? "12" : "20",
//   category: "멋진",
//   tag_list: "비건",
//   date1: "2024-08-08 12:34:56",
//   date2: "2024-08-08 12:34:56",
// }));

const ITEMS_PER_PAGE = 5; // 페이지당 출력할 항목 수

const deleteOrder = async (order_no: any) => {
  const res = await fetch(
    `http://localhost:4000/api/products/delete?order_no=${order_no}`
  );
};

const Home = () => {
  const [levelType, setLevelType] = useState("");
  const [mailType, setMailType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // 여기부터 작성, 여기부터 return 전까지의 기존 코드 모두 제거 후 작성
  const [orders, setOrders] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const fetchOrders = async (page_no) => {
    const res = await fetch("http://localhost:4000/api/products/read");
    const retVal = await res.text();
    const data = JSON.parse(retVal).slice((page_no - 1) * 5, page_no * 5);

    setOrders(data);
  };

  useEffect(() => {
    fetchOrders(1);

    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/api/products/read");
      const data = await res.text();
      setTotalPages(Math.ceil(JSON.parse(data).length / ITEMS_PER_PAGE));
    };

    fetchData();
  }, []);

  return (
    <main className="flex container mx-auto">
      <div>
        <div className="mt-6 text-right pb-7">
          <a
            href="/item/regist"
            className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
          >
            등록
          </a>
        </div>
        {/* 주문목록리스트출력 */}
        <table className="divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                NO.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                이미지
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                상품명
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                가격
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                색상
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                재고
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                카테고리
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                등록일
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                수정일
              </th>
              <th
                colSpan={2}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                관리
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* !! 여기부터 구조체와 안맞는 멤버 변수들 수정 */}
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href="/item/detail"
                    className="text-blue-600 hover:text-blue-900"
                  >
                    {order.id}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={order.image_link} style={{ width: "50px" }}></img>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{order.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.product_colors}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{order.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.category}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  {order.created_at.slice(0, 10)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.updated_at.slice(0, 10)}
                </td>
                <td>
                  <a
                    href="/item/regist"
                    className="bg-gray-700 text-white py-2 px-4 mx-2 rounded-lg hover:bg-gray-600"
                  >
                    수정
                  </a>
                  <button
                    className="bg-gray-700 text-white py-2 px-4  mx-2 rounded-lg hover:bg-gray-600"
                    onClick={() => deleteOrder(order.id)}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* 페이지네이션 */}
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 mx-1 bg-gray-200 rounded"
            onClick={() => {
              {
                /* !! 상품도 변경되도록 수정 */
              }
              setCurrentPage((prev) => Math.max(prev - 1, 1));
              fetchOrders(currentPage - 1);
            }}
            disabled={currentPage === 1}
          >
            이전
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1 ? "bg-gray-700 text-white" : "bg-gray-200"}`}
              onClick={() => {
                {
                  /* !! 상품도 변경되도록 수정 */
                }
                setCurrentPage(index + 1);
                fetchOrders(index + 1);
              }}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-4 py-2 mx-1 bg-gray-200 rounded"
            onClick={() => {
              {
                /* !! 상품도 변경되도록 수정 */
              }
              setCurrentPage((prev) => Math.min(prev + 1, totalPages));
              fetchOrders(currentPage + 1);
            }}
            disabled={currentPage === totalPages}
          >
            다음
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
