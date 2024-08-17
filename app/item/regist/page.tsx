"use client";
import React from "react";

const updateProduct = async () => {
  let id = document.querySelector("input[name='id']");
  let name = document.querySelector("input[name='name']");
  let brand = document.querySelector("input[name='brand']");
  let price = document.querySelector("input[name='price']");
  let category = document.querySelector("select[name='category']");
  let description = document.querySelector("textarea[name='description']");
  let image_link = document.querySelector("input[name='image_link']");
  let stock = document.querySelector("input[name='stock']");

  const productData = {
    id: id.value,
    name: name.value,
    brand: brand.value,
    price: price.value,
    category: category.value,
    description: description.innerText,
    image_link: image_link.value,
    stock: stock.value,
  };

  await fetch(`http://localhost:4000/api/products/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });
};

const Home: React.FC = () => {
  return (
    <main className="container flex flex-col p-6 bg-gray-100 min-h-screen">
      {/* 상품 정보 입력 섹션 */}
      <div className="bg-white shadow-md rounded-lg py-10 my-3">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          상품 정보 입력
        </h2>
        <div className="grid grid-cols-2 gap-4 ">
          {/* grid grid-cols-2 gap-4 */}
          {/* lg:grid grid-cols-1 md:grid-cols-2 gap-6 */}
          {/* grid grid-cols-1 */}

          {/* id */}
          <div>
            <label className="block text-base font-bold text-gray-700 mb-1">
              id
            </label>
            <input
              type="number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="id을 입력하세요"
              name="id"
            />
          </div>

          {/* id */}
          <div>
            <label className="block text-base font-bold text-gray-700 mb-1">
              brand
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="brand을 입력하세요"
              name="brand"
            />
          </div>

          {/* 상품명 */}
          <div>
            <label className="block text-base font-bold text-gray-700 mb-3">
              상품명
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="상품명을 입력하세요"
              name="name"
            />
          </div>

          {/* 가격 */}
          <div>
            <label className="block text-base font-bold text-gray-700 mb-1">
              가격
            </label>
            <input
              type="number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="가격을 입력하세요"
              name="price"
            />
          </div>

          {/* 색상 */}
          <div>
            <label className="block text-base font-bold text-gray-700 mb-1">
              색상
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="색상을 입력하세요"
              name="color"
            />
          </div>

          {/* 재고 */}
          <div>
            <label className="block text-base font-bold text-gray-700 mb-1">
              재고
            </label>
            <input
              type="number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="재고 수량을 입력하세요"
              name="stock"
            />
          </div>

          {/* image_link */}
          <div>
            <label className="block text-base font-bold text-gray-700 mb-1">
              image_link
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="image_link를 입력하세요"
              name="image_link"
            />
          </div>

          {/* 카테고리 */}
          <div>
            <label className="block text-base font-bold text-gray-700 mb-1">
              카테고리
            </label>
            <select
              name="category"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">카테고리를 선택하세요</option>
              <option value="category1">카테고리 1</option>
              <option value="category2">카테고리 2</option>
              <option value="category3">카테고리 3</option>
            </select>
          </div>

          {/* 상품 설명 */}
          <div className="md:col-span-2">
            <label className="block text-base font-bold text-gray-700 mb-1">
              상품 설명
            </label>
            <textarea
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows={4}
              placeholder="상품 설명을 입력하세요"
              name="description"
            ></textarea>
          </div>
        </div>

        {/* 등록 버튼 */}
        <div className="mt-6 text-center">
          <button
            className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
            onClick={() => {
              updateProduct();
            }}
          >
            등록
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
