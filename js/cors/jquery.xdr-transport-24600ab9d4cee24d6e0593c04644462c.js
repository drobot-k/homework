(function(t){"use strict"
"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?t(require("jquery")):t(window.jQuery)})(function(t){"use strict"
window.XDomainRequest&&!t.support.cors&&t.ajaxTransport(function(e){var o
if(e.crossDomain&&e.async)return e.timeout&&(e.xdrTimeout=e.timeout,delete e.timeout),{send:function(n,u){var r=/\?/.test(e.url)?"&":"?"
function i(e,n,r,i){o.onload=o.onerror=o.ontimeout=t.noop,o=null,u(e,n,r,i)}o=new XDomainRequest,"DELETE"===e.type?(e.url=e.url+r+"_method=DELETE",e.type="POST"):"PUT"===e.type?(e.url=e.url+r+"_method=PUT",e.type="POST"):"PATCH"===e.type&&(e.url=e.url+r+"_method=PATCH",e.type="POST"),o.open(e.type,e.url),o.onload=function(){i(200,"OK",{text:o.responseText},"Content-Type: "+o.contentType)},o.onerror=function(){i(404,"Not Found")},e.xdrTimeout&&(o.ontimeout=function(){i(0,"timeout")},o.timeout=e.xdrTimeout),o.send(e.hasContent&&e.data||null)},abort:function(){o&&(o.onerror=t.noop(),o.abort())}}})})
