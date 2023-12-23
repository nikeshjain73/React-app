import React from 'react'
import PropTypes from 'prop-types'


export default function Contactu(props) {
  return (
    <div className="container" style={{backgroundColor: props.mode === 'light'?'white':'#042743',color: props.mode === 'light'?'Black':'White'}}>
        <h1>Contact US</h1>
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1"  className="form-label">First Name</label>
                    <input type="text" className="form-control" style={{backgroundColor: props.mode === 'light'?'white':'#656160',color: props.mode === 'light'?'Black':'White'}} placeholder="John"/>
             </div>
             <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                    <input type="text" className="form-control"style={{backgroundColor: props.mode === 'light'?'white':'#656160',color: props.mode === 'light'?'Black':'White'}} placeholder="Doe"/>
             </div>
             <div className="mb-5">
                <label htmlFor="exampleInputEmail1" className="form-label">Subject</label>
                    <textarea type="text" rows="4" className="form-control" style={{backgroundColor: props.mode === 'light'?'white':'#656160',color: props.mode === 'light'?'Black':'White'}} placeholder="Write somethings...." ></textarea>
             </div>
            <button type="submit" className="btn btn-primary">Submit</button>
         </form>
    </div>
  )
}
