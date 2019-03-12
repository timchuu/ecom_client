import React from 'react'

const Contact = () => {
  return (
    
                <div className="col-md-6 contact-right-content">
                    <form action="#" method="post">
                        <input type="text" name="Name" placeholder="Name" required=""/>
                        <input type="email" className="email" name="Email" placeholder="Email" required=""/>
                        <input type="text" name="Phone no" placeholder="Phone" required=""/>
                        <textarea name="Message" placeholder="Message" required=""></textarea>
                        <div className="read mt-3">
                            <input type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
               
                
  )
}

export default Contact
