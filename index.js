let but_fire = document.getElementById('but_fire')
let but_earth = document.getElementById('but_earth')
let but_water = document.getElementById('but_water')

let man_move = document.getElementById('man_move')
let computer_move = document.getElementById('computer_move')
let out = document.getElementById('out')

but_fire.onclick = function(){
	human = 'f'
	humturn('img/fire_army.png')
}

but_earth.onclick = function(){
	human = 'e'
	humturn('img/earth_army.png')
}

but_water.onclick = function(){
	human = 'w'
	humturn('img/water_army.png')
}

const variant = ['f', 'e', 'w']
const win = ['fe', 'ew', 'wf']
const loose = ['fw', 'ef', 'we']
let human = ''
let comp = ''
let pobeda = ''


function humturn(turn){
	man_move.src = turn
	console.log('вы выбрали', turn)
	compturn()
}

function compturn(){
	let r = Math.floor(Math.random()*3)
	console.log('Комп выбрал ', variant[r])
	
	if(variant[r] == 'f'){
		computer_move.src = 'img/fire_army.png'
	}
	if(variant[r] == 'e'){
		computer_move.src = 'img/earth_army.png'
	}
	if(variant[r] == 'w'){
		computer_move.src = 'img/water_army.png'
	}

	comp=variant[r]
	result()
}

function result(){
	console.log(human, comp)
	let res = human+comp
	if(win.includes(res)){
		pobeda = 'вы выиграли'
	}
	else if(loose.includes(res)){
		pobeda = 'вы проиграли'
	}
	else{
		pobeda = 'ничья'
	}
	document.getElementById('move').style.display = 'flex'
	out.innerText = pobeda
} 