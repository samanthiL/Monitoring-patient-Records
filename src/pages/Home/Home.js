import React, { useState } from 'react';
import Sidebar from '../../component/Sidebar';
import '../../component/sidebar.css';
const Home = ({ role, pages }) => {

  console.log("pages,",pages);
  console.log("roles,",role)

  const [selectedPage, setSelectedPage] = useState(pages[0]?.key);

  console.log("Selected Page:", selectedPage);

  const renderContent = () => {
    const page = pages.find((p) => p.key === selectedPage);
    return page ? page.component : <div>Page not found.</div>;
  };

  return (
    <div className='container'>
      {/* Sidebar Section */}
      <div className="item">
        <Sidebar setSelectedPage={setSelectedPage} />
      </div>

      {/* Dynamic Content Section */}
      <div className="item2">
        <h2> Welcome {role}</h2>
        {renderContent()}
      </div>
    </div>
  );
};


export default Home;