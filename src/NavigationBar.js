import React, { useState, useEffect } from 'react';
// import profilePhoto from './ProfilePhoto.jpg'; 
const profilePhoto="https://cdn-icons-png.flaticon.com/512/9385/9385289.png"

// Bottom section component
const BottomSection = () => {
  return (
    <div className="bottom-image">
      <p>Tagline of Trovu</p>
    </div>
  );
};

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (event) => {
    // Remove 'active' class from all links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    event.target.classList.add('active');
    setActiveLink(event.target.textContent);
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    const links = document.querySelectorAll('.navigation-bar a');
    links.forEach(link => {
      if (link.href === currentUrl) {
        link.classList.add('active');
        setActiveLink(link.textContent);
      }
    });
  }, []);

  return (
    <div className="navigation-bar">
      <div className="profile-square">
        <div className="profile-photo-container">
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
          <div className="profile-name">Admin</div>
          <div className="profile-name1">BlackBasil</div>
        </div>
      </div>

      <ul style={{ padding: '15px' }}>
        <li>
          <div style={{ display: 'flex', alignItems: 'center' }} className={activeLink === 'Dashboard' ? 'active' : ''}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="30" height="30" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
          <a href="/" className={activeLink === 'Dashboard' ? 'nav-link active' : 'nav-link'} onClick={handleLinkClick}>
            Dashboard
          </a>
          </div>
        </li>
        <li>
          {/* <div style={{ display: 'flex', alignItems: 'center' }} className={activeLink === 'Settings' ? 'active' : ''}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="30" height="30" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
          <a href="/settings" className={activeLink === 'Settings' ? 'nav-link active' : 'nav-link'} onClick={handleLinkClick}>
            Settings
          </a>
          </div> */}
        
        </li>
        <li>
          {/* <div style={{ display: 'flex', alignItems: 'center' }}className={activeLink === 'Contact' ? 'active' : ''}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="30" height="30" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <a href="/contact" className={activeLink === 'Contact' ? 'nav-link active' : 'nav-link'} onClick={handleLinkClick}>
            Contact
          </a>
          </div> */}
        </li>
        <li>
          {/* <div style={{ display: 'flex', alignItems: 'center' }} className={activeLink === 'DataSource' ? 'active' : ''}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="28" height="28" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
          </svg>
          <a href="/DataSource" className={activeLink === 'DataSource' ? 'nav-link active' : 'nav-link'} onClick={handleLinkClick}>
            DataSource
          </a>
          </div> */}
        </li>
        <li>
          {/* <div style={{ display: 'flex', alignItems: 'center' }} className={activeLink === 'Docs' ? 'active' : ''}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="30" height="30" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2 ml-1">
          <path strokeLinecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
          </svg>
          <a href="/Docs" className={activeLink === 'Docs' ? 'nav-link active' : 'nav-link'} onClick={handleLinkClick}>
            Docs
          </a>
          </div> */}
        </li>
      </ul>
      <BottomSection />
    </div>
  );
}

export default NavigationBar;
