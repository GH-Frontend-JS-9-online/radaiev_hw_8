
var easyLevel = false;
var hardLevel = false;
	let sec = -1;
	let min = 0;
let gameWindow = document.querySelector('.game_window');

play.addEventListener('click', function() {
	play.style.display = 'none';
	easy.style.display = 'inline';
	hard.style.display = 'inline';
});


function easyLevell() {
	easy.style.display = 'none';
	hard.style.display = 'none';
	gameWindow.classList.add('easy_level');
	easyLevel = true;
}

function hardLevell() {
	easy.style.display = 'none';
	hard.style.display = 'none';
	gameWindow.classList.add('hard_level');
	hardLevel = true;
}



function timer() {
	sec++;
	if(sec == 60) {
		min++;
		sec = 0;
	}
	let timer = document.querySelector('.timer');
	timer.innerHTML = `${min}:${sec}`
	setTimeout('timer()', 1000);

	let stat = document.querySelectorAll('.stat');

	for(let item of stat) {
			if(easyLevel === true && +item.children[1].innerHTML <= 0 || hardLevel === true && +item.children[1].innerHTML <= 0) {

			return `Ваше время: ${min}min ${sec}sec.`;	

		}	
	}

}



function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

let foodStatEase = randomInteger(53, 100);
let cleanStatEase = randomInteger(53, 100);
let happiStatEase = randomInteger(53, 100);

let foodStatHard = randomInteger(55, 70);
let cleanStatHard = randomInteger(55, 70);
let happiStatHard = randomInteger(55, 70);

let stats = document.querySelector('.stats');

function creatNewStats(){

	if(easyLevel === true) {
		stats.children[0].children[1].innerHTML = foodStatEase;
		stats.children[1].children[1].innerHTML = cleanStatEase;
		stats.children[2].children[1].innerHTML = happiStatEase;

		stats.children[0].style.height = foodStatEase + 'px';
		stats.children[1].style.height = cleanStatEase + 'px';
		stats.children[2].style.height = happiStatEase + 'px';
	}

		if(hardLevel === true) {
		stats.children[0].children[1].innerHTML = foodStatHard;
		stats.children[1].children[1].innerHTML = cleanStatHard;
		stats.children[2].children[1].innerHTML = happiStatHard;

		stats.children[0].style.height = foodStatHard + 'px';
		stats.children[1].style.height = cleanStatHard + 'px';
		stats.children[2].style.height = happiStatHard + 'px';
	}

}

function decreaseStats() {

	if(easyLevel === true) {
		stats.children[0].children[1].innerHTML = stats.children[0].children[1].innerHTML - 3;
		stats.children[1].children[1].innerHTML = stats.children[1].children[1].innerHTML - 3;
		stats.children[2].children[1].innerHTML = stats.children[2].children[1].innerHTML - 3;
		
		stats.children[0].style.height = (parseInt(stats.children[0].style.height) -3) + 'px';
		stats.children[1].style.height = (parseInt(stats.children[1].style.height) -3) + 'px';
		stats.children[2].style.height = (parseInt(stats.children[2].style.height) -3) + 'px';
		setTimeout('decreaseStats() ', 3000);
	}

		if(hardLevel === true) {
		stats.children[0].children[1].innerHTML = stats.children[0].children[1].innerHTML - 5;
		stats.children[1].children[1].innerHTML = stats.children[1].children[1].innerHTML - 5;
		stats.children[2].children[1].innerHTML = stats.children[2].children[1].innerHTML - 5;
		
		stats.children[0].style.height = (parseInt(stats.children[0].style.height) -5) + 'px';
		stats.children[1].style.height = (parseInt(stats.children[1].style.height) -5) + 'px';
		stats.children[2].style.height = (parseInt(stats.children[2].style.height) -5) + 'px';
		setTimeout('decreaseStats() ', 2000);
	}

	
}


function btnActions(event) {

	if(easyLevel === true) {
		if(event.target.dataset.actions == 'eat') {

			stats.children[0].children[1].innerHTML = +stats.children[0].children[1].innerHTML + 30;
			stats.children[1].children[1].innerHTML = +stats.children[1].children[1].innerHTML - 20;

			stats.children[0].style.height = (parseInt(stats.children[0].style.height) + 30) + 'px';
			stats.children[1].style.height = (parseInt(stats.children[1].style.height) - 20) + 'px';

			if(stats.children[0].children[1].innerHTML >= 100) {
				stats.children[0].children[1].innerHTML = 100;
				stats.children[0].style.height = '100px';
			}

		}else if (event.target.dataset.actions == 'wash') {
			stats.children[1].children[1].innerHTML = +stats.children[1].children[1].innerHTML + 40;
			stats.children[2].children[1].innerHTML = +stats.children[2].children[1].innerHTML - 20;

			stats.children[1].style.height = (parseInt(stats.children[1].style.height) + 40) + 'px';
			stats.children[2].style.height = (parseInt(stats.children[2].style.height) - 20) + 'px';

			if(stats.children[1].children[1].innerHTML >= 100) {
				stats.children[1].children[1].innerHTML = 100;
				stats.children[1].style.height = '100px';
			}

		}else if (event.target.dataset.actions == 'run') {
			stats.children[2].children[1].innerHTML = +stats.children[2].children[1].innerHTML + 15;
			stats.children[0].children[1].innerHTML = +stats.children[0].children[1].innerHTML - 10;

			stats.children[2].style.height = (parseInt(stats.children[2].style.height) + 15) + 'px';
			stats.children[0].style.height = (parseInt(stats.children[0].style.height) - 10) + 'px';

			if(stats.children[2].children[1].innerHTML >= 100) {
				stats.children[2].children[1].innerHTML = 100;
				stats.children[2].style.height = '100px';
			}
		}
	}

	if(hardLevel === true) {
		if(event.target.dataset.actions == 'eat') {

			stats.children[0].children[1].innerHTML = +stats.children[0].children[1].innerHTML + 30;
			stats.children[1].children[1].innerHTML = +stats.children[1].children[1].innerHTML - 20;

			stats.children[0].style.height = (parseInt(stats.children[0].style.height) + 30) + 'px';
			stats.children[1].style.height = (parseInt(stats.children[1].style.height) - 20) + 'px';

			if(stats.children[0].children[1].innerHTML >= 70) {
				stats.children[0].children[1].innerHTML = 70;
				stats.children[0].style.height = '70px';
			}

		}else if (event.target.dataset.actions == 'wash') {
			stats.children[1].children[1].innerHTML = +stats.children[1].children[1].innerHTML + 40;
			stats.children[2].children[1].innerHTML = +stats.children[2].children[1].innerHTML - 20;

			stats.children[1].style.height = (parseInt(stats.children[1].style.height) + 40) + 'px';
			stats.children[2].style.height = (parseInt(stats.children[2].style.height) - 20) + 'px';

			if(stats.children[1].children[1].innerHTML >= 70) {
				stats.children[1].children[1].innerHTML = 70;
				stats.children[1].style.height = '70px';
			}

		}else if (event.target.dataset.actions == 'run') {
			stats.children[2].children[1].innerHTML = +stats.children[2].children[1].innerHTML + 15;
			stats.children[0].children[1].innerHTML = +stats.children[0].children[1].innerHTML - 10;

			stats.children[2].style.height = (parseInt(stats.children[2].style.height) + 15) + 'px';
			stats.children[0].style.height = (parseInt(stats.children[0].style.height) - 10) + 'px';

			if(stats.children[2].children[1].innerHTML >= 70) {
				stats.children[2].children[1].innerHTML = 70;
				stats.children[2].style.height = '70px';
			}
		}
	}

}

function showColorStats() {

	if(easyLevel === true) {

   	for(let i = 0; i < stats.children.length; i++ ) {
   		if( parseInt(stats.children[i].style.height) < 70 && parseInt(stats.children[i].style.height) > 30) {
   			stats.children[i].style.background = 'yellow';
   		}else if ( parseInt(stats.children[i].style.height) < 30 ) {
   			stats.children[i].style.background = 'red';
   		}else if( parseInt(stats.children[i].style.height) >= 70) {
   			stats.children[i].style.background = 'green';
   		}
   	}

	}

	if(hardLevel === true) {

		for(let i = 0; i < stats.children.length; i++) {
			if( parseInt(stats.children[i].style.height) < 47 && parseInt(stats.children[i].style.height) > 24 ) {
				stats.children[i].style.background = 'yellow';
			}else if ( parseInt(stats.children[i].style.height) <= 24 ) {
				stats.children[i].style.background = 'red';
			}else if( parseInt(stats.children[i].style.height) >= 47) {
   			stats.children[i].style.background = 'green';
   		}
		}

	}

	requestAnimationFrame(showColorStats);
}

function showTopStats(event) {

	if(event.target.dataset.actions == 'eat') {
		stats.children[0].children[0].innerHTML = "+30";
		stats.children[0].children[0].style.display = 'inline';
		setTimeout(() => stats.children[0].children[0].style.display = 'none', 500);

		stats.children[1].children[0].innerHTML = "-20";
		stats.children[1].children[0].style.display = 'inline';
		setTimeout(() => stats.children[1].children[0].style.display = 'none', 500);
	
	}else if(event.target.dataset.actions == 'wash') {
		stats.children[1].children[0].innerHTML = "+40";
		stats.children[1].children[0].style.display = 'inline';
		setTimeout(() => stats.children[1].children[0].style.display = 'none', 500);

		stats.children[2].children[0].innerHTML = "-20";
		stats.children[2].children[0].style.display = 'inline';
		setTimeout(() => stats.children[2].children[0].style.display = 'none', 500);
	
	}else if(event.target.dataset.actions == 'run') {
		stats.children[2].children[0].innerHTML = "+15";
		stats.children[2].children[0].style.display = 'inline';
		setTimeout(() => stats.children[2].children[0].style.display = 'none', 500);

		stats.children[0].children[0].innerHTML = "-10";
		stats.children[0].children[0].style.display = 'inline';
		setTimeout(() => stats.children[0].children[0].style.display = 'none', 500);
	}

}

function showGameOver() {
	let stat = document.querySelectorAll('.stat');

	for(let item of stat) {
			if(easyLevel === true && +item.children[1].innerHTML <= 0 || hardLevel === true && +item.children[1].innerHTML <= 0) {

			gameWindow.classList.remove('easy_level');	
			gameWindow.classList.remove('hard_level');

			gameOver.style.display = 'block';	
			result.style.display = 'block';
			setTimeout(() => { restart.style.display = 'block';}, 1000);
			let resultTime = timer();
			result.innerHTML = resultTime;
			time.style.display = 'none';

			easyLevel = false;
			hardLevel = false;
			return;	
		}	
	}
	
		requestAnimationFrame(showGameOver);
}

function restarted() {
	location.reload();
}


easy.addEventListener("click", easyLevell);
easy.addEventListener("click", timer);
easy.addEventListener("click", creatNewStats);
easy.addEventListener("click", decreaseStats);


hard.addEventListener('click',hardLevell);
hard.addEventListener('click',timer);
hard.addEventListener("click", creatNewStats);
hard.addEventListener("click", decreaseStats);

buttons.addEventListener('click',btnActions);
buttons.addEventListener('click',showTopStats);

restart.addEventListener('click',restarted);

showColorStats();
showGameOver();