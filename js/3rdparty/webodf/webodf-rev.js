// Input 0
var webodf_version="0.4.2-2090-g8afc258";
// Input 1
function Runtime(){}Runtime.prototype.getVariable=function(l){};Runtime.prototype.toJson=function(l){};Runtime.prototype.fromJson=function(l){};Runtime.prototype.byteArrayFromString=function(l,h){};Runtime.prototype.byteArrayToString=function(l,h){};Runtime.prototype.read=function(l,h,b,k){};Runtime.prototype.readFile=function(l,h,b){};Runtime.prototype.readFileSync=function(l,h){};Runtime.prototype.loadXML=function(l,h){};Runtime.prototype.writeFile=function(l,h,b){};
Runtime.prototype.isFile=function(l,h){};Runtime.prototype.getFileSize=function(l,h){};Runtime.prototype.deleteFile=function(l,h){};Runtime.prototype.log=function(l,h){};Runtime.prototype.setTimeout=function(l,h){};Runtime.prototype.clearTimeout=function(l){};Runtime.prototype.libraryPaths=function(){};Runtime.prototype.currentDirectory=function(){};Runtime.prototype.setCurrentDirectory=function(l){};Runtime.prototype.type=function(){};Runtime.prototype.getDOMImplementation=function(){};
Runtime.prototype.parseXML=function(l){};Runtime.prototype.exit=function(l){};Runtime.prototype.getWindow=function(){};Runtime.prototype.requestAnimationFrame=function(l){};Runtime.prototype.cancelAnimationFrame=function(l){};Runtime.prototype.assert=function(l,h,b){};var IS_COMPILED_CODE=!0;
Runtime.byteArrayToString=function(l,h){function b(b){var d="",e,q=b.length;for(e=0;e<q;e+=1)d+=String.fromCharCode(b[e]&255);return d}function k(b){var d="",e,q=b.length,g=[],r,a,c,f;for(e=0;e<q;e+=1)r=b[e],128>r?g.push(r):(e+=1,a=b[e],194<=r&&224>r?g.push((r&31)<<6|a&63):(e+=1,c=b[e],224<=r&&240>r?g.push((r&15)<<12|(a&63)<<6|c&63):(e+=1,f=b[e],240<=r&&245>r&&(r=(r&7)<<18|(a&63)<<12|(c&63)<<6|f&63,r-=65536,g.push((r>>10)+55296,(r&1023)+56320))))),1E3===g.length&&(d+=String.fromCharCode.apply(null,
g),g.length=0);return d+String.fromCharCode.apply(null,g)}var d;"utf8"===h?d=k(l):("binary"!==h&&this.log("Unsupported encoding: "+h),d=b(l));return d};Runtime.getVariable=function(l){try{return eval(l)}catch(h){}};Runtime.toJson=function(l){return JSON.stringify(l)};Runtime.fromJson=function(l){return JSON.parse(l)};Runtime.getFunctionName=function(l){return void 0===l.name?(l=/function\s+(\w+)/.exec(l))&&l[1]:l.name};
function BrowserRuntime(l){function h(b){var a=b.length,c,f,m=0;for(c=0;c<a;c+=1)f=b.charCodeAt(c),m+=1+(128<f)+(2048<f),55040<f&&57344>f&&(m+=1,c+=1);return m}function b(b,a,c){var f=b.length,m,g;a=new Uint8Array(new ArrayBuffer(a));c?(a[0]=239,a[1]=187,a[2]=191,g=3):g=0;for(c=0;c<f;c+=1)m=b.charCodeAt(c),128>m?(a[g]=m,g+=1):2048>m?(a[g]=192|m>>>6,a[g+1]=128|m&63,g+=2):55040>=m||57344<=m?(a[g]=224|m>>>12&15,a[g+1]=128|m>>>6&63,a[g+2]=128|m&63,g+=3):(c+=1,m=(m-55296<<10|b.charCodeAt(c)-56320)+65536,
a[g]=240|m>>>18&7,a[g+1]=128|m>>>12&63,a[g+2]=128|m>>>6&63,a[g+3]=128|m&63,g+=4);return a}function k(b){var a=b.length,c=new Uint8Array(new ArrayBuffer(a)),f;for(f=0;f<a;f+=1)c[f]=b.charCodeAt(f)&255;return c}function d(b,a){var c,f,m;void 0!==a?m=b:a=b;l?(f=l.ownerDocument,m&&(c=f.createElement("span"),c.className=m,c.appendChild(f.createTextNode(m)),l.appendChild(c),l.appendChild(f.createTextNode(" "))),c=f.createElement("span"),0<a.length&&"<"===a[0]?c.innerHTML=a:c.appendChild(f.createTextNode(a)),
l.appendChild(c),l.appendChild(f.createElement("br"))):console&&console.log(a);"alert"===m&&alert(a)}function p(r,a,c){if(0!==c.status||c.responseText)if(200===c.status||0===c.status){if(c.response&&"string"!==typeof c.response)"binary"===a?(c=c.response,c=new Uint8Array(c)):c=String(c.response);else if("binary"===a)if(null!==c.responseBody&&"undefined"!==String(typeof VBArray)){c=(new VBArray(c.responseBody)).toArray();var f=c.length,m=new Uint8Array(new ArrayBuffer(f));for(a=0;a<f;a+=1)m[a]=c[a];
c=m}else{(a=c.getResponseHeader("Content-Length"))&&(a=parseInt(a,10));if(a&&a!==c.responseText.length)a:{var f=c.responseText,m=!1,e=h(f);if("number"===typeof a){if(a!==e&&a!==e+3){f=void 0;break a}m=e+3===a;e=a}f=b(f,e,m)}void 0===f&&(f=k(c.responseText));c=f}else c=c.responseText;g[r]=c;r={err:null,data:c}}else r={err:c.responseText||c.statusText,data:null};else r={err:"File "+r+" is empty.",data:null};return r}function n(b,a,c){var f=new XMLHttpRequest;f.open("GET",b,c);f.overrideMimeType&&("binary"!==
a?f.overrideMimeType("text/plain; charset="+a):f.overrideMimeType("text/plain; charset=x-user-defined"));return f}function e(b,a,c){function f(){var f;4===m.readyState&&(f=p(b,a,m),c(f.err,f.data))}if(g.hasOwnProperty(b))c(null,g[b]);else{var m=n(b,a,!0);m.onreadystatechange=f;try{m.send(null)}catch(e){c(e.message,null)}}}var q=this,g={};this.byteArrayFromString=function(g,a){var c;"utf8"===a?c=b(g,h(g),!1):("binary"!==a&&q.log("unknown encoding: "+a),c=k(g));return c};this.byteArrayToString=Runtime.byteArrayToString;
this.getVariable=Runtime.getVariable;this.fromJson=Runtime.fromJson;this.toJson=Runtime.toJson;this.readFile=e;this.read=function(b,a,c,f){e(b,"binary",function(m,b){var g=null;if(b){if("string"===typeof b)throw"This should not happen.";g=b.subarray(a,a+c)}f(m,g)})};this.readFileSync=function(b,a){var c=n(b,a,!1),f;try{c.send(null);f=p(b,a,c);if(f.err)throw f.err;if(null===f.data)throw"No data read from "+b+".";}catch(m){throw m;}return f.data};this.writeFile=function(b,a,c){g[b]=a;var f=new XMLHttpRequest,
m;f.open("PUT",b,!0);f.onreadystatechange=function(){4===f.readyState&&(0!==f.status||f.responseText?200<=f.status&&300>f.status||0===f.status?c(null):c("Status "+String(f.status)+": "+f.responseText||f.statusText):c("File "+b+" is empty."))};m=a.buffer&&!f.sendAsBinary?a.buffer:q.byteArrayToString(a,"binary");try{f.sendAsBinary?f.sendAsBinary(m):f.send(m)}catch(e){q.log("HUH? "+e+" "+a),c(e.message)}};this.deleteFile=function(b,a){delete g[b];var c=new XMLHttpRequest;c.open("DELETE",b,!0);c.onreadystatechange=
function(){4===c.readyState&&(200>c.status&&300<=c.status?a(c.responseText):a(null))};c.send(null)};this.loadXML=function(b,a){var c=new XMLHttpRequest;c.open("GET",b,!0);c.overrideMimeType&&c.overrideMimeType("text/xml");c.onreadystatechange=function(){4===c.readyState&&(0!==c.status||c.responseText?200===c.status||0===c.status?a(null,c.responseXML):a(c.responseText,null):a("File "+b+" is empty.",null))};try{c.send(null)}catch(f){a(f.message,null)}};this.isFile=function(b,a){q.getFileSize(b,function(c){a(-1!==
c)})};this.getFileSize=function(b,a){if(g.hasOwnProperty(b)&&"string"!==typeof g[b])a(g[b].length);else{var c=new XMLHttpRequest;c.open("HEAD",b,!0);c.onreadystatechange=function(){if(4===c.readyState){var f=c.getResponseHeader("Content-Length");f?a(parseInt(f,10)):e(b,"binary",function(c,f){c?a(-1):a(f.length)})}};c.send(null)}};this.log=d;this.assert=function(b,a,c){if(!b)throw d("alert","ASSERTION FAILED:\n"+a),c&&c(),a;};this.setTimeout=function(b,a){return setTimeout(function(){b()},a)};this.clearTimeout=
function(b){clearTimeout(b)};this.libraryPaths=function(){return["lib"]};this.setCurrentDirectory=function(){};this.currentDirectory=function(){return""};this.type=function(){return"BrowserRuntime"};this.getDOMImplementation=function(){return window.document.implementation};this.parseXML=function(b){return(new DOMParser).parseFromString(b,"text/xml")};this.exit=function(b){d("Calling exit with code "+String(b)+", but exit() is not implemented.")};this.getWindow=function(){return window};this.requestAnimationFrame=
function(b){var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,c=0;if(a)a.bind(window),c=a(b);else return setTimeout(b,15);return c};this.cancelAnimationFrame=function(b){var a=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.msCancelAnimationFrame;a?(a.bind(window),a(b)):clearTimeout(b)}}
function NodeJSRuntime(){function l(b){var g=b.length,e,a=new Uint8Array(new ArrayBuffer(g));for(e=0;e<g;e+=1)a[e]=b[e];return a}function h(b,g,e){function a(a,f){if(a)return e(a,null);if(!f)return e("No data for "+b+".",null);if("string"===typeof f)return e(a,f);e(a,l(f))}b=d.resolve(p,b);"binary"!==g?k.readFile(b,g,a):k.readFile(b,null,a)}var b=this,k=require("fs"),d=require("path"),p="",n,e;this.byteArrayFromString=function(b,g){var e=new Buffer(b,g),a,c=e.length,f=new Uint8Array(new ArrayBuffer(c));
for(a=0;a<c;a+=1)f[a]=e[a];return f};this.byteArrayToString=Runtime.byteArrayToString;this.getVariable=Runtime.getVariable;this.fromJson=Runtime.fromJson;this.toJson=Runtime.toJson;this.readFile=h;this.loadXML=function(e,g){h(e,"utf-8",function(d,a){if(d)return g(d,null);if(!a)return g("No data for "+e+".",null);g(null,b.parseXML(a))})};this.writeFile=function(b,g,e){g=new Buffer(g);b=d.resolve(p,b);k.writeFile(b,g,"binary",function(a){e(a||null)})};this.deleteFile=function(b,e){b=d.resolve(p,b);
k.unlink(b,e)};this.read=function(b,e,n,a){b=d.resolve(p,b);k.open(b,"r+",666,function(c,f){if(c)a(c,null);else{var m=new Buffer(n);k.read(f,m,0,n,e,function(c){k.close(f);a(c,l(m))})}})};this.readFileSync=function(b,e){var d;d=k.readFileSync(b,"binary"===e?null:e);if(null===d)throw"File "+b+" could not be read.";"binary"===e&&(d=l(d));return d};this.isFile=function(b,e){b=d.resolve(p,b);k.stat(b,function(b,a){e(!b&&a.isFile())})};this.getFileSize=function(b,e){b=d.resolve(p,b);k.stat(b,function(b,
a){b?e(-1):e(a.size)})};this.log=function(b,e){var d;void 0!==e?d=b:e=b;"alert"===d&&process.stderr.write("\n!!!!! ALERT !!!!!\n");process.stderr.write(e+"\n");"alert"===d&&process.stderr.write("!!!!! ALERT !!!!!\n")};this.assert=function(b,e,d){b||(process.stderr.write("ASSERTION FAILED: "+e),d&&d())};this.setTimeout=function(b,e){return setTimeout(function(){b()},e)};this.clearTimeout=function(b){clearTimeout(b)};this.libraryPaths=function(){return[__dirname]};this.setCurrentDirectory=function(b){p=
b};this.currentDirectory=function(){return p};this.type=function(){return"NodeJSRuntime"};this.getDOMImplementation=function(){return e};this.parseXML=function(b){return n.parseFromString(b,"text/xml")};this.exit=process.exit;this.getWindow=function(){return null};this.requestAnimationFrame=function(b){return setTimeout(b,15)};this.cancelAnimationFrame=function(b){clearTimeout(b)};n=new (require("xmldom").DOMParser);e=b.parseXML("<a/>").implementation}
function RhinoRuntime(){function l(b,d){var g;void 0!==d?g=b:d=b;"alert"===g&&print("\n!!!!! ALERT !!!!!");print(d);"alert"===g&&print("!!!!! ALERT !!!!!")}var h=this,b={},k=b.javax.xml.parsers.DocumentBuilderFactory.newInstance(),d,p,n="";k.setValidating(!1);k.setNamespaceAware(!0);k.setExpandEntityReferences(!1);k.setSchema(null);p=b.org.xml.sax.EntityResolver({resolveEntity:function(e,d){var g=new b.java.io.FileReader(d);return new b.org.xml.sax.InputSource(g)}});d=k.newDocumentBuilder();d.setEntityResolver(p);
this.byteArrayFromString=function(b,d){var g,k=b.length,a=new Uint8Array(new ArrayBuffer(k));for(g=0;g<k;g+=1)a[g]=b.charCodeAt(g)&255;return a};this.byteArrayToString=Runtime.byteArrayToString;this.getVariable=Runtime.getVariable;this.fromJson=Runtime.fromJson;this.toJson=Runtime.toJson;this.loadXML=function(e,k){var g=new b.java.io.File(e),n=null;try{n=d.parse(g)}catch(a){return print(a),k(a,null)}k(null,n)};this.readFile=function(e,d,g){n&&(e=n+"/"+e);var k=new b.java.io.File(e),a="binary"===d?
"latin1":d;k.isFile()?((e=readFile(e,a))&&"binary"===d&&(e=h.byteArrayFromString(e,"binary")),g(null,e)):g(e+" is not a file.",null)};this.writeFile=function(e,d,g){n&&(e=n+"/"+e);e=new b.java.io.FileOutputStream(e);var k,a=d.length;for(k=0;k<a;k+=1)e.write(d[k]);e.close();g(null)};this.deleteFile=function(e,d){n&&(e=n+"/"+e);var g=new b.java.io.File(e),k=e+Math.random(),k=new b.java.io.File(k);g.rename(k)?(k.deleteOnExit(),d(null)):d("Could not delete "+e)};this.read=function(e,d,g,k){n&&(e=n+"/"+
e);var a;a=e;var c="binary";(new b.java.io.File(a)).isFile()?("binary"===c&&(c="latin1"),a=readFile(a,c)):a=null;a?k(null,this.byteArrayFromString(a.substring(d,d+g),"binary")):k("Cannot read "+e,null)};this.readFileSync=function(b,d){if(!d)return"";var g=readFile(b,d);if(null===g)throw"File could not be read.";return g};this.isFile=function(e,d){n&&(e=n+"/"+e);var g=new b.java.io.File(e);d(g.isFile())};this.getFileSize=function(e,d){n&&(e=n+"/"+e);var g=new b.java.io.File(e);d(g.length())};this.log=
l;this.assert=function(b,d,g){b||(l("alert","ASSERTION FAILED: "+d),g&&g())};this.setTimeout=function(b){b();return 0};this.clearTimeout=function(){};this.libraryPaths=function(){return["lib"]};this.setCurrentDirectory=function(b){n=b};this.currentDirectory=function(){return n};this.type=function(){return"RhinoRuntime"};this.getDOMImplementation=function(){return d.getDOMImplementation()};this.parseXML=function(e){e=new b.java.io.StringReader(e);e=new b.org.xml.sax.InputSource(e);return d.parse(e)};
this.exit=quit;this.getWindow=function(){return null};this.requestAnimationFrame=function(b){b();return 0};this.cancelAnimationFrame=function(){}}Runtime.create=function(){return"undefined"!==String(typeof window)?new BrowserRuntime(window.document.getElementById("logoutput")):"undefined"!==String(typeof require)?new NodeJSRuntime:new RhinoRuntime};var runtime=Runtime.create(),core={},gui={},xmldom={},odf={},ops={};
(function(){function l(b,d,g){var k=b+"/manifest.json",a,c;runtime.log("Loading manifest: "+k);try{a=runtime.readFileSync(k,"utf-8")}catch(f){if(g)runtime.log("No loadable manifest found.");else throw console.log(String(f)),f;return}g=JSON.parse(a);for(c in g)g.hasOwnProperty(c)&&(d[c]={dir:b,deps:g[c]})}function h(b,d,g){function k(b){if(!f[b]&&!g(b)){if(c[b])throw"Circular dependency detected for "+b+".";c[b]=!0;if(!d[b])throw"Missing dependency information for class "+b+".";var e=d[b],n=e.deps,
p,h=n.length;for(p=0;p<h;p+=1)k(n[p]);c[b]=!1;f[b]=!0;a.push(e.dir+"/"+b.replace(".","/")+".js")}}var a=[],c={},f={};b.forEach(k);return a}function b(b,d){return d=d+("\n//# sourceURL="+b)+("\n//@ sourceURL="+b)}function k(e){var d,g;for(d=0;d<e.length;d+=1)g=runtime.readFileSync(e[d],"utf-8"),g=b(e[d],g),eval(g)}function d(b){b=b.split(".");var d,g=n,k=b.length;for(d=0;d<k;d+=1){if(!g.hasOwnProperty(b[d]))return!1;g=g[b[d]]}return!0}var p,n={core:core,gui:gui,xmldom:xmldom,odf:odf,ops:ops};runtime.loadClasses=
function(b,n){if(IS_COMPILED_CODE||0===b.length)return n&&n();var g;if(!(g=p)){g=[];var r=runtime.libraryPaths(),a;runtime.currentDirectory()&&-1===r.indexOf(runtime.currentDirectory())&&l(runtime.currentDirectory(),g,!0);for(a=0;a<r.length;a+=1)l(r[a],g)}p=g;b=h(b,p,d);if(0===b.length)return n&&n();if("BrowserRuntime"===runtime.type()&&n){g=b;r=document.currentScript||document.documentElement.lastChild;a=document.createDocumentFragment();var c,f;for(f=0;f<g.length;f+=1)c=document.createElement("script"),
c.type="text/javascript",c.charset="utf-8",c.async=!1,c.setAttribute("src",g[f]),a.appendChild(c);n&&(c.onload=n);r.parentNode.insertBefore(a,r)}else k(b),n&&n()};runtime.loadClass=function(b,d){runtime.loadClasses([b],d)}})();(function(){var l=function(h){return h};runtime.getTranslator=function(){return l};runtime.setTranslator=function(h){l=h};runtime.tr=function(h){var b=l(h);return b&&"string"===String(typeof b)?b:h}})();
(function(l){function h(b){if(b.length){var k=b[0];runtime.readFile(k,"utf8",function(d,p){function n(){var b;(b=eval(h))&&runtime.exit(b)}var e="",e=k.lastIndexOf("/"),h=p,e=-1!==e?k.substring(0,e):".";runtime.setCurrentDirectory(e);d?(runtime.log(d),runtime.exit(1)):null===h?(runtime.log("No code found for "+k),runtime.exit(1)):n.apply(null,b)})}}l=l?Array.prototype.slice.call(l):[];"NodeJSRuntime"===runtime.type()?h(process.argv.slice(2)):"RhinoRuntime"===runtime.type()?h(l):h(l.slice(1))})("undefined"!==
String(typeof arguments)&&arguments);
// Input 2
(function(){core.Async=function(){return{forEach:function(l,h,b){function k(d){n!==p&&(d?(n=p,b(d)):(n+=1,n===p&&b(null)))}var d,p=l.length,n=0;for(d=0;d<p;d+=1)h(l[d],k)},destroyAll:function(l,h){function b(k,d){if(d)h(d);else if(k<l.length)l[k](function(d){b(k+1,d)});else h()}b(0,void 0)}}}()})();
// Input 3
function makeBase64(){function l(a){var c,f=a.length,b=new Uint8Array(new ArrayBuffer(f));for(c=0;c<f;c+=1)b[c]=a.charCodeAt(c)&255;return b}function h(a){var c,f="",b,m=a.length-2;for(b=0;b<m;b+=3)c=a[b]<<16|a[b+1]<<8|a[b+2],f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c>>>18],f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c>>>12&63],f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c>>>6&63],f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c&
63];b===m+1?(c=a[b]<<4,f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c>>>6],f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c&63],f+="=="):b===m&&(c=a[b]<<10|a[b+1]<<2,f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c>>>12],f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c>>>6&63],f+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c&63],f+="=");return f}function b(a){a=a.replace(/[^A-Za-z0-9+\/]+/g,
"");var c=a.length,f=new Uint8Array(new ArrayBuffer(3*c)),b=a.length%4,d=0,e,g;for(e=0;e<c;e+=4)g=(m[a.charAt(e)]||0)<<18|(m[a.charAt(e+1)]||0)<<12|(m[a.charAt(e+2)]||0)<<6|(m[a.charAt(e+3)]||0),f[d]=g>>16,f[d+1]=g>>8&255,f[d+2]=g&255,d+=3;c=3*c-[0,0,2,1][b];return f.subarray(0,c)}function k(a){var c,f,b=a.length,m=0,d=new Uint8Array(new ArrayBuffer(3*b));for(c=0;c<b;c+=1)f=a[c],128>f?d[m++]=f:(2048>f?d[m++]=192|f>>>6:(d[m++]=224|f>>>12&15,d[m++]=128|f>>>6&63),d[m++]=128|f&63);return d.subarray(0,
m)}function d(a){var c,f,b,m,d=a.length,e=new Uint8Array(new ArrayBuffer(d)),g=0;for(c=0;c<d;c+=1)f=a[c],128>f?e[g++]=f:(c+=1,b=a[c],224>f?e[g++]=(f&31)<<6|b&63:(c+=1,m=a[c],e[g++]=(f&15)<<12|(b&63)<<6|m&63));return e.subarray(0,g)}function p(a){return h(l(a))}function n(a){return String.fromCharCode.apply(String,b(a))}function e(a){return d(l(a))}function q(a){a=d(a);for(var c="",f=0;f<a.length;)c+=String.fromCharCode.apply(String,a.subarray(f,f+45E3)),f+=45E3;return c}function g(a,c,f){var b,m,
d,e="";for(d=c;d<f;d+=1)c=a.charCodeAt(d)&255,128>c?e+=String.fromCharCode(c):(d+=1,b=a.charCodeAt(d)&255,224>c?e+=String.fromCharCode((c&31)<<6|b&63):(d+=1,m=a.charCodeAt(d)&255,e+=String.fromCharCode((c&15)<<12|(b&63)<<6|m&63)));return e}function r(a,c){function f(){var d=m+1E5;d>a.length&&(d=a.length);b+=g(a,m,d);m=d;d=m===a.length;c(b,d)&&!d&&runtime.setTimeout(f,0)}var b="",m=0;1E5>a.length?c(g(a,0,a.length),!0):("string"!==typeof a&&(a=a.slice()),f())}function a(a){return k(l(a))}function c(a){return String.fromCharCode.apply(String,
k(a))}function f(a){return String.fromCharCode.apply(String,k(l(a)))}var m=function(a){var c={},f,b;f=0;for(b=a.length;f<b;f+=1)c[a.charAt(f)]=f;return c}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),v,w,z=runtime.getWindow(),x,u;z&&z.btoa?(x=z.btoa,v=function(a){return x(f(a))}):(x=p,v=function(c){return h(a(c))});z&&z.atob?(u=z.atob,w=function(a){a=u(a);return g(a,0,a.length)}):(u=n,w=function(a){return q(b(a))});core.Base64=function(){this.convertByteArrayToBase64=this.convertUTF8ArrayToBase64=
h;this.convertBase64ToByteArray=this.convertBase64ToUTF8Array=b;this.convertUTF16ArrayToByteArray=this.convertUTF16ArrayToUTF8Array=k;this.convertByteArrayToUTF16Array=this.convertUTF8ArrayToUTF16Array=d;this.convertUTF8StringToBase64=p;this.convertBase64ToUTF8String=n;this.convertUTF8StringToUTF16Array=e;this.convertByteArrayToUTF16String=this.convertUTF8ArrayToUTF16String=q;this.convertUTF8StringToUTF16String=r;this.convertUTF16StringToByteArray=this.convertUTF16StringToUTF8Array=a;this.convertUTF16ArrayToUTF8String=
c;this.convertUTF16StringToUTF8String=f;this.convertUTF16StringToBase64=v;this.convertBase64ToUTF16String=w;this.fromBase64=n;this.toBase64=p;this.atob=u;this.btoa=x;this.utob=f;this.btou=r;this.encode=v;this.encodeURI=function(a){return v(a).replace(/[+\/]/g,function(a){return"+"===a?"-":"_"}).replace(/\\=+$/,"")};this.decode=function(a){return w(a.replace(/[\-_]/g,function(a){return"-"===a?"+":"/"}))};return this};return core.Base64}core.Base64=makeBase64();
// Input 4
core.ByteArray=function(l){this.pos=0;this.data=l;this.readUInt32LE=function(){this.pos+=4;var h=this.data,b=this.pos;return h[--b]<<24|h[--b]<<16|h[--b]<<8|h[--b]};this.readUInt16LE=function(){this.pos+=2;var h=this.data,b=this.pos;return h[--b]<<8|h[--b]}};
// Input 5
core.ByteArrayWriter=function(l){function h(b){b>d-k&&(d=Math.max(2*d,k+b),b=new Uint8Array(new ArrayBuffer(d)),b.set(p),p=b)}var b=this,k=0,d=1024,p=new Uint8Array(new ArrayBuffer(d));this.appendByteArrayWriter=function(d){b.appendByteArray(d.getByteArray())};this.appendByteArray=function(b){var d=b.length;h(d);p.set(b,k);k+=d};this.appendArray=function(b){var d=b.length;h(d);p.set(b,k);k+=d};this.appendUInt16LE=function(d){b.appendArray([d&255,d>>8&255])};this.appendUInt32LE=function(d){b.appendArray([d&
255,d>>8&255,d>>16&255,d>>24&255])};this.appendString=function(d){b.appendByteArray(runtime.byteArrayFromString(d,l))};this.getLength=function(){return k};this.getByteArray=function(){var b=new Uint8Array(new ArrayBuffer(k));b.set(p.subarray(0,k));return b}};
// Input 6
core.CSSUnits=function(){var l=this,h={"in":1,cm:2.54,mm:25.4,pt:72,pc:12};this.convert=function(b,k,d){return b*h[d]/h[k]};this.convertMeasure=function(b,k){var d,p;b&&k?(d=parseFloat(b),p=b.replace(d.toString(),""),d=l.convert(d,p,k).toString()):d="";return d};this.getUnits=function(b){return b.substr(b.length-2,b.length)}};
// Input 7
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
(function(){function l(){var k,d,p,h,e,l,g,r,a;void 0===b&&(d=(k=runtime.getWindow())&&k.document,l=d.documentElement,g=d.body,b={rangeBCRIgnoresElementBCR:!1,unscaledRangeClientRects:!1,elementBCRIgnoresBodyScroll:!1},d&&(h=d.createElement("div"),h.style.position="absolute",h.style.left="-99999px",h.style.transform="scale(2)",h.style["-webkit-transform"]="scale(2)",e=d.createElement("div"),h.appendChild(e),g.appendChild(h),k=d.createRange(),k.selectNode(e),b.rangeBCRIgnoresElementBCR=0===k.getClientRects().length,
e.appendChild(d.createTextNode("Rect transform test")),d=e.getBoundingClientRect(),p=k.getBoundingClientRect(),b.unscaledRangeClientRects=2<Math.abs(d.height-p.height),h.style.transform="",h.style["-webkit-transform"]="",d=l.style.overflow,p=g.style.overflow,r=g.style.height,a=g.scrollTop,l.style.overflow="visible",g.style.overflow="visible",g.style.height="200%",g.scrollTop=g.scrollHeight,b.elementBCRIgnoresBodyScroll=k.getBoundingClientRect().top!==e.getBoundingClientRect().top,g.scrollTop=a,g.style.height=
r,g.style.overflow=p,l.style.overflow=d,k.detach(),g.removeChild(h),k=Object.keys(b).map(function(a){return a+":"+String(b[a])}).join(", "),runtime.log("Detected browser quirks - "+k)));return b}function h(b,d,h){for(b=b?b.firstElementChild:null;b;){if(b.localName===h&&b.namespaceURI===d)return b;b=b.nextElementSibling}return null}var b;core.DomUtils=function(){function b(a,c){for(var f=0,m;a.parentNode!==c;)runtime.assert(null!==a.parentNode,"parent is null"),a=a.parentNode;for(m=c.firstChild;m!==
a;)f+=1,m=m.nextSibling;return f}function d(a,c){return 0>=a.compareBoundaryPoints(Range.START_TO_START,c)&&0<=a.compareBoundaryPoints(Range.END_TO_END,c)}function p(a,c){var f=null;a.nodeType===Node.TEXT_NODE&&(0===a.length?(a.parentNode.removeChild(a),c.nodeType===Node.TEXT_NODE&&(f=c)):(c.nodeType===Node.TEXT_NODE&&(a.appendData(c.data),c.parentNode.removeChild(c)),f=a));return f}function n(a){for(var c=a.parentNode;a.firstChild;)c.insertBefore(a.firstChild,a);c.removeChild(a);return c}function e(a,
c){for(var f=a.parentNode,b=a.firstChild,d;b;)d=b.nextSibling,e(b,c),b=d;f&&c(a)&&n(a);return f}function q(a,c){return a===c||Boolean(a.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY)}function g(a,c,f){Object.keys(c).forEach(function(b){var d=b.split(":"),e=d[1],k=f(d[0]),d=c[b],h=typeof d;"object"===h?Object.keys(d).length&&(b=k?a.getElementsByTagNameNS(k,e)[0]||a.ownerDocument.createElementNS(k,b):a.getElementsByTagName(e)[0]||a.ownerDocument.createElement(b),a.appendChild(b),g(b,
d,f)):k&&(runtime.assert("number"===h||"string"===h,"attempting to map unsupported type '"+h+"' (key: "+b+")"),a.setAttributeNS(k,b,String(d)))})}var r=null;this.splitBoundaries=function(a){var c,f=[],m,d,e;if(a.startContainer.nodeType===Node.TEXT_NODE||a.endContainer.nodeType===Node.TEXT_NODE){m=a.endContainer;d=a.endContainer.nodeType!==Node.TEXT_NODE?a.endOffset===a.endContainer.childNodes.length:!1;e=a.endOffset;c=a.endContainer;if(e<c.childNodes.length)for(c=c.childNodes.item(e),e=0;c.firstChild;)c=
c.firstChild;else for(;c.lastChild;)c=c.lastChild,e=c.nodeType===Node.TEXT_NODE?c.textContent.length:c.childNodes.length;c===m&&(m=null);a.setEnd(c,e);e=a.endContainer;0!==a.endOffset&&e.nodeType===Node.TEXT_NODE&&(c=e,a.endOffset!==c.length&&(f.push(c.splitText(a.endOffset)),f.push(c)));e=a.startContainer;0!==a.startOffset&&e.nodeType===Node.TEXT_NODE&&(c=e,a.startOffset!==c.length&&(e=c.splitText(a.startOffset),f.push(c),f.push(e),a.setStart(e,0)));if(null!==m){for(e=a.endContainer;e.parentNode&&
e.parentNode!==m;)e=e.parentNode;d=d?m.childNodes.length:b(e,m);a.setEnd(m,d)}}return f};this.containsRange=d;this.rangesIntersect=function(a,c){return 0>=a.compareBoundaryPoints(Range.END_TO_START,c)&&0<=a.compareBoundaryPoints(Range.START_TO_END,c)};this.getNodesInRange=function(a,c,f){var b=[],d=a.commonAncestorContainer;f=a.startContainer.ownerDocument.createTreeWalker(d.nodeType===Node.TEXT_NODE?d.parentNode:d,f,c,!1);var e;a.endContainer.childNodes[a.endOffset-1]?(d=a.endContainer.childNodes[a.endOffset-
1],e=Node.DOCUMENT_POSITION_PRECEDING|Node.DOCUMENT_POSITION_CONTAINED_BY):(d=a.endContainer,e=Node.DOCUMENT_POSITION_PRECEDING);a.startContainer.childNodes[a.startOffset]?(a=a.startContainer.childNodes[a.startOffset],f.currentNode=a):a.startOffset===(a.startContainer.nodeType===Node.TEXT_NODE?a.startContainer.length:a.startContainer.childNodes.length)?(a=a.startContainer,f.currentNode=a,f.lastChild(),a=f.nextNode()):(a=a.startContainer,f.currentNode=a);a&&c(a)===NodeFilter.FILTER_ACCEPT&&b.push(a);
for(a=f.nextNode();a;){c=d.compareDocumentPosition(a);if(0!==c&&0===(c&e))break;b.push(a);a=f.nextNode()}return b};this.normalizeTextNodes=function(a){a&&a.nextSibling&&(a=p(a,a.nextSibling));a&&a.previousSibling&&p(a.previousSibling,a)};this.rangeContainsNode=function(a,c){var f=c.ownerDocument.createRange(),b=c.ownerDocument.createRange(),e;f.setStart(a.startContainer,a.startOffset);f.setEnd(a.endContainer,a.endOffset);b.selectNodeContents(c);e=d(f,b);f.detach();b.detach();return e};this.mergeIntoParent=
n;this.removeUnwantedNodes=e;this.getElementsByTagNameNS=function(a,c,f){var b=[];a=a.getElementsByTagNameNS(c,f);b.length=f=a.length;for(c=0;c<f;c+=1)b[c]=a.item(c);return b};this.containsNode=function(a,c){return a===c||a.contains(c)};this.comparePoints=function(a,c,f,m){if(a===f)return m-c;var d=a.compareDocumentPosition(f);2===d?d=-1:4===d?d=1:10===d?(c=b(a,f),d=c<m?1:-1):(m=b(f,a),d=m<c?-1:1);return d};this.adaptRangeDifferenceToZoomLevel=function(a,c){return l().unscaledRangeClientRects?a:a/
c};this.getBoundingClientRect=function(a){var c=a.ownerDocument,f=l(),b=c.body;if((!1===f.unscaledRangeClientRects||f.rangeBCRIgnoresElementBCR)&&a.nodeType===Node.ELEMENT_NODE)return a=a.getBoundingClientRect(),f.elementBCRIgnoresBodyScroll?{left:a.left+b.scrollLeft,right:a.right+b.scrollLeft,top:a.top+b.scrollTop,bottom:a.bottom+b.scrollTop,width:a.width,height:a.height}:a;var d;r?d=r:r=d=c.createRange();f=d;f.selectNode(a);return f.getBoundingClientRect()};this.mapKeyValObjOntoNode=function(a,
c,b){Object.keys(c).forEach(function(d){var e=d.split(":"),g=e[1],e=b(e[0]),k=c[d];e?(g=a.getElementsByTagNameNS(e,g)[0],g||(g=a.ownerDocument.createElementNS(e,d),a.appendChild(g)),g.textContent=k):runtime.log("Key ignored: "+d)})};this.removeKeyElementsFromNode=function(a,c,b){c.forEach(function(c){var d=c.split(":"),e=d[1];(d=b(d[0]))?(e=a.getElementsByTagNameNS(d,e)[0])?e.parentNode.removeChild(e):runtime.log("Element for "+c+" not found."):runtime.log("Property Name ignored: "+c)})};this.getKeyValRepresentationOfNode=
function(a,c){for(var b={},d=a.firstElementChild,e;d;){if(e=c(d.namespaceURI))b[e+":"+d.localName]=d.textContent;d=d.nextElementSibling}return b};this.mapObjOntoNode=g;this.getDirectChild=h;(function(a){var c,b;b=runtime.getWindow();null!==b&&(c=b.navigator.appVersion.toLowerCase(),b=-1===c.indexOf("chrome")&&(-1!==c.indexOf("applewebkit")||-1!==c.indexOf("safari")),c=c.indexOf("msie"),b||c)&&(a.containsNode=q)})(this)};return core.DomUtils})();
// Input 8
core.Cursor=function(l,h){function b(a){a.parentNode&&(e.push(a.previousSibling),e.push(a.nextSibling),a.parentNode.removeChild(a))}function k(a,c,b){if(c.nodeType===Node.TEXT_NODE){runtime.assert(Boolean(c),"putCursorIntoTextNode: invalid container");var d=c.parentNode;runtime.assert(Boolean(d),"putCursorIntoTextNode: container without parent");runtime.assert(0<=b&&b<=c.length,"putCursorIntoTextNode: offset is out of bounds");0===b?d.insertBefore(a,c):(b!==c.length&&c.splitText(b),d.insertBefore(a,
c.nextSibling))}else c.nodeType===Node.ELEMENT_NODE&&c.insertBefore(a,c.childNodes.item(b));e.push(a.previousSibling);e.push(a.nextSibling)}var d=l.createElementNS("urn:webodf:names:cursor","cursor"),p=l.createElementNS("urn:webodf:names:cursor","anchor"),n,e=[],q=l.createRange(),g,r=new core.DomUtils;this.getNode=function(){return d};this.getAnchorNode=function(){return p.parentNode?p:d};this.getSelectedRange=function(){g?(q.setStartBefore(d),q.collapse(!0)):(q.setStartAfter(n?p:d),q.setEndBefore(n?
d:p));return q};this.setSelectedRange=function(a,c){q&&q!==a&&q.detach();q=a;n=!1!==c;(g=a.collapsed)?(b(p),b(d),k(d,a.startContainer,a.startOffset)):(b(p),b(d),k(n?d:p,a.endContainer,a.endOffset),k(n?p:d,a.startContainer,a.startOffset));e.forEach(r.normalizeTextNodes);e.length=0};this.hasForwardSelection=function(){return n};this.remove=function(){b(d);e.forEach(r.normalizeTextNodes);e.length=0};d.setAttributeNS("urn:webodf:names:cursor","memberId",h);p.setAttributeNS("urn:webodf:names:cursor","memberId",
h)};
// Input 9
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
core.Destroyable=function(){};core.Destroyable.prototype.destroy=function(l){};
// Input 10
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
core.EventNotifier=function(l){var h={};this.emit=function(b,k){var d,p;runtime.assert(h.hasOwnProperty(b),'unknown event fired "'+b+'"');p=h[b];for(d=0;d<p.length;d+=1)p[d](k)};this.subscribe=function(b,k){runtime.assert(h.hasOwnProperty(b),'tried to subscribe to unknown event "'+b+'"');h[b].push(k)};this.unsubscribe=function(b,k){var d;runtime.assert(h.hasOwnProperty(b),'tried to unsubscribe from unknown event "'+b+'"');d=h[b].indexOf(k);runtime.assert(-1!==d,'tried to unsubscribe unknown callback from event "'+
b+'"');-1!==d&&h[b].splice(d,1)};(function(){var b,k;for(b=0;b<l.length;b+=1)k=l[b],runtime.assert(!h.hasOwnProperty(k),'Duplicated event ids: "'+k+'" registered more than once.'),h[k]=[]})()};
// Input 11
/*

 Copyright (C) 2012 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
core.LoopWatchDog=function(l,h){var b=Date.now(),k=0;this.check=function(){var d;if(l&&(d=Date.now(),d-b>l))throw runtime.log("alert","watchdog timeout"),"timeout!";if(0<h&&(k+=1,k>h))throw runtime.log("alert","watchdog loop overflow"),"loop overflow";}};
// Input 12
core.PositionIterator=function(l,h,b,k){function d(){this.acceptNode=function(a){return!a||a.nodeType===f&&0===a.length?w:v}}function p(a){this.acceptNode=function(c){return!c||c.nodeType===f&&0===c.length?w:a.acceptNode(c)}}function n(){var c=r.currentNode,b=c.nodeType;a=b===f?c.length-1:b===m?1:0}function e(){if(null===r.previousSibling()){if(!r.parentNode()||r.currentNode===l)return r.firstChild(),!1;a=0}else n();return!0}function q(){var b=r.currentNode,f;f=c(b);if(b!==l)for(b=b.parentNode;b&&
b!==l;)c(b)===w&&(r.currentNode=b,f=w),b=b.parentNode;f===w?(a=1,b=g.nextPosition()):b=f===v?!0:g.nextPosition();b&&runtime.assert(c(r.currentNode)===v,"moveToAcceptedNode did not result in walker being on an accepted node");return b}var g=this,r,a,c,f=Node.TEXT_NODE,m=Node.ELEMENT_NODE,v=NodeFilter.FILTER_ACCEPT,w=NodeFilter.FILTER_REJECT;this.nextPosition=function(){var c=r.currentNode,b=c.nodeType;if(c===l)return!1;if(0===a&&b===m)null===r.firstChild()&&(a=1);else if(b===f&&a+1<c.length)a+=1;else if(null!==
r.nextSibling())a=0;else if(r.parentNode())a=1;else return!1;return!0};this.previousPosition=function(){var c=!0,b=r.currentNode;0===a?c=e():b.nodeType===f?a-=1:null!==r.lastChild()?n():b===l?c=!1:a=0;return c};this.previousNode=e;this.container=function(){var c=r.currentNode,b=c.nodeType;0===a&&b!==f&&(c=c.parentNode);return c};this.rightNode=function(){var b=r.currentNode,d=b.nodeType;if(d===f&&a===b.length)for(b=b.nextSibling;b&&c(b)!==v;)b=b.nextSibling;else d===m&&1===a&&(b=null);return b};this.leftNode=
function(){var b=r.currentNode;if(0===a)for(b=b.previousSibling;b&&c(b)!==v;)b=b.previousSibling;else if(b.nodeType===m)for(b=b.lastChild;b&&c(b)!==v;)b=b.previousSibling;return b};this.getCurrentNode=function(){return r.currentNode};this.unfilteredDomOffset=function(){if(r.currentNode.nodeType===f)return a;for(var c=0,b=r.currentNode,b=1===a?b.lastChild:b.previousSibling;b;)c+=1,b=b.previousSibling;return c};this.getPreviousSibling=function(){var a=r.currentNode,c=r.previousSibling();r.currentNode=
a;return c};this.getNextSibling=function(){var a=r.currentNode,c=r.nextSibling();r.currentNode=a;return c};this.setPositionBeforeElement=function(c){runtime.assert(Boolean(c),"setPositionBeforeElement called without element");r.currentNode=c;a=0;return q()};this.setUnfilteredPosition=function(c,b){runtime.assert(Boolean(c),"PositionIterator.setUnfilteredPosition called without container");r.currentNode=c;if(c.nodeType===f)return a=b,runtime.assert(b<=c.length,"Error in setPosition: "+b+" > "+c.length),
runtime.assert(0<=b,"Error in setPosition: "+b+" < 0"),b===c.length&&(r.nextSibling()?a=0:r.parentNode()?a=1:runtime.assert(!1,"Error in setUnfilteredPosition: position not valid.")),!0;b<c.childNodes.length?(r.currentNode=c.childNodes.item(b),a=0):a=1;return q()};this.moveToEnd=function(){r.currentNode=l;a=1};this.moveToEndOfNode=function(c){c.nodeType===f?g.setUnfilteredPosition(c,c.length):(r.currentNode=c,a=1)};this.isBeforeNode=function(){return 0===a};this.getNodeFilter=function(){return c};
c=(b?new p(b):new d).acceptNode;c.acceptNode=c;h=h||NodeFilter.SHOW_ALL;runtime.assert(l.nodeType!==Node.TEXT_NODE,"Internet Explorer doesn't allow tree walker roots to be text nodes");r=l.ownerDocument.createTreeWalker(l,h,c,k);a=0;null===r.firstChild()&&(a=1)};
// Input 13
core.PositionFilter=function(){};core.PositionFilter.FilterResult={FILTER_ACCEPT:1,FILTER_REJECT:2,FILTER_SKIP:3};core.PositionFilter.prototype.acceptPosition=function(l){};(function(){return core.PositionFilter})();
// Input 14
core.PositionFilterChain=function(){var l=[],h=core.PositionFilter.FilterResult.FILTER_ACCEPT,b=core.PositionFilter.FilterResult.FILTER_REJECT;this.acceptPosition=function(k){var d;for(d=0;d<l.length;d+=1)if(l[d].acceptPosition(k)===b)return b;return h};this.addFilter=function(b){l.push(b)}};
// Input 15
core.zip_HuftNode=function(){this.n=this.b=this.e=0;this.t=null};core.zip_HuftList=function(){this.list=this.next=null};
core.RawInflate=function(){function l(a,c,b,f,d,m){this.BMAX=16;this.N_MAX=288;this.status=0;this.root=null;this.m=0;var e=Array(this.BMAX+1),g,k,h,p,n,l,A,r=Array(this.BMAX+1),M,s,q,F=new core.zip_HuftNode,v=Array(this.BMAX);p=Array(this.N_MAX);var u,I=Array(this.BMAX+1),t,w,P;P=this.root=null;for(n=0;n<e.length;n++)e[n]=0;for(n=0;n<r.length;n++)r[n]=0;for(n=0;n<v.length;n++)v[n]=null;for(n=0;n<p.length;n++)p[n]=0;for(n=0;n<I.length;n++)I[n]=0;g=256<c?a[256]:this.BMAX;M=a;s=0;n=c;do e[M[s]]++,s++;
while(0<--n);if(e[0]===c)this.root=null,this.status=this.m=0;else{for(l=1;l<=this.BMAX&&0===e[l];l++);A=l;m<l&&(m=l);for(n=this.BMAX;0!==n&&0===e[n];n--);h=n;m>n&&(m=n);for(t=1<<l;l<n;l++,t<<=1)if(t-=e[l],0>t){this.status=2;this.m=m;return}t-=e[n];if(0>t)this.status=2,this.m=m;else{e[n]+=t;I[1]=l=0;M=e;s=1;for(q=2;0<--n;)l+=M[s++],I[q++]=l;M=a;n=s=0;do l=M[s++],0!==l&&(p[I[l]++]=n);while(++n<c);c=I[h];I[0]=n=0;M=p;s=0;p=-1;u=r[0]=0;q=null;w=0;for(A=A-1+1;A<=h;A++)for(a=e[A];0<a--;){for(;A>u+r[1+p];){u+=
r[1+p];p++;w=h-u;w=w>m?m:w;l=A-u;k=1<<l;if(k>a+1)for(k-=a+1,q=A;++l<w;){k<<=1;if(k<=e[++q])break;k-=e[q]}u+l>g&&u<g&&(l=g-u);w=1<<l;r[1+p]=l;q=Array(w);for(k=0;k<w;k++)q[k]=new core.zip_HuftNode;P=null===P?this.root=new core.zip_HuftList:P.next=new core.zip_HuftList;P.next=null;P.list=q;v[p]=q;0<p&&(I[p]=n,F.b=r[p],F.e=16+l,F.t=q,l=(n&(1<<u)-1)>>u-r[p],v[p-1][l].e=F.e,v[p-1][l].b=F.b,v[p-1][l].n=F.n,v[p-1][l].t=F.t)}F.b=A-u;s>=c?F.e=99:M[s]<b?(F.e=256>M[s]?16:15,F.n=M[s++]):(F.e=d[M[s]-b],F.n=f[M[s++]-
b]);k=1<<A-u;for(l=n>>u;l<w;l+=k)q[l].e=F.e,q[l].b=F.b,q[l].n=F.n,q[l].t=F.t;for(l=1<<A-1;0!==(n&l);l>>=1)n^=l;for(n^=l;(n&(1<<u)-1)!==I[p];)u-=r[p],p--}this.m=r[1];this.status=0!==t&&1!==h?1:0}}}function h(b){for(;c<b;){var f=a,d;d=s.length===A?-1:s[A++];a=f|d<<c;c+=8}}function b(c){return a&I[c]}function k(b){a>>=b;c-=b}function d(a,c,d){var m,g,p;if(0===d)return 0;for(p=0;;){h(u);g=z.list[b(u)];for(m=g.e;16<m;){if(99===m)return-1;k(g.b);m-=16;h(m);g=g.t[b(m)];m=g.e}k(g.b);if(16===m)e&=32767,a[c+
p++]=n[e++]=g.n;else{if(15===m)break;h(m);v=g.n+b(m);k(m);h(t);g=x.list[b(t)];for(m=g.e;16<m;){if(99===m)return-1;k(g.b);m-=16;h(m);g=g.t[b(m)];m=g.e}k(g.b);h(m);w=e-g.n-b(m);for(k(m);0<v&&p<d;)v--,w&=32767,e&=32767,a[c+p++]=n[e++]=n[w++]}if(p===d)return d}f=-1;return p}function p(a,c,f){var m,e,g,p,n,A,r,s=Array(316);for(m=0;m<s.length;m++)s[m]=0;h(5);A=257+b(5);k(5);h(5);r=1+b(5);k(5);h(4);m=4+b(4);k(4);if(286<A||30<r)return-1;for(e=0;e<m;e++)h(3),s[R[e]]=b(3),k(3);for(e=m;19>e;e++)s[R[e]]=0;u=
7;e=new l(s,19,19,null,null,u);if(0!==e.status)return-1;z=e.root;u=e.m;p=A+r;for(m=g=0;m<p;)if(h(u),n=z.list[b(u)],e=n.b,k(e),e=n.n,16>e)s[m++]=g=e;else if(16===e){h(2);e=3+b(2);k(2);if(m+e>p)return-1;for(;0<e--;)s[m++]=g}else{17===e?(h(3),e=3+b(3),k(3)):(h(7),e=11+b(7),k(7));if(m+e>p)return-1;for(;0<e--;)s[m++]=0;g=0}u=9;e=new l(s,A,257,M,P,u);0===u&&(e.status=1);if(0!==e.status)return-1;z=e.root;u=e.m;for(m=0;m<r;m++)s[m]=s[m+A];t=6;e=new l(s,r,0,F,V,t);x=e.root;t=e.m;return 0===t&&257<A||0!==e.status?
-1:d(a,c,f)}var n=[],e,q=null,g,r,a,c,f,m,v,w,z,x,u,t,s,A,I=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],M=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,99,99],F=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],V=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],R=[16,17,18,0,8,7,9,6,
10,5,11,4,12,3,13,2,14,1,15],Y;this.inflate=function(I,R){n.length=65536;c=a=e=0;f=-1;m=!1;v=w=0;z=null;s=I;A=0;var E=new Uint8Array(new ArrayBuffer(R));a:for(var J=0,H;J<R&&(!m||-1!==f);){if(0<v){if(0!==f)for(;0<v&&J<R;)v--,w&=32767,e&=32767,E[0+J]=n[e]=n[w],J+=1,e+=1,w+=1;else{for(;0<v&&J<R;)v-=1,e&=32767,h(8),E[0+J]=n[e]=b(8),J+=1,e+=1,k(8);0===v&&(f=-1)}if(J===R)break}if(-1===f){if(m)break;h(1);0!==b(1)&&(m=!0);k(1);h(2);f=b(2);k(2);z=null;v=0}switch(f){case 0:H=E;var Z=0+J,S=R-J,L=void 0,L=c&
7;k(L);h(16);L=b(16);k(16);h(16);if(L!==(~a&65535))H=-1;else{k(16);v=L;for(L=0;0<v&&L<S;)v--,e&=32767,h(8),H[Z+L++]=n[e++]=b(8),k(8);0===v&&(f=-1);H=L}break;case 1:if(null!==z)H=d(E,0+J,R-J);else b:{H=E;Z=0+J;S=R-J;if(null===q){for(var y=void 0,L=Array(288),y=void 0,y=0;144>y;y++)L[y]=8;for(y=144;256>y;y++)L[y]=9;for(y=256;280>y;y++)L[y]=7;for(y=280;288>y;y++)L[y]=8;r=7;y=new l(L,288,257,M,P,r);if(0!==y.status){alert("HufBuild error: "+y.status);H=-1;break b}q=y.root;r=y.m;for(y=0;30>y;y++)L[y]=5;
Y=5;y=new l(L,30,0,F,V,Y);if(1<y.status){q=null;alert("HufBuild error: "+y.status);H=-1;break b}g=y.root;Y=y.m}z=q;x=g;u=r;t=Y;H=d(H,Z,S)}break;case 2:H=null!==z?d(E,0+J,R-J):p(E,0+J,R-J);break;default:H=-1}if(-1===H)break a;J+=H}s=new Uint8Array(new ArrayBuffer(0));return E}};
// Input 16
core.ScheduledTask=function(l,h){function b(){p&&(runtime.clearTimeout(d),p=!1)}function k(){b();l.apply(void 0,n);n=null}var d,p=!1,n=[];this.trigger=function(){n=Array.prototype.slice.call(arguments);p||(p=!0,d=runtime.setTimeout(k,h))};this.triggerImmediate=function(){n=Array.prototype.slice.call(arguments);k()};this.processRequests=function(){p&&k()};this.cancel=b;this.destroy=function(d){b();d()}};
// Input 17
/*

 Copyright (C) 2014 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
core.StepIterator=function(l,h){function b(){r=null;c=a=void 0}function k(){void 0===c&&(c=l.acceptPosition(h)===g);return c}function d(a,c){b();return h.setUnfilteredPosition(a,c)}function p(){r||(r=h.container());return r}function n(){void 0===a&&(a=h.unfilteredDomOffset());return a}function e(){for(b();h.nextPosition();)if(b(),k())return!0;return!1}function q(){for(b();h.previousPosition();)if(b(),k())return!0;return!1}var g=core.PositionFilter.FilterResult.FILTER_ACCEPT,r,a,c;this.isStep=k;this.setPosition=
d;this.container=p;this.offset=n;this.nextStep=e;this.previousStep=q;this.roundToClosestStep=function(){var a=p(),c=n(),b=k();b||(b=q(),b||(d(a,c),b=e()));return b};this.roundToPreviousStep=function(){var a=k();a||(a=q());return a};this.roundToNextStep=function(){var a=k();a||(a=e());return a}};
// Input 18
core.UnitTest=function(){};core.UnitTest.prototype.setUp=function(){};core.UnitTest.prototype.tearDown=function(){};core.UnitTest.prototype.description=function(){};core.UnitTest.prototype.tests=function(){};core.UnitTest.prototype.asyncTests=function(){};
core.UnitTest.provideTestAreaDiv=function(){var l=runtime.getWindow().document,h=l.getElementById("testarea");runtime.assert(!h,'Unclean test environment, found a div with id "testarea".');h=l.createElement("div");h.setAttribute("id","testarea");l.body.appendChild(h);return h};
core.UnitTest.cleanupTestAreaDiv=function(){var l=runtime.getWindow().document,h=l.getElementById("testarea");runtime.assert(!!h&&h.parentNode===l.body,'Test environment broken, found no div with id "testarea" below body.');l.body.removeChild(h)};core.UnitTest.createOdtDocument=function(l,h){var b="<?xml version='1.0' encoding='UTF-8'?>",b=b+"<office:document";Object.keys(h).forEach(function(k){b+=" xmlns:"+k+'="'+h[k]+'"'});b+=">";b+=l;b+="</office:document>";return runtime.parseXML(b)};
core.UnitTestLogger=function(){var l=[],h=0,b=0,k="",d="";this.startTest=function(p,n){l=[];h=0;k=p;d=n;b=(new Date).getTime()};this.endTest=function(){var p=(new Date).getTime();return{description:d,suite:[k,d],success:0===h,log:l,time:p-b}};this.debug=function(b){l.push({category:"debug",message:b})};this.fail=function(b){h+=1;l.push({category:"fail",message:b})};this.pass=function(b){l.push({category:"pass",message:b})}};
core.UnitTestRunner=function(l,h){function b(c){q+=1;a?h.debug(c):h.fail(c)}function k(a,f){var d;try{if(a.length!==f.length)return b("array of length "+a.length+" should be "+f.length+" long"),!1;for(d=0;d<a.length;d+=1)if(a[d]!==f[d])return b(a[d]+" should be "+f[d]+" at array index "+d),!1}catch(e){return!1}return!0}function d(a,f,m){var e=a.attributes,g=e.length,k,p,n;for(k=0;k<g;k+=1)if(p=e.item(k),"xmlns"!==p.prefix&&"urn:webodf:names:steps"!==p.namespaceURI){n=f.getAttributeNS(p.namespaceURI,
p.localName);if(!f.hasAttributeNS(p.namespaceURI,p.localName))return b("Attribute "+p.localName+" with value "+p.value+" was not present"),!1;if(n!==p.value)return b("Attribute "+p.localName+" was "+n+" should be "+p.value),!1}return m?!0:d(f,a,!0)}function p(a,f){var m,e;m=a.nodeType;e=f.nodeType;if(m!==e)return b("Nodetype '"+m+"' should be '"+e+"'"),!1;if(m===Node.TEXT_NODE){if(a.data===f.data)return!0;b("Textnode data '"+a.data+"' should be '"+f.data+"'");return!1}runtime.assert(m===Node.ELEMENT_NODE,
"Only textnodes and elements supported.");if(a.namespaceURI!==f.namespaceURI)return b("namespace '"+a.namespaceURI+"' should be '"+f.namespaceURI+"'"),!1;if(a.localName!==f.localName)return b("localName '"+a.localName+"' should be '"+f.localName+"'"),!1;if(!d(a,f,!1))return!1;m=a.firstChild;for(e=f.firstChild;m;){if(!e)return b("Nodetype '"+m.nodeType+"' is unexpected here."),!1;if(!p(m,e))return!1;m=m.nextSibling;e=e.nextSibling}return e?(b("Nodetype '"+e.nodeType+"' is missing here."),!1):!0}function n(a,
b){return 0===b?a===b&&1/a===1/b:a===b?!0:null===a||null===b?!1:"number"===typeof b&&isNaN(b)?"number"===typeof a&&isNaN(a):Object.prototype.toString.call(b)===Object.prototype.toString.call([])?k(a,b):"object"===typeof b&&"object"===typeof a?b.constructor===Element||b.constructor===Node?p(a,b):r(a,b):!1}function e(a,f,d){"string"===typeof f&&"string"===typeof d||h.debug("WARN: shouldBe() expects string arguments");var e,g;try{g=eval(f)}catch(k){e=k}a=eval(d);e?b(f+" should be "+a+". Threw exception "+
e):n(g,a)?h.pass(f+" is "+d):String(typeof g)===String(typeof a)?(d=0===g&&0>1/g?"-0":String(g),b(f+" should be "+a+". Was "+d+".")):b(f+" should be "+a+" (of type "+typeof a+"). Was "+g+" (of type "+typeof g+").")}var q=0,g,r,a=!1;this.resourcePrefix=function(){return l};this.beginExpectFail=function(){g=q;a=!0};this.endExpectFail=function(){var c=g===q;a=!1;q=g;c&&(q+=1,h.fail("Expected at least one failed test, but none registered."))};r=function(a,f){var d=Object.keys(a),e=Object.keys(f);d.sort();
e.sort();return k(d,e)&&Object.keys(a).every(function(d){var e=a[d],m=f[d];return n(e,m)?!0:(b(e+" should be "+m+" for key "+d),!1)})};this.areNodesEqual=p;this.shouldBeNull=function(a,b){e(a,b,"null")};this.shouldBeNonNull=function(a,f){var d,e;try{e=eval(f)}catch(g){d=g}d?b(f+" should be non-null. Threw exception "+d):null!==e?h.pass(f+" is non-null."):b(f+" should be non-null. Was "+e)};this.shouldBe=e;this.testFailed=b;this.countFailedTests=function(){return q};this.name=function(a){var b,d,e=
[],g=a.length;e.length=g;for(b=0;b<g;b+=1){d=Runtime.getFunctionName(a[b])||"";if(""===d)throw"Found a function without a name.";e[b]={f:a[b],name:d}}return e}};
core.UnitTester=function(){function l(b,d){return"<span style='color:blue;cursor:pointer' onclick='"+d+"'>"+b+"</span>"}function h(d){b.reporter&&b.reporter(d)}var b=this,k=0,d=new core.UnitTestLogger,p={},n="BrowserRuntime"===runtime.type();this.resourcePrefix="";this.reporter=function(b){var d,g;n?runtime.log("<span>Running "+l(b.description,'runTest("'+b.suite[0]+'","'+b.description+'")')+"</span>"):runtime.log("Running "+b.description);if(!b.success)for(d=0;d<b.log.length;d+=1)g=b.log[d],runtime.log(g.category,
g.message)};this.runTests=function(e,q,g){function r(b){function e(){l&&c.endExpectFail();h(d.endTest());f.tearDown();m[n]=u===c.countFailedTests();r(b.slice(1))}var n,l;if(0===b.length)p[a]=m,k+=c.countFailedTests(),q();else if(w=b[0].f,n=b[0].name,l=!0===b[0].expectFail,u=c.countFailedTests(),g.length&&-1===g.indexOf(n))r(b.slice(1));else{f.setUp();d.startTest(a,n);l&&c.beginExpectFail();try{w(e)}catch(v){c.testFailed("Unexpected exception encountered: "+v.toString()+"\n"+v.stack),e()}}}var a=Runtime.getFunctionName(e)||
"",c=new core.UnitTestRunner(b.resourcePrefix,d),f=new e(c),m={},v,w,z,x,u;if(p.hasOwnProperty(a))runtime.log("Test "+a+" has already run.");else{n?runtime.log("<span>Running "+l(a,'runSuite("'+a+'");')+": "+f.description()+"</span>"):runtime.log("Running "+a+": "+f.description);z=f.tests();for(v=0;v<z.length;v+=1)if(w=z[v].f,e=z[v].name,x=!0===z[v].expectFail,!g.length||-1!==g.indexOf(e)){u=c.countFailedTests();f.setUp();d.startTest(a,e);x&&c.beginExpectFail();try{w()}catch(t){c.testFailed("Unexpected exception encountered: "+
t.toString()+"\n"+t.stack)}x&&c.endExpectFail();h(d.endTest());f.tearDown();m[e]=u===c.countFailedTests()}r(f.asyncTests())}};this.countFailedTests=function(){return k};this.results=function(){return p}};
// Input 19
core.Utils=function(){function l(h,b){if(b&&Array.isArray(b)){h=h||[];if(!Array.isArray(h))throw"Destination is not an array.";h=h.concat(b.map(function(b){return l(null,b)}))}else if(b&&"object"===typeof b){h=h||{};if("object"!==typeof h)throw"Destination is not an object.";Object.keys(b).forEach(function(k){h[k]=l(h[k],b[k])})}else h=b;return h}this.hashString=function(h){var b=0,k,d;k=0;for(d=h.length;k<d;k+=1)b=(b<<5)-b+h.charCodeAt(k),b|=0;return b};this.mergeObjects=function(h,b){Object.keys(b).forEach(function(k){h[k]=
l(h[k],b[k])});return h}};
// Input 20
/*

 WebODF
 Copyright (c) 2010 Jos van den Oever
 Licensed under the ... License:

 Project home: http://www.webodf.org/
*/
core.Zip=function(l,h){function b(a){var c=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,
853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,
4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,
225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,
2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,
2932959818,3654703836,1088359270,936918E3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],b,f,d=a.length,e=0,e=0;b=-1;for(f=0;f<d;f+=1)e=(b^a[f])&255,e=c[e],b=b>>>8^e;return b^-1}function k(a){return new Date((a>>25&127)+1980,(a>>21&15)-1,a>>16&31,a>>11&15,a>>5&63,(a&31)<<1)}function d(a){var c=a.getFullYear();return 1980>c?0:c-1980<<
25|a.getMonth()+1<<21|a.getDate()<<16|a.getHours()<<11|a.getMinutes()<<5|a.getSeconds()>>1}function p(a,c){var b,f,d,e,g,p,n,h=this;this.load=function(c){if(null!==h.data)c(null,h.data);else{var b=g+34+f+d+256;b+n>m&&(b=m-n);runtime.read(a,n,b,function(b,f){if(b||null===f)c(b,f);else a:{var d=f,m=new core.ByteArray(d),k=m.readUInt32LE(),n;if(67324752!==k)c("File entry signature is wrong."+k.toString()+" "+d.length.toString(),null);else{m.pos+=22;k=m.readUInt16LE();n=m.readUInt16LE();m.pos+=k+n;if(e){d=
d.subarray(m.pos,m.pos+g);if(g!==d.length){c("The amount of compressed bytes read was "+d.length.toString()+" instead of "+g.toString()+" for "+h.filename+" in "+a+".",null);break a}d=w(d,p)}else d=d.subarray(m.pos,m.pos+p);p!==d.length?c("The amount of bytes read was "+d.length.toString()+" instead of "+p.toString()+" for "+h.filename+" in "+a+".",null):(h.data=d,c(null,d))}}})}};this.set=function(a,c,b,f){h.filename=a;h.data=c;h.compressed=b;h.date=f};this.error=null;c&&(b=c.readUInt32LE(),33639248!==
b?this.error="Central directory entry has wrong signature at position "+(c.pos-4).toString()+' for file "'+a+'": '+c.data.length.toString():(c.pos+=6,e=c.readUInt16LE(),this.date=k(c.readUInt32LE()),c.readUInt32LE(),g=c.readUInt32LE(),p=c.readUInt32LE(),f=c.readUInt16LE(),d=c.readUInt16LE(),b=c.readUInt16LE(),c.pos+=8,n=c.readUInt32LE(),this.filename=runtime.byteArrayToString(c.data.subarray(c.pos,c.pos+f),"utf8"),this.data=null,c.pos+=f+d+b))}function n(a,c){if(22!==a.length)c("Central directory length should be 22.",
z);else{var b=new core.ByteArray(a),d;d=b.readUInt32LE();101010256!==d?c("Central directory signature is wrong: "+d.toString(),z):(d=b.readUInt16LE(),0!==d?c("Zip files with non-zero disk numbers are not supported.",z):(d=b.readUInt16LE(),0!==d?c("Zip files with non-zero disk numbers are not supported.",z):(d=b.readUInt16LE(),v=b.readUInt16LE(),d!==v?c("Number of entries is inconsistent.",z):(d=b.readUInt32LE(),b=b.readUInt16LE(),b=m-22-d,runtime.read(l,b,m-b,function(a,b){if(a||null===b)c(a,z);else a:{var d=
new core.ByteArray(b),e,m;f=[];for(e=0;e<v;e+=1){m=new p(l,d);if(m.error){c(m.error,z);break a}f[f.length]=m}c(null,z)}})))))}}function e(a,c){var b=null,d,e;for(e=0;e<f.length;e+=1)if(d=f[e],d.filename===a){b=d;break}b?b.data?c(null,b.data):b.load(c):c(a+" not found.",null)}function q(a){var c=new core.ByteArrayWriter("utf8"),f=0;c.appendArray([80,75,3,4,20,0,0,0,0,0]);a.data&&(f=a.data.length);c.appendUInt32LE(d(a.date));c.appendUInt32LE(a.data?b(a.data):0);c.appendUInt32LE(f);c.appendUInt32LE(f);
c.appendUInt16LE(a.filename.length);c.appendUInt16LE(0);c.appendString(a.filename);a.data&&c.appendByteArray(a.data);return c}function g(a,c){var f=new core.ByteArrayWriter("utf8"),e=0;f.appendArray([80,75,1,2,20,0,20,0,0,0,0,0]);a.data&&(e=a.data.length);f.appendUInt32LE(d(a.date));f.appendUInt32LE(a.data?b(a.data):0);f.appendUInt32LE(e);f.appendUInt32LE(e);f.appendUInt16LE(a.filename.length);f.appendArray([0,0,0,0,0,0,0,0,0,0,0,0]);f.appendUInt32LE(c);f.appendString(a.filename);return f}function r(a,
c){if(a===f.length)c(null);else{var b=f[a];null!==b.data?r(a+1,c):b.load(function(b){b?c(b):r(a+1,c)})}}function a(a,c){r(0,function(b){if(b)c(b);else{var d,e,m=new core.ByteArrayWriter("utf8"),k=[0];for(d=0;d<f.length;d+=1)m.appendByteArrayWriter(q(f[d])),k.push(m.getLength());b=m.getLength();for(d=0;d<f.length;d+=1)e=f[d],m.appendByteArrayWriter(g(e,k[d]));d=m.getLength()-b;m.appendArray([80,75,5,6,0,0,0,0]);m.appendUInt16LE(f.length);m.appendUInt16LE(f.length);m.appendUInt32LE(d);m.appendUInt32LE(b);
m.appendArray([0,0]);a(m.getByteArray())}})}function c(c,b){a(function(a){runtime.writeFile(c,a,b)},b)}var f,m,v,w=(new core.RawInflate).inflate,z=this,x=new core.Base64;this.load=e;this.save=function(a,c,b,d){var e,m;for(e=0;e<f.length;e+=1)if(m=f[e],m.filename===a){m.set(a,c,b,d);return}m=new p(l);m.set(a,c,b,d);f.push(m)};this.remove=function(a){var c,b;for(c=0;c<f.length;c+=1)if(b=f[c],b.filename===a)return f.splice(c,1),!0;return!1};this.write=function(a){c(l,a)};this.writeAs=c;this.createByteArray=
a;this.loadContentXmlAsFragments=function(a,c){z.loadAsString(a,function(a,b){if(a)return c.rootElementReady(a);c.rootElementReady(null,b,!0)})};this.loadAsString=function(a,c){e(a,function(a,b){if(a||null===b)return c(a,null);var f=runtime.byteArrayToString(b,"utf8");c(null,f)})};this.loadAsDOM=function(a,c){z.loadAsString(a,function(a,b){if(a||null===b)c(a,null);else{var f=(new DOMParser).parseFromString(b,"text/xml");c(null,f)}})};this.loadAsDataURL=function(a,c,b){e(a,function(a,f){if(a||!f)return b(a,
null);var d=0,e;c||(c=80===f[1]&&78===f[2]&&71===f[3]?"image/png":255===f[0]&&216===f[1]&&255===f[2]?"image/jpeg":71===f[0]&&73===f[1]&&70===f[2]?"image/gif":"");for(e="data:"+c+";base64,";d<f.length;)e+=x.convertUTF8ArrayToBase64(f.subarray(d,Math.min(d+45E3,f.length))),d+=45E3;b(null,e)})};this.getEntries=function(){return f.slice()};m=-1;null===h?f=[]:runtime.getFileSize(l,function(a){m=a;0>m?h("File '"+l+"' cannot be read.",z):runtime.read(l,m-22,22,function(a,c){a||null===h||null===c?h(a,z):
n(c,h)})})};
// Input 21
xmldom.LSSerializerFilter=function(){};xmldom.LSSerializerFilter.prototype.acceptNode=function(l){};
// Input 22
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
odf.OdfNodeFilter=function(){this.acceptNode=function(l){return"http://www.w3.org/1999/xhtml"===l.namespaceURI?NodeFilter.FILTER_SKIP:l.namespaceURI&&l.namespaceURI.match(/^urn:webodf:/)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}};
// Input 23
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
odf.Namespaces={namespaceMap:{db:"urn:oasis:names:tc:opendocument:xmlns:database:1.0",dc:"http://purl.org/dc/elements/1.1/",dr3d:"urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",draw:"urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",chart:"urn:oasis:names:tc:opendocument:xmlns:chart:1.0",fo:"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",form:"urn:oasis:names:tc:opendocument:xmlns:form:1.0",meta:"urn:oasis:names:tc:opendocument:xmlns:meta:1.0",number:"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
office:"urn:oasis:names:tc:opendocument:xmlns:office:1.0",presentation:"urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",style:"urn:oasis:names:tc:opendocument:xmlns:style:1.0",svg:"urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",table:"urn:oasis:names:tc:opendocument:xmlns:table:1.0",text:"urn:oasis:names:tc:opendocument:xmlns:text:1.0",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},prefixMap:{},dbns:"urn:oasis:names:tc:opendocument:xmlns:database:1.0",
dcns:"http://purl.org/dc/elements/1.1/",dr3dns:"urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",drawns:"urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",chartns:"urn:oasis:names:tc:opendocument:xmlns:chart:1.0",fons:"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",formns:"urn:oasis:names:tc:opendocument:xmlns:form:1.0",metans:"urn:oasis:names:tc:opendocument:xmlns:meta:1.0",numberns:"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",officens:"urn:oasis:names:tc:opendocument:xmlns:office:1.0",
presentationns:"urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",stylens:"urn:oasis:names:tc:opendocument:xmlns:style:1.0",svgns:"urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",tablens:"urn:oasis:names:tc:opendocument:xmlns:table:1.0",textns:"urn:oasis:names:tc:opendocument:xmlns:text:1.0",xlinkns:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/XML/1998/namespace"};
(function(){var l=odf.Namespaces.namespaceMap,h=odf.Namespaces.prefixMap,b;for(b in l)l.hasOwnProperty(b)&&(h[l[b]]=b)})();odf.Namespaces.forEachPrefix=function(l){var h=odf.Namespaces.namespaceMap,b;for(b in h)h.hasOwnProperty(b)&&l(b,h[b])};odf.Namespaces.lookupNamespaceURI=function(l){var h=null;odf.Namespaces.namespaceMap.hasOwnProperty(l)&&(h=odf.Namespaces.namespaceMap[l]);return h};odf.Namespaces.lookupPrefix=function(l){var h=odf.Namespaces.prefixMap;return h.hasOwnProperty(l)?h[l]:null};
odf.Namespaces.lookupNamespaceURI.lookupNamespaceURI=odf.Namespaces.lookupNamespaceURI;
// Input 24
xmldom.XPathIterator=function(){};xmldom.XPathIterator.prototype.next=function(){};xmldom.XPathIterator.prototype.reset=function(){};
function createXPathSingleton(){function l(b,a,c){return-1!==b&&(b<a||-1===a)&&(b<c||-1===c)}function h(b){for(var a=[],c=0,f=b.length,d;c<f;){var e=b,k=f,p=a,n="",h=[],q=e.indexOf("[",c),s=e.indexOf("/",c),A=e.indexOf("=",c);l(s,q,A)?(n=e.substring(c,s),c=s+1):l(q,s,A)?(n=e.substring(c,q),c=g(e,q,h)):l(A,s,q)?(n=e.substring(c,A),c=A):(n=e.substring(c,k),c=k);p.push({location:n,predicates:h});if(c<f&&"="===b[c]){d=b.substring(c+1,f);if(2<d.length&&("'"===d[0]||'"'===d[0]))d=d.slice(1,d.length-1);
else try{d=parseInt(d,10)}catch(I){}c=f}}return{steps:a,value:d}}function b(){var b=null,a=!1;this.setNode=function(a){b=a};this.reset=function(){a=!1};this.next=function(){var c=a?null:b;a=!0;return c}}function k(b,a,c){this.reset=function(){b.reset()};this.next=function(){for(var f=b.next();f;){f.nodeType===Node.ELEMENT_NODE&&(f=f.getAttributeNodeNS(a,c));if(f)break;f=b.next()}return f}}function d(b,a){var c=b.next(),f=null;this.reset=function(){b.reset();c=b.next();f=null};this.next=function(){for(;c;){if(f)if(a&&
f.firstChild)f=f.firstChild;else{for(;!f.nextSibling&&f!==c;)f=f.parentNode;f===c?c=b.next():f=f.nextSibling}else{do(f=c.firstChild)||(c=b.next());while(c&&!f)}if(f&&f.nodeType===Node.ELEMENT_NODE)return f}return null}}function p(b,a){this.reset=function(){b.reset()};this.next=function(){for(var c=b.next();c&&!a(c);)c=b.next();return c}}function n(b,a,c){a=a.split(":",2);var f=c(a[0]),d=a[1];return new p(b,function(a){return a.localName===d&&a.namespaceURI===f})}function e(d,a,c){var f=new b,e=q(f,
a,c),g=a.value;return void 0===g?new p(d,function(a){f.setNode(a);e.reset();return null!==e.next()}):new p(d,function(a){f.setNode(a);e.reset();return(a=e.next())?a.nodeValue===g:!1})}var q,g;g=function(b,a,c){for(var f=a,d=b.length,e=0;f<d;)"]"===b[f]?(e-=1,0>=e&&c.push(h(b.substring(a,f)))):"["===b[f]&&(0>=e&&(a=f+1),e+=1),f+=1;return f};q=function(b,a,c){var f,m,g,p;for(f=0;f<a.steps.length;f+=1){g=a.steps[f];m=g.location;if(""===m)b=new d(b,!1);else if("@"===m[0]){m=m.substr(1).split(":",2);p=
c(m[0]);if(!p)throw"No namespace associated with the prefix "+m[0];b=new k(b,p,m[1])}else"."!==m&&(b=new d(b,!1),-1!==m.indexOf(":")&&(b=n(b,m,c)));for(m=0;m<g.predicates.length;m+=1)p=g.predicates[m],b=e(b,p,c)}return b};return{getODFElementsWithXPath:function(d,a,c){var f=d.ownerDocument,e=[],g=null;if(f&&"function"===typeof f.evaluate)for(c=f.evaluate(a,d,c,XPathResult.UNORDERED_NODE_ITERATOR_TYPE,null),g=c.iterateNext();null!==g;)g.nodeType===Node.ELEMENT_NODE&&e.push(g),g=c.iterateNext();else{e=
new b;e.setNode(d);d=h(a);e=q(e,d,c);d=[];for(c=e.next();c;)d.push(c),c=e.next();e=d}return e}}}xmldom.XPath=createXPathSingleton();
// Input 25
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
odf.StyleInfo=function(){function l(a,c){var b,d,f,e,m,g=0;if(b=M[a.localName])if(f=b[a.namespaceURI])g=f.length;for(b=0;b<g;b+=1)d=f[b],e=d.ns,m=d.localname,(d=a.getAttributeNS(e,m))&&a.setAttributeNS(e,A[e]+m,c+d);for(f=a.firstElementChild;f;)l(f,c),f=f.nextElementSibling}function h(a,c){var b,d,f,e,m,g=0;if(b=M[a.localName])if(f=b[a.namespaceURI])g=f.length;for(b=0;b<g;b+=1)if(d=f[b],e=d.ns,m=d.localname,d=a.getAttributeNS(e,m))d=d.replace(c,""),a.setAttributeNS(e,A[e]+m,d);for(f=a.firstElementChild;f;)h(f,
c),f=f.nextElementSibling}function b(a,c){var b,d,f,e,m,g=0;if(b=M[a.localName])if(f=b[a.namespaceURI])g=f.length;for(b=0;b<g;b+=1)if(e=f[b],d=e.ns,m=e.localname,d=a.getAttributeNS(d,m))c=c||{},e=e.keyname,c.hasOwnProperty(e)?c[e][d]=1:(m={},m[d]=1,c[e]=m);return c}function k(a,c){var d,f;b(a,c);for(d=a.firstChild;d;)d.nodeType===Node.ELEMENT_NODE&&(f=d,k(f,c)),d=d.nextSibling}function d(a,c,b){this.key=a;this.name=c;this.family=b;this.requires={}}function p(a,c,b){var f=a+'"'+c,e=b[f];e||(e=b[f]=
new d(f,a,c));return e}function n(a,c,b){var d,f,e,m,g,k=0;d=a.getAttributeNS(u,"name");m=a.getAttributeNS(u,"family");d&&m&&(c=p(d,m,b));if(c){if(d=M[a.localName])if(e=d[a.namespaceURI])k=e.length;for(d=0;d<k;d+=1)if(m=e[d],f=m.ns,g=m.localname,f=a.getAttributeNS(f,g))m=m.keyname,m=p(f,m,b),c.requires[m.key]=m}for(a=a.firstElementChild;a;)n(a,c,b),a=a.nextElementSibling;return b}function e(a,c){var b=c[a.family];b||(b=c[a.family]={});b[a.name]=1;Object.keys(a.requires).forEach(function(b){e(a.requires[b],
c)})}function q(a,c){var b=n(a,null,{});Object.keys(b).forEach(function(a){a=b[a];var d=c[a.family];d&&d.hasOwnProperty(a.name)&&e(a,c)})}function g(a,c){function b(c){(c=e.getAttributeNS(u,c))&&(a[c]=!0)}var d=["font-name","font-name-asian","font-name-complex"],f,e;for(f=c&&c.firstElementChild;f;)e=f,d.forEach(b),g(a,e),f=f.nextElementSibling}function r(a,c){function b(a){var d=e.getAttributeNS(u,a);d&&c.hasOwnProperty(d)&&e.setAttributeNS(u,"style:"+a,c[d])}var d=["font-name","font-name-asian",
"font-name-complex"],f,e;for(f=a&&a.firstElementChild;f;)e=f,d.forEach(b),r(e,c),f=f.nextElementSibling}var a=odf.Namespaces.chartns,c=odf.Namespaces.dbns,f=odf.Namespaces.dr3dns,m=odf.Namespaces.drawns,v=odf.Namespaces.formns,w=odf.Namespaces.numberns,z=odf.Namespaces.officens,x=odf.Namespaces.presentationns,u=odf.Namespaces.stylens,t=odf.Namespaces.tablens,s=odf.Namespaces.textns,A={"urn:oasis:names:tc:opendocument:xmlns:chart:1.0":"chart:","urn:oasis:names:tc:opendocument:xmlns:database:1.0":"db:",
"urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0":"dr3d:","urn:oasis:names:tc:opendocument:xmlns:drawing:1.0":"draw:","urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0":"fo:","urn:oasis:names:tc:opendocument:xmlns:form:1.0":"form:","urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0":"number:","urn:oasis:names:tc:opendocument:xmlns:office:1.0":"office:","urn:oasis:names:tc:opendocument:xmlns:presentation:1.0":"presentation:","urn:oasis:names:tc:opendocument:xmlns:style:1.0":"style:","urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0":"svg:",
"urn:oasis:names:tc:opendocument:xmlns:table:1.0":"table:","urn:oasis:names:tc:opendocument:xmlns:text:1.0":"chart:","http://www.w3.org/XML/1998/namespace":"xml:"},I={text:[{ens:u,en:"tab-stop",ans:u,a:"leader-text-style"},{ens:u,en:"drop-cap",ans:u,a:"style-name"},{ens:s,en:"notes-configuration",ans:s,a:"citation-body-style-name"},{ens:s,en:"notes-configuration",ans:s,a:"citation-style-name"},{ens:s,en:"a",ans:s,a:"style-name"},{ens:s,en:"alphabetical-index",ans:s,a:"style-name"},{ens:s,en:"linenumbering-configuration",
ans:s,a:"style-name"},{ens:s,en:"list-level-style-number",ans:s,a:"style-name"},{ens:s,en:"ruby-text",ans:s,a:"style-name"},{ens:s,en:"span",ans:s,a:"style-name"},{ens:s,en:"a",ans:s,a:"visited-style-name"},{ens:u,en:"text-properties",ans:u,a:"text-line-through-text-style"},{ens:s,en:"alphabetical-index-source",ans:s,a:"main-entry-style-name"},{ens:s,en:"index-entry-bibliography",ans:s,a:"style-name"},{ens:s,en:"index-entry-chapter",ans:s,a:"style-name"},{ens:s,en:"index-entry-link-end",ans:s,a:"style-name"},
{ens:s,en:"index-entry-link-start",ans:s,a:"style-name"},{ens:s,en:"index-entry-page-number",ans:s,a:"style-name"},{ens:s,en:"index-entry-span",ans:s,a:"style-name"},{ens:s,en:"index-entry-tab-stop",ans:s,a:"style-name"},{ens:s,en:"index-entry-text",ans:s,a:"style-name"},{ens:s,en:"index-title-template",ans:s,a:"style-name"},{ens:s,en:"list-level-style-bullet",ans:s,a:"style-name"},{ens:s,en:"outline-level-style",ans:s,a:"style-name"}],paragraph:[{ens:m,en:"caption",ans:m,a:"text-style-name"},{ens:m,
en:"circle",ans:m,a:"text-style-name"},{ens:m,en:"connector",ans:m,a:"text-style-name"},{ens:m,en:"control",ans:m,a:"text-style-name"},{ens:m,en:"custom-shape",ans:m,a:"text-style-name"},{ens:m,en:"ellipse",ans:m,a:"text-style-name"},{ens:m,en:"frame",ans:m,a:"text-style-name"},{ens:m,en:"line",ans:m,a:"text-style-name"},{ens:m,en:"measure",ans:m,a:"text-style-name"},{ens:m,en:"path",ans:m,a:"text-style-name"},{ens:m,en:"polygon",ans:m,a:"text-style-name"},{ens:m,en:"polyline",ans:m,a:"text-style-name"},
{ens:m,en:"rect",ans:m,a:"text-style-name"},{ens:m,en:"regular-polygon",ans:m,a:"text-style-name"},{ens:z,en:"annotation",ans:m,a:"text-style-name"},{ens:v,en:"column",ans:v,a:"text-style-name"},{ens:u,en:"style",ans:u,a:"next-style-name"},{ens:t,en:"body",ans:t,a:"paragraph-style-name"},{ens:t,en:"even-columns",ans:t,a:"paragraph-style-name"},{ens:t,en:"even-rows",ans:t,a:"paragraph-style-name"},{ens:t,en:"first-column",ans:t,a:"paragraph-style-name"},{ens:t,en:"first-row",ans:t,a:"paragraph-style-name"},
{ens:t,en:"last-column",ans:t,a:"paragraph-style-name"},{ens:t,en:"last-row",ans:t,a:"paragraph-style-name"},{ens:t,en:"odd-columns",ans:t,a:"paragraph-style-name"},{ens:t,en:"odd-rows",ans:t,a:"paragraph-style-name"},{ens:s,en:"notes-configuration",ans:s,a:"default-style-name"},{ens:s,en:"alphabetical-index-entry-template",ans:s,a:"style-name"},{ens:s,en:"bibliography-entry-template",ans:s,a:"style-name"},{ens:s,en:"h",ans:s,a:"style-name"},{ens:s,en:"illustration-index-entry-template",ans:s,a:"style-name"},
{ens:s,en:"index-source-style",ans:s,a:"style-name"},{ens:s,en:"object-index-entry-template",ans:s,a:"style-name"},{ens:s,en:"p",ans:s,a:"style-name"},{ens:s,en:"table-index-entry-template",ans:s,a:"style-name"},{ens:s,en:"table-of-content-entry-template",ans:s,a:"style-name"},{ens:s,en:"table-index-entry-template",ans:s,a:"style-name"},{ens:s,en:"user-index-entry-template",ans:s,a:"style-name"},{ens:u,en:"page-layout-properties",ans:u,a:"register-truth-ref-style-name"}],chart:[{ens:a,en:"axis",ans:a,
a:"style-name"},{ens:a,en:"chart",ans:a,a:"style-name"},{ens:a,en:"data-label",ans:a,a:"style-name"},{ens:a,en:"data-point",ans:a,a:"style-name"},{ens:a,en:"equation",ans:a,a:"style-name"},{ens:a,en:"error-indicator",ans:a,a:"style-name"},{ens:a,en:"floor",ans:a,a:"style-name"},{ens:a,en:"footer",ans:a,a:"style-name"},{ens:a,en:"grid",ans:a,a:"style-name"},{ens:a,en:"legend",ans:a,a:"style-name"},{ens:a,en:"mean-value",ans:a,a:"style-name"},{ens:a,en:"plot-area",ans:a,a:"style-name"},{ens:a,en:"regression-curve",
ans:a,a:"style-name"},{ens:a,en:"series",ans:a,a:"style-name"},{ens:a,en:"stock-gain-marker",ans:a,a:"style-name"},{ens:a,en:"stock-loss-marker",ans:a,a:"style-name"},{ens:a,en:"stock-range-line",ans:a,a:"style-name"},{ens:a,en:"subtitle",ans:a,a:"style-name"},{ens:a,en:"title",ans:a,a:"style-name"},{ens:a,en:"wall",ans:a,a:"style-name"}],section:[{ens:s,en:"alphabetical-index",ans:s,a:"style-name"},{ens:s,en:"bibliography",ans:s,a:"style-name"},{ens:s,en:"illustration-index",ans:s,a:"style-name"},
{ens:s,en:"index-title",ans:s,a:"style-name"},{ens:s,en:"object-index",ans:s,a:"style-name"},{ens:s,en:"section",ans:s,a:"style-name"},{ens:s,en:"table-of-content",ans:s,a:"style-name"},{ens:s,en:"table-index",ans:s,a:"style-name"},{ens:s,en:"user-index",ans:s,a:"style-name"}],ruby:[{ens:s,en:"ruby",ans:s,a:"style-name"}],table:[{ens:c,en:"query",ans:c,a:"style-name"},{ens:c,en:"table-representation",ans:c,a:"style-name"},{ens:t,en:"background",ans:t,a:"style-name"},{ens:t,en:"table",ans:t,a:"style-name"}],
"table-column":[{ens:c,en:"column",ans:c,a:"style-name"},{ens:t,en:"table-column",ans:t,a:"style-name"}],"table-row":[{ens:c,en:"query",ans:c,a:"default-row-style-name"},{ens:c,en:"table-representation",ans:c,a:"default-row-style-name"},{ens:t,en:"table-row",ans:t,a:"style-name"}],"table-cell":[{ens:c,en:"column",ans:c,a:"default-cell-style-name"},{ens:t,en:"table-column",ans:t,a:"default-cell-style-name"},{ens:t,en:"table-row",ans:t,a:"default-cell-style-name"},{ens:t,en:"body",ans:t,a:"style-name"},
{ens:t,en:"covered-table-cell",ans:t,a:"style-name"},{ens:t,en:"even-columns",ans:t,a:"style-name"},{ens:t,en:"covered-table-cell",ans:t,a:"style-name"},{ens:t,en:"even-columns",ans:t,a:"style-name"},{ens:t,en:"even-rows",ans:t,a:"style-name"},{ens:t,en:"first-column",ans:t,a:"style-name"},{ens:t,en:"first-row",ans:t,a:"style-name"},{ens:t,en:"last-column",ans:t,a:"style-name"},{ens:t,en:"last-row",ans:t,a:"style-name"},{ens:t,en:"odd-columns",ans:t,a:"style-name"},{ens:t,en:"odd-rows",ans:t,a:"style-name"},
{ens:t,en:"table-cell",ans:t,a:"style-name"}],graphic:[{ens:f,en:"cube",ans:m,a:"style-name"},{ens:f,en:"extrude",ans:m,a:"style-name"},{ens:f,en:"rotate",ans:m,a:"style-name"},{ens:f,en:"scene",ans:m,a:"style-name"},{ens:f,en:"sphere",ans:m,a:"style-name"},{ens:m,en:"caption",ans:m,a:"style-name"},{ens:m,en:"circle",ans:m,a:"style-name"},{ens:m,en:"connector",ans:m,a:"style-name"},{ens:m,en:"control",ans:m,a:"style-name"},{ens:m,en:"custom-shape",ans:m,a:"style-name"},{ens:m,en:"ellipse",ans:m,a:"style-name"},
{ens:m,en:"frame",ans:m,a:"style-name"},{ens:m,en:"g",ans:m,a:"style-name"},{ens:m,en:"line",ans:m,a:"style-name"},{ens:m,en:"measure",ans:m,a:"style-name"},{ens:m,en:"page-thumbnail",ans:m,a:"style-name"},{ens:m,en:"path",ans:m,a:"style-name"},{ens:m,en:"polygon",ans:m,a:"style-name"},{ens:m,en:"polyline",ans:m,a:"style-name"},{ens:m,en:"rect",ans:m,a:"style-name"},{ens:m,en:"regular-polygon",ans:m,a:"style-name"},{ens:z,en:"annotation",ans:m,a:"style-name"}],presentation:[{ens:f,en:"cube",ans:x,
a:"style-name"},{ens:f,en:"extrude",ans:x,a:"style-name"},{ens:f,en:"rotate",ans:x,a:"style-name"},{ens:f,en:"scene",ans:x,a:"style-name"},{ens:f,en:"sphere",ans:x,a:"style-name"},{ens:m,en:"caption",ans:x,a:"style-name"},{ens:m,en:"circle",ans:x,a:"style-name"},{ens:m,en:"connector",ans:x,a:"style-name"},{ens:m,en:"control",ans:x,a:"style-name"},{ens:m,en:"custom-shape",ans:x,a:"style-name"},{ens:m,en:"ellipse",ans:x,a:"style-name"},{ens:m,en:"frame",ans:x,a:"style-name"},{ens:m,en:"g",ans:x,a:"style-name"},
{ens:m,en:"line",ans:x,a:"style-name"},{ens:m,en:"measure",ans:x,a:"style-name"},{ens:m,en:"page-thumbnail",ans:x,a:"style-name"},{ens:m,en:"path",ans:x,a:"style-name"},{ens:m,en:"polygon",ans:x,a:"style-name"},{ens:m,en:"polyline",ans:x,a:"style-name"},{ens:m,en:"rect",ans:x,a:"style-name"},{ens:m,en:"regular-polygon",ans:x,a:"style-name"},{ens:z,en:"annotation",ans:x,a:"style-name"}],"drawing-page":[{ens:m,en:"page",ans:m,a:"style-name"},{ens:x,en:"notes",ans:m,a:"style-name"},{ens:u,en:"handout-master",
ans:m,a:"style-name"},{ens:u,en:"master-page",ans:m,a:"style-name"}],"list-style":[{ens:s,en:"list",ans:s,a:"style-name"},{ens:s,en:"numbered-paragraph",ans:s,a:"style-name"},{ens:s,en:"list-item",ans:s,a:"style-override"},{ens:u,en:"style",ans:u,a:"list-style-name"}],data:[{ens:u,en:"style",ans:u,a:"data-style-name"},{ens:u,en:"style",ans:u,a:"percentage-data-style-name"},{ens:x,en:"date-time-decl",ans:u,a:"data-style-name"},{ens:s,en:"creation-date",ans:u,a:"data-style-name"},{ens:s,en:"creation-time",
ans:u,a:"data-style-name"},{ens:s,en:"database-display",ans:u,a:"data-style-name"},{ens:s,en:"date",ans:u,a:"data-style-name"},{ens:s,en:"editing-duration",ans:u,a:"data-style-name"},{ens:s,en:"expression",ans:u,a:"data-style-name"},{ens:s,en:"meta-field",ans:u,a:"data-style-name"},{ens:s,en:"modification-date",ans:u,a:"data-style-name"},{ens:s,en:"modification-time",ans:u,a:"data-style-name"},{ens:s,en:"print-date",ans:u,a:"data-style-name"},{ens:s,en:"print-time",ans:u,a:"data-style-name"},{ens:s,
en:"table-formula",ans:u,a:"data-style-name"},{ens:s,en:"time",ans:u,a:"data-style-name"},{ens:s,en:"user-defined",ans:u,a:"data-style-name"},{ens:s,en:"user-field-get",ans:u,a:"data-style-name"},{ens:s,en:"user-field-input",ans:u,a:"data-style-name"},{ens:s,en:"variable-get",ans:u,a:"data-style-name"},{ens:s,en:"variable-input",ans:u,a:"data-style-name"},{ens:s,en:"variable-set",ans:u,a:"data-style-name"}],"page-layout":[{ens:x,en:"notes",ans:u,a:"page-layout-name"},{ens:u,en:"handout-master",ans:u,
a:"page-layout-name"},{ens:u,en:"master-page",ans:u,a:"page-layout-name"}]},M,P=xmldom.XPath;this.collectUsedFontFaces=g;this.changeFontFaceNames=r;this.UsedStyleList=function(a,c){var b={};this.uses=function(a){var c=a.localName,d=a.getAttributeNS(m,"name")||a.getAttributeNS(u,"name");a="style"===c?a.getAttributeNS(u,"family"):a.namespaceURI===w?"data":c;return(a=b[a])?0<a[d]:!1};k(a,b);c&&q(c,b)};this.hasDerivedStyles=function(a,c,b){var d=b.getAttributeNS(u,"name");b=b.getAttributeNS(u,"family");
return P.getODFElementsWithXPath(a,"//style:*[@style:parent-style-name='"+d+"'][@style:family='"+b+"']",c).length?!0:!1};this.prefixStyleNames=function(a,c,b){var d;if(a){for(d=a.firstChild;d;){if(d.nodeType===Node.ELEMENT_NODE){var f=d,e=c,g=f.getAttributeNS(m,"name"),k=void 0;g?k=m:(g=f.getAttributeNS(u,"name"))&&(k=u);k&&f.setAttributeNS(k,A[k]+"name",e+g)}d=d.nextSibling}l(a,c);b&&l(b,c)}};this.removePrefixFromStyleNames=function(a,c,b){var d=RegExp("^"+c);if(a){for(c=a.firstChild;c;){if(c.nodeType===
Node.ELEMENT_NODE){var f=c,e=d,g=f.getAttributeNS(m,"name"),k=void 0;g?k=m:(g=f.getAttributeNS(u,"name"))&&(k=u);k&&(g=g.replace(e,""),f.setAttributeNS(k,A[k]+"name",g))}c=c.nextSibling}h(a,d);b&&h(b,d)}};this.determineStylesForNode=b;M=function(){var a,c,b,d,f,e={},m,g,k,p;for(b in I)if(I.hasOwnProperty(b))for(d=I[b],c=d.length,a=0;a<c;a+=1)f=d[a],k=f.en,p=f.ens,e.hasOwnProperty(k)?m=e[k]:e[k]=m={},m.hasOwnProperty(p)?g=m[p]:m[p]=g=[],g.push({ns:f.ans,localname:f.a,keyname:b});return e}()};
// Input 26
"function"!==typeof Object.create&&(Object.create=function(l){var h=function(){};h.prototype=l;return new h});
xmldom.LSSerializer=function(){function l(b){var k=b||{},n=function(b){var a={},c;for(c in b)b.hasOwnProperty(c)&&(a[b[c]]=c);return a}(b),e=[k],h=[n],g=0;this.push=function(){g+=1;k=e[g]=Object.create(k);n=h[g]=Object.create(n)};this.pop=function(){e.pop();h.pop();g-=1;k=e[g];n=h[g]};this.getLocalNamespaceDefinitions=function(){return n};this.getQName=function(b){var a=b.namespaceURI,c=0,d;if(!a)return b.localName;if(d=n[a])return d+":"+b.localName;do{d||!b.prefix?(d="ns"+c,c+=1):d=b.prefix;if(k[d]===
a)break;if(!k[d]){k[d]=a;n[a]=d;break}d=null}while(null===d);return d+":"+b.localName}}function h(b){return b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&apos;").replace(/"/g,"&quot;")}function b(d,p){var n="",e=k.filter?k.filter.acceptNode(p):NodeFilter.FILTER_ACCEPT,l;if(e===NodeFilter.FILTER_ACCEPT&&p.nodeType===Node.ELEMENT_NODE){d.push();l=d.getQName(p);var g,r=p.attributes,a,c,f,m="",v;g="<"+l;a=r.length;for(c=0;c<a;c+=1)f=r.item(c),"http://www.w3.org/2000/xmlns/"!==
f.namespaceURI&&(v=k.filter?k.filter.acceptNode(f):NodeFilter.FILTER_ACCEPT,v===NodeFilter.FILTER_ACCEPT&&(v=d.getQName(f),f="string"===typeof f.value?h(f.value):f.value,m+=" "+(v+'="'+f+'"')));a=d.getLocalNamespaceDefinitions();for(c in a)a.hasOwnProperty(c)&&((r=a[c])?"xmlns"!==r&&(g+=" xmlns:"+a[c]+'="'+c+'"'):g+=' xmlns="'+c+'"');n+=g+(m+">")}if(e===NodeFilter.FILTER_ACCEPT||e===NodeFilter.FILTER_SKIP){for(e=p.firstChild;e;)n+=b(d,e),e=e.nextSibling;p.nodeValue&&(n+=h(p.nodeValue))}l&&(n+="</"+
l+">",d.pop());return n}var k=this;this.filter=null;this.writeToString=function(d,k){if(!d)return"";var n=new l(k);return b(n,d)}};
// Input 27
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
(function(){function l(b){var a,c=e.length;for(a=0;a<c;a+=1)if("urn:oasis:names:tc:opendocument:xmlns:office:1.0"===b.namespaceURI&&b.localName===e[a])return a;return-1}function h(b,a){var c=new d.UsedStyleList(b,a),f=new odf.OdfNodeFilter;this.acceptNode=function(b){var d=f.acceptNode(b);d===NodeFilter.FILTER_ACCEPT&&b.parentNode===a&&b.nodeType===Node.ELEMENT_NODE&&(d=c.uses(b)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT);return d}}function b(b,a){var c=new h(b,a);this.acceptNode=function(a){var b=
c.acceptNode(a);b!==NodeFilter.FILTER_ACCEPT||!a.parentNode||a.parentNode.namespaceURI!==odf.Namespaces.textns||"s"!==a.parentNode.localName&&"tab"!==a.parentNode.localName||(b=NodeFilter.FILTER_REJECT);return b}}function k(b,a){if(a){var c=l(a),d,e=b.firstChild;if(-1!==c){for(;e;){d=l(e);if(-1!==d&&d>c)break;e=e.nextSibling}b.insertBefore(a,e)}}}var d=new odf.StyleInfo,p=new core.DomUtils,n=odf.Namespaces.stylens,e="meta settings scripts font-face-decls styles automatic-styles master-styles body".split(" "),
q=(new Date).getTime()+"_webodf_",g=new core.Base64;odf.ODFElement=function(){};odf.ODFDocumentElement=function(){};odf.ODFDocumentElement.prototype=new odf.ODFElement;odf.ODFDocumentElement.prototype.constructor=odf.ODFDocumentElement;odf.ODFDocumentElement.prototype.fontFaceDecls=null;odf.ODFDocumentElement.prototype.manifest=null;odf.ODFDocumentElement.prototype.settings=null;odf.ODFDocumentElement.namespaceURI="urn:oasis:names:tc:opendocument:xmlns:office:1.0";odf.ODFDocumentElement.localName=
"document";odf.AnnotationElement=function(){};odf.OdfPart=function(b,a,c,d){var e=this;this.size=0;this.type=null;this.name=b;this.container=c;this.url=null;this.mimetype=a;this.onstatereadychange=this.document=null;this.EMPTY=0;this.LOADING=1;this.DONE=2;this.state=this.EMPTY;this.data="";this.load=function(){null!==d&&(this.mimetype=a,d.loadAsDataURL(b,a,function(a,c){a&&runtime.log(a);e.url=c;if(e.onchange)e.onchange(e);if(e.onstatereadychange)e.onstatereadychange(e)}))}};odf.OdfPart.prototype.load=
function(){};odf.OdfPart.prototype.getUrl=function(){return this.data?"data:;base64,"+g.toBase64(this.data):null};odf.OdfContainer=function a(c,f){function e(a){for(var c=a.firstChild,b;c;)b=c.nextSibling,c.nodeType===Node.ELEMENT_NODE?e(c):c.nodeType===Node.PROCESSING_INSTRUCTION_NODE&&a.removeChild(c),c=b}function l(a){var c={},b,d,f=a.ownerDocument.createNodeIterator(a,NodeFilter.SHOW_ELEMENT,null,!1);for(a=f.nextNode();a;)"urn:oasis:names:tc:opendocument:xmlns:office:1.0"===a.namespaceURI&&("annotation"===
a.localName?(b=a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0","name"))&&(c.hasOwnProperty(b)?runtime.log("Warning: annotation name used more than once with <office:annotation/>: '"+b+"'"):c[b]=a):"annotation-end"===a.localName&&((b=a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0","name"))?c.hasOwnProperty(b)?(d=c[b],d.annotationEndElement?runtime.log("Warning: annotation name used more than once with <office:annotation-end/>: '"+b+"'"):d.annotationEndElement=
a):runtime.log("Warning: annotation end without an annotation start, name: '"+b+"'"):runtime.log("Warning: annotation end without a name found"))),a=f.nextNode()}function w(a,c){for(var b=a&&a.firstChild;b;)b.nodeType===Node.ELEMENT_NODE&&b.setAttributeNS("urn:webodf:names:scope","scope",c),b=b.nextSibling}function z(a){var c={},b;for(a=a.firstChild;a;)a.nodeType===Node.ELEMENT_NODE&&a.namespaceURI===n&&"font-face"===a.localName&&(b=a.getAttributeNS(n,"name"),c[b]=a),a=a.nextSibling;return c}function x(a,
c){var b=null,d,f,e;if(a)for(b=a.cloneNode(!0),d=b.firstElementChild;d;)f=d.nextElementSibling,(e=d.getAttributeNS("urn:webodf:names:scope","scope"))&&e!==c&&b.removeChild(d),d=f;return b}function u(a,c){var b,f,e,m=null,g={};if(a)for(c.forEach(function(a){d.collectUsedFontFaces(g,a)}),m=a.cloneNode(!0),b=m.firstElementChild;b;)f=b.nextElementSibling,e=b.getAttributeNS(n,"name"),g[e]||m.removeChild(b),b=f;return m}function t(a){var c=O.rootElement.ownerDocument,b;if(a){e(a.documentElement);try{b=
c.importNode(a.documentElement,!0)}catch(d){}}return b}function s(a){O.state=a;if(O.onchange)O.onchange(O);if(O.onstatereadychange)O.onstatereadychange(O)}function A(a){U=null;O.rootElement=a;a.fontFaceDecls=p.getDirectChild(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","font-face-decls");a.styles=p.getDirectChild(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","styles");a.automaticStyles=p.getDirectChild(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","automatic-styles");a.masterStyles=
p.getDirectChild(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","master-styles");a.body=p.getDirectChild(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","body");a.meta=p.getDirectChild(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","meta");a.settings=p.getDirectChild(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","settings");a.scripts=p.getDirectChild(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","scripts");l(a)}function I(c){var b=t(c),f=O.rootElement,e;b&&"document-styles"===
b.localName&&"urn:oasis:names:tc:opendocument:xmlns:office:1.0"===b.namespaceURI?(f.fontFaceDecls=p.getDirectChild(b,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","font-face-decls"),k(f,f.fontFaceDecls),e=p.getDirectChild(b,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","styles"),f.styles=e||c.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0","styles"),k(f,f.styles),e=p.getDirectChild(b,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","automatic-styles"),f.automaticStyles=
e||c.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0","automatic-styles"),w(f.automaticStyles,"document-styles"),k(f,f.automaticStyles),b=p.getDirectChild(b,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","master-styles"),f.masterStyles=b||c.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0","master-styles"),k(f,f.masterStyles),d.prefixStyleNames(f.automaticStyles,q,f.masterStyles)):s(a.INVALID)}function M(c){c=t(c);var b,f,e,m;if(c&&"document-content"===c.localName&&
"urn:oasis:names:tc:opendocument:xmlns:office:1.0"===c.namespaceURI){b=O.rootElement;e=p.getDirectChild(c,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","font-face-decls");if(b.fontFaceDecls&&e){m=b.fontFaceDecls;var g,h,l,A,q={};f=z(m);A=z(e);for(e=e.firstElementChild;e;){g=e.nextElementSibling;if(e.namespaceURI===n&&"font-face"===e.localName)if(h=e.getAttributeNS(n,"name"),f.hasOwnProperty(h)){if(!e.isEqualNode(f[h])){l=h;for(var M=f,F=A,E=0,v=void 0,v=l=l.replace(/\d+$/,"");M.hasOwnProperty(v)||
F.hasOwnProperty(v);)E+=1,v=l+E;l=v;e.setAttributeNS(n,"style:name",l);m.appendChild(e);f[l]=e;delete A[h];q[h]=l}}else m.appendChild(e),f[h]=e,delete A[h];e=g}m=q}else e&&(b.fontFaceDecls=e,k(b,e));f=p.getDirectChild(c,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","automatic-styles");w(f,"document-content");m&&d.changeFontFaceNames(f,m);if(b.automaticStyles&&f)for(m=f.firstChild;m;)b.automaticStyles.appendChild(m),m=f.firstChild;else f&&(b.automaticStyles=f,k(b,f));c=p.getDirectChild(c,"urn:oasis:names:tc:opendocument:xmlns:office:1.0",
"body");if(null===c)throw"<office:body/> tag is mising.";b.body=c;k(b,b.body)}else s(a.INVALID)}function P(a){a=t(a);var c;a&&"document-meta"===a.localName&&"urn:oasis:names:tc:opendocument:xmlns:office:1.0"===a.namespaceURI&&(c=O.rootElement,c.meta=p.getDirectChild(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","meta"),k(c,c.meta))}function F(a){a=t(a);var c;a&&"document-settings"===a.localName&&"urn:oasis:names:tc:opendocument:xmlns:office:1.0"===a.namespaceURI&&(c=O.rootElement,c.settings=
p.getDirectChild(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","settings"),k(c,c.settings))}function V(a){a=t(a);var c;if(a&&"manifest"===a.localName&&"urn:oasis:names:tc:opendocument:xmlns:manifest:1.0"===a.namespaceURI)for(c=O.rootElement,c.manifest=a,a=c.manifest.firstElementChild;a;)"file-entry"===a.localName&&"urn:oasis:names:tc:opendocument:xmlns:manifest:1.0"===a.namespaceURI&&(W[a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0","full-path")]=a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0",
"media-type")),a=a.nextElementSibling}function R(c){var b=c.shift();b?X.loadAsDOM(b.path,function(d,f){b.handler(f);O.state===a.INVALID?d?runtime.log("ERROR: Unable to load "+b.path+" - "+d):runtime.log("ERROR: Unable to load "+b.path):(d&&runtime.log("DEBUG: Unable to load "+b.path+" - "+d),R(c))}):(l(O.rootElement),s(a.DONE))}function Y(a){var c="";odf.Namespaces.forEachPrefix(function(a,b){c+=" xmlns:"+a+'="'+b+'"'});return'<?xml version="1.0" encoding="UTF-8"?><office:'+a+" "+c+' office:version="1.2">'}
function B(){var a=new xmldom.LSSerializer,c=Y("document-meta");a.filter=new odf.OdfNodeFilter;c+=a.writeToString(O.rootElement.meta,odf.Namespaces.namespaceMap);return c+"</office:document-meta>"}function ba(a,c){var b=document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0","manifest:file-entry");b.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0","manifest:full-path",a);b.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0","manifest:media-type",
c);return b}function E(){var a=runtime.parseXML('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2"></manifest:manifest>'),c=a.documentElement,b=new xmldom.LSSerializer,d;for(d in W)W.hasOwnProperty(d)&&c.appendChild(ba(d,W[d]));b.filter=new odf.OdfNodeFilter;return'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'+b.writeToString(a,odf.Namespaces.namespaceMap)}function J(){var a,c,b,f=odf.Namespaces.namespaceMap,e=new xmldom.LSSerializer,
m=Y("document-styles");c=x(O.rootElement.automaticStyles,"document-styles");b=O.rootElement.masterStyles.cloneNode(!0);a=u(O.rootElement.fontFaceDecls,[b,O.rootElement.styles,c]);d.removePrefixFromStyleNames(c,q,b);e.filter=new h(b,c);m+=e.writeToString(a,f);m+=e.writeToString(O.rootElement.styles,f);m+=e.writeToString(c,f);m+=e.writeToString(b,f);return m+"</office:document-styles>"}function H(){var a,c,d=odf.Namespaces.namespaceMap,f=new xmldom.LSSerializer,e=Y("document-content");c=x(O.rootElement.automaticStyles,
"document-content");a=u(O.rootElement.fontFaceDecls,[c]);f.filter=new b(O.rootElement.body,c);e+=f.writeToString(a,d);e+=f.writeToString(c,d);e+=f.writeToString(O.rootElement.body,d);return e+"</office:document-content>"}function Z(c,b){runtime.loadXML(c,function(c,d){if(c)b(c);else{var f=t(d);f&&"document"===f.localName&&"urn:oasis:names:tc:opendocument:xmlns:office:1.0"===f.namespaceURI?(A(f),s(a.DONE)):s(a.INVALID)}})}function S(a,c){var b;b=O.rootElement;var d=b.meta;d||(b.meta=d=document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0",
"meta"),k(b,d));b=d;a&&p.mapKeyValObjOntoNode(b,a,odf.Namespaces.lookupNamespaceURI);c&&p.removeKeyElementsFromNode(b,c,odf.Namespaces.lookupNamespaceURI)}function L(){function c(a,b){var d;b||(b=a);d=document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0",b);f[a]=d;f.appendChild(d)}var b=new core.Zip("",null),d=runtime.byteArrayFromString("application/vnd.oasis.opendocument.text","utf8"),f=O.rootElement,e=document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0",
"text");b.save("mimetype",d,!1,new Date);c("meta");c("settings");c("scripts");c("fontFaceDecls","font-face-decls");c("styles");c("automaticStyles","automatic-styles");c("masterStyles","master-styles");c("body");f.body.appendChild(e);W["/"]="application/vnd.oasis.opendocument.text";W["settings.xml"]="text/xml";W["meta.xml"]="text/xml";W["styles.xml"]="text/xml";W["content.xml"]="text/xml";s(a.DONE);return b}function y(){var a,c=new Date,b="";O.rootElement.settings&&O.rootElement.settings.firstElementChild&&
(a=new xmldom.LSSerializer,b=Y("document-settings"),a.filter=new odf.OdfNodeFilter,b+=a.writeToString(O.rootElement.settings,odf.Namespaces.namespaceMap),b+="</office:document-settings>");(a=b)?(a=runtime.byteArrayFromString(a,"utf8"),X.save("settings.xml",a,!0,c)):X.remove("settings.xml");b=runtime.getWindow();a="WebODF/"+("undefined"!==String(typeof webodf_version)?webodf_version:"FromSource");b&&(a=a+" "+b.navigator.userAgent);S({"meta:generator":a},null);a=runtime.byteArrayFromString(B(),"utf8");
X.save("meta.xml",a,!0,c);a=runtime.byteArrayFromString(J(),"utf8");X.save("styles.xml",a,!0,c);a=runtime.byteArrayFromString(H(),"utf8");X.save("content.xml",a,!0,c);a=runtime.byteArrayFromString(E(),"utf8");X.save("META-INF/manifest.xml",a,!0,c)}function $(a,c){y();X.writeAs(a,function(a){c(a)})}var O=this,X,W={},U;this.onstatereadychange=f;this.state=this.onchange=null;this.setRootElement=A;this.getContentElement=function(){var a;U||(a=O.rootElement.body,U=p.getDirectChild(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0",
"text")||p.getDirectChild(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","presentation")||p.getDirectChild(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","spreadsheet"));if(!U)throw"Could not find content element in <office:body/>.";return U};this.getDocumentType=function(){var a=O.getContentElement();return a&&a.localName};this.getPart=function(a){return new odf.OdfPart(a,W[a],O,X)};this.getPartData=function(a,c){X.load(a,c)};this.setMetadata=S;this.incrementEditingCycles=function(){var a;
for(a=(a=O.rootElement.meta)&&a.firstChild;a&&(a.namespaceURI!==odf.Namespaces.metans||"editing-cycles"!==a.localName);)a=a.nextSibling;for(a=a&&a.firstChild;a&&a.nodeType!==Node.TEXT_NODE;)a=a.nextSibling;a=a?a.data:null;a=a?parseInt(a,10):0;isNaN(a)&&(a=0);S({"meta:editing-cycles":a+1},null)};this.createByteArray=function(a,c){y();X.createByteArray(a,c)};this.saveAs=$;this.save=function(a){$(c,a)};this.getUrl=function(){return c};this.setBlob=function(a,c,b){b=g.convertBase64ToByteArray(b);X.save(a,
b,!1,new Date);W.hasOwnProperty(a)&&runtime.log(a+" has been overwritten.");W[a]=c};this.removeBlob=function(a){var c=X.remove(a);runtime.assert(c,"file is not found: "+a);delete W[a]};this.state=a.LOADING;this.rootElement=function(a){var c=document.createElementNS(a.namespaceURI,a.localName),b;a=new a.Type;for(b in a)a.hasOwnProperty(b)&&(c[b]=a[b]);return c}({Type:odf.ODFDocumentElement,namespaceURI:odf.ODFDocumentElement.namespaceURI,localName:odf.ODFDocumentElement.localName});X=c?new core.Zip(c,
function(b,d){X=d;b?Z(c,function(c){b&&(X.error=b+"\n"+c,s(a.INVALID))}):R([{path:"styles.xml",handler:I},{path:"content.xml",handler:M},{path:"meta.xml",handler:P},{path:"settings.xml",handler:F},{path:"META-INF/manifest.xml",handler:V}])}):L()};odf.OdfContainer.EMPTY=0;odf.OdfContainer.LOADING=1;odf.OdfContainer.DONE=2;odf.OdfContainer.INVALID=3;odf.OdfContainer.SAVING=4;odf.OdfContainer.MODIFIED=5;odf.OdfContainer.getContainer=function(a){return new odf.OdfContainer(a,null)};return odf.OdfContainer})();
// Input 28
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
odf.OdfUtils=function(){function l(a){return"image"===(a&&a.localName)&&a.namespaceURI===R}function h(a){return null!==a&&a.nodeType===Node.ELEMENT_NODE&&"frame"===a.localName&&a.namespaceURI===R&&"as-char"===a.getAttributeNS(V,"anchor-type")}function b(a){var c;(c="annotation"===(a&&a.localName)&&a.namespaceURI===odf.Namespaces.officens)||(c="div"===(a&&a.localName)&&"annotationWrapper"===a.className);return c}function k(a){return"a"===(a&&a.localName)&&a.namespaceURI===V}function d(a){var c=a&&
a.localName;return("p"===c||"h"===c)&&a.namespaceURI===V}function p(a){for(;a&&!d(a);)a=a.parentNode;return a}function n(a){return/^[ \t\r\n]+$/.test(a)}function e(a){if(null===a||a.nodeType!==Node.ELEMENT_NODE)return!1;var c=a.localName;return/^(span|p|h|a|meta)$/.test(c)&&a.namespaceURI===V||"span"===c&&"webodf-annotationHighlight"===a.className}function q(a){var c=a&&a.localName,b=!1;c&&(a=a.namespaceURI,a===V&&(b="s"===c||"tab"===c||"line-break"===c));return b}function g(a){return q(a)||h(a)||
b(a)}function r(a){var c=a&&a.localName,b=!1;c&&(a=a.namespaceURI,a===V&&(b="s"===c));return b}function a(a){for(;null!==a.firstChild&&e(a);)a=a.firstChild;return a}function c(a){for(;null!==a.lastChild&&e(a);)a=a.lastChild;return a}function f(a){for(;!d(a)&&null===a.previousSibling;)a=a.parentNode;return d(a)?null:c(a.previousSibling)}function m(c){for(;!d(c)&&null===c.nextSibling;)c=c.parentNode;return d(c)?null:a(c.nextSibling)}function v(a){for(var c=!1;a;)if(a.nodeType===Node.TEXT_NODE)if(0===
a.length)a=f(a);else return!n(a.data.substr(a.length-1,1));else g(a)?(c=!1===r(a),a=null):a=f(a);return c}function w(c){var b=!1,d;for(c=c&&a(c);c;){d=c.nodeType===Node.TEXT_NODE?c.length:0;if(0<d&&!n(c.data)){b=!0;break}if(g(c)){b=!0;break}c=m(c)}return b}function z(a,c){return n(a.data.substr(c))?!w(m(a)):!1}function x(a,c){var b=a.data,d;if(!n(b[c])||g(a.parentNode))return!1;0<c?n(b[c-1])||(d=!0):v(f(a))&&(d=!0);return!0===d?z(a,c)?!1:!0:!1}function u(a){return(a=/(-?[0-9]*[0-9][0-9]*(\.[0-9]*)?|0+\.[0-9]*[1-9][0-9]*|\.[0-9]*[1-9][0-9]*)((cm)|(mm)|(in)|(pt)|(pc)|(px)|(%))/.exec(a))?
{value:parseFloat(a[1]),unit:a[3]}:null}function t(a){return(a=u(a))&&(0>a.value||"%"===a.unit)?null:a}function s(a){return(a=u(a))&&"%"!==a.unit?null:a}function A(a){switch(a.namespaceURI){case odf.Namespaces.drawns:case odf.Namespaces.svgns:case odf.Namespaces.dr3dns:return!1;case odf.Namespaces.textns:switch(a.localName){case "note-body":case "ruby-text":return!1}break;case odf.Namespaces.officens:switch(a.localName){case "annotation":case "binary-data":case "event-listeners":return!1}break;default:switch(a.localName){case "cursor":case "editinfo":return!1}}return!0}
function I(a,c){for(;0<c.length&&!ba.rangeContainsNode(a,c[0]);)c.shift();for(;0<c.length&&!ba.rangeContainsNode(a,c[c.length-1]);)c.pop()}function M(a,c,d){var f;f=ba.getNodesInRange(a,function(a){var c=NodeFilter.FILTER_REJECT;if(q(a.parentNode)||b(a))c=NodeFilter.FILTER_REJECT;else if(a.nodeType===Node.TEXT_NODE){if(d||Boolean(p(a)&&(!n(a.textContent)||x(a,0))))c=NodeFilter.FILTER_ACCEPT}else if(g(a))c=NodeFilter.FILTER_ACCEPT;else if(A(a)||e(a))c=NodeFilter.FILTER_SKIP;return c},NodeFilter.SHOW_ELEMENT|
NodeFilter.SHOW_TEXT);c||I(a,f);return f}function P(a,c,d){for(;a;){if(d(a)){c[0]!==a&&c.unshift(a);break}if(b(a))break;a=a.parentNode}}function F(a,c){var b=a;if(c<b.childNodes.length-1)b=b.childNodes[c+1];else{for(;!b.nextSibling;)b=b.parentNode;b=b.nextSibling}for(;b.firstChild;)b=b.firstChild;return b}var V=odf.Namespaces.textns,R=odf.Namespaces.drawns,Y=odf.Namespaces.xlinkns,B=/^\s*$/,ba=new core.DomUtils;this.isImage=l;this.isCharacterFrame=h;this.isInlineRoot=b;this.isTextSpan=function(a){return"span"===
(a&&a.localName)&&a.namespaceURI===V};this.isHyperlink=k;this.getHyperlinkTarget=function(a){return a.getAttributeNS(Y,"href")};this.isParagraph=d;this.getParagraphElement=p;this.isWithinTrackedChanges=function(a,c){for(;a&&a!==c;){if(a.namespaceURI===V&&"tracked-changes"===a.localName)return!0;a=a.parentNode}return!1};this.isListItem=function(a){return"list-item"===(a&&a.localName)&&a.namespaceURI===V};this.isLineBreak=function(a){return"line-break"===(a&&a.localName)&&a.namespaceURI===V};this.isODFWhitespace=
n;this.isGroupingElement=e;this.isCharacterElement=q;this.isAnchoredAsCharacterElement=g;this.isSpaceElement=r;this.firstChild=a;this.lastChild=c;this.previousNode=f;this.nextNode=m;this.scanLeftForNonSpace=v;this.lookLeftForCharacter=function(a){var c,b=c=0;a.nodeType===Node.TEXT_NODE&&(b=a.length);0<b?(c=a.data,c=n(c.substr(b-1,1))?1===b?v(f(a))?2:0:n(c.substr(b-2,1))?0:2:1):g(a)&&(c=1);return c};this.lookRightForCharacter=function(a){var c=!1,b=0;a&&a.nodeType===Node.TEXT_NODE&&(b=a.length);0<
b?c=!n(a.data.substr(0,1)):g(a)&&(c=!0);return c};this.scanLeftForAnyCharacter=function(a){var b=!1,d;for(a=a&&c(a);a;){d=a.nodeType===Node.TEXT_NODE?a.length:0;if(0<d&&!n(a.data)){b=!0;break}if(g(a)){b=!0;break}a=f(a)}return b};this.scanRightForAnyCharacter=w;this.isTrailingWhitespace=z;this.isSignificantWhitespace=x;this.isDowngradableSpaceElement=function(a){return a.namespaceURI===V&&"s"===a.localName?v(f(a))&&w(m(a)):!1};this.getFirstNonWhitespaceChild=function(a){for(a=a&&a.firstChild;a&&a.nodeType===
Node.TEXT_NODE&&B.test(a.nodeValue);)a=a.nextSibling;return a};this.parseLength=u;this.parseNonNegativeLength=t;this.parseFoFontSize=function(a){var c;c=(c=u(a))&&(0>=c.value||"%"===c.unit)?null:c;return c||s(a)};this.parseFoLineHeight=function(a){return t(a)||s(a)};this.isTextContentContainingNode=A;this.getTextNodes=function(a,c){var b;b=ba.getNodesInRange(a,function(a){var c=NodeFilter.FILTER_REJECT;a.nodeType===Node.TEXT_NODE?Boolean(p(a)&&(!n(a.textContent)||x(a,0)))&&(c=NodeFilter.FILTER_ACCEPT):
A(a)&&(c=NodeFilter.FILTER_SKIP);return c},NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);c||I(a,b);return b};this.getTextElements=M;this.getParagraphElements=function(a){var c;c=ba.getNodesInRange(a,function(a){var c=NodeFilter.FILTER_REJECT;if(d(a))c=NodeFilter.FILTER_ACCEPT;else if(A(a)||e(a))c=NodeFilter.FILTER_SKIP;return c},NodeFilter.SHOW_ELEMENT);P(a.startContainer,c,d);return c};this.getImageElements=function(a){var c;c=ba.getNodesInRange(a,function(a){var c=NodeFilter.FILTER_SKIP;l(a)&&(c=
NodeFilter.FILTER_ACCEPT);return c},NodeFilter.SHOW_ELEMENT);P(a.startContainer,c,l);return c};this.getHyperlinkElements=function(a){var c=[],b=a.cloneRange();a.collapsed&&a.endContainer.nodeType===Node.ELEMENT_NODE&&(a=F(a.endContainer,a.endOffset),a.nodeType===Node.TEXT_NODE&&b.setEnd(a,1));M(b,!0,!1).forEach(function(a){for(a=a.parentNode;!d(a);){if(k(a)&&-1===c.indexOf(a)){c.push(a);break}a=a.parentNode}});b.detach();return c}};
// Input 29
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.AnnotatableCanvas=function(){};gui.AnnotatableCanvas.prototype.refreshSize=function(){};gui.AnnotatableCanvas.prototype.getZoomLevel=function(){};gui.AnnotatableCanvas.prototype.getSizer=function(){};
gui.AnnotationViewManager=function(l,h,b,k){function d(a){var b=a.annotationEndElement,d=g.createRange(),e=a.getAttributeNS(odf.Namespaces.officens,"name");b&&(d.setStart(a,a.childNodes.length),d.setEnd(b,0),a=r.getTextNodes(d,!1),a.forEach(function(a){var c=g.createElement("span");c.className="webodf-annotationHighlight";c.setAttribute("annotation",e);a.parentNode.insertBefore(c,a);c.appendChild(a)}));d.detach()}function p(c){var d=l.getSizer();c?(b.style.display="inline-block",d.style.paddingRight=
a.getComputedStyle(b).width):(b.style.display="none",d.style.paddingRight=0);l.refreshSize()}function n(){q.sort(function(a,b){return 0!==(a.compareDocumentPosition(b)&Node.DOCUMENT_POSITION_FOLLOWING)?-1:1})}function e(){var a;for(a=0;a<q.length;a+=1){var d=q[a],e=d.parentNode,g=e.nextElementSibling,k=g.nextElementSibling,n=e.parentNode,p=0,p=q[q.indexOf(d)-1],h=void 0,d=l.getZoomLevel();e.style.left=(b.getBoundingClientRect().left-n.getBoundingClientRect().left)/d+"px";e.style.width=b.getBoundingClientRect().width/
d+"px";g.style.width=parseFloat(e.style.left)-30+"px";p&&(h=p.parentNode.getBoundingClientRect(),20>=(n.getBoundingClientRect().top-h.bottom)/d?e.style.top=Math.abs(n.getBoundingClientRect().top-h.bottom)/d+20+"px":e.style.top="0px");k.style.left=g.getBoundingClientRect().width/d+"px";var g=k.style,n=k.getBoundingClientRect().left/d,p=k.getBoundingClientRect().top/d,h=e.getBoundingClientRect().left/d,r=e.getBoundingClientRect().top/d,s=0,A=0,s=h-n,s=s*s,A=r-p,A=A*A,n=Math.sqrt(s+A);g.width=n+"px";
p=Math.asin((e.getBoundingClientRect().top-k.getBoundingClientRect().top)/(d*parseFloat(k.style.width)));k.style.transform="rotate("+p+"rad)";k.style.MozTransform="rotate("+p+"rad)";k.style.WebkitTransform="rotate("+p+"rad)";k.style.msTransform="rotate("+p+"rad)"}}var q=[],g=h.ownerDocument,r=new odf.OdfUtils,a=runtime.getWindow();runtime.assert(Boolean(a),"Expected to be run in an environment which has a global window, like a browser.");this.rerenderAnnotations=e;this.getMinimumHeightForAnnotationPane=
function(){return"none"!==b.style.display&&0<q.length?(q[q.length-1].parentNode.getBoundingClientRect().bottom-b.getBoundingClientRect().top)/l.getZoomLevel()+"px":null};this.addAnnotation=function(a){p(!0);q.push(a);n();var b=g.createElement("div"),m=g.createElement("div"),h=g.createElement("div"),l=g.createElement("div"),r;b.className="annotationWrapper";a.parentNode.insertBefore(b,a);m.className="annotationNote";m.appendChild(a);k&&(r=g.createElement("div"),r.className="annotationRemoveButton",
m.appendChild(r));h.className="annotationConnector horizontal";l.className="annotationConnector angular";b.appendChild(m);b.appendChild(h);b.appendChild(l);a.annotationEndElement&&d(a);e()};this.forgetAnnotations=function(){for(;q.length;){var a=q[0],b=q.indexOf(a),d=a.parentNode.parentNode;"div"===d.localName&&(d.parentNode.insertBefore(a,d),d.parentNode.removeChild(d));for(var a=a.getAttributeNS(odf.Namespaces.officens,"name"),a=g.querySelectorAll('span.webodf-annotationHighlight[annotation="'+
a+'"]'),e=d=void 0,d=0;d<a.length;d+=1){for(e=a.item(d);e.firstChild;)e.parentNode.insertBefore(e.firstChild,e);e.parentNode.removeChild(e)}-1!==b&&q.splice(b,1);0===q.length&&p(!1)}}};
// Input 30
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
(function(){function l(k,d,p,n,e){var h,g=0,r;for(r in k)if(k.hasOwnProperty(r)){if(g===p){h=r;break}g+=1}h?d.getPartData(k[h].href,function(a,c){if(a)runtime.log(a);else if(c){var f="@font-face { font-family: '"+(k[h].family||h)+"'; src: url(data:application/x-font-ttf;charset=binary;base64,"+b.convertUTF8ArrayToBase64(c)+') format("truetype"); }';try{n.insertRule(f,n.cssRules.length)}catch(m){runtime.log("Problem inserting rule in CSS: "+runtime.toJson(m)+"\nRule: "+f)}}else runtime.log("missing font data for "+
k[h].href);l(k,d,p+1,n,e)}):e&&e()}var h=xmldom.XPath,b=new core.Base64;odf.FontLoader=function(){this.loadFonts=function(b,d){for(var p=b.rootElement.fontFaceDecls;d.cssRules.length;)d.deleteRule(d.cssRules.length-1);if(p){var n={},e,q,g,r;if(p)for(p=h.getODFElementsWithXPath(p,"style:font-face[svg:font-face-src]",odf.Namespaces.lookupNamespaceURI),e=0;e<p.length;e+=1)q=p[e],g=q.getAttributeNS(odf.Namespaces.stylens,"name"),r=q.getAttributeNS(odf.Namespaces.svgns,"font-family"),q=h.getODFElementsWithXPath(q,
"svg:font-face-src/svg:font-face-uri",odf.Namespaces.lookupNamespaceURI),0<q.length&&(q=q[0].getAttributeNS(odf.Namespaces.xlinkns,"href"),n[g]={href:q,family:r});l(n,b,0,d)}}};return odf.FontLoader})();
// Input 31
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
odf.Formatting=function(){function l(a){return(a=t[a])?u.mergeObjects({},a):{}}function h(){for(var a=r.rootElement.fontFaceDecls,b={},d,e,a=a&&a.firstElementChild;a;){if(d=a.getAttributeNS(f,"name"))if((e=a.getAttributeNS(c,"font-family"))||0<a.getElementsByTagNameNS(c,"font-face-uri").length)b[d]=e;a=a.nextElementSibling}return b}function b(a){for(var c=r.rootElement.styles.firstElementChild;c;){if(c.namespaceURI===f&&"default-style"===c.localName&&c.getAttributeNS(f,"family")===a)return c;c=c.nextElementSibling}return null}
function k(a,c,b){var d,e,g;b=b||[r.rootElement.automaticStyles,r.rootElement.styles];for(g=0;g<b.length;g+=1)for(d=b[g],d=d.firstElementChild;d;){e=d.getAttributeNS(f,"name");if(d.namespaceURI===f&&"style"===d.localName&&d.getAttributeNS(f,"family")===c&&e===a||"list-style"===c&&d.namespaceURI===m&&"list-style"===d.localName&&e===a||"data"===c&&d.namespaceURI===v&&e===a)return d;d=d.nextElementSibling}return null}function d(a){for(var c,b,d,e,m={},g=a.firstElementChild;g;){if(g.namespaceURI===f)for(d=
m[g.nodeName]={},b=g.attributes,c=0;c<b.length;c+=1)e=b.item(c),d[e.name]=e.value;g=g.nextElementSibling}b=a.attributes;for(c=0;c<b.length;c+=1)e=b.item(c),m[e.name]=e.value;return m}function p(a,c){for(var e=r.rootElement.styles,m,g={},p=a.getAttributeNS(f,"family"),h=a;h;)m=d(h),g=u.mergeObjects(m,g),h=(m=h.getAttributeNS(f,"parent-style-name"))?k(m,p,[e]):null;if(h=b(p))m=d(h),g=u.mergeObjects(m,g);!1!==c&&(m=l(p),g=u.mergeObjects(m,g));return g}function n(c,b){function d(a){Object.keys(a).forEach(function(c){Object.keys(a[c]).forEach(function(a){g+=
"|"+c+":"+a+"|"})})}for(var e=c.nodeType===Node.TEXT_NODE?c.parentNode:c,f,m=[],g="",k=!1;e;)!k&&z.isGroupingElement(e)&&(k=!0),(f=a.determineStylesForNode(e))&&m.push(f),e=e.parentNode;k&&(m.forEach(d),b&&(b[g]=m));return k?m:void 0}function e(a){var c={orderedStyles:[]};a.forEach(function(a){Object.keys(a).forEach(function(b){var d=Object.keys(a[b])[0],e={name:d,family:b,displayName:void 0,isCommonStyle:!1},m;(m=k(d,b))?(b=p(m),c=u.mergeObjects(b,c),e.displayName=m.getAttributeNS(f,"display-name"),
e.isCommonStyle=m.parentNode===r.rootElement.styles):runtime.log("No style element found for '"+d+"' of family '"+b+"'");c.orderedStyles.push(e)})});return c}function q(a,c){var b={},d=[];c||(c={});a.forEach(function(a){n(a,b)});Object.keys(b).forEach(function(a){c[a]||(c[a]=e(b[a]));d.push(c[a])});return d}function g(a,c){var b=z.parseLength(a),d=c;if(b)switch(b.unit){case "cm":d=b.value;break;case "mm":d=0.1*b.value;break;case "in":d=2.54*b.value;break;case "pt":d=0.035277778*b.value;break;case "pc":case "px":case "em":break;
default:runtime.log("Unit identifier: "+b.unit+" is not supported.")}return d}var r,a=new odf.StyleInfo,c=odf.Namespaces.svgns,f=odf.Namespaces.stylens,m=odf.Namespaces.textns,v=odf.Namespaces.numberns,w=odf.Namespaces.fons,z=new odf.OdfUtils,x=new core.DomUtils,u=new core.Utils,t={paragraph:{"style:paragraph-properties":{"fo:text-align":"left"}}};this.getSystemDefaultStyleAttributes=l;this.setOdfContainer=function(a){r=a};this.getFontMap=h;this.getAvailableParagraphStyles=function(){for(var a=r.rootElement.styles,
c,b,d=[],a=a&&a.firstElementChild;a;)"style"===a.localName&&a.namespaceURI===f&&(c=a.getAttributeNS(f,"family"),"paragraph"===c&&(c=a.getAttributeNS(f,"name"),b=a.getAttributeNS(f,"display-name")||c,c&&b&&d.push({name:c,displayName:b}))),a=a.nextElementSibling;return d};this.isStyleUsed=function(c){var b,d=r.rootElement;b=a.hasDerivedStyles(d,odf.Namespaces.lookupNamespaceURI,c);c=(new a.UsedStyleList(d.styles)).uses(c)||(new a.UsedStyleList(d.automaticStyles)).uses(c)||(new a.UsedStyleList(d.body)).uses(c);
return b||c};this.getDefaultStyleElement=b;this.getStyleElement=k;this.getStyleAttributes=d;this.getInheritedStyleAttributes=p;this.getFirstCommonParentStyleNameOrSelf=function(a){var c=r.rootElement.automaticStyles,b=r.rootElement.styles,d;for(d=k(a,"paragraph",[c]);d;)a=d.getAttributeNS(f,"parent-style-name"),d=k(a,"paragraph",[c]);return(d=k(a,"paragraph",[b]))?a:null};this.hasParagraphStyle=function(a){return Boolean(k(a,"paragraph"))};this.getAppliedStyles=q;this.getAppliedStylesForElement=function(a,
c){return q([a],c)[0]};this.updateStyle=function(a,b){var d,e;x.mapObjOntoNode(a,b,odf.Namespaces.lookupNamespaceURI);(d=b["style:text-properties"]&&b["style:text-properties"]["style:font-name"])&&!h().hasOwnProperty(d)&&(e=a.ownerDocument.createElementNS(f,"style:font-face"),e.setAttributeNS(f,"style:name",d),e.setAttributeNS(c,"svg:font-family",d),r.rootElement.fontFaceDecls.appendChild(e))};this.createDerivedStyleObject=function(a,c,b){var e=k(a,c);runtime.assert(Boolean(e),"No style element found for '"+
a+"' of family '"+c+"'");a=e.parentNode===r.rootElement.styles?{"style:parent-style-name":a}:d(e);a["style:family"]=c;u.mergeObjects(a,b);return a};this.getDefaultTabStopDistance=function(){for(var a=b("paragraph"),a=a&&a.firstElementChild,c;a;)a.namespaceURI===f&&"paragraph-properties"===a.localName&&(c=a.getAttributeNS(f,"tab-stop-distance")),a=a.nextElementSibling;c||(c="1.25cm");return z.parseNonNegativeLength(c)};this.getContentSize=function(a,c){var b,d,e,m,h,p,n,l,q,v,u;a:{var t,z,S;b=k(a,
c);runtime.assert("paragraph"===c||"table"===c,"styleFamily has to be either paragraph or table");if(b){t=b.getAttributeNS(f,"master-page-name")||"Standard";for(b=r.rootElement.masterStyles.lastElementChild;b&&b.getAttributeNS(f,"name")!==t;)b=b.previousElementSibling;t=b.getAttributeNS(f,"page-layout-name");z=x.getElementsByTagNameNS(r.rootElement.automaticStyles,f,"page-layout");for(S=0;S<z.length;S+=1)if(b=z[S],b.getAttributeNS(f,"name")===t)break a}b=null}b||(b=x.getDirectChild(r.rootElement.styles,
f,"default-page-layout"));if(b=x.getDirectChild(b,f,"page-layout-properties"))d=b.getAttributeNS(f,"print-orientation")||"portrait","portrait"===d?(d=21.001,e=29.7):(d=29.7,e=21.001),d=g(b.getAttributeNS(w,"page-width"),d),e=g(b.getAttributeNS(w,"page-height"),e),m=g(b.getAttributeNS(w,"margin"),null),null===m?(m=g(b.getAttributeNS(w,"margin-left"),2),h=g(b.getAttributeNS(w,"margin-right"),2),p=g(b.getAttributeNS(w,"margin-top"),2),n=g(b.getAttributeNS(w,"margin-bottom"),2)):m=h=p=n=m,l=g(b.getAttributeNS(w,
"padding"),null),null===l?(l=g(b.getAttributeNS(w,"padding-left"),0),q=g(b.getAttributeNS(w,"padding-right"),0),v=g(b.getAttributeNS(w,"padding-top"),0),u=g(b.getAttributeNS(w,"padding-bottom"),0)):l=q=v=u=l;return{width:d-m-h-l-q,height:e-p-n-v-u}}};
// Input 32
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
odf.StyleTreeNode=function(l){this.derivedStyles={};this.element=l};
odf.Style2CSS=function(){function l(a){var c,b,d,e={};if(!a)return e;for(a=a.firstElementChild;a;){if(b=a.namespaceURI!==f||"style"!==a.localName&&"default-style"!==a.localName?a.namespaceURI===w&&"list-style"===a.localName?"list":a.namespaceURI!==f||"page-layout"!==a.localName&&"default-page-layout"!==a.localName?void 0:"page":a.getAttributeNS(f,"family"))(c=a.getAttributeNS(f,"name"))||(c=""),e.hasOwnProperty(b)?d=e[b]:e[b]=d={},d[c]=a;a=a.nextElementSibling}return e}function h(a,c){if(a.hasOwnProperty(c))return a[c];
var b,d=null;for(b in a)if(a.hasOwnProperty(b)&&(d=h(a[b].derivedStyles,c)))break;return d}function b(a,c,d){var e,m,g;if(!c.hasOwnProperty(a))return null;e=new odf.StyleTreeNode(c[a]);m=e.element.getAttributeNS(f,"parent-style-name");g=null;m&&(g=h(d,m)||b(m,c,d));g?g.derivedStyles[a]=e:d[a]=e;delete c[a];return e}function k(a,c){for(var d in a)a.hasOwnProperty(d)&&b(d,a,c)}function d(a,c,b){var e=[];b=b.derivedStyles;var f;var m=t[a],g;void 0===m?c=null:(g=c?"["+m+'|style-name="'+c+'"]':"","presentation"===
m&&(m="draw",g=c?'[presentation|style-name="'+c+'"]':""),c=m+"|"+s[a].join(g+","+m+"|")+g);null!==c&&e.push(c);for(f in b)b.hasOwnProperty(f)&&(c=d(a,f,b[f]),e=e.concat(c));return e}function p(a,c){var b="",d,e,f;for(d=0;d<c.length;d+=1)if(e=c[d],f=a.getAttributeNS(e[0],e[1])){f=f.trim();if(E.hasOwnProperty(e[1])){var m=f.indexOf(" "),g=void 0,k=void 0;-1!==m?(g=f.substring(0,m),k=f.substring(m)):(g=f,k="");(g=H.parseLength(g))&&"pt"===g.unit&&0.75>g.value&&(f="0.75pt"+k)}e[2]&&(b+=e[2]+":"+f+";")}return b}
function n(c){return(c=u.getDirectChild(c,f,"text-properties"))?H.parseFoFontSize(c.getAttributeNS(a,"font-size")):null}function e(a,c,b,d){return c+c+b+b+d+d}function q(c,b,d,e){b='text|list[text|style-name="'+b+'"]';var m=d.getAttributeNS(w,"level");d=u.getDirectChild(d,f,"list-level-properties");d=u.getDirectChild(d,f,"list-level-label-alignment");var g,k;d&&(g=d.getAttributeNS(a,"text-indent"),k=d.getAttributeNS(a,"margin-left"));g||(g="-0.6cm");d="-"===g.charAt(0)?g.substring(1):"-"+g;for(m=
m&&parseInt(m,10);1<m;)b+=" > text|list-item > text|list",m-=1;if(k){m=b+" > text|list-item > *:not(text|list):first-child";m+="{";m=m+("margin-left:"+k+";")+"}";try{c.insertRule(m,c.cssRules.length)}catch(h){runtime.log("cannot load rule: "+m)}}e=b+" > text|list-item > *:not(text|list):first-child:before{"+e+";";e=e+"counter-increment:list;"+("margin-left:"+g+";");e+="width:"+d+";";e+="display:inline-block}";try{c.insertRule(e,c.cssRules.length)}catch(p){runtime.log("cannot load rule: "+e)}}function g(b,
m,k,h){if("list"===m)for(var l=h.element.firstChild,s,t;l;){if(l.namespaceURI===w)if(s=l,"list-level-style-number"===l.localName){var E=s;t=E.getAttributeNS(f,"num-format");var N=E.getAttributeNS(f,"num-suffix")||"",E=E.getAttributeNS(f,"num-prefix")||"",Q={1:"decimal",a:"lower-latin",A:"upper-latin",i:"lower-roman",I:"upper-roman"},T="";E&&(T+=' "'+E+'"');T=Q.hasOwnProperty(t)?T+(" counter(list, "+Q[t]+")"):t?T+(' "'+t+'"'):T+" ''";t="content:"+T+' "'+N+'"';q(b,k,s,t)}else"list-level-style-image"===
l.localName?(t="content: none;",q(b,k,s,t)):"list-level-style-bullet"===l.localName&&(t="content: '"+s.getAttributeNS(w,"bullet-char")+"';",q(b,k,s,t));l=l.nextSibling}else if("page"===m){if(t=h.element,E=N=k="",l=u.getDirectChild(t,f,"page-layout-properties"))if(s=t.getAttributeNS(f,"name"),k+=p(l,B),(N=u.getDirectChild(l,f,"background-image"))&&(E=N.getAttributeNS(z,"href"))&&(k=k+("background-image: url('odfkit:"+E+"');")+p(N,I)),"presentation"===Z)for(t=(t=u.getDirectChild(t.parentNode.parentNode,
c,"master-styles"))&&t.firstElementChild;t;){if(t.namespaceURI===f&&"master-page"===t.localName&&t.getAttributeNS(f,"page-layout-name")===s){E=t.getAttributeNS(f,"name");N="draw|page[draw|master-page-name="+E+"] {"+k+"}";E="office|body, draw|page[draw|master-page-name="+E+"] {"+p(l,ba)+" }";try{b.insertRule(N,b.cssRules.length),b.insertRule(E,b.cssRules.length)}catch(ia){throw ia;}}t=t.nextElementSibling}else if("text"===Z){N="office|text {"+k+"}";E="office|body {width: "+l.getAttributeNS(a,"page-width")+
";}";try{b.insertRule(N,b.cssRules.length),b.insertRule(E,b.cssRules.length)}catch(fa){throw fa;}}}else{k=d(m,k,h).join(",");l="";if(s=u.getDirectChild(h.element,f,"text-properties")){E=s;t=T="";N=1;s=""+p(E,A);Q=E.getAttributeNS(f,"text-underline-style");"solid"===Q&&(T+=" underline");Q=E.getAttributeNS(f,"text-line-through-style");"solid"===Q&&(T+=" line-through");T.length&&(s+="text-decoration:"+T+";");if(T=E.getAttributeNS(f,"font-name")||E.getAttributeNS(a,"font-family"))Q=J[T],s+="font-family: "+
(Q||T)+";";Q=E.parentNode;if(E=n(Q)){for(;Q;){if(E=n(Q)){if("%"!==E.unit){t="font-size: "+E.value*N+E.unit+";";break}N*=E.value/100}E=Q;T=Q="";Q=null;"default-style"===E.localName?Q=null:(Q=E.getAttributeNS(f,"parent-style-name"),T=E.getAttributeNS(f,"family"),Q=y.getODFElementsWithXPath(S,Q?"//style:*[@style:name='"+Q+"'][@style:family='"+T+"']":"//style:default-style[@style:family='"+T+"']",odf.Namespaces.lookupNamespaceURI)[0])}t||(t="font-size: "+parseFloat(L)*N+$.getUnits(L)+";");s+=t}l+=s}if(s=
u.getDirectChild(h.element,f,"paragraph-properties"))t=s,s=""+p(t,M),(N=u.getDirectChild(t,f,"background-image"))&&(E=N.getAttributeNS(z,"href"))&&(s=s+("background-image: url('odfkit:"+E+"');")+p(N,I)),(t=t.getAttributeNS(a,"line-height"))&&"normal"!==t&&(t=H.parseFoLineHeight(t),s="%"!==t.unit?s+("line-height: "+t.value+t.unit+";"):s+("line-height: "+t.value/100+";")),l+=s;if(s=u.getDirectChild(h.element,f,"graphic-properties"))E=s,s=""+p(E,P),t=E.getAttributeNS(r,"opacity"),N=E.getAttributeNS(r,
"fill"),E=E.getAttributeNS(r,"fill-color"),"solid"===N||"hatch"===N?E&&"none"!==E?(t=isNaN(parseFloat(t))?1:parseFloat(t)/100,N=E.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,e),(E=(N=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(N))?{r:parseInt(N[1],16),g:parseInt(N[2],16),b:parseInt(N[3],16)}:null)&&(s+="background-color: rgba("+E.r+","+E.g+","+E.b+","+t+");")):s+="background: none;":"none"===N&&(s+="background: none;"),l+=s;if(s=u.getDirectChild(h.element,f,"drawing-page-properties"))t=""+p(s,
P),"true"===s.getAttributeNS(x,"background-visible")&&(t+="background: none;"),l+=t;if(s=u.getDirectChild(h.element,f,"table-cell-properties"))s=""+p(s,F),l+=s;if(s=u.getDirectChild(h.element,f,"table-row-properties"))s=""+p(s,R),l+=s;if(s=u.getDirectChild(h.element,f,"table-column-properties"))s=""+p(s,V),l+=s;if(s=u.getDirectChild(h.element,f,"table-properties"))t=s,s=""+p(t,Y),t=t.getAttributeNS(v,"border-model"),"collapsing"===t?s+="border-collapse:collapse;":"separating"===t&&(s+="border-collapse:separate;"),
l+=s;if(0!==l.length)try{b.insertRule(k+"{"+l+"}",b.cssRules.length)}catch(da){throw da;}}for(var ha in h.derivedStyles)h.derivedStyles.hasOwnProperty(ha)&&g(b,m,ha,h.derivedStyles[ha])}var r=odf.Namespaces.drawns,a=odf.Namespaces.fons,c=odf.Namespaces.officens,f=odf.Namespaces.stylens,m=odf.Namespaces.svgns,v=odf.Namespaces.tablens,w=odf.Namespaces.textns,z=odf.Namespaces.xlinkns,x=odf.Namespaces.presentationns,u=new core.DomUtils,t={graphic:"draw","drawing-page":"draw",paragraph:"text",presentation:"presentation",
ruby:"text",section:"text",table:"table","table-cell":"table","table-column":"table","table-row":"table",text:"text",list:"text",page:"office"},s={graphic:"circle connected control custom-shape ellipse frame g line measure page page-thumbnail path polygon polyline rect regular-polygon".split(" "),paragraph:"alphabetical-index-entry-template h illustration-index-entry-template index-source-style object-index-entry-template p table-index-entry-template table-of-content-entry-template user-index-entry-template".split(" "),
presentation:"caption circle connector control custom-shape ellipse frame g line measure page-thumbnail path polygon polyline rect regular-polygon".split(" "),"drawing-page":"caption circle connector control page custom-shape ellipse frame g line measure page-thumbnail path polygon polyline rect regular-polygon".split(" "),ruby:["ruby","ruby-text"],section:"alphabetical-index bibliography illustration-index index-title object-index section table-of-content table-index user-index".split(" "),table:["background",
"table"],"table-cell":"body covered-table-cell even-columns even-rows first-column first-row last-column last-row odd-columns odd-rows table-cell".split(" "),"table-column":["table-column"],"table-row":["table-row"],text:"a index-entry-chapter index-entry-link-end index-entry-link-start index-entry-page-number index-entry-span index-entry-tab-stop index-entry-text index-title-template linenumbering-configuration list-level-style-number list-level-style-bullet outline-level-style span".split(" "),
list:["list-item"]},A=[[a,"color","color"],[a,"background-color","background-color"],[a,"font-weight","font-weight"],[a,"font-style","font-style"]],I=[[f,"repeat","background-repeat"]],M=[[a,"background-color","background-color"],[a,"text-align","text-align"],[a,"text-indent","text-indent"],[a,"padding","padding"],[a,"padding-left","padding-left"],[a,"padding-right","padding-right"],[a,"padding-top","padding-top"],[a,"padding-bottom","padding-bottom"],[a,"border-left","border-left"],[a,"border-right",
"border-right"],[a,"border-top","border-top"],[a,"border-bottom","border-bottom"],[a,"margin","margin"],[a,"margin-left","margin-left"],[a,"margin-right","margin-right"],[a,"margin-top","margin-top"],[a,"margin-bottom","margin-bottom"],[a,"border","border"]],P=[[a,"background-color","background-color"],[a,"min-height","min-height"],[r,"stroke","border"],[m,"stroke-color","border-color"],[m,"stroke-width","border-width"],[a,"border","border"],[a,"border-left","border-left"],[a,"border-right","border-right"],
[a,"border-top","border-top"],[a,"border-bottom","border-bottom"]],F=[[a,"background-color","background-color"],[a,"border-left","border-left"],[a,"border-right","border-right"],[a,"border-top","border-top"],[a,"border-bottom","border-bottom"],[a,"border","border"]],V=[[f,"column-width","width"]],R=[[f,"row-height","height"],[a,"keep-together",null]],Y=[[f,"width","width"],[a,"margin-left","margin-left"],[a,"margin-right","margin-right"],[a,"margin-top","margin-top"],[a,"margin-bottom","margin-bottom"]],
B=[[a,"background-color","background-color"],[a,"padding","padding"],[a,"padding-left","padding-left"],[a,"padding-right","padding-right"],[a,"padding-top","padding-top"],[a,"padding-bottom","padding-bottom"],[a,"border","border"],[a,"border-left","border-left"],[a,"border-right","border-right"],[a,"border-top","border-top"],[a,"border-bottom","border-bottom"],[a,"margin","margin"],[a,"margin-left","margin-left"],[a,"margin-right","margin-right"],[a,"margin-top","margin-top"],[a,"margin-bottom","margin-bottom"]],
ba=[[a,"page-width","width"],[a,"page-height","height"]],E={border:!0,"border-left":!0,"border-right":!0,"border-top":!0,"border-bottom":!0,"stroke-width":!0},J={},H=new odf.OdfUtils,Z,S,L,y=xmldom.XPath,$=new core.CSSUnits;this.style2css=function(a,c,b,d,e){for(var f,m,h,p;c.cssRules.length;)c.deleteRule(c.cssRules.length-1);f=null;d&&(f=d.ownerDocument,S=d.parentNode);e&&(f=e.ownerDocument,S=e.parentNode);if(f)for(p in odf.Namespaces.forEachPrefix(function(a,b){m="@namespace "+a+" url("+b+");";
try{c.insertRule(m,c.cssRules.length)}catch(d){}}),J=b,Z=a,L=runtime.getWindow().getComputedStyle(document.body,null).getPropertyValue("font-size")||"12pt",a=l(d),d=l(e),e={},t)if(t.hasOwnProperty(p))for(h in b=e[p]={},k(a[p],b),k(d[p],b),b)b.hasOwnProperty(h)&&g(c,p,h,b[h])}};
// Input 33
/*

 Copyright (C) 2014 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
(function(){function l(h,b){var k=this;this.getDistance=function(b){var h=k.x-b.x;b=k.y-b.y;return Math.sqrt(h*h+b*b)};this.getCenter=function(b){return new l((k.x+b.x)/2,(k.y+b.y)/2)};k.x=h;k.y=b}gui.ZoomHelper=function(){function h(a,b,d,e){a=e?"translate3d("+a+"px, "+b+"px, 0) scale3d("+d+", "+d+", 1)":"translate("+a+"px, "+b+"px) scale("+d+")";c.style.WebkitTransform=a;c.style.MozTransform=a;c.style.msTransform=a;c.style.OTransform=a;c.style.transform=a}function b(a){a?h(-f.x,-f.y,w,!0):(h(0,
0,w,!0),h(0,0,w,!1))}function k(a){if(u&&I){var c=u.style.overflow,b=u.classList.contains("webodf-customScrollbars");a&&b||!a&&!b||(a?(u.classList.add("webodf-customScrollbars"),u.style.overflow="hidden",runtime.requestAnimationFrame(function(){u.style.overflow=c})):u.classList.remove("webodf-customScrollbars"))}}function d(){h(-f.x,-f.y,w,!0);u.scrollLeft=0;u.scrollTop=0;k(!1)}function p(){h(0,0,w,!0);u.scrollLeft=f.x;u.scrollTop=f.y;k(!0)}function n(a){return new l(a.pageX-c.offsetLeft,a.pageY-
c.offsetTop)}function e(a){m&&(f.x-=a.x-m.x,f.y-=a.y-m.y,f=new l(Math.min(Math.max(f.x,c.offsetLeft),(c.offsetLeft+c.offsetWidth)*w-u.clientWidth),Math.min(Math.max(f.y,c.offsetTop),(c.offsetTop+c.offsetHeight)*w-u.clientHeight)));m=a}function q(a){var c=a.touches.length,b=0<c?n(a.touches[0]):null;a=1<c?n(a.touches[1]):null;b&&a?(v=b.getDistance(a),z=w,m=b.getCenter(a),d(),A=s.PINCH):b&&(m=b,A=s.SCROLL)}function g(a){var m=a.touches.length,g=0<m?n(a.touches[0]):null,m=1<m?n(a.touches[1]):null;if(g&&
m)if(a.preventDefault(),A===s.SCROLL)A=s.PINCH,d(),v=g.getDistance(m);else{a=g.getCenter(m);g=g.getDistance(m)/v;e(a);var m=w,k=Math.min(x,c.offsetParent.clientWidth/c.offsetWidth);w=z*g;w=Math.min(Math.max(w,k),x);g=w/m;f.x+=(g-1)*(a.x+f.x);f.y+=(g-1)*(a.y+f.y);b(!0)}else g&&(A===s.PINCH?(A=s.SCROLL,p()):e(g))}function r(){A===s.PINCH&&(t.emit(gui.ZoomHelper.signalZoomChanged,w),p(),b(!1));A=s.NONE}function a(){u&&(u.removeEventListener("touchstart",q,!1),u.removeEventListener("touchmove",g,!1),
u.removeEventListener("touchend",r,!1))}var c,f,m,v,w,z,x=4,u,t=new core.EventNotifier([gui.ZoomHelper.signalZoomChanged]),s={NONE:0,SCROLL:1,PINCH:2},A=s.NONE,I=runtime.getWindow().hasOwnProperty("ontouchstart");this.subscribe=function(a,c){t.subscribe(a,c)};this.unsubscribe=function(a,c){t.unsubscribe(a,c)};this.getZoomLevel=function(){return w};this.setZoomLevel=function(a){c&&(w=a,b(!1),t.emit(gui.ZoomHelper.signalZoomChanged,w))};this.destroy=function(c){a();k(!1);c()};this.setZoomableElement=
function(d){a();c=d;u=c.offsetParent;b(!1);u&&(u.addEventListener("touchstart",q,!1),u.addEventListener("touchmove",g,!1),u.addEventListener("touchend",r,!1));k(!0)};z=w=1;f=new l(0,0)};gui.ZoomHelper.signalZoomChanged="zoomChanged"})();
// Input 34
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.Canvas=function(){};ops.Canvas.prototype.getZoomLevel=function(){};ops.Canvas.prototype.getElement=function(){};ops.Canvas.prototype.getZoomHelper=function(){};
// Input 35
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
(function(){function l(){function a(d){b=!0;runtime.setTimeout(function(){try{d()}catch(e){runtime.log(String(e))}b=!1;0<c.length&&a(c.pop())},10)}var c=[],b=!1;this.clearQueue=function(){c.length=0};this.addToQueue=function(d){if(0===c.length&&!b)return a(d);c.push(d)}}function h(a){function c(){for(;0<b.cssRules.length;)b.deleteRule(0);b.insertRule("#shadowContent draw|page {display:none;}",0);b.insertRule("office|presentation draw|page {display:none;}",1);b.insertRule("#shadowContent draw|page:nth-of-type("+
d+") {display:block;}",2);b.insertRule("office|presentation draw|page:nth-of-type("+d+") {display:block;}",3)}var b=a.sheet,d=1;this.showFirstPage=function(){d=1;c()};this.showNextPage=function(){d+=1;c()};this.showPreviousPage=function(){1<d&&(d-=1,c())};this.showPage=function(a){0<a&&(d=a,c())};this.css=a;this.destroy=function(c){a.parentNode.removeChild(a);c()}}function b(a){for(;a.firstChild;)a.removeChild(a.firstChild)}function k(a){a=a.sheet;for(var c=a.cssRules;c.length;)a.deleteRule(c.length-
1)}function d(a,c,b){(new odf.Style2CSS).style2css(a.getDocumentType(),b.sheet,c.getFontMap(),a.rootElement.styles,a.rootElement.automaticStyles)}function p(a,c,b){var d=null;a=a.rootElement.body.getElementsByTagNameNS(F,b+"-decl");b=c.getAttributeNS(F,"use-"+b+"-name");var e;if(b&&0<a.length)for(c=0;c<a.length;c+=1)if(e=a[c],e.getAttributeNS(F,"name")===b){d=e.textContent;break}return d}function n(a,c,d,e){var f=a.ownerDocument;c=a.getElementsByTagNameNS(c,d);for(a=0;a<c.length;a+=1)b(c[a]),e&&(d=
c[a],d.appendChild(f.createTextNode(e)))}function e(a,c,b){c.setAttributeNS("urn:webodf:names:helper","styleid",a);var d,e=c.getAttributeNS(I,"anchor-type"),f=c.getAttributeNS(s,"x"),m=c.getAttributeNS(s,"y"),g=c.getAttributeNS(s,"width"),k=c.getAttributeNS(s,"height"),h=c.getAttributeNS(x,"min-height"),p=c.getAttributeNS(x,"min-width");if("as-char"===e)d="display: inline-block;";else if(e||f||m)d="position: absolute;";else if(g||k||h||p)d="display: block;";f&&(d+="left: "+f+";");m&&(d+="top: "+m+
";");g&&(d+="width: "+g+";");k&&(d+="height: "+k+";");h&&(d+="min-height: "+h+";");p&&(d+="min-width: "+p+";");d&&(d="draw|"+c.localName+'[webodfhelper|styleid="'+a+'"] {'+d+"}",b.insertRule(d,b.cssRules.length))}function q(a){for(a=a.firstChild;a;){if(a.namespaceURI===u&&"binary-data"===a.localName)return"data:image/png;base64,"+a.textContent.replace(/[\r\n\s]/g,"");a=a.nextSibling}return""}function g(a,c,b,d){function e(c){c&&(c='draw|image[webodfhelper|styleid="'+a+'"] {'+("background-image: url("+
c+");")+"}",d.insertRule(c,d.cssRules.length))}function f(a){e(a.url)}b.setAttributeNS("urn:webodf:names:helper","styleid",a);var m=b.getAttributeNS(M,"href"),g;if(m)try{g=c.getPart(m),g.onchange=f,g.load()}catch(k){runtime.log("slight problem: "+String(k))}else m=q(b),e(m)}function r(a){var c=a.ownerDocument;B.getElementsByTagNameNS(a,I,"line-break").forEach(function(a){a.hasChildNodes()||a.appendChild(c.createElement("br"))})}function a(a){var c=a.ownerDocument;B.getElementsByTagNameNS(a,I,"s").forEach(function(a){for(var b,
d;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(c.createTextNode(" "));d=parseInt(a.getAttributeNS(I,"c"),10);if(1<d)for(a.removeAttributeNS(I,"c"),b=1;b<d;b+=1)a.parentNode.insertBefore(a.cloneNode(!0),a)})}function c(a){B.getElementsByTagNameNS(a,I,"tab").forEach(function(a){a.textContent="\t"})}function f(a,c){function b(a,d){var m=g.documentElement.namespaceURI;"video/"===d.substr(0,6)?(e=g.createElementNS(m,"video"),e.setAttribute("controls","controls"),f=g.createElementNS(m,"source"),
a&&f.setAttribute("src",a),f.setAttribute("type",d),e.appendChild(f),c.parentNode.appendChild(e)):c.innerHtml="Unrecognised Plugin"}function d(a){b(a.url,a.mimetype)}var e,f,m,g=c.ownerDocument,k;if(m=c.getAttributeNS(M,"href"))try{k=a.getPart(m),k.onchange=d,k.load()}catch(h){runtime.log("slight problem: "+String(h))}else runtime.log("using MP4 data fallback"),m=q(c),b(m,"video/mp4")}function m(a){var c=a.getElementsByTagName("head")[0],b,d;b=a.styleSheets.length;for(d=c.firstElementChild;d&&("style"!==
d.localName||!d.hasAttribute("webodfcss"));)d=d.nextElementSibling;if(d)return b=parseInt(d.getAttribute("webodfcss"),10),d.setAttribute("webodfcss",b+1),d;"string"===String(typeof webodf_css)?b=webodf_css:(d="webodf.css",runtime.currentDirectory&&(d=runtime.currentDirectory(),0<d.length&&"/"!==d.substr(-1)&&(d+="/"),d+="../webodf.css"),b=runtime.readFileSync(d,"utf-8"));d=a.createElementNS(c.namespaceURI,"style");d.setAttribute("media","screen, print, handheld, projection");d.setAttribute("type",
"text/css");d.setAttribute("webodfcss","1");d.appendChild(a.createTextNode(b));c.appendChild(d);return d}function v(a){var c=parseInt(a.getAttribute("webodfcss"),10);1===c?a.parentNode.removeChild(a):a.setAttribute("count",c-1)}function w(a){var c=a.getElementsByTagName("head")[0],b=a.createElementNS(c.namespaceURI,"style"),d="";b.setAttribute("type","text/css");b.setAttribute("media","screen, print, handheld, projection");odf.Namespaces.forEachPrefix(function(a,c){d+="@namespace "+a+" url("+c+");\n"});
d+="@namespace webodfhelper url(urn:webodf:names:helper);\n";b.appendChild(a.createTextNode(d));c.appendChild(b);return b}var z=odf.Namespaces.drawns,x=odf.Namespaces.fons,u=odf.Namespaces.officens,t=odf.Namespaces.stylens,s=odf.Namespaces.svgns,A=odf.Namespaces.tablens,I=odf.Namespaces.textns,M=odf.Namespaces.xlinkns,P=odf.Namespaces.xmlns,F=odf.Namespaces.presentationns,V=runtime.getWindow(),R=xmldom.XPath,Y=new odf.OdfUtils,B=new core.DomUtils;odf.OdfCanvas=function(q){function s(a,c,b){function d(a,
c,b,e){ka.addToQueue(function(){g(a,c,b,e)})}var e,f;e=c.getElementsByTagNameNS(z,"image");for(c=0;c<e.length;c+=1)f=e.item(c),d("image"+String(c),a,f,b)}function M(a,c){function b(a,c){ka.addToQueue(function(){f(a,c)})}var d,e,m;e=c.getElementsByTagNameNS(z,"plugin");for(d=0;d<e.length;d+=1)m=e.item(d),b(a,m)}function x(){var a;a=U.firstChild;var c=aa.getZoomLevel();a&&(U.style.WebkitTransformOrigin="0% 0%",U.style.MozTransformOrigin="0% 0%",U.style.msTransformOrigin="0% 0%",U.style.OTransformOrigin=
"0% 0%",U.style.transformOrigin="0% 0%",G&&((a=G.getMinimumHeightForAnnotationPane())?U.style.minHeight=a:U.style.removeProperty("min-height")),q.style.width=Math.round(c*U.offsetWidth)+"px",q.style.height=Math.round(c*U.offsetHeight)+"px")}function Z(a){la?(ea.parentNode||U.appendChild(ea),G&&G.forgetAnnotations(),G=new gui.AnnotationViewManager(y,a.body,ea,ca),B.getElementsByTagNameNS(a.body,u,"annotation").forEach(G.addAnnotation),G.rerenderAnnotations(),x()):ea.parentNode&&(U.removeChild(ea),
G.forgetAnnotations(),x())}function S(f){function m(){k(Q);k(T);k(ia);b(q);q.style.display="inline-block";var g=O.rootElement;q.ownerDocument.importNode(g,!0);X.setOdfContainer(O);var h=O,l=Q;(new odf.FontLoader).loadFonts(h,l.sheet);d(O,X,T);l=O;h=ia.sheet;b(q);U=$.createElementNS(q.namespaceURI,"div");U.style.display="inline-block";U.style.background="white";U.style.setProperty("float","left","important");U.appendChild(g);q.appendChild(U);ea=$.createElementNS(q.namespaceURI,"div");ea.id="annotationsPane";
fa=$.createElementNS(q.namespaceURI,"div");fa.id="shadowContent";fa.style.position="absolute";fa.style.top=0;fa.style.left=0;l.getContentElement().appendChild(fa);var v=g.body,w,x=[],y;for(w=v.firstElementChild;w&&w!==v;)if(w.namespaceURI===z&&(x[x.length]=w),w.firstElementChild)w=w.firstElementChild;else{for(;w&&w!==v&&!w.nextElementSibling;)w=w.parentNode;w&&w.nextElementSibling&&(w=w.nextElementSibling)}for(y=0;y<x.length;y+=1)w=x[y],e("frame"+String(y),w,h);x=R.getODFElementsWithXPath(v,".//*[*[@text:anchor-type='paragraph']]",
odf.Namespaces.lookupNamespaceURI);for(w=0;w<x.length;w+=1)v=x[w],v.setAttributeNS&&v.setAttributeNS("urn:webodf:names:helper","containsparagraphanchor",!0);var v=fa,B,S,H;H=0;var L,K,x=l.rootElement.ownerDocument;if((w=g.body.firstElementChild)&&w.namespaceURI===u&&("presentation"===w.localName||"drawing"===w.localName))for(w=w.firstElementChild;w;){y=w.getAttributeNS(z,"master-page-name");if(y){for(B=l.rootElement.masterStyles.firstElementChild;B&&(B.getAttributeNS(t,"name")!==y||"master-page"!==
B.localName||B.namespaceURI!==t);)B=B.nextElementSibling;y=B}else y=null;if(y){B=w.getAttributeNS("urn:webodf:names:helper","styleid");S=x.createElementNS(z,"draw:page");K=y.firstElementChild;for(L=0;K;)"true"!==K.getAttributeNS(F,"placeholder")&&(H=K.cloneNode(!0),S.appendChild(H),e(B+"_"+L,H,h)),K=K.nextElementSibling,L+=1;K=L=H=void 0;var G=S.getElementsByTagNameNS(z,"frame");for(H=0;H<G.length;H+=1)L=G[H],(K=L.getAttributeNS(F,"class"))&&!/^(date-time|footer|header|page-number)$/.test(K)&&L.parentNode.removeChild(L);
v.appendChild(S);H=String(v.getElementsByTagNameNS(z,"page").length);n(S,I,"page-number",H);n(S,F,"header",p(l,w,"header"));n(S,F,"footer",p(l,w,"footer"));e(B,S,h);S.setAttributeNS(z,"draw:master-page-name",y.getAttributeNS(t,"name"))}w=w.nextElementSibling}v=q.namespaceURI;x=g.body.getElementsByTagNameNS(A,"table-cell");for(w=0;w<x.length;w+=1)y=x.item(w),y.hasAttributeNS(A,"number-columns-spanned")&&y.setAttributeNS(v,"colspan",y.getAttributeNS(A,"number-columns-spanned")),y.hasAttributeNS(A,"number-rows-spanned")&&
y.setAttributeNS(v,"rowspan",y.getAttributeNS(A,"number-rows-spanned"));r(g.body);a(g.body);c(g.body);s(l,g.body,h);M(l,g.body);y=g.body;l=q.namespaceURI;w={};var x={},N;B=V.document.getElementsByTagNameNS(I,"list-style");for(v=0;v<B.length;v+=1)L=B.item(v),(K=L.getAttributeNS(t,"name"))&&(x[K]=L);y=y.getElementsByTagNameNS(I,"list");for(v=0;v<y.length;v+=1)if(L=y.item(v),B=L.getAttributeNS(P,"id")){S=L.getAttributeNS(I,"continue-list");L.setAttributeNS(l,"id",B);H="text|list#"+B+" > text|list-item > *:first-child:before {";
if(K=L.getAttributeNS(I,"style-name")){L=x[K];N=Y.getFirstNonWhitespaceChild(L);L=void 0;if(N)if("list-level-style-number"===N.localName){L=N.getAttributeNS(t,"num-format");K=N.getAttributeNS(t,"num-suffix")||"";var G="",G={1:"decimal",a:"lower-latin",A:"upper-latin",i:"lower-roman",I:"upper-roman"},W=void 0,W=N.getAttributeNS(t,"num-prefix")||"",W=G.hasOwnProperty(L)?W+(" counter(list, "+G[L]+")"):L?W+("'"+L+"';"):W+" ''";K&&(W+=" '"+K+"'");L=G="content: "+W+";"}else"list-level-style-image"===N.localName?
L="content: none;":"list-level-style-bullet"===N.localName&&(L="content: '"+N.getAttributeNS(I,"bullet-char")+"';");N=L}if(S){for(L=w[S];L;)L=w[L];H+="counter-increment:"+S+";";N?(N=N.replace("list",S),H+=N):H+="content:counter("+S+");"}else S="",N?(N=N.replace("list",B),H+=N):H+="content: counter("+B+");",H+="counter-increment:"+B+";",h.insertRule("text|list#"+B+" {counter-reset:"+B+"}",h.cssRules.length);H+="}";w[B]=S;H&&h.insertRule(H,h.cssRules.length)}U.insertBefore(fa,U.firstChild);aa.setZoomableElement(U);
Z(g);if(!f&&(g=[O],da.hasOwnProperty("statereadychange")))for(h=da.statereadychange,N=0;N<h.length;N+=1)h[N].apply(null,g)}O.state===odf.OdfContainer.DONE?m():(runtime.log("WARNING: refreshOdf called but ODF was not DONE."),ha=runtime.setTimeout(function D(){O.state===odf.OdfContainer.DONE?m():(runtime.log("will be back later..."),ha=runtime.setTimeout(D,500))},100))}function L(a){ka.clearQueue();q.innerHTML=runtime.tr("Loading")+" "+a+"...";q.removeAttribute("style");O=new odf.OdfContainer(a,function(a){O=
a;S(!1)})}runtime.assert(null!==q&&void 0!==q,"odf.OdfCanvas constructor needs DOM element");runtime.assert(null!==q.ownerDocument&&void 0!==q.ownerDocument,"odf.OdfCanvas constructor needs DOM");var y=this,$=q.ownerDocument,O,X=new odf.Formatting,W,U=null,ea=null,la=!1,ca=!1,G=null,N,Q,T,ia,fa,da={},ha,ja,ma=!1,ga=!1,ka=new l,aa=new gui.ZoomHelper;this.refreshCSS=function(){ma=!0;ja.trigger()};this.refreshSize=function(){ja.trigger()};this.odfContainer=function(){return O};this.setOdfContainer=function(a,
c){O=a;S(!0===c)};this.load=this.load=L;this.save=function(a){O.save(a)};this.addListener=function(a,c){switch(a){case "click":var b=q,d=a;b.addEventListener?b.addEventListener(d,c,!1):b.attachEvent?b.attachEvent("on"+d,c):b["on"+d]=c;break;default:b=da.hasOwnProperty(a)?da[a]:da[a]=[],c&&-1===b.indexOf(c)&&b.push(c)}};this.getFormatting=function(){return X};this.getAnnotationViewManager=function(){return G};this.refreshAnnotations=function(){Z(O.rootElement)};this.rerenderAnnotations=function(){G&&
(ga=!0,ja.trigger())};this.getSizer=function(){return U};this.enableAnnotations=function(a,c){a!==la&&(la=a,ca=c,O&&Z(O.rootElement))};this.addAnnotation=function(a){G&&(G.addAnnotation(a),x())};this.forgetAnnotations=function(){G&&(G.forgetAnnotations(),x())};this.getZoomHelper=function(){return aa};this.setZoomLevel=function(a){aa.setZoomLevel(a)};this.getZoomLevel=function(){return aa.getZoomLevel()};this.fitToContainingElement=function(a,c){var b=aa.getZoomLevel(),d=q.offsetHeight/b,b=a/(q.offsetWidth/
b);c/d<b&&(b=c/d);aa.setZoomLevel(b)};this.fitToWidth=function(a){var c=q.offsetWidth/aa.getZoomLevel();aa.setZoomLevel(a/c)};this.fitSmart=function(a,c){var b,d;d=aa.getZoomLevel();b=q.offsetWidth/d;d=q.offsetHeight/d;b=a/b;void 0!==c&&c/d<b&&(b=c/d);aa.setZoomLevel(Math.min(1,b))};this.fitToHeight=function(a){var c=q.offsetHeight/aa.getZoomLevel();aa.setZoomLevel(a/c)};this.showFirstPage=function(){W.showFirstPage()};this.showNextPage=function(){W.showNextPage()};this.showPreviousPage=function(){W.showPreviousPage()};
this.showPage=function(a){W.showPage(a);x()};this.getElement=function(){return q};this.addCssForFrameWithImage=function(a){var c=a.getAttributeNS(z,"name"),b=a.firstElementChild;e(c,a,ia.sheet);b&&g(c+"img",O,b,ia.sheet)};this.destroy=function(a){var c=$.getElementsByTagName("head")[0],b=[W.destroy,ja.destroy];runtime.clearTimeout(ha);ea&&ea.parentNode&&ea.parentNode.removeChild(ea);aa.destroy(function(){U&&(q.removeChild(U),U=null)});v(N);c.removeChild(Q);c.removeChild(T);c.removeChild(ia);core.Async.destroyAll(b,
a)};N=m($);W=new h(w($));Q=w($);T=w($);ia=w($);ja=new core.ScheduledTask(function(){ma&&(d(O,X,T),ma=!1);ga&&(G&&G.rerenderAnnotations(),ga=!1);x()},0);aa.subscribe(gui.ZoomHelper.signalZoomChanged,x)}})();
// Input 36
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.MemberProperties=function(){};
ops.Member=function(l,h){var b=new ops.MemberProperties;this.getMemberId=function(){return l};this.getProperties=function(){return b};this.setProperties=function(k){Object.keys(k).forEach(function(d){b[d]=k[d]})};this.removeProperties=function(k){Object.keys(k).forEach(function(d){"fullName"!==d&&"color"!==d&&"imageUrl"!==d&&b.hasOwnProperty(d)&&delete b[d]})};runtime.assert(Boolean(l),"No memberId was supplied!");h.fullName||(h.fullName=runtime.tr("Unknown Author"));h.color||(h.color="black");h.imageUrl||
(h.imageUrl="avatar-joe.png");b=h};
// Input 37
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.SelectionMover=function(l,h){function b(){r.setUnfilteredPosition(l.getNode(),0);return r}function k(a,b){var d,e=null;a&&0<a.length&&(d=b?a.item(a.length-1):a.item(0));d&&(e={top:d.top,left:b?d.right:d.left,bottom:d.bottom});return e}function d(a,b,e,g){var l=a.nodeType;e.setStart(a,b);e.collapse(!g);g=k(e.getClientRects(),!0===g);!g&&0<b&&(e.setStart(a,b-1),e.setEnd(a,b),g=k(e.getClientRects(),!0));g||(l===Node.ELEMENT_NODE&&0<b&&a.childNodes.length>=b?g=d(a,b-1,e,!0):a.nodeType===Node.TEXT_NODE&&
0<b?g=d(a,b-1,e,!0):a.previousSibling?g=d(a.previousSibling,a.previousSibling.nodeType===Node.TEXT_NODE?a.previousSibling.textContent.length:a.previousSibling.childNodes.length,e,!0):a.parentNode&&a.parentNode!==h?g=d(a.parentNode,0,e,!1):(e.selectNode(h),g=k(e.getClientRects(),!1)));runtime.assert(Boolean(g),"No visible rectangle found");return g}function p(c,d,e){for(var g=b(),k=new core.LoopWatchDog(1E4),h=0,l=0;0<c&&g.nextPosition();)k.check(),e.acceptPosition(g)===a&&(h+=1,d.acceptPosition(g)===
a&&(l+=h,h=0,c-=1));return l}function n(c,d,e){for(var g=b(),k=new core.LoopWatchDog(1E4),h=0,l=0;0<c&&g.previousPosition();)k.check(),e.acceptPosition(g)===a&&(h+=1,d.acceptPosition(g)===a&&(l+=h,h=0,c-=1));return l}function e(c,e){var g=b(),k=0,l=0,p=0>c?-1:1;for(c=Math.abs(c);0<c;){for(var n=e,q=p,r=g,s=r.container(),A=0,I=null,M=void 0,P=10,F=void 0,V=0,R=void 0,Y=void 0,B=void 0,F=void 0,ba=h.ownerDocument.createRange(),E=new core.LoopWatchDog(1E4),F=d(s,r.unfilteredDomOffset(),ba),R=F.top,Y=
F.left,B=R;!0===(0>q?r.previousPosition():r.nextPosition());)if(E.check(),n.acceptPosition(r)===a&&(A+=1,s=r.container(),F=d(s,r.unfilteredDomOffset(),ba),F.top!==R)){if(F.top!==B&&B!==R)break;B=F.top;F=Math.abs(Y-F.left);if(null===I||F<P)I=s,M=r.unfilteredDomOffset(),P=F,V=A}null!==I?(r.setUnfilteredPosition(I,M),A=V):A=0;ba.detach();k+=A;if(0===k)break;l+=k;c-=1}return l*p}function q(c,e){var m,k,l,p,n=b(),q=g.getParagraphElement(n.getCurrentNode()),r=0,s=h.ownerDocument.createRange();0>c?(m=n.previousPosition,
k=-1):(m=n.nextPosition,k=1);for(l=d(n.container(),n.unfilteredDomOffset(),s);m.call(n);)if(e.acceptPosition(n)===a){if(g.getParagraphElement(n.getCurrentNode())!==q)break;p=d(n.container(),n.unfilteredDomOffset(),s);if(p.bottom!==l.bottom&&(l=p.top>=l.top&&p.bottom<l.bottom||p.top<=l.top&&p.bottom>l.bottom,!l))break;r+=k;l=p}s.detach();return r}var g=new odf.OdfUtils,r,a=core.PositionFilter.FilterResult.FILTER_ACCEPT;this.getStepCounter=function(){return{convertForwardStepsBetweenFilters:p,convertBackwardStepsBetweenFilters:n,
countLinesSteps:e,countStepsToLineBoundary:q}};(function(){r=gui.SelectionMover.createPositionIterator(h);var a=h.ownerDocument.createRange();a.setStart(r.container(),r.unfilteredDomOffset());a.collapse(!0);l.setSelectedRange(a)})()};
gui.SelectionMover.createPositionIterator=function(l){var h=new function(){this.acceptNode=function(b){return b&&"urn:webodf:names:cursor"!==b.namespaceURI&&"urn:webodf:names:editinfo"!==b.namespaceURI?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}};return new core.PositionIterator(l,5,h,!1)};(function(){return gui.SelectionMover})();
// Input 38
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.Document=function(){};ops.Document.prototype.getMemberIds=function(){};ops.Document.prototype.removeCursor=function(l){};ops.Document.prototype.getDocumentElement=function(){};ops.Document.prototype.getRootNode=function(){};ops.Document.prototype.getDOMDocument=function(){};ops.Document.prototype.cloneDocumentElement=function(){};ops.Document.prototype.setDocumentElement=function(l){};ops.Document.prototype.subscribe=function(l,h){};ops.Document.prototype.unsubscribe=function(l,h){};
ops.Document.prototype.getCanvas=function(){};ops.Document.prototype.createRootFilter=function(l){};ops.Document.signalCursorAdded="cursor/added";ops.Document.signalCursorRemoved="cursor/removed";ops.Document.signalCursorMoved="cursor/moved";ops.Document.signalMemberAdded="member/added";ops.Document.signalMemberUpdated="member/updated";ops.Document.signalMemberRemoved="member/removed";
// Input 39
ops.OdtCursor=function(l,h){var b=this,k={},d,p,n,e=new core.EventNotifier([ops.OdtCursor.signalCursorUpdated]);this.removeFromDocument=function(){n.remove()};this.subscribe=function(b,d){e.subscribe(b,d)};this.unsubscribe=function(b,d){e.unsubscribe(b,d)};this.getStepCounter=function(){return p.getStepCounter()};this.getMemberId=function(){return l};this.getNode=function(){return n.getNode()};this.getAnchorNode=function(){return n.getAnchorNode()};this.getSelectedRange=function(){return n.getSelectedRange()};
this.setSelectedRange=function(d,g){n.setSelectedRange(d,g);e.emit(ops.OdtCursor.signalCursorUpdated,b)};this.hasForwardSelection=function(){return n.hasForwardSelection()};this.getDocument=function(){return h};this.getSelectionType=function(){return d};this.setSelectionType=function(b){k.hasOwnProperty(b)?d=b:runtime.log("Invalid selection type: "+b)};this.resetSelectionType=function(){b.setSelectionType(ops.OdtCursor.RangeSelection)};n=new core.Cursor(h.getDOMDocument(),l);p=new gui.SelectionMover(n,
h.getRootNode());k[ops.OdtCursor.RangeSelection]=!0;k[ops.OdtCursor.RegionSelection]=!0;b.resetSelectionType()};ops.OdtCursor.RangeSelection="Range";ops.OdtCursor.RegionSelection="Region";ops.OdtCursor.signalCursorUpdated="cursorUpdated";(function(){return ops.OdtCursor})();
// Input 40
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.Operation=function(){};ops.Operation.prototype.init=function(l){};ops.Operation.prototype.execute=function(l){};ops.Operation.prototype.spec=function(){};
// Input 41
/*

 Copyright (C) 2010-2014 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
(function(){var l=0;ops.StepsCache=function(h,b,k){function d(a,c,d){this.nodeId=a;this.steps=c;this.node=d;this.previousBookmark=this.nextBookmark=null;this.setIteratorPosition=function(a){a.setPositionBeforeElement(d);do if(b.acceptPosition(a)===t)break;while(a.nextPosition())}}function p(a,c,d){this.nodeId=a;this.steps=c;this.node=d;this.previousBookmark=this.nextBookmark=null;this.setIteratorPosition=function(a){a.setUnfilteredPosition(d,0);do if(b.acceptPosition(a)===t)break;while(a.nextPosition())}}
function n(a,c){var b="["+a.nodeId;c&&(b+=" => "+c.nodeId);return b+"]"}function e(){for(var a=x,c,b,d,e=new core.LoopWatchDog(0,1E5);a;){e.check();(c=a.previousBookmark)?runtime.assert(c.nextBookmark===a,"Broken bookmark link to previous @"+n(c,a)):(runtime.assert(a===x,"Broken bookmark link @"+n(a)),runtime.assert(void 0===u||x.steps<=u,"Base point is damaged @"+n(a)));(b=a.nextBookmark)&&runtime.assert(b.previousBookmark===a,"Broken bookmark link to next @"+n(a,b));if(void 0===u||a.steps<=u)runtime.assert(z.containsNode(h,
a.node),"Disconnected node is being reported as undamaged @"+n(a)),c&&(d=a.node.compareDocumentPosition(c.node),runtime.assert(0===d||0!==(d&Node.DOCUMENT_POSITION_PRECEDING),"Bookmark order with previous does not reflect DOM order @"+n(c,a))),b&&z.containsNode(h,b.node)&&(d=a.node.compareDocumentPosition(b.node),runtime.assert(0===d||0!==(d&Node.DOCUMENT_POSITION_FOLLOWING),"Bookmark order with next does not reflect DOM order @"+n(a,b)));a=a.nextBookmark}}function q(a){var c="";a.nodeType===Node.ELEMENT_NODE&&
(c=a.getAttributeNS(f,"nodeId"));return c}function g(a){var c=l.toString();a.setAttributeNS(f,"nodeId",c);l+=1;return c}function r(a){var c,b,d=new core.LoopWatchDog(0,1E4);void 0!==u&&a>u&&(a=u);for(c=Math.floor(a/k)*k;!b&&0!==c;)b=m[c],c-=k;for(b=b||x;b.nextBookmark&&b.nextBookmark.steps<=a;)d.check(),b=b.nextBookmark;return b}function a(a){a.previousBookmark&&(a.previousBookmark.nextBookmark=a.nextBookmark);a.nextBookmark&&(a.nextBookmark.previousBookmark=a.previousBookmark)}function c(a){for(var c,
b=null;!b&&a&&a!==h;)(c=q(a))&&(b=v[c])&&b.node!==a&&(runtime.log("Cloned node detected. Creating new bookmark"),b=null,a.removeAttributeNS(f,"nodeId")),a=a.parentNode;return b}var f="urn:webodf:names:steps",m={},v={},w=new odf.OdfUtils,z=new core.DomUtils,x,u,t=core.PositionFilter.FilterResult.FILTER_ACCEPT,s;this.updateCache=function(c,b,e){var f;f=b.getCurrentNode();if(b.isBeforeNode()&&w.isParagraph(f)){e||(c+=1);b=c;var l,p,n;if(void 0!==u&&u<b){l=r(u);for(e=l.nextBookmark;e&&e.steps<=b;)p=e.nextBookmark,
n=Math.ceil(e.steps/k)*k,m[n]===e&&delete m[n],z.containsNode(h,e.node)?e.steps=b+1:(a(e),delete v[e.nodeId]),e=p;u=b}else l=r(b);b=l;e=q(f)||g(f);(l=v[e])?l.node===f?l.steps=c:(runtime.log("Cloned node detected. Creating new bookmark"),e=g(f),l=v[e]=new d(e,c,f)):l=v[e]=new d(e,c,f);f=l;b!==f&&b.nextBookmark!==f&&(a(f),c=b.nextBookmark,f.nextBookmark=b.nextBookmark,f.previousBookmark=b,b.nextBookmark=f,c&&(c.previousBookmark=f));c=Math.ceil(f.steps/k)*k;b=m[c];if(!b||f.steps>b.steps)m[c]=f;s()}};
this.setToClosestStep=function(a,c){var b;s();b=r(a);b.setIteratorPosition(c);return b.steps};this.setToClosestDomPoint=function(a,b,d){var e,f;s();if(a===h&&0===b)e=x;else if(a===h&&b===h.childNodes.length)for(f in e=x,m)m.hasOwnProperty(f)&&(a=m[f],a.steps>e.steps&&(e=a));else if(e=c(a.childNodes.item(b)||a),!e)for(d.setUnfilteredPosition(a,b);!e&&d.previousNode();)e=c(d.getCurrentNode());e=e||x;void 0!==u&&e.steps>u&&(e=r(u));e.setIteratorPosition(d);return e.steps};this.damageCacheAfterStep=function(a){0>
a&&(a=0);void 0===u?u=a:a<u&&(u=a);s()};(function(){var a=q(h)||g(h);x=new p(a,0,h);s=ops.StepsCache.ENABLE_CACHE_VERIFICATION?e:function(){}})()};ops.StepsCache.ENABLE_CACHE_VERIFICATION=!1;ops.StepsCache.Bookmark=function(){};ops.StepsCache.Bookmark.prototype.setIteratorPosition=function(h){}})();
// Input 42
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
(function(){ops.StepsTranslator=function(l,h,b,k){function d(){var a=l();a!==n&&(runtime.log("Undo detected. Resetting steps cache"),n=a,e=new ops.StepsCache(n,b,k),g=h(n))}function p(a,c){if(!c||b.acceptPosition(a)===r)return!0;for(;a.previousPosition();)if(b.acceptPosition(a)===r){if(c(0,a.container(),a.unfilteredDomOffset()))return!0;break}for(;a.nextPosition();)if(b.acceptPosition(a)===r){if(c(1,a.container(),a.unfilteredDomOffset()))return!0;break}return!1}var n=l(),e=new ops.StepsCache(n,b,
k),q=new core.DomUtils,g=h(l()),r=core.PositionFilter.FilterResult.FILTER_ACCEPT;this.convertStepsToDomPoint=function(a){var c,f;if(isNaN(a))throw new TypeError("Requested steps is not numeric ("+a+")");if(0>a)throw new RangeError("Requested steps is negative ("+a+")");d();for(c=e.setToClosestStep(a,g);c<a&&g.nextPosition();)(f=b.acceptPosition(g)===r)&&(c+=1),e.updateCache(c,g,f);if(c!==a)throw new RangeError("Requested steps ("+a+") exceeds available steps ("+c+")");return{node:g.container(),offset:g.unfilteredDomOffset()}};
this.convertDomPointToSteps=function(a,c,f){var m;d();q.containsNode(n,a)||(c=0>q.comparePoints(n,0,a,c),a=n,c=c?0:n.childNodes.length);g.setUnfilteredPosition(a,c);p(g,f)||g.setUnfilteredPosition(a,c);f=g.container();c=g.unfilteredDomOffset();a=e.setToClosestDomPoint(f,c,g);if(0>q.comparePoints(g.container(),g.unfilteredDomOffset(),f,c))return 0<a?a-1:a;for(;(g.container()!==f||g.unfilteredDomOffset()!==c)&&g.nextPosition();)(m=b.acceptPosition(g)===r)&&(a+=1),e.updateCache(a,g,m);return a+0};this.prime=
function(){var a,c;d();for(a=e.setToClosestStep(0,g);g.nextPosition();)(c=b.acceptPosition(g)===r)&&(a+=1),e.updateCache(a,g,c)};this.handleStepsInserted=function(a){d();e.damageCacheAfterStep(a.position)};this.handleStepsRemoved=function(a){d();e.damageCacheAfterStep(a.position-1)}};ops.StepsTranslator.PREVIOUS_STEP=0;ops.StepsTranslator.NEXT_STEP=1;return ops.StepsTranslator})();
// Input 43
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.TextPositionFilter=function(l){function h(d,k,g){var h,a;if(k){if(b.isInlineRoot(k)&&b.isGroupingElement(g))return n;h=b.lookLeftForCharacter(k);if(1===h||2===h&&(b.scanRightForAnyCharacter(g)||b.scanRightForAnyCharacter(b.nextNode(d))))return p}h=null===k&&b.isParagraph(d);a=b.lookRightForCharacter(g);if(h)return a?p:b.scanRightForAnyCharacter(g)?n:p;if(!a)return n;k=k||b.previousNode(d);return b.scanLeftForAnyCharacter(k)?n:p}var b=new odf.OdfUtils,k=Node.ELEMENT_NODE,d=Node.TEXT_NODE,p=core.PositionFilter.FilterResult.FILTER_ACCEPT,
n=core.PositionFilter.FilterResult.FILTER_REJECT;this.acceptPosition=function(e){var q=e.container(),g=q.nodeType,r,a,c;if(g!==k&&g!==d)return n;if(g===d){if(!b.isGroupingElement(q.parentNode)||b.isWithinTrackedChanges(q.parentNode,l()))return n;g=e.unfilteredDomOffset();r=q.data;runtime.assert(g!==r.length,"Unexpected offset.");if(0<g){e=r[g-1];if(!b.isODFWhitespace(e))return p;if(1<g)if(e=r[g-2],!b.isODFWhitespace(e))a=p;else{if(!b.isODFWhitespace(r.substr(0,g)))return n}else c=b.previousNode(q),
b.scanLeftForNonSpace(c)&&(a=p);if(a===p)return b.isTrailingWhitespace(q,g)?n:p;a=r[g];return b.isODFWhitespace(a)?n:b.scanLeftForAnyCharacter(b.previousNode(q))?n:p}c=e.leftNode();a=q;q=q.parentNode;a=h(q,c,a)}else!b.isGroupingElement(q)||b.isWithinTrackedChanges(q,l())?a=n:(c=e.leftNode(),a=e.rightNode(),a=h(q,c,a));return a}};
// Input 44
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OdtDocument=function(l){function h(){var a=l.odfContainer().getContentElement(),c=a&&a.localName;runtime.assert("text"===c,"Unsupported content element type '"+c+"' for OdtDocument");return a}function b(){return a.getDocumentElement().ownerDocument}function k(a){for(;a&&!(a.namespaceURI===odf.Namespaces.officens&&"text"===a.localName||a.namespaceURI===odf.Namespaces.officens&&"annotation"===a.localName);)a=a.parentNode;return a}function d(a){this.acceptPosition=function(c){c=c.container();var b;
b="string"===typeof a?m[a].getNode():a;return k(c)===k(b)?z:x}}function p(a,c,b,d){d=gui.SelectionMover.createPositionIterator(d);var e;1===b.length?e=b[0]:(e=new core.PositionFilterChain,b.forEach(e.addFilter));b=new core.StepIterator(e,d);b.setPosition(a,c);return b}function n(a){var c=gui.SelectionMover.createPositionIterator(h());a=t.convertStepsToDomPoint(a);c.setUnfilteredPosition(a.node,a.offset);return c}function e(a){return c.getParagraphElement(a)}function q(a,c){return l.getFormatting().getStyleElement(a,
c)}function g(a){return q(a,"paragraph")}function r(a,c,b){a=a.childNodes.item(c)||a;return(a=e(a))&&f.containsNode(b,a)?a:b}var a=this,c,f,m={},v={},w=new core.EventNotifier([ops.Document.signalMemberAdded,ops.Document.signalMemberUpdated,ops.Document.signalMemberRemoved,ops.Document.signalCursorAdded,ops.Document.signalCursorRemoved,ops.Document.signalCursorMoved,ops.OdtDocument.signalParagraphChanged,ops.OdtDocument.signalParagraphStyleModified,ops.OdtDocument.signalCommonStyleCreated,ops.OdtDocument.signalCommonStyleDeleted,
ops.OdtDocument.signalTableAdded,ops.OdtDocument.signalOperationStart,ops.OdtDocument.signalOperationEnd,ops.OdtDocument.signalProcessingBatchStart,ops.OdtDocument.signalProcessingBatchEnd,ops.OdtDocument.signalUndoStackChanged,ops.OdtDocument.signalStepsInserted,ops.OdtDocument.signalStepsRemoved]),z=core.PositionFilter.FilterResult.FILTER_ACCEPT,x=core.PositionFilter.FilterResult.FILTER_REJECT,u,t,s;this.getDocumentElement=function(){return l.odfContainer().rootElement};this.getDOMDocument=function(){return this.getDocumentElement().ownerDocument};
this.cloneDocumentElement=function(){var c=a.getDocumentElement(),b=l.getAnnotationViewManager();b&&b.forgetAnnotations();c=c.cloneNode(!0);l.refreshAnnotations();return c};this.setDocumentElement=function(a){var c=l.odfContainer();c.setRootElement(a);l.setOdfContainer(c,!0);l.refreshCSS()};this.getDOMDocument=b;this.getRootElement=k;this.createStepIterator=p;this.getIteratorAtPosition=n;this.convertDomPointToCursorStep=function(a,c,b){return t.convertDomPointToSteps(a,c,b)};this.convertDomToCursorRange=
function(a,c){var b,d;b=c&&c(a.anchorNode,a.anchorOffset);b=t.convertDomPointToSteps(a.anchorNode,a.anchorOffset,b);c||a.anchorNode!==a.focusNode||a.anchorOffset!==a.focusOffset?(d=c&&c(a.focusNode,a.focusOffset),d=t.convertDomPointToSteps(a.focusNode,a.focusOffset,d)):d=b;return{position:b,length:d-b}};this.convertCursorToDomRange=function(a,c){var d=b().createRange(),e,f;e=t.convertStepsToDomPoint(a);c?(f=t.convertStepsToDomPoint(a+c),0<c?(d.setStart(e.node,e.offset),d.setEnd(f.node,f.offset)):
(d.setStart(f.node,f.offset),d.setEnd(e.node,e.offset))):d.setStart(e.node,e.offset);return d};this.getStyleElement=q;this.upgradeWhitespacesAtPosition=function(a){a=n(a);var b,d,e;a.previousPosition();a.previousPosition();for(e=-1;1>=e;e+=1){b=a.container();d=a.unfilteredDomOffset();if(b.nodeType===Node.TEXT_NODE&&" "===b.data[d]&&c.isSignificantWhitespace(b,d)){runtime.assert(" "===b.data[d],"upgradeWhitespaceToElement: textNode.data[offset] should be a literal space");var f=b.ownerDocument.createElementNS(odf.Namespaces.textns,
"text:s"),g=b.parentNode,m=b;f.appendChild(b.ownerDocument.createTextNode(" "));1===b.length?g.replaceChild(f,b):(b.deleteData(d,1),0<d&&(d<b.length&&b.splitText(d),m=b.nextSibling),g.insertBefore(f,m));b=f;a.moveToEndOfNode(b)}a.nextPosition()}};this.downgradeWhitespacesAtPosition=function(a){var b=n(a),d;a=b.container();for(b=b.unfilteredDomOffset();!c.isSpaceElement(a)&&a.childNodes.item(b);)a=a.childNodes.item(b),b=0;a.nodeType===Node.TEXT_NODE&&(a=a.parentNode);c.isDowngradableSpaceElement(a)&&
(b=a.firstChild,d=a.lastChild,f.mergeIntoParent(a),d!==b&&f.normalizeTextNodes(d),f.normalizeTextNodes(b))};this.getParagraphStyleElement=g;this.getParagraphElement=e;this.getParagraphStyleAttributes=function(a){return(a=g(a))?l.getFormatting().getInheritedStyleAttributes(a,!1):null};this.getTextNodeAtStep=function(c,d){var e=n(c),f=e.container(),g,k=0,h=null;f.nodeType===Node.TEXT_NODE?(g=f,k=e.unfilteredDomOffset(),0<g.length&&(0<k&&(g=g.splitText(k)),g.parentNode.insertBefore(b().createTextNode(""),
g),g=g.previousSibling,k=0)):(g=b().createTextNode(""),k=0,f.insertBefore(g,e.rightNode()));if(d){if(m[d]&&a.getCursorPosition(d)===c){for(h=m[d].getNode();h.nextSibling&&"cursor"===h.nextSibling.localName;)h.parentNode.insertBefore(h.nextSibling,h);0<g.length&&g.nextSibling!==h&&(g=b().createTextNode(""),k=0);h.parentNode.insertBefore(g,h)}}else for(;g.nextSibling&&"cursor"===g.nextSibling.localName;)g.parentNode.insertBefore(g.nextSibling,g);for(;g.previousSibling&&g.previousSibling.nodeType===
Node.TEXT_NODE;)e=g.previousSibling,e.appendData(g.data),k=e.length,g=e,g.parentNode.removeChild(g.nextSibling);for(;g.nextSibling&&g.nextSibling.nodeType===Node.TEXT_NODE;)e=g.nextSibling,g.appendData(e.data),g.parentNode.removeChild(e);return{textNode:g,offset:k}};this.fixCursorPositions=function(){Object.keys(m).forEach(function(b){var c=m[b],d=k(c.getNode()),e=a.createRootFilter(d),f,g,h,l=!1;h=c.getSelectedRange();f=r(h.startContainer,h.startOffset,d);g=p(h.startContainer,h.startOffset,[u,e],
f);h.collapsed?d=g:(f=r(h.endContainer,h.endOffset,d),d=p(h.endContainer,h.endOffset,[u,e],f));g.isStep()&&d.isStep()?g.container()!==d.container()||g.offset()!==d.offset()||h.collapsed&&c.getAnchorNode()===c.getNode()||(l=!0,h.setStart(g.container(),g.offset()),h.collapse(!0)):(l=!0,runtime.assert(g.roundToClosestStep(),"No walkable step found for cursor owned by "+b),h.setStart(g.container(),g.offset()),runtime.assert(d.roundToClosestStep(),"No walkable step found for cursor owned by "+b),h.setEnd(d.container(),
d.offset()));l&&(c.setSelectedRange(h,c.hasForwardSelection()),a.emit(ops.Document.signalCursorMoved,c))})};this.getCursorPosition=function(a){return(a=m[a])?t.convertDomPointToSteps(a.getNode(),0):0};this.getCursorSelection=function(a){a=m[a];var b=0,c=0;a&&(b=t.convertDomPointToSteps(a.getNode(),0),c=t.convertDomPointToSteps(a.getAnchorNode(),0));return{position:c,length:b-c}};this.getPositionFilter=function(){return u};this.getOdfCanvas=function(){return l};this.getCanvas=function(){return l};
this.getRootNode=h;this.addMember=function(a){runtime.assert(void 0===v[a.getMemberId()],"This member already exists");v[a.getMemberId()]=a};this.getMember=function(a){return v.hasOwnProperty(a)?v[a]:null};this.removeMember=function(a){delete v[a]};this.getCursor=function(a){return m[a]};this.getMemberIds=function(){var a=[],b;for(b in m)m.hasOwnProperty(b)&&a.push(m[b].getMemberId());return a};this.addCursor=function(b){runtime.assert(Boolean(b),"OdtDocument::addCursor without cursor");var c=b.getMemberId(),
d=a.convertCursorToDomRange(0,0);runtime.assert("string"===typeof c,"OdtDocument::addCursor has cursor without memberid");runtime.assert(!m[c],"OdtDocument::addCursor is adding a duplicate cursor with memberid "+c);b.setSelectedRange(d,!0);m[c]=b};this.removeCursor=function(b){var c=m[b];return c?(c.removeFromDocument(),delete m[b],a.emit(ops.Document.signalCursorRemoved,b),!0):!1};this.moveCursor=function(b,c,d,e){b=m[b];c=a.convertCursorToDomRange(c,d);b&&(b.setSelectedRange(c,0<=d),b.setSelectionType(e||
ops.OdtCursor.RangeSelection))};this.getFormatting=function(){return l.getFormatting()};this.emit=function(a,b){w.emit(a,b)};this.subscribe=function(a,b){w.subscribe(a,b)};this.unsubscribe=function(a,b){w.unsubscribe(a,b)};this.createRootFilter=function(a){return new d(a)};this.close=function(a){a()};this.destroy=function(a){a()};u=new ops.TextPositionFilter(h);c=new odf.OdfUtils;f=new core.DomUtils;t=new ops.StepsTranslator(h,gui.SelectionMover.createPositionIterator,u,500);w.subscribe(ops.OdtDocument.signalStepsInserted,
t.handleStepsInserted);w.subscribe(ops.OdtDocument.signalStepsRemoved,t.handleStepsRemoved);w.subscribe(ops.OdtDocument.signalOperationEnd,function(b){var c=b.spec(),d=c.memberid,c=(new Date(c.timestamp)).toISOString(),e=l.odfContainer();b.isEdit&&(d=a.getMember(d).getProperties().fullName,e.setMetadata({"dc:creator":d,"dc:date":c},null),s||(e.incrementEditingCycles(),e.setMetadata(null,["meta:editing-duration","meta:document-statistic"])),s=b)})};ops.OdtDocument.signalParagraphChanged="paragraph/changed";
ops.OdtDocument.signalTableAdded="table/added";ops.OdtDocument.signalCommonStyleCreated="style/created";ops.OdtDocument.signalCommonStyleDeleted="style/deleted";ops.OdtDocument.signalParagraphStyleModified="paragraphstyle/modified";ops.OdtDocument.signalOperationStart="operation/start";ops.OdtDocument.signalOperationEnd="operation/end";ops.OdtDocument.signalProcessingBatchStart="router/batchstart";ops.OdtDocument.signalProcessingBatchEnd="router/batchend";ops.OdtDocument.signalUndoStackChanged="undo/changed";
ops.OdtDocument.signalStepsInserted="steps/inserted";ops.OdtDocument.signalStepsRemoved="steps/removed";(function(){return ops.OdtDocument})();
// Input 45
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpAddAnnotation=function(){function l(b,d,g){var k=b.getTextNodeAtStep(g,h);k&&(b=k.textNode,g=b.parentNode,k.offset!==b.length&&b.splitText(k.offset),g.insertBefore(d,b.nextSibling),0===b.length&&g.removeChild(b))}var h,b,k,d,p,n;this.init=function(e){h=e.memberid;b=parseInt(e.timestamp,10);k=parseInt(e.position,10);d=parseInt(e.length,10)||0;p=e.name};this.isEdit=!0;this.group=void 0;this.execute=function(e){var q=e.getCursor(h),g,r;r=new core.DomUtils;n=e.getDOMDocument();var a=new Date(b),
c,f,m,v;c=n.createElementNS(odf.Namespaces.officens,"office:annotation");c.setAttributeNS(odf.Namespaces.officens,"office:name",p);g=n.createElementNS(odf.Namespaces.dcns,"dc:creator");g.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",h);g.textContent=e.getMember(h).getProperties().fullName;f=n.createElementNS(odf.Namespaces.dcns,"dc:date");f.appendChild(n.createTextNode(a.toISOString()));a=n.createElementNS(odf.Namespaces.textns,"text:list");m=n.createElementNS(odf.Namespaces.textns,
"text:list-item");v=n.createElementNS(odf.Namespaces.textns,"text:p");m.appendChild(v);a.appendChild(m);c.appendChild(g);c.appendChild(f);c.appendChild(a);d&&(g=n.createElementNS(odf.Namespaces.officens,"office:annotation-end"),g.setAttributeNS(odf.Namespaces.officens,"office:name",p),c.annotationEndElement=g,l(e,g,k+d));l(e,c,k);e.emit(ops.OdtDocument.signalStepsInserted,{position:k,length:d});q&&(g=n.createRange(),r=r.getElementsByTagNameNS(c,odf.Namespaces.textns,"p")[0],g.selectNodeContents(r),
q.setSelectedRange(g,!1),e.emit(ops.Document.signalCursorMoved,q));e.getOdfCanvas().addAnnotation(c);e.fixCursorPositions();return!0};this.spec=function(){return{optype:"AddAnnotation",memberid:h,timestamp:b,position:k,length:d,name:p}}};
// Input 46
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpAddCursor=function(){var l,h;this.init=function(b){l=b.memberid;h=b.timestamp};this.isEdit=!1;this.group=void 0;this.execute=function(b){var k=b.getCursor(l);if(k)return!1;k=new ops.OdtCursor(l,b);b.addCursor(k);b.emit(ops.Document.signalCursorAdded,k);return!0};this.spec=function(){return{optype:"AddCursor",memberid:l,timestamp:h}}};
// Input 47
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpAddMember=function(){var l,h,b;this.init=function(k){l=k.memberid;h=parseInt(k.timestamp,10);b=k.setProperties};this.isEdit=!1;this.group=void 0;this.execute=function(k){var d;if(k.getMember(l))return!1;d=new ops.Member(l,b);k.addMember(d);k.emit(ops.Document.signalMemberAdded,d);return!0};this.spec=function(){return{optype:"AddMember",memberid:l,timestamp:h,setProperties:b}}};
// Input 48
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpAddStyle=function(){var l,h,b,k,d,p,n=odf.Namespaces.stylens;this.init=function(e){l=e.memberid;h=e.timestamp;b=e.styleName;k=e.styleFamily;d="true"===e.isAutomaticStyle||!0===e.isAutomaticStyle;p=e.setProperties};this.isEdit=!0;this.group=void 0;this.execute=function(e){var h=e.getOdfCanvas().odfContainer(),g=e.getFormatting(),l=e.getDOMDocument().createElementNS(n,"style:style");if(!l)return!1;p&&g.updateStyle(l,p);l.setAttributeNS(n,"style:family",k);l.setAttributeNS(n,"style:name",b);d?
h.rootElement.automaticStyles.appendChild(l):h.rootElement.styles.appendChild(l);e.getOdfCanvas().refreshCSS();d||e.emit(ops.OdtDocument.signalCommonStyleCreated,{name:b,family:k});return!0};this.spec=function(){return{optype:"AddStyle",memberid:l,timestamp:h,styleName:b,styleFamily:k,isAutomaticStyle:d,setProperties:p}}};
// Input 49
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
odf.ObjectNameGenerator=function(l,h){function b(a,b){var c={};this.generateName=function(){var d=b(),e=0,f;do f=a+e,e+=1;while(c[f]||d[f]);c[f]=!0;return f}}function k(){var a={};[l.rootElement.automaticStyles,l.rootElement.styles].forEach(function(b){for(b=b.firstElementChild;b;)b.namespaceURI===d&&"style"===b.localName&&(a[b.getAttributeNS(d,"name")]=!0),b=b.nextElementSibling});return a}var d=odf.Namespaces.stylens,p=odf.Namespaces.drawns,n=odf.Namespaces.xlinkns,e=new core.DomUtils,q=(new core.Utils).hashString(h),
g=null,r=null,a=null,c={},f={};this.generateStyleName=function(){null===g&&(g=new b("auto"+q+"_",function(){return k()}));return g.generateName()};this.generateFrameName=function(){null===r&&(e.getElementsByTagNameNS(l.rootElement.body,p,"frame").forEach(function(a){c[a.getAttributeNS(p,"name")]=!0}),r=new b("fr"+q+"_",function(){return c}));return r.generateName()};this.generateImageName=function(){null===a&&(e.getElementsByTagNameNS(l.rootElement.body,p,"image").forEach(function(a){a=a.getAttributeNS(n,
"href");a=a.substring(9,a.lastIndexOf("."));f[a]=!0}),a=new b("img"+q+"_",function(){return f}));return a.generateName()}};
// Input 50
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
odf.TextStyleApplicator=function(l,h,b){function k(b){function d(a,b){return"object"===typeof a&&"object"===typeof b?Object.keys(a).every(function(e){return d(a[e],b[e])}):a===b}var a={};this.isStyleApplied=function(c){c=h.getAppliedStylesForElement(c,a);return d(b,c)}}function d(d){var k={};this.applyStyleToContainer=function(a){var c;c=a.getAttributeNS(e,"style-name");var f=a.ownerDocument;c=c||"";if(!k.hasOwnProperty(c)){var m=c,p;p=c?h.createDerivedStyleObject(c,"text",d):d;f=f.createElementNS(q,
"style:style");h.updateStyle(f,p);f.setAttributeNS(q,"style:name",l.generateStyleName());f.setAttributeNS(q,"style:family","text");f.setAttributeNS("urn:webodf:names:scope","scope","document-content");b.appendChild(f);k[m]=f}c=k[c].getAttributeNS(q,"name");a.setAttributeNS(e,"text:style-name",c)}}function p(b,d){var a=b.ownerDocument,c=b.parentNode,f,m,k=new core.LoopWatchDog(1E4);m=[];"span"!==c.localName||c.namespaceURI!==e?(f=a.createElementNS(e,"text:span"),c.insertBefore(f,b),c=!1):(b.previousSibling&&
!n.rangeContainsNode(d,c.firstChild)?(f=c.cloneNode(!1),c.parentNode.insertBefore(f,c.nextSibling)):f=c,c=!0);m.push(b);for(a=b.nextSibling;a&&n.rangeContainsNode(d,a);)k.check(),m.push(a),a=a.nextSibling;m.forEach(function(a){a.parentNode!==f&&f.appendChild(a)});if(a&&c)for(m=f.cloneNode(!1),f.parentNode.insertBefore(m,f.nextSibling);a;)k.check(),c=a.nextSibling,m.appendChild(a),a=c;return f}var n=new core.DomUtils,e=odf.Namespaces.textns,q=odf.Namespaces.stylens;this.applyStyle=function(b,e,a){var c=
{},f,m,h,l;runtime.assert(a&&a.hasOwnProperty("style:text-properties"),"applyStyle without any text properties");c["style:text-properties"]=a["style:text-properties"];h=new d(c);l=new k(c);b.forEach(function(a){f=l.isStyleApplied(a);!1===f&&(m=p(a,e),h.applyStyleToContainer(m))})}};
// Input 51
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpApplyDirectStyling=function(){function l(b,d,k){var a=b.getOdfCanvas().odfContainer(),c=e.splitBoundaries(d),f=n.getTextNodes(d,!1);d={startContainer:d.startContainer,startOffset:d.startOffset,endContainer:d.endContainer,endOffset:d.endOffset};(new odf.TextStyleApplicator(new odf.ObjectNameGenerator(a,h),b.getFormatting(),a.rootElement.automaticStyles)).applyStyle(f,d,k);c.forEach(e.normalizeTextNodes)}var h,b,k,d,p,n=new odf.OdfUtils,e=new core.DomUtils;this.init=function(e){h=e.memberid;b=
e.timestamp;k=parseInt(e.position,10);d=parseInt(e.length,10);p=e.setProperties};this.isEdit=!0;this.group=void 0;this.execute=function(e){var g=e.convertCursorToDomRange(k,d),r=n.getParagraphElements(g);l(e,g,p);g.detach();e.getOdfCanvas().refreshCSS();e.fixCursorPositions();r.forEach(function(a){e.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:a,memberId:h,timeStamp:b})});e.getOdfCanvas().rerenderAnnotations();return!0};this.spec=function(){return{optype:"ApplyDirectStyling",memberid:h,
timestamp:b,position:k,length:d,setProperties:p}}};
// Input 52
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpApplyHyperlink=function(){function l(b){for(;b;){if(e.isHyperlink(b))return!0;b=b.parentNode}return!1}var h,b,k,d,p,n=new core.DomUtils,e=new odf.OdfUtils;this.init=function(e){h=e.memberid;b=e.timestamp;k=e.position;d=e.length;p=e.hyperlink};this.isEdit=!0;this.group=void 0;this.execute=function(q){var g=q.getDOMDocument(),r=q.convertCursorToDomRange(k,d),a=n.splitBoundaries(r),c=[],f=e.getTextNodes(r,!1);if(0===f.length)return!1;f.forEach(function(a){var b=e.getParagraphElement(a);runtime.assert(!1===
l(a),"The given range should not contain any link.");var d=p,f=g.createElementNS(odf.Namespaces.textns,"text:a");f.setAttributeNS(odf.Namespaces.xlinkns,"xlink:type","simple");f.setAttributeNS(odf.Namespaces.xlinkns,"xlink:href",d);a.parentNode.insertBefore(f,a);f.appendChild(a);-1===c.indexOf(b)&&c.push(b)});a.forEach(n.normalizeTextNodes);r.detach();q.getOdfCanvas().refreshSize();q.getOdfCanvas().rerenderAnnotations();c.forEach(function(a){q.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:a,
memberId:h,timeStamp:b})});return!0};this.spec=function(){return{optype:"ApplyHyperlink",memberid:h,timestamp:b,position:k,length:d,hyperlink:p}}};
// Input 53
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpInsertImage=function(){var l,h,b,k,d,p,n,e,q=odf.Namespaces.drawns,g=odf.Namespaces.svgns,r=odf.Namespaces.textns,a=odf.Namespaces.xlinkns;this.init=function(a){l=a.memberid;h=a.timestamp;b=a.position;k=a.filename;d=a.frameWidth;p=a.frameHeight;n=a.frameStyleName;e=a.frameName};this.isEdit=!0;this.group=void 0;this.execute=function(c){var f=c.getOdfCanvas(),m=c.getTextNodeAtStep(b,l),v,w;if(!m)return!1;v=m.textNode;w=c.getParagraphElement(v);var m=m.offset!==v.length?v.splitText(m.offset):v.nextSibling,
z=c.getDOMDocument(),x=z.createElementNS(q,"draw:image"),z=z.createElementNS(q,"draw:frame");x.setAttributeNS(a,"xlink:href",k);x.setAttributeNS(a,"xlink:type","simple");x.setAttributeNS(a,"xlink:show","embed");x.setAttributeNS(a,"xlink:actuate","onLoad");z.setAttributeNS(q,"draw:style-name",n);z.setAttributeNS(q,"draw:name",e);z.setAttributeNS(r,"text:anchor-type","as-char");z.setAttributeNS(g,"svg:width",d);z.setAttributeNS(g,"svg:height",p);z.appendChild(x);v.parentNode.insertBefore(z,m);c.emit(ops.OdtDocument.signalStepsInserted,
{position:b,length:1});0===v.length&&v.parentNode.removeChild(v);f.addCssForFrameWithImage(z);f.refreshCSS();c.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:w,memberId:l,timeStamp:h});f.rerenderAnnotations();return!0};this.spec=function(){return{optype:"InsertImage",memberid:l,timestamp:h,filename:k,position:b,frameWidth:d,frameHeight:p,frameStyleName:n,frameName:e}}};
// Input 54
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpInsertTable=function(){function l(b,a){var c;if(1===g.length)c=g[0];else if(3===g.length)switch(b){case 0:c=g[0];break;case k-1:c=g[2];break;default:c=g[1]}else c=g[b];if(1===c.length)return c[0];if(3===c.length)switch(a){case 0:return c[0];case d-1:return c[2];default:return c[1]}return c[a]}var h,b,k,d,p,n,e,q,g;this.init=function(l){h=l.memberid;b=l.timestamp;p=l.position;k=l.initialRows;d=l.initialColumns;n=l.tableName;e=l.tableStyleName;q=l.tableColumnStyleName;g=l.tableCellStyleMatrix};
this.isEdit=!0;this.group=void 0;this.execute=function(g){var a=g.getTextNodeAtStep(p),c=g.getRootNode();if(a){var f=g.getDOMDocument(),m=f.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:table"),v=f.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:table-column"),w,z,x,u;e&&m.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:style-name",e);n&&m.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:name",n);v.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0",
"table:number-columns-repeated",d);q&&v.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:style-name",q);m.appendChild(v);for(x=0;x<k;x+=1){v=f.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:table-row");for(u=0;u<d;u+=1)w=f.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:table-cell"),(z=l(x,u))&&w.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:style-name",z),z=f.createElementNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0",
"text:p"),w.appendChild(z),v.appendChild(w);m.appendChild(v)}a=g.getParagraphElement(a.textNode);c.insertBefore(m,a.nextSibling);g.emit(ops.OdtDocument.signalStepsInserted,{position:p,length:d*k+1});g.getOdfCanvas().refreshSize();g.emit(ops.OdtDocument.signalTableAdded,{tableElement:m,memberId:h,timeStamp:b});g.getOdfCanvas().rerenderAnnotations();return!0}return!1};this.spec=function(){return{optype:"InsertTable",memberid:h,timestamp:b,position:p,initialRows:k,initialColumns:d,tableName:n,tableStyleName:e,
tableColumnStyleName:q,tableCellStyleMatrix:g}}};
// Input 55
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpInsertText=function(){var l,h,b,k,d;this.init=function(p){l=p.memberid;h=p.timestamp;b=p.position;d=p.text;k="true"===p.moveCursor||!0===p.moveCursor};this.isEdit=!0;this.group=void 0;this.execute=function(p){var n,e,q,g=null,r=p.getDOMDocument(),a,c=0,f,m=p.getCursor(l),v;p.upgradeWhitespacesAtPosition(b);if(n=p.getTextNodeAtStep(b)){e=n.textNode;g=e.nextSibling;q=e.parentNode;a=p.getParagraphElement(e);for(v=0;v<d.length;v+=1)if(" "===d[v]&&(0===v||v===d.length-1||" "===d[v-1])||"\t"===d[v])0===
c?(n.offset!==e.length&&(g=e.splitText(n.offset)),0<v&&e.appendData(d.substring(0,v))):c<v&&(c=d.substring(c,v),q.insertBefore(r.createTextNode(c),g)),c=v+1,f=" "===d[v]?"text:s":"text:tab",f=r.createElementNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0",f),f.appendChild(r.createTextNode(d[v])),q.insertBefore(f,g);0===c?e.insertData(n.offset,d):c<d.length&&(n=d.substring(c),q.insertBefore(r.createTextNode(n),g));q=e.parentNode;g=e.nextSibling;q.removeChild(e);q.insertBefore(e,g);0===e.length&&
e.parentNode.removeChild(e);p.emit(ops.OdtDocument.signalStepsInserted,{position:b,length:d.length});m&&k&&(p.moveCursor(l,b+d.length,0),p.emit(ops.Document.signalCursorMoved,m));0<b&&(1<b&&p.downgradeWhitespacesAtPosition(b-2),p.downgradeWhitespacesAtPosition(b-1));p.downgradeWhitespacesAtPosition(b);p.downgradeWhitespacesAtPosition(b+d.length-1);p.downgradeWhitespacesAtPosition(b+d.length);p.getOdfCanvas().refreshSize();p.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:a,memberId:l,
timeStamp:h});p.getOdfCanvas().rerenderAnnotations();return!0}return!1};this.spec=function(){return{optype:"InsertText",memberid:l,timestamp:h,position:b,text:d,moveCursor:k}}};
// Input 56
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpMoveCursor=function(){var l,h,b,k,d;this.init=function(p){l=p.memberid;h=p.timestamp;b=p.position;k=p.length||0;d=p.selectionType||ops.OdtCursor.RangeSelection};this.isEdit=!1;this.group=void 0;this.execute=function(h){var n=h.getCursor(l),e;if(!n)return!1;e=h.convertCursorToDomRange(b,k);n.setSelectedRange(e,0<=k);n.setSelectionType(d);h.emit(ops.Document.signalCursorMoved,n);return!0};this.spec=function(){return{optype:"MoveCursor",memberid:l,timestamp:h,position:b,length:k,selectionType:d}}};
// Input 57
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpRemoveAnnotation=function(){var l,h,b,k,d;this.init=function(p){l=p.memberid;h=p.timestamp;b=parseInt(p.position,10);k=parseInt(p.length,10);d=new core.DomUtils};this.isEdit=!0;this.group=void 0;this.execute=function(h){function l(b){q.parentNode.insertBefore(b,q)}for(var e=h.getIteratorAtPosition(b).container(),q;e.namespaceURI!==odf.Namespaces.officens||"annotation"!==e.localName;)e=e.parentNode;if(null===e)return!1;q=e;e=q.annotationEndElement;h.getOdfCanvas().forgetAnnotations();d.getElementsByTagNameNS(q,
"urn:webodf:names:cursor","cursor").forEach(l);d.getElementsByTagNameNS(q,"urn:webodf:names:cursor","anchor").forEach(l);q.parentNode.removeChild(q);e&&e.parentNode.removeChild(e);h.emit(ops.OdtDocument.signalStepsRemoved,{position:0<b?b-1:b,length:k});h.fixCursorPositions();h.getOdfCanvas().refreshAnnotations();return!0};this.spec=function(){return{optype:"RemoveAnnotation",memberid:l,timestamp:h,position:b,length:k}}};
// Input 58
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpRemoveBlob=function(){var l,h,b;this.init=function(k){l=k.memberid;h=k.timestamp;b=k.filename};this.isEdit=!0;this.group=void 0;this.execute=function(k){k.getOdfCanvas().odfContainer().removeBlob(b);return!0};this.spec=function(){return{optype:"RemoveBlob",memberid:l,timestamp:h,filename:b}}};
// Input 59
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpRemoveCursor=function(){var l,h;this.init=function(b){l=b.memberid;h=b.timestamp};this.isEdit=!1;this.group=void 0;this.execute=function(b){return b.removeCursor(l)?!0:!1};this.spec=function(){return{optype:"RemoveCursor",memberid:l,timestamp:h}}};
// Input 60
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpRemoveHyperlink=function(){var l,h,b,k,d=new core.DomUtils,p=new odf.OdfUtils;this.init=function(d){l=d.memberid;h=d.timestamp;b=d.position;k=d.length};this.isEdit=!0;this.group=void 0;this.execute=function(n){var e=n.convertCursorToDomRange(b,k),q=p.getHyperlinkElements(e);runtime.assert(1===q.length,"The given range should only contain a single link.");q=d.mergeIntoParent(q[0]);e.detach();n.getOdfCanvas().refreshSize();n.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:p.getParagraphElement(q),
memberId:l,timeStamp:h});n.getOdfCanvas().rerenderAnnotations();return!0};this.spec=function(){return{optype:"RemoveHyperlink",memberid:l,timestamp:h,position:b,length:k}}};
// Input 61
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpRemoveMember=function(){var l,h;this.init=function(b){l=b.memberid;h=parseInt(b.timestamp,10)};this.isEdit=!1;this.group=void 0;this.execute=function(b){if(!b.getMember(l))return!1;b.removeMember(l);b.emit(ops.Document.signalMemberRemoved,l);return!0};this.spec=function(){return{optype:"RemoveMember",memberid:l,timestamp:h}}};
// Input 62
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpRemoveStyle=function(){var l,h,b,k;this.init=function(d){l=d.memberid;h=d.timestamp;b=d.styleName;k=d.styleFamily};this.isEdit=!0;this.group=void 0;this.execute=function(d){var h=d.getStyleElement(b,k);if(!h)return!1;h.parentNode.removeChild(h);d.getOdfCanvas().refreshCSS();d.emit(ops.OdtDocument.signalCommonStyleDeleted,{name:b,family:k});return!0};this.spec=function(){return{optype:"RemoveStyle",memberid:l,timestamp:h,styleName:b,styleFamily:k}}};
// Input 63
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpRemoveText=function(){function l(b){function d(a){return e.hasOwnProperty(a.namespaceURI)||"br"===a.localName&&p.isLineBreak(a.parentNode)||a.nodeType===Node.TEXT_NODE&&e.hasOwnProperty(a.parentNode.namespaceURI)}function h(a){if(p.isCharacterElement(a))return!1;if(a.nodeType===Node.TEXT_NODE)return 0===a.textContent.length;for(a=a.firstChild;a;){if(e.hasOwnProperty(a.namespaceURI)||!h(a))return!1;a=a.nextSibling}return!0}function a(c){var e;c.nodeType===Node.TEXT_NODE?(e=c.parentNode,e.removeChild(c)):
e=n.removeUnwantedNodes(c,d);return e&&!p.isParagraph(e)&&e!==b&&h(e)?a(e):e}this.isEmpty=h;this.mergeChildrenIntoParent=a}var h,b,k,d,p,n,e={};this.init=function(l){runtime.assert(0<=l.length,"OpRemoveText only supports positive lengths");h=l.memberid;b=l.timestamp;k=parseInt(l.position,10);d=parseInt(l.length,10);p=new odf.OdfUtils;n=new core.DomUtils;e[odf.Namespaces.dbns]=!0;e[odf.Namespaces.dcns]=!0;e[odf.Namespaces.dr3dns]=!0;e[odf.Namespaces.drawns]=!0;e[odf.Namespaces.chartns]=!0;e[odf.Namespaces.formns]=
!0;e[odf.Namespaces.numberns]=!0;e[odf.Namespaces.officens]=!0;e[odf.Namespaces.presentationns]=!0;e[odf.Namespaces.stylens]=!0;e[odf.Namespaces.svgns]=!0;e[odf.Namespaces.tablens]=!0;e[odf.Namespaces.textns]=!0};this.isEdit=!0;this.group=void 0;this.execute=function(e){var g,r,a,c,f=e.getCursor(h),m=new l(e.getRootNode());e.upgradeWhitespacesAtPosition(k);e.upgradeWhitespacesAtPosition(k+d);r=e.convertCursorToDomRange(k,d);n.splitBoundaries(r);g=e.getParagraphElement(r.startContainer);a=p.getTextElements(r,
!1,!0);c=p.getParagraphElements(r);r.detach();a.forEach(function(a){a.parentNode?m.mergeChildrenIntoParent(a):runtime.log("WARN: text element has already been removed from it's container")});r=c.reduce(function(a,b){var c,d=a,e=b,f,g=null;m.isEmpty(a)&&(b.parentNode!==a.parentNode&&(f=b.parentNode,a.parentNode.insertBefore(b,a.nextSibling)),e=a,d=b,g=d.getElementsByTagNameNS("urn:webodf:names:editinfo","editinfo").item(0)||d.firstChild);for(;e.firstChild;)c=e.firstChild,e.removeChild(c),"editinfo"!==
c.localName&&d.insertBefore(c,g);f&&m.isEmpty(f)&&m.mergeChildrenIntoParent(f);m.mergeChildrenIntoParent(e);return d});e.emit(ops.OdtDocument.signalStepsRemoved,{position:k,length:d});e.downgradeWhitespacesAtPosition(k);e.fixCursorPositions();e.getOdfCanvas().refreshSize();e.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:r||g,memberId:h,timeStamp:b});f&&(f.resetSelectionType(),e.emit(ops.Document.signalCursorMoved,f));e.getOdfCanvas().rerenderAnnotations();return!0};this.spec=function(){return{optype:"RemoveText",
memberid:h,timestamp:b,position:k,length:d}}};
// Input 64
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpSetBlob=function(){var l,h,b,k,d;this.init=function(p){l=p.memberid;h=p.timestamp;b=p.filename;k=p.mimetype;d=p.content};this.isEdit=!0;this.group=void 0;this.execute=function(h){h.getOdfCanvas().odfContainer().setBlob(b,k,d);return!0};this.spec=function(){return{optype:"SetBlob",memberid:l,timestamp:h,filename:b,mimetype:k,content:d}}};
// Input 65
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpSetParagraphStyle=function(){var l,h,b,k;this.init=function(d){l=d.memberid;h=d.timestamp;b=d.position;k=d.styleName};this.isEdit=!0;this.group=void 0;this.execute=function(d){var p;p=d.getIteratorAtPosition(b);return(p=d.getParagraphElement(p.container()))?(""!==k?p.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0","text:style-name",k):p.removeAttributeNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0","style-name"),d.getOdfCanvas().refreshSize(),d.emit(ops.OdtDocument.signalParagraphChanged,
{paragraphElement:p,timeStamp:h,memberId:l}),d.getOdfCanvas().rerenderAnnotations(),!0):!1};this.spec=function(){return{optype:"SetParagraphStyle",memberid:l,timestamp:h,position:b,styleName:k}}};
// Input 66
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpSplitParagraph=function(){var l,h,b,k,d;this.init=function(p){l=p.memberid;h=p.timestamp;b=p.position;k="true"===p.moveCursor||!0===p.moveCursor;d=new odf.OdfUtils};this.isEdit=!0;this.group=void 0;this.execute=function(p){var n,e,q,g,r,a,c,f=p.getCursor(l);p.upgradeWhitespacesAtPosition(b);n=p.getTextNodeAtStep(b);if(!n)return!1;e=p.getParagraphElement(n.textNode);if(!e)return!1;q=d.isListItem(e.parentNode)?e.parentNode:e;0===n.offset?(c=n.textNode.previousSibling,a=null):(c=n.textNode,a=n.offset>=
n.textNode.length?null:n.textNode.splitText(n.offset));for(g=n.textNode;g!==q;){g=g.parentNode;r=g.cloneNode(!1);a&&r.appendChild(a);if(c)for(;c&&c.nextSibling;)r.appendChild(c.nextSibling);else for(;g.firstChild;)r.appendChild(g.firstChild);g.parentNode.insertBefore(r,g.nextSibling);c=g;a=r}d.isListItem(a)&&(a=a.childNodes.item(0));0===n.textNode.length&&n.textNode.parentNode.removeChild(n.textNode);p.emit(ops.OdtDocument.signalStepsInserted,{position:b,length:1});f&&k&&(p.moveCursor(l,b+1,0),p.emit(ops.Document.signalCursorMoved,
f));p.fixCursorPositions();p.getOdfCanvas().refreshSize();p.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:e,memberId:l,timeStamp:h});p.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:a,memberId:l,timeStamp:h});p.getOdfCanvas().rerenderAnnotations();return!0};this.spec=function(){return{optype:"SplitParagraph",memberid:l,timestamp:h,position:b,moveCursor:k}}};
// Input 67
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpUpdateMember=function(){function l(b){var d="//dc:creator[@editinfo:memberid='"+h+"']";b=xmldom.XPath.getODFElementsWithXPath(b.getRootNode(),d,function(b){return"editinfo"===b?"urn:webodf:names:editinfo":odf.Namespaces.lookupNamespaceURI(b)});for(d=0;d<b.length;d+=1)b[d].textContent=k.fullName}var h,b,k,d;this.init=function(l){h=l.memberid;b=parseInt(l.timestamp,10);k=l.setProperties;d=l.removedProperties};this.isEdit=!1;this.group=void 0;this.execute=function(b){var n=b.getMember(h);if(!n)return!1;
d&&n.removeProperties(d);k&&(n.setProperties(k),k.fullName&&l(b));b.emit(ops.Document.signalMemberUpdated,n);return!0};this.spec=function(){return{optype:"UpdateMember",memberid:h,timestamp:b,setProperties:k,removedProperties:d}}};
// Input 68
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpUpdateMetadata=function(){var l,h,b,k;this.init=function(d){l=d.memberid;h=parseInt(d.timestamp,10);b=d.setProperties;k=d.removedProperties};this.isEdit=!0;this.group=void 0;this.execute=function(d){d=d.getOdfCanvas().odfContainer();var h=[];k&&(h=k.attributes.split(","));d.setMetadata(b,h);return!0};this.spec=function(){return{optype:"UpdateMetadata",memberid:l,timestamp:h,setProperties:b,removedProperties:k}}};
// Input 69
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpUpdateParagraphStyle=function(){function l(b,d){var g,h,a=d?d.split(","):[];for(g=0;g<a.length;g+=1)h=a[g].split(":"),b.removeAttributeNS(odf.Namespaces.lookupNamespaceURI(h[0]),h[1])}var h,b,k,d,p,n=odf.Namespaces.stylens;this.init=function(e){h=e.memberid;b=e.timestamp;k=e.styleName;d=e.setProperties;p=e.removedProperties};this.isEdit=!0;this.group=void 0;this.execute=function(b){var h=b.getFormatting(),g,r,a;return(g=""!==k?b.getParagraphStyleElement(k):h.getDefaultStyleElement("paragraph"))?
(r=g.getElementsByTagNameNS(n,"paragraph-properties").item(0),a=g.getElementsByTagNameNS(n,"text-properties").item(0),d&&h.updateStyle(g,d),p&&(h=p["style:paragraph-properties"],r&&h&&(l(r,h.attributes),0===r.attributes.length&&g.removeChild(r)),h=p["style:text-properties"],a&&h&&(l(a,h.attributes),0===a.attributes.length&&g.removeChild(a)),l(g,p.attributes)),b.getOdfCanvas().refreshCSS(),b.emit(ops.OdtDocument.signalParagraphStyleModified,k),b.getOdfCanvas().rerenderAnnotations(),!0):!1};this.spec=
function(){return{optype:"UpdateParagraphStyle",memberid:h,timestamp:b,styleName:k,setProperties:d,removedProperties:p}}};
// Input 70
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OperationFactory=function(){var l;this.register=function(h,b){l[h]=b};this.create=function(h){var b=null,k=l[h.optype];k&&(b=new k,b.init(h));return b};l={AddMember:ops.OpAddMember,UpdateMember:ops.OpUpdateMember,RemoveMember:ops.OpRemoveMember,AddCursor:ops.OpAddCursor,ApplyDirectStyling:ops.OpApplyDirectStyling,SetBlob:ops.OpSetBlob,RemoveBlob:ops.OpRemoveBlob,InsertImage:ops.OpInsertImage,InsertTable:ops.OpInsertTable,InsertText:ops.OpInsertText,RemoveText:ops.OpRemoveText,SplitParagraph:ops.OpSplitParagraph,
SetParagraphStyle:ops.OpSetParagraphStyle,UpdateParagraphStyle:ops.OpUpdateParagraphStyle,AddStyle:ops.OpAddStyle,RemoveStyle:ops.OpRemoveStyle,MoveCursor:ops.OpMoveCursor,RemoveCursor:ops.OpRemoveCursor,AddAnnotation:ops.OpAddAnnotation,RemoveAnnotation:ops.OpRemoveAnnotation,UpdateMetadata:ops.OpUpdateMetadata,ApplyHyperlink:ops.OpApplyHyperlink,RemoveHyperlink:ops.OpRemoveHyperlink}};
// Input 71
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OperationRouter=function(){};ops.OperationRouter.prototype.setOperationFactory=function(l){};ops.OperationRouter.prototype.setPlaybackFunction=function(l){};ops.OperationRouter.prototype.push=function(l){};ops.OperationRouter.prototype.close=function(l){};ops.OperationRouter.prototype.subscribe=function(l,h){};ops.OperationRouter.prototype.unsubscribe=function(l,h){};ops.OperationRouter.prototype.hasLocalUnsyncedOps=function(){};ops.OperationRouter.prototype.hasSessionHostConnection=function(){};
ops.OperationRouter.signalProcessingBatchStart="router/batchstart";ops.OperationRouter.signalProcessingBatchEnd="router/batchend";
// Input 72
/*

 Copyright (C) 2012 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.TrivialOperationRouter=function(){var l=new core.EventNotifier([ops.OperationRouter.signalProcessingBatchStart,ops.OperationRouter.signalProcessingBatchEnd]),h,b,k=0;this.setOperationFactory=function(b){h=b};this.setPlaybackFunction=function(d){b=d};this.push=function(d){k+=1;l.emit(ops.OperationRouter.signalProcessingBatchStart,{});d.forEach(function(d){d=d.spec();d.timestamp=(new Date).getTime();d=h.create(d);d.group="g"+k;b(d)});l.emit(ops.OperationRouter.signalProcessingBatchEnd,{})};this.close=
function(b){b()};this.subscribe=function(b,h){l.subscribe(b,h)};this.unsubscribe=function(b,h){l.unsubscribe(b,h)};this.hasLocalUnsyncedOps=function(){return!1};this.hasSessionHostConnection=function(){return!0}};
// Input 73
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.Session=function(l){function h(b){d.emit(ops.OdtDocument.signalProcessingBatchStart,b)}function b(b){d.emit(ops.OdtDocument.signalProcessingBatchEnd,b)}var k=new ops.OperationFactory,d=new ops.OdtDocument(l),p=null;this.setOperationFactory=function(b){k=b;p&&p.setOperationFactory(k)};this.setOperationRouter=function(l){p&&(p.unsubscribe(ops.OperationRouter.signalProcessingBatchStart,h),p.unsubscribe(ops.OperationRouter.signalProcessingBatchEnd,b));p=l;p.subscribe(ops.OperationRouter.signalProcessingBatchStart,
h);p.subscribe(ops.OperationRouter.signalProcessingBatchEnd,b);l.setPlaybackFunction(function(b){d.emit(ops.OdtDocument.signalOperationStart,b);return b.execute(d)?(d.emit(ops.OdtDocument.signalOperationEnd,b),!0):!1});l.setOperationFactory(k)};this.getOperationFactory=function(){return k};this.getOdtDocument=function(){return d};this.enqueue=function(b){p.push(b)};this.close=function(b){p.close(function(e){e?b(e):d.close(b)})};this.destroy=function(b){d.destroy(b)};this.setOperationRouter(new ops.TrivialOperationRouter)};
// Input 74
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.AnnotationController=function(l,h){function b(){var b=n.getCursor(h),b=b&&b.getNode(),a=!1;if(b){a:{for(a=n.getRootNode();b&&b!==a;){if(b.namespaceURI===g&&"annotation"===b.localName){b=!0;break a}b=b.parentNode}b=!1}a=!b}a!==e&&(e=a,q.emit(gui.AnnotationController.annotatableChanged,e))}function k(d){d.getMemberId()===h&&b()}function d(d){d===h&&b()}function p(d){d.getMemberId()===h&&b()}var n=l.getOdtDocument(),e=!1,q=new core.EventNotifier([gui.AnnotationController.annotatableChanged]),g=odf.Namespaces.officens;
this.isAnnotatable=function(){return e};this.addAnnotation=function(){var b=new ops.OpAddAnnotation,a=n.getCursorSelection(h),c=a.length,a=a.position;e&&(a=0<=c?a:a+c,c=Math.abs(c),b.init({memberid:h,position:a,length:c,name:h+Date.now()}),l.enqueue([b]))};this.removeAnnotation=function(b){var a,c;a=n.convertDomPointToCursorStep(b,0)+1;c=n.convertDomPointToCursorStep(b,b.childNodes.length);b=new ops.OpRemoveAnnotation;b.init({memberid:h,position:a,length:c-a});c=new ops.OpMoveCursor;c.init({memberid:h,
position:0<a?a-1:a,length:0});l.enqueue([b,c])};this.subscribe=function(b,a){q.subscribe(b,a)};this.unsubscribe=function(b,a){q.unsubscribe(b,a)};this.destroy=function(b){n.unsubscribe(ops.Document.signalCursorAdded,k);n.unsubscribe(ops.Document.signalCursorRemoved,d);n.unsubscribe(ops.Document.signalCursorMoved,p);b()};n.subscribe(ops.Document.signalCursorAdded,k);n.subscribe(ops.Document.signalCursorRemoved,d);n.subscribe(ops.Document.signalCursorMoved,p);b()};
gui.AnnotationController.annotatableChanged="annotatable/changed";(function(){return gui.AnnotationController})();
// Input 75
gui.Avatar=function(l,h){var b=this,k,d,p;this.setColor=function(b){d.style.borderColor=b};this.setImageUrl=function(h){b.isVisible()?d.src=h:p=h};this.isVisible=function(){return"block"===k.style.display};this.show=function(){p&&(d.src=p,p=void 0);k.style.display="block"};this.hide=function(){k.style.display="none"};this.markAsFocussed=function(b){b?k.classList.add("active"):k.classList.remove("active")};this.destroy=function(b){l.removeChild(k);b()};(function(){var b=l.ownerDocument,e=b.documentElement.namespaceURI;
k=b.createElementNS(e,"div");d=b.createElementNS(e,"img");d.width=64;d.height=64;k.appendChild(d);k.style.width="64px";k.style.height="70px";k.style.position="absolute";k.style.top="-80px";k.style.left="-34px";k.style.display=h?"block":"none";k.className="handle";l.appendChild(k)})()};
// Input 76
gui.Caret=function(l,h,b){function k(){q.style.opacity="0"===q.style.opacity?"1":"0";m.trigger()}function d(a,b){var c=a.getBoundingClientRect(),d=0,e=0;c&&b&&(d=Math.max(c.top,b.top),e=Math.min(c.bottom,b.bottom));return e-d}function p(){Object.keys(x).forEach(function(a){u[a]=x[a]})}function n(){var e,f,h,k;if(!1===x.isShown||l.getSelectionType()!==ops.OdtCursor.RangeSelection||!b&&!l.getSelectedRange().collapsed)x.visibility="hidden",q.style.visibility="hidden",m.cancel();else{x.visibility="visible";
q.style.visibility="visible";if(!1===x.isFocused)q.style.opacity="1",m.cancel();else{if(v||u.visibility!==x.visibility)q.style.opacity="1",m.cancel();m.trigger()}if(z||w||u.visibility!==x.visibility){e=l.getSelectedRange().cloneRange();f=l.getNode();var n=null;f.previousSibling&&(h=f.previousSibling.nodeType===Node.TEXT_NODE?f.previousSibling.textContent.length:f.previousSibling.childNodes.length,e.setStart(f.previousSibling,0<h?h-1:0),e.setEnd(f.previousSibling,h),(h=e.getBoundingClientRect())&&
h.height&&(n=h));f.nextSibling&&(e.setStart(f.nextSibling,0),e.setEnd(f.nextSibling,0<(f.nextSibling.nodeType===Node.TEXT_NODE?f.nextSibling.textContent.length:f.nextSibling.childNodes.length)?1:0),(h=e.getBoundingClientRect())&&h.height&&(!n||d(f,h)>d(f,n))&&(n=h));f=n;n=l.getDocument().getCanvas();e=n.getZoomLevel();n=c.getBoundingClientRect(n.getSizer());f?(q.style.top="0",h=c.getBoundingClientRect(q),8>f.height&&(f={top:f.top-(8-f.height)/2,height:8}),q.style.height=c.adaptRangeDifferenceToZoomLevel(f.height,
e)+"px",q.style.top=c.adaptRangeDifferenceToZoomLevel(f.top-h.top,e)+"px"):(q.style.height="1em",q.style.top="5%");a&&(f=runtime.getWindow().getComputedStyle(q,null),h=c.getBoundingClientRect(q),a.style.bottom=c.adaptRangeDifferenceToZoomLevel(n.bottom-h.bottom,e)+"px",a.style.left=c.adaptRangeDifferenceToZoomLevel(h.right-n.left,e)+"px",f.font?a.style.font=f.font:(a.style.fontStyle=f.fontStyle,a.style.fontVariant=f.fontVariant,a.style.fontWeight=f.fontWeight,a.style.fontSize=f.fontSize,a.style.lineHeight=
f.lineHeight,a.style.fontFamily=f.fontFamily))}if(w){var n=l.getDocument().getCanvas().getElement().parentNode,r;h=n.offsetWidth-n.clientWidth+5;k=n.offsetHeight-n.clientHeight+5;r=q.getBoundingClientRect();e=r.left-h;f=r.top-k;h=r.right+h;k=r.bottom+k;r=n.getBoundingClientRect();f<r.top?n.scrollTop-=r.top-f:k>r.bottom&&(n.scrollTop+=k-r.bottom);e<r.left?n.scrollLeft-=r.left-e:h>r.right&&(n.scrollLeft+=h-r.right)}}u.isFocused!==x.isFocused&&g.markAsFocussed(x.isFocused);p();z=w=v=!1}function e(a){r.removeChild(q);
a()}var q,g,r,a,c=new core.DomUtils,f,m,v=!1,w=!1,z=!1,x={isFocused:!1,isShown:!0,visibility:"hidden"},u={isFocused:!x.isFocused,isShown:!x.isShown,visibility:"hidden"};this.handleUpdate=function(){z=!0;"hidden"!==x.visibility&&(x.visibility="hidden",q.style.visibility="hidden");f.trigger()};this.refreshCursorBlinking=function(){v=!0;f.trigger()};this.setFocus=function(){x.isFocused=!0;f.trigger()};this.removeFocus=function(){x.isFocused=!1;f.trigger()};this.show=function(){x.isShown=!0;f.trigger()};
this.hide=function(){x.isShown=!1;f.trigger()};this.setAvatarImageUrl=function(a){g.setImageUrl(a)};this.setColor=function(a){q.style.borderColor=a;g.setColor(a)};this.getCursor=function(){return l};this.getFocusElement=function(){return q};this.toggleHandleVisibility=function(){g.isVisible()?g.hide():g.show()};this.showHandle=function(){g.show()};this.hideHandle=function(){g.hide()};this.setOverlayElement=function(b){a=b;z=!0;f.trigger()};this.ensureVisible=function(){w=!0;f.trigger()};this.destroy=
function(a){core.Async.destroyAll([f.destroy,m.destroy,g.destroy,e],a)};(function(){var a=l.getDocument().getDOMDocument();q=a.createElementNS(a.documentElement.namespaceURI,"span");q.className="caret";q.style.top="5%";r=l.getNode();r.appendChild(q);g=new gui.Avatar(r,h);f=new core.ScheduledTask(n,0);m=new core.ScheduledTask(k,500);f.triggerImmediate()})()};
// Input 77
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
odf.TextSerializer=function(){function l(k){var d="",p=h.filter?h.filter.acceptNode(k):NodeFilter.FILTER_ACCEPT,n=k.nodeType,e;if((p===NodeFilter.FILTER_ACCEPT||p===NodeFilter.FILTER_SKIP)&&b.isTextContentContainingNode(k))for(e=k.firstChild;e;)d+=l(e),e=e.nextSibling;p===NodeFilter.FILTER_ACCEPT&&(n===Node.ELEMENT_NODE&&b.isParagraph(k)?d+="\n":n===Node.TEXT_NODE&&k.textContent&&(d+=k.textContent));return d}var h=this,b=new odf.OdfUtils;this.filter=null;this.writeToString=function(b){if(!b)return"";
b=l(b);"\n"===b[b.length-1]&&(b=b.substr(0,b.length-1));return b}};
// Input 78
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.MimeDataExporter=function(){var l,h;this.exportRangeToDataTransfer=function(b,h){var d;d=h.startContainer.ownerDocument.createElement("span");d.appendChild(h.cloneContents());d=l.writeToString(d);try{b.setData("text/plain",d)}catch(p){b.setData("Text",d)}};l=new odf.TextSerializer;h=new odf.OdfNodeFilter;l.filter=h};
// Input 79
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.Clipboard=function(l){this.setDataFromRange=function(h,b){var k,d=h.clipboardData;k=runtime.getWindow();!d&&k&&(d=k.clipboardData);d?(k=!0,l.exportRangeToDataTransfer(d,b),h.preventDefault()):k=!1;return k}};
// Input 80
/*

 Copyright (C) 2012-2014 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.StyleSummary=function(l){function h(b,h){var e=b+"|"+h,k;d.hasOwnProperty(e)||(k=[],l.forEach(function(d){d=(d=d[b])&&d[h];-1===k.indexOf(d)&&k.push(d)}),d[e]=k);return d[e]}function b(b,d,e){return function(){var k=h(b,d);return e.length>=k.length&&k.every(function(b){return-1!==e.indexOf(b)})}}function k(b,d){var e=h(b,d);return 1===e.length?e[0]:void 0}var d={};this.getPropertyValues=h;this.getCommonValue=k;this.isBold=b("style:text-properties","fo:font-weight",["bold"]);this.isItalic=b("style:text-properties",
"fo:font-style",["italic"]);this.hasUnderline=b("style:text-properties","style:text-underline-style",["solid"]);this.hasStrikeThrough=b("style:text-properties","style:text-line-through-style",["solid"]);this.fontSize=function(){var b=k("style:text-properties","fo:font-size");return b&&parseFloat(b)};this.fontName=function(){return k("style:text-properties","style:font-name")};this.isAlignedLeft=b("style:paragraph-properties","fo:text-align",["left","start"]);this.isAlignedCenter=b("style:paragraph-properties",
"fo:text-align",["center"]);this.isAlignedRight=b("style:paragraph-properties","fo:text-align",["right","end"]);this.isAlignedJustified=b("style:paragraph-properties","fo:text-align",["justify"]);this.text={isBold:this.isBold,isItalic:this.isItalic,hasUnderline:this.hasUnderline,hasStrikeThrough:this.hasStrikeThrough,fontSize:this.fontSize,fontName:this.fontName};this.paragraph={isAlignedLeft:this.isAlignedLeft,isAlignedCenter:this.isAlignedCenter,isAlignedRight:this.isAlignedRight,isAlignedJustified:this.isAlignedJustified}};
// Input 81
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.DirectFormattingController=function(l,h,b,k){function d(a){var b;a.collapsed?(b=a.startContainer,b.hasChildNodes()&&a.startOffset<b.childNodes.length&&(b=b.childNodes.item(a.startOffset)),a=[b]):a=R.getTextNodes(a,!0);return a}function p(a,b){var c={};Object.keys(a).forEach(function(d){var e=a[d](),f=b[d]();e!==f&&(c[d]=f)});return c}function n(){var a,b,c;a=(a=(a=F.getCursor(h))&&a.getSelectedRange())?d(a):[];a=F.getFormatting().getAppliedStyles(a);a[0]&&E&&(a[0]=V.mergeObjects(a[0],E));J=a;
c=new gui.StyleSummary(J);a=p(H.text,c.text);b=p(H.paragraph,c.paragraph);H=c;0<Object.keys(a).length&&Y.emit(gui.DirectFormattingController.textStylingChanged,a);0<Object.keys(b).length&&Y.emit(gui.DirectFormattingController.paragraphStylingChanged,b)}function e(a){("string"===typeof a?a:a.getMemberId())===h&&n()}function q(){n()}function g(a){var b=F.getCursor(h);a=a.paragraphElement;b&&F.getParagraphElement(b.getNode())===a&&n()}function r(a,b){b(!a());return!0}function a(a){var b=F.getCursorSelection(h),
c={"style:text-properties":a};0!==b.length?(a=new ops.OpApplyDirectStyling,a.init({memberid:h,position:b.position,length:b.length,setProperties:c}),l.enqueue([a])):(E=V.mergeObjects(E||{},c),n())}function c(b,c){var d={};d[b]=c;a(d)}function f(a){a=a.spec();E&&a.memberid===h&&"SplitParagraph"!==a.optype&&(E=null,n())}function m(a){c("fo:font-weight",a?"bold":"normal")}function v(a){c("fo:font-style",a?"italic":"normal")}function w(a){c("style:text-underline-style",a?"solid":"none")}function z(a){c("style:text-line-through-style",
a?"solid":"none")}function x(a){return a===ops.StepsTranslator.NEXT_STEP}function u(a){var c=F.getCursor(h).getSelectedRange(),c=R.getParagraphElements(c),d=F.getFormatting(),e=[],f={},g;c.forEach(function(c){var m=F.convertDomPointToCursorStep(c,0,x),k=c.getAttributeNS(odf.Namespaces.textns,"style-name"),l;c=k?f.hasOwnProperty(k)?f[k]:void 0:g;c||(c=b.generateStyleName(),k?(f[k]=c,l=d.createDerivedStyleObject(k,"paragraph",{})):(g=c,l={}),l=a(l),k=new ops.OpAddStyle,k.init({memberid:h,styleName:c.toString(),
styleFamily:"paragraph",isAutomaticStyle:!0,setProperties:l}),e.push(k));k=new ops.OpSetParagraphStyle;k.init({memberid:h,styleName:c.toString(),position:m});e.push(k)});l.enqueue(e)}function t(a){u(function(b){return V.mergeObjects(b,a)})}function s(a){t({"style:paragraph-properties":{"fo:text-align":a}})}function A(a,b){var c=F.getFormatting().getDefaultTabStopDistance(),d=b["style:paragraph-properties"],e;d&&(d=d["fo:margin-left"])&&(e=R.parseLength(d));return V.mergeObjects(b,{"style:paragraph-properties":{"fo:margin-left":e&&
e.unit===c.unit?e.value+a*c.value+e.unit:a*c.value+c.unit}})}function I(a,b){var c=d(a),e=F.getFormatting().getAppliedStyles(c)[0],f=F.getFormatting().getAppliedStylesForElement(b);if(!e||"text"!==e["style:family"]||!e["style:text-properties"])return!1;if(!f||!f["style:text-properties"])return!0;e=e["style:text-properties"];f=f["style:text-properties"];return!Object.keys(e).every(function(a){return e[a]===f[a]})}function M(){}var P=this,F=l.getOdtDocument(),V=new core.Utils,R=new odf.OdfUtils,Y=new core.EventNotifier([gui.DirectFormattingController.textStylingChanged,
gui.DirectFormattingController.paragraphStylingChanged]),B=odf.Namespaces.textns,ba=core.PositionFilter.FilterResult.FILTER_ACCEPT,E,J=[],H=new gui.StyleSummary(J);this.formatTextSelection=a;this.createCursorStyleOp=function(a,b,c){var d=null;(c=c?J[0]:E)&&c["style:text-properties"]&&(d=new ops.OpApplyDirectStyling,d.init({memberid:h,position:a,length:b,setProperties:{"style:text-properties":c["style:text-properties"]}}),E=null,n());return d};this.setBold=m;this.setItalic=v;this.setHasUnderline=w;
this.setHasStrikethrough=z;this.setFontSize=function(a){c("fo:font-size",a+"pt")};this.setFontName=function(a){c("style:font-name",a)};this.getAppliedStyles=function(){return J};this.toggleBold=r.bind(P,function(){return H.isBold()},m);this.toggleItalic=r.bind(P,function(){return H.isItalic()},v);this.toggleUnderline=r.bind(P,function(){return H.hasUnderline()},w);this.toggleStrikethrough=r.bind(P,function(){return H.hasStrikeThrough()},z);this.isBold=function(){return H.isBold()};this.isItalic=function(){return H.isItalic()};
this.hasUnderline=function(){return H.hasUnderline()};this.hasStrikeThrough=function(){return H.hasStrikeThrough()};this.fontSize=function(){return H.fontSize()};this.fontName=function(){return H.fontName()};this.isAlignedLeft=function(){return H.isAlignedLeft()};this.isAlignedCenter=function(){return H.isAlignedCenter()};this.isAlignedRight=function(){return H.isAlignedRight()};this.isAlignedJustified=function(){return H.isAlignedJustified()};this.alignParagraphLeft=function(){s("left");return!0};
this.alignParagraphCenter=function(){s("center");return!0};this.alignParagraphRight=function(){s("right");return!0};this.alignParagraphJustified=function(){s("justify");return!0};this.indent=function(){u(A.bind(null,1));return!0};this.outdent=function(){u(A.bind(null,-1));return!0};this.createParagraphStyleOps=function(a){var c=F.getCursor(h),d=c.getSelectedRange(),e=[],f,g;c.hasForwardSelection()?(f=c.getAnchorNode(),g=c.getNode()):(f=c.getNode(),g=c.getAnchorNode());c=F.getParagraphElement(g);runtime.assert(Boolean(c),
"DirectFormattingController: Cursor outside paragraph");var m;a:{m=c;var k=gui.SelectionMover.createPositionIterator(m),l=new core.PositionFilterChain;l.addFilter(F.getPositionFilter());l.addFilter(F.createRootFilter(h));for(k.setUnfilteredPosition(d.endContainer,d.endOffset);k.nextPosition();)if(l.acceptPosition(k)===ba){m=F.getParagraphElement(k.getCurrentNode())!==m;break a}m=!0}if(!m)return e;g!==f&&(c=F.getParagraphElement(f));if(!E&&!I(d,c))return e;d=J[0];if(!d)return e;if(f=c.getAttributeNS(B,
"style-name"))d={"style:text-properties":d["style:text-properties"]},d=F.getFormatting().createDerivedStyleObject(f,"paragraph",d);c=b.generateStyleName();f=new ops.OpAddStyle;f.init({memberid:h,styleName:c,styleFamily:"paragraph",isAutomaticStyle:!0,setProperties:d});e.push(f);f=new ops.OpSetParagraphStyle;f.init({memberid:h,styleName:c,position:a});e.push(f);return e};this.subscribe=function(a,b){Y.subscribe(a,b)};this.unsubscribe=function(a,b){Y.unsubscribe(a,b)};this.destroy=function(a){F.unsubscribe(ops.Document.signalCursorAdded,
e);F.unsubscribe(ops.Document.signalCursorRemoved,e);F.unsubscribe(ops.Document.signalCursorMoved,e);F.unsubscribe(ops.OdtDocument.signalParagraphStyleModified,q);F.unsubscribe(ops.OdtDocument.signalParagraphChanged,g);F.unsubscribe(ops.OdtDocument.signalOperationEnd,f);a()};(function(){F.subscribe(ops.Document.signalCursorAdded,e);F.subscribe(ops.Document.signalCursorRemoved,e);F.subscribe(ops.Document.signalCursorMoved,e);F.subscribe(ops.OdtDocument.signalParagraphStyleModified,q);F.subscribe(ops.OdtDocument.signalParagraphChanged,
g);F.subscribe(ops.OdtDocument.signalOperationEnd,f);n();k||(P.alignParagraphCenter=M,P.alignParagraphJustified=M,P.alignParagraphLeft=M,P.alignParagraphRight=M,P.createParagraphStyleOps=function(){return[]},P.indent=M,P.outdent=M)})()};gui.DirectFormattingController.textStylingChanged="textStyling/changed";gui.DirectFormattingController.paragraphStylingChanged="paragraphStyling/changed";(function(){return gui.DirectFormattingController})();
// Input 82
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.KeyboardHandler=function(){function l(b,k){k||(k=h.None);switch(b){case gui.KeyboardHandler.KeyCode.LeftMeta:case gui.KeyboardHandler.KeyCode.RightMeta:case gui.KeyboardHandler.KeyCode.MetaInMozilla:k|=h.Meta;break;case gui.KeyboardHandler.KeyCode.Ctrl:k|=h.Ctrl;break;case gui.KeyboardHandler.KeyCode.Alt:k|=h.Alt;break;case gui.KeyboardHandler.KeyCode.Shift:k|=h.Shift}return b+":"+k}var h=gui.KeyboardHandler.Modifier,b=null,k={};this.setDefault=function(d){b=d};this.bind=function(b,h,n,e){b=l(b,
h);runtime.assert(e||!1===k.hasOwnProperty(b),"tried to overwrite the callback handler of key combo: "+b);k[b]=n};this.unbind=function(b,h){var n=l(b,h);delete k[n]};this.reset=function(){b=null;k={}};this.handleEvent=function(d){var p=d.keyCode,n=h.None;d.metaKey&&(n|=h.Meta);d.ctrlKey&&(n|=h.Ctrl);d.altKey&&(n|=h.Alt);d.shiftKey&&(n|=h.Shift);p=l(p,n);p=k[p];n=!1;p?n=p():null!==b&&(n=b(d));n&&(d.preventDefault?d.preventDefault():d.returnValue=!1)}};
gui.KeyboardHandler.Modifier={None:0,Meta:1,Ctrl:2,Alt:4,CtrlAlt:6,Shift:8,MetaShift:9,CtrlShift:10,AltShift:12};gui.KeyboardHandler.KeyCode={Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Ctrl:17,Alt:18,End:35,Home:36,Left:37,Up:38,Right:39,Down:40,Delete:46,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,LeftMeta:91,RightMeta:93,MetaInMozilla:224};(function(){return gui.KeyboardHandler})();
// Input 83
gui.HyperlinkClickHandler=function(l,h,b){function k(){var a=l();runtime.assert(Boolean(a.classList),"Document container has no classList element");a.classList.remove("webodf-inactiveLinks")}function d(){var a=l();runtime.assert(Boolean(a.classList),"Document container has no classList element");a.classList.add("webodf-inactiveLinks")}function p(){a.removeEventListener("focus",d,!1);f.forEach(function(a){h.unbind(a.keyCode,a.modifier);b.unbind(a.keyCode,a.modifier)});f.length=0}function n(c){p();
if(c!==e.None){a.addEventListener("focus",d,!1);switch(c){case e.Ctrl:f.push({keyCode:q.Ctrl,modifier:e.None});break;case e.Meta:f.push({keyCode:q.LeftMeta,modifier:e.None}),f.push({keyCode:q.RightMeta,modifier:e.None}),f.push({keyCode:q.MetaInMozilla,modifier:e.None})}f.forEach(function(a){h.bind(a.keyCode,a.modifier,k);b.bind(a.keyCode,a.modifier,d)})}}var e=gui.KeyboardHandler.Modifier,q=gui.KeyboardHandler.KeyCode,g=xmldom.XPath,r=new odf.OdfUtils,a=runtime.getWindow(),c=e.None,f=[];runtime.assert(null!==
a,"Expected to be run in an environment which has a global window, like a browser.");this.handleClick=function(b){var d=b.target||b.srcElement,f,h;b.ctrlKey?f=e.Ctrl:b.metaKey&&(f=e.Meta);if(c===e.None||c===f){a:{for(;null!==d;){if(r.isHyperlink(d))break a;if(r.isParagraph(d))break;d=d.parentNode}d=null}d&&(d=r.getHyperlinkTarget(d),""!==d&&("#"===d[0]?(d=d.substring(1),f=l(),h=g.getODFElementsWithXPath(f,"//text:bookmark-start[@text:name='"+d+"']",odf.Namespaces.lookupNamespaceURI),0===h.length&&
(h=g.getODFElementsWithXPath(f,"//text:bookmark[@text:name='"+d+"']",odf.Namespaces.lookupNamespaceURI)),0<h.length&&h[0].scrollIntoView(!0)):a.open(d),b.preventDefault?b.preventDefault():b.returnValue=!1))}};this.setModifier=function(a){c!==a&&(runtime.assert(a===e.None||a===e.Ctrl||a===e.Meta,"Unsupported KeyboardHandler.Modifier value: "+a),c=a,c!==e.None?d():k(),n(c))};this.getModifier=function(){return c};this.destroy=function(a){d();p();a()}};
// Input 84
gui.HyperlinkController=function(l,h){var b=new odf.OdfUtils,k=l.getOdtDocument();this.addHyperlink=function(b,p){var n=k.getCursorSelection(h),e=new ops.OpApplyHyperlink,q=[];if(0===n.length||p)p=p||b,e=new ops.OpInsertText,e.init({memberid:h,position:n.position,text:p}),n.length=p.length,q.push(e);e=new ops.OpApplyHyperlink;e.init({memberid:h,position:n.position,length:n.length,hyperlink:b});q.push(e);l.enqueue(q)};this.removeHyperlinks=function(){var d=gui.SelectionMover.createPositionIterator(k.getRootNode()),
p=k.getCursor(h).getSelectedRange(),n=b.getHyperlinkElements(p),e=p.collapsed&&1===n.length,q=k.getDOMDocument().createRange(),g=[],r,a;0!==n.length&&(n.forEach(function(b){q.selectNodeContents(b);r=k.convertDomToCursorRange({anchorNode:q.startContainer,anchorOffset:q.startOffset,focusNode:q.endContainer,focusOffset:q.endOffset});a=new ops.OpRemoveHyperlink;a.init({memberid:h,position:r.position,length:r.length});g.push(a)}),e||(e=n[0],-1===p.comparePoint(e,0)&&(q.setStart(e,0),q.setEnd(p.startContainer,
p.startOffset),r=k.convertDomToCursorRange({anchorNode:q.startContainer,anchorOffset:q.startOffset,focusNode:q.endContainer,focusOffset:q.endOffset}),0<r.length&&(a=new ops.OpApplyHyperlink,a.init({memberid:h,position:r.position,length:r.length,hyperlink:b.getHyperlinkTarget(e)}),g.push(a))),n=n[n.length-1],d.moveToEndOfNode(n),d=d.unfilteredDomOffset(),1===p.comparePoint(n,d)&&(q.setStart(p.endContainer,p.endOffset),q.setEnd(n,d),r=k.convertDomToCursorRange({anchorNode:q.startContainer,anchorOffset:q.startOffset,
focusNode:q.endContainer,focusOffset:q.endOffset}),0<r.length&&(a=new ops.OpApplyHyperlink,a.init({memberid:h,position:r.position,length:r.length,hyperlink:b.getHyperlinkTarget(n)}),g.push(a)))),l.enqueue(g),q.detach())}};
// Input 85
gui.EventManager=function(l){function h(){var a=this,b=[];this.filters=[];this.handlers=[];this.handleEvent=function(c){-1===b.indexOf(c)&&(b.push(c),a.filters.every(function(a){return a(c)})&&a.handlers.forEach(function(a){a(c)}),runtime.setTimeout(function(){b.splice(b.indexOf(c),1)},0))}}function b(a,b,c){function d(b){c(b,e,function(b){b.type=a;f.emit("eventTriggered",b)})}var e={},f=new core.EventNotifier(["eventTriggered"]);this.subscribe=function(a){f.subscribe("eventTriggered",a)};this.unsubscribe=
function(a){f.unsubscribe("eventTriggered",a)};this.destroy=function(){b.forEach(function(a){A.unsubscribe(a,d)})};(function(){b.forEach(function(a){A.subscribe(a,d)})})()}function k(a){runtime.clearTimeout(a);delete I[a]}function d(a,b){var c=runtime.setTimeout(function(){a();k(c)},b);I[c]=!0;return c}function p(a,b,c){var e=a.touches.length,f=a.touches[0],g=b.timer;"touchmove"===a.type||"touchend"===a.type?g&&k(g):"touchstart"===a.type&&(1!==e?runtime.clearTimeout(g):g=d(function(){c({clientX:f.clientX,
clientY:f.clientY,pageX:f.pageX,pageY:f.pageY,target:a.target||a.srcElement||null,detail:1})},400));b.timer=g}function n(a,b,c){var d=a.touches[0],e=a.target||a.srcElement||null,f=b.target;1!==a.touches.length||"touchend"===a.type?f=null:"touchstart"===a.type&&"webodf-draggable"===e.getAttribute("class")?f=e:"touchmove"===a.type&&f&&(a.preventDefault(),a.stopPropagation(),c({clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,target:f,detail:1}));b.target=f}function e(a,b,c){var d=a.target||
a.srcElement||null,e=b.dragging;"drag"===a.type?e=!0:"touchend"===a.type&&e&&(e=!1,a=a.changedTouches[0],c({clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,target:d,detail:1}));b.dragging=e}function q(){s.classList.add("webodf-touchEnabled");A.unsubscribe("touchstart",q)}function g(a){var b=a.scrollX,c=a.scrollY;this.restore=function(){a.scrollX===b&&a.scrollY===c||a.scrollTo(b,c)}}function r(a){var b=a.scrollTop,c=a.scrollLeft;this.restore=function(){if(a.scrollTop!==b||a.scrollLeft!==
c)a.scrollTop=b,a.scrollLeft=c}}function a(a,b,c){var d,e=!1;x.hasOwnProperty(b)?x[b].subscribe(c):(d="on"+b,a.attachEvent&&(a.attachEvent(d,c),e=!0),!e&&a.addEventListener&&(a.addEventListener(b,c,!1),e=!0),e&&!w[b]||!a.hasOwnProperty(d)||(a[d]=c))}function c(b,c){var d=u[b]||null;!d&&c&&(d=u[b]=new h,z[b]&&a(v,b,d.handleEvent),a(t,b,d.handleEvent),a(s,b,d.handleEvent));return d}function f(){return l.getDOMDocument().activeElement===t}function m(a){for(var b=[];a;)(a.scrollWidth>a.clientWidth||a.scrollHeight>
a.clientHeight)&&b.push(new r(a)),a=a.parentNode;b.push(new g(v));return b}var v=runtime.getWindow(),w={beforecut:!0,beforepaste:!0,longpress:!0,drag:!0,dragstop:!0},z={mousedown:!0,mouseup:!0,focus:!0},x={},u={},t,s=l.getCanvas().getElement(),A=this,I={};this.addFilter=function(a,b){c(a,!0).filters.push(b)};this.removeFilter=function(a,b){var d=c(a,!0),e=d.filters.indexOf(b);-1!==e&&d.filters.splice(e,1)};this.subscribe=function(a,b){c(a,!0).handlers.push(b)};this.unsubscribe=function(a,b){var d=
c(a,!1),e=d&&d.handlers.indexOf(b);d&&-1!==e&&d.handlers.splice(e,1)};this.hasFocus=f;this.focus=function(){var a;f()||(a=m(t),t.focus(),a.forEach(function(a){a.restore()}))};this.getEventTrap=function(){return t};this.blur=function(){f()&&t.blur()};this.destroy=function(a){Object.keys(I).forEach(function(a){k(parseInt(a,10))});I.length=0;Object.keys(x).forEach(function(a){x[a].destroy()});x={};A.unsubscribe("touchstart",q);t.parentNode.removeChild(t);a()};(function(){var a=l.getOdfCanvas().getSizer(),
c=a.ownerDocument;runtime.assert(Boolean(v),"EventManager requires a window object to operate correctly");t=c.createElement("input");t.id="eventTrap";t.setAttribute("tabindex",-1);a.appendChild(t);x.longpress=new b("longpress",["touchstart","touchmove","touchend"],p);x.drag=new b("drag",["touchstart","touchmove","touchend"],n);x.dragstop=new b("dragstop",["drag","touchend"],e);A.subscribe("touchstart",q)})()};
// Input 86
/*

 Copyright (C) 2014 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.IOSSafariSupport=function(l){function h(){b.innerHeight!==b.outerHeight&&(k.style.display="none",runtime.requestAnimationFrame(function(){k.style.display="block"}))}var b=runtime.getWindow(),k=l.getEventTrap();this.destroy=function(b){l.unsubscribe("focus",h);k.removeAttribute("autocapitalize");k.style.WebkitTransform="";b()};l.subscribe("focus",h);k.setAttribute("autocapitalize","off");k.style.WebkitTransform="translateX(-10000px)"};
// Input 87
gui.ImageController=function(l,h,b){var k={"image/gif":".gif","image/jpeg":".jpg","image/png":".png"},d=odf.Namespaces.textns,p=l.getOdtDocument(),n=p.getFormatting(),e={};this.insertImage=function(q,g,r,a){var c;runtime.assert(0<r&&0<a,"Both width and height of the image should be greater than 0px.");c=p.getParagraphElement(p.getCursor(h).getNode()).getAttributeNS(d,"style-name");e.hasOwnProperty(c)||(e[c]=n.getContentSize(c,"paragraph"));c=e[c];r*=0.0264583333333334;a*=0.0264583333333334;var f=
1,m=1;r>c.width&&(f=c.width/r);a>c.height&&(m=c.height/a);f=Math.min(f,m);c=r*f;r=a*f;m=p.getOdfCanvas().odfContainer().rootElement.styles;a=q.toLowerCase();var f=k.hasOwnProperty(a)?k[a]:null,v;a=[];runtime.assert(null!==f,"Image type is not supported: "+q);f="Pictures/"+b.generateImageName()+f;v=new ops.OpSetBlob;v.init({memberid:h,filename:f,mimetype:q,content:g});a.push(v);n.getStyleElement("Graphics","graphic",[m])||(q=new ops.OpAddStyle,q.init({memberid:h,styleName:"Graphics",styleFamily:"graphic",
isAutomaticStyle:!1,setProperties:{"style:graphic-properties":{"text:anchor-type":"paragraph","svg:x":"0cm","svg:y":"0cm","style:wrap":"dynamic","style:number-wrapped-paragraphs":"no-limit","style:wrap-contour":"false","style:vertical-pos":"top","style:vertical-rel":"paragraph","style:horizontal-pos":"center","style:horizontal-rel":"paragraph"}}}),a.push(q));q=b.generateStyleName();g=new ops.OpAddStyle;g.init({memberid:h,styleName:q,styleFamily:"graphic",isAutomaticStyle:!0,setProperties:{"style:parent-style-name":"Graphics",
"style:graphic-properties":{"style:vertical-pos":"top","style:vertical-rel":"baseline","style:horizontal-pos":"center","style:horizontal-rel":"paragraph","fo:background-color":"transparent","style:background-transparency":"100%","style:shadow":"none","style:mirror":"none","fo:clip":"rect(0cm, 0cm, 0cm, 0cm)","draw:luminance":"0%","draw:contrast":"0%","draw:red":"0%","draw:green":"0%","draw:blue":"0%","draw:gamma":"100%","draw:color-inversion":"false","draw:image-opacity":"100%","draw:color-mode":"standard"}}});
a.push(g);v=new ops.OpInsertImage;v.init({memberid:h,position:p.getCursorPosition(h),filename:f,frameWidth:c+"cm",frameHeight:r+"cm",frameStyleName:q,frameName:b.generateFrameName()});a.push(v);l.enqueue(a)}};
// Input 88
gui.ImageSelector=function(l){function h(){var b=l.getSizer(),e=d.createElement("div");e.id="imageSelector";e.style.borderWidth="1px";b.appendChild(e);k.forEach(function(b){var g=d.createElement("div");g.className=b;e.appendChild(g)});return e}var b=odf.Namespaces.svgns,k="topLeft topRight bottomRight bottomLeft topMiddle rightMiddle bottomMiddle leftMiddle".split(" "),d=l.getElement().ownerDocument,p=!1;this.select=function(k){var e,q,g=d.getElementById("imageSelector");g||(g=h());p=!0;e=g.parentNode;
q=k.getBoundingClientRect();var r=e.getBoundingClientRect(),a=l.getZoomLevel();e=(q.left-r.left)/a-1;q=(q.top-r.top)/a-1;g.style.display="block";g.style.left=e+"px";g.style.top=q+"px";g.style.width=k.getAttributeNS(b,"width");g.style.height=k.getAttributeNS(b,"height")};this.clearSelection=function(){var b;p&&(b=d.getElementById("imageSelector"))&&(b.style.display="none");p=!1};this.isSelectorElement=function(b){var e=d.getElementById("imageSelector");return e?b===e||b.parentNode===e:!1}};
// Input 89
(function(){function l(h){function b(b){n=b.which&&String.fromCharCode(b.which)===l;l=void 0;return!1===n}function k(){n=!1}function d(b){l=b.data;n=!1}var l,n=!1;this.destroy=function(e){h.unsubscribe("textInput",k);h.unsubscribe("compositionend",d);h.removeFilter("keypress",b);e()};h.subscribe("textInput",k);h.subscribe("compositionend",d);h.addFilter("keypress",b)}gui.InputMethodEditor=function(h,b){function k(a){f&&(a?f.getNode().setAttributeNS(c,"composing","true"):(f.getNode().removeAttributeNS(c,
"composing"),w.textContent=""))}function d(){u&&(u=!1,k(!1),s.emit(gui.InputMethodEditor.signalCompositionEnd,{data:t}),t="")}function p(){d();f&&f.getSelectedRange().collapsed?m.value="":m.value=z;m.setSelectionRange(0,m.value.length)}function n(){A=void 0;x.cancel();k(!0);u||s.emit(gui.InputMethodEditor.signalCompositionStart,{data:""})}function e(a){a=A=a.data;u=!0;t+=a;x.trigger()}function q(a){a.data!==A&&(a=a.data,u=!0,t+=a,x.trigger());A=void 0}function g(){w.textContent=m.value}function r(){b.blur();
m.setAttribute("disabled",!0)}function a(){var a=b.hasFocus();a&&b.blur();P?m.removeAttribute("disabled"):m.setAttribute("disabled",!0);a&&b.focus()}var c="urn:webodf:names:cursor",f=null,m=b.getEventTrap(),v=m.ownerDocument,w,z="b",x,u=!1,t="",s=new core.EventNotifier([gui.InputMethodEditor.signalCompositionStart,gui.InputMethodEditor.signalCompositionEnd]),A,I=[],M,P=!1;this.subscribe=s.subscribe;this.unsubscribe=s.unsubscribe;this.registerCursor=function(a){a.getMemberId()===h&&(f=a,f.getNode().appendChild(w),
b.subscribe("input",g),b.subscribe("compositionupdate",g))};this.removeCursor=function(a){f&&a===h&&(f.getNode().removeChild(w),b.unsubscribe("input",g),b.unsubscribe("compositionupdate",g),f=null)};this.setEditing=function(b){P=b;a()};this.destroy=function(c){b.unsubscribe("compositionstart",n);b.unsubscribe("compositionend",e);b.unsubscribe("textInput",q);b.unsubscribe("keypress",d);b.unsubscribe("mousedown",r);b.unsubscribe("mouseup",a);b.unsubscribe("focus",p);core.Async.destroyAll(M,c)};(function(){b.subscribe("compositionstart",
n);b.subscribe("compositionend",e);b.subscribe("textInput",q);b.subscribe("keypress",d);b.subscribe("mousedown",r);b.subscribe("mouseup",a);b.subscribe("focus",p);I.push(new l(b));M=I.map(function(a){return a.destroy});w=v.createElement("span");w.setAttribute("id","composer");x=new core.ScheduledTask(p,1);M.push(x.destroy)})()};gui.InputMethodEditor.signalCompositionStart="input/compositionstart";gui.InputMethodEditor.signalCompositionEnd="input/compositionend";return gui.InputMethodEditor})();
// Input 90
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.PlainTextPasteboard=function(l,h){function b(b,d){b.init(d);return b}this.createPasteOps=function(k){var d=l.getCursorPosition(h),p=d,n=[];k.replace(/\r/g,"").split("\n").forEach(function(d){n.push(b(new ops.OpSplitParagraph,{memberid:h,position:p,moveCursor:!0}));p+=1;n.push(b(new ops.OpInsertText,{memberid:h,position:p,text:d,moveCursor:!0}));p+=d.length});n.push(b(new ops.OpRemoveText,{memberid:h,position:d,length:1}));return n}};
// Input 91
/*

 Copyright (C) 2014 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
odf.WordBoundaryFilter=function(l,h){function b(a,b,c){for(var d=null,e=l.getRootNode(),f;a!==e&&null!==a&&null===d;)f=0>b?a.previousSibling:a.nextSibling,c(f)===NodeFilter.FILTER_ACCEPT&&(d=f),a=a.parentNode;return d}function k(a,b){var c;return null===a?f.NO_NEIGHBOUR:n.isCharacterElement(a)?f.SPACE_CHAR:a.nodeType===d||n.isTextSpan(a)||n.isHyperlink(a)?(c=a.textContent.charAt(b()),q.test(c)?f.SPACE_CHAR:e.test(c)?f.PUNCTUATION_CHAR:f.WORD_CHAR):f.OTHER}var d=Node.TEXT_NODE,p=Node.ELEMENT_NODE,
n=new odf.OdfUtils,e=/[!-#%-*,-\/:-;?-@\[-\]_{}\u00a1\u00ab\u00b7\u00bb\u00bf;\u00b7\u055a-\u055f\u0589-\u058a\u05be\u05c0\u05c3\u05c6\u05f3-\u05f4\u0609-\u060a\u060c-\u060d\u061b\u061e-\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0964-\u0965\u0970\u0df4\u0e4f\u0e5a-\u0e5b\u0f04-\u0f12\u0f3a-\u0f3d\u0f85\u0fd0-\u0fd4\u104a-\u104f\u10fb\u1361-\u1368\u166d-\u166e\u169b-\u169c\u16eb-\u16ed\u1735-\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u180a\u1944-\u1945\u19de-\u19df\u1a1e-\u1a1f\u1b5a-\u1b60\u1c3b-\u1c3f\u1c7e-\u1c7f\u2000-\u206e\u207d-\u207e\u208d-\u208e\u3008-\u3009\u2768-\u2775\u27c5-\u27c6\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc-\u29fd\u2cf9-\u2cfc\u2cfe-\u2cff\u2e00-\u2e7e\u3000-\u303f\u30a0\u30fb\ua60d-\ua60f\ua673\ua67e\ua874-\ua877\ua8ce-\ua8cf\ua92e-\ua92f\ua95f\uaa5c-\uaa5f\ufd3e-\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe61\ufe63\ufe68\ufe6a-\ufe6b\uff01-\uff03\uff05-\uff0a\uff0c-\uff0f\uff1a-\uff1b\uff1f-\uff20\uff3b-\uff3d\uff3f\uff5b\uff5d\uff5f-\uff65]|\ud800[\udd00-\udd01\udf9f\udfd0]|\ud802[\udd1f\udd3f\ude50-\ude58]|\ud809[\udc00-\udc7e]/,
q=/\s/,g=core.PositionFilter.FilterResult.FILTER_ACCEPT,r=core.PositionFilter.FilterResult.FILTER_REJECT,a=odf.WordBoundaryFilter.IncludeWhitespace.TRAILING,c=odf.WordBoundaryFilter.IncludeWhitespace.LEADING,f={NO_NEIGHBOUR:0,SPACE_CHAR:1,PUNCTUATION_CHAR:2,WORD_CHAR:3,OTHER:4};this.acceptPosition=function(d){var e=d.container(),l=d.leftNode(),n=d.rightNode(),q=d.unfilteredDomOffset,u=function(){return d.unfilteredDomOffset()-1};e.nodeType===p&&(null===n&&(n=b(e,1,d.getNodeFilter())),null===l&&(l=
b(e,-1,d.getNodeFilter())));e!==n&&(q=function(){return 0});e!==l&&null!==l&&(u=function(){return l.textContent.length-1});e=k(l,u);n=k(n,q);return e===f.WORD_CHAR&&n===f.WORD_CHAR||e===f.PUNCTUATION_CHAR&&n===f.PUNCTUATION_CHAR||h===a&&e!==f.NO_NEIGHBOUR&&n===f.SPACE_CHAR||h===c&&e===f.SPACE_CHAR&&n!==f.NO_NEIGHBOUR?r:g}};odf.WordBoundaryFilter.IncludeWhitespace={None:0,TRAILING:1,LEADING:2};(function(){return odf.WordBoundaryFilter})();
// Input 92
gui.SelectionController=function(l,h){function b(){var a=x.getCursor(h).getNode();return x.createStepIterator(a,0,[s,I],x.getRootElement(a))}function k(a,b,c){c=new odf.WordBoundaryFilter(x,c);return x.createStepIterator(a,b,[s,I,c],x.getRootElement(a))}function d(a){return function(b){var c=a(b);return function(b,d){return a(d)===c}}}function p(a,b){return b?{anchorNode:a.startContainer,anchorOffset:a.startOffset,focusNode:a.endContainer,focusOffset:a.endOffset}:{anchorNode:a.endContainer,anchorOffset:a.endOffset,
focusNode:a.startContainer,focusOffset:a.startOffset}}function n(a,b,c){var d=new ops.OpMoveCursor;d.init({memberid:h,position:a,length:b||0,selectionType:c});return d}function e(a){var b;b=k(a.startContainer,a.startOffset,M);b.roundToPreviousStep()&&a.setStart(b.container(),b.offset());b=k(a.endContainer,a.endOffset,P);b.roundToNextStep()&&a.setEnd(b.container(),b.offset())}function q(a){var b=t.getParagraphElements(a),c=b[0],b=b[b.length-1];c&&a.setStart(c,0);b&&(t.isParagraph(a.endContainer)&&
0===a.endOffset?a.setEndBefore(b):a.setEnd(b,b.childNodes.length))}function g(a){var b=x.getCursorSelection(h),c=x.getCursor(h).getStepCounter();0!==a&&(a=0<a?c.convertForwardStepsBetweenFilters(a,A,s):-c.convertBackwardStepsBetweenFilters(-a,A,s),a=b.length+a,l.enqueue([n(b.position,a)]))}function r(a){var c=b(),d=x.getCursor(h).getAnchorNode();a(c)&&(a=x.convertDomToCursorRange({anchorNode:d,anchorOffset:0,focusNode:c.container(),focusOffset:c.offset()}),l.enqueue([n(a.position,a.length)]))}function a(a){var b=
x.getCursorPosition(h),c=x.getCursor(h).getStepCounter();0!==a&&(a=0<a?c.convertForwardStepsBetweenFilters(a,A,s):-c.convertBackwardStepsBetweenFilters(-a,A,s),l.enqueue([n(b+a,0)]))}function c(a){var c=b();a(c)&&(a=x.convertDomPointToCursorStep(c.container(),c.offset()),l.enqueue([n(a,0)]))}function f(b,c){var d=x.getParagraphElement(x.getCursor(h).getNode());runtime.assert(Boolean(d),"SelectionController: Cursor outside paragraph");d=x.getCursor(h).getStepCounter().countLinesSteps(b,A);c?g(d):a(d)}
function m(b,c){var d=x.getCursor(h).getStepCounter().countStepsToLineBoundary(b,A);c?g(d):a(d)}function v(a,b){var c=x.getCursor(h),c=p(c.getSelectedRange(),c.hasForwardSelection()),d=k(c.focusNode,c.focusOffset,M);if(0<=a?d.nextStep():d.previousStep())c.focusNode=d.container(),c.focusOffset=d.offset(),b||(c.anchorNode=c.focusNode,c.anchorOffset=c.focusOffset),c=x.convertDomToCursorRange(c),l.enqueue([n(c.position,c.length)])}function w(a,b){var c=x.getCursor(h),e=b(c.getNode()),c=p(c.getSelectedRange(),
c.hasForwardSelection());runtime.assert(Boolean(e),"SelectionController: Cursor outside root");0>a?(c.focusNode=e,c.focusOffset=0):(c.focusNode=e,c.focusOffset=e.childNodes.length);e=x.convertDomToCursorRange(c,d(b));l.enqueue([n(e.position,e.length)])}function z(a){var b=x.getCursor(h),b=x.getRootElement(b.getNode());runtime.assert(Boolean(b),"SelectionController: Cursor outside root");a=0>a?x.convertDomPointToCursorStep(b,0,function(a){return a===ops.StepsTranslator.NEXT_STEP}):x.convertDomPointToCursorStep(b,
b.childNodes.length);l.enqueue([n(a,0)]);return!0}var x=l.getOdtDocument(),u=new core.DomUtils,t=new odf.OdfUtils,s=x.getPositionFilter(),A=new core.PositionFilterChain,I=x.createRootFilter(h),M=odf.WordBoundaryFilter.IncludeWhitespace.TRAILING,P=odf.WordBoundaryFilter.IncludeWhitespace.LEADING;this.selectionToRange=function(a){var b=0<=u.comparePoints(a.anchorNode,a.anchorOffset,a.focusNode,a.focusOffset),c=a.focusNode.ownerDocument.createRange();b?(c.setStart(a.anchorNode,a.anchorOffset),c.setEnd(a.focusNode,
a.focusOffset)):(c.setStart(a.focusNode,a.focusOffset),c.setEnd(a.anchorNode,a.anchorOffset));return{range:c,hasForwardSelection:b}};this.rangeToSelection=p;this.selectImage=function(a){var b=x.getRootElement(a),c=x.createRootFilter(b),b=x.createStepIterator(a,0,[c,x.getPositionFilter()],b),d;b.roundToPreviousStep()||runtime.assert(!1,"No walkable position before frame");c=b.container();d=b.offset();b.setPosition(a,a.childNodes.length);b.roundToNextStep()||runtime.assert(!1,"No walkable position after frame");
a=x.convertDomToCursorRange({anchorNode:c,anchorOffset:d,focusNode:b.container(),focusOffset:b.offset()});a=n(a.position,a.length,ops.OdtCursor.RegionSelection);l.enqueue([a])};this.expandToWordBoundaries=e;this.expandToParagraphBoundaries=q;this.selectRange=function(a,b,c){var f=x.getOdfCanvas().getElement(),g;g=u.containsNode(f,a.startContainer);f=u.containsNode(f,a.endContainer);if(g||f)if(g&&f&&(2===c?e(a):3<=c&&q(a)),a=p(a,b),b=x.convertDomToCursorRange(a,d(t.getParagraphElement)),a=x.getCursorSelection(h),
b.position!==a.position||b.length!==a.length)a=n(b.position,b.length,ops.OdtCursor.RangeSelection),l.enqueue([a])};this.moveCursorToLeft=function(){c(function(a){return a.previousStep()});return!0};this.moveCursorToRight=function(){c(function(a){return a.nextStep()});return!0};this.extendSelectionToLeft=function(){r(function(a){return a.previousStep()});return!0};this.extendSelectionToRight=function(){r(function(a){return a.nextStep()});return!0};this.moveCursorUp=function(){f(-1,!1);return!0};this.moveCursorDown=
function(){f(1,!1);return!0};this.extendSelectionUp=function(){f(-1,!0);return!0};this.extendSelectionDown=function(){f(1,!0);return!0};this.moveCursorBeforeWord=function(){v(-1,!1);return!0};this.moveCursorPastWord=function(){v(1,!1);return!0};this.extendSelectionBeforeWord=function(){v(-1,!0);return!0};this.extendSelectionPastWord=function(){v(1,!0);return!0};this.moveCursorToLineStart=function(){m(-1,!1);return!0};this.moveCursorToLineEnd=function(){m(1,!1);return!0};this.extendSelectionToLineStart=
function(){m(-1,!0);return!0};this.extendSelectionToLineEnd=function(){m(1,!0);return!0};this.extendSelectionToParagraphStart=function(){w(-1,x.getParagraphElement);return!0};this.extendSelectionToParagraphEnd=function(){w(1,x.getParagraphElement);return!0};this.moveCursorToDocumentStart=function(){z(-1);return!0};this.moveCursorToDocumentEnd=function(){z(1);return!0};this.extendSelectionToDocumentStart=function(){w(-1,x.getRootElement);return!0};this.extendSelectionToDocumentEnd=function(){w(1,x.getRootElement);
return!0};this.extendSelectionToEntireDocument=function(){var a=x.getCursor(h),a=x.getRootElement(a.getNode());runtime.assert(Boolean(a),"SelectionController: Cursor outside root");a=x.convertDomToCursorRange({anchorNode:a,anchorOffset:0,focusNode:a,focusOffset:a.childNodes.length},d(x.getRootElement));l.enqueue([n(a.position,a.length)]);return!0};A.addFilter(s);A.addFilter(x.createRootFilter(h))};
// Input 93
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.TextController=function(l,h,b,k){function d(b){var d=new ops.OpRemoveText;d.init({memberid:h,position:b.position,length:b.length});return d}function p(b){0>b.length&&(b.position+=b.length,b.length=-b.length);return b}function n(b){var g;g=p(e.getCursorSelection(h));var k,a=null;if(0===g.length){g=e.getCursor(h).getNode();k=e.getRootElement(g);var c=[e.getPositionFilter(),e.createRootFilter(k)];k=e.createStepIterator(g,0,c,k);k.roundToClosestStep()&&(b?k.nextStep():k.previousStep())&&(g=p(e.convertDomToCursorRange({anchorNode:g,
anchorOffset:0,focusNode:k.container(),focusOffset:k.offset()})),a=new ops.OpRemoveText,a.init({memberid:h,position:g.position,length:g.length}),l.enqueue([a]))}else a=d(g),l.enqueue([a]);return null!==a}var e=l.getOdtDocument();this.enqueueParagraphSplittingOps=function(){var b=p(e.getCursorSelection(h)),g,n=[];0<b.length&&(g=d(b),n.push(g));g=new ops.OpSplitParagraph;g.init({memberid:h,position:b.position,moveCursor:!0});n.push(g);k&&(b=k(b.position+1),n=n.concat(b));l.enqueue(n);return!0};this.removeTextByBackspaceKey=
function(){return n(!1)};this.removeTextByDeleteKey=function(){return n(!0)};this.removeCurrentSelection=function(){var b=p(e.getCursorSelection(h));0!==b.length&&(b=d(b),l.enqueue([b]));return!0};this.insertText=function(k){var g=p(e.getCursorSelection(h)),n,a=[],c=!1;0<g.length&&(n=d(g),a.push(n),c=!0);n=new ops.OpInsertText;n.init({memberid:h,position:g.position,text:k,moveCursor:!0});a.push(n);b&&(k=b(g.position,k.length,c))&&a.push(k);l.enqueue(a)}};(function(){return gui.TextController})();
// Input 94
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.UndoManager=function(){};gui.UndoManager.prototype.subscribe=function(l,h){};gui.UndoManager.prototype.unsubscribe=function(l,h){};gui.UndoManager.prototype.setDocument=function(l){};gui.UndoManager.prototype.setInitialState=function(){};gui.UndoManager.prototype.initialize=function(){};gui.UndoManager.prototype.purgeInitialState=function(){};gui.UndoManager.prototype.setPlaybackFunction=function(l){};gui.UndoManager.prototype.hasUndoStates=function(){};
gui.UndoManager.prototype.hasRedoStates=function(){};gui.UndoManager.prototype.moveForward=function(l){};gui.UndoManager.prototype.moveBackward=function(l){};gui.UndoManager.prototype.onOperationExecuted=function(l){};gui.UndoManager.signalUndoStackChanged="undoStackChanged";gui.UndoManager.signalUndoStateCreated="undoStateCreated";gui.UndoManager.signalUndoStateModified="undoStateModified";(function(){return gui.UndoManager})();
// Input 95
(function(){var l=core.PositionFilter.FilterResult.FILTER_ACCEPT;gui.SessionController=function(h,b,k,d){function p(a){return a.target||a.srcElement||null}function n(a,b){var c=J.getDOMDocument(),d=null;c.caretRangeFromPoint?(c=c.caretRangeFromPoint(a,b),d={container:c.startContainer,offset:c.startOffset}):c.caretPositionFromPoint&&(c=c.caretPositionFromPoint(a,b))&&c.offsetNode&&(d={container:c.offsetNode,offset:c.offset});return d}function e(a){var c=J.getCursor(b).getSelectedRange();c.collapsed?
a.preventDefault():L.setDataFromRange(a,c)?T.removeCurrentSelection():runtime.log("Cut operation failed")}function q(){return!1!==J.getCursor(b).getSelectedRange().collapsed}function g(a){var c=J.getCursor(b).getSelectedRange();c.collapsed?a.preventDefault():L.setDataFromRange(a,c)||runtime.log("Copy operation failed")}function r(a){var b;E.clipboardData&&E.clipboardData.getData?b=E.clipboardData.getData("Text"):a.clipboardData&&a.clipboardData.getData&&(b=a.clipboardData.getData("text/plain"));b&&
(T.removeCurrentSelection(),h.enqueue(ma.createPasteOps(b)));a.preventDefault?a.preventDefault():a.returnValue=!1}function a(){return!1}function c(a){if(ca)ca.onOperationExecuted(a)}function f(a){J.emit(ops.OdtDocument.signalUndoStackChanged,a)}function m(){var a=G.getEventTrap(),b,c;return ca?(c=G.hasFocus(),ca.moveBackward(1),b=J.getOdfCanvas().getSizer(),H.containsNode(b,a)||(b.appendChild(a),c&&G.focus()),!0):!1}function v(){var a;return ca?(a=G.hasFocus(),ca.moveForward(1),a&&G.focus(),!0):!1}
function w(a){var c=J.getCursor(b).getSelectedRange(),d=p(a).getAttribute("end");c&&d&&(a=n(a.clientX,a.clientY))&&(da.setUnfilteredPosition(a.container,a.offset),ea.acceptPosition(da)===l&&(c=c.cloneRange(),"left"===d?c.setStart(da.container(),da.unfilteredDomOffset()):c.setEnd(da.container(),da.unfilteredDomOffset()),k.setSelectedRange(c,"right"===d),J.emit(ops.Document.signalCursorMoved,k)))}function z(){K.selectRange(k.getSelectedRange(),k.hasForwardSelection(),1)}function x(){var a=E.getSelection(),
b=0<a.rangeCount&&K.selectionToRange(a);X&&b&&(U=!0,fa.clearSelection(),da.setUnfilteredPosition(a.focusNode,a.focusOffset),ea.acceptPosition(da)===l&&(2===ka?K.expandToWordBoundaries(b.range):3<=ka&&K.expandToParagraphBoundaries(b.range),k.setSelectedRange(b.range,b.hasForwardSelection),J.emit(ops.Document.signalCursorMoved,k)))}function u(a){var c=p(a),d=J.getCursor(b);if(X=null!==c&&H.containsNode(J.getOdfCanvas().getElement(),c))U=!1,ea=J.createRootFilter(c),ka=a.detail,d&&a.shiftKey?E.getSelection().collapse(d.getAnchorNode(),
0):(a=E.getSelection(),c=d.getSelectedRange(),a.extend?d.hasForwardSelection()?(a.collapse(c.startContainer,c.startOffset),a.extend(c.endContainer,c.endOffset)):(a.collapse(c.endContainer,c.endOffset),a.extend(c.startContainer,c.startOffset)):(a.removeAllRanges(),a.addRange(c.cloneRange()))),1<ka&&x()}function t(a){var b=J.getRootElement(a),c=J.createRootFilter(b),b=J.createStepIterator(a,0,[c,J.getPositionFilter()],b);b.setPosition(a,a.childNodes.length);return b.roundToNextStep()?{container:b.container(),
offset:b.offset()}:null}function s(a){var b;b=(b=E.getSelection())?{anchorNode:b.anchorNode,anchorOffset:b.anchorOffset,focusNode:b.focusNode,focusOffset:b.focusOffset}:null;var c,d;b.anchorNode||b.focusNode||!(c=n(a.clientX,a.clientY))||(b.anchorNode=c.container,b.anchorOffset=c.offset,b.focusNode=b.anchorNode,b.focusOffset=b.anchorOffset);if(Z.isImage(b.focusNode)&&0===b.focusOffset&&Z.isCharacterFrame(b.focusNode.parentNode)){if(d=b.focusNode.parentNode,c=d.getBoundingClientRect(),a.clientX>c.right&&
(c=t(d)))b.anchorNode=b.focusNode=c.container,b.anchorOffset=b.focusOffset=c.offset}else Z.isImage(b.focusNode.firstChild)&&1===b.focusOffset&&Z.isCharacterFrame(b.focusNode)&&(c=t(b.focusNode))&&(b.anchorNode=b.focusNode=c.container,b.anchorOffset=b.focusOffset=c.offset);b.anchorNode&&b.focusNode&&(b=K.selectionToRange(b),K.selectRange(b.range,b.hasForwardSelection,a.detail));G.focus()}function A(a){var b;if(b=n(a.clientX,a.clientY))a=b.container,b=b.offset,a={anchorNode:a,anchorOffset:b,focusNode:a,
focusOffset:b},a=K.selectionToRange(a),K.selectRange(a.range,a.hasForwardSelection,2),G.focus()}function I(a){var b=p(a),c,d;ha.processRequests();Z.isImage(b)&&Z.isCharacterFrame(b.parentNode)&&E.getSelection().isCollapsed?(K.selectImage(b.parentNode),G.focus()):fa.isSelectorElement(b)?G.focus():X&&(U?(b=k.getSelectedRange(),c=b.collapsed,Z.isImage(b.endContainer)&&0===b.endOffset&&Z.isCharacterFrame(b.endContainer.parentNode)&&(d=b.endContainer.parentNode,d=t(d))&&(b.setEnd(d.container,d.offset),
c&&b.collapse(!1)),K.selectRange(b,k.hasForwardSelection(),a.detail),G.focus()):pa?s(a):la=runtime.setTimeout(function(){s(a)},0));ka=0;U=X=!1}function M(a){var c=J.getCursor(b).getSelectedRange();c.collapsed||S.exportRangeToDataTransfer(a.dataTransfer,c)}function P(){X&&G.focus();ka=0;U=X=!1}function F(a){I(a)}function V(a){var b=p(a),c=null;"annotationRemoveButton"===b.className?(c=H.getElementsByTagNameNS(b.parentNode,odf.Namespaces.officens,"annotation")[0],N.removeAnnotation(c),G.focus()):"webodf-draggable"!==
b.getAttribute("class")&&I(a)}function R(a){(a=a.data)&&T.insertText(a)}function Y(a){return function(){a();return!0}}function B(a){return function(c){return J.getCursor(b).getSelectionType()===ops.OdtCursor.RangeSelection?a(c):!0}}function ba(a){G.unsubscribe("keydown",y.handleEvent);G.unsubscribe("keypress",$.handleEvent);G.unsubscribe("keyup",O.handleEvent);G.unsubscribe("copy",g);G.unsubscribe("mousedown",u);G.unsubscribe("mousemove",ha.trigger);G.unsubscribe("mouseup",V);G.unsubscribe("contextmenu",
F);G.unsubscribe("dragstart",M);G.unsubscribe("dragend",P);G.unsubscribe("click",aa.handleClick);G.unsubscribe("longpress",A);G.unsubscribe("drag",w);G.unsubscribe("dragstop",z);J.unsubscribe(ops.OdtDocument.signalOperationEnd,ja.trigger);J.unsubscribe(ops.Document.signalCursorAdded,ga.registerCursor);J.unsubscribe(ops.Document.signalCursorRemoved,ga.removeCursor);J.unsubscribe(ops.OdtDocument.signalOperationEnd,c);a()}var E=runtime.getWindow(),J=h.getOdtDocument(),H=new core.DomUtils,Z=new odf.OdfUtils,
S=new gui.MimeDataExporter,L=new gui.Clipboard(S),y=new gui.KeyboardHandler,$=new gui.KeyboardHandler,O=new gui.KeyboardHandler,X=!1,W=new odf.ObjectNameGenerator(J.getOdfCanvas().odfContainer(),b),U=!1,ea=null,la,ca=null,G=new gui.EventManager(J),N=new gui.AnnotationController(h,b),Q=new gui.DirectFormattingController(h,b,W,d.directParagraphStylingEnabled),T=new gui.TextController(h,b,Q.createCursorStyleOp,Q.createParagraphStyleOps),ia=new gui.ImageController(h,b,W),fa=new gui.ImageSelector(J.getOdfCanvas()),
da=gui.SelectionMover.createPositionIterator(J.getRootNode()),ha,ja,ma=new gui.PlainTextPasteboard(J,b),ga=new gui.InputMethodEditor(b,G),ka=0,aa=new gui.HyperlinkClickHandler(J.getOdfCanvas().getElement,y,O),qa=new gui.HyperlinkController(h,b),K=new gui.SelectionController(h,b),C=gui.KeyboardHandler.Modifier,D=gui.KeyboardHandler.KeyCode,na=-1!==E.navigator.appVersion.toLowerCase().indexOf("mac"),pa=-1!==["iPad","iPod","iPhone"].indexOf(E.navigator.platform),oa;runtime.assert(null!==E,"Expected to be run in an environment which has a global window, like a browser.");
this.undo=m;this.redo=v;this.insertLocalCursor=function(){runtime.assert(void 0===h.getOdtDocument().getCursor(b),"Inserting local cursor a second time.");var a=new ops.OpAddCursor;a.init({memberid:b});h.enqueue([a]);G.focus()};this.removeLocalCursor=function(){runtime.assert(void 0!==h.getOdtDocument().getCursor(b),"Removing local cursor without inserting before.");var a=new ops.OpRemoveCursor;a.init({memberid:b});h.enqueue([a])};this.startEditing=function(){ga.subscribe(gui.InputMethodEditor.signalCompositionStart,
T.removeCurrentSelection);ga.subscribe(gui.InputMethodEditor.signalCompositionEnd,R);G.subscribe("beforecut",q);G.subscribe("cut",e);G.subscribe("beforepaste",a);G.subscribe("paste",r);ca&&ca.initialize();ga.setEditing(!0);aa.setModifier(na?C.Meta:C.Ctrl);y.bind(D.Backspace,C.None,Y(T.removeTextByBackspaceKey),!0);y.bind(D.Delete,C.None,T.removeTextByDeleteKey);y.bind(D.Tab,C.None,B(function(){T.insertText("\t");return!0}));na?(y.bind(D.Clear,C.None,T.removeCurrentSelection),y.bind(D.B,C.Meta,B(Q.toggleBold)),
y.bind(D.I,C.Meta,B(Q.toggleItalic)),y.bind(D.U,C.Meta,B(Q.toggleUnderline)),y.bind(D.L,C.MetaShift,B(Q.alignParagraphLeft)),y.bind(D.E,C.MetaShift,B(Q.alignParagraphCenter)),y.bind(D.R,C.MetaShift,B(Q.alignParagraphRight)),y.bind(D.J,C.MetaShift,B(Q.alignParagraphJustified)),y.bind(D.C,C.MetaShift,N.addAnnotation),y.bind(D.Z,C.Meta,m),y.bind(D.Z,C.MetaShift,v)):(y.bind(D.B,C.Ctrl,B(Q.toggleBold)),y.bind(D.I,C.Ctrl,B(Q.toggleItalic)),y.bind(D.U,C.Ctrl,B(Q.toggleUnderline)),y.bind(D.L,C.CtrlShift,
B(Q.alignParagraphLeft)),y.bind(D.E,C.CtrlShift,B(Q.alignParagraphCenter)),y.bind(D.R,C.CtrlShift,B(Q.alignParagraphRight)),y.bind(D.J,C.CtrlShift,B(Q.alignParagraphJustified)),y.bind(D.C,C.CtrlAlt,N.addAnnotation),y.bind(D.Z,C.Ctrl,m),y.bind(D.Z,C.CtrlShift,v));$.setDefault(B(function(a){var b;b=null===a.which||void 0===a.which?String.fromCharCode(a.keyCode):0!==a.which&&0!==a.charCode?String.fromCharCode(a.which):null;return!b||a.altKey||a.ctrlKey||a.metaKey?!1:(T.insertText(b),!0)}));$.bind(D.Enter,
C.None,B(T.enqueueParagraphSplittingOps))};this.endEditing=function(){ga.unsubscribe(gui.InputMethodEditor.signalCompositionStart,T.removeCurrentSelection);ga.unsubscribe(gui.InputMethodEditor.signalCompositionEnd,R);G.unsubscribe("cut",e);G.unsubscribe("beforecut",q);G.unsubscribe("paste",r);G.unsubscribe("beforepaste",a);ga.setEditing(!1);aa.setModifier(C.None);y.bind(D.Backspace,C.None,function(){return!0},!0);y.unbind(D.Delete,C.None);y.unbind(D.Tab,C.None);na?(y.unbind(D.Clear,C.None),y.unbind(D.B,
C.Meta),y.unbind(D.I,C.Meta),y.unbind(D.U,C.Meta),y.unbind(D.L,C.MetaShift),y.unbind(D.E,C.MetaShift),y.unbind(D.R,C.MetaShift),y.unbind(D.J,C.MetaShift),y.unbind(D.C,C.MetaShift),y.unbind(D.Z,C.Meta),y.unbind(D.Z,C.MetaShift)):(y.unbind(D.B,C.Ctrl),y.unbind(D.I,C.Ctrl),y.unbind(D.U,C.Ctrl),y.unbind(D.L,C.CtrlShift),y.unbind(D.E,C.CtrlShift),y.unbind(D.R,C.CtrlShift),y.unbind(D.J,C.CtrlShift),y.unbind(D.C,C.CtrlAlt),y.unbind(D.Z,C.Ctrl),y.unbind(D.Z,C.CtrlShift));$.setDefault(null);$.unbind(D.Enter,
C.None)};this.getInputMemberId=function(){return b};this.getSession=function(){return h};this.setUndoManager=function(a){ca&&ca.unsubscribe(gui.UndoManager.signalUndoStackChanged,f);if(ca=a)ca.setDocument(J),ca.setPlaybackFunction(h.enqueue),ca.subscribe(gui.UndoManager.signalUndoStackChanged,f)};this.getUndoManager=function(){return ca};this.getAnnotationController=function(){return N};this.getDirectFormattingController=function(){return Q};this.getHyperlinkClickHandler=function(){return aa};this.getHyperlinkController=
function(){return qa};this.getImageController=function(){return ia};this.getSelectionController=function(){return K};this.getTextController=function(){return T};this.getEventManager=function(){return G};this.getKeyboardHandlers=function(){return{keydown:y,keypress:$}};this.destroy=function(a){var b=[ha.destroy,ja.destroy,Q.destroy,ga.destroy,G.destroy,aa.destroy,ba];oa&&b.unshift(oa.destroy);runtime.clearTimeout(la);core.Async.destroyAll(b,a)};ha=new core.ScheduledTask(x,0);ja=new core.ScheduledTask(function(){var a=
J.getCursor(b);if(a&&a.getSelectionType()===ops.OdtCursor.RegionSelection&&(a=Z.getImageElements(a.getSelectedRange())[0])){fa.select(a.parentNode);return}fa.clearSelection()},0);y.bind(D.Left,C.None,B(K.moveCursorToLeft));y.bind(D.Right,C.None,B(K.moveCursorToRight));y.bind(D.Up,C.None,B(K.moveCursorUp));y.bind(D.Down,C.None,B(K.moveCursorDown));y.bind(D.Left,C.Shift,B(K.extendSelectionToLeft));y.bind(D.Right,C.Shift,B(K.extendSelectionToRight));y.bind(D.Up,C.Shift,B(K.extendSelectionUp));y.bind(D.Down,
C.Shift,B(K.extendSelectionDown));y.bind(D.Home,C.None,B(K.moveCursorToLineStart));y.bind(D.End,C.None,B(K.moveCursorToLineEnd));y.bind(D.Home,C.Ctrl,B(K.moveCursorToDocumentStart));y.bind(D.End,C.Ctrl,B(K.moveCursorToDocumentEnd));y.bind(D.Home,C.Shift,B(K.extendSelectionToLineStart));y.bind(D.End,C.Shift,B(K.extendSelectionToLineEnd));y.bind(D.Up,C.CtrlShift,B(K.extendSelectionToParagraphStart));y.bind(D.Down,C.CtrlShift,B(K.extendSelectionToParagraphEnd));y.bind(D.Home,C.CtrlShift,B(K.extendSelectionToDocumentStart));
y.bind(D.End,C.CtrlShift,B(K.extendSelectionToDocumentEnd));na?(y.bind(D.Left,C.Alt,B(K.moveCursorBeforeWord)),y.bind(D.Right,C.Alt,B(K.moveCursorPastWord)),y.bind(D.Left,C.Meta,B(K.moveCursorToLineStart)),y.bind(D.Right,C.Meta,B(K.moveCursorToLineEnd)),y.bind(D.Home,C.Meta,B(K.moveCursorToDocumentStart)),y.bind(D.End,C.Meta,B(K.moveCursorToDocumentEnd)),y.bind(D.Left,C.AltShift,B(K.extendSelectionBeforeWord)),y.bind(D.Right,C.AltShift,B(K.extendSelectionPastWord)),y.bind(D.Left,C.MetaShift,B(K.extendSelectionToLineStart)),
y.bind(D.Right,C.MetaShift,B(K.extendSelectionToLineEnd)),y.bind(D.Up,C.AltShift,B(K.extendSelectionToParagraphStart)),y.bind(D.Down,C.AltShift,B(K.extendSelectionToParagraphEnd)),y.bind(D.Up,C.MetaShift,B(K.extendSelectionToDocumentStart)),y.bind(D.Down,C.MetaShift,B(K.extendSelectionToDocumentEnd)),y.bind(D.A,C.Meta,B(K.extendSelectionToEntireDocument))):(y.bind(D.Left,C.Ctrl,B(K.moveCursorBeforeWord)),y.bind(D.Right,C.Ctrl,B(K.moveCursorPastWord)),y.bind(D.Left,C.CtrlShift,B(K.extendSelectionBeforeWord)),
y.bind(D.Right,C.CtrlShift,B(K.extendSelectionPastWord)),y.bind(D.A,C.Ctrl,B(K.extendSelectionToEntireDocument)));pa&&(oa=new gui.IOSSafariSupport(G));G.subscribe("keydown",y.handleEvent);G.subscribe("keypress",$.handleEvent);G.subscribe("keyup",O.handleEvent);G.subscribe("copy",g);G.subscribe("mousedown",u);G.subscribe("mousemove",ha.trigger);G.subscribe("mouseup",V);G.subscribe("contextmenu",F);G.subscribe("dragstart",M);G.subscribe("dragend",P);G.subscribe("click",aa.handleClick);G.subscribe("longpress",
A);G.subscribe("drag",w);G.subscribe("dragstop",z);J.subscribe(ops.OdtDocument.signalOperationEnd,ja.trigger);J.subscribe(ops.Document.signalCursorAdded,ga.registerCursor);J.subscribe(ops.Document.signalCursorRemoved,ga.removeCursor);J.subscribe(ops.OdtDocument.signalOperationEnd,c)};return gui.SessionController})();
// Input 96
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.CaretManager=function(l){function h(a){return c.hasOwnProperty(a)?c[a]:null}function b(){return Object.keys(c).map(function(a){return c[a]})}function k(a){var b=c[a];b&&(b.destroy(function(){}),delete c[a])}function d(a){a=a.getMemberId();a===l.getInputMemberId()&&(a=h(a))&&a.refreshCursorBlinking()}function p(){var a=h(l.getInputMemberId());v=!1;a&&a.ensureVisible()}function n(){var a=h(l.getInputMemberId());a&&(a.handleUpdate(),v||(v=!0,m=runtime.setTimeout(p,50)))}function e(a){a.memberId===
l.getInputMemberId()&&n()}function q(){var a=h(l.getInputMemberId());a&&a.setFocus()}function g(){var a=h(l.getInputMemberId());a&&a.removeFocus()}function r(){var a=h(l.getInputMemberId());a&&a.show()}function a(){var a=h(l.getInputMemberId());a&&a.hide()}var c={},f=runtime.getWindow(),m,v=!1;this.registerCursor=function(a,b,d){var e=a.getMemberId();b=new gui.Caret(a,b,d);d=l.getEventManager();c[e]=b;e===l.getInputMemberId()?(runtime.log("Starting to track input on new cursor of "+e),a.subscribe(ops.OdtCursor.signalCursorUpdated,
n),b.setOverlayElement(d.getEventTrap())):a.subscribe(ops.OdtCursor.signalCursorUpdated,b.handleUpdate);return b};this.getCaret=h;this.getCarets=b;this.destroy=function(h){var n=l.getSession().getOdtDocument(),p=l.getEventManager(),u=b().map(function(a){return a.destroy});runtime.clearTimeout(m);n.unsubscribe(ops.OdtDocument.signalParagraphChanged,e);n.unsubscribe(ops.Document.signalCursorMoved,d);n.unsubscribe(ops.Document.signalCursorRemoved,k);p.unsubscribe("focus",q);p.unsubscribe("blur",g);f.removeEventListener("focus",
r,!1);f.removeEventListener("blur",a,!1);c={};core.Async.destroyAll(u,h)};(function(){var b=l.getSession().getOdtDocument(),c=l.getEventManager();b.subscribe(ops.OdtDocument.signalParagraphChanged,e);b.subscribe(ops.Document.signalCursorMoved,d);b.subscribe(ops.Document.signalCursorRemoved,k);c.subscribe("focus",q);c.subscribe("blur",g);f.addEventListener("focus",r,!1);f.addEventListener("blur",a,!1)})()};
// Input 97
gui.EditInfoHandle=function(l){var h=[],b,k=l.ownerDocument,d=k.documentElement.namespaceURI;this.setEdits=function(l){h=l;var n,e,q,g;b.innerHTML="";for(l=0;l<h.length;l+=1)n=k.createElementNS(d,"div"),n.className="editInfo",e=k.createElementNS(d,"span"),e.className="editInfoColor",e.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",h[l].memberid),q=k.createElementNS(d,"span"),q.className="editInfoAuthor",q.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",h[l].memberid),
g=k.createElementNS(d,"span"),g.className="editInfoTime",g.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",h[l].memberid),g.innerHTML=h[l].time,n.appendChild(e),n.appendChild(q),n.appendChild(g),b.appendChild(n)};this.show=function(){b.style.display="block"};this.hide=function(){b.style.display="none"};this.destroy=function(d){l.removeChild(b);d()};b=k.createElementNS(d,"div");b.setAttribute("class","editInfoHandle");b.style.display="none";l.appendChild(b)};
// Input 98
/*

 Copyright (C) 2012 KO GmbH <aditya.bhatt@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.EditInfo=function(l,h){function b(){var b=[],h;for(h in d)d.hasOwnProperty(h)&&b.push({memberid:h,time:d[h].time});b.sort(function(b,d){return b.time-d.time});return b}var k,d={};this.getNode=function(){return k};this.getOdtDocument=function(){return h};this.getEdits=function(){return d};this.getSortedEdits=function(){return b()};this.addEdit=function(b,h){d[b]={time:h}};this.clearEdits=function(){d={}};this.destroy=function(b){l.parentNode&&l.removeChild(k);b()};k=h.getDOMDocument().createElementNS("urn:webodf:names:editinfo",
"editinfo");l.insertBefore(k,l.firstChild)};
// Input 99
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.EditInfoMarker=function(l,h){function b(b,a){return runtime.setTimeout(function(){n.style.opacity=b},a)}var k=this,d,p,n,e,q,g;this.addEdit=function(d,a){var c=Date.now()-a;l.addEdit(d,a);p.setEdits(l.getSortedEdits());n.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",d);runtime.clearTimeout(q);runtime.clearTimeout(g);1E4>c?(e=b(1,0),q=b(0.5,1E4-c),g=b(0.2,2E4-c)):1E4<=c&&2E4>c?(e=b(0.5,0),g=b(0.2,2E4-c)):e=b(0.2,0)};this.getEdits=function(){return l.getEdits()};this.clearEdits=
function(){l.clearEdits();p.setEdits([]);n.hasAttributeNS("urn:webodf:names:editinfo","editinfo:memberid")&&n.removeAttributeNS("urn:webodf:names:editinfo","editinfo:memberid")};this.getEditInfo=function(){return l};this.show=function(){n.style.display="block"};this.hide=function(){k.hideHandle();n.style.display="none"};this.showHandle=function(){p.show()};this.hideHandle=function(){p.hide()};this.destroy=function(b){runtime.clearTimeout(e);runtime.clearTimeout(q);runtime.clearTimeout(g);d.removeChild(n);
p.destroy(function(a){a?b(a):l.destroy(b)})};(function(){var b=l.getOdtDocument().getDOMDocument();n=b.createElementNS(b.documentElement.namespaceURI,"div");n.setAttribute("class","editInfoMarker");n.onmouseover=function(){k.showHandle()};n.onmouseout=function(){k.hideHandle()};d=l.getNode();d.appendChild(n);p=new gui.EditInfoHandle(d);h||k.hide()})()};
// Input 100
/*

 Copyright (C) 2010-2014 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.HyperlinkTooltipView=function(l,h){var b=new core.DomUtils,k=new odf.OdfUtils,d=runtime.getWindow(),p,n,e;runtime.assert(null!==d,"Expected to be run in an environment which has a global window, like a browser.");this.showTooltip=function(q){var g=q.target||q.srcElement,r=l.getSizer(),a=l.getZoomLevel(),c;a:{for(;g;){if(k.isHyperlink(g))break a;if(k.isParagraph(g))break;g=g.parentNode}g=null}if(g){b.containsNode(r,e)||r.appendChild(e);c=n;var f;switch(h()){case gui.KeyboardHandler.Modifier.Ctrl:f=
runtime.tr("Ctrl-click to follow link");break;case gui.KeyboardHandler.Modifier.Meta:f=runtime.tr("\u2318-click to follow link");break;default:f=""}c.textContent=f;p.textContent=k.getHyperlinkTarget(g);e.style.display="block";c=d.innerWidth-e.offsetWidth-15;g=q.clientX>c?c:q.clientX+15;c=d.innerHeight-e.offsetHeight-10;q=q.clientY>c?c:q.clientY+10;r=r.getBoundingClientRect();g=(g-r.left)/a;q=(q-r.top)/a;e.style.left=g+"px";e.style.top=q+"px"}};this.hideTooltip=function(){e.style.display="none"};this.destroy=
function(b){e.parentNode&&e.parentNode.removeChild(e);b()};(function(){var b=l.getElement().ownerDocument;p=b.createElement("span");n=b.createElement("span");p.className="webodf-hyperlinkTooltipLink";n.className="webodf-hyperlinkTooltipText";e=b.createElement("div");e.className="webodf-hyperlinkTooltip";e.appendChild(p);e.appendChild(n);l.getElement().appendChild(e)})()};
// Input 101
gui.ShadowCursor=function(l){var h=l.getDOMDocument().createRange(),b=!0;this.removeFromDocument=function(){};this.getMemberId=function(){return gui.ShadowCursor.ShadowCursorMemberId};this.getSelectedRange=function(){return h};this.setSelectedRange=function(k,d){h=k;b=!1!==d};this.hasForwardSelection=function(){return b};this.getDocument=function(){return l};this.getSelectionType=function(){return ops.OdtCursor.RangeSelection};h.setStart(l.getRootNode(),0)};gui.ShadowCursor.ShadowCursorMemberId="";
(function(){return gui.ShadowCursor})();
// Input 102
gui.SelectionView=function(l){};gui.SelectionView.prototype.rerender=function(){};gui.SelectionView.prototype.show=function(){};gui.SelectionView.prototype.hide=function(){};gui.SelectionView.prototype.destroy=function(l){};
// Input 103
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.SelectionViewManager=function(l){function h(){return Object.keys(b).map(function(h){return b[h]})}var b={};this.getSelectionView=function(h){return b.hasOwnProperty(h)?b[h]:null};this.getSelectionViews=h;this.removeSelectionView=function(h){b.hasOwnProperty(h)&&(b[h].destroy(function(){}),delete b[h])};this.hideSelectionView=function(h){b.hasOwnProperty(h)&&b[h].hide()};this.showSelectionView=function(h){b.hasOwnProperty(h)&&b[h].show()};this.rerenderSelectionViews=function(){Object.keys(b).forEach(function(h){b[h].rerender()})};
this.registerCursor=function(h,d){var p=h.getMemberId(),n=new l(h);d?n.show():n.hide();return b[p]=n};this.destroy=function(b){function d(h,e){e?b(e):h<l.length?l[h].destroy(function(b){d(h+1,b)}):b()}var l=h();d(0,void 0)}};
// Input 104
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.SessionViewOptions=function(){this.caretBlinksOnRangeSelect=this.caretAvatarsInitiallyVisible=this.editInfoMarkersInitiallyVisible=!0};
(function(){gui.SessionView=function(l,h,b,k,d){function p(a,b,c){function d(b,c,e){c=b+'[editinfo|memberid="'+a+'"]'+e+c;a:{var g=f.firstChild;for(b=b+'[editinfo|memberid="'+a+'"]'+e+"{";g;){if(g.nodeType===Node.TEXT_NODE&&0===g.data.indexOf(b)){b=g;break a}g=g.nextSibling}b=null}b?b.data=c:f.appendChild(document.createTextNode(c))}d("div.editInfoMarker","{ background-color: "+c+"; }","");d("span.editInfoColor","{ background-color: "+c+"; }","");d("span.editInfoAuthor",'{ content: "'+b+'"; }',":before");
d("dc|creator","{ background-color: "+c+"; }","");d(".webodf-selectionOverlay","{ fill: "+c+"; stroke: "+c+";}","");a!==gui.ShadowCursor.ShadowCursorMemberId&&a!==h||d(".webodf-touchEnabled .webodf-selectionOverlay","{ display: block; }"," > .webodf-draggable")}function n(a){var b,c;for(c in v)v.hasOwnProperty(c)&&(b=v[c],a?b.show():b.hide())}function e(a){k.getCarets().forEach(function(b){a?b.showHandle():b.hideHandle()})}function q(a){var b=a.getMemberId();a=a.getProperties();p(b,a.fullName,a.color);
h===b&&p("","",a.color)}function g(a){var c=a.getMemberId(),e=b.getOdtDocument().getMember(c).getProperties();k.registerCursor(a,z,x);d.registerCursor(a,!0);if(a=k.getCaret(c))a.setAvatarImageUrl(e.imageUrl),a.setColor(e.color);runtime.log("+++ View here +++ eagerly created an Caret for '"+c+"'! +++")}function r(a){a=a.getMemberId();var b=d.getSelectionView(h),c=d.getSelectionView(gui.ShadowCursor.ShadowCursorMemberId),e=k.getCaret(h);a===h?(c.hide(),b&&b.show(),e&&e.show()):a===gui.ShadowCursor.ShadowCursorMemberId&&
(c.show(),b&&b.hide(),e&&e.hide())}function a(a){d.removeSelectionView(a)}function c(a){var c=a.paragraphElement,d=a.memberId;a=a.timeStamp;var e,f="",g=c.getElementsByTagNameNS(m,"editinfo").item(0);g?(f=g.getAttributeNS(m,"id"),e=v[f]):(f=Math.random().toString(),e=new ops.EditInfo(c,b.getOdtDocument()),e=new gui.EditInfoMarker(e,w),g=c.getElementsByTagNameNS(m,"editinfo").item(0),g.setAttributeNS(m,"id",f),v[f]=e);e.addEdit(d,new Date(a))}var f,m="urn:webodf:names:editinfo",v={},w=void 0!==l.editInfoMarkersInitiallyVisible?
Boolean(l.editInfoMarkersInitiallyVisible):!0,z=void 0!==l.caretAvatarsInitiallyVisible?Boolean(l.caretAvatarsInitiallyVisible):!0,x=void 0!==l.caretBlinksOnRangeSelect?Boolean(l.caretBlinksOnRangeSelect):!0;this.showEditInfoMarkers=function(){w||(w=!0,n(w))};this.hideEditInfoMarkers=function(){w&&(w=!1,n(w))};this.showCaretAvatars=function(){z||(z=!0,e(z))};this.hideCaretAvatars=function(){z&&(z=!1,e(z))};this.getSession=function(){return b};this.getCaret=function(a){return k.getCaret(a)};this.destroy=
function(e){var h=b.getOdtDocument(),k=Object.keys(v).map(function(a){return v[a]});h.unsubscribe(ops.Document.signalMemberAdded,q);h.unsubscribe(ops.Document.signalMemberUpdated,q);h.unsubscribe(ops.Document.signalCursorAdded,g);h.unsubscribe(ops.Document.signalCursorRemoved,a);h.unsubscribe(ops.OdtDocument.signalParagraphChanged,c);h.unsubscribe(ops.Document.signalCursorMoved,r);h.unsubscribe(ops.OdtDocument.signalParagraphChanged,d.rerenderSelectionViews);h.unsubscribe(ops.OdtDocument.signalTableAdded,
d.rerenderSelectionViews);h.unsubscribe(ops.OdtDocument.signalParagraphStyleModified,d.rerenderSelectionViews);f.parentNode.removeChild(f);(function I(a,b){b?e(b):a<k.length?k[a].destroy(function(b){I(a+1,b)}):e()})(0,void 0)};(function(){var e=b.getOdtDocument(),h=document.getElementsByTagName("head").item(0);e.subscribe(ops.Document.signalMemberAdded,q);e.subscribe(ops.Document.signalMemberUpdated,q);e.subscribe(ops.Document.signalCursorAdded,g);e.subscribe(ops.Document.signalCursorRemoved,a);e.subscribe(ops.OdtDocument.signalParagraphChanged,
c);e.subscribe(ops.Document.signalCursorMoved,r);e.subscribe(ops.OdtDocument.signalParagraphChanged,d.rerenderSelectionViews);e.subscribe(ops.OdtDocument.signalTableAdded,d.rerenderSelectionViews);e.subscribe(ops.OdtDocument.signalParagraphStyleModified,d.rerenderSelectionViews);f=document.createElementNS(h.namespaceURI,"style");f.type="text/css";f.media="screen, print, handheld, projection";f.appendChild(document.createTextNode("@namespace editinfo url(urn:webodf:names:editinfo);"));f.appendChild(document.createTextNode("@namespace dc url(http://purl.org/dc/elements/1.1/);"));
h.appendChild(f)})()}})();
// Input 105
gui.SvgSelectionView=function(l){function h(){var a=f.getRootNode();m!==a&&(m=a,v=m.parentNode.parentNode.parentNode,v.appendChild(z),z.setAttribute("class","webodf-selectionOverlay"),u.setAttribute("class","webodf-draggable"),t.setAttribute("class","webodf-draggable"),u.setAttribute("end","left"),t.setAttribute("end","right"),u.setAttribute("r",8),t.setAttribute("r",8),z.appendChild(x),z.appendChild(u),z.appendChild(t))}function b(a){var b=A.getBoundingClientRect(v),c=I.getZoomLevel(),d={};d.top=
A.adaptRangeDifferenceToZoomLevel(a.top-b.top,c);d.left=A.adaptRangeDifferenceToZoomLevel(a.left-b.left,c);d.bottom=A.adaptRangeDifferenceToZoomLevel(a.bottom-b.top,c);d.right=A.adaptRangeDifferenceToZoomLevel(a.right-b.left,c);d.width=A.adaptRangeDifferenceToZoomLevel(a.width,c);d.height=A.adaptRangeDifferenceToZoomLevel(a.height,c);return d}function k(a){a=a.getBoundingClientRect();return Boolean(a&&0!==a.height)}function d(a){var b=s.getTextElements(a,!0,!1),c=a.cloneRange(),d=a.cloneRange();a=
a.cloneRange();if(!b.length)return null;var e;a:{e=0;var f=b[e],g=c.startContainer===f?c.startOffset:0,h=g;c.setStart(f,g);for(c.setEnd(f,h);!k(c);){if(f.nodeType===Node.ELEMENT_NODE&&h<f.childNodes.length)h=f.childNodes.length;else if(f.nodeType===Node.TEXT_NODE&&h<f.length)h+=1;else if(b[e])f=b[e],e+=1,g=h=0;else{e=!1;break a}c.setStart(f,g);c.setEnd(f,h)}e=!0}if(!e)return null;a:{e=b.length-1;f=b[e];h=g=d.endContainer===f?d.endOffset:f.nodeType===Node.TEXT_NODE?f.length:f.childNodes.length;d.setStart(f,
g);for(d.setEnd(f,h);!k(d);){if(f.nodeType===Node.ELEMENT_NODE&&0<g)g=0;else if(f.nodeType===Node.TEXT_NODE&&0<g)g-=1;else if(b[e])f=b[e],e-=1,g=h=f.length||f.childNodes.length;else{b=!1;break a}d.setStart(f,g);d.setEnd(f,h)}b=!0}if(!b)return null;a.setStart(c.startContainer,c.startOffset);a.setEnd(d.endContainer,d.endOffset);return{firstRange:c,lastRange:d,fillerRange:a}}function p(a,b){var c={};c.top=Math.min(a.top,b.top);c.left=Math.min(a.left,b.left);c.right=Math.max(a.right,b.right);c.bottom=
Math.max(a.bottom,b.bottom);c.width=c.right-c.left;c.height=c.bottom-c.top;return c}function n(a,b){b&&0<b.width&&0<b.height&&(a=a?p(a,b):b);return a}function e(a){function b(a){P.setUnfilteredPosition(a,0);return u.acceptNode(a)===F&&v.acceptPosition(P)===F?F:V}function c(a){var d=null;b(a)===F&&(d=A.getBoundingClientRect(a));return d}var d=a.commonAncestorContainer,e=a.startContainer,g=a.endContainer,h=a.startOffset,k=a.endOffset,m,l,p=null,q,r=w.createRange(),v,u=new odf.OdfNodeFilter,t;if(e===
d||g===d)return r=a.cloneRange(),p=r.getBoundingClientRect(),r.detach(),p;for(a=e;a.parentNode!==d;)a=a.parentNode;for(l=g;l.parentNode!==d;)l=l.parentNode;v=f.createRootFilter(e);for(d=a.nextSibling;d&&d!==l;)q=c(d),p=n(p,q),d=d.nextSibling;if(s.isParagraph(a))p=n(p,A.getBoundingClientRect(a));else if(a.nodeType===Node.TEXT_NODE)d=a,r.setStart(d,h),r.setEnd(d,d===l?k:d.length),q=r.getBoundingClientRect(),p=n(p,q);else for(t=w.createTreeWalker(a,NodeFilter.SHOW_TEXT,b,!1),d=t.currentNode=e;d&&d!==
g;)r.setStart(d,h),r.setEnd(d,d.length),q=r.getBoundingClientRect(),p=n(p,q),m=d,h=0,d=t.nextNode();m||(m=e);if(s.isParagraph(l))p=n(p,A.getBoundingClientRect(l));else if(l.nodeType===Node.TEXT_NODE)d=l,r.setStart(d,d===a?h:0),r.setEnd(d,k),q=r.getBoundingClientRect(),p=n(p,q);else for(t=w.createTreeWalker(l,NodeFilter.SHOW_TEXT,b,!1),d=t.currentNode=g;d&&d!==m;)if(r.setStart(d,0),r.setEnd(d,k),q=r.getBoundingClientRect(),p=n(p,q),d=t.previousNode())k=d.length;return p}function q(a,b){var c=a.getBoundingClientRect(),
d={width:0};d.top=c.top;d.bottom=c.bottom;d.height=c.height;d.left=d.right=b?c.right:c.left;return d}function g(){var a=l.getSelectedRange(),c;if(c=M&&l.getSelectionType()===ops.OdtCursor.RangeSelection&&!a.collapsed){h();var a=d(a),f,g,k,m,n,r,s,v;if(a){c=a.firstRange;f=a.lastRange;g=a.fillerRange;k=b(q(c,!1));n=b(q(f,!0));m=(m=e(g))?b(m):p(k,n);r=m.left;s=k.left+Math.max(0,m.width-(k.left-m.left));m=Math.min(k.top,n.top);v=n.top+n.height;r=[{x:k.left,y:m+k.height},{x:k.left,y:m},{x:s,y:m},{x:s,
y:v-n.height},{x:n.right,y:v-n.height},{x:n.right,y:v},{x:r,y:v},{x:r,y:m+k.height},{x:k.left,y:m+k.height}];s="";var w;for(w=0;w<r.length;w+=1)s+=r[w].x+","+r[w].y+" ";x.setAttribute("points",s);u.setAttribute("cx",k.left);u.setAttribute("cy",m+k.height/2);t.setAttribute("cx",n.right);t.setAttribute("cy",v-n.height/2);c.detach();f.detach();g.detach()}c=Boolean(a)}z.style.display=c?"block":"none"}function r(a){M&&a===l&&R.trigger()}function a(a){a=8/a;u.setAttribute("r",a);t.setAttribute("r",a)}function c(b){v.removeChild(z);
l.getDocument().unsubscribe(ops.Document.signalCursorMoved,r);I.unsubscribe(gui.ZoomHelper.signalZoomChanged,a);b()}var f=l.getDocument(),m,v,w=f.getDOMDocument(),z=w.createElementNS("http://www.w3.org/2000/svg","svg"),x=w.createElementNS("http://www.w3.org/2000/svg","polygon"),u=w.createElementNS("http://www.w3.org/2000/svg","circle"),t=w.createElementNS("http://www.w3.org/2000/svg","circle"),s=new odf.OdfUtils,A=new core.DomUtils,I=f.getCanvas().getZoomHelper(),M=!0,P=gui.SelectionMover.createPositionIterator(f.getRootNode()),
F=NodeFilter.FILTER_ACCEPT,V=NodeFilter.FILTER_REJECT,R;this.rerender=function(){M&&R.trigger()};this.show=function(){M=!0;R.trigger()};this.hide=function(){M=!1;R.trigger()};this.destroy=function(a){core.Async.destroyAll([R.destroy,c],a)};(function(){var b=l.getMemberId();R=new core.ScheduledTask(g,0);h();z.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",b);l.getDocument().subscribe(ops.Document.signalCursorMoved,r);I.subscribe(gui.ZoomHelper.signalZoomChanged,a);a(I.getZoomLevel())})()};
// Input 106
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.UndoStateRules=function(){function l(b,h){var k=b.length;this.previous=function(){for(k-=1;0<=k;k-=1)if(h(b[k]))return b[k];return null}}function h(b){b=b.spec();var h;b.hasOwnProperty("position")&&(h=b.position);return h}function b(b){return b.isEdit}function k(b,k,l){if(!l)return l=h(b)-h(k),0===l||1===Math.abs(l);b=h(b);k=h(k);l=h(l);return b-k===k-l}this.isEditOperation=b;this.isPartOfOperationSet=function(d,h){var n=void 0!==d.group,e;if(!d.isEdit||0===h.length)return!0;e=h[h.length-1];if(n&&
d.group===e.group)return!0;a:switch(d.spec().optype){case "RemoveText":case "InsertText":e=!0;break a;default:e=!1}if(e&&h.some(b)){if(n){var q;n=d.spec().optype;e=new l(h,b);var g=e.previous(),r=null,a,c;runtime.assert(Boolean(g),"No edit operations found in state");c=g.group;runtime.assert(void 0!==c,"Operation has no group");for(a=1;g&&g.group===c;){if(n===g.spec().optype){q=g;break}g=e.previous()}if(q){for(g=e.previous();g;){if(g.group!==c){if(2===a)break;c=g.group;a+=1}if(n===g.spec().optype){r=
g;break}g=e.previous()}q=k(d,q,r)}else q=!1;return q}q=d.spec().optype;n=new l(h,b);e=n.previous();runtime.assert(Boolean(e),"No edit operations found in state");q=q===e.spec().optype?k(d,e,n.previous()):!1;return q}return!1}};
// Input 107
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.TrivialUndoManager=function(l){function h(a){0<a.length&&(t=!0,f(a),t=!1)}function b(){x.emit(gui.UndoManager.signalUndoStackChanged,{undoAvailable:q.hasUndoStates(),redoAvailable:q.hasRedoStates()})}function k(){v!==c&&v!==w[w.length-1]&&w.push(v)}function d(a){var b=a.previousSibling||a.nextSibling;a.parentNode.removeChild(a);r.normalizeTextNodes(b)}function p(a){return Object.keys(a).map(function(b){return a[b]})}function n(a){function b(a){var g=a.spec();if(e[g.memberid])switch(g.optype){case "AddCursor":c[g.memberid]||
(c[g.memberid]=a,delete e[g.memberid],f-=1);break;case "MoveCursor":d[g.memberid]||(d[g.memberid]=a)}}var c={},d={},e={},f,g=a.pop();m.getMemberIds().forEach(function(a){e[a]=!0});for(f=Object.keys(e).length;g&&0<f;)g.reverse(),g.forEach(b),g=a.pop();return p(c).concat(p(d))}function e(){var e=a=m.cloneDocumentElement();r.getElementsByTagNameNS(e,g,"cursor").forEach(d);r.getElementsByTagNameNS(e,g,"anchor").forEach(d);k();v=c=n([c].concat(w));w.length=0;z.length=0;b()}var q=this,g="urn:webodf:names:cursor",
r=new core.DomUtils,a,c=[],f,m,v=[],w=[],z=[],x=new core.EventNotifier([gui.UndoManager.signalUndoStackChanged,gui.UndoManager.signalUndoStateCreated,gui.UndoManager.signalUndoStateModified,gui.TrivialUndoManager.signalDocumentRootReplaced]),u=l||new gui.UndoStateRules,t=!1;this.subscribe=function(a,b){x.subscribe(a,b)};this.unsubscribe=function(a,b){x.unsubscribe(a,b)};this.hasUndoStates=function(){return 0<w.length};this.hasRedoStates=function(){return 0<z.length};this.setDocument=function(a){m=
a};this.purgeInitialState=function(){w.length=0;z.length=0;c.length=0;v.length=0;a=null;b()};this.setInitialState=e;this.initialize=function(){a||e()};this.setPlaybackFunction=function(a){f=a};this.onOperationExecuted=function(a){t||(u.isEditOperation(a)&&(v===c||0<z.length)||!u.isPartOfOperationSet(a,v)?(z.length=0,k(),v=[a],w.push(v),x.emit(gui.UndoManager.signalUndoStateCreated,{operations:v}),b()):(v.push(a),x.emit(gui.UndoManager.signalUndoStateModified,{operations:v})))};this.moveForward=function(a){for(var c=
0,d;a&&z.length;)d=z.pop(),w.push(d),h(d),a-=1,c+=1;c&&(v=w[w.length-1],b());return c};this.moveBackward=function(d){for(var e=0;d&&w.length;)z.push(w.pop()),d-=1,e+=1;e&&(m.setDocumentElement(a.cloneNode(!0)),x.emit(gui.TrivialUndoManager.signalDocumentRootReplaced,{}),m.getMemberIds().forEach(function(a){m.removeCursor(a)}),h(c),w.forEach(h),v=w[w.length-1]||c,b());return e}};gui.TrivialUndoManager.signalDocumentRootReplaced="documentRootReplaced";(function(){return gui.TrivialUndoManager})();
// Input 108
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OperationTransformMatrix=function(){function l(a){a.position+=a.length;a.length*=-1}function h(a){var b=0>a.length;b&&l(a);return b}function b(a,b){function d(f){a[f]===b&&e.push(f)}var e=[];a&&["style:parent-style-name","style:next-style-name"].forEach(d);return e}function k(a,b){function d(e){a[e]===b&&delete a[e]}a&&["style:parent-style-name","style:next-style-name"].forEach(d)}function d(a){var b={};Object.keys(a).forEach(function(e){b[e]="object"===typeof a[e]?d(a[e]):a[e]});return b}function p(a,
b,d,e){var g,h=!1,k=!1,l,n=[];e&&e.attributes&&(n=e.attributes.split(","));a&&(d||0<n.length)&&Object.keys(a).forEach(function(b){var c=a[b],e;"object"!==typeof c&&(d&&(e=d[b]),void 0!==e?(delete a[b],k=!0,e===c&&(delete d[b],h=!0)):-1!==n.indexOf(b)&&(delete a[b],k=!0))});if(b&&b.attributes&&(d||0<n.length)){l=b.attributes.split(",");for(e=0;e<l.length;e+=1)if(g=l[e],d&&void 0!==d[g]||n&&-1!==n.indexOf(g))l.splice(e,1),e-=1,k=!0;0<l.length?b.attributes=l.join(","):delete b.attributes}return{majorChanged:h,
minorChanged:k}}function n(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1}function e(a){for(var b in a)if(a.hasOwnProperty(b)&&("attributes"!==b||0<a.attributes.length))return!0;return!1}function q(a,b,d,g,h){var k=a?a[h]:null,l=b?b[h]:null,q=d?d[h]:null,r=g?g[h]:null,t;t=p(k,l,q,r);k&&!n(k)&&delete a[h];l&&!e(l)&&delete b[h];q&&!n(q)&&delete d[h];r&&!e(r)&&delete g[h];return t}function g(a,b){return{opSpecsA:[a],opSpecsB:[b]}}var r;r={AddCursor:{AddCursor:g,AddMember:g,AddStyle:g,ApplyDirectStyling:g,
InsertText:g,MoveCursor:g,RemoveCursor:g,RemoveMember:g,RemoveStyle:g,RemoveText:g,SetParagraphStyle:g,SplitParagraph:g,UpdateMember:g,UpdateMetadata:g,UpdateParagraphStyle:g},AddMember:{AddStyle:g,InsertText:g,MoveCursor:g,RemoveCursor:g,RemoveStyle:g,RemoveText:g,SetParagraphStyle:g,SplitParagraph:g,UpdateMetadata:g,UpdateParagraphStyle:g},AddStyle:{AddStyle:g,ApplyDirectStyling:g,InsertText:g,MoveCursor:g,RemoveCursor:g,RemoveMember:g,RemoveStyle:function(a,c){var d,e=[a],g=[c];a.styleFamily===
c.styleFamily&&(d=b(a.setProperties,c.styleName),0<d.length&&(d={optype:"UpdateParagraphStyle",memberid:c.memberid,timestamp:c.timestamp,styleName:a.styleName,removedProperties:{attributes:d.join(",")}},g.unshift(d)),k(a.setProperties,c.styleName));return{opSpecsA:e,opSpecsB:g}},RemoveText:g,SetParagraphStyle:g,SplitParagraph:g,UpdateMember:g,UpdateMetadata:g,UpdateParagraphStyle:g},ApplyDirectStyling:{ApplyDirectStyling:function(a,b,e){var g,h,k,l,p,r,t,s;l=[a];k=[b];if(!(a.position+a.length<=b.position||
a.position>=b.position+b.length)){g=e?a:b;h=e?b:a;if(a.position!==b.position||a.length!==b.length)r=d(g),t=d(h);b=q(h.setProperties,null,g.setProperties,null,"style:text-properties");if(b.majorChanged||b.minorChanged)k=[],a=[],l=g.position+g.length,p=h.position+h.length,h.position<g.position?b.minorChanged&&(s=d(t),s.length=g.position-h.position,a.push(s),h.position=g.position,h.length=p-h.position):g.position<h.position&&b.majorChanged&&(s=d(r),s.length=h.position-g.position,k.push(s),g.position=
h.position,g.length=l-g.position),p>l?b.minorChanged&&(r=t,r.position=l,r.length=p-l,a.push(r),h.length=l-h.position):l>p&&b.majorChanged&&(r.position=p,r.length=l-p,k.push(r),g.length=p-g.position),g.setProperties&&n(g.setProperties)&&k.push(g),h.setProperties&&n(h.setProperties)&&a.push(h),e?(l=k,k=a):l=a}return{opSpecsA:l,opSpecsB:k}},InsertText:function(a,b){b.position<=a.position?a.position+=b.text.length:b.position<=a.position+a.length&&(a.length+=b.text.length);return{opSpecsA:[a],opSpecsB:[b]}},
MoveCursor:g,RemoveCursor:g,RemoveStyle:g,RemoveText:function(a,b){var d=a.position+a.length,e=b.position+b.length,g=[a],h=[b];e<=a.position?a.position-=b.length:b.position<d&&(a.position<b.position?a.length=e<d?a.length-b.length:b.position-a.position:(a.position=b.position,e<d?a.length=d-e:g=[]));return{opSpecsA:g,opSpecsB:h}},SetParagraphStyle:g,SplitParagraph:function(a,b){b.position<a.position?a.position+=1:b.position<a.position+a.length&&(a.length+=1);return{opSpecsA:[a],opSpecsB:[b]}},UpdateMetadata:g,
UpdateParagraphStyle:g},InsertText:{InsertText:function(a,b,d){a.position<b.position?b.position+=a.text.length:a.position>b.position?a.position+=b.text.length:d?b.position+=a.text.length:a.position+=b.text.length;return{opSpecsA:[a],opSpecsB:[b]}},MoveCursor:function(a,b){var d=h(b);a.position<b.position?b.position+=a.text.length:a.position<b.position+b.length&&(b.length+=a.text.length);d&&l(b);return{opSpecsA:[a],opSpecsB:[b]}},RemoveCursor:g,RemoveMember:g,RemoveStyle:g,RemoveText:function(a,b){var d;
d=b.position+b.length;var e=[a],g=[b];d<=a.position?a.position-=b.length:a.position<=b.position?b.position+=a.text.length:(b.length=a.position-b.position,d={optype:"RemoveText",memberid:b.memberid,timestamp:b.timestamp,position:a.position+a.text.length,length:d-a.position},g.unshift(d),a.position=b.position);return{opSpecsA:e,opSpecsB:g}},SplitParagraph:function(a,b,d){if(a.position<b.position)b.position+=a.text.length;else if(a.position>b.position)a.position+=1;else return d?b.position+=a.text.length:
a.position+=1,null;return{opSpecsA:[a],opSpecsB:[b]}},UpdateMember:g,UpdateMetadata:g,UpdateParagraphStyle:g},MoveCursor:{MoveCursor:g,RemoveCursor:function(a,b){return{opSpecsA:a.memberid===b.memberid?[]:[a],opSpecsB:[b]}},RemoveMember:g,RemoveStyle:g,RemoveText:function(a,b){var d=h(a),e=a.position+a.length,g=b.position+b.length;g<=a.position?a.position-=b.length:b.position<e&&(a.position<b.position?a.length=g<e?a.length-b.length:b.position-a.position:(a.position=b.position,a.length=g<e?e-g:0));
d&&l(a);return{opSpecsA:[a],opSpecsB:[b]}},SetParagraphStyle:g,SplitParagraph:function(a,b){var d=h(a);b.position<a.position?a.position+=1:b.position<a.position+a.length&&(a.length+=1);d&&l(a);return{opSpecsA:[a],opSpecsB:[b]}},UpdateMember:g,UpdateMetadata:g,UpdateParagraphStyle:g},RemoveCursor:{RemoveCursor:function(a,b){var d=a.memberid===b.memberid;return{opSpecsA:d?[]:[a],opSpecsB:d?[]:[b]}},RemoveMember:g,RemoveStyle:g,RemoveText:g,SetParagraphStyle:g,SplitParagraph:g,UpdateMember:g,UpdateMetadata:g,
UpdateParagraphStyle:g},RemoveMember:{RemoveStyle:g,RemoveText:g,SetParagraphStyle:g,SplitParagraph:g,UpdateMetadata:g,UpdateParagraphStyle:g},RemoveStyle:{RemoveStyle:function(a,b){var d=a.styleName===b.styleName&&a.styleFamily===b.styleFamily;return{opSpecsA:d?[]:[a],opSpecsB:d?[]:[b]}},RemoveText:g,SetParagraphStyle:function(a,b){var d,e=[a],g=[b];"paragraph"===a.styleFamily&&a.styleName===b.styleName&&(d={optype:"SetParagraphStyle",memberid:a.memberid,timestamp:a.timestamp,position:b.position,
styleName:""},e.unshift(d),b.styleName="");return{opSpecsA:e,opSpecsB:g}},SplitParagraph:g,UpdateMember:g,UpdateMetadata:g,UpdateParagraphStyle:function(a,c){var d,e=[a],g=[c];"paragraph"===a.styleFamily&&(d=b(c.setProperties,a.styleName),0<d.length&&(d={optype:"UpdateParagraphStyle",memberid:a.memberid,timestamp:a.timestamp,styleName:c.styleName,removedProperties:{attributes:d.join(",")}},e.unshift(d)),a.styleName===c.styleName?g=[]:k(c.setProperties,a.styleName));return{opSpecsA:e,opSpecsB:g}}},
RemoveText:{RemoveText:function(a,b){var d=a.position+a.length,e=b.position+b.length,g=[a],h=[b];e<=a.position?a.position-=b.length:d<=b.position?b.position-=a.length:b.position<d&&(a.position<b.position?(a.length=e<d?a.length-b.length:b.position-a.position,d<e?(b.position=a.position,b.length=e-d):h=[]):(d<e?b.length-=a.length:b.position<a.position?b.length=a.position-b.position:h=[],e<d?(a.position=b.position,a.length=d-e):g=[]));return{opSpecsA:g,opSpecsB:h}},SplitParagraph:function(a,b){var d=
a.position+a.length,e=[a],g=[b];b.position<=a.position?a.position+=1:b.position<d&&(a.length=b.position-a.position,d={optype:"RemoveText",memberid:a.memberid,timestamp:a.timestamp,position:b.position+1,length:d-b.position},e.unshift(d));a.position+a.length<=b.position?b.position-=a.length:a.position<b.position&&(b.position=a.position);return{opSpecsA:e,opSpecsB:g}},UpdateMember:g,UpdateMetadata:g,UpdateParagraphStyle:g},SetParagraphStyle:{UpdateMember:g,UpdateMetadata:g,UpdateParagraphStyle:g},SplitParagraph:{SplitParagraph:function(a,
b,d){a.position<b.position?b.position+=1:a.position>b.position?a.position+=1:a.position===b.position&&(d?b.position+=1:a.position+=1);return{opSpecsA:[a],opSpecsB:[b]}},UpdateMember:g,UpdateMetadata:g,UpdateParagraphStyle:g},UpdateMember:{UpdateMetadata:g,UpdateParagraphStyle:g},UpdateMetadata:{UpdateMetadata:function(a,b,d){var g,h=[a],k=[b];g=d?a:b;a=d?b:a;p(a.setProperties||null,a.removedProperties||null,g.setProperties||null,g.removedProperties||null);g.setProperties&&n(g.setProperties)||g.removedProperties&&
e(g.removedProperties)||(d?h=[]:k=[]);a.setProperties&&n(a.setProperties)||a.removedProperties&&e(a.removedProperties)||(d?k=[]:h=[]);return{opSpecsA:h,opSpecsB:k}},UpdateParagraphStyle:g},UpdateParagraphStyle:{UpdateParagraphStyle:function(a,b,d){var g,h=[a],k=[b];a.styleName===b.styleName&&(g=d?a:b,a=d?b:a,q(a.setProperties,a.removedProperties,g.setProperties,g.removedProperties,"style:paragraph-properties"),q(a.setProperties,a.removedProperties,g.setProperties,g.removedProperties,"style:text-properties"),
p(a.setProperties||null,a.removedProperties||null,g.setProperties||null,g.removedProperties||null),g.setProperties&&n(g.setProperties)||g.removedProperties&&e(g.removedProperties)||(d?h=[]:k=[]),a.setProperties&&n(a.setProperties)||a.removedProperties&&e(a.removedProperties)||(d?k=[]:h=[]));return{opSpecsA:h,opSpecsB:k}}}};this.passUnchanged=g;this.extendTransformations=function(a){Object.keys(a).forEach(function(b){var d=a[b],e,g=r.hasOwnProperty(b);runtime.log((g?"Extending":"Adding")+" map for optypeA: "+
b);g||(r[b]={});e=r[b];Object.keys(d).forEach(function(a){var g=e.hasOwnProperty(a);runtime.assert(b<=a,"Wrong order:"+b+", "+a);runtime.log("  "+(g?"Overwriting":"Adding")+" entry for optypeB: "+a);e[a]=d[a]})})};this.transformOpspecVsOpspec=function(a,b){var d=a.optype<=b.optype,e;runtime.log("Crosstransforming:");runtime.log(runtime.toJson(a));runtime.log(runtime.toJson(b));d||(e=a,a=b,b=e);(e=(e=r[a.optype])&&e[b.optype])?(e=e(a,b,!d),d||null===e||(e={opSpecsA:e.opSpecsB,opSpecsB:e.opSpecsA})):
e=null;runtime.log("result:");e?(runtime.log(runtime.toJson(e.opSpecsA)),runtime.log(runtime.toJson(e.opSpecsB))):runtime.log("null");return e}};
// Input 109
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OperationTransformer=function(){function l(d){var h=[];d.forEach(function(d){h.push(b.create(d))});return h}function h(b,l){for(var n,e,q=[],g=[];0<b.length&&l;){n=b.shift();n=k.transformOpspecVsOpspec(n,l);if(!n)return null;q=q.concat(n.opSpecsA);if(0===n.opSpecsB.length){q=q.concat(b);l=null;break}for(;1<n.opSpecsB.length;){e=h(b,n.opSpecsB.shift());if(!e)return null;g=g.concat(e.opSpecsB);b=e.opSpecsA}l=n.opSpecsB.pop()}l&&g.push(l);return{opSpecsA:q,opSpecsB:g}}var b,k=new ops.OperationTransformMatrix;
this.setOperationFactory=function(d){b=d};this.getOperationTransformMatrix=function(){return k};this.transform=function(b,k){for(var n,e=[];0<k.length;){n=h(b,k.shift());if(!n)return null;b=n.opSpecsA;e=e.concat(n.opSpecsB)}return{opsA:l(b),opsB:l(e)}}};
// Input 110
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.Server=function(){};ops.Server.prototype.connect=function(l,h){};ops.Server.prototype.networkStatus=function(){};ops.Server.prototype.login=function(l,h,b,k){};ops.Server.prototype.joinSession=function(l,h,b,k){};ops.Server.prototype.leaveSession=function(l,h,b,k){};ops.Server.prototype.getGenesisUrl=function(l){};
// Input 111
var webodf_css="@namespace draw url(urn:oasis:names:tc:opendocument:xmlns:drawing:1.0);\n@namespace fo url(urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0);\n@namespace office url(urn:oasis:names:tc:opendocument:xmlns:office:1.0);\n@namespace presentation url(urn:oasis:names:tc:opendocument:xmlns:presentation:1.0);\n@namespace style url(urn:oasis:names:tc:opendocument:xmlns:style:1.0);\n@namespace svg url(urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0);\n@namespace table url(urn:oasis:names:tc:opendocument:xmlns:table:1.0);\n@namespace text url(urn:oasis:names:tc:opendocument:xmlns:text:1.0);\n@namespace webodfhelper url(urn:webodf:names:helper);\n@namespace cursor url(urn:webodf:names:cursor);\n@namespace editinfo url(urn:webodf:names:editinfo);\n@namespace annotation url(urn:webodf:names:annotation);\n@namespace dc url(http://purl.org/dc/elements/1.1/);\n@namespace svgns url(http://www.w3.org/2000/svg);\n\noffice|document > *, office|document-content > * {\n  display: none;\n}\noffice|body, office|document {\n  display: inline-block;\n  position: relative;\n}\n\ntext|p, text|h {\n  display: block;\n  padding: 0;\n  margin: 0;\n  line-height: normal;\n  position: relative;\n  min-height: 1.3em; /* prevent empty paragraphs and headings from collapsing if they are empty */\n}\n*[webodfhelper|containsparagraphanchor] {\n  position: relative;\n}\ntext|s {\n    white-space: pre;\n}\ntext|tab {\n  display: inline;\n  white-space: pre;\n}\ntext|tracked-changes {\n  /*Consumers that do not support change tracking, should ignore changes.*/\n  display: none;\n}\noffice|binary-data {\n  display: none;\n}\noffice|text {\n  display: block;\n  text-align: left;\n  overflow: visible;\n  word-wrap: break-word;\n}\n\noffice|text::selection {\n  /** Let's not draw selection highlight that overflows into the office|text\n   * node when selecting content across several paragraphs\n   */\n  background: transparent;\n}\n\noffice|document *::selection {\n  background: transparent;\n}\noffice|document *::-moz-selection {\n  background: transparent;\n}\n\noffice|text * draw|text-box {\n/** only for text documents */\n    display: block;\n    border: 1px solid #d3d3d3;\n}\ndraw|frame {\n  /** make sure frames are above the main body. */\n  z-index: 1;\n}\noffice|spreadsheet {\n  display: block;\n  border-collapse: collapse;\n  empty-cells: show;\n  font-family: sans-serif;\n  font-size: 10pt;\n  text-align: left;\n  page-break-inside: avoid;\n  overflow: hidden;\n}\noffice|presentation {\n  display: inline-block;\n  text-align: left;\n}\n#shadowContent {\n  display: inline-block;\n  text-align: left;\n}\ndraw|page {\n  display: block;\n  position: relative;\n  overflow: hidden;\n}\npresentation|notes, presentation|footer-decl, presentation|date-time-decl {\n    display: none;\n}\n@media print {\n  draw|page {\n    border: 1pt solid black;\n    page-break-inside: avoid;\n  }\n  presentation|notes {\n    /*TODO*/\n  }\n}\noffice|spreadsheet text|p {\n  border: 0px;\n  padding: 1px;\n  margin: 0px;\n}\noffice|spreadsheet table|table {\n  margin: 3px;\n}\noffice|spreadsheet table|table:after {\n  /* show sheet name the end of the sheet */\n  /*content: attr(table|name);*/ /* gives parsing error in opera */\n}\noffice|spreadsheet table|table-row {\n  counter-increment: row;\n}\noffice|spreadsheet table|table-row:before {\n  width: 3em;\n  background: #cccccc;\n  border: 1px solid black;\n  text-align: center;\n  content: counter(row);\n  display: table-cell;\n}\noffice|spreadsheet table|table-cell {\n  border: 1px solid #cccccc;\n}\ntable|table {\n  display: table;\n}\ndraw|frame table|table {\n  width: 100%;\n  height: 100%;\n  background: white;\n}\ntable|table-header-rows {\n  display: table-header-group;\n}\ntable|table-row {\n  display: table-row;\n}\ntable|table-column {\n  display: table-column;\n}\ntable|table-cell {\n  width: 0.889in;\n  display: table-cell;\n  word-break: break-all; /* prevent long words from extending out the table cell */\n}\ndraw|frame {\n  display: block;\n}\ndraw|image {\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  -moz-background-size: 100% 100%;\n}\n/* only show the first image in frame */\ndraw|frame > draw|image:nth-of-type(n+2) {\n  display: none;\n}\ntext|list:before {\n    display: none;\n    content:\"\";\n}\ntext|list {\n    counter-reset: list;\n}\ntext|list-item {\n    display: block;\n}\ntext|number {\n    display:none;\n}\n\ntext|a {\n    color: blue;\n    text-decoration: underline;\n    cursor: pointer;\n}\n.webodf-inactiveLinks text|a {\n    cursor: text;\n}\ntext|note-citation {\n    vertical-align: super;\n    font-size: smaller;\n}\ntext|note-body {\n    display: none;\n}\ntext|note:hover text|note-citation {\n    background: #dddddd;\n}\ntext|note:hover text|note-body {\n    display: block;\n    left:1em;\n    max-width: 80%;\n    position: absolute;\n    background: #ffffaa;\n}\nsvg|title, svg|desc {\n    display: none;\n}\nvideo {\n    width: 100%;\n    height: 100%\n}\n\n/* below set up the cursor */\ncursor|cursor {\n    display: inline;\n    width: 0;\n    height: 1em;\n    /* making the position relative enables the avatar to use\n       the cursor as reference for its absolute position */\n    position: relative;\n    z-index: 1;\n    pointer-events: none;\n}\n\ncursor|cursor > .caret {\n    /* IMPORTANT: when changing these values ensure DEFAULT_CARET_TOP and DEFAULT_CARET_HEIGHT\n        in Caret.js remain in sync */\n    display: inline;\n    position: absolute;\n    top: 5%; /* push down the caret; 0px can do the job, 5% looks better, 10% is a bit over */\n    height: 1em;\n    border-left: 2px solid black;\n    outline: none;\n}\n\ncursor|cursor > .handle {\n    padding: 3px;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n    border: none !important;\n    border-radius: 5px;\n    opacity: 0.3;\n}\n\ncursor|cursor > .handle > img {\n    border-radius: 5px;\n}\n\ncursor|cursor > .handle.active {\n    opacity: 0.8;\n}\n\ncursor|cursor > .handle:after {\n    content: ' ';\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 8.7px 5px 0 5px;\n    border-color: black transparent transparent transparent;\n\n    top: 100%;\n    left: 43%;\n}\n\n/** Input Method Editor input pane & behaviours */\n/* not within a cursor */\n#eventTrap {\n    height: auto;\n    display: block;\n    position: absolute;\n    width: 1px;\n    outline: none;\n    opacity: 0;\n    color: rgba(255, 255, 255, 0); /* hide the blinking caret by setting the colour to fully transparent */\n    overflow: hidden; /* The overflow visibility is used to hide and show characters being entered */\n    pointer-events: none;\n}\n\n/* within a cursor */\ncursor|cursor > #composer {\n    text-decoration: underline;\n}\n\ncursor|cursor[cursor|composing=\"true\"] > #composer {\n    display: inline-block;\n    height: auto;\n    width: auto;\n}\n\ncursor|cursor[cursor|composing=\"true\"] {\n    display: inline-block;\n    width: auto;\n    height: inherit;\n}\n\ncursor|cursor[cursor|composing=\"true\"] > .caret {\n    /* during composition, the caret should be pushed along by the composition text, inline with the text */\n    position: static;\n    /* as it is now part of an inline-block, it will no longer need correct to top or height values to align properly */\n    height: auto !important;\n    top: auto !important;\n}\n\neditinfo|editinfo {\n    /* Empty or invisible display:inline elements respond very badly to mouse selection.\n       Inline blocks are much more reliably selectable in Chrome & friends */\n    display: inline-block;\n}\n\n.editInfoMarker {\n    position: absolute;\n    width: 10px;\n    height: 100%;\n    left: -20px;\n    opacity: 0.8;\n    top: 0;\n    border-radius: 5px;\n    background-color: transparent;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n}\n.editInfoMarker:hover {\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 1);\n}\n\n.editInfoHandle {\n    position: absolute;\n    background-color: black;\n    padding: 5px;\n    border-radius: 5px;\n    opacity: 0.8;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n    bottom: 100%;\n    margin-bottom: 10px;\n    z-index: 3;\n    left: -25px;\n}\n.editInfoHandle:after {\n    content: ' ';\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 8.7px 5px 0 5px;\n    border-color: black transparent transparent transparent;\n\n    top: 100%;\n    left: 5px;\n}\n.editInfo {\n    font-family: sans-serif;\n    font-weight: normal;\n    font-style: normal;\n    text-decoration: none;\n    color: white;\n    width: 100%;\n    height: 12pt;\n}\n.editInfoColor {\n    float: left;\n    width: 10pt;\n    height: 10pt;\n    border: 1px solid white;\n}\n.editInfoAuthor {\n    float: left;\n    margin-left: 5pt;\n    font-size: 10pt;\n    text-align: left;\n    height: 12pt;\n    line-height: 12pt;\n}\n.editInfoTime {\n    float: right;\n    margin-left: 30pt;\n    font-size: 8pt;\n    font-style: italic;\n    color: yellow;\n    height: 12pt;\n    line-height: 12pt;\n}\n\n.annotationWrapper {\n    display: inline;\n    position: relative;\n}\n\n.annotationRemoveButton:before {\n    content: '\u00d7';\n    color: white;\n    padding: 5px;\n    line-height: 1em;\n}\n\n.annotationRemoveButton {\n    width: 20px;\n    height: 20px;\n    border-radius: 10px;\n    background-color: black;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n    position: absolute;\n    top: -10px;\n    left: -10px;\n    z-index: 3;\n    text-align: center;\n    font-family: sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    text-decoration: none;\n    font-size: 15px;\n}\n.annotationRemoveButton:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, 1);\n}\n\n.annotationNote {\n    width: 4cm;\n    position: absolute;\n    display: inline;\n    z-index: 10;\n}\n.annotationNote > office|annotation {\n    display: block;\n    text-align: left;\n}\n\n.annotationConnector {\n    position: absolute;\n    display: inline;\n    z-index: 2;\n    border-top: 1px dashed brown;\n}\n.annotationConnector.angular {\n    -moz-transform-origin: left top;\n    -webkit-transform-origin: left top;\n    -ms-transform-origin: left top;\n    transform-origin: left top;\n}\n.annotationConnector.horizontal {\n    left: 0;\n}\n.annotationConnector.horizontal:before {\n    content: '';\n    display: inline;\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 8.7px 5px 0 5px;\n    border-color: brown transparent transparent transparent;\n    top: -1px;\n    left: -5px;\n}\n\noffice|annotation {\n    width: 100%;\n    height: 100%;\n    display: none;\n    background: rgb(198, 238, 184);\n    background: -moz-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: -webkit-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: -o-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: -ms-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: linear-gradient(180deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    box-shadow: 0 3px 4px -3px #ccc;\n}\n\noffice|annotation > dc|creator {\n    display: block;\n    font-size: 10pt;\n    font-weight: normal;\n    font-style: normal;\n    font-family: sans-serif;\n    color: white;\n    background-color: brown;\n    padding: 4px;\n}\noffice|annotation > dc|date {\n    display: block;\n    font-size: 10pt;\n    font-weight: normal;\n    font-style: normal;\n    font-family: sans-serif;\n    border: 4px solid transparent;\n    color: black;\n}\noffice|annotation > text|list {\n    display: block;\n    padding: 5px;\n}\n\n/* This is very temporary CSS. This must go once\n * we start bundling webodf-default ODF styles for annotations.\n */\noffice|annotation text|p {\n    font-size: 10pt;\n    color: black;\n    font-weight: normal;\n    font-style: normal;\n    text-decoration: none;\n    font-family: sans-serif;\n}\n\ndc|*::selection {\n    background: transparent;\n}\ndc|*::-moz-selection {\n    background: transparent;\n}\n\n#annotationsPane {\n    background-color: #EAEAEA;\n    width: 4cm;\n    height: 100%;\n    display: none;\n    position: absolute;\n    outline: 1px solid #ccc;\n}\n\n.webodf-annotationHighlight {\n    background-color: yellow;\n    position: relative;\n}\n\n.webodf-selectionOverlay {\n    position: absolute;\n    pointer-events: none;\n    top: 0;\n    left: 0;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 15;\n}\n.webodf-selectionOverlay > polygon {\n    fill-opacity: 0.3;\n    stroke-opacity: 0.8;\n    stroke-width: 1;\n    fill-rule: evenodd;\n}\n\n.webodf-selectionOverlay > .webodf-draggable {\n    fill-opacity: 0.8;\n    stroke-opacity: 0;\n    stroke-width: 8;\n    pointer-events: all;\n    display: none;\n\n    -moz-transform-origin: center center;\n    -webkit-transform-origin: center center;\n    -ms-transform-origin: center center;\n    transform-origin: center center;\n}\n\n#imageSelector {\n    display: none;\n    position: absolute;\n    border-style: solid;\n    border-color: black;\n}\n\n#imageSelector > div {\n    width: 5px;\n    height: 5px;\n    display: block;\n    position: absolute;\n    border: 1px solid black;\n    background-color: #ffffff;\n}\n\n#imageSelector > .topLeft {\n    top: -4px;\n    left: -4px;\n}\n\n#imageSelector > .topRight {\n    top: -4px;\n    right: -4px;\n}\n\n#imageSelector > .bottomRight {\n    right: -4px;\n    bottom: -4px;\n}\n\n#imageSelector > .bottomLeft {\n    bottom: -4px;\n    left: -4px;\n}\n\n#imageSelector > .topMiddle {\n    top: -4px;\n    left: 50%;\n    margin-left: -2.5px; /* half of the width defined in #imageSelector > div */\n}\n\n#imageSelector > .rightMiddle {\n    top: 50%;\n    right: -4px;\n    margin-top: -2.5px; /* half of the height defined in #imageSelector > div */\n}\n\n#imageSelector > .bottomMiddle {\n    bottom: -4px;\n    left: 50%;\n    margin-left: -2.5px; /* half of the width defined in #imageSelector > div */\n}\n\n#imageSelector > .leftMiddle {\n    top: 50%;\n    left: -4px;\n    margin-top: -2.5px; /* half of the height defined in #imageSelector > div */\n}\n\ndiv.webodf-customScrollbars::-webkit-scrollbar\n{\n    width: 8px;\n    height: 8px;\n    background-color: transparent;\n}\n\ndiv.webodf-customScrollbars::-webkit-scrollbar-track\n{\n    background-color: transparent;\n}\n\ndiv.webodf-customScrollbars::-webkit-scrollbar-thumb\n{\n    background-color: #444;\n    border-radius: 4px;\n}\n\n.webodf-hyperlinkTooltip {\n    display: none;\n    color: white;\n    background-color: black;\n    border-radius: 5px;\n    box-shadow: 2px 2px 5px gray;\n    padding: 3px;\n    position: absolute;\n    max-width: 210px;\n    text-align: left;\n    word-break: break-all;\n    z-index: 16;\n}\n\n.webodf-hyperlinkTooltipText {\n    display: block;\n    font-weight: bold;\n}\n";
