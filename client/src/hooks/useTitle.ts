import { useEffect } from 'react';

/**
 * Set page title depends on title param.
 *
 * @param title
 */

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, []);
};

export default useTitle;
