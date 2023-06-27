(()=>{let t=t=>`
  <svg
    width=40
    height=40
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 5C29.1666 5 36.6666 10.9667 36.6666 18.3333C36.6666 25.7 29.1666 31.6667 20 31.6667C17.9333 31.6667 15.95 31.3667 14.1166 30.8333C9.24998 35 3.33331 35 3.33331 35C7.21665 31.1167 7.83331 28.5 7.91665 27.5C5.08331 25.1167 3.33331 21.8833 3.33331 18.3333C3.33331 10.9667 10.8333 5 20 5Z'
      fill=${t}
    />
  </svg>
`;var e={};!function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,e){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},u=Object.keys(t);for(i=0;i<u.length;i++)n=u[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(i=0;i<u.length;i++)n=u[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,i=s(t);if(e){var a=s(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return function(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}function h(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}function c(){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var i=h(t,e);if(i){var a=Object.getOwnPropertyDescriptor(i,e);return a.get?a.get.call(arguments.length<3?t:n):a.value}}).apply(this,arguments)}function d(t,e,n,i){return(d="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,n,i){var a,u=h(t,e);if(u){if((a=Object.getOwnPropertyDescriptor(u,e)).set)return a.set.call(i,n),!0;if(!a.writable)return!1}if(a=Object.getOwnPropertyDescriptor(i,e)){if(!a.writable)return!1;a.value=n,Object.defineProperty(i,e,a)}else e in i?Object.defineProperty(i,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[e]=n;return!0})(t,e,n,i)}function p(t,e,n,i,a){if(!d(t,e,n,i||t)&&a)throw Error("failed to set property");return n}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n,i,a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var u=[],s=!0,r=!1;try{for(a=a.call(t);!(s=(n=a.next()).done)&&(u.push(n.value),!e||u.length!==e);s=!0);}catch(t){r=!0,i=t}finally{try{s||null==a.return||a.return()}finally{if(r)throw i}}return u}}(t,e)||v(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(t){if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(t,e)}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var k,m=function(){function t(e){n(this,t),Object.assign(this,{inserted:"",rawInserted:"",skip:!1,tailShift:0},e)}return a(t,[{key:"aggregate",value:function(t){return this.rawInserted+=t.rawInserted,this.skip=this.skip||t.skip,this.inserted+=t.inserted,this.tailShift+=t.tailShift,this}},{key:"offset",get:function(){return this.tailShift+this.inserted.length}}]),t}();function y(t){return"string"==typeof t||t instanceof String}var C={NONE:"NONE",LEFT:"LEFT",FORCE_LEFT:"FORCE_LEFT",RIGHT:"RIGHT",FORCE_RIGHT:"FORCE_RIGHT"};function _(t){return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function b(t){return Array.isArray(t)?t:[t,new m]}var F=function(){function t(e,i,a,u){for(n(this,t),this.value=e,this.cursorPos=i,this.oldValue=a,this.oldSelection=u;this.value.slice(0,this.startChangePos)!==this.oldValue.slice(0,this.startChangePos);)--this.oldSelection.start}return a(t,[{key:"startChangePos",get:function(){return Math.min(this.cursorPos,this.oldSelection.start)}},{key:"insertedCount",get:function(){return this.cursorPos-this.startChangePos}},{key:"inserted",get:function(){return this.value.substr(this.startChangePos,this.insertedCount)}},{key:"removedCount",get:function(){return Math.max(this.oldSelection.end-this.startChangePos||this.oldValue.length-this.value.length,0)}},{key:"removed",get:function(){return this.oldValue.substr(this.startChangePos,this.removedCount)}},{key:"head",get:function(){return this.value.substring(0,this.startChangePos)}},{key:"tail",get:function(){return this.value.substring(this.startChangePos+this.insertedCount)}},{key:"removeDirection",get:function(){return!this.removedCount||this.insertedCount?C.NONE:(this.oldSelection.end===this.cursorPos||this.oldSelection.start===this.cursorPos)&&this.oldSelection.end===this.oldSelection.start?C.RIGHT:C.LEFT}}]),t}(),E=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2?arguments[2]:void 0;n(this,t),this.value=e,this.from=i,this.stop=a}return a(t,[{key:"toString",value:function(){return this.value}},{key:"extend",value:function(t){this.value+=String(t)}},{key:"appendTo",value:function(t){return t.append(this.toString(),{tail:!0}).aggregate(t._appendPlaceholder())}},{key:"state",get:function(){return{value:this.value,from:this.from,stop:this.stop}},set:function(t){Object.assign(this,t)}},{key:"unshift",value:function(t){if(!this.value.length||null!=t&&this.from>=t)return"";var e=this.value[0];return this.value=this.value.slice(1),e}},{key:"shift",value:function(){if(!this.value.length)return"";var t=this.value[this.value.length-1];return this.value=this.value.slice(0,-1),t}}]),t}();function A(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new A.InputMask(t,e)}var x=function(){function t(e){n(this,t),this._value="",this._update(Object.assign({},t.DEFAULTS,e)),this.isInitialized=!0}return a(t,[{key:"updateOptions",value:function(t){Object.keys(t).length&&this.withValueRefresh(this._update.bind(this,t))}},{key:"_update",value:function(t){Object.assign(this,t)}},{key:"state",get:function(){return{_value:this.value}},set:function(t){this._value=t._value}},{key:"reset",value:function(){this._value=""}},{key:"value",get:function(){return this._value},set:function(t){this.resolve(t)}},{key:"resolve",value:function(t){return this.reset(),this.append(t,{input:!0},""),this.doCommit(),this.value}},{key:"unmaskedValue",get:function(){return this.value},set:function(t){this.reset(),this.append(t,{},""),this.doCommit()}},{key:"typedValue",get:function(){return this.doParse(this.value)},set:function(t){this.value=this.doFormat(t)}},{key:"rawInputValue",get:function(){return this.extractInput(0,this.value.length,{raw:!0})},set:function(t){this.reset(),this.append(t,{raw:!0},""),this.doCommit()}},{key:"isComplete",get:function(){return!0}},{key:"isFilled",get:function(){return this.isComplete}},{key:"nearestInputPos",value:function(t,e){return t}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return this.value.slice(t,e)}},{key:"extractTail",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return new E(this.extractInput(t,e),t)}},{key:"appendTail",value:function(t){return y(t)&&(t=new E(String(t))),t.appendTo(this)}},{key:"_appendCharRaw",value:function(t){return t?(this._value+=t,new m({inserted:t,rawInserted:t})):new m}},{key:"_appendChar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,i=this.state,a=f(b(this.doPrepare(t,e)),2);if(t=a[0],(u=(u=a[1]).aggregate(this._appendCharRaw(t,e))).inserted){var u,s,r=!1!==this.doValidate(e);if(r&&null!=n){var o=this.state;!0===this.overwrite&&(s=n.state,n.unshift(this.value.length));var l=this.appendTail(n);(r=l.rawInserted===n.toString())&&l.inserted||"shift"!==this.overwrite||(this.state=o,s=n.state,n.shift(),r=(l=this.appendTail(n)).rawInserted===n.toString()),r&&l.inserted&&(this.state=o)}!r&&(u=new m,this.state=i,n&&s&&(n.state=s))}return u}},{key:"_appendPlaceholder",value:function(){return new m}},{key:"_appendEager",value:function(){return new m}},{key:"append",value:function(t,e,n){if(!y(t))throw Error("value should be string");var i=new m,a=y(n)?new E(String(n)):n;null!=e&&e.tail&&(e._beforeTailState=this.state);for(var u=0;u<t.length;++u)i.aggregate(this._appendChar(t[u],e,a));return null!=a&&(i.tailShift+=this.appendTail(a).tailShift),this.eager&&null!=e&&e.input&&t&&i.aggregate(this._appendEager()),i}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return this._value=this.value.slice(0,t)+this.value.slice(e),new m}},{key:"withValueRefresh",value:function(t){if(this._refreshing||!this.isInitialized)return t();this._refreshing=!0;var e=this.rawInputValue,n=this.value,i=t();return this.rawInputValue=e,this.value&&this.value!==n&&0===n.indexOf(this.value)&&this.append(n.slice(this.value.length),{},""),delete this._refreshing,i}},{key:"runIsolated",value:function(t){if(this._isolated||!this.isInitialized)return t(this);this._isolated=!0;var e=this.state,n=t(this);return this.state=e,delete this._isolated,n}},{key:"doPrepare",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.prepare?this.prepare(t,this,e):t}},{key:"doValidate",value:function(t){return(!this.validate||this.validate(this.value,this,t))&&(!this.parent||this.parent.doValidate(t))}},{key:"doCommit",value:function(){this.commit&&this.commit(this.value,this)}},{key:"doFormat",value:function(t){return this.format?this.format(t,this):t}},{key:"doParse",value:function(t){return this.parse?this.parse(t,this):t}},{key:"splice",value:function(t,e,n,i){var a,u,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{input:!0},r=t+e,o=this.extractTail(r);this.eager&&(i=function(t){switch(t){case C.LEFT:return C.FORCE_LEFT;case C.RIGHT:return C.FORCE_RIGHT;default:return t}}(i),a=this.extractInput(0,r,{raw:!0}));var l=this.nearestInputPos(t,e>1&&0!==t&&!this.eager?C.NONE:i),h=new m({tailShift:l-t}).aggregate(this.remove(l));if(this.eager&&i!==C.NONE&&a===this.rawInputValue){if(i===C.FORCE_LEFT)for(;a===this.rawInputValue&&(u=this.value.length);)h.aggregate(new m({tailShift:-1})).aggregate(this.remove(u-1));else i===C.FORCE_RIGHT&&o.unshift()}return h.aggregate(this.append(n,s,o))}},{key:"maskEquals",value:function(t){return this.mask===t}},{key:"typedValueEquals",value:function(e){var n=this.typedValue;return e===n||t.EMPTY_VALUES.includes(e)&&t.EMPTY_VALUES.includes(n)||this.doFormat(e)===this.doFormat(this.typedValue)}}]),t}();function S(t){if(null==t)throw Error("mask property should be defined");return t instanceof RegExp?A.MaskedRegExp:y(t)?A.MaskedPattern:t instanceof Date||t===Date?A.MaskedDate:t instanceof Number||"number"==typeof t||t===Number?A.MaskedNumber:Array.isArray(t)||t===Array?A.MaskedDynamic:A.Masked&&t.prototype instanceof A.Masked?t:t instanceof A.Masked?t.constructor:t instanceof Function?A.MaskedFunction:(console.warn("Mask not found for mask",t),A.Masked)}function w(t){if(A.Masked&&t instanceof A.Masked)return t;var e=(t=Object.assign({},t)).mask;if(A.Masked&&e instanceof A.Masked)return e;var n=S(e);if(!n)throw Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");return new n(t)}x.DEFAULTS={format:function(t){return t},parse:function(t){return t}},x.EMPTY_VALUES=[void 0,null,""],A.Masked=x,A.createMask=w;var B=["mask"],D={0:/\d/,a:/[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,"*":/./},M=function(){function t(e){n(this,t);var i=e.mask,a=o(e,B);this.masked=w({mask:i}),Object.assign(this,a)}return a(t,[{key:"reset",value:function(){this.isFilled=!1,this.masked.reset()}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return 0===t&&e>=1?(this.isFilled=!1,this.masked.remove(t,e)):new m}},{key:"value",get:function(){return this.masked.value||(this.isFilled&&!this.isOptional?this.placeholderChar:"")}},{key:"unmaskedValue",get:function(){return this.masked.unmaskedValue}},{key:"isComplete",get:function(){return!!this.masked.value||this.isOptional}},{key:"_appendChar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.isFilled)return new m;var n=this.masked.state,i=this.masked._appendChar(t,e);return i.inserted&&!1===this.doValidate(e)&&(i.inserted=i.rawInserted="",this.masked.state=n),i.inserted||this.isOptional||this.lazy||e.input||(i.inserted=this.placeholderChar),i.skip=!i.inserted&&!this.isOptional,this.isFilled=!!i.inserted,i}},{key:"append",value:function(){var t;return(t=this.masked).append.apply(t,arguments)}},{key:"_appendPlaceholder",value:function(){var t=new m;return this.isFilled||this.isOptional||(this.isFilled=!0,t.inserted=this.placeholderChar),t}},{key:"_appendEager",value:function(){return new m}},{key:"extractTail",value:function(){var t;return(t=this.masked).extractTail.apply(t,arguments)}},{key:"appendTail",value:function(){var t;return(t=this.masked).appendTail.apply(t,arguments)}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2?arguments[2]:void 0;return this.masked.extractInput(t,e,n)}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C.NONE,n=this.value.length,i=Math.min(Math.max(t,0),n);switch(e){case C.LEFT:case C.FORCE_LEFT:return this.isComplete?i:0;case C.RIGHT:case C.FORCE_RIGHT:return this.isComplete?i:n;case C.NONE:default:return i}}},{key:"doValidate",value:function(){var t,e;return(t=this.masked).doValidate.apply(t,arguments)&&(!this.parent||(e=this.parent).doValidate.apply(e,arguments))}},{key:"doCommit",value:function(){this.masked.doCommit()}},{key:"state",get:function(){return{masked:this.masked.state,isFilled:this.isFilled}},set:function(t){this.masked.state=t.masked,this.isFilled=t.isFilled}}]),t}(),T=function(){function t(e){n(this,t),Object.assign(this,e),this._value="",this.isFixed=!0}return a(t,[{key:"value",get:function(){return this._value}},{key:"unmaskedValue",get:function(){return this.isUnmasking?this.value:""}},{key:"reset",value:function(){this._isRawInput=!1,this._value=""}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._value.length;return this._value=this._value.slice(0,t)+this._value.slice(e),this._value||(this._isRawInput=!1),new m}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C.NONE,n=this._value.length;switch(e){case C.LEFT:case C.FORCE_LEFT:return 0;case C.NONE:case C.RIGHT:case C.FORCE_RIGHT:default:return n}}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._value.length,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.raw&&this._isRawInput&&this._value.slice(t,e)||""}},{key:"isComplete",get:function(){return!0}},{key:"isFilled",get:function(){return!!this._value}},{key:"_appendChar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new m;if(this._value)return n;var i=this.char===t&&(this.isUnmasking||e.input||e.raw)&&(!e.raw||!this.eager)&&!e.tail;return i&&(n.rawInserted=this.char),this._value=n.inserted=this.char,this._isRawInput=i&&(e.raw||e.input),n}},{key:"_appendEager",value:function(){return this._appendChar(this.char,{tail:!0})}},{key:"_appendPlaceholder",value:function(){var t=new m;return this._value||(this._value=t.inserted=this.char),t}},{key:"extractTail",value:function(){return arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,new E("")}},{key:"appendTail",value:function(t){return y(t)&&(t=new E(String(t))),t.appendTo(this)}},{key:"append",value:function(t,e,n){var i=this._appendChar(t[0],e);return null!=n&&(i.tailShift+=this.appendTail(n).tailShift),i}},{key:"doCommit",value:function(){}},{key:"state",get:function(){return{_value:this._value,_isRawInput:this._isRawInput}},set:function(t){Object.assign(this,t)}}]),t}(),I=["chunks"],O=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;n(this,t),this.chunks=e,this.from=i}return a(t,[{key:"toString",value:function(){return this.chunks.map(String).join("")}},{key:"extend",value:function(e){if(String(e)){y(e)&&(e=new E(String(e)));var n,i=this.chunks[this.chunks.length-1],a=i&&(i.stop===e.stop||null==e.stop)&&e.from===i.from+i.toString().length;if(e instanceof E)a?i.extend(e.toString()):this.chunks.push(e);else if(e instanceof t){if(null==e.stop)for(;e.chunks.length&&null==e.chunks[0].stop;)n=e.chunks.shift(),n.from+=e.from,this.extend(n);e.toString()&&(e.stop=e.blockIndex,this.chunks.push(e))}}}},{key:"appendTo",value:function(e){if(!(e instanceof A.MaskedPattern))return new E(this.toString()).appendTo(e);for(var n=new m,i=0;i<this.chunks.length&&!n.skip;++i){var a=this.chunks[i],u=e._mapPosToBlock(e.value.length),s=a.stop,r=void 0;if(null!=s&&(!u||u.index<=s)&&((a instanceof t||e._stops.indexOf(s)>=0)&&n.aggregate(e._appendPlaceholder(s)),r=a instanceof t&&e._blocks[s]),r){var o=r.appendTail(a);o.skip=!1,n.aggregate(o),e._value+=o.inserted;var l=a.toString().slice(o.rawInserted.length);l&&n.aggregate(e.append(l,{tail:!0}))}else n.aggregate(e.append(a.toString(),{tail:!0}))}return n}},{key:"state",get:function(){return{chunks:this.chunks.map(function(t){return t.state}),from:this.from,stop:this.stop,blockIndex:this.blockIndex}},set:function(e){var n=e.chunks;Object.assign(this,o(e,I)),this.chunks=n.map(function(e){var n="chunks"in e?new t:new E;return n.state=e,n})}},{key:"unshift",value:function(t){if(!this.chunks.length||null!=t&&this.from>=t)return"";for(var e=null!=t?t-this.from:t,n=0;n<this.chunks.length;){var i=this.chunks[n],a=i.unshift(e);if(i.toString()){if(!a)break;++n}else this.chunks.splice(n,1);if(a)return a}return""}},{key:"shift",value:function(){if(!this.chunks.length)return"";for(var t=this.chunks.length-1;0<=t;){var e=this.chunks[t],n=e.shift();if(e.toString()){if(!n)break;--t}else this.chunks.splice(t,1);if(n)return n}return""}}]),t}(),P=function(){function t(e,i){n(this,t),this.masked=e,this._log=[];var a=e._mapPosToBlock(i)||(i<0?{index:0,offset:0}:{index:this.masked._blocks.length,offset:0}),u=a.offset,s=a.index;this.offset=u,this.index=s,this.ok=!1}return a(t,[{key:"block",get:function(){return this.masked._blocks[this.index]}},{key:"pos",get:function(){return this.masked._blockStartPos(this.index)+this.offset}},{key:"state",get:function(){return{index:this.index,offset:this.offset,ok:this.ok}},set:function(t){Object.assign(this,t)}},{key:"pushState",value:function(){this._log.push(this.state)}},{key:"popState",value:function(){var t=this._log.pop();return this.state=t,t}},{key:"bindBlock",value:function(){!this.block&&(this.index<0&&(this.index=0,this.offset=0),this.index>=this.masked._blocks.length&&(this.index=this.masked._blocks.length-1,this.offset=this.block.value.length))}},{key:"_pushLeft",value:function(t){for(this.pushState(),this.bindBlock();0<=this.index;--this.index,this.offset=(null===(e=this.block)||void 0===e?void 0:e.value.length)||0){var e;if(t())return this.ok=!0}return this.ok=!1}},{key:"_pushRight",value:function(t){for(this.pushState(),this.bindBlock();this.index<this.masked._blocks.length;++this.index,this.offset=0)if(t())return this.ok=!0;return this.ok=!1}},{key:"pushLeftBeforeFilled",value:function(){var t=this;return this._pushLeft(function(){if(!t.block.isFixed&&t.block.value&&(t.offset=t.block.nearestInputPos(t.offset,C.FORCE_LEFT),0!==t.offset))return!0})}},{key:"pushLeftBeforeInput",value:function(){var t=this;return this._pushLeft(function(){if(!t.block.isFixed)return t.offset=t.block.nearestInputPos(t.offset,C.LEFT),!0})}},{key:"pushLeftBeforeRequired",value:function(){var t=this;return this._pushLeft(function(){if(!t.block.isFixed&&(!t.block.isOptional||t.block.value))return t.offset=t.block.nearestInputPos(t.offset,C.LEFT),!0})}},{key:"pushRightBeforeFilled",value:function(){var t=this;return this._pushRight(function(){if(!t.block.isFixed&&t.block.value&&(t.offset=t.block.nearestInputPos(t.offset,C.FORCE_RIGHT),t.offset!==t.block.value.length))return!0})}},{key:"pushRightBeforeInput",value:function(){var t=this;return this._pushRight(function(){if(!t.block.isFixed)return t.offset=t.block.nearestInputPos(t.offset,C.NONE),!0})}},{key:"pushRightBeforeRequired",value:function(){var t=this;return this._pushRight(function(){if(!t.block.isFixed&&(!t.block.isOptional||t.block.value))return t.offset=t.block.nearestInputPos(t.offset,C.NONE),!0})}}]),t}(),R=function(t){u(i,t);var e=l(i);function i(){return n(this,i),e.apply(this,arguments)}return a(i,[{key:"_update",value:function(t){t.mask&&(t.validate=function(e){return e.search(t.mask)>=0}),c(s(i.prototype),"_update",this).call(this,t)}}]),i}(x);A.MaskedRegExp=R;var V=["_blocks"],L=function(t){u(i,t);var e=l(i);function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n(this,i),t.definitions=Object.assign({},D,t.definitions),e.call(this,Object.assign({},i.DEFAULTS,t))}return a(i,[{key:"_update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.definitions=Object.assign({},this.definitions,t.definitions),c(s(i.prototype),"_update",this).call(this,t),this._rebuildMask()}},{key:"_rebuildMask",value:function(){var t=this,e=this.definitions;this._blocks=[],this._stops=[],this._maskedBlocks={};var n=this.mask;if(n&&e){for(var a=!1,u=!1,s=0;s<n.length;++s)if(!this.blocks||"continue"!==function(){var e=n.slice(s),i=Object.keys(t.blocks).filter(function(t){return 0===e.indexOf(t)});i.sort(function(t,e){return e.length-t.length});var a=i[0];if(a){var u=w(Object.assign({parent:t,lazy:t.lazy,eager:t.eager,placeholderChar:t.placeholderChar,overwrite:t.overwrite},t.blocks[a]));return u&&(t._blocks.push(u),t._maskedBlocks[a]||(t._maskedBlocks[a]=[]),t._maskedBlocks[a].push(t._blocks.length-1)),s+=a.length-1,"continue"}}()){var r=n[s],o=r in e;if(r===i.STOP_CHAR){this._stops.push(this._blocks.length);continue}if("{"===r||"}"===r){a=!a;continue}if("["===r||"]"===r){u=!u;continue}if(r===i.ESCAPE_CHAR){if(!(r=n[++s]))break;o=!1}var l=o?new M({parent:this,lazy:this.lazy,eager:this.eager,placeholderChar:this.placeholderChar,mask:e[r],isOptional:u}):new T({char:r,eager:this.eager,isUnmasking:a});this._blocks.push(l)}}}},{key:"state",get:function(){return Object.assign({},c(s(i.prototype),"state",this),{_blocks:this._blocks.map(function(t){return t.state})})},set:function(t){var e=t._blocks,n=o(t,V);this._blocks.forEach(function(t,n){return t.state=e[n]}),p(s(i.prototype),"state",n,this,!0)}},{key:"reset",value:function(){c(s(i.prototype),"reset",this).call(this),this._blocks.forEach(function(t){return t.reset()})}},{key:"isComplete",get:function(){return this._blocks.every(function(t){return t.isComplete})}},{key:"isFilled",get:function(){return this._blocks.every(function(t){return t.isFilled})}},{key:"isFixed",get:function(){return this._blocks.every(function(t){return t.isFixed})}},{key:"isOptional",get:function(){return this._blocks.every(function(t){return t.isOptional})}},{key:"doCommit",value:function(){this._blocks.forEach(function(t){return t.doCommit()}),c(s(i.prototype),"doCommit",this).call(this)}},{key:"unmaskedValue",get:function(){return this._blocks.reduce(function(t,e){return t+e.unmaskedValue},"")},set:function(t){p(s(i.prototype),"unmaskedValue",t,this,!0)}},{key:"value",get:function(){return this._blocks.reduce(function(t,e){return t+e.value},"")},set:function(t){p(s(i.prototype),"value",t,this,!0)}},{key:"appendTail",value:function(t){return c(s(i.prototype),"appendTail",this).call(this,t).aggregate(this._appendPlaceholder())}},{key:"_appendEager",value:function(){var t,e=new m,n=null===(t=this._mapPosToBlock(this.value.length))||void 0===t?void 0:t.index;if(null==n)return e;this._blocks[n].isFilled&&++n;for(var i=n;i<this._blocks.length;++i){var a=this._blocks[i]._appendEager();if(!a.inserted)break;e.aggregate(a)}return e}},{key:"_appendCharRaw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._mapPosToBlock(this.value.length),i=new m;if(!n)return i;for(var a=n.index;;++a){var u,s,r=this._blocks[a];if(!r)break;var o=r._appendChar(t,Object.assign({},e,{_beforeTailState:null===(u=e._beforeTailState)||void 0===u?void 0:null===(s=u._blocks)||void 0===s?void 0:s[a]})),l=o.skip;if(i.aggregate(o),l||o.rawInserted)break}return i}},{key:"extractTail",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,i=new O;return e===n||this._forEachBlocksInRange(e,n,function(e,n,a,u){var s=e.extractTail(a,u);s.stop=t._findStopBefore(n),s.from=t._blockStartPos(n),s instanceof O&&(s.blockIndex=n),i.extend(s)}),i}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t===e)return"";var i="";return this._forEachBlocksInRange(t,e,function(t,e,a,u){i+=t.extractInput(a,u,n)}),i}},{key:"_findStopBefore",value:function(t){for(var e,n=0;n<this._stops.length;++n){var i=this._stops[n];if(i<=t)e=i;else break}return e}},{key:"_appendPlaceholder",value:function(t){var e=this,n=new m;if(this.lazy&&null==t)return n;var i=this._mapPosToBlock(this.value.length);if(!i)return n;var a=i.index,u=null!=t?t:this._blocks.length;return this._blocks.slice(a,u).forEach(function(i){if(!i.lazy||null!=t){var a=null!=i._blocks?[i._blocks.length]:[],u=i._appendPlaceholder.apply(i,a);e._value+=u.inserted,n.aggregate(u)}}),n}},{key:"_mapPosToBlock",value:function(t){for(var e="",n=0;n<this._blocks.length;++n){var i=this._blocks[n],a=e.length;if(t<=(e+=i.value).length)return{index:n,offset:t-a}}}},{key:"_blockStartPos",value:function(t){return this._blocks.slice(0,t).reduce(function(t,e){return t+e.value.length},0)}},{key:"_forEachBlocksInRange",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2?arguments[2]:void 0,i=this._mapPosToBlock(t);if(i){var a=this._mapPosToBlock(e),u=a&&i.index===a.index,s=i.offset,r=a&&u?a.offset:this._blocks[i.index].value.length;if(n(this._blocks[i.index],i.index,s,r),a&&!u){for(var o=i.index+1;o<a.index;++o)n(this._blocks[o],o,0,this._blocks[o].value.length);n(this._blocks[a.index],a.index,0,a.offset)}}}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=c(s(i.prototype),"remove",this).call(this,t,e);return this._forEachBlocksInRange(t,e,function(t,e,i,a){n.aggregate(t.remove(i,a))}),n}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C.NONE;if(!this._blocks.length)return 0;var n=new P(this,t);if(e===C.NONE)return n.pushRightBeforeInput()?n.pos:(n.popState(),n.pushLeftBeforeInput())?n.pos:this.value.length;if(e===C.LEFT||e===C.FORCE_LEFT){if(e===C.LEFT){if(n.pushRightBeforeFilled(),n.ok&&n.pos===t)return t;n.popState()}if(n.pushLeftBeforeInput(),n.pushLeftBeforeRequired(),n.pushLeftBeforeFilled(),e===C.LEFT){if(n.pushRightBeforeInput(),n.pushRightBeforeRequired(),n.ok&&n.pos<=t||(n.popState(),n.ok&&n.pos<=t))return n.pos;n.popState()}return n.ok?n.pos:e===C.FORCE_LEFT?0:(n.popState(),n.ok)?n.pos:(n.popState(),n.ok)?n.pos:0}return e===C.RIGHT||e===C.FORCE_RIGHT?(n.pushRightBeforeInput(),n.pushRightBeforeRequired(),n.pushRightBeforeFilled())?n.pos:e===C.FORCE_RIGHT?this.value.length:(n.popState(),n.ok)?n.pos:(n.popState(),n.ok)?n.pos:this.nearestInputPos(t,C.LEFT):t}},{key:"maskedBlock",value:function(t){return this.maskedBlocks(t)[0]}},{key:"maskedBlocks",value:function(t){var e=this,n=this._maskedBlocks[t];return n?n.map(function(t){return e._blocks[t]}):[]}}]),i}(x);L.DEFAULTS={lazy:!0,placeholderChar:"_"},L.STOP_CHAR="`",L.ESCAPE_CHAR="\\",L.InputDefinition=M,L.FixedDefinition=T,A.MaskedPattern=L;var j=function(t){u(i,t);var e=l(i);function i(){return n(this,i),e.apply(this,arguments)}return a(i,[{key:"_matchFrom",get:function(){return this.maxLength-String(this.from).length}},{key:"_update",value:function(t){var e=String((t=Object.assign({to:this.to||0,from:this.from||0,maxLength:this.maxLength||0},t)).to).length;null!=t.maxLength&&(e=Math.max(e,t.maxLength)),t.maxLength=e;for(var n=String(t.from).padStart(e,"0"),a=String(t.to).padStart(e,"0"),u=0;u<a.length&&a[u]===n[u];)++u;t.mask=a.slice(0,u).replace(/0/g,"\\0")+"0".repeat(e-u),c(s(i.prototype),"_update",this).call(this,t)}},{key:"isComplete",get:function(){return c(s(i.prototype),"isComplete",this)&&!!this.value}},{key:"boundaries",value:function(t){var e="",n="",i=f(t.match(/^(\D*)(\d*)(\D*)/)||[],3),a=i[1],u=i[2];return u&&(e="0".repeat(a.length)+u,n="9".repeat(a.length)+u),[e=e.padEnd(this.maxLength,"0"),n=n.padEnd(this.maxLength,"9")]}},{key:"doPrepare",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=f(b(c(s(i.prototype),"doPrepare",this).call(this,t.replace(/\D/g,""),n)),2);if(t=a[0],e=a[1],!this.autofix||!t)return t;var u=String(this.from).padStart(this.maxLength,"0"),r=String(this.to).padStart(this.maxLength,"0"),o=this.value+t;if(o.length>this.maxLength)return"";var l=f(this.boundaries(o),2),h=l[0];return Number(l[1])<this.from?u[o.length-1]:Number(h)>this.to?"pad"===this.autofix&&o.length<this.maxLength?["",e.aggregate(this.append(u[o.length-1]+t,n))]:r[o.length-1]:t}},{key:"doValidate",value:function(){var t,e=this.value;if(-1===e.search(/[^0]/)&&e.length<=this._matchFrom)return!0;for(var n=f(this.boundaries(e),2),a=n[0],u=n[1],r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];return this.from<=Number(u)&&Number(a)<=this.to&&(t=c(s(i.prototype),"doValidate",this)).call.apply(t,[this].concat(o))}}]),i}(L);A.MaskedRange=j;var N=function(t){u(i,t);var e=l(i);function i(t){return n(this,i),e.call(this,Object.assign({},i.DEFAULTS,t))}return a(i,[{key:"_update",value:function(t){t.mask===Date&&delete t.mask,t.pattern&&(t.mask=t.pattern);var e=t.blocks;t.blocks=Object.assign({},i.GET_DEFAULT_BLOCKS()),t.min&&(t.blocks.Y.from=t.min.getFullYear()),t.max&&(t.blocks.Y.to=t.max.getFullYear()),t.min&&t.max&&t.blocks.Y.from===t.blocks.Y.to&&(t.blocks.m.from=t.min.getMonth()+1,t.blocks.m.to=t.max.getMonth()+1,t.blocks.m.from===t.blocks.m.to&&(t.blocks.d.from=t.min.getDate(),t.blocks.d.to=t.max.getDate())),Object.assign(t.blocks,this.blocks,e),Object.keys(t.blocks).forEach(function(e){var n=t.blocks[e];!("autofix"in n)&&"autofix"in t&&(n.autofix=t.autofix)}),c(s(i.prototype),"_update",this).call(this,t)}},{key:"doValidate",value:function(){for(var t,e=this.date,n=arguments.length,a=Array(n),u=0;u<n;u++)a[u]=arguments[u];return(t=c(s(i.prototype),"doValidate",this)).call.apply(t,[this].concat(a))&&(!this.isComplete||this.isDateExist(this.value)&&null!=e&&(null==this.min||this.min<=e)&&(null==this.max||e<=this.max))}},{key:"isDateExist",value:function(t){return this.format(this.parse(t,this),this).indexOf(t)>=0}},{key:"date",get:function(){return this.typedValue},set:function(t){this.typedValue=t}},{key:"typedValue",get:function(){return this.isComplete?c(s(i.prototype),"typedValue",this):null},set:function(t){p(s(i.prototype),"typedValue",t,this,!0)}},{key:"maskEquals",value:function(t){return t===Date||c(s(i.prototype),"maskEquals",this).call(this,t)}}]),i}(L);N.DEFAULTS={pattern:"d{.}`m{.}`Y",format:function(t){return t?[String(t.getDate()).padStart(2,"0"),String(t.getMonth()+1).padStart(2,"0"),t.getFullYear()].join("."):""},parse:function(t){var e=f(t.split("."),3),n=e[0],i=e[1],a=e[2];return new Date(a,i-1,n)}},N.GET_DEFAULT_BLOCKS=function(){return{d:{mask:j,from:1,to:31,maxLength:2},m:{mask:j,from:1,to:12,maxLength:2},Y:{mask:j,from:1900,to:9999}}},A.MaskedDate=N;var $=function(){function t(){n(this,t)}return a(t,[{key:"selectionStart",get:function(){var t;try{t=this._unsafeSelectionStart}catch(t){}return null!=t?t:this.value.length}},{key:"selectionEnd",get:function(){var t;try{t=this._unsafeSelectionEnd}catch(t){}return null!=t?t:this.value.length}},{key:"select",value:function(t,e){if(null!=t&&null!=e&&(t!==this.selectionStart||e!==this.selectionEnd))try{this._unsafeSelect(t,e)}catch(t){}}},{key:"_unsafeSelect",value:function(t,e){}},{key:"isActive",get:function(){return!1}},{key:"bindEvents",value:function(t){}},{key:"unbindEvents",value:function(){}}]),t}();A.MaskElement=$;var H=function(t){u(i,t);var e=l(i);function i(t){var a;return n(this,i),(a=e.call(this)).input=t,a._handlers={},a}return a(i,[{key:"rootElement",get:function(){var t,e,n;return null!==(t=null===(e=(n=this.input).getRootNode)||void 0===e?void 0:e.call(n))&&void 0!==t?t:document}},{key:"isActive",get:function(){return this.input===this.rootElement.activeElement}},{key:"_unsafeSelectionStart",get:function(){return this.input.selectionStart}},{key:"_unsafeSelectionEnd",get:function(){return this.input.selectionEnd}},{key:"_unsafeSelect",value:function(t,e){this.input.setSelectionRange(t,e)}},{key:"value",get:function(){return this.input.value},set:function(t){this.input.value=t}},{key:"bindEvents",value:function(t){var e=this;Object.keys(t).forEach(function(n){return e._toggleEventHandler(i.EVENTS_MAP[n],t[n])})}},{key:"unbindEvents",value:function(){var t=this;Object.keys(this._handlers).forEach(function(e){return t._toggleEventHandler(e)})}},{key:"_toggleEventHandler",value:function(t,e){this._handlers[t]&&(this.input.removeEventListener(t,this._handlers[t]),delete this._handlers[t]),e&&(this.input.addEventListener(t,e),this._handlers[t]=e)}}]),i}($);H.EVENTS_MAP={selectionChange:"keydown",input:"input",drop:"drop",click:"click",focus:"focus",commit:"blur"},A.HTMLMaskElement=H;var U=function(t){u(i,t);var e=l(i);function i(){return n(this,i),e.apply(this,arguments)}return a(i,[{key:"_unsafeSelectionStart",get:function(){var t=this.rootElement,e=t.getSelection&&t.getSelection(),n=e&&e.anchorOffset,i=e&&e.focusOffset;return null==i||null==n||n<i?n:i}},{key:"_unsafeSelectionEnd",get:function(){var t=this.rootElement,e=t.getSelection&&t.getSelection(),n=e&&e.anchorOffset,i=e&&e.focusOffset;return null==i||null==n||n>i?n:i}},{key:"_unsafeSelect",value:function(t,e){if(this.rootElement.createRange){var n=this.rootElement.createRange();n.setStart(this.input.firstChild||this.input,t),n.setEnd(this.input.lastChild||this.input,e);var i=this.rootElement,a=i.getSelection&&i.getSelection();a&&(a.removeAllRanges(),a.addRange(n))}}},{key:"value",get:function(){return this.input.textContent},set:function(t){this.input.textContent=t}}]),i}(H);A.HTMLContenteditableMaskElement=U;var q=["mask"],z=function(){function t(e,i){n(this,t),this.el=e instanceof $?e:e.isContentEditable&&"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName?new U(e):new H(e),this.masked=w(i),this._listeners={},this._value="",this._unmaskedValue="",this._saveSelection=this._saveSelection.bind(this),this._onInput=this._onInput.bind(this),this._onChange=this._onChange.bind(this),this._onDrop=this._onDrop.bind(this),this._onFocus=this._onFocus.bind(this),this._onClick=this._onClick.bind(this),this.alignCursor=this.alignCursor.bind(this),this.alignCursorFriendly=this.alignCursorFriendly.bind(this),this._bindEvents(),this.updateValue(),this._onChange()}return a(t,[{key:"mask",get:function(){return this.masked.mask},set:function(t){if(!this.maskEquals(t)){if(!(t instanceof A.Masked)&&this.masked.constructor===S(t)){this.masked.updateOptions({mask:t});return}var e=w({mask:t});e.unmaskedValue=this.masked.unmaskedValue,this.masked=e}}},{key:"maskEquals",value:function(t){var e;return null==t||(null===(e=this.masked)||void 0===e?void 0:e.maskEquals(t))}},{key:"value",get:function(){return this._value},set:function(t){this.value!==t&&(this.masked.value=t,this.updateControl(),this.alignCursor())}},{key:"unmaskedValue",get:function(){return this._unmaskedValue},set:function(t){this.unmaskedValue!==t&&(this.masked.unmaskedValue=t,this.updateControl(),this.alignCursor())}},{key:"typedValue",get:function(){return this.masked.typedValue},set:function(t){this.masked.typedValueEquals(t)||(this.masked.typedValue=t,this.updateControl(),this.alignCursor())}},{key:"_bindEvents",value:function(){this.el.bindEvents({selectionChange:this._saveSelection,input:this._onInput,drop:this._onDrop,click:this._onClick,focus:this._onFocus,commit:this._onChange})}},{key:"_unbindEvents",value:function(){this.el&&this.el.unbindEvents()}},{key:"_fireEvent",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var a=this._listeners[t];a&&a.forEach(function(t){return t.apply(void 0,n)})}},{key:"selectionStart",get:function(){return this._cursorChanging?this._changingCursorPos:this.el.selectionStart}},{key:"cursorPos",get:function(){return this._cursorChanging?this._changingCursorPos:this.el.selectionEnd},set:function(t){this.el&&this.el.isActive&&(this.el.select(t,t),this._saveSelection())}},{key:"_saveSelection",value:function(){this.value!==this.el.value&&console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),this._selection={start:this.selectionStart,end:this.cursorPos}}},{key:"updateValue",value:function(){this.masked.value=this.el.value,this._value=this.masked.value}},{key:"updateControl",value:function(){var t=this.masked.unmaskedValue,e=this.masked.value,n=this.unmaskedValue!==t||this.value!==e;this._unmaskedValue=t,this._value=e,this.el.value!==e&&(this.el.value=e),n&&this._fireChangeEvents()}},{key:"updateOptions",value:function(t){var n=t.mask,i=o(t,q),a=!this.maskEquals(n),u=!function t(n,i){if(i===n)return!0;var a,u=Array.isArray(i),s=Array.isArray(n);if(u&&s){if(i.length!=n.length)return!1;for(a=0;a<i.length;a++)if(!t(i[a],n[a]))return!1;return!0}if(u!=s)return!1;if(i&&n&&"object"===e(i)&&"object"===e(n)){var r=i instanceof Date,o=n instanceof Date;if(r&&o)return i.getTime()==n.getTime();if(r!=o)return!1;var l=i instanceof RegExp,h=n instanceof RegExp;if(l&&h)return i.toString()==n.toString();if(l!=h)return!1;var c=Object.keys(i);for(a=0;a<c.length;a++)if(!Object.prototype.hasOwnProperty.call(n,c[a]))return!1;for(a=0;a<c.length;a++)if(!t(n[c[a]],i[c[a]]))return!1;return!0}return!!i&&!!n&&"function"==typeof i&&"function"==typeof n&&i.toString()===n.toString()}(this.masked,i);a&&(this.mask=n),u&&this.masked.updateOptions(i),(a||u)&&this.updateControl()}},{key:"updateCursor",value:function(t){null!=t&&(this.cursorPos=t,this._delayUpdateCursor(t))}},{key:"_delayUpdateCursor",value:function(t){var e=this;this._abortUpdateCursor(),this._changingCursorPos=t,this._cursorChanging=setTimeout(function(){e.el&&(e.cursorPos=e._changingCursorPos,e._abortUpdateCursor())},10)}},{key:"_fireChangeEvents",value:function(){this._fireEvent("accept",this._inputEvent),this.masked.isComplete&&this._fireEvent("complete",this._inputEvent)}},{key:"_abortUpdateCursor",value:function(){this._cursorChanging&&(clearTimeout(this._cursorChanging),delete this._cursorChanging)}},{key:"alignCursor",value:function(){this.cursorPos=this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos,C.LEFT))}},{key:"alignCursorFriendly",value:function(){this.selectionStart===this.cursorPos&&this.alignCursor()}},{key:"on",value:function(t,e){return this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e),this}},{key:"off",value:function(t,e){if(!this._listeners[t])return this;if(!e)return delete this._listeners[t],this;var n=this._listeners[t].indexOf(e);return n>=0&&this._listeners[t].splice(n,1),this}},{key:"_onInput",value:function(t){if(this._inputEvent=t,this._abortUpdateCursor(),!this._selection)return this.updateValue();var e=new F(this.el.value,this.cursorPos,this.value,this._selection),n=this.masked.rawInputValue,i=this.masked.splice(e.startChangePos,e.removed.length,e.inserted,e.removeDirection,{input:!0,raw:!0}).offset,a=n===this.masked.rawInputValue?e.removeDirection:C.NONE,u=this.masked.nearestInputPos(e.startChangePos+i,a);a!==C.NONE&&(u=this.masked.nearestInputPos(u,C.NONE)),this.updateControl(),this.updateCursor(u),delete this._inputEvent}},{key:"_onChange",value:function(){this.value!==this.el.value&&this.updateValue(),this.masked.doCommit(),this.updateControl(),this._saveSelection()}},{key:"_onDrop",value:function(t){t.preventDefault(),t.stopPropagation()}},{key:"_onFocus",value:function(t){this.alignCursorFriendly()}},{key:"_onClick",value:function(t){this.alignCursorFriendly()}},{key:"destroy",value:function(){this._unbindEvents(),this._listeners.length=0,delete this.el}}]),t}();A.InputMask=z;var G=function(t){u(i,t);var e=l(i);function i(){return n(this,i),e.apply(this,arguments)}return a(i,[{key:"_update",value:function(t){t.enum&&(t.mask="*".repeat(t.enum[0].length)),c(s(i.prototype),"_update",this).call(this,t)}},{key:"doValidate",value:function(){for(var t,e=this,n=arguments.length,a=Array(n),u=0;u<n;u++)a[u]=arguments[u];return this.enum.some(function(t){return t.indexOf(e.unmaskedValue)>=0})&&(t=c(s(i.prototype),"doValidate",this)).call.apply(t,[this].concat(a))}}]),i}(L);A.MaskedEnum=G;var Y=function(t){u(i,t);var e=l(i);function i(t){return n(this,i),e.call(this,Object.assign({},i.DEFAULTS,t))}return a(i,[{key:"_update",value:function(t){c(s(i.prototype),"_update",this).call(this,t),this._updateRegExps()}},{key:"_updateRegExps",value:function(){var t="^"+(this.allowNegative?"[+|\\-]?":""),e=(this.scale?"("+_(this.radix)+"\\d{0,"+this.scale+"})?":"")+"$";this._numberRegExpInput=RegExp(t+"(0|([1-9]+\\d*))?"+e),this._numberRegExp=RegExp(t+"\\d*"+e),this._mapToRadixRegExp=RegExp("["+this.mapToRadix.map(_).join("")+"]","g"),this._thousandsSeparatorRegExp=RegExp(_(this.thousandsSeparator),"g")}},{key:"_removeThousandsSeparators",value:function(t){return t.replace(this._thousandsSeparatorRegExp,"")}},{key:"_insertThousandsSeparators",value:function(t){var e=t.split(this.radix);return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,this.thousandsSeparator),e.join(this.radix)}},{key:"doPrepare",value:function(t){t=t.replace(this._mapToRadixRegExp,this.radix);for(var e,n=this._removeThousandsSeparators(t),a=arguments.length,u=Array(a>1?a-1:0),r=1;r<a;r++)u[r-1]=arguments[r];var o=f(b((e=c(s(i.prototype),"doPrepare",this)).call.apply(e,[this,n].concat(u))),2),l=o[0],h=o[1];return t&&!n&&(h.skip=!0),[l,h]}},{key:"_separatorsCount",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=0,i=0;i<t;++i)this._value.indexOf(this.thousandsSeparator,i)===i&&(++n,e&&(t+=this.thousandsSeparator.length));return n}},{key:"_separatorsCountFromSlice",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._value;return this._separatorsCount(this._removeThousandsSeparators(t).length,!0)}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2?arguments[2]:void 0,a=f(this._adjustRangeWithSeparators(t,e),2);return t=a[0],e=a[1],this._removeThousandsSeparators(c(s(i.prototype),"extractInput",this).call(this,t,e,n))}},{key:"_appendCharRaw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.thousandsSeparator)return c(s(i.prototype),"_appendCharRaw",this).call(this,t,e);var n=e.tail&&e._beforeTailState?e._beforeTailState._value:this._value,a=this._separatorsCountFromSlice(n);this._value=this._removeThousandsSeparators(this.value);var u=c(s(i.prototype),"_appendCharRaw",this).call(this,t,e);this._value=this._insertThousandsSeparators(this._value);var r=e.tail&&e._beforeTailState?e._beforeTailState._value:this._value,o=this._separatorsCountFromSlice(r);return u.tailShift+=(o-a)*this.thousandsSeparator.length,u.skip=!u.rawInserted&&t===this.thousandsSeparator,u}},{key:"_findSeparatorAround",value:function(t){if(this.thousandsSeparator){var e=t-this.thousandsSeparator.length+1,n=this.value.indexOf(this.thousandsSeparator,e);if(n<=t)return n}return -1}},{key:"_adjustRangeWithSeparators",value:function(t,e){var n=this._findSeparatorAround(t);n>=0&&(t=n);var i=this._findSeparatorAround(e);return i>=0&&(e=i+this.thousandsSeparator.length),[t,e]}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=f(this._adjustRangeWithSeparators(t,e),2);t=n[0],e=n[1];var i=this.value.slice(0,t),a=this.value.slice(e),u=this._separatorsCount(i.length);this._value=this._insertThousandsSeparators(this._removeThousandsSeparators(i+a));var s=this._separatorsCountFromSlice(i);return new m({tailShift:(s-u)*this.thousandsSeparator.length})}},{key:"nearestInputPos",value:function(t,e){if(!this.thousandsSeparator)return t;switch(e){case C.NONE:case C.LEFT:case C.FORCE_LEFT:var n=this._findSeparatorAround(t-1);if(n>=0){var i=n+this.thousandsSeparator.length;if(t<i||this.value.length<=i||e===C.FORCE_LEFT)return n}break;case C.RIGHT:case C.FORCE_RIGHT:var a=this._findSeparatorAround(t);if(a>=0)return a+this.thousandsSeparator.length}return t}},{key:"doValidate",value:function(t){var e=(t.input?this._numberRegExpInput:this._numberRegExp).test(this._removeThousandsSeparators(this.value));if(e){var n=this.number;e=e&&!isNaN(n)&&(null==this.min||this.min>=0||this.min<=this.number)&&(null==this.max||this.max<=0||this.number<=this.max)}return e&&c(s(i.prototype),"doValidate",this).call(this,t)}},{key:"doCommit",value:function(){if(this.value){var t=this.number,e=t;null!=this.min&&(e=Math.max(e,this.min)),null!=this.max&&(e=Math.min(e,this.max)),e!==t&&(this.unmaskedValue=String(e));var n=this.value;this.normalizeZeros&&(n=this._normalizeZeros(n)),this.padFractionalZeros&&this.scale>0&&(n=this._padFractionalZeros(n)),this._value=n}c(s(i.prototype),"doCommit",this).call(this)}},{key:"_normalizeZeros",value:function(t){var e=this._removeThousandsSeparators(t).split(this.radix);return e[0]=e[0].replace(/^(\D*)(0*)(\d*)/,function(t,e,n,i){return e+i}),t.length&&!/\d$/.test(e[0])&&(e[0]=e[0]+"0"),e.length>1&&(e[1]=e[1].replace(/0*$/,""),e[1].length||(e.length=1)),this._insertThousandsSeparators(e.join(this.radix))}},{key:"_padFractionalZeros",value:function(t){if(!t)return t;var e=t.split(this.radix);return e.length<2&&e.push(""),e[1]=e[1].padEnd(this.scale,"0"),e.join(this.radix)}},{key:"unmaskedValue",get:function(){return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix,".")},set:function(t){p(s(i.prototype),"unmaskedValue",t.replace(".",this.radix),this,!0)}},{key:"typedValue",get:function(){return Number(this.unmaskedValue)},set:function(t){p(s(i.prototype),"unmaskedValue",String(t),this,!0)}},{key:"number",get:function(){return this.typedValue},set:function(t){this.typedValue=t}},{key:"allowNegative",get:function(){return this.signed||null!=this.min&&this.min<0||null!=this.max&&this.max<0}},{key:"typedValueEquals",value:function(t){return(c(s(i.prototype),"typedValueEquals",this).call(this,t)||i.EMPTY_VALUES.includes(t)&&i.EMPTY_VALUES.includes(this.typedValue))&&!(0===t&&""===this.value)}}]),i}(x);Y.DEFAULTS={radix:",",thousandsSeparator:"",mapToRadix:["."],scale:2,signed:!1,normalizeZeros:!0,padFractionalZeros:!1},Y.EMPTY_VALUES=[].concat(function(t){if(Array.isArray(t))return g(t)}(k=x.EMPTY_VALUES)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(k)||v(k)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[0]),A.MaskedNumber=Y;var Z=function(t){u(i,t);var e=l(i);function i(){return n(this,i),e.apply(this,arguments)}return a(i,[{key:"_update",value:function(t){t.mask&&(t.validate=t.mask),c(s(i.prototype),"_update",this).call(this,t)}}]),i}(x);A.MaskedFunction=Z;var J=["compiledMasks","currentMaskRef","currentMask"],W=function(t){u(i,t);var e=l(i);function i(t){var a;return n(this,i),(a=e.call(this,Object.assign({},i.DEFAULTS,t))).currentMask=null,a}return a(i,[{key:"_update",value:function(t){c(s(i.prototype),"_update",this).call(this,t),"mask"in t&&(this.compiledMasks=Array.isArray(t.mask)?t.mask.map(function(t){return w(t)}):[])}},{key:"_appendCharRaw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._applyDispatch(t,e);return this.currentMask&&n.aggregate(this.currentMask._appendChar(t,this.currentMaskFlags(e))),n}},{key:"_applyDispatch",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.tail&&null!=e._beforeTailState?e._beforeTailState._value:this.value,i=this.rawInputValue,a=e.tail&&null!=e._beforeTailState?e._beforeTailState._rawInputValue:i,u=i.slice(a.length),s=this.currentMask,r=new m,o=null==s?void 0:s.state;if(this.currentMask=this.doDispatch(t,Object.assign({},e)),this.currentMask){if(this.currentMask!==s){if(this.currentMask.reset(),a){var l=this.currentMask.append(a,{raw:!0});r.tailShift=l.inserted.length-n.length}u&&(r.tailShift+=this.currentMask.append(u,{raw:!0,tail:!0}).tailShift)}else this.currentMask.state=o}return r}},{key:"_appendPlaceholder",value:function(){var t=this._applyDispatch.apply(this,arguments);return this.currentMask&&t.aggregate(this.currentMask._appendPlaceholder()),t}},{key:"_appendEager",value:function(){var t=this._applyDispatch.apply(this,arguments);return this.currentMask&&t.aggregate(this.currentMask._appendEager()),t}},{key:"currentMaskFlags",value:function(t){var e,n;return Object.assign({},t,{_beforeTailState:(null===(e=t._beforeTailState)||void 0===e?void 0:e.currentMaskRef)===this.currentMask&&(null===(n=t._beforeTailState)||void 0===n?void 0:n.currentMask)||t._beforeTailState})}},{key:"doDispatch",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.dispatch(t,this,e)}},{key:"doValidate",value:function(t){return c(s(i.prototype),"doValidate",this).call(this,t)&&(!this.currentMask||this.currentMask.doValidate(this.currentMaskFlags(t)))}},{key:"doPrepare",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=f(b(c(s(i.prototype),"doPrepare",this).call(this,t,e)),2),a=n[0],u=n[1];if(this.currentMask){var r,o=f(b(c(s(i.prototype),"doPrepare",this).call(this,a,this.currentMaskFlags(e))),2);a=o[0],r=o[1],u=u.aggregate(r)}return[a,u]}},{key:"reset",value:function(){var t;null===(t=this.currentMask)||void 0===t||t.reset(),this.compiledMasks.forEach(function(t){return t.reset()})}},{key:"value",get:function(){return this.currentMask?this.currentMask.value:""},set:function(t){p(s(i.prototype),"value",t,this,!0)}},{key:"unmaskedValue",get:function(){return this.currentMask?this.currentMask.unmaskedValue:""},set:function(t){p(s(i.prototype),"unmaskedValue",t,this,!0)}},{key:"typedValue",get:function(){return this.currentMask?this.currentMask.typedValue:""},set:function(t){var e=String(t);this.currentMask&&(this.currentMask.typedValue=t,e=this.currentMask.unmaskedValue),this.unmaskedValue=e}},{key:"isComplete",get:function(){var t;return!!(null===(t=this.currentMask)||void 0===t?void 0:t.isComplete)}},{key:"isFilled",get:function(){var t;return!!(null===(t=this.currentMask)||void 0===t?void 0:t.isFilled)}},{key:"remove",value:function(){var t,e=new m;return this.currentMask&&e.aggregate((t=this.currentMask).remove.apply(t,arguments)).aggregate(this._applyDispatch()),e}},{key:"state",get:function(){var t;return Object.assign({},c(s(i.prototype),"state",this),{_rawInputValue:this.rawInputValue,compiledMasks:this.compiledMasks.map(function(t){return t.state}),currentMaskRef:this.currentMask,currentMask:null===(t=this.currentMask)||void 0===t?void 0:t.state})},set:function(t){var e=t.compiledMasks,n=t.currentMaskRef,a=t.currentMask,u=o(t,J);this.compiledMasks.forEach(function(t,n){return t.state=e[n]}),null!=n&&(this.currentMask=n,this.currentMask.state=a),p(s(i.prototype),"state",u,this,!0)}},{key:"extractInput",value:function(){var t;return this.currentMask?(t=this.currentMask).extractInput.apply(t,arguments):""}},{key:"extractTail",value:function(){for(var t,e,n=arguments.length,a=Array(n),u=0;u<n;u++)a[u]=arguments[u];return this.currentMask?(t=this.currentMask).extractTail.apply(t,a):(e=c(s(i.prototype),"extractTail",this)).call.apply(e,[this].concat(a))}},{key:"doCommit",value:function(){this.currentMask&&this.currentMask.doCommit(),c(s(i.prototype),"doCommit",this).call(this)}},{key:"nearestInputPos",value:function(){for(var t,e,n=arguments.length,a=Array(n),u=0;u<n;u++)a[u]=arguments[u];return this.currentMask?(t=this.currentMask).nearestInputPos.apply(t,a):(e=c(s(i.prototype),"nearestInputPos",this)).call.apply(e,[this].concat(a))}},{key:"overwrite",get:function(){return this.currentMask?this.currentMask.overwrite:c(s(i.prototype),"overwrite",this)},set:function(t){console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings')}},{key:"eager",get:function(){return this.currentMask?this.currentMask.eager:c(s(i.prototype),"eager",this)},set:function(t){console.warn('"eager" option is not available in dynamic mask, use this option in siblings')}},{key:"maskEquals",value:function(t){return Array.isArray(t)&&this.compiledMasks.every(function(e,n){var i;return e.maskEquals(null===(i=t[n])||void 0===i?void 0:i.mask)})}},{key:"typedValueEquals",value:function(t){var e;return!!(null===(e=this.currentMask)||void 0===e?void 0:e.typedValueEquals(t))}}]),i}(x);W.DEFAULTS={dispatch:function(t,e,n){if(e.compiledMasks.length){var i=e.rawInputValue,a=e.compiledMasks.map(function(a,u){return a.reset(),a.append(i,{raw:!0}),a.append(t,e.currentMaskFlags(n)),{weight:a.rawInputValue.length,index:u}});return a.sort(function(t,e){return e.weight-t.weight}),e.compiledMasks[a[0].index]}}},A.MaskedDynamic=W;var K={MASKED:"value",UNMASKED:"unmaskedValue",TYPED:"typedValue"};function X(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K.MASKED,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:K.MASKED,i=w(t);return function(t){return i.runIsolated(function(i){return i[e]=t,i[n]})}}function Q(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return X.apply(void 0,n)(t)}A.PIPE_TYPE=K,A.createPipe=X,A.pipe=Q;try{globalThis.IMask=A}catch(t){}t.HTMLContenteditableMaskElement=U,t.HTMLMaskElement=H,t.InputMask=z,t.MaskElement=$,t.Masked=x,t.MaskedDate=N,t.MaskedDynamic=W,t.MaskedEnum=G,t.MaskedFunction=Z,t.MaskedNumber=Y,t.MaskedPattern=L,t.MaskedRange=j,t.MaskedRegExp=R,t.PIPE_TYPE=K,t.createMask=w,t.createPipe=X,t.default=A,t.pipe=Q,Object.defineProperty(t,"__esModule",{value:!0})}(e);let n="@publicChat@chatId",i="@publicChat@chatMessages";function a(){let t=localStorage.getItem(i);return t?JSON.parse(t):null}function u(t){localStorage.setItem(i,JSON.stringify(t))}function s(t){let e=a();if(!e){u(e=[t]);return}return e.push(t),u(e),e}function r(){return localStorage.getItem(n)}let o={"Company-Slug":"need","Content-Type":"application/json"};async function l(t,e={}){try{let n=await fetch("https://api.chat.needtech.cc/graphql",{body:JSON.stringify({query:t,variables:e}),cache:"no-cache",credentials:"same-origin",headers:o,method:"POST",mode:"cors",redirect:"follow",referrerPolicy:"no-referrer"});return n.json()}catch(t){console.error(t)}}let h={...o,isPublic:!0},c=({cpf:t,departmentId:e,name:n})=>`
  mutation {
    startAPIChat(
      client: {
        identification: "${t}"
        name: "${n}"
      }
      departmentId: "${e}"
    ) {
      chatId
      defaultMessage {
        id
        createdAt
        subject
        text
      }
    }
  }
`,d="#A4BCD6BF",p="#004d34",f={dark:"#A4BCD6",light:"#D8E4F1"},v="#FFFFFF",g="#283443",k=`
  #public-chat {
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 50%;
    bottom: 10px;
    box-shadow: 0px 0px 5px 0px ${d};
    cursor: pointer;
    display: flex;
    height: 70px;
    justify-content: center;
    padding: 0;
    position: fixed;
    right: 10px;
    width: 70px;
    z-index: 99999;
  }
`,m=`
  #public-chat {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;

    bottom: 10px;
    position: fixed;
    right: 10px;
    z-index: 99999;

    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px ${d};
    cursor: default;

    height: 500px;
    padding: 10px;
    width: 350px;
  }

  #public-chat .chat {
    background-color: ${f.light};
    border-radius: 5px;

    display: grid;
    grid-template-rows: 1fr 50px;

    height: calc(100% - 10px);
    width: 100%;
  }

  #public-chat .chat #messages {
    display: flex;
    flex-direction: column-reverse;
    gap: 5px;
    padding: 10px;

    height: 100%;
    overflow-y: auto;
  }

  #public-chat .chat #messages .message {
    display: flex;
    width: 100%;
  }

  #public-chat .chat #messages .message.admin,
  #public-chat .chat #messages .message.bot {
    flex-direction: row;
  }

  #public-chat .chat #messages .message.client {
    flex-direction: row-reverse;
  }

  #public-chat .chat #messages .message > div {
    background-color: ${f.dark};
    border-radius: 10px;
    max-width: 65%;
    padding: 10px;
  }

  #public-chat .chat #messages .message > div p {
    color: #FFFFFF;
  }

  #public-chat .chat form {
    background-color: ${f.dark};
    border-radius: 0 0 5px 5px;
    display: grid;
    grid-template-columns: 1fr 40px;
    gap: 5px;
    padding: 5px;
  }

  #public-chat .chat form input {
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
  }

  #public-chat .chat form button {
    background-color: transparent;
    border: none;
    width: 40px;
  }
`,y=`
  #public-chat {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;

    bottom: 10px;
    position: fixed;
    right: 10px;
    z-index: 99999;

    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px ${d};
    cursor: default;

    height: 500px;
    padding: 25px;
    width: 350px;
  }

  .public-chat-description {
    color: ${g};
    font-weight: 600;
    text-align: center;
  }

  #public-chat form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }

  #public-chat form section {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0;
    width: 100%;
  }

  #public-chat form section label {
    color: ${g};
    font-size: 14px;
    font-weight: 600;
  }

  #public-chat form section div {
    align-items: center;
    background-color: ${f.dark};
    border-radius: 10px;
    display: flex;
    height: 40px;
    justify-content: space-between;
    padding: 15px;
    width: 100%;
  }

  #public-chat form section select {
    background: url(https://i.ibb.co/Jvs5jB6/Dropdown-Arrow.png) no-repeat;
    background-position: right 10px top 7.5px;
    background-size: 25px;
    align-items: center;
    background-color: ${f.dark};
    border-radius: 10px;
    color: ${v};
    display: flex;
    font-weight: 500;
    height: 40px;
    justify-content: space-between;
    line-height: 20px;
    padding: 10px;
    width: 100%;
    -moz-appearance: none; 
    -webkit-appearance: none; 
    appearance: none;
  }

  #public-chat form section select option {
    color: ${v};
    font-weight: 500;
  }

  #public-chat form  section div input {
    background-color: transparent;
    border: none;
    color: ${v};
    font-weight: 500;
    outline: none;
  }

  #public-chat form  section div input::placeholder {
    color: ${v};
    opacity: 0.5;
  }

  #public-chat form button {
    background-color: ${p};
    border: none;
    border-radius: 10px;
    color: #FFFFFF;
    font-weight: 600;
    height: 40px;
    margin-top: 10px;
    width: 100%;
  }
`,C=t=>`
  <svg
    width=30
    height=30
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1.66669 17.5L19.1667 10L1.66669 2.5V8.33333L14.1667 10L1.66669 11.6667V17.5Z'
      fill=${t}
    />
  </svg>
`,_=({chatId:t})=>`
  query {
    publicChatMessages(chatId: "${t}") {
      data {
        id
        adminId
        chatId
        createdAt
        subject
        text
        type
        waMessageId
        waMessageDateTime
        wppMediaId
        file {
          id
          name
          url
          type
        }
        subscriptionExtraData {
          chatWasClosed
        }
      }
    }
  }
`,b=({chatId:t})=>`
  subscription {
    messageAdded(chatId: "${t}") {
      id
      adminId
      chatId
      subject
      text
      type
      waMessageDateTime
      waMessageId
      createdAt
      deletedAt
      updatedAt
      file {
        id
        name
        url
        type
      }
      subscriptionExtraData {
        chatWasClosed
      }
    }
  }
`,F=({chatId:t,text:e})=>`
  mutation {
    sendAPIClientMessage(
      chatId: "${t}"
      text: "${e}"
    ) {
      success
    }
  }
`;async function E({initialMessages:t=null,section:e}){await A({initialMessages:t,section:e}),await w(e)}async function A({initialMessages:t=null,section:e}){let n=t;if(!n){let t=r(),e=_({chatId:t}),i=null;try{i=await l(e);let t=i?.errors?.[0]?.message==="CHAT_ALREADY_CLOSED",a=i?.errors?.[0]?.message==="CHAT_IS_NOT_PUBLIC";if(t||a){await B();return}n=i?.data?.publicChatMessages.data.sort().reverse()}catch(t){console.error(t)}i?.data||(n=a())}e.innerHTML=`
    <style type='text/css'>${m}</style>
    
    <div class='chat'>
      <div id='messages'>
        ${await x(n)}
      </div>

      <form id='send-message-form'>
        <input
          name='message'
          placeholder='Digite aqui...'
          type='text'
        >
        <button>${C(f.light)}</button>
      </form>
    </div>
  `,await S()}async function x(t){let e="";return t?.slice()?.reverse()?.forEach(t=>{e+=`
        <div class='message ${"CLIENT"===t.subject?"client":"admin"}'
        >
          <div><p>${t.text}</p></div>
        </div>
      `}),e}async function S(){let t=document.getElementById("send-message-form");t.addEventListener("submit",async e=>{e.preventDefault();let n=e.target.message.value,i=r(),a=F({chatId:i,text:n}),u=await l(a);u?.data?.sendAPIClientMessage?.success&&t.reset()})}async function w(t){let e=r(),n=b({chatId:e}),i=function(){let t=new WebSocket("wss://api.chat.needtech.cc/graphql","graphql-ws");return t.onopen=()=>{let e=JSON.stringify({payload:{...h},type:"connection_init"});t.send(e)},t}();i.onmessage=async e=>{let u="string"==typeof e.data?JSON.parse(e.data):e.data;if("connection_ack"===u.type){!function(){let t=JSON.stringify({id:1,payload:{query:n,variables:{}},type:"start"});try{i.send(t)}catch(t){console.error("error",t)}}();return}if("message"===e.type&&e.data){let n=JSON.parse(e.data);n?.payload?.data?.messageAdded&&s(n.payload.data.messageAdded);let i=a();if(await A({initialMessages:i,section:t}),n?.payload?.data?.messageAdded?.subscriptionExtraData?.chatWasClosed){let t=document.getElementById("send-message-form");t.setAttribute("style","display: none"),setTimeout(async()=>{await B()},1e4)}}},i.onerror=t=>{console.error("Error:",t)},i.onclose=async()=>{let e=r(),n=a();e&&n&&w(t)}}async function B(){P=!1,V=!1,localStorage.removeItem(i),localStorage.removeItem(n),await void L()}let D=t=>`
  <svg
    width=30
    height=30
    viewBox='0 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.75 23.75V6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H23.75C24.413 3.75 25.0489 4.01339 25.5178 4.48223C25.9866 4.95107 26.25 5.58696 26.25 6.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75ZM14.9891 7C17.7836 7 19.2698 7.82976 19.6889 8.10871C19.78 8.14632 19.8579 8.2109 19.9128 8.29417C19.9677 8.37743 19.997 8.47557 19.997 8.576C19.9963 8.64305 19.9826 8.70928 19.9568 8.77091C19.931 8.83254 19.8935 8.88834 19.8465 8.93512C19.7996 8.9819 19.744 9.01873 19.6831 9.0435C19.6222 9.06827 19.5571 9.0805 19.4916 9.07947C19.382 9.0804 19.2751 9.04479 19.1871 8.97803L19.1813 8.97406C19.0836 8.90664 17.7855 8.01065 14.9901 8.01065C12.0961 8.01065 10.8138 8.97431 10.7996 8.98513C10.7135 9.04648 10.611 9.0794 10.5061 9.07947C10.4406 9.08059 10.3755 9.06848 10.3146 9.04383C10.2537 9.01918 10.1982 8.98249 10.1512 8.93584C10.1042 8.8892 10.0666 8.83352 10.0407 8.77201C10.0147 8.71049 10.0009 8.64434 10 8.57735C10.0002 8.50589 10.0154 8.4353 10.0444 8.37029C10.0734 8.30528 10.1156 8.24734 10.1683 8.20034C10.171 8.20011 10.1736 8.19891 10.1755 8.19696C10.1942 8.17915 10.2146 8.16329 10.2363 8.14962C10.5659 7.91666 12.0557 7 14.9891 7ZM8.51391 13.3029C8.4231 13.3037 8.33368 13.2805 8.25474 13.2357C8.19685 13.2031 8.14602 13.1594 8.10524 13.107C8.06446 13.0547 8.03454 12.9947 8.01724 12.9306C7.99994 12.8665 7.9956 12.7997 8.00448 12.7339C8.01336 12.6681 8.03528 12.6048 8.06895 12.5476C8.71788 11.4654 10.6923 8.93939 15.0005 8.93939C16.8676 8.93939 18.505 9.42939 19.8652 10.3952C20.9846 11.1879 21.612 12.0852 21.9109 12.5173C21.9488 12.5718 21.9754 12.6333 21.9892 12.6982C22.003 12.7631 22.0036 12.8301 21.991 12.8953C21.9785 12.9604 21.953 13.0224 21.9161 13.0776C21.8793 13.1327 21.8317 13.18 21.7763 13.2165C21.663 13.2913 21.525 13.3191 21.3915 13.294C21.2581 13.2689 21.1397 13.1928 21.0614 13.082C20.5205 12.3048 18.8712 9.9399 15.0005 9.9399C11.2224 9.9399 9.51424 12.1161 8.95786 13.0494C8.91316 13.1273 8.84844 13.1919 8.7704 13.2365C8.69235 13.281 8.60381 13.304 8.51391 13.3029ZM16.9991 22.9858C17.041 22.9957 17.0841 23.0005 17.1272 23C17.2404 23 17.3506 22.964 17.4408 22.8973C17.5311 22.8306 17.5965 22.737 17.6271 22.6306C17.6434 22.5676 17.6466 22.5021 17.6367 22.4379C17.6268 22.3737 17.6039 22.312 17.5693 22.2565C17.5347 22.201 17.4892 22.1527 17.4353 22.1145C17.3814 22.0763 17.3203 22.0489 17.2555 22.0339C14.7483 21.428 13.7015 18.924 13.6211 18.7263C13.5304 18.4055 13.4727 18.0767 13.4488 17.7448C13.4123 17.2684 13.438 16.6117 13.7673 16.1916C14.0089 15.8846 14.397 15.7363 14.9497 15.7363C15.956 15.7363 16.1246 16.2163 16.388 17.212C16.6441 18.1827 16.9954 19.5134 18.95 19.609C19.7003 19.6442 20.3776 19.3194 20.8532 18.698C21.567 17.7662 21.7024 16.3399 21.1974 15.0691C20.8002 14.0737 20.0408 13.0781 19.1111 12.3367C17.9105 11.3835 16.4722 10.8788 14.9497 10.8788C11.6554 10.8788 9.46602 13.0533 8.75662 15.2104C8.10546 17.2008 8.89484 20.088 8.92891 20.2126C8.96665 20.34 9.05406 20.4479 9.17239 20.5131C9.29073 20.5784 9.43057 20.5959 9.56196 20.5618C9.62699 20.5466 9.68825 20.5189 9.74211 20.4802C9.79597 20.4415 9.84135 20.3927 9.87558 20.3367C9.9098 20.2807 9.93217 20.2185 9.94137 20.1539C9.95058 20.0893 9.94642 20.0235 9.92916 19.9605C9.92206 19.9358 9.1826 17.2282 9.7464 15.5057C10.0504 14.5805 10.6818 13.6803 11.4787 13.0428C12.4414 12.2731 13.642 11.8636 14.9486 11.8636C18.0095 11.8636 19.7455 14.1887 20.2347 15.422C20.6154 16.3774 20.5275 17.4598 20.0225 18.1237C19.8357 18.3672 19.5064 18.6532 19.005 18.6284C17.8636 18.5718 17.6653 18.0212 17.3907 16.9728L17.3897 16.9691C17.2593 16.4668 17.124 15.9458 16.787 15.5231C16.3769 15.0042 15.7803 14.7535 14.9534 14.7535C14.0639 14.7535 13.3903 15.0408 12.9475 15.6009C11.9924 16.8151 12.5965 18.8784 12.6352 19.0108L12.6363 19.0146L12.6438 19.0426C12.6914 19.1698 13.8626 22.228 16.9991 22.9858ZM13.1562 23C13.0858 23.0001 13.016 22.9862 12.9512 22.9591C12.8863 22.932 12.8276 22.8921 12.7786 22.842C11.5212 21.5341 10.81 20.0716 10.5423 18.2428V18.2331C10.3921 17.0224 10.612 15.3083 11.6897 14.1298C12.4852 13.2602 13.6035 12.8182 15.0077 12.8182C16.6684 12.8182 17.9735 13.5835 18.7873 15.0279C19.3777 16.0773 19.4948 17.123 19.4978 17.1659C19.504 17.2321 19.497 17.2988 19.4771 17.3623C19.4572 17.4258 19.4249 17.4848 19.382 17.5359C19.3391 17.587 19.2865 17.6292 19.2271 17.6601C19.1677 17.691 19.1027 17.7099 19.036 17.7159C18.9012 17.7304 18.7661 17.6918 18.6598 17.6084C18.5535 17.525 18.4845 17.4035 18.4678 17.2702C18.3787 16.6428 18.1739 16.037 17.8635 15.483C17.2328 14.38 16.2732 13.8193 15.004 13.8193C13.9077 13.8193 13.0499 14.1462 12.4598 14.7918C11.6092 15.7225 11.4447 17.1562 11.5615 18.1046C11.7959 19.7218 12.4229 21.0082 13.5301 22.1579C13.5763 22.2055 13.6124 22.2619 13.6361 22.3236C13.6599 22.3854 13.671 22.4512 13.6686 22.5173C13.6662 22.5833 13.6504 22.6482 13.6222 22.7081C13.594 22.768 13.5539 22.8216 13.5044 22.8659C13.4089 22.9516 13.285 22.9993 13.1562 23ZM16.1216 20.6362C16.8524 21.2411 17.7657 21.5455 18.84 21.5455C19.0782 21.5453 19.3162 21.5311 19.5527 21.5029C19.6179 21.4966 19.6813 21.4772 19.739 21.4456C19.7968 21.4141 19.8478 21.3711 19.8892 21.3192C19.9306 21.2672 19.9614 21.2074 19.9799 21.1431C19.9984 21.0789 20.0042 21.0115 19.997 20.9449C19.9803 20.8102 19.9122 20.6876 19.8074 20.6041C19.7027 20.5206 19.5699 20.4829 19.438 20.4993C18.335 20.6261 17.4398 20.409 16.7701 19.8619C15.664 18.9545 15.4987 17.394 15.4884 17.2966C15.4881 17.2943 15.488 17.2928 15.4879 17.2922C15.4775 17.1557 15.4146 17.0289 15.3129 16.9399C15.2112 16.8508 15.0791 16.8067 14.9456 16.8173C14.8121 16.8279 14.6882 16.8923 14.6012 16.9963C14.5141 17.1003 14.471 17.2354 14.4813 17.372L14.4815 17.3734C14.4903 17.4749 14.6606 19.4322 16.1216 20.6362Z'
      fill=${t}
    />
  </svg>
`,M=t=>`
  <svg
    width=30
    height=30
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10 3.33333C10.8841 3.33333 11.7319 3.68452 12.357 4.30964C12.9822 4.93476 13.3333 5.78261 13.3333 6.66666C13.3333 7.55072 12.9822 8.39856 12.357 9.02368C11.7319 9.64881 10.8841 9.99999 10 9.99999C9.11595 9.99999 8.26811 9.64881 7.64299 9.02368C7.01787 8.39856 6.66668 7.55072 6.66668 6.66666C6.66668 5.78261 7.01787 4.93476 7.64299 4.30964C8.26811 3.68452 9.11595 3.33333 10 3.33333ZM10 11.6667C13.6833 11.6667 16.6667 13.1583 16.6667 15V16.6667H3.33334V15C3.33334 13.1583 6.31668 11.6667 10 11.6667Z'
      fill=${t}
    />
  </svg>
`,T=()=>`
  query {
    departments (
      where: {
        deletedAt: null
      }
    ) {
      id
      displayInBot
      name
    }
  }
`;async function I({section:t,submitForm:n}){let i=await O();t.innerHTML=`
    <style type='text/css'>${y}</style>
    <script src='https://unpkg.com/imask'></script>

    <p class='public-chat-description'>Ol\xe1. Para iniciar o atendimento via chat preencha o formul\xe1rio abaixo.</p>
    ${i}
  `,function(t){let n=document.getElementsByName("cpf")[0];n.addEventListener("keyup",t=>{let i=t.target.value,a=i.replace(/\D/g,""),u=function(t,n){let i=(e&&e.__esModule?e.default:e).createMask({mask:t});return i.resolve(String(n))}("000.000.000-00",a);n.value=u});let i=document.getElementById("public-chat-form");i.addEventListener("submit",e=>{e.preventDefault();let n={};n[e.target.cpf.name]=e.target.cpf.value,n[e.target.department.name]=e.target.department.value,n[e.target.name.name]=e.target.name.value,t(n)})}(n),t.setAttribute("style","")}async function O(){let t=T(),e=await l(t),n="";return e?.data?.departments?.forEach(t=>{t?.displayInBot&&(n+=`
      <option value="${t.id}">${t.name}</option>
    `)}),`
    <form id='public-chat-form'>
      <section>
        <label for='name'>
          Nome:
        </label>
        <div>
          <input
            name='name'
            placeholder='Nome'
            type='text'
          >
          ${M("#FFFFFF")}
        </div>
      </section>
          
      <section>
        <label for='cpf'>
          CPF:
        </label>
        <div>
          <input
            name='cpf'
            placeholder='CPF'
            type='text'
          >
          ${D("#FFFFFF")}
        </div>
      </section>
          
      <section>
        <label for='department'>
          Setor:
        </label>
        <select name="department">
          <option value="" disabled selected>Escolha um setor...</option>
          ${n}
        </select>
      </section>

      <button type='submit'>Enviar</button>
    </form>
  `}let P=!1,R=null,V=!1;async function L(){document&&(R=document.getElementById("public-chat"),await j(),R.addEventListener("click",()=>{P||(P=!P,j())}))}async function j(){let e=r();if(e&&(P=!0,V=!0),!P){R.innerHTML=`
    <style type='text/css'>${k}</style>
    ${t(p)}
  `;return}if(!V){R=document.getElementById("public-chat"),await I({section:R,submitForm:N});return}E({section:R})}async function N(t){let e=c({cpf:t.cpf.replace(/\D/g,""),departmentId:t.department,name:t.name}),i=await l(e);if(V=!0,!i?.data){P=!1,V=!1;return}let a=i.data.startAPIChat.chatId;localStorage.setItem(n,a);let u=i.data.startAPIChat.defaultMessage;s(u),E({initialMessages:[u],section:R})}L()})();
//# sourceMappingURL=index.js.map
