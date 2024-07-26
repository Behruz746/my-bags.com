import { useEffect } from "react";

const useGetTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useGetTitle;
