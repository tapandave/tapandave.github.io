import React, {Component, Fragment} from 'react';
import Avatar from './Avatar';

class Header extends Component {

   getnetworks = (network) => {
      return network.map((network) => (
         <li key={network.name}>
            <a href={network.url}>
               <i className={network.className}></i>
            </a>
         </li>
      ));
   }

   iterateStringValues = (skill) => {
      console.log(skill);
      const skills = skill.split(',');
      console.log(skills);
      return skills.map((s,i) => <span><span key={i} className="highlight underline text-upperCase">{s}</span>,&nbsp;</span>);
   }


  render() {
    if (!this.props.data) {
      return null;
    }

    const {
      name,
      occupation,
      description,
      city,
      social,
      profileImg,
    } = this.props.data;

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            {/* <div>
               <Avatar img={profileImg} alt="Tapan Dave"/>
            </div> */}
            <h1 className="responsive-headline">
              Hello, I'm <span className="highlight underline">{name}</span>
            </h1>
            {/* <div className="verticalFlip">
                  <span>{occupation}</span>
                  <span>Effective.</span>
                  <span>Horrible.</span>
                  <span>Magnificent.</span>
                  <span>Adorable.</span>
               </div> */}
            <hr />
            <div className="info">
               <h2 className="sub-headline highlight underline">
                 {occupation}
               </h2>
               <h3>{description.h2}&nbsp;</h3>
               <h3 className="skills">{this.iterateStringValues(description.skills)}</h3>
               <h3>{description.h3}&nbsp;</h3>
               <h3>{this.iterateStringValues(description.domains)}</h3>
               <h3>{description.summary}</h3>
            </div>
            <hr />
            <ul className="social">{this.getnetworks(social)}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
