	XULBinGoMultiSearchTabChrome.CNLanguagePack= {
			
			AddBINGOSearchDIV:function(doc,LinkNextUDiv){
				var elem;
				if(doc.domain=="www.google.com.hk"){
					elem=doc.getElementById('res');
					if(elem){
						var parentDiv = elem.parentNode;
						parentDiv.insertBefore(LinkNextUDiv, elem);
					} 
					return;
				}
				if(doc.domain=="www.baidu.com"){
					if(!elem){
						elem=doc.getElementById('container');
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
				
				//Youtube
				if(doc.domain=="www.soku.com"){
					if(!elem){
						elem=doc.getElementById('body');
						if(elem){
							var parentDiv = elem.parentNode;
							parentDiv.insertBefore(LinkNextUDiv, elem);
						} 
					}
					return;
				}
		
		
				//Amazon
				if(doc.domain=="www.taobao.com"){
					if(!elem){
						elem=doc.getElementById('w-main-wrap');
						if(elem){
							var parentDiv = elem.parentNode;
							parentDiv.insertBefore(LinkNextUDiv, elem);
						} 
					}
					return;
				}
			},
			
			AddUSSearchAssist:function(doc,LinkNextUDiv,keyword){
				var BingoUL =doc.createElement("ul");
				BingoUL.className="bs-docs-tooltip-examples";
				/*Goolge検索*/
				var TempLI= doc.createElement("li");
				var GoogleLink= doc.createElement("a");
				GoogleLink.setAttribute('href', 'https://www.google.com.hk/search?q='+keyword);
				var TempTxt = doc.createTextNode('Google');
				GoogleLink.appendChild(TempTxt);
				//GoogleLink.appendChild(DividerTxt);
		
				TempLI.appendChild(GoogleLink);
				//TempLI.appendChild(TempSpan);
				BingoUL.appendChild(TempLI);
				/*Yahoo 検索*/
				TempLI= doc.createElement("li");
				var YahooLink= doc.createElement("a");
				YahooLink.setAttribute('href', 'http://www.baidu.com/s?wd='+keyword);
				TempTxt = doc.createTextNode('百度');
				YahooLink.appendChild(TempTxt);
				TempLI.appendChild(YahooLink);
		
				//TempLI.appendChild(TempSpan);
				BingoUL.appendChild(TempLI);
				/*Bing 検索*/
				TempLI= doc.createElement("li");
				var BingLink= doc.createElement("a");
				BingLink.setAttribute('href', 'http://www.bing.com/search?q='+keyword);
				TempTxt = doc.createTextNode('BING!');
				BingLink.appendChild(TempTxt);
				TempLI.appendChild(BingLink);
				//TempLI.appendChild(TempSpan);
				BingoUL.appendChild(TempLI);
				/*Bing 検索*/
				TempLI= doc.createElement("li");
				var YouTuBeLink= doc.createElement("a");
				YouTuBeLink.setAttribute('href', 'http://www.soku.com/v?keyword='+keyword);
				TempTxt = doc.createTextNode('搜酷');
				YouTuBeLink.appendChild(TempTxt);
				TempLI.appendChild(YouTuBeLink);
				//TempLI.appendChild(TempSpan);
				BingoUL.appendChild(TempLI);
				/*Amazon 検索*/
				TempLI= doc.createElement("li");
				var AmazonLink= doc.createElement("a");
				AmazonLink.setAttribute('href', 'http://s.taobao.com/search?q='+keyword);
				TempTxt = doc.createTextNode('淘宝');
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
				WikiLink.setAttribute('href', 'http://en.wikipedia.org/wiki/'+keyword);
				TempTxt = doc.createTextNode('Wiki');
				WikiLink.appendChild(TempTxt);
				TempLI.appendChild(WikiLink);
				//TempLI.appendChild(TempSpan);
				BingoUL.appendChild(TempLI);
				LinkNextUDiv.appendChild(BingoUL);
	},
	
	KeyWordsUS:function(doc){
		
		if(doc.domain=="www.google.com"){
			if(doc.getElementById("gbqfq")){
				return doc.getElementById("gbqfq").value;
			}
			return null;
		}
		if(doc.domain=="www.baidu.com"){
			if(doc.getElementById("kw")){
				return doc.getElementById("kw").value;
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
		if(doc.domain=="www.soku.com"){
			
			if(doc.getElementById("headq")){
				return doc.getElementById("headq").value;
			}
			return null;
		}
		//Cookpad
		/*
		if(doc.domain=="cookpad.com"){
			
			if(doc.getElementById("keyword")){
				return doc.getElementById("keyword").value;
			}
			return null;
		}
		*/
		//Amazon]
		if(doc.domain=="www.taobao.com"){
			
			if(doc.getElementById("title")){
				return doc.getElementById("title").value;
			}
			return null;
		}
		
		return null;
	},
	}