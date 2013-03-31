XULBinGoMultiSearchTabChrome.BrowserOverlay={
	TempGoogleWords: null,	
	LoadAmazonTabs : function(doc) {
		try{
			if(doc.getElementById("twotabsearchtextbox")){
				var TempWords=doc.getElementById("twotabsearchtextbox").value;
				if(!TempWords){
					if(!this.TempGoogleWords){
						if(this.TempGoogleWords!=TempWords){
							this.TempGoogleWords=TempWords;
							this.LoadTabs(doc);
							return;
						}
					}	
				}
				if(this.TempGoogleWords!=TempWords){
					this.TempGoogleWords=TempWords;
					this.LoadTabs(doc);
				} else{
					var elm = doc.getElementById('linknextu_multiContents');
					if(elm){
					}else {
						this.LoadTabs(doc);
					}
				}
			} 
		}catch(e){}

	},
	LoadGoogleTabs : function(doc) {
		try{
			if(doc.getElementById("gbqfq")){
				var TempWords=doc.getElementById("gbqfq").value;
				if(!TempWords){
					if(!this.TempGoogleWords){
						if(this.TempGoogleWords!=TempWords){
							this.TempGoogleWords=TempWords;
							this.LoadTabs(doc);
							return;
						}
					}	
				}
				if(this.TempGoogleWords!=TempWords){
					this.TempGoogleWords=TempWords;
					this.LoadTabs(doc);
				} else{
					var elm = doc.getElementById('linknextu_multiContents');
					if(elm){
					}else {
						this.LoadTabs(doc);
					}
				}
			} 
		}catch(e){}

	},
	
	LoadTabs:function(doc){
		var elm = doc.getElementById('linknextu_multiContents');
		if(elm){
			elm.parentNode.removeChild(elm);
		}
		var keyword=this.KeyWordsJapan(doc);
		if(!keyword){return;}
		var LinkNextUDiv= doc.createElement("div");
		LinkNextUDiv.id='linknextu_multiContents';

		
		var stringsBundle = document.getElementById("linknextu-string-bundle");
 		var LocalLan = stringsBundle.getString('lan');


 		if(LocalLan=="jp"){
			this.AddJapanSearchAssist(doc, LinkNextUDiv,keyword);
			this.AddBINGOSearchDIV(doc,LinkNextUDiv);
			
		} else if(LocalLan=="en"){
			XULBinGoMultiSearchTabChrome.USLanguagePack.AddUSSearchAssist(doc,LinkNextUDiv,keyword);
			XULBinGoMultiSearchTabChrome.USLanguagePack.AddBINGOSearchDIV(doc,LinkNextUDiv);
		}else if(LocalLan=="cn"||LocalLan=="tw"){
			XULBinGoMultiSearchTabChrome.CNLanguagePack.AddUSSearchAssist(doc,LinkNextUDiv,keyword);
			XULBinGoMultiSearchTabChrome.CNLanguagePack.AddBINGOSearchDIV(doc,LinkNextUDiv);
		}


		this.LoadCSSStyle(doc);
	},
	
	LoadCSSStyle:function(doc){
		
		var css=doc.createElement("link");
		css.type = 'text/css';
		css.rel = 'stylesheet';
		css.href = 'http://www.linknextu.com/css/linknextu.css';
		doc.head.appendChild(css);
	},
	
	AddBINGOSearchDIV:function(doc,LinkNextUDiv){
		var elem;
		if(doc.domain=="www.google.co.jp"){
			elem=doc.getElementById('res');
			if(elem){
				var parentDiv = elem.parentNode;
			 
				// 新しい要素をDOMに sp2 の前に追加します。
				parentDiv.insertBefore(LinkNextUDiv, elem);
			} 
			return;
		}
		if(doc.domain=="search.yahoo.co.jp"){
			if(!elem){
				elem=doc.getElementById('WS2m');
				if(elem){
					var parentDiv = elem.parentNode;
					parentDiv.insertBefore(LinkNextUDiv, elem);
				} 
			}
			return;
		}
		//Bing
		if(doc.domain=="www.bing.com"){
			if(!elem){
				elem=doc.getElementById('results');
				if(elem){
					var parentDiv = elem.parentNode;
					parentDiv.insertBefore(LinkNextUDiv, elem);
				} 
			}
			return;
		}
		/*
		if(doc.domain=="auctions.yahoo.co.jp"||doc.domain=="shopping.yahoo.co.jp"){
			if(!elem){
				elem=doc.getElementById('Ck');
				if(elem){
					var parentDiv = elem.parentNode;
					parentDiv.insertBefore(LinkNextUDiv, elem);
				} 
			}
			return;
		}
		*/
		//Youtube
		if(doc.domain=="www.youtube.com"){
			if(!elem){
				elem=doc.getElementById('filter-dropdown');
				if(elem){
					var parentDiv = elem.parentNode;
					parentDiv.insertBefore(LinkNextUDiv, elem);
				} 
			}
			return;
		}
		//Cookpad
		/*
		if(doc.domain=="cookpad.com"){
			if(!elem){
				elem=doc.getElementById('contents');
				if(elem){
					var parentDiv = elem.parentNode;
					parentDiv.insertBefore(LinkNextUDiv, elem);
				} 
			}
			return;
		}
		*/
		//Amazon]
		if(doc.domain=="www.amazon.co.jp"){
			if(!elem){
				elem=doc.getElementById('atfResults');
				if(elem){
					var parentDiv = elem.parentNode;
					parentDiv.insertBefore(LinkNextUDiv, elem);
				} 
			}
			return;
		}
		
	},
	
	AddJapanSearchAssist:function(doc,LinkNextUDiv,keyword){
		
		/*
		var TempSpan= doc.createElement("span");
		TempSpan.className="divider";
		var DividerTxt = doc.createTextNode('/');
		TempSpan.appendChild(DividerTxt);
		*/
		var BingoUL =doc.createElement("ul");
		BingoUL.className="bs-docs-tooltip-examples";
		/*Goolge検索*/
		var TempLI= doc.createElement("li");
		var GoogleLink= doc.createElement("a");
		GoogleLink.setAttribute('href', 'https://www.google.co.jp/search?hl=ja&q='+keyword);
		var TempTxt = doc.createTextNode('Google　検索');
		GoogleLink.appendChild(TempTxt);
		//GoogleLink.appendChild(DividerTxt);
		
		TempLI.appendChild(GoogleLink);
		//TempLI.appendChild(TempSpan);
		BingoUL.appendChild(TempLI);
		/*Yahoo 検索*/
		TempLI= doc.createElement("li");
		var YahooLink= doc.createElement("a");
		YahooLink.setAttribute('href', 'http://search.yahoo.co.jp/search?fr=www.linknextu.com&p='+keyword);
		TempTxt = doc.createTextNode('Yahoo!　検索');
		YahooLink.appendChild(TempTxt);
		TempLI.appendChild(YahooLink);
		
		//TempLI.appendChild(TempSpan);
		BingoUL.appendChild(TempLI);
		/*Bing 検索*/
		TempLI= doc.createElement("li");
		var BingLink= doc.createElement("a");
		BingLink.setAttribute('href', 'http://www.bing.com/search?q='+keyword);
		TempTxt = doc.createTextNode('BING!　検索');
		BingLink.appendChild(TempTxt);
		TempLI.appendChild(BingLink);
		//TempLI.appendChild(TempSpan);
		BingoUL.appendChild(TempLI);
		/*Bing 検索*/
		TempLI= doc.createElement("li");
		var YouTuBeLink= doc.createElement("a");
		YouTuBeLink.setAttribute('href', 'http://www.youtube.com/results?search_query='+keyword);
		TempTxt = doc.createTextNode('YouTube');
		YouTuBeLink.appendChild(TempTxt);
		TempLI.appendChild(YouTuBeLink);
		//TempLI.appendChild(TempSpan);
		BingoUL.appendChild(TempLI);
		/*Amazon 検索*/
		TempLI= doc.createElement("li");
		var AmazonLink= doc.createElement("a");
		AmazonLink.setAttribute('href', 'http://www.amazon.co.jp/s/ref=nb_sb_noss_1?tag=linknextucom-22&url=http://www.linknextu.com&field-keywords='+keyword);
		TempTxt = doc.createTextNode('Amazon');
		AmazonLink.appendChild(TempTxt);
		TempLI.appendChild(AmazonLink);
		//TempLI.appendChild(TempSpan);
		BingoUL.appendChild(TempLI);
		/*Yahoo!オークション*/
		/*
		TempLI= doc.createElement("li");
		var YShopLink= doc.createElement("a");
		YShopLink.setAttribute('href', 'http://auctions.search.yahoo.co.jp/search?p='+keyword);
		TempTxt = doc.createTextNode('Yahoo!オークション');
		YShopLink.appendChild(TempTxt);
		TempLI.appendChild(YShopLink);
		TempLI.appendChild(TempSpan);
		BingoUL.appendChild(TempLI);
		*/
		/*CookPad*/
		/*
		TempLI= doc.createElement("li");
		var CookpadLink= doc.createElement("a");
		CookpadLink.setAttribute('href', 'http://cookpad.com/search/'+keyword);
		TempTxt = doc.createTextNode('クックパッド');
		CookpadLink.appendChild(TempTxt);
		TempLI.appendChild(CookpadLink);
		//TempLI.appendChild(TempSpan);
		BingoUL.appendChild(TempLI);
		*/
		/*CookPad*/
		TempLI= doc.createElement("li");
		var WikiLink= doc.createElement("a");
		WikiLink.setAttribute('href', 'http://ja.wikipedia.org/wiki/'+keyword);
		TempTxt = doc.createTextNode('Wiki');
		WikiLink.appendChild(TempTxt);
		TempLI.appendChild(WikiLink);
		//TempLI.appendChild(TempSpan);
		BingoUL.appendChild(TempLI);
		LinkNextUDiv.appendChild(BingoUL);
	},
	
	KeyWordsJapan:function(doc){
		
		if(doc.domain=="www.google.co.jp"){
			if(doc.getElementById("gbqfq")){
				return doc.getElementById("gbqfq").value;
			}
			return null;
		}
		if(doc.domain=="search.yahoo.co.jp"){
			if(doc.getElementById("yschsp")){
				return doc.getElementById("yschsp").value;
			}
			return null;
		}
		//Bing
		if(doc.domain=="www.bing.com"){
			if(doc.getElementById("sb_form_q")){
				return doc.getElementById("sb_form_q").value;
			}
			return null;
		}
		//Yahoo Shoping/Auction
		/*
		if(doc.domain=="auctions.yahoo.co.jp"||doc.domain=="shopping.yahoo.co.jp"){
			if(doc.getElementById("AucSearchTxt")){
				return doc.getElementById("AucSearchTxt").value;
			}
			if(doc.getElementById("YshHdAssistWord")){
				return doc.getElementById("YshHdAssistWord").value;
			}
			return null;
		}
		*/
		//Youtube
		if(doc.domain=="www.youtube.com"){
			
			if(doc.getElementById("masthead-search-term")){
				return doc.getElementById("masthead-search-term").value;
			}
			return null;
		}
		//Cookpad
		if(doc.domain=="cookpad.com"){
			
			if(doc.getElementById("keyword")){
				return doc.getElementById("keyword").value;
			}
			return null;
		}
		//Amazon]
		if(doc.domain=="www.amazon.co.jp"){
			
			if(doc.getElementById("twotabsearchtextbox")){
				return doc.getElementById("twotabsearchtextbox").value;
			}
			return null;
		}
		
		return null;
	},
};