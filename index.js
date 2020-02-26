window.addEventListener("load", () => {
	const samples = document.querySelectorAll(".sound");
	const pads = document.querySelectorAll(".pads div");
	const floatArea = document.querySelector(".floatArea");
	/*floatArea.style.animation = `fade 1s ease`;*/
	const colors =
	[
	"#f04d4d",
	"#47ff56",
	"#47ffcb",
	"#f459ff",
	"#ff5959",
	"#9359ff"
	];

	pads.forEach((pad, index) => {
		pad.addEventListener("click", function(){
			const floatArea = document.querySelector(".floatArea");
			console.log(index);
			samples[index].currentTime = 0;
			samples[index].play();
			floatArea.style.animation = `fade 1s ease`;
			floatArea.style.backgroundColor = colors[index];
						
			/*createSlab(index);*/
			
		});
	});

	const createSlab = index => {
		const slab = document.createElement("div");
		
		floatArea.appendChild(slab);
		slab.style.backgroundColor = colors[index];
		slab.style.animation = `bounce 1s ease`;
		slab.addEventListener("animationend", function(){
		floatArea.removeChild(this);
		});
	};


});