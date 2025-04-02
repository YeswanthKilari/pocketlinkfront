import { useState, useEffect } from "react";
import { BACKEND_URL } from "../src/config";
import axios from "axios";

export function useContent() {
  const [contents, setContents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshContent = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setTimeout(() => {
        setContents(response.data.content);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error fetching content:", error);
      setTimeout(() => {
        setError("Failed to load content");
        setIsLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    refreshContent();
  }, []);

  return { contents, refreshContent, isLoading, error };
}
