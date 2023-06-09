jQuery(document).ready(function(){new jBox.plugin("Image",{src:"href",gallery:"data-jbox-image",imageLabel:"title",imageFade:360,imageSize:"contain",imageCounter:!1,imageCounterSeparator:"/",target:window,attach:"[data-jbox-image]",fixed:!0,blockScroll:!0,closeOnEsc:!0,closeOnClick:"button",closeButton:!0,overlay:!0,animation:"zoomIn",preventDefault:!0,width:"100%",height:"100%",downloadButton:!1,downloadButtonText:null,downloadButtonUrl:null,adjustDistance:{top:40,right:5,bottom:40,left:5},_onInit:function(){this.images=this.currentImage={},this.imageZIndex=1,this.attachedElements&&jQuery.each(this.attachedElements,function(e,t){if(!(t=jQuery(t)).data("jBox-image-gallery")){var i=t.attr(this.options.gallery)||"default";!this.images[i]&&(this.images[i]=[]),this.images[i].push({src:t.attr(this.options.src),label:t.attr(this.options.imageLabel)||"",downloadUrl:this.options.downloadButtonUrl&&t.attr(this.options.downloadButtonUrl)?t.attr(this.options.downloadButtonUrl):null}),"title"==this.options.imageLabel&&t.removeAttr("title"),t.data("jBox-image-gallery",i),t.data("jBox-image-id",this.images[i].length-1)}}.bind(this));var o=function(e,t,i,a,o){if(!jQuery("#jBox-image-"+e+"-"+t).length){var n=jQuery("<div/>",{id:"jBox-image-"+e+"-"+t,class:"jBox-image-container"+(o?" jBox-image-not-found":"")+(a||i?"":" jBox-image-"+e+"-current")}).css({backgroundImage:o?"":'url("'+this.images[e][t].src+'")',backgroundSize:this.options.imageSize,opacity:a?1:0,zIndex:i?0:this.imageZIndex++}).appendTo(this.content);jQuery("<div/>",{id:"jBox-image-label-"+e+"-"+t,class:"jBox-image-label"+(a?" active":"")}).html(this.images[e][t].label).click(function(){$(this).toggleClass("expanded")}).appendTo(this.imageLabel),!a&&!i&&n.animate({opacity:1},this.options.imageFade)}}.bind(this);this.downloadImage=function(e){var t=document.createElement("a");t.href=e,t.setAttribute("download",e.substring(e.lastIndexOf("/")+1)),document.body.appendChild(t),t.click()};var n=function(e,t){jQuery(".jBox-image-label.active").removeClass("active expanded"),jQuery("#jBox-image-label-"+e+"-"+t).addClass("active")};this.showImage=function(e){if("open"!=e){var t=this.currentImage.gallery;i=(i=this.currentImage.id+(1*("prev"==e)?-1:1))>this.images[t].length-1?0:i<0?this.images[t].length-1:i}else{t=this.source.data("jBox-image-gallery");var i=this.source.data("jBox-image-id");jQuery(".jBox-image-pointer-prev, .jBox-image-pointer-next").css({display:1<this.images[t].length?"block":"none"})}if(jQuery(".jBox-image-"+t+"-current").length&&jQuery(".jBox-image-"+t+"-current").removeClass("jBox-image-"+t+"-current").animate({opacity:0},"open"==e?0:this.options.imageFade),this.currentImage={gallery:t,id:i},jQuery("#jBox-image-"+t+"-"+i).length?(jQuery("#jBox-image-"+t+"-"+i).addClass("jBox-image-"+t+"-current").css({zIndex:this.imageZIndex++,opacity:0}).animate({opacity:1},"open"==e?0:this.options.imageFade),n(t,i)):(this.wrapper.addClass("jBox-image-loading"),jQuery('<img src="'+this.images[t][i].src+'"/>').each(function(){var e=new Image;e.onload=function(){o(t,i,!1),n(t,i),this.wrapper.removeClass("jBox-image-loading")}.bind(this),e.onerror=function(){o(t,i,!1,null,!0),n(t,i),this.wrapper.removeClass("jBox-image-loading")}.bind(this),e.src=this.images[t][i].src}.bind(this))),this.imageCounter&&(1<this.images[t].length?(this.wrapper.addClass("jBox-image-has-counter"),this.imageCounter.find(".jBox-image-counter-all").html(this.images[t].length),this.imageCounter.find(".jBox-image-counter-current").html(i+1)):this.wrapper.removeClass("jBox-image-has-counter")),this.images[t].length-1){var a=i+1;a=a>this.images[t].length-1?0:a<0?this.images[t].length-1:a,!jQuery("#jBox-image-"+t+"-"+a).length&&jQuery('<img src="'+this.images[t][a].src+'"/>').each(function(){var e=new Image;e.onload=function(){o(t,a,!0)}.bind(this),e.onerror=function(){o(t,a,!0,null,!0)}.bind(this),e.src=this.images[t][a].src}.bind(this))}}},_onCreated:function(){this.imageLabel=jQuery("<div/>",{class:"jBox-image-label-container"}).appendTo(this.wrapper),this.imageLabel.append(jQuery("<div/>",{class:"jBox-image-pointer-prev",click:function(){this.showImage("prev")}.bind(this)})).append(jQuery("<div/>",{class:"jBox-image-pointer-next",click:function(){this.showImage("next")}.bind(this)})),this.options.downloadButton&&(this.downloadButton=jQuery("<div/>",{class:"jBox-image-download-button-wrapper"}).appendTo(this.wrapper).append(this.options.downloadButtonText?jQuery("<div/>",{class:"jBox-image-download-button-text"}).html(this.options.downloadButtonText):null).append(jQuery("<div/>",{class:"jBox-image-download-button-icon"})).on("click touchdown",function(){if(this.images[this.currentImage.gallery][this.currentImage.id].downloadUrl)var e=this.images[this.currentImage.gallery][this.currentImage.id].downloadUrl;else e=this.wrapper.find(".jBox-image-default-current")[0].style.backgroundImage.slice(4,-1).replace(/["']/g,"");this.downloadImage(e)}.bind(this))),this.options.imageCounter&&(this.imageCounter=jQuery("<div/>",{class:"jBox-image-counter-container"}).appendTo(this.wrapper),this.imageCounter.append(jQuery("<span/>",{class:"jBox-image-counter-current"})).append(jQuery("<span/>").html(this.options.imageCounterSeparator)).append(jQuery("<span/>",{class:"jBox-image-counter-all"})))},_onOpen:function(){jQuery(document).on("keyup.jBox-Image-"+this.id,function(e){37==e.keyCode&&this.showImage("prev"),39==e.keyCode&&this.showImage("next")}.bind(this)),this.showImage("open")},_onClose:function(){jQuery(document).off("keyup.jBox-Image-"+this.id)},_onCloseComplete:function(){this.wrapper.find(".jBox-image-container").css("opacity",0)}})});