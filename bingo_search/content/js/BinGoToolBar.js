
	/**
	 * Controls the browser overlay for the Hello World extension.
	 */
	XULBinGoMultiSearchTabChrome.BrowserButtonContents= {
	  /**
	   * Says 'Hello' to the user.
	   */
		openAndReuseOneTabPerAttribute : function(aEvent) {
		    var url ="http://www.linknextu.com/";
		  
			var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);
			var browserEnumerator = wm.getEnumerator("navigator:browser");
			var found = false;
			while (!found && browserEnumerator.hasMoreElements()) {
				var browserWin = browserEnumerator.getNext();
				var tabbrowser = browserWin.gBrowser;
				var numTabs = tabbrowser.browsers.length;
				for (var index = 0; index < numTabs; index++) {
					var currentBrowser = tabbrowser.getBrowserAtIndex(index);
					if (url == currentBrowser.currentURI.spec) {
						tabbrowser.selectedTab = tabbrowser.tabContainer.childNodes[index];
						browserInstance.focus();
						found = true;
						break;
					}
				}
			}
			if (!found) {
				var recentWindow = wm.getMostRecentWindow("navigator:browser");
				if (recentWindow) {
					recentWindow.delayedOpenTab(url, null, null, null, null);
				}
				else {
					window.open(url);
				}
			}
	  	},
};
