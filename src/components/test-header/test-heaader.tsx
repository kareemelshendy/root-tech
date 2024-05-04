import classes from './text-header.module.scss';

export const TestHeader = () => {
	return (
		<>
			<div className={classes['header']}>
				<div className='container pt-5'>
					<div className='d-flex justify-content-between position-relative'>
						<div className={classes['header-center']}>
							<div className='d-flex align-items-center'>
								<p className={classes['main-text']}>
									مجموعة من أفضل الخبراء في كافة المجالات
								</p>
							</div>
							<div>
								{/* <img
									src={people}
									alt=''
									className={classes['header-image']}
								/> */}
							</div>
						</div>

						<div className={classes['searchBar-wrap']}>
							<SearchBar />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const SearchBar = () => {
	return (
		<form className=''>
			<div className='row'>
				<div className={classes['form-wrapper']}>
					<div className='col-md-6'>
						<input
							placeholder='ابحث باسم المينتور أو الوظيفة أو الدور...'
							className={classes.input}
						/>
					</div>
					<div className='col-md-3'>
						<select className={classes['custom-select']}>
							<option hidden>التخصص</option>
							<option>اول</option>
							<option>ثان</option>
							<option>ثالث</option>
							<option>رابع</option>
						</select>
					</div>

					<div className='col-md-3  d-flex justify-content-end'>
						<button type='submit' className={classes.button}>
							ابحث
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

// export default SearchBar;
