import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import Load from "../imgs/spin.gif";

import { url } from "./url";
import axios from "axios";

const ShopCategory = () => {
  const [category, setCategory] = useState(null);
  console.log(category);
  // const category = JSON.parse(localStorage.getItem("totalCategory"));

  const get_departments = async () => {
    // let url = "https://127.0.0.1:5000/api/departments";
    const { data } = await axios.post(`${url}/api/departments`);
    setCategory(data);
    // localStorage.setItem("totalCategory", JSON.stringify(data));
  };
  useEffect(() => {
    get_departments();
  }, []);

  const navigate = useNavigate();

  return (
    <Col
      className='d-md-block d-none p-0 border border-dark me-4 ms-4'
      style={{ maxHeight: "100%" }}
    >
      <h3 className='p-2 text-white bg-dark'>Category</h3>

      <div>
        {category ? (
          category.map((category) => (
            <p
              className='p-2 m-0  border-bottom '
              role='button'
              key={category._id}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/category/${category._id}`);
                // window.location.reload();
              }}
            >
              {category.name}
            </p>
          ))
        ) : (
          <img src={Load} className='loading-img' />
        )}
      </div>
    </Col>
  );
};

export default ShopCategory;
