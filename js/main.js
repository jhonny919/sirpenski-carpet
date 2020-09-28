function solve1(size, co, pxsize) {
	if(size==243 && pxsize>3) {	
		pxsize=3;
		document.getElementById("pxsize").value=3;
	}
	let arr = [];
	for (let i = 0; i < size; i++) {
		arr[i] = [];
	}
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			arr[i][j] = 1;
		}
	}
	let n = 1;
	while (n < size) {
		for (let i = n; i < size; i += n * 3) {
			for (let j = n; j < size; j += n * 3) {
				arr[i][j] = 0;
				for (let ii = i; ii < i + n; ii++) {
					for (let jj = j; jj < j + n; jj++) {
						arr[ii][jj] = 0;
					}
				}
			}
		}
		n *= 3;
	}
	let htmlc = "";
	htmlc += `<div class="main">\n`;
	if (co == true) {
		for (let i = 0; i < size; i++) {
			htmlc += `\t<div class="line">\n`;
			for (let j = 0; j < size; j++) {
				if (arr[i][j] == 0) {
					htmlc += `\t\t<div class="zero" style="width: ${pxsize}px;height: ${pxsize}px;"></div>\n`;
				} else {
					htmlc += `\t\t<div class="one" style="width: ${pxsize}px;height: ${pxsize}px;"></div>\n`;
				}
			}
			htmlc += `\t</div>\n`;
		}
	} else {
		for (let i = 0; i < size; i++) {
			htmlc += `\t<div class="line">\n`;
			for (let j = 0; j < size; j++) {
				if (arr[i][j] == 0) {
					htmlc += `\t\t<div class="one" style="width: ${pxsize}px;height: ${pxsize}px;"></div>\n`;
				} else {
					htmlc += `\t\t<div class="zero" style="width: ${pxsize}px;height: ${pxsize}px;"></div>\n`;
				}
			}
			htmlc += `\t</div>\n`;
		}
	}
	htmlc += `</div>`;
	document.getElementsByClassName("main")[0].outerHTML = htmlc;
}

function solve2(size, co, pxsize) {
	if(size==243 && pxsize>3) {	
		pxsize=3;
		document.getElementById("pxsize").value=3;
	}
	let arr = [];
	for (let i = 0; i < size; i++) {
		arr[i] = [];
	}
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			arr[i][j] = 1;
		}
	}
	let n = 1;
	while (n < size) {
		for (let i = n; i < size; i += n * 3) {
			for (let j = n; j < size; j += n * 3) {
				arr[i][j] = 0;
				for (let ii = i; ii < i + n; ii++) {
					for (let jj = j; jj < j + n; jj++) {
						arr[ii][jj] = 0;
					}
				}
			}
		}
		n *= 3;
	}

	let arrs = [];
	for (let i = 0; i < size; i++) {
		arrs[i] = [];
	}

	let index = 0;
	let k = 1;
	let counter = 0;
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			if (k == 1) {
				if (arr[i][j] == 1) {
					counter++;
				} else if (arr[i][j] == 0) {
					arrs[i][index] = counter;
					index++;
					counter = 1;
					k = 0;
				}

				if (j == size - 1) {
					arrs[i][index] = counter;
					index = 0;
					counter = 0;
				}
			} else if (k == 0) {
				if (arr[i][j] == 0) {
					counter++;
				} else if (arr[i][j] == 1) {
					arrs[i][index] = counter;
					index++;
					counter = 1;
					k = 1;
				}

				if (j == size - 1) {
					arrs[i][index] = counter;
					index = 0;
					counter = 0;
				}
			}

		}
	}


	let htmlc = "";
	htmlc += `<div class="main">\n`;
	for (let i = 0; i < size; i++) {
		htmlc += `\t<div class="line">\n`;
		for (let j = 0; j < arrs[i].length; j++) {
			if (co == false) {
				htmlc += `\t\t<div class="zero" style="width: ${pxsize*arrs[i][j]}px;height: ${pxsize}px;"></div>\n`;
				co = true;
			} else {
				htmlc += `\t\t<div class="one" style="width: ${pxsize*arrs[i][j]}px;height: ${pxsize}px;"></div>\n`;
				co = false;
			}
			if (j == arrs[i].length - 1 && co == true) co = false;
			else if (j == arrs[i].length - 1 && co == false) co = true;
		}
		htmlc += `\t</div>\n`;
	}
	htmlc += `</div>`;
	document.getElementsByClassName("main")[0].outerHTML = htmlc;
}

function solve3(size, co, pxsize) {
	if(size==243 && pxsize>3) {	
		pxsize=3;
		document.getElementById("pxsize").value=3;
	}
	let htmlc = "";

	let levels = 0,
			fsize = size;
		while (fsize > 1) {
			fsize /= 3;
			levels++;
		}

	if (co == true) {
		htmlc += `<div class="main">\n`;
		htmlc += `\t<div style="width: ${size*pxsize}px;height: ${size*pxsize}px;position: relative;background-color: darkred;">\n`

		while (levels > 0) {
			let top = -2 * pxsize,
				left = -2 * pxsize;
			size /= 3;
			for (let i = 0; i < size; i++) {
				for (let j = 0; j < size; j++) {
					htmlc += `\t\t<div style="position: absolute;top: ${top+(i+1)*pxsize*3}px;left: ${left+(j+1)*pxsize*3}px;height: ${pxsize}px;width: ${pxsize}px;background-color: white;"></div>\n`;
				}
			}
			levels--;
			pxsize *= 3;
		}

		htmlc += `\t</div>\n`;
		htmlc += `</div>`;
	} else {
		htmlc += `<div class="main">\n`;
		htmlc += `\t<div style="width: ${size*pxsize}px;height: ${size*pxsize}px;position: relative;background-color: white;">\n`

		while (levels > 0) {
			let top = -2 * pxsize,
				left = -2 * pxsize;
			size /= 3;
			for (let i = 0; i < size; i++) {
				for (let j = 0; j < size; j++) {
					htmlc += `\t\t<div style="position: absolute;top: ${top+(i+1)*pxsize*3}px;left: ${left+(j+1)*pxsize*3}px;height: ${pxsize}px;width: ${pxsize}px;background-color: darkred;"></div>\n`;
				}
			}
			levels--;
			pxsize *= 3;
		}

		htmlc += `\t</div>\n`;
		htmlc += `</div>`;
	}

	document.getElementsByClassName("main")[0].outerHTML = htmlc;
}

//swap submits 
document.getElementById('submit1').onchange = function () {
	if (document.getElementsByClassName('color')[0].textContent == "white") {
		solve1(parseInt(document.getElementById('submit1').value), false, document.getElementById("pxsize").value);
	} else {
		solve1(parseInt(document.getElementById('submit1').value), true, document.getElementById("pxsize").value);
	}
	document.getElementById("submit2").value = ""
	document.getElementById("submit3").value = ""
}
document.getElementById('submit2').onchange = function () {
	if (document.getElementsByClassName('color')[0].textContent == "white") {
		solve2(parseInt(document.getElementById('submit2').value), false, document.getElementById("pxsize").value);
	} else {
		solve2(parseInt(document.getElementById('submit2').value), true, document.getElementById("pxsize").value);
	}
	document.getElementById("submit1").value = ""
	document.getElementById("submit3").value = ""
}
document.getElementById('submit3').onchange = function () {
	if (document.getElementsByClassName('color')[0].textContent == "white") {
		solve3(parseInt(document.getElementById('submit3').value), false, document.getElementById("pxsize").value);
	} else {
		solve3(parseInt(document.getElementById('submit3').value), true, document.getElementById("pxsize").value);
	}
	document.getElementById("submit1").value = ""
	document.getElementById("submit2").value = ""
}

//color bttn functional
document.getElementsByClassName('color')[0].onclick = function () {
	if (document.getElementsByClassName('color')[0].textContent == "red") {
		document.getElementsByClassName('color')[0].textContent = "white";

		if (document.getElementById("submit1").value > 0)
			solve1(document.getElementById("submit1").value, false, document.getElementById("pxsize").value)
		else if (document.getElementById("submit2").value > 0)
			solve2(document.getElementById("submit2").value, false, document.getElementById("pxsize").value)
		else if (document.getElementById("submit3").value > 0)
			solve3(document.getElementById("submit3").value, false, document.getElementById("pxsize").value)

	} else {
		document.getElementsByClassName('color')[0].textContent = "red";

		if (document.getElementById("submit1").value > 0)
			solve1(document.getElementById("submit1").value, true, document.getElementById("pxsize").value)
		else if (document.getElementById("submit2").value > 0)
			solve2(document.getElementById("submit2").value, true, document.getElementById("pxsize").value)
		else if (document.getElementById("submit3").value > 0)
			solve3(document.getElementById("submit3").value, true, document.getElementById("pxsize").value)
	}
}

//pixels size
document.getElementById('pxsize').onchange = function () {
	if (document.getElementsByClassName('color')[0].textContent == "red") {

		if (document.getElementById("submit1").value > 0)
			solve1(document.getElementById("submit1").value, true, document.getElementById("pxsize").value)
		else if (document.getElementById("submit2").value > 0)
			solve2(document.getElementById("submit2").value, true, document.getElementById("pxsize").value)
		else if (document.getElementById("submit3").value > 0)
			solve3(document.getElementById("submit3").value, true, document.getElementById("pxsize").value)

	} else {

		if (document.getElementById("submit1").value > 0)
			solve1(document.getElementById("submit1").value, false, document.getElementById("pxsize").value)
		else if (document.getElementById("submit2").value > 0)
			solve2(document.getElementById("submit2").value, false, document.getElementById("pxsize").value)
		else if (document.getElementById("submit3").value > 0)
			solve3(document.getElementById("submit3").value, false, document.getElementById("pxsize").value)
	}
}