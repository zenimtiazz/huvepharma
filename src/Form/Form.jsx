import React from "react";
import "./form.css";

export default function Form() {
  return (
    <section id="product-form" class="content-section">
      <div class="mincontainer">
        <div className="form-title">
          <h2>Ask us a question</h2>
          <p className="somedetail">
            Fill in this form to ask us your question and a member of the
            HuvepharmaÂ® team will respond as soon as possible.
          </p>
          <br />
          <br />
          <form class="w-full max-w-lg justify-center bg-white rounded-lg h-full ">  
  <div class="flex flex-wrap -mx-5 mb-12 justify-center "> 
  <div class="flex items-center border-b border-teal-500 py-1 justify-around">  

<label>FullName* </label>
      <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-7 px-3 whitespace-pre-line leading-normal focus:outline-none " type="text" placeholder=" &nbsp; &nbsp; Jaspen Bakker " />    
        </div>
        <div class="flex items-center border-b border-teal-500 py-2 justify-around">  
 
       <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-2 py-1 px-1 justify-around leading-normal focus:outline-none justify-around" type="text" placeholder="Email " />    
         </div>
         
   </div>
   <div class="flex items-center border-b border-teal-500 py-2 justify-around">  
 
 <input class="appearance-none bg-transparent border-none w-full text-gray-400 mr-3 py-2 px-5 justify-around leading-normal focus:outline-none justify-around" type="text" placeholder="Questions* " />    
   </div>
   <div class="flex mt-8 justify-center">
  <label class="flex items-center text-gray-400">
    <input type="checkbox" class="form-checkbox" />
    <span class="ml-2">I agree to the <span class="text-green-600">privacy policy</span></span>
  </label>
</div>
<br />
<button class="bg-green-600 hover:bg-green-600 text-white font-normal py-1 px-6 rounded-full">
  SEND MESSAGE
</button>
 
</form>

        </div>
      </div>
    </section>
  );
}
