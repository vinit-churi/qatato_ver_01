import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const VideoContext = createContext();
const VideoContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const value = { videos, setVideos };
  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};

VideoContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VideoContextProvider;
