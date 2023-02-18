(()=>{"use strict";class t{mouseOnClickXLocation=void 0;constructor(t,e=50,i=!1){this.identifier=t,this.rotationSpeed=e,this.reversed=i,this.rotationArea=document.querySelector(`#${this.identifier}`),this.images=this.rotationArea.querySelectorAll("img"),this.rotateMethod=this.onRotate.bind(this),this.images.forEach((t=>{t.setAttribute("draggable",!1),t.dataset.focused="0"})),this.images[0].dataset.focused="1",this.initListeners(),this.updateVisibilityByDataFocused()}initListeners(){this.rotationArea.addEventListener("mousedown",(t=>{this.mouseOnClickXLocation=t.offsetX,this.rotationArea.addEventListener("mousemove",this.rotateMethod)})),this.rotationArea.addEventListener("mouseup",(t=>{this.mouseOnClickXLocation=void 0,this.setDataFocusedToVisibleImage(),this.rotationArea.removeEventListener("mousemove",this.rotateMethod)})),this.rotationArea.addEventListener("mouseleave",(t=>{this.mouseOnClickXLocation=void 0,this.setDataFocusedToVisibleImage(),this.rotationArea.removeEventListener("mousemove",this.rotateMethod)}))}getFocusedIndex(){let t;for(let e=0;e<this.images.length;e++)if("1"==this.images[e].dataset.focused){t=e;break}if(void 0!==t)return t;t=0}setDataFocusedToVisibleImage(){this.images.forEach((t=>{"visible"==t.style.visibility?t.dataset.focused="1":t.dataset.focused="0"}))}updateVisibilityByDataFocused(){this.images.forEach((t=>{t.style.visibility="hidden","1"==t.dataset.focused&&(t.style.visibility="visible")}))}onRotate(t){const e=t.screenX;let i,s=Math.round((e-this.mouseOnClickXLocation)/this.rotationSpeed),o=this.getFocusedIndex();if(this.reversed&&(s*=-1),0!==s){if(s<0)for(let t=s,e=o;t<0;t++)e-=1,-1===e&&(e=this.images.length-1),i=e;else for(let t=s,e=o;t>0;t--)e+=1,e===this.images.length&&(e=0),i=e;"visible"!==this.images[i].style.visibility&&(this.images.forEach((t=>{t.style.visibility="hidden"})),this.images[i].style.visibility="visible")}}}new t("rotation-1",50),new t("rotation-2",10,!0)})();