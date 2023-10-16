import { Link } from 'react-router-dom';
import error from '../../assets/error.png'
const ErrorPage = () => {
	return (
		<div className='w-full'>
			<img className='h-[400px] mx-auto mt-16' src={error} alt="" />
			<Link className='px-[20px] py-[10px] bg-primary rounded-[10px] font-[700] text-white mx-auto block md:w-[25%] text-center mt-8'  to='/'>Go to home</Link>
		</div>
	);
};

export default ErrorPage;