XULBinGoMultiSearchTabChrome.InitMultiSearch = {
	localGoogleLocal: null,
	eventObject: null,
	localAmalzon:null,
	showTabs: function() {
		var self = this;
		var stringsBundle = document.getElementById("linknextu-string-bundle");
 		var LocalLan = stringsBundle.getString('lan');
 		clearInterval(self.localGoogleLocal);
		clearInterval(self.localAmalzon);
 		if(LocalLan=="jp"){
		
			try {
				
				if (self.eventObject.domain=="www.google.co.jp" || self.eventObject.domain=="www.google.com") {
					self.localGoogleLocal=setInterval(function() {
						XULBinGoMultiSearchTabChrome.BrowserOverlay.LoadGoogleTabs(self.eventObject); 
					}, 1000); 
				}else if (self.eventObject.domain == "www.amazon.co.jp"){
					self.localAmalzon =setInterval(function() {
						XULBinGoMultiSearchTabChrome.BrowserOverlay.LoadAmazonTabs(self.eventObject); 
					}, 1000); 
				}else {
					if(self.eventObject.domain == "search.yahoo.co.jp"||self.eventObject.domain == "www.bing.com"||
							self.eventObject.domain == "auctions.yahoo.co.jp"||self.eventObject.domain == "shopping.yahoo.co.jp"||self.eventObject.domain == "www.youtube.com"||self.eventObject.domain == "cookpad.com"){
							XULBinGoMultiSearchTabChrome.BrowserOverlay.LoadTabs(self.eventObject);
					
					}
					return;
				}		
			} catch(e) {}
		} else if(LocalLan=="en"){
			try {
				if ( self.eventObject.domain=="www.google.com") {
					self.localGoogleLocal=setInterval(function() {
						XULBinGoMultiSearchTabChrome.BrowserOverlay.LoadGoogleTabs(self.eventObject); 
					}, 1000); 
				}else if (self.eventObject.domain == "www.amazon.com"){
					self.localAmalzon =setInterval(function() {
						XULBinGoMultiSearchTabChrome.BrowserOverlay.LoadAmazonTabs(self.eventObject); 
					}, 1000); 
				}else {
					if(self.eventObject.domain == "search.yahoo.com"||self.eventObject.domain == "www.bing.com"||self.eventObject.domain == "www.youtube.com"){
							XULBinGoMultiSearchTabChrome.BrowserOverlay.LoadTabs(self.eventObject);
					
					}
					return;
				}		
			} catch(e) {}
		}else if(LocalLan=="cn"||LocalLan=="tw"){
			try {
				if ( self.eventObject.domain=="www.google.com.hk") {
					self.localGoogleLocal=setInterval(function() {
						XULBinGoMultiSearchTabChrome.BrowserOverlay.LoadGoogleTabs(self.eventObject); 
					}, 1000); 
				}else if (self.eventObject.domain == "www.amazon.cn"){
					self.localAmalzon =setInterval(function() {
						XULBinGoMultiSearchTabChrome.BrowserOverlay.LoadAmazonTabs(self.eventObject); 
					}, 1000); 
				}else {
					if(self.eventObject.domain == "www.baidu.com"||self.eventObject.domain == "www.bing.com"||self.eventObject.domain == "www.soku.com"||self.eventObject.domain=="www.taobao.com"){
							XULBinGoMultiSearchTabChrome.BrowserOverlay.LoadTabs(self.eventObject);
					
					}
					return;
				}		
			} catch(e) {}
		}
	}
};

XULBinGoMultiSearchTabChrome.BrowserFirstRun={
	

	SavePageAddToolbarItem:function () {
				try {
				
        			//var firstrun = Services.prefs.getBoolPref("extensions.linkfilter@linknextu.com.firstrun");
 
					//var curVersion = "0.0.0";
 
					///if (firstrun) {
  						//Services.prefs.setBoolPref("extensions.linkfilter@linknextu.com.firstrun", false);
  						//Services.prefs.setCharPref("extensions.linkfilter@linknextu.com.installedVersion", curVersion);
  						/* Code related to firstrun */
					//}
					if (Application.extensions)
    						this.firstRun(Application.extensions);
					else
    						Application.getExtensions(this.firstRun);
  					
		
				} catch(e) { }
			},

			firstrun:function(extensions){
				let extension = extensions.get("bingo@linknextu.com");
 				if(extension){
    				if (extension.firstRun) {
						var id="bingoassist-toolbarbutton";
						var toolbarId="nav-bar";
						var afterId="search-container";
						if (!document.getElementById(id)) {
       						var toolbar = document.getElementById(toolbarId);
							var before = toolbar.firstChild;
       						if (afterId) {
           						let elem = before = document.getElementById(afterId);
            					if (elem && elem.parentNode == toolbar) before = elem.nextElementSibling;
        					}
							toolbar.insertItem(id, before);
        					toolbar.setAttribute("currentset", toolbar.currentSet);
        					document.persist(toolbar.id, "currentset");
						}
					}
				}
			}
		
};

(function() {
	window.addEventListener("load", function () {
	XULBinGoMultiSearchTabChrome.BrowserFirstRun.SavePageAddToolbarItem();
	gBrowser.addEventListener("load", function(event) {
		if (event.originalTarget instanceof HTMLDocument &&
					!event.originalTarget.defaultView.frameElement) {

			XULBinGoMultiSearchTabChrome.InitMultiSearch.eventObject = event.originalTarget;
			XULBinGoMultiSearchTabChrome.InitMultiSearch.showTabs();
		
		}
	}, true);
}, false);
})();