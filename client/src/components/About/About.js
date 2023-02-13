import React, { Component } from 'react';
import qnas from './q&as.js'
import './About.scss';


class About extends Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='about'>
          <h1 id='about'>ABOUT ALUMNI CELL</h1>
          <p>The Alumni Cell is the Institute’s student-run cell to connect and broaden the alum network. It started as a group of 4 individuals but now encompasses 5 teams working to improve Alum-Institute-Student Relations.<br></br>The Yearbook was one such initiative undertaken by the Cell. Starting with the Class of 2021, the Yearbook’s First Edition was a smashing success and helped the alums and the students connect more.<br></br>Following the same, the Yearbook Portal is another initiative headed by the Web Development Division of the Alumni Cell. A one-stop hub to curate your Yearbook profile and help others do the same.<br></br>This is the very first edition of the Yearbook Portal, and we would love to hear your comments and suggestions so we can improve in the coming years.<br></br>Please reach us at:<br></br>E-Mail: alumnicell@iiti.ac.in<br></br>Enjoy commenting!<br></br>Regards<br></br>The Alumni Cell<br></br>Indian Institute of Technology, Indore<br></br></p>
        </div>
        <h1 id='faq'>Frequently Asked Questions</h1>
        <div className='qna'>
          {qnas.map((qna) => {
            return (
              <div id='questions'>
                
                <div className='q'>
                  <div>Q.</div><p>{qna.q}</p>
                </div>
                <div id='a'>
                  <div>A.</div><div>{qna.a}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
};

export default About;
