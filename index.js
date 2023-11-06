const paul = document.querySelector('.paul')

paul.addEventListener('click', () => {
	paul.classList.add('big-paul')
	setTimeout(() => {
		paul.classList.remove('big-paul')
	}, 100);
	confetti({
		spread: 360,
		ticks: 200,
		gravity: 1,
		decay: 0.94,
		startVelocity: 30,
		particleCount: 100,
		scalar: 3,
		shapes: ["image"],
		shapeOptions: {
			image: [{
					src: "images/paul1.png",
					width: 32,
					height: 32,
				},
				{
					src: "images/paul1.png",
					width: 32,
					height: 32,
				},
				{
					src: "images/paul2.png",
					width: 32,
					height: 32,
				},
				{
					src: "images/paul3.png",
					width: 32,
					height: 32,
				},
				{
					src: "images/paul4.png",
					width: 32,
					height: 32,
				},
				{
					src: "images/paul5.png",
					width: 32,
					height: 32,
				},
				{
					src: "images/paul6.png",
					width: 32,
					height: 32,
				},
				{
					src: "images/paul7.png",
					width: 32,
					height: 32,
				},
				{
					src: "images/paul8.png",
					width: 32,
					height: 32,
				},
			],
		},
	});
})

