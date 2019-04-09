import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="about" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">About incub8</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>We a mission-driven, people-centered software developement solutions organization. Our strong development team works with clients who need proprietary apps and websites.</p>
          <p>Schedule a call <a href="">here</a></p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Recent Projects From incub8</h2>
          {/* MAKE Event gif and description */}
          <span className="image main"><img src={"https://raw.githubusercontent.com/jamesctucker/MAKE-Event-App/master/dashboard.gif"} alt="" /></span>
          <p><i>MAKE Event</i></p>
          <p>MAKE Event App is a CMS for storing and displaying event data in a central location.</p>
          
          {/* JourneyTellr gif and description */}
          <span className="image main"><img src={"https://raw.githubusercontent.com/journey-tellr-app/MVP/master/home.gif"} alt="" /></span>
          <p><i>JourneyTellr</i></p>
          <p>An in-house social media app for mobile enterprise use. JourneyTellr empowers employees to create and share authentic stories about company culture.</p>

          {/* Learn Russian image and description */}
          <span className="image main"><img src={"http://dionroloff.codes/wp-content/uploads/2019/02/Screen-Shot-2019-03-04-at-10.48.06-AM.png"} alt="" /></span>
          <p><i>Learn Russian</i></p>
          <p>An audio-visual app that allows users to create, edit, and study vocabulary in a foreign language.</p>
          {close}
        </article>

        <article id="team" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Meet the Team</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>James Tucker</p>
          <p>Dion Roloff</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <form name="contact" method="post" action="#" data-netlify="true">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
