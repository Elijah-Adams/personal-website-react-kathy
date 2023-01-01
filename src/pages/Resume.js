import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import '../App.css';
import { FaDownload } from 'react-icons/fa';
import Footer from './Footer';

function Resume() {

  return (
    <div className="Resume">
      <header className="Resume-header">

        <Document className="resumePDF" file="/resume.pdf">
          <Page className="pagePDF" pageNumber={1} />
        </Document>

        <a class='downloadA' href="./resume.pdf" download="Elijah-Adams-Resume.pdf">
          <button class="button-59" href="/resume.pdf" download><FaDownload /> &#160; Download</button>
        </a>

        <Footer />

      </header>
    </div>
  );
};

export default Resume;
