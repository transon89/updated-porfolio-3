import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Son Tran</h2>
            <h4 style={{color: 'grey'}}>Programmer and Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I grew up in Nashville Tennessee. I received my Chemical Engineer degree in 2016. I started working as a Process Engineer for an automotive company as my first professional job that I've had. Throughout the time, I started to express my interest in coding and photography. I really hope after completing the bootcamp, I will be able to learn fundamental concepts of coding and able to apply in real world applications. In the future, I hope to utilize what I've learned in class and create myself a website with the photos I had captured to showcase to my friends and family.
I love working out & running, exploring the city, restaurants, boutique stores and travel around the world.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>9049 Ristau Dr Antioch TN, 37013</p>
            <h5>Phone</h5>
            <p>(615) 968-7393</p>
            <h5>Email</h5>
            <p>transon89@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2002}
              endYear={2006}
              schoolName="Vanderbilt"
              schoolDescription="Currently taking full-stack coding bootcamp. Expected graduation: April 18-2020"
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="Tennessee Tech University"
                 schoolDescription="Completed Bachelor of Engineer. 
                 Major: Chemical Engineer
                 Graduation Date: December 2016"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Process Engineer"
              jobDescription="•	Generate and control engineer monthly measurables/reports such as clients, products, inventory, for team management review meetings
              •	Using Excel to generate a statistical tool analysis  
              •	Collect, record, and transcribe data into engineering documents
              •	Work with equipment designers and manufacturing engineer to develop a cost effective and working production process
              •	Support in determining the root cause and assist in developing solution 
              •	Setup, Install and maintain work place PCs, networking and software.
              •	Responsible for APQP documentations
              •	Create new process visual work instructions, BOMs, and process routings.
              •	Evaluate workplace layout and methods to maximize efficiency
              •	Continuous process improvement, 5S, Poke Yoke, Kaizen, Kanban, TPM, SMED, 5S methodology 
              •	Assisted and trouble-shooting quality concerns and equipment or tooling problem in assigned area.
              •	Review and knowledgeable about process control parameters
              •	Monitor data to recommend corrective action and implement changes to process as required. 
              •	Provides support for new model tools developed by customers specification"
              />

              <Experience
                startYear={2015}
                endYear={2016}
                jobName="Engineer Intern"
                jobDescription="•	Create assembly standard work and visual work instructions
                •	Generate reports of daily works to management team.
                •	Maintain the equipment used for fabrication in safe and optimal working order, and manage employee training program for use of such equipment 
                •	Create spaghetti diagrams and implement layout efficiency improvements
                •	Design and implementation of fixtures to improve operator ergonomics, quality, or performance. 
                •	Perform waste walks, safety audit, and work instruction audits."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={50}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;