import React from 'react'
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";


import pdf from "./../assets/CV_PoJiayun2024.pdf";
const Resume = () => {
  return (
    <section className="resume-section">
        <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
   
    </section>
  )
}

export default Resume
