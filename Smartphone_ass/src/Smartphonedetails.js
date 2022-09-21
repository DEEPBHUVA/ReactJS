import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './index.css';

function Smartphonedetails() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const param = useParams();
  useEffect(() => {
    fetch('https://6319dc446b4c78d91b45c4d6.mockapi.io/smartphone/' + param.id, { method: "GET" }).then((res) => {
      return res.json();
    }).then((res) => {
      setData(res)
      // console.log(res);
    });
  }, [])

  return (
    <>
      <div className="detailscontainer">
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{data.PhoneName}</h1>
                <div class="flex mb-4">
                  <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                  <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
                  <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
                </div>
                <p class="leading-relaxed mb-4">{data.PhoneDescription}</p>
                <div class="flex border-t border-gray-200 py-2">
                  <span class="text-gray-500">Model</span>
                  <span class="ml-auto text-gray-900">{data.PhoneModel}</span>
                </div>
                <div class="flex border-t border-gray-200 py-2">
                  <span class="text-gray-500">Maker</span>
                  <span class="ml-auto text-gray-900">{data.PhoneMaker}</span>
                </div>
                <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                  <span class="text-gray-500">Quantity</span>
                  <span class="ml-auto text-gray-900">1</span>
                </div>

                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-900">{data.PhonePrice}</span>
                  <button className="cart-button">ADD TO CART</button>
                  <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
                
                {/* -----------------DELETE API----------------- */}
                <div className="button-div">
                <button onClick={() => {
                  fetch('https://6319dc446b4c78d91b45c4d6.mockapi.io/smartphone/' + param.id, { method: "DELETE" })
                    .then((res) => {
                      navigate('/Smartphone')
                    })
                }} class="delete-button m-2"><span style={{ fontSize: '15px' }}>&#10060;</span>DELETE</button>
                {/* ------------EDIT API------------ */}
                <button onClick={() => {
                  navigate('../Smartphone/EditSmartphone/' + param.id);
                }} class="edit-button m-4"><span style={{ fontSize: '18px' }}>&#9998;</span> EDIT</button>
              </div>

              </div>
              <img alt="ecommerce" class="lg:w-1/2 object-center rounded  imaged" src={data.PhoneImage} />

            </div>
          </div>
        </section>
      </div>
    </>
  )

}
export default Smartphonedetails;