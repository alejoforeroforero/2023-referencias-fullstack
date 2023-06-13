- To see the local storage: console -> Application

       localStorage.setItem(
          'userData', 
          JSON.stringify({userId: uid, token:token})
        );


- Login simple example:

         const [isLoggedIn, setIsLoggedIn] = useState(false);

         useEffect(()=>{
           const logInfo = localStorage.getItem('isLoggedIn');
           if(logInfo === '1'){
             setIsLoggedIn(true);
           }
         }, []);

         const loginHandler = (email, password) => {
           localStorage.setItem('isLoggedIn', '1'); 
           setIsLoggedIn(true);
         };

         const logoutHandler = () => {
           localStorage.removeItem('isLoggedIn');
           setIsLoggedIn(false);
         };
