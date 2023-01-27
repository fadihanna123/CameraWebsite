import { useEffect } from 'react';

/**
 * Set page title depends on title param.
 *
 * @function useTitle
 * @param { string } title
 * @returns { void }
 */
const useTitle = (title: string): void => {
  useEffect(() => {
    document.title = title;
  }, []);
};

export default useTitle;
