import React from 'react';


import './Landing.css';
const landing = () => {
    return (
        <div className='App'>
        <div className='main-div'>
            <div className='h1'>
             <h2>ROI Calculator</h2>
             <i className ="fa fa-times"></i>
            </div>
            <div className='cake'>
            <i class="fa fa-birthday-cake" aria-hidden="true"></i>
            <p>CAKE</p>
            <label class="switch">
                    <input type="checkbox" checked/>
                    <span class="slider round"></span>
               </label>   
               <p>USB</p>

            </div>
            <div className='input'>
           <input type="text" name="name" placeholder='0.000 USD' />
            </div>
            <div className='btn'>
                <button className='btn1' type='button'> $1000</button>  
                <button className='btn2' type='button'> $100</button>
                <p>~CAKE0.000</p>
            </div>
            <div className='text'>
                <p>Timeframe</p>
                <div className='buttons'>
                <button className='btn3' type='button'> 1 Day</button>  
                <button className='btn4' type='button'> 7 Days</button>
                <button className='btn5' type='button'>30 Days</button>  
                <button className='btn6' type='button'>1 Year</button>
                <button className='btn7' type='button'>5 Year</button>  
                </div>
            
            </div>
            <div className='txt'>
                <p>Enable Acclerated APY</p>
                <label class="switch">
                    <input type="checkbox" checked/>
                    <span class="slider round"></span>
               </label>
                </div>
                <div className='text1'>
                <p>Select Tier</p>
                <div className='buttons'>
                <button className='btn3' type='button'>Tier 1</button>  
                <button className='btn4' type='button'>Tier 2</button>
                <button className='btn5' type='button'>Tier 3</button>  
                <button className='btn6' type='button'>Tier 4</button>
                <button className='btn7' type='button'>Teir 5</button>  
                </div>
                </div>

                <div className='in input'>
                    <p>ROI at Current Rates</p>
                    <input type="text" name="name" placeholder='0.000 USD' />
                    <p>~0.000 CAKE + 0.000000 DON</p>
                </div>
               <div className='para'>
                   <p>Hide Details</p>
                   <i class='fa fa-angle-up'></i>
                   </div>
                   <div className='txxt'>
                       <p>APY</p>
                       <span>9.0 %</span>
                   </div>
                   <div className='paragraph'>
                       <div className='p1'>
                   <i class="fa fa-circle"></i>
                       <p>Calculated based on current rates</p>
                       </div>
                       <div className='p2'>
                       <i class="fa fa-circle"></i>
                       <p>All figures are estimates provided for your convenience only,and by no 
                           <br />
                           means represent  guaranted returns</p>
                           </div>
                   </div>

            </div>
        
        </div>
        

    );
}

export default landing;