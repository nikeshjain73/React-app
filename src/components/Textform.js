import React,{useState} from 'react'

export default function Textform(props) {

    const handleUpClick = (event) => {
        event.preventDefault();
        if(text.length>0){
          console.log("upper case was clicked");
          let newText = text.toUpperCase();
          setText(newText);
          props.showAlert("Changed to Upper Class","success")
        }
        else{
          props.showAlert("Nothing is there","warning")

        }
        
    }

    const handleLoClick = (event) => {
      event.preventDefault();
        if(text.length>0){
          
          console.log("Lower case was clicked");
          let newText = text.toLowerCase();
          setText(newText);
          props.showAlert("Changed to Lower Class","success")
        }
        else{
          props.showAlert("Nothing is there","warning")

        }

    }
    const Capitalizeword = (event) =>{
      event.preventDefault();
     if(text.length>0){
          
          const lower = text.toLowerCase();
          const capitalized=lower.charAt(0).toUpperCase() + lower.slice(1);
          setText(capitalized)
          props.showAlert("Changed to Capitalize","success")
  
      }
      else{
        props.showAlert("Nothing is there","warning")

      }
     
    }
    
const handleOnChange = (event) => {
    console.log("texted has changed");
    setText(event.target.value);
}


const [text, setText] = useState('Enter text here');


  return (
    <>
    <div style={{color: props.mode === 'light'?'Black':'White'}}>
        <h1 className="my-3">{props.heading}</h1>
      <form>
  <div className="mb-3">
    <textarea className="form-control  my-3"  style={{backgroundColor: props.mode === 'light'?'white':'#656160',color: props.mode === 'light'?'Black':'White'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    <button className="btn btn-primary  my-3 mx-1" onClick={handleUpClick}>Covert to Uppercase</button>
    <button className="btn btn-primary  my-3 mx-1" onClick={handleLoClick}>Covert to Lowercase</button>
    <button className="btn btn-primary  my-3 mx-1" onClick={Capitalizeword}>Covert to Capitalize</button>
  </div>
  
</form>
    </div>
    <div className="container my-4" style={{color: props.mode === 'light'?'Black':'White'}}>
        <h2>Your text Summary</h2>
        <p>{text.length > 0?text.split(" ").length:'0'} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Mintues for reading</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    
    </>

  )
}
