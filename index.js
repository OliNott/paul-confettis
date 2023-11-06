const paul = document.querySelector('.paul')

const frame = () => {
		confetti({
			spread: 360,
			ticks: 200,
			gravity: 1,
			decay: 0.94,
			startVelocity: 30,
			particleCount: 100,
			angle: 60,
			spread: 55,
			origin: { x: 0 },
			scalar: 3,
			shapes: ["image"],
			shapeOptions: {
				image: [{
						src: "images/paul1.png",
						width: 120,
						height: 120,
					},
					{
						src: "images/paul1.png",
						width: 120,
						height: 120,
					},
					{
						src: "images/paul2.png",
						width: 120,
						height: 120,
					},
					{
						src: "images/paul3.png",
						width: 120,
						height: 120,
					},
					{
						src: "images/paul4.png",
						width: 120,
						height: 120,
					},
					{
						src: "images/paul5.png",
						width: 120,
						height: 120,
					},
					{
						src: "images/paul6.png",
						width: 120,
						height: 120,
					},
					{
						src: "images/paul7.png",
						width: 120,
						height: 120,
					},
					{
						src: "images/paul8.png",
						width: 120,
						height: 120,
					},
				],
			},
		});
		confetti({
			spread: 360,
			ticks: 200,
			gravity: 1,
			decay: 0.94,
			startVelocity: 30,
			particleCount: 100,
			angle: 120,
			spread: 55,
			origin: { x: 1 },
			scalar: 3,
			shapes: ["image"],
			shapeOptions: {
				image: [{
						src: "images/paul1.png",
						width: 120,
						height: 120,
					},
					{
						src: "images/paul1.png",
						width: 120,
						height: 120,
					},
					{
						src: "images/paul2.png",
						width: 120,
						height: 120,
					},
					{
						src: "images/paul3.png",
						width: 120,
						height: 120,
					},
					{
						src: "images/paul4.png",
						width: 120,
						height: 120,
					},
					{
						src: "images/paul5.png",
						width: 120,
						height: 120,
					},
					{
						src: "images/paul6.png",
						width: 120,
						height: 120,
					},
					{
						src: "images/paul7.png",
						width: 120,
						height: 120,
					},
					{
						src: "images/paul8.png",
						width: 120,
						height: 120,
					},
				],
			},
		});
	}


paul.addEventListener('click', () => {
	const end = Date.now() + 15 * 1000;

	paul.classList.add('big-paul')

	setTimeout(() => paul.classList.remove('big-paul'), 100);

	frame();
})

