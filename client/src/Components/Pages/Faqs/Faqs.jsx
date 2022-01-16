import React from "react";
import "./faqs.css";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import FaqsData from "./FaqsData";
import MetaData from '../../MetaData/MetaData';
const Faqs = () => {
  return (
    <>
    <MetaData title="Faqs" />
      <Breadcrumbs pageName={"Faqs"} />
      <div className="container mt-5">
        <div className="row mt-5">
          <h1 className="text-center">FAQS</h1>

         {
             FaqsData.map((faq,index)=>{
                 return(
                     <>
                     <FaqCard key={index} faq={faq}/>
                     </>
                 )
             })
         }
          
        </div>
      </div>
    </>
  );
};

const FaqCard = ({ faq }) => {
  return (
      <>
       <div className="col-12 mt-5">
            <p>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-dark"
                  width="100%"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={faq.dataBsTarget}
                  aria-expanded="false"
                  aria-controls={faq.ariaControls}
                >
                  {faq.title}
                </button>
              </div>
            </p>
            <div className="collapse mt-4" id={faq.ariaControls}>
              <div className="card">
                <div className="card-body">
                  {faq.desc}
                </div>
              </div>
            </div>
          </div>
      </>
  );
};
export default Faqs;
