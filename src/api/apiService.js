import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.unsplash.com",
  params: {
    client_id: "IOSomVG1XQbYOHUXK4cpam1ynLzZW16kpz6BjJvANMQ",
  },
});

export const fetchImages = async (query, page) => {
  const response = await apiClient.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
    },
  });
  return response.data.results;
};
