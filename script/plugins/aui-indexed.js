/**
* AUI JAVASCRIPT PLUGIN
* aui-indexid-list.js 索引列表
* version 0.0.2
* Copyright (c) 2015 auicss.com @流浪男  QQ：343757327  群：344869952
*/
(function(window){
	var IndexedList = function(){
		_init();
	}
	var listArr = document.querySelectorAll(".aui-indexed .aui-list-item");
	var indexedWrap = document.querySelector(".aui-indexed");
	// 搜索类
	var searchWrap = document.querySelector(".aui-searchbar-wrap");
	var searchBar = document.querySelector(".aui-searchbar");
	var clearBtn = document.getElementById("aui-searchbar-clear");
	var searchInput = document.getElementById("aui-searchbar-input");
	var searchCancel = document.getElementById("aui-searchbar-cancel");
	// 右侧bar
	var bar = document.querySelector(".aui-indexed-bar");
	// 重置bar高度
	var barList = document.querySelectorAll(".aui-indexed-bar .aui-indexed-bar-item");
	var barH = bar.offsetHeight;
	var newBarH = barList.length*15;
	var _init = function(){

		indexedWrap.style.height = window.innerHeight+"px";


		bar.style.height = newBarH+"px";
		bar.style.top = "50%";
		bar.style.marginTop = "-"+(newBarH/2)+"px";

		bar.addEventListener('touchstart', function(event) {
			bar.style.opacity = "1";
			scrollTop(event);
		}, false);
		// 监听bar滑动
		bar.addEventListener('touchmove', function(event) {
			scrollTop(event);
		}, false);
		document.body.addEventListener('touchend', function(event) {
			removeToast(event);
		}, false);
		document.body.addEventListener('touchcancel', function(event) {
			removeToast(event);
		}, false);
	}
	var scrollTop = function (event){
		event.preventDefault();
		var clientX = event.changedTouches[0].clientX;
		var clientY = event.changedTouches[0].clientY;
		var _thisBar = document.elementFromPoint(clientX, clientY);
		if(clientX < window.innerWidth & clientY < window.innerHeight & clientY > 0){
			var thisValue = _thisBar.getAttribute("data-value");
			if(thisValue){
				var groupElement = indexedWrap.querySelector('[data-group="' + thisValue + '"]');
				if(thisValue != 'search' & thisValue != '*'){
					document.querySelector(".aui-indexed-toast").textContent = thisValue;
					document.querySelector(".aui-indexed-toast").classList.add("active");
					document.querySelector(".aui-indexed-toast").style.top = clientY+'px';
				}
				if (groupElement) {
					indexedWrap.scrollTop = groupElement.offsetTop;
				}
			}else{
				document.querySelector(".aui-indexed-toast").textContent = '';
				document.querySelector(".aui-indexed-toast").classList.remove("active");
			}
		}
	}
	var removeToast = function(event){
		bar.style.opacity = "0.6";
		document.querySelector(".aui-indexed-toast").classList.remove("active");
		bar.classList.remove('active');
	}
	window.auiIndexedList = IndexedList;
})(window);
