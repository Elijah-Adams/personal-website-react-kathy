import React from 'react';
import Footer from './Footer';
import { FaFileInvoice } from 'react-icons/fa';

const Home = () => {

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="Body">
      <header className="Body-header">
        


        <section class='logo'>
          <div class='logo-gradient'>
            <h2>Finance<br />& Marketing</h2>
          </div>
        </section>

        <p className="Description"><p className="hello">Hello!</p>
          My name is Kathryn Habian. I'm a self-motivated, well-organized, ambitious Ohio Wesleyan Finance and Business Administration Marketing double major who is conscientious, possesses strategic problem-solving skills, and strives for excellence. An individual who is thorough in her work and has demonstrated highly-effective communication ability.
          <a href="Resume" class="ResumeLink" onClick={topFunction()}>
            &#160;<FaFileInvoice/>
          </a>
        <p className="name">- Kathryn Habian</p></p>


        <div className='Stats'>

          
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default Home;
