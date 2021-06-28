import React , {useState}from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from './Footer'
import '../../App.css'
import Services from '../Services/index'

import MeetTheSponsors from "../sponsors/MeetTheSponsors"
import Sponsors from "../sponsors/sponsors"
import sponsorsData from "../sponsors/sponsorsData"

export const Landing = ({ isAuthenticated }) => {
	const [sponsorsD,SetSponsors] = useState(sponsorsData)

	if (isAuthenticated) {
		return <Redirect to='/dashboard' />;
	}


	const sponsors = sponsorsD.map(item => <Sponsors key={item.id} item={item}/>)
	
	return (
		<>
		<section className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
				<video  src='assets/videos/video-2.mp4'  type="video/mp4" autoPlay loop muted ></video>
					<h1 className='x-large'>Meet Our Freelancers !</h1>
					<p className='lead'>
						Create a freelancer account, add projects and posts, and meet other
						freelancers
					</p>
					<div className='buttons'>
						<Link to='/register' className='btn btn-primary'>
							Sign Up
						</Link>
						<Link to='/login' className='btn btn-light'>
							Login
						</Link>
					</div>
				</div>
			</div>
		</section>

		 <section>
		<Services />
		</section> 
		<section>
		<MeetTheSponsors
          title="Sponsors"
          subtitle={sponsors}
          id="section4"
        />
		</section>
		

		<section>
		<Footer />
		</section>
		</>
	
	);
};

Landing.propTypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);