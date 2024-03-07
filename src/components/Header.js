import './Header.css';

export default function Headers() {
	return (
		<div className='header'>
			<h2><span>OTP </span>Generator</h2>
			<a 
				className='small-btn' 
				href='https://github.com/mabdullah412/otp-generator-react' 
				target='_blank' 
				rel="noreferrer">GitHub</a>
		</div>
	);
}