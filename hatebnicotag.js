/*
   @author: con_mame
   @url: http://d.hatena.ne.jp/con_mame/
   @title: Hateb Nico Tag
   @description: Show Tags based on Hatena Bookmark
   @version: 0.1
*/


(function(){
	const ICON = "data:image/png;base64,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";

	const MINI_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdUlEQVQ4jWNgoBAwMjAwMLQu/fWfVI1nr7xlWNcuyciCLEAKuPHsEQMDAwMDE6k2owMWbIJr2yQwxIKrXmA1AK8LgqtewDViM5SgAcQArF6AAVy2Eu0CmBfweYNiL9A3DLBFJVYDcMU5NkAdL5y98haetukOAFKNJaOsiXscAAAAAElFTkSuQmCC";

	Array.prototype.contains = function(value){
	    for(var i in this){
	        if(this[i].toString() === value.toString()) return true;
	    }
	    return false;
	}

	function addHatebTags(tagData, doc){
		if(!!$("table#hatebnicotag", doc).get(0)) return;
		var bookmark = tagData.bookmarks;
		var tags = [];
		for(var i in bookmark){
			for(var j in bookmark[i].tags){
				var tag = bookmark[i].tags[j];
				if(!tags.contains(tag)) tags.push(tag)
			}
		}

		var td = $("<td>", doc).attr({width: "100%"});
		for(var l in tags){
			if(typeof tags[l] != "function"){
				var encodedTag = encodeURIComponent(tags[l]);
				var a = $("<a>", doc).html(tags[l]).attr({href: "http://b.hatena.ne.jp/t/" + encodedTag, target: "_blank", rel: "tag"});
				var ia = $("<a>", doc).attr({href: "http://b.hatena.ne.jp/t/" + encodedTag, target: "_blank", title: tags[l] + "とは"});
				var nobr = $("<nobr>", doc);
				nobr.append(a).append(ia.append($("<img>", doc).attr({src: MINI_ICON, alt: "？"}).addClass("txticon")));
				td.append(nobr).append("&nbsp;\n");
			}
		}
		var icon = $("<tr>", doc).append($("<td>", doc).append($("<img>", doc).attr({src: ICON})));
		var target;
		var width;
		if(!!$("div#WATCHHEADER", doc).get(0)){
			target = $("div#WATCHHEADER", doc);
			width = 984;
		}else{
			target = $("table.font12:eq(1)",doc);
			width = 672;
		}
		target.after($("<table>", doc).attr({id: "hatebnicotag", width: width, cellspacing: "0", cellpadding: "4", border: "0"}).addClass("font12").append(icon.append(td)));
	}

	var showHatebTags = function(doc){
		var watchUrl = doc.location.href;
		$.ajax({
			url: "http://b.hatena.ne.jp/entry/jsonlite/",
			data: {url: watchUrl},
			dataType: "json",
			cache: false,
			complete: function(){
				//console.log("Complete");
			},
			success: function(data, status){
				addHatebTags(data, doc);
			},
			error: function(){
				jetpack.notifications.show("Tag Get Error");
			}
		});
	}


	jetpack.future.import("jetpack.pageMods");
	var options ={};
	options.matches = ["http://www.nicovideo.jp/watch/*"];
	jetpack.pageMods.add(showHatebTags, options);
})();