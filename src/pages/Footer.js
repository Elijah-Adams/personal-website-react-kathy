import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight, FaGithub, FaLinkedin, FaStackOverflow, FaHome } from 'react-icons/fa';

function Footer() {

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="Footer-Body">

      <div className='socials'>
        <a href="https://github.com/Elijah-Adams" target="_blank" rel="noreferrer" class="GithubLink">
          <FaGithub size={42}/>
        </a>
        <a href="https://www.linkedin.com/in/kathryn-habian-790296222/" target="_blank" rel="noreferrer" class="LinkedinLink">
          <FaLinkedin size={42}/>
        </a>
        <a href="https://stackoverflow.com/users/7024947/elijah-adams" target="_blank" rel="noreferrer" class="StackoverflowLink">
          <FaStackOverflow size={42}/>
        </a>
        <Link to="/" class="WebsiteLink" onClick={topFunction()}>
          <FaHome size={42}/>
        </Link>
      </div>

      <p>Interested in collaborating?</p>
      
      <Link to="/Contact" class="ContactLink">
        <button href="Contact" class="button-59" onClick={topFunction()}>Get in touch &#160; <FaLongArrowAltRight /></button>
      </Link>

      <h6>© Elijah Adams 2022</h6>



    </div>
  );
};

export default Footer;
