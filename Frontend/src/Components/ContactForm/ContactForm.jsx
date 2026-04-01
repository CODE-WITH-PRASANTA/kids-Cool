import React, { useEffect } from "react";
import "./ContactForm.css";
import { FaCheckCircle } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

import child1 from "../../assets/a1.webp";
import child2 from "../../assets/a2.webp";

const Contactfrom = () => {

useEffect(() => {
const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
},{threshold:0.2});

elements.forEach(el => observer.observe(el));
},[]);

return (
<section className="admission-section">

<div className="admission-container">

{/* LEFT IMAGES */}
<div className="admission-images reveal">

<img
src={child1}
alt="child"
className="admission-img admission-img-top"
/>

<img
src={child2}
alt="child"
className="admission-img admission-img-bottom"
/>

</div>

{/* RIGHT CONTENT */}
<div className="admission-content">

<h2 className="admission-title reveal">Apply For Admission</h2>

<div className="admission-features">

<div className="reveal" style={{transitionDelay:"0.1s"}}>
<p><FaCheckCircle /> Assign practice exercises</p>
<p><FaCheckCircle /> Track student progress</p>
</div>

<div className="reveal" style={{transitionDelay:"0.2s"}}>
<p><FaCheckCircle /> Videos and articles</p>
<p><FaCheckCircle /> Join millions of students</p>
</div>

</div>

{/* FORM */}
<form className="admission-form reveal" style={{transitionDelay:"0.3s"}}>

<div className="admission-form-grid">

<div className="admission-field">
<label>Child's Name <span>(Required)</span></label>
<input type="text" />
</div>

<div className="admission-field">
<label>Child's DOB <span>(Required)</span></label>

<div className="admission-date">
<input type="text" placeholder="dd-mm-yyyy"/>
<FiCalendar />
</div>

</div>

<div className="admission-field">
<label>Parent's Name <span>(Required)</span></label>
<input type="text"/>
</div>

<div className="admission-field">
<label>Parent's Designation <span>(Required)</span></label>
<input type="text"/>
</div>

<div className="admission-field">
<label>Email <span>(Required)</span></label>
<input type="email"/>
</div>

<div className="admission-field">
<label>Phone No</label>
<input type="text"/>
</div>

</div>

<div className="admission-bottom">

<label className="admission-checkbox">
<input type="checkbox" />
Notify Your child weekly progress
</label>

<button className="admission-btn">
Apply Now
</button>

</div>

</form>

</div>

</div>

</section>
);
};

export default Contactfrom;