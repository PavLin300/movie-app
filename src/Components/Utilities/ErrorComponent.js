function ErrorComponent({ message }) {
	return (
		<div className='errorComponent mx-auto w-50 text-center mt-5'>
			<h1 className='text-danger'>Oops... Something went wrong :{"("}</h1>
			<h2 className='text-light'>{message}</h2>
		</div>
	);
}

export default ErrorComponent;
