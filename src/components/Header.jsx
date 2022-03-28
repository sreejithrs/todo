import React from 'react'

function Header() {
  let greet = checkDate();
  return (
    <div>
        <div className="mainHeading">
            <h1>ToDo List, <span className='greet'>{greet}🌝☕ </span></h1> 
        </div>
        
    </div>
  )

  function checkDate() {
    var myDate = new Date();
    var hrs = myDate.getHours();
    var greet;
    if (hrs < 12) greet = "Good Morning";
    else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
    else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";
    return greet;
  }
}

export default Header