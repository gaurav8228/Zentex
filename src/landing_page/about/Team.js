import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col mt-5 '>
                    <img src='media/images/nithinKamath.jpg' className='rounded-circle' style={{width:"60%" , marginLeft:"160px"}}/>
                    <h5 className='mt-4 ' style={{marginLeft:"250px"}}>Nithin Kamath</h5>
                    <p className='mt-2 text-muted' style={{marginLeft:"265px"}}>Founder, CEO</p>
                </div>
                <div className='col lh-lg text-muted'>
                <h4 className='mb-5'>People</h4>
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on <a href=''>Homepage</a> / <a href=''>TradingQnA</a> / <a href=''>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;