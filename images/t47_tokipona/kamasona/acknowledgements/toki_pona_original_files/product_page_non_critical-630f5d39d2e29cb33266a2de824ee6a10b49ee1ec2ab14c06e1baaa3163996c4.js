var TeePublic=TeePublic||{};$.extend(!0,TeePublic,{EmailSubscribe:{init:function(){$(".jsSubscribe").on("submit",function(){if(!$(this).find(".jsSubscribeEmail").val().isValidEmail())return TeePublic.EmailSubscribe.showError(!0,"Email is invalid."),!1;TeePublic.EmailSubscribe.hideErrors()})},showError:function(e,t){$(".jsSubscribeErrors").html("<p>"+t+"</p>"),e&&TeePublic.EmailSubscribe.showErrors()},showErrors:function(){$(".jsSubscribeErrors").addClass("on")},hideErrors:function(){$(".jsSubscribeErrors").removeClass("on")}}}),function(e){var t=0,i=0,a=function(){return"materialize-modal-overlay-"+ ++i},n={init:function(i){var n={opacity:.5,inDuration:350,outDuration:250,ready:undefined,complete:undefined,dismissible:!0,startingTop:"4%",endingTop:"10%"};return i=e.extend(n,i),this.each(function(){var n=e(this),o=e(this).attr("id")||"#"+e(this).data("target"),s=function(){var a=n.data("overlay-id"),o=e("#"+a);n.removeClass("open"),e("body").css({overflow:"",width:""}),n.find(".mtrl-modal-close").off("click.close"),e(document).off("keyup.modal"+a),o.velocity({opacity:0},{duration:i.outDuration,queue:!1,ease:"easeOutQuart"});var s={duration:i.outDuration,queue:!1,ease:"easeOutCubic",complete:function(){e(this).css({display:"none"}),"function"==typeof i.complete&&i.complete.call(this,n),o.remove(),t--}};n.hasClass("bottom-sheet")?n.velocity({bottom:"-100%",opacity:0},s):n.hasClass("full-screen")||n.hasClass("top-sheet")?n.velocity({top:"-100%",opacity:0},s):n.hasClass("right-sheet")?n.velocity({right:"-100%",opacity:0},s):n.hasClass("left-sheet")?n.velocity({left:"-100%",opacity:0},s):n.velocity({top:i.startingTop,opacity:0,scaleX:.7},s)},c=function(o){var c=e("body"),l=c.innerWidth();if(c.css("overflow","hidden"),c.width(l),!n.hasClass("open")){var r=a(),d=e('<div class="mtrl-modal-overlay"></div>');lStack=++t,d.attr("id",r).css("z-index",1e3+2*lStack),n.data("overlay-id",r).css("z-index",1e3+2*lStack+1),n.addClass("open"),e("body").append(d),i.dismissible&&(d.click(function(){s()}),e(document).on("keyup.modal"+r,function(e){27===e.keyCode&&s()})),n.find(".mtrl-modal-close").on("click.close",function(){s()}),d.css({display:"block",opacity:0}),n.css({display:"block",opacity:0}),d.velocity({opacity:i.opacity},{duration:i.inDuration,queue:!1,ease:"easeOutCubic"}),n.data("associated-overlay",d[0]);var u={duration:i.inDuration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof i.ready&&i.ready.call(this,n,o)}};n.hasClass("bottom-sheet")?n.velocity({bottom:"0",opacity:1},u):n.hasClass("full-screen")||n.hasClass("top-sheet")?n.velocity({top:"0",opacity:1},u):n.hasClass("right-sheet")?n.velocity({right:"0",opacity:1},u):n.hasClass("left-sheet")?n.velocity({left:"0",opacity:1},u):(e.Velocity.hook(n,"scaleX",.7),n.css({top:i.startingTop}),n.velocity({top:i.endingTop,opacity:1,scaleX:"1"},u))}};e(document).off("click.modalTrigger",'a[href="#'+o+'"], [data-target="'+o+'"]'),e(this).off("openModal"),e(this).off("closeModal"),e(document).on("click.modalTrigger",'a[href="#'+o+'"], [data-target="'+o+'"]',function(t){i.startingTop=(e(this).offset().top-e(window).scrollTop())/1.15,c(e(this)),t.preventDefault()}),e(this).on("openModal",function(){e(this).attr("href")||e(this).data("target");c()}),e(this).on("closeModal",function(){s()})})},open:function(){e(this).trigger("openModal")},close:function(){e(this).trigger("closeModal")}};e.fn.modal=function(t){return n[t]?n[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist on jQuery.modal"):n.init.apply(this,arguments)},e(document).ready(function(){e(".mtrl-modal").modal()})}(jQuery);TeePublic=TeePublic||{};$.extend(!0,TeePublic,{ProductInfo:{Sizechart:{init_modal:function(e){e=e||".jsSizechartOpen",$(e).click(function(){var e=function(){$("#sizechart-modal").reveal({animation:"fade",dismissModalClass:"close-reveal-modal"})};$("#sizechart-modal .modal-content").load("/sizechart?modal=true",function(){var t=TeePublic.ProductHelper.collectSelections("form.jsConfigOptions",TeePublic.ProductOptions.hierarchy,!1);TeePublic.ProductInfo.Sizechart.init(t),e()})})},init:function(e){var t=$("#sizechart");$(".subnavs > div > .male, .subnavs > div > .female",t).each(function(){$(this).children().first().click()}),$(".toggle-display").click(function(){$(".sizechart-toggle").toggle()}),$(".sizechart-nav a",t).click(function(){$(".sizechart-nav a").removeClass("selected"),$(this).addClass("selected");var e=$(this).data("canvas");$("#sizechart .charts > div").hide(),$("#sizechart .subnavs > div").hide(),$("#sizechart ."+e).show()}),$(".metric",t).click(function(){$("#sizechart .metric").hide(),$("#sizechart .imperial").show()}),$(".imperial",t).click(function(){$("#sizechart .imperial").hide(),$("#sizechart .metric").show()}),$(".male_or_female > div",t).click(function(){var e=$(this).data("gender");$("#sizechart .male_or_female > div").removeClass("selected"),$(this).addClass("selected"),$("#sizechart .male").hide(),$("#sizechart .female").hide(),$("#sizechart ."+e).show()}),$(".subnavs a",t).click(function(){var e=$(this).data("action");$(".subnavs a."+e).each(function(){var e=$(this);$(this).parent().find("a").removeClass("selected"),e.addClass("selected")}),$(".charts ."+e).each(function(){var e=$(this);$(this).parent().children().hide(),e.show()})}),TeePublic.ProductInfo.Sizechart.default_options(e),$("#style-options").change(function(){var e=$("#garment-canvas").data("canvas")||"T-Shirt";if("T-Shirt"==e)$(".sizechart-nav a.tees").click(),"Tri-Blend T-Shirt (Extra Soft)"==(t=$("select#style_id option:selected").text())?$(".male a.tri").click():"V-Neck"==t?$(".male a.vee").click():"Missy Scoop Neck T-Shirt"==t?($(".mof_female").click(),$(".female a.scoop-neck").click()):"Dolman Triblend T-Shirt (Extra Soft)"==t?($(".mof_female").click(),$(".female a.dolman").click()):$(".male a.regular").click();else if("Kids"==e){$(".sizechart-nav a.kids").click(),"Juvenile (Ages 4-7)"==(t=$("select#style_id option:selected").text())?$(".male a.kids-juvenile").click():"Youth"==t?$(".male a.kids-youth").click():"Infant Snap"==t?$(".male a.kids-infant").click():$(".male a.kids-toddler").click()}else if("Long Sleeve T-Shirt"==e){$(".sizechart-nav a.longsleeve").click(),"Premium Long Sleeve Tee"==(t=$("select#style_id option:selected").text())?$(".male a.longsleeve-premium").click():"Scoop Neck Triblend (Extra Soft)"==t?($(".mof_female").click(),$(".female a.longsleeve-scoop").click()):$(".male a.longsleeve-regular").click()}else if("Tank"==e){$(".sizechart-nav a.tanks").click(),"Triblend (Extra Soft)"==(t=$("select#style_id option:selected").text())?$(".male a.tank-triblend").click():"Racerback (Female)"==t?($(".mof_female").click(),$(".female a.tank-racerback").click()):"Muscle"==t?($(".mof_female").click(),$(".female a.tank-muscle").click()):$(".male a.tank-regular").click()}else if("Crewneck"==e){$(".sizechart-nav a.crewnecks").click(),"Lightweight Crewneck Sweatshirt"==(t=$("select#style_id option:selected").text())?$(".male a.crewneck-lightweight").click():$(".male a.crewneck-regular").click()}else if("Hoodie"==e){var t;$(".sizechart-nav a.hoodies").click(),"Lightweight Hoodie"==(t=$("select#style_id option:selected").text())?$(".male a.hoodie-lightweight").click():"Lightweight Zip Hoodie"==t?$(".male a.hoodie-lightweight-zip").click():"Classic Zip Hoodie"==t?$(".male a.hoodie-zip").click():$(".male a.hoodie-regular").click()}else $(".sizechart-nav a.tees").click(),$(".subnavs a.regular").click()})},default_options:function(e){if($("#sizechart .metric").hide(),$("#sizechart .imperial").show(),e){var t=parseInt(e.gender),i=parseInt(e.style);t?$(".male_or_female div").each(function(){var e=$(this),i=e.data("genderid");t===i&&e.click()}):$(".mof_male").click(),$(".sizechart-nav a").each(function(){var e=$(this),t=$(".jsSizeChartCanvasId").text();(t=parseInt(t))===e.data("canvasid")&&e.click()}),$(".subnavs a").each(function(){var e=$(this),t=e.data("attrid");i===t&&e.click()})}else $(".mof_male").click(),$(".sizechart-nav a.tees").click(),$(".subnavs a.regular").click()}},Garment:{init_modal:function(){$(".jsGarmentInfoModalShow").click(function(){var e=$(this).data("canvas"),t=$("#type_id").val()||$("#style_id").val()||$("#print_type_id").val(),i=function(){$("#garment-modal").reveal({animation:"fade",dismissModalClass:"close-reveal-modal"})};$("#garment-modal .modal-content").load("/garment?canvas_type="+encodeURI(e)+"&magic_id="+encodeURI(t),function(){TeePublic.ProductInfo.Garment.init(),i()})})},init:function(){$(document).on("click",".spec-nav a",function(){$("#garment-modal .spec-nav a").removeClass("selected"),$(this).addClass("selected");var e=$(this).data("action");$("#garment-modal img").hide(),$("#garment-modal img."+e).show()})}},CanvasSizeChart:{init_modal:function(){$(".jsSizeChartOpen").click(function(){var e=$(this).data("canvas"),t={Pillow:"https://s3.amazonaws.com/teepublicuploadsproduction/sizechart/charts/homegoods-pillows.png",Tote:"https://s3.amazonaws.com/teepublicuploadsproduction/sizechart/charts/homegoods-totes.png"},i=function(){$(".jsSizeChartCanvasModal").reveal({animation:"fade",dismissModalClass:"close-reveal-modal"})};TeePublic.ProductInfo.CanvasSizeChart.init(e,t),i()})},init:function(e,t){"Pillow"===e?$(".jsSizeChartCanvasModal").addClass("sizechart-canvas-modal__pillow"):"Tote"===e&&$(".jsSizeChartCanvasModal").addClass("sizechart-canvas-modal__tote"),$(".jsSizeChartCanvasModalContent img").attr("src",t[e])}}}});TeePublic=TeePublic||{};$.extend(!0,TeePublic,{Sizer:function(){function e(){var e=$("."+z);u(e),S(),e.on("click","."+_,function(){d(e),h(e)}),e.on("click",".jsSizerConfigBtns .btn",function(){var t=$(this),i=t.data("config");t.addClass("on").siblings().removeClass("on"),S(i),r(e)&&m(e,n(t))}),e.on("click","."+j,function(){p(e)})}function t(){b&&b.data("glide_api").destroy()}function i(){function e(e){f(e.index-1)}function t(e){f(e.index-1)}var i=v()+1||2;b=$("."+C).glide({autoplay:!1,dragDistance:1,touchDistance:1,height:"auto",paddings:"21%",startAt:i,type:"slider",afterTransition:t,afterInit:e})}function a(e){return e.data("config").split("-")}function n(e){var t={},i=a(e);return t[i[0]]=i[1],t}function o(e){return e.data("canvas")}function s(e){return e.find(".jsSizerConfigBtns .btn")}function c(){var e,t=$("."+z);return(e=r(t))?JSON.parse(e):l(t)}function l(e){var t={},i=s(e);return t.canvas=o(e),i.each(function(e,i){var a,o=$(i);o.hasClass("on")&&(a=n(o),$.extend(!0,t,a))}),t}function r(e){return Cookies.get("sizerConfig"+o(e))}function d(e){e.removeClass("on"),$("."+C).addClass("on"),i()}function u(e){var t=s(e),i=r(e),a=[];if(i){for(key in i=JSON.parse(i))a.push(key+"-"+i[key]);a.forEach(function(e){var i=t.filter(function(){return $(this).data("config")==e});i.length&&i.addClass("on").siblings().removeClass("on")})}}function h(e,t){t=t||l(e),Cookies.set("sizerConfig"+o(e),t)}function p(e){$("."+j).removeClass("on"),e.addClass("on"),$("."+C).removeClass("on")}function f(e){var t=$(".jsSizerWrap li"),i=t.eq(e>0?e-1:e),a=t.eq(e+1);$(".jsSizerPrevText").html(i.data("label")),$(".jsSizerNextText").html(a.data("label"))}function m(e,t){var i=r(e);(i=i?JSON.parse(i):{}).canvas=o(e),$.extend(!0,i,t),h(e,i)}function v(){var e,t=c(),i=TeePublic.Sizer.modelData;for(k in i)if(i[k].height==t.height&&i[k].weight==t.weight&&i[k].gender==t.gender){e=i[k];break}if(e)return g(e.images),y(e.model),e["default"]}function g(e){var i=$(".jsSizerWrap"),a=document.createElement("ul");a.className="glide__track",t(),i.empty(),e.forEach(function(e){var t=document.createElement("li"),i=document.createElement("img");i.setAttribute("src",e.url),t.className="glide__slide",t.setAttribute("data-label",e.size),t.appendChild(i),a.appendChild(t)}),i.html(a)}function y(e){P.html(e.name+":"),w.html(e.height.feet+"'"+e.height.inches+'",'),E.html(e.weight.lbs+" lbs")}function S(e){if(!(e&&e.indexOf("gender-")<0)){var t=$(".jsSizerBtnWeight");e=$(".jsSizerConfigGenders .on").data("config").replace("gender-",""),t.html("male"==e?"Heavy":"Curvy")}}var b,C="jsSizerSlider",T="jsSizerSliderCtrl",z="jsSizerConfigs",_="jsViewSizerSlider",j="jsShowSizerConfigs",P=$(".jsSizerModelName"),w=$(".jsSizerModelHeight"),E=$(".jsSizerModelWeight");return{init:function(){var t=$("."+z);r(t)&&d(t),e()},initConfig:e,initSlider:i,destroySlider:t,modelData:null,sliderData:function(){return b.data("glide_api")},thumbClass:function(){return T},sizerClass:function(){return sizerClass}}}()});TeePublic=TeePublic||{};$.extend(!0,TeePublic,{Tiles:{init:function(e,t,i){this.initTags(),this.initTools(t,i),i&&this.initSort(e)},initTools:function(e,t){function i(e){Object.keys(e).forEach(function(i){var a=$(".jsDesignContainer[data-id="+i+"]");e[i].forEach(function(e){var n=a.find(".jsTile-"+e);"sort"==e&&t?$(".jsTilesDesigns").addClass("jsSortable"):"campaign"==e?n.attr("href","/new_campaign/"+i):"remove"==e&&n.data("toggle-action","remove").addClass("remove").html("- Merch Store"),n.show()})})}function a(){$(".jsDesignContainer").addClass("show-tags")}e?i(e):a()},initSort:function(e){function t(e){n(),$(".jsSortable").sortable({handle:".jsTile-sort"}),document.querySelectorAll(".jsTile-sort").forEach(t=>{t.addEventListener("keyup",n=>{i(t,n),a(e)})}),$(".jsSortable").sortable().bind("sortupdate",()=>{a(e)})}function i(e,t){if(e.classList.contains("jsTile-first"))return;const i=document.querySelector(".jsSortable"),a=e.closest(".jsDesignContainer"),n=36,o=s(a);if("ArrowLeft"===t.key&&o>0){const e=a.previousElementSibling;i.insertBefore(a,e)}if("ArrowRight"===t.key&&o<n){const e=a.nextElementSibling;i.insertBefore(a,e.nextElementSibling)}}function a(e){var t=[],i=window.location.href.split("?"),a=i[0]+"/quick_sort?";n(),$(".jsDesignContainer").each(function(e){t.push({id:$(this).data("id"),position:e+o()})}),i.length>1&&(a+=i[1]),$.ajax({type:"PUT",url:a,data:{orders:t,id:e}})}function n(){$(".jsDesignContainer").each(function(e){$(this).attr("data-pos",e+o())})}function o(){const e=document.querySelector(".page.current");return e?36*(parseInt(e.textContent,10)-1):0}function s(e){return parseInt(e.dataset.pos,10)-o()}e&&t(e)},initTags:function(){function e(e){e.closest(".jsDesignContainer").classList.toggle("tags-on")}function t(t){t.forEach(t=>{t.addEventListener("click",()=>e(t))})}t([...document.querySelectorAll(".jsTileTagClose"),...document.querySelectorAll(".jsTileTagsCtrl")])}}}),$(function(){$("html").on("click",".add_to_store, .jsTile-add, .jsMerchStoreCtrl",function(){var e=$(this).hasClass("jsMerchStoreCtrl"),t="",i="",a="",n=$(this),o=n.data("id"),s=n.data("toggle-action");$.ajax({type:"POST",url:"/store/toggle_store_design",data:{design_id:o,toggle_action:s},success:function(o){n.data("toggle-action",o.new_action),"add"==o.new_action?(t=e?"<span>+</span>Merch Store":"Merch Store",i=e?"btn--red":"add",a=e?"blue":"remove",aria_label="Add this design to my Merch Store"):"remove"==o.new_action&&(t=e?"<span>\u2013</span>Merch Store":"Merch Store",i=e?"blue":"remove",a=e?"btn--red":"add",aria_label="Remove design from my Merch Store"),n.removeClass(i).addClass(a).html(t).attr("aria-label",aria_label)}})}),$("html").on("click",".jsTile-homepage",function(){var e=$(this).data("path");$.ajax({type:"POST",url:e,success:function(){}})}),$("html").on("click",".jsFeatureOverlayClose",function(){$(this).closest(".jsFeatureOverlay").remove()})});TeePublic=TeePublic||{};$.extend(!0,TeePublic,{Checkout:{ActionsApplePay:function(){var e,t,i,a=function(t,a){return i=t,e=a,o()},n=function(){$("#checkout_ship_address1").val(),$(".jsPaymentOptions input:checked").val();$(".jsApplePayHidden").each(function(){$(this).removeClass("hidden")})},o=function(){ApplePaySession.canMakePaymentsWithActiveCard(i.merchantIdentifier).then(function(a){a,a&&(n(),$.post("/cart/applepay",{},function(a){var n={total:{label:"TeePublic.com",amount:a.total},lineItems:a.line_items,shippingMethods:a.shipping_methods,requiredShippingContactFields:["postalAddress","name","phone","email"],currencyCode:a.currencyCode};t=i.createPaymentRequest(n),e()}))})},s=function(){var e={},a={},n=new ApplePaySession(2,t);n.onvalidatemerchant=function(e){i.performValidation({validationURL:e.validationURL,displayName:"TeePublic.com"},function(e,t){if(e)return console.error("Error validating merchant:",e),void n.abort();n.completeMerchantValidation(t)})},n.onshippingcontactselected=function(t){e=t.shippingContact,$.post("/cart/applepay",{applepay_address:t.shippingContact},function(e){var t={type:"final",label:"Total",amount:e.total},i=e.shipping_methods,o=e.line_items;i.length>0&&(a=i[0]),n.completeShippingContactSelection(ApplePaySession.STATUS_SUCCESS,i,t,o)})},n.onshippingmethodselected=function(t){a=t.shippingMethod;var i={applepay_address:e,applepay_shipping_method:a};$.post("/cart/applepay",i,function(e){var t={type:"final",label:"Total",amount:e.total},i=e.line_items;n.completeShippingMethodSelection(ApplePaySession.STATUS_SUCCESS,t,i)})},n.onpaymentauthorized=function(e){i.tokenize({token:e.payment.token},function(t,i){if(t)console.error("Error tokenizing Apple Pay:",t),n.completePayment(ApplePaySession.STATUS_FAILURE);else{var o={applepay_address:e.payment.shippingContact,applepay_shipping_method:a};$.post("/checkout/applepay/validate",o,function(){var t={applepay_nonce:i.nonce,applepay_address:JSON.stringify(e.payment.shippingContact),applepay_shipping:JSON.stringify(a),"checkout[payment_option]":"ApplePay"};TeePublic.Components.Utilities.instantForm("/checkout/applepay",t);ApplePaySession.STATUS_SUCCESS}),n.completePayment(status)}})},n.begin()};return{setupApplePay:a,showApplePay:n,bind_events:function(e,t){e,$(".jsApplePayCheckout","html").click(function(){t()&&s()})}}}()}});