


function Application(){
	return(
		<div className='scoreboard'>
			<div className='header'>
				<h1>MLS SEMI-Final Scoreboard</h1>
			</div>
			<div className='teams'>
				<div className='team'>
					<div className='team-name'>Columbus</div>
				</div>
		</div>
	)

}

// ReactDOM.render pusts a component into the DOM.
// It takes 2 args:
// 1 What.
// 2 Where.



ReactDOM.render(
	<Application/>
	<div>sanity check</div>,
	document.getElementById('root')
)