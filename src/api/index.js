import { useEffect, useState, useRef } from "react";
export const useGetVideos = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const effectRun = useRef(false);
  const getVideos = async () => {
    try {
      const response = await fetch(
        "https://api.npoint.io/5abcca6f4e39b4955965"
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!effectRun.current) return;
    getVideos();
    effectRun.current = true;
  }, []);
  return { data, error, isLoading };
};

export const useGetCategoryVideos = (category) => {
  console.log(category);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const effectRun = useRef(false);
  const getVideos = async () => {
    try {
      const response = await fetch(
        "https://api.npoint.io/5abcca6f4e39b4955965"
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!effectRun.current) return;
    getVideos();
    effectRun.current = true;
  }, []);
  return { data, error, isLoading };
};

export const useGetVideo = (videoId) => {
  console.log(videoId);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const effectRun = useRef(false);
  const getVideos = async () => {
    try {
      const response = await fetch(
        "https://api.npoint.io/5abcca6f4e39b4955965"
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!effectRun.current) return;
    getVideos();
    effectRun.current = true;
  }, []);
  return { data, error, isLoading };
};

export const useSearchVideos = (query) => {
  console.log(query);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const effectRun = useRef(false);
  const getVideos = async () => {
    try {
      const response = await fetch(
        "https://api.npoint.io/5abcca6f4e39b4955965"
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!effectRun.current) return;
    getVideos();
    effectRun.current = true;
  }, []);
  return { data, error, isLoading };
};
