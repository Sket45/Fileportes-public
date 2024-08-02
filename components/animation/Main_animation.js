const servicesScroll = (ref) => {

  useLayoutEffect(() => {

    window.addEventListener('scroll', onScroll)
  
    return () => {
      window.removeEventListener('scroll', onScroll)
    };
  }, [])      
    




}

export default servicesScroll;