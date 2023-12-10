import axios from "axios";
import { api } from "../config";

export const recordRating = async (ratingData) => {
  return await fetch(`${api}/ratings/rate`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ratingData),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return console.log(err);
    });
};

export const getRating = async (videoId) => {
  try {
    return await axios.get(`${api}/ratings/rate/${videoId}`);
  } catch (err) {
    console.log(err);
  }
};

export const signUp = async (data) => {
  return await fetch(`${api}/auth/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return console.log(err);
    });
};

export const fetchRecommendations = async (id) => {
  const recommendations = await fetch(`${api}/ratings/recommend/${id}`);
  const result = await recommendations.json();
  return result;
  //   console.log(result);
  //   setRecommendations(result);
};
