import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import '../App.css';
import { FaDownload } from 'react-icons/fa';
import Footer from './Footer';



import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}




function ResumeTest() {
    const { height, width } = useWindowDimensions();
    const newWidth = (width / 1.25) > 800 ? (width / 2) : (width / 1.25);

  return (
    <div className="Resume">
      <header className="Resume-header">


        <Document className="testDocument" file="/resume.pdf">
            <Page className="testPage" pageNumber={1} width={newWidth}/>
        </Document>
        

        <a class='downloadA' href="./resume.pdf" download="Kathryn-Habian-Resume.pdf">
          <button class="button-59" id='resumeDownloadButton' href="/resume.pdf" download><FaDownload /> &#160; Download</button>
        </a>

      </header>
      <Footer />
    </div>
  );
};

export default ResumeTest;
