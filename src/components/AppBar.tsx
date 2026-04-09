import './AppBar.css'

function AppBar() {
  return (
   <div className="app-bar">  
   <input type="search" placeholder="Search" className="app-bar-input" enterKeyHint="search" />  
   <div className="app-bar-content-container">
     <button type="button" className="app-bar-bell" aria-label="Notifications">
       <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
         <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
         <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
       </svg>
     </button>
     <div className="app-bar-divider" aria-hidden={true} />
   <div className="app-bar-profile-container">
     <button type="button" className="app-bar-profile" aria-label="Profile — Alex Sterling, Premium member">
       <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
         <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
         <circle cx="12" cy="7" r="4" />
       </svg>
     </button>
     <div className="app-bar-profile-text-container">
        <h2>
            Alex Sterling
        </h2>
        <p>
            PREMIUM MEMBER
        </p>
     </div>
   </div>
   </div>
   </div>
  )
}

export default AppBar