import axios from "axios";
import instance from "./axiosIndex";

const getAllBooks = async () => {
  const response = await instance.get("/books");
  return response.data;
};

const getOneBook = async (id) => {
  const response = await instance.get(`/books/${id}`);
  return response.data;
};

const createBook = async (title, image, price, description) => {
  const response = await instance.get("/books/", {
    title: title,
    image: image,
    price: price,
    description: description,
  });
  return response.data;
};

export { getAllBooks, getOneBook, createBook };
