import { useLocation } from 'react-router-dom';

function useProcessedPathname() {
  const location = useLocation();

  function processPathname(pathname) {
    if (pathname === '/') {
      return 'users';
    }
    return pathname.startsWith('/') ? pathname.slice(1) : pathname;
  }

  return processPathname(location.pathname);
}

export default useProcessedPathname;
