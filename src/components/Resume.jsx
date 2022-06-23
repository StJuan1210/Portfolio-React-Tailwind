import React ,{ useState, useEffect } from 'react'
import resumepdf from '../assets/resume_v2.pdf'
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Backgif from '../assets/mainanim.gif'
import DownloadIcon from '@mui/icons-material/Download';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Resume() {
 const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [])
  return (
    <div style={{backgroundImage: "url("+ Backgif+")"}}>
        <div className='resume-container item-center text-center' >
            <h1 className='stat-value mt-5 mb-5'>Resume</h1>
            <Document file={resumepdf} className="item-center">
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
            <a href = {resumepdf} className="btn btn-primary mt-5">Download Resume &nbsp;{<DownloadIcon/>}</a>
        </div>
    </div>
  )
}

export default Resume