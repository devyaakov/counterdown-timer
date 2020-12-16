/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");


(function () {
    'use stric';
    let fecha = "2020-12-24 00:00:00";
    let tiempos = [];

    function RunAnimation(time, name){

        console.log(name);
    
        document.querySelector(`${name} .card .card-face-back .time`).innerHTML = time;

        document.querySelector(`${name} .card`).addEventListener('transitionend', () => {
            document.querySelector(`${name} .card .card-face-front .time`).innerHTML = time;
            document.querySelector(`${name} .card`).classList.remove('flipped');
        }, { once: true });

        document.querySelector(`${name} .card`).classList.add('flipped');
    }

    function CalculateDate() {
        let date1 = new Date(fecha)
        let date2 = new Date();
        let result = new Date(date1 - date2);

        const chronometer = {
            d: result.getDate(),
            h: result.getHours(),
            m: result.getMinutes(),
            s: result.getSeconds()
        }

        chronometer.d = chronometer.d < 10 ? `0${chronometer.d}` : `${chronometer.d}`;
        chronometer.h = chronometer.h < 10 ? `0${chronometer.h}` : `${chronometer.h}`;
        chronometer.m = chronometer.m < 10 ? `0${chronometer.m}` : `${chronometer.m}`;
        chronometer.s = chronometer.s < 10 ? `0${chronometer.s}` : `${chronometer.s}`;

        let next = (parseInt(chronometer.s) - 1);
        next = next < 0 ? 59 : next;
        next = next < 10 ? `0${next}` : `${next}`;
        
        tiempos[0] = chronometer.s;
        tiempos[1] = next;
        
        document.querySelector(".timer-card-d .card .card-face-front .time").innerHTML = chronometer.d;
        document.querySelector(".timer-card-h .card .card-face-front .time").innerHTML = chronometer.h;
        document.querySelector(".timer-card-m .card .card-face-front .time").innerHTML = chronometer.m;
        document.querySelector(".timer-card-s .card .card-face-front .time").innerHTML = chronometer.s;

        setTimeout(() => CalculateDate(), 1000);
    }

    (function runClock(){
        
        CalculateDate();
    })();
})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXVuY2gtY291bnRkb3duLXRpbWVyLW1haW4vLi9zcmMvc3R5bGUuc2Nzcz80OTcwIiwid2VicGFjazovL2xhdW5jaC1jb3VudGRvd24tdGltZXItbWFpbi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sYXVuY2gtY291bnRkb3duLXRpbWVyLW1haW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGF1bmNoLWNvdW50ZG93bi10aW1lci1tYWluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGF1bmNoLWNvdW50ZG93bi10aW1lci1tYWluL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FDQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxrQ0FBa0MsS0FBSzs7QUFFdkMsa0NBQWtDLEtBQUs7QUFDdkMsc0NBQXNDLEtBQUs7QUFDM0Msc0NBQXNDLEtBQUs7QUFDM0MsU0FBUyxHQUFHLGFBQWE7O0FBRXpCLGtDQUFrQyxLQUFLO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQsY0FBYyxPQUFPLGNBQWM7QUFDcEYsaURBQWlELGNBQWMsT0FBTyxjQUFjO0FBQ3BGLGlEQUFpRCxjQUFjLE9BQU8sY0FBYztBQUNwRixpREFBaUQsY0FBYyxPQUFPLGNBQWM7O0FBRXBGO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSyxPQUFPLEtBQUs7O0FBRWhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEk7Ozs7OztVQ3pERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpYyc7XHJcbiAgICBsZXQgZmVjaGEgPSBcIjIwMjAtMTItMjQgMDA6MDA6MDBcIjtcclxuICAgIGxldCB0aWVtcG9zID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gUnVuQW5pbWF0aW9uKHRpbWUsIG5hbWUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lKTtcclxuICAgIFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7bmFtZX0gLmNhcmQgLmNhcmQtZmFjZS1iYWNrIC50aW1lYCkuaW5uZXJIVE1MID0gdGltZTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtuYW1lfSAuY2FyZGApLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7bmFtZX0gLmNhcmQgLmNhcmQtZmFjZS1mcm9udCAudGltZWApLmlubmVySFRNTCA9IHRpbWU7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7bmFtZX0gLmNhcmRgKS5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwcGVkJyk7XHJcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke25hbWV9IC5jYXJkYCkuY2xhc3NMaXN0LmFkZCgnZmxpcHBlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIENhbGN1bGF0ZURhdGUoKSB7XHJcbiAgICAgICAgbGV0IGRhdGUxID0gbmV3IERhdGUoZmVjaGEpXHJcbiAgICAgICAgbGV0IGRhdGUyID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZTEgLSBkYXRlMik7XHJcblxyXG4gICAgICAgIGNvbnN0IGNocm9ub21ldGVyID0ge1xyXG4gICAgICAgICAgICBkOiByZXN1bHQuZ2V0RGF0ZSgpLFxyXG4gICAgICAgICAgICBoOiByZXN1bHQuZ2V0SG91cnMoKSxcclxuICAgICAgICAgICAgbTogcmVzdWx0LmdldE1pbnV0ZXMoKSxcclxuICAgICAgICAgICAgczogcmVzdWx0LmdldFNlY29uZHMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hyb25vbWV0ZXIuZCA9IGNocm9ub21ldGVyLmQgPCAxMCA/IGAwJHtjaHJvbm9tZXRlci5kfWAgOiBgJHtjaHJvbm9tZXRlci5kfWA7XHJcbiAgICAgICAgY2hyb25vbWV0ZXIuaCA9IGNocm9ub21ldGVyLmggPCAxMCA/IGAwJHtjaHJvbm9tZXRlci5ofWAgOiBgJHtjaHJvbm9tZXRlci5ofWA7XHJcbiAgICAgICAgY2hyb25vbWV0ZXIubSA9IGNocm9ub21ldGVyLm0gPCAxMCA/IGAwJHtjaHJvbm9tZXRlci5tfWAgOiBgJHtjaHJvbm9tZXRlci5tfWA7XHJcbiAgICAgICAgY2hyb25vbWV0ZXIucyA9IGNocm9ub21ldGVyLnMgPCAxMCA/IGAwJHtjaHJvbm9tZXRlci5zfWAgOiBgJHtjaHJvbm9tZXRlci5zfWA7XHJcblxyXG4gICAgICAgIGxldCBuZXh0ID0gKHBhcnNlSW50KGNocm9ub21ldGVyLnMpIC0gMSk7XHJcbiAgICAgICAgbmV4dCA9IG5leHQgPCAwID8gNTkgOiBuZXh0O1xyXG4gICAgICAgIG5leHQgPSBuZXh0IDwgMTAgPyBgMCR7bmV4dH1gIDogYCR7bmV4dH1gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRpZW1wb3NbMF0gPSBjaHJvbm9tZXRlci5zO1xyXG4gICAgICAgIHRpZW1wb3NbMV0gPSBuZXh0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZXItY2FyZC1kIC5jYXJkIC5jYXJkLWZhY2UtZnJvbnQgLnRpbWVcIikuaW5uZXJIVE1MID0gY2hyb25vbWV0ZXIuZDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyLWNhcmQtaCAuY2FyZCAuY2FyZC1mYWNlLWZyb250IC50aW1lXCIpLmlubmVySFRNTCA9IGNocm9ub21ldGVyLmg7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lci1jYXJkLW0gLmNhcmQgLmNhcmQtZmFjZS1mcm9udCAudGltZVwiKS5pbm5lckhUTUwgPSBjaHJvbm9tZXRlci5tO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZXItY2FyZC1zIC5jYXJkIC5jYXJkLWZhY2UtZnJvbnQgLnRpbWVcIikuaW5uZXJIVE1MID0gY2hyb25vbWV0ZXIucztcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBDYWxjdWxhdGVEYXRlKCksIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIChmdW5jdGlvbiBydW5DbG9jaygpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIENhbGN1bGF0ZURhdGUoKTtcclxuICAgIH0pKCk7XHJcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==