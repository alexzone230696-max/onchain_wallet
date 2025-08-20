(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.i_(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.b(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.hT(b)
return new s(c,this)}:function(){if(s===null)s=A.hT(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.hT(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
hZ(a,b,c,d){return{i:a,p:b,e:c,x:d}},
h2(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.hW==null){A.mp()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.h(A.hB("Return interceptor for "+A.t(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.fG
if(o==null)o=$.fG=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.mt(a)
if(p!=null)return p
if(typeof a=="function")return B.av
s=Object.getPrototypeOf(a)
if(s==null)return B.a3
if(s===Object.prototype)return B.a3
if(typeof q=="function"){o=$.fG
if(o==null)o=$.fG=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.R,enumerable:false,writable:true,configurable:true})
return B.R}return B.R},
ij(a,b){if(a<0||a>4294967295)throw A.h(A.a8(a,0,4294967295,"length",null))
return J.ks(new Array(a),b)},
ik(a,b){if(a<0)throw A.h(A.a5("Length must be a non-negative integer: "+a,null))
return A.b(new Array(a),b.h("q<0>"))},
ks(a,b){var s=A.b(a,b.h("q<0>"))
s.$flags=1
return s},
b5(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bP.prototype
return J.d1.prototype}if(typeof a=="string")return J.bd.prototype
if(a==null)return J.bQ.prototype
if(typeof a=="boolean")return J.bN.prototype
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.H.prototype
if(typeof a=="symbol")return J.bf.prototype
if(typeof a=="bigint")return J.be.prototype
return a}if(a instanceof A.f)return a
return J.h2(a)},
b6(a){if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.H.prototype
if(typeof a=="symbol")return J.bf.prototype
if(typeof a=="bigint")return J.be.prototype
return a}if(a instanceof A.f)return a
return J.h2(a)},
b7(a){if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.H.prototype
if(typeof a=="symbol")return J.bf.prototype
if(typeof a=="bigint")return J.be.prototype
return a}if(a instanceof A.f)return a
return J.h2(a)},
jr(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.H.prototype
if(typeof a=="symbol")return J.bf.prototype
if(typeof a=="bigint")return J.be.prototype
return a}if(a instanceof A.f)return a
return J.h2(a)},
hf(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.b5(a).Z(a,b)},
jX(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.ms(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b6(a).k(a,b)},
i4(a,b){return J.b7(a).n(a,b)},
jY(a){return J.jr(a).ci(a)},
jZ(a,b,c){return J.jr(a).cj(a,b,c)},
hg(a,b){return J.b7(a).K(a,b)},
aw(a){return J.b5(a).gB(a)},
aU(a){return J.b7(a).gF(a)},
ar(a){return J.b6(a).gp(a)},
k_(a){return J.b5(a).gG(a)},
dF(a,b,c){return J.b7(a).ac(a,b,c)},
k0(a,b){return J.b7(a).cF(a,b)},
k1(a,b){return J.b7(a).cs(a,b)},
a4(a){return J.b5(a).j(a)},
d_:function d_(){},
bN:function bN(){},
bQ:function bQ(){},
G:function G(){},
aN:function aN(){},
dg:function dg(){},
ch:function ch(){},
H:function H(){},
be:function be(){},
bf:function bf(){},
q:function q(a){this.$ti=a},
d0:function d0(){},
ew:function ew(a){this.$ti=a},
bA:function bA(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bR:function bR(){},
bP:function bP(){},
d1:function d1(){},
bd:function bd(){}},A={hr:function hr(){},
kz(a){return new A.bg("Field '"+a+"' has been assigned during initialization.")},
iw(a){return new A.bg("Field '"+a+"' has not been initialized.")},
kA(a){return new A.bg("Field '"+a+"' has already been initialized.")},
aQ(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hz(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cJ(a,b,c){return a},
hX(a){var s,r
for(s=$.a9.length,r=0;r<s;++r)if(a===$.a9[r])return!0
return!1},
hy(a,b,c,d){A.di(b,"start")
if(c!=null){A.di(c,"end")
if(b>c)A.a0(A.a8(b,0,c,"start",null))}return new A.cc(a,b,c,d.h("cc<0>"))},
ix(a,b,c,d){if(t.V.b(a))return new A.bI(a,b,c.h("@<0>").u(d).h("bI<1,2>"))
return new A.aB(a,b,c.h("@<0>").u(d).h("aB<1,2>"))},
ih(){return new A.bm("No element")},
bo:function bo(){},
bE:function bE(a,b){this.a=a
this.$ti=b},
cp:function cp(){},
ax:function ax(a,b){this.a=a
this.$ti=b},
bg:function bg(a){this.a=a},
eT:function eT(){},
n:function n(){},
L:function L(){},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aY:function aY(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aB:function aB(a,b,c){this.a=a
this.b=b
this.$ti=c},
bI:function bI(a,b,c){this.a=a
this.b=b
this.$ti=c},
bW:function bW(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
X:function X(a,b,c){this.a=a
this.b=b
this.$ti=c},
ck:function ck(a,b,c){this.a=a
this.b=b
this.$ti=c},
cl:function cl(a,b,c){this.a=a
this.b=b
this.$ti=c},
aV:function aV(a){this.$ti=a},
bJ:function bJ(a){this.$ti=a},
U:function U(){},
c6:function c6(a,b){this.a=a
this.$ti=b},
cF:function cF(){},
jy(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
ms(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
t(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a4(a)
return s},
c4(a){var s,r=$.iB
if(r==null)r=$.iB=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dh(a){var s,r,q,p
if(a instanceof A.f)return A.a_(A.b8(a),null)
s=J.b5(a)
if(s===B.aq||s===B.aw||t.ak.b(a)){r=B.T(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.a_(A.b8(a),null)},
kP(a){var s,r,q
if(a==null||typeof a=="number"||A.fV(a))return J.a4(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.aJ)return a.j(0)
if(a instanceof A.cx)return a.hm(!0)
s=$.jW()
for(r=0;r<1;++r){q=s[r].hd(a)
if(q!=null)return q}return"Instance of '"+A.dh(a)+"'"},
iA(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
kQ(a){var s,r,q,p=A.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.au)(a),++r){q=a[r]
if(!A.fW(q))throw A.h(A.cI(q))
if(q<=65535)B.a.n(p,q)
else if(q<=1114111){B.a.n(p,55296+(B.b.a4(q-65536,10)&1023))
B.a.n(p,56320+(q&1023))}else throw A.h(A.cI(q))}return A.iA(p)},
iC(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.fW(q))throw A.h(A.cI(q))
if(q<0)throw A.h(A.cI(q))
if(q>65535)return A.kQ(a)}return A.iA(a)},
kR(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bk(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.a4(s,10)|55296)>>>0,s&1023|56320)}}throw A.h(A.a8(a,0,1114111,null,null))},
bj(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kO(a){var s=A.bj(a).getUTCFullYear()+0
return s},
kM(a){var s=A.bj(a).getUTCMonth()+1
return s},
kI(a){var s=A.bj(a).getUTCDate()+0
return s},
kJ(a){var s=A.bj(a).getUTCHours()+0
return s},
kL(a){var s=A.bj(a).getUTCMinutes()+0
return s},
kN(a){var s=A.bj(a).getUTCSeconds()+0
return s},
kK(a){var s=A.bj(a).getUTCMilliseconds()+0
return s},
kH(a){var s=a.$thrownJsError
if(s==null)return null
return A.aS(s)},
iD(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.J(a,s)
a.$thrownJsError=s
s.stack=b.j(0)}},
a(a,b){if(a==null)J.ar(a)
throw A.h(A.h0(a,b))},
h0(a,b){var s,r="index"
if(!A.fW(b))return new A.ae(!0,b,r,null)
s=J.ar(a)
if(b<0||b>=s)return A.hn(b,s,a,r)
return new A.bl(null,null,!0,b,r,"Value not in range")},
mj(a,b,c){if(a>c)return A.a8(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.a8(b,a,c,"end",null)
return new A.ae(!0,b,"end",null)},
cI(a){return new A.ae(!0,a,null,null)},
h(a){return A.J(a,new Error())},
J(a,b){var s
if(a==null)a=new A.aD()
b.dartException=a
s=A.mz
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
mz(){return J.a4(this.dartException)},
a0(a,b){throw A.J(a,b==null?new Error():b)},
B(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.a0(A.lE(a,b,c),s)},
lE(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.ci("'"+s+"': Cannot "+o+" "+l+k+n)},
au(a){throw A.h(A.af(a))},
aE(a){var s,r,q,p,o,n
a=A.jx(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.f2(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
f3(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
iL(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
hs(a,b){var s=b==null,r=s?null:b.method
return new A.d5(a,r,s?null:b.receiver)},
av(a){var s
if(a==null)return new A.eK(a)
if(a instanceof A.bL){s=a.a
return A.aT(a,s==null?A.j(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.aT(a,a.dartException)
return A.ma(a)},
aT(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ma(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.a4(r,16)&8191)===10)switch(q){case 438:return A.aT(a,A.hs(A.t(s)+" (Error "+q+")",null))
case 445:case 5007:A.t(s)
return A.aT(a,new A.c2())}}if(a instanceof TypeError){p=$.jF()
o=$.jG()
n=$.jH()
m=$.jI()
l=$.jL()
k=$.jM()
j=$.jK()
$.jJ()
i=$.jO()
h=$.jN()
g=p.U(s)
if(g!=null)return A.aT(a,A.hs(A.l(s),g))
else{g=o.U(s)
if(g!=null){g.method="call"
return A.aT(a,A.hs(A.l(s),g))}else if(n.U(s)!=null||m.U(s)!=null||l.U(s)!=null||k.U(s)!=null||j.U(s)!=null||m.U(s)!=null||i.U(s)!=null||h.U(s)!=null){A.l(s)
return A.aT(a,new A.c2())}}return A.aT(a,new A.dn(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ca()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.aT(a,new A.ae(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ca()
return a},
aS(a){var s
if(a instanceof A.bL)return a.b
if(a==null)return new A.cy(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.cy(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
dE(a){if(a==null)return J.aw(a)
if(typeof a=="object")return A.c4(a)
return J.aw(a)},
mf(a){if(typeof a=="number")return B.at.gB(a)
if(a instanceof A.dA)return A.c4(a)
if(a instanceof A.cx)return a.gB(a)
return A.dE(a)},
jq(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
lO(a,b,c,d,e,f){t.Z.a(a)
switch(A.ak(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.h(new A.fs("Unsupported number of arguments for wrapped closure"))},
cK(a,b){var s=a.$identity
if(!!s)return s
s=A.mg(a,b)
a.$identity=s
return s},
mg(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.lO)},
kf(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.dk().constructor.prototype):Object.create(new A.bc(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.id(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.kb(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.id(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
kb(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.h("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.k7)}throw A.h("Error in functionType of tearoff")},
kc(a,b,c,d){var s=A.ib
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
id(a,b,c,d){if(c)return A.ke(a,b,d)
return A.kc(b.length,d,a,b)},
kd(a,b,c,d){var s=A.ib,r=A.k8
switch(b?-1:a){case 0:throw A.h(new A.dj("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
ke(a,b,c){var s,r
if($.i9==null)$.i9=A.i8("interceptor")
if($.ia==null)$.ia=A.i8("receiver")
s=b.length
r=A.kd(s,c,a,b)
return r},
hT(a){return A.kf(a)},
k7(a,b){return A.cD(v.typeUniverse,A.b8(a.a),b)},
ib(a){return a.a},
k8(a){return a.b},
i8(a){var s,r,q,p=new A.bc("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.h(A.a5("Field name "+a+" not found.",null))},
mm(a){return v.getIsolateTag(a)},
mh(a){var s,r=A.b([],t.s)
if(a==null)return r
if(Array.isArray(a)){for(s=0;s<a.length;++s)r.push(String(a[s]))
return r}r.push(String(a))
return r},
n8(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mt(a){var s,r,q,p,o,n=A.l($.js.$1(a)),m=$.h1[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.h6[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.z($.jn.$2(a,n))
if(q!=null){m=$.h1[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.h6[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.ha(s)
$.h1[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.h6[n]=s
return s}if(p==="-"){o=A.ha(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.ju(a,s)
if(p==="*")throw A.h(A.hB(n))
if(v.leafTags[n]===true){o=A.ha(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.ju(a,s)},
ju(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.hZ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ha(a){return J.hZ(a,!1,null,!!a.$ia6)},
mv(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.ha(s)
else return J.hZ(s,c,null,null)},
mp(){if(!0===$.hW)return
$.hW=!0
A.mq()},
mq(){var s,r,q,p,o,n,m,l
$.h1=Object.create(null)
$.h6=Object.create(null)
A.mo()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.jw.$1(o)
if(n!=null){m=A.mv(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
mo(){var s,r,q,p,o,n,m=B.ah()
m=A.bu(B.ai,A.bu(B.aj,A.bu(B.U,A.bu(B.U,A.bu(B.ak,A.bu(B.al,A.bu(B.am(B.T),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.js=new A.h3(p)
$.jn=new A.h4(o)
$.jw=new A.h5(n)},
bu(a,b){return a(b)||b},
mi(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
kx(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.h(A.hm("Illegal RegExp pattern ("+String(o)+")",a,null))},
mk(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jx(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bw(a,b,c){var s=A.mw(a,b,c)
return s},
mw(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.jx(b),"g"),A.mk(c))},
bG:function bG(){},
bM:function bM(a,b){this.a=a
this.$ti=b},
c8:function c8(){},
f2:function f2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
c2:function c2(){},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a){this.a=a},
eK:function eK(a){this.a=a},
bL:function bL(a,b){this.a=a
this.b=b},
cy:function cy(a){this.a=a
this.b=null},
aJ:function aJ(){},
cP:function cP(){},
cQ:function cQ(){},
dl:function dl(){},
dk:function dk(){},
bc:function bc(a,b){this.a=a
this.b=b},
dj:function dj(a){this.a=a},
ay:function ay(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eF:function eF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aX:function aX(a,b){this.a=a
this.$ti=b},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
az:function az(a,b){this.a=a
this.$ti=b},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bS:function bS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h3:function h3(a){this.a=a},
h4:function h4(a){this.a=a},
h5:function h5(a){this.a=a},
cx:function cx(){},
d4:function d4(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
my(a){throw A.J(A.iw(a),new Error())},
mx(a){throw A.J(A.kA(a),new Error())},
i_(a){throw A.J(A.kz(a),new Error())},
fq(a){var s=new A.fp(a)
return s.b=s},
fp:function fp(a){this.a=a
this.b=null},
lC(a){return a},
fU(a,b,c){},
kE(a,b,c){var s
A.fU(a,b,c)
s=new DataView(a,b)
return s},
iy(a){return new Uint8Array(a)},
kF(a,b,c){var s
A.fU(a,b,c)
s=new Uint8Array(a,b,c)
return s},
b2(a,b,c){if(a>>>0!==a||a>=c)throw A.h(A.h0(b,a))},
lD(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.h(A.mj(a,b,c))
return b},
aZ:function aZ(){},
c0:function c0(){},
dB:function dB(a){this.a=a},
bY:function bY(){},
bh:function bh(){},
bZ:function bZ(){},
c_:function c_(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
c1:function c1(){},
b_:function b_(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
hw(a,b){var s=b.c
return s==null?b.c=A.cB(a,"Q",[b.x]):s},
iF(a){var s=a.w
if(s===6||s===7)return A.iF(a.x)
return s===11||s===12},
kU(a){return a.as},
at(a){return A.fM(v.typeUniverse,a,!1)},
b3(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.b3(a1,s,a3,a4)
if(r===s)return a2
return A.j4(a1,r,!0)
case 7:s=a2.x
r=A.b3(a1,s,a3,a4)
if(r===s)return a2
return A.j3(a1,r,!0)
case 8:q=a2.y
p=A.bt(a1,q,a3,a4)
if(p===q)return a2
return A.cB(a1,a2.x,p)
case 9:o=a2.x
n=A.b3(a1,o,a3,a4)
m=a2.y
l=A.bt(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.hL(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.bt(a1,j,a3,a4)
if(i===j)return a2
return A.j5(a1,k,i)
case 11:h=a2.x
g=A.b3(a1,h,a3,a4)
f=a2.y
e=A.m7(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.j2(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.bt(a1,d,a3,a4)
o=a2.x
n=A.b3(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.hM(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.h(A.cN("Attempted to substitute unexpected RTI kind "+a0))}},
bt(a,b,c,d){var s,r,q,p,o=b.length,n=A.fR(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.b3(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
m8(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.fR(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.b3(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
m7(a,b,c,d){var s,r=b.a,q=A.bt(a,r,c,d),p=b.b,o=A.bt(a,p,c,d),n=b.c,m=A.m8(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.dw()
s.a=q
s.b=o
s.c=m
return s},
b(a,b){a[v.arrayRti]=b
return a},
jp(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.mn(s)
return a.$S()}return null},
mr(a,b){var s
if(A.iF(b))if(a instanceof A.aJ){s=A.jp(a)
if(s!=null)return s}return A.b8(a)},
b8(a){if(a instanceof A.f)return A.P(a)
if(Array.isArray(a))return A.Z(a)
return A.hP(J.b5(a))},
Z(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
P(a){var s=a.$ti
return s!=null?s:A.hP(a)},
hP(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.lL(a,s)},
lL(a,b){var s=a instanceof A.aJ?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.lm(v.typeUniverse,s.name)
b.$ccache=r
return r},
mn(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.fM(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hV(a){return A.b4(A.P(a))},
hS(a){var s
if(a instanceof A.cx)return A.ml(a.$r,a.hl())
s=a instanceof A.aJ?A.jp(a):null
if(s!=null)return s
if(t.dm.b(a))return J.k_(a).a
if(Array.isArray(a))return A.Z(a)
return A.b8(a)},
b4(a){var s=a.r
return s==null?a.r=new A.dA(a):s},
ml(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.a(q,0)
s=A.cD(v.typeUniverse,A.hS(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.a(q,r)
s=A.j6(v.typeUniverse,s,A.hS(q[r]))}return A.cD(v.typeUniverse,s,a)},
aq(a){return A.b4(A.fM(v.typeUniverse,a,!1))},
lK(a){var s=this
s.b=A.m5(s)
return s.b(a)},
m5(a){var s,r,q,p,o
if(a===t.K)return A.lU
if(A.b9(a))return A.lY
s=a.w
if(s===6)return A.lI
if(s===1)return A.jg
if(s===7)return A.lP
r=A.m4(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.b9)){a.f="$i"+q
if(q==="o")return A.lS
if(a===t.m)return A.lR
return A.lX}}else if(s===10){p=A.mi(a.x,a.y)
o=p==null?A.jg:p
return o==null?A.j(o):o}return A.lG},
m4(a){if(a.w===8){if(a===t.S)return A.fW
if(a===t.i||a===t.o)return A.lT
if(a===t.N)return A.lW
if(a===t.y)return A.fV}return null},
lJ(a){var s=this,r=A.lF
if(A.b9(s))r=A.lv
else if(s===t.K)r=A.j
else if(A.bv(s)){r=A.lH
if(s===t.h6)r=A.lt
else if(s===t.dk)r=A.z
else if(s===t.fQ)r=A.aj
else if(s===t.cg)r=A.jb
else if(s===t.cD)r=A.ls
else if(s===t.B)r=A.E}else if(s===t.S)r=A.ak
else if(s===t.N)r=A.l
else if(s===t.y)r=A.ja
else if(s===t.o)r=A.lu
else if(s===t.i)r=A.lr
else if(s===t.m)r=A.d
s.a=r
return s.a(a)},
lG(a){var s=this
if(a==null)return A.bv(s)
return A.jt(v.typeUniverse,A.mr(a,s),s)},
lI(a){if(a==null)return!0
return this.x.b(a)},
lX(a){var s,r=this
if(a==null)return A.bv(r)
s=r.f
if(a instanceof A.f)return!!a[s]
return!!J.b5(a)[s]},
lS(a){var s,r=this
if(a==null)return A.bv(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.f)return!!a[s]
return!!J.b5(a)[s]},
lR(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.f)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
jf(a){if(typeof a=="object"){if(a instanceof A.f)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
lF(a){var s=this
if(a==null){if(A.bv(s))return a}else if(s.b(a))return a
throw A.J(A.jc(a,s),new Error())},
lH(a){var s=this
if(a==null||s.b(a))return a
throw A.J(A.jc(a,s),new Error())},
jc(a,b){return new A.br("TypeError: "+A.iW(a,A.a_(b,null)))},
me(a,b,c,d){if(A.jt(v.typeUniverse,a,b))return a
throw A.J(A.le("The type argument '"+A.a_(a,null)+"' is not a subtype of the type variable bound '"+A.a_(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
iW(a,b){return A.e_(a)+": type '"+A.a_(A.hS(a),null)+"' is not a subtype of type '"+b+"'"},
le(a){return new A.br("TypeError: "+a)},
ad(a,b){return new A.br("TypeError: "+A.iW(a,b))},
lP(a){var s=this
return s.x.b(a)||A.hw(v.typeUniverse,s).b(a)},
lU(a){return a!=null},
j(a){if(a!=null)return a
throw A.J(A.ad(a,"Object"),new Error())},
lY(a){return!0},
lv(a){return a},
jg(a){return!1},
fV(a){return!0===a||!1===a},
ja(a){if(!0===a)return!0
if(!1===a)return!1
throw A.J(A.ad(a,"bool"),new Error())},
aj(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.J(A.ad(a,"bool?"),new Error())},
lr(a){if(typeof a=="number")return a
throw A.J(A.ad(a,"double"),new Error())},
ls(a){if(typeof a=="number")return a
if(a==null)return a
throw A.J(A.ad(a,"double?"),new Error())},
fW(a){return typeof a=="number"&&Math.floor(a)===a},
ak(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.J(A.ad(a,"int"),new Error())},
lt(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.J(A.ad(a,"int?"),new Error())},
lT(a){return typeof a=="number"},
lu(a){if(typeof a=="number")return a
throw A.J(A.ad(a,"num"),new Error())},
jb(a){if(typeof a=="number")return a
if(a==null)return a
throw A.J(A.ad(a,"num?"),new Error())},
lW(a){return typeof a=="string"},
l(a){if(typeof a=="string")return a
throw A.J(A.ad(a,"String"),new Error())},
z(a){if(typeof a=="string")return a
if(a==null)return a
throw A.J(A.ad(a,"String?"),new Error())},
d(a){if(A.jf(a))return a
throw A.J(A.ad(a,"JSObject"),new Error())},
E(a){if(a==null)return a
if(A.jf(a))return a
throw A.J(A.ad(a,"JSObject?"),new Error())},
jl(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.a_(a[q],b)
return s},
m0(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.jl(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.a_(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
jd(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.b([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.n(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.a(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.a_(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.a_(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.a_(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.a_(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.a_(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
a_(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.a_(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.a_(a.x,b)+">"
if(l===8){p=A.m9(a.x)
o=a.y
return o.length>0?p+("<"+A.jl(o,b)+">"):p}if(l===10)return A.m0(a,b)
if(l===11)return A.jd(a,b,null)
if(l===12)return A.jd(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
m9(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
ln(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
lm(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.fM(a,b,!1)
else if(typeof m=="number"){s=m
r=A.cC(a,5,"#")
q=A.fR(s)
for(p=0;p<s;++p)q[p]=r
o=A.cB(a,b,q)
n[b]=o
return o}else return m},
ll(a,b){return A.j8(a.tR,b)},
lk(a,b){return A.j8(a.eT,b)},
fM(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.j0(A.iZ(a,null,b,!1))
r.set(b,s)
return s},
cD(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.j0(A.iZ(a,b,c,!0))
q.set(c,r)
return r},
j6(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.hL(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
aR(a,b){b.a=A.lJ
b.b=A.lK
return b},
cC(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.ai(null,null)
s.w=b
s.as=c
r=A.aR(a,s)
a.eC.set(c,r)
return r},
j4(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.li(a,b,r,c)
a.eC.set(r,s)
return s},
li(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.b9(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.bv(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.ai(null,null)
q.w=6
q.x=b
q.as=c
return A.aR(a,q)},
j3(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.lg(a,b,r,c)
a.eC.set(r,s)
return s},
lg(a,b,c,d){var s,r
if(d){s=b.w
if(A.b9(b)||b===t.K)return b
else if(s===1)return A.cB(a,"Q",[b])
else if(b===t.P||b===t.T)return t.eH}r=new A.ai(null,null)
r.w=7
r.x=b
r.as=c
return A.aR(a,r)},
lj(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.ai(null,null)
s.w=13
s.x=b
s.as=q
r=A.aR(a,s)
a.eC.set(q,r)
return r},
cA(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
lf(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
cB(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.cA(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.ai(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.aR(a,r)
a.eC.set(p,q)
return q},
hL(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.cA(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.ai(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.aR(a,o)
a.eC.set(q,n)
return n},
j5(a,b,c){var s,r,q="+"+(b+"("+A.cA(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.ai(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.aR(a,s)
a.eC.set(q,r)
return r},
j2(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.cA(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.cA(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.lf(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.ai(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.aR(a,p)
a.eC.set(r,o)
return o},
hM(a,b,c,d){var s,r=b.as+("<"+A.cA(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.lh(a,b,c,r,d)
a.eC.set(r,s)
return s},
lh(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.fR(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.b3(a,b,r,0)
m=A.bt(a,c,r,0)
return A.hM(a,n,m,c!==m)}}l=new A.ai(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.aR(a,l)},
iZ(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
j0(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.l8(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.j_(a,r,l,k,!1)
else if(q===46)r=A.j_(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.b1(a.u,a.e,k.pop()))
break
case 94:k.push(A.lj(a.u,k.pop()))
break
case 35:k.push(A.cC(a.u,5,"#"))
break
case 64:k.push(A.cC(a.u,2,"@"))
break
case 126:k.push(A.cC(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.la(a,k)
break
case 38:A.l9(a,k)
break
case 63:p=a.u
k.push(A.j4(p,A.b1(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.j3(p,A.b1(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.l7(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.j1(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.lc(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.b1(a.u,a.e,m)},
l8(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
j_(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.ln(s,o.x)[p]
if(n==null)A.a0('No "'+p+'" in "'+A.kU(o)+'"')
d.push(A.cD(s,o,n))}else d.push(p)
return m},
la(a,b){var s,r=a.u,q=A.iY(a,b),p=b.pop()
if(typeof p=="string")b.push(A.cB(r,p,q))
else{s=A.b1(r,a.e,p)
switch(s.w){case 11:b.push(A.hM(r,s,q,a.n))
break
default:b.push(A.hL(r,s,q))
break}}},
l7(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.iY(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.b1(p,a.e,o)
q=new A.dw()
q.a=s
q.b=n
q.c=m
b.push(A.j2(p,r,q))
return
case-4:b.push(A.j5(p,b.pop(),s))
return
default:throw A.h(A.cN("Unexpected state under `()`: "+A.t(o)))}},
l9(a,b){var s=b.pop()
if(0===s){b.push(A.cC(a.u,1,"0&"))
return}if(1===s){b.push(A.cC(a.u,4,"1&"))
return}throw A.h(A.cN("Unexpected extended operation "+A.t(s)))},
iY(a,b){var s=b.splice(a.p)
A.j1(a.u,a.e,s)
a.p=b.pop()
return s},
b1(a,b,c){if(typeof c=="string")return A.cB(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.lb(a,b,c)}else return c},
j1(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.b1(a,b,c[s])},
lc(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.b1(a,b,c[s])},
lb(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.h(A.cN("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.h(A.cN("Bad index "+c+" for "+b.j(0)))},
jt(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.N(a,b,null,c,null)
r.set(c,s)}return s},
N(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.b9(d))return!0
s=b.w
if(s===4)return!0
if(A.b9(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.N(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.N(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.N(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.N(a,b.x,c,d,e))return!1
return A.N(a,A.hw(a,b),c,d,e)}if(s===6)return A.N(a,p,c,d,e)&&A.N(a,b.x,c,d,e)
if(q===7){if(A.N(a,b,c,d.x,e))return!0
return A.N(a,b,c,A.hw(a,d),e)}if(q===6)return A.N(a,b,c,p,e)||A.N(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.gT)return!0
if(q===12){if(b===t.g)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.N(a,j,c,i,e)||!A.N(a,i,e,j,c))return!1}return A.je(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.je(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.lQ(a,b,c,d,e)}if(o&&q===10)return A.lV(a,b,c,d,e)
return!1},
je(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.N(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.N(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.N(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.N(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.N(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
lQ(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.cD(a,b,r[o])
return A.j9(a,p,null,c,d.y,e)}return A.j9(a,b.y,null,c,d.y,e)},
j9(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.N(a,b[s],d,e[s],f))return!1
return!0},
lV(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.N(a,r[s],c,q[s],e))return!1
return!0},
bv(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.b9(a))if(s!==6)r=s===7&&A.bv(a.x)
return r},
b9(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
j8(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
fR(a){return a>0?new Array(a):v.typeUniverse.sEA},
ai:function ai(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
dw:function dw(){this.c=this.b=this.a=null},
dA:function dA(a){this.a=a},
dv:function dv(){},
br:function br(a){this.a=a},
l_(){var s,r,q
if(self.scheduleImmediate!=null)return A.mb()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.cK(new A.fg(s),1)).observe(r,{childList:true})
return new A.ff(s,r,q)}else if(self.setImmediate!=null)return A.mc()
return A.md()},
l0(a){self.scheduleImmediate(A.cK(new A.fh(t.M.a(a)),0))},
l1(a){self.setImmediate(A.cK(new A.fi(t.M.a(a)),0))},
l2(a){A.hA(B.S,t.M.a(a))},
hA(a,b){return A.ld(0,b)},
ld(a,b){var s=new A.fI()
s.cK(a,b)
return s},
ao(a){return new A.cm(new A.v($.y,a.h("v<0>")),a.h("cm<0>"))},
an(a,b){a.$2(0,null)
b.b=!0
return b.a},
aH(a,b){A.lw(a,b)},
am(a,b){b.a7(a)},
al(a,b){b.bj(A.av(a),A.aS(a))},
lw(a,b){var s,r,q=new A.fS(b),p=new A.fT(b)
if(a instanceof A.v)a.c8(q,p,t.z)
else{s=t.z
if(a instanceof A.v)a.av(q,p,s)
else{r=new A.v($.y,t._)
r.a=8
r.c=a
r.c8(q,p,s)}}},
ap(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.y.cq(new A.fY(s),t.H,t.S,t.z)},
hi(a){var s
if(t.C.b(a)){s=a.ga9()
if(s!=null)return s}return B.q},
km(a,b){var s
if(!b.b(null))throw A.h(A.dK(null,"computation","The type parameter is not nullable"))
s=new A.v($.y,b.h("v<0>"))
A.kY(a,new A.e6(null,s,b))
return s},
lM(a,b){if($.y===B.i)return null
return null},
lN(a,b){if($.y!==B.i)A.lM(a,b)
if(b==null)if(t.C.b(a)){b=a.ga9()
if(b==null){A.iD(a,B.q)
b=B.q}}else b=B.q
else if(t.C.b(a))A.iD(a,b)
return new A.aa(a,b)},
hH(a,b){var s=new A.v($.y,b.h("v<0>"))
b.a(a)
s.a=8
s.c=a
return s},
fw(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t._;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.kV()
b.b_(new A.aa(new A.ae(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.bZ(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.al()
b.aC(o.a)
A.b0(b,p)
return}b.a^=2
A.dD(null,null,b.b,t.M.a(new A.fx(o,b)))},
b0(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;!0;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.hR(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.b0(d.a,c)
q.a=l
k=l.a}p=d.a
j=p.c
q.b=n
q.c=j
if(o){i=c.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=c.b.b
if(n){p=p.b===h
p=!(p||p)}else p=!1
if(p){s.a(j)
A.hR(j.a,j.b)
return}g=$.y
if(g!==h)$.y=h
else g=null
c=c.c
if((c&15)===8)new A.fB(q,d,n).$0()
else if(o){if((c&1)!==0)new A.fA(q,j).$0()}else if((c&2)!==0)new A.fz(d,q).$0()
if(g!=null)$.y=g
c=q.c
if(c instanceof A.v){p=q.a.$ti
p=p.h("Q<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.aI(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.fw(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.aI(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
jj(a,b){var s
if(t.Q.b(a))return b.cq(a,t.z,t.K,t.l)
s=t.v
if(s.b(a))return s.a(a)
throw A.h(A.dK(a,"onError",u.c))},
m_(){var s,r
for(s=$.bs;s!=null;s=$.bs){$.cH=null
r=s.b
$.bs=r
if(r==null)$.cG=null
s.a.$0()}},
m6(){$.hQ=!0
try{A.m_()}finally{$.cH=null
$.hQ=!1
if($.bs!=null)$.i2().$1(A.jo())}},
jm(a){var s=new A.ds(a),r=$.cG
if(r==null){$.bs=$.cG=s
if(!$.hQ)$.i2().$1(A.jo())}else $.cG=r.b=s},
m3(a){var s,r,q,p=$.bs
if(p==null){A.jm(a)
$.cH=$.cG
return}s=new A.ds(a)
r=$.cH
if(r==null){s.b=p
$.bs=$.cH=s}else{q=r.b
s.b=q
$.cH=r.b=s
if(q==null)$.cG=s}},
mH(a,b){A.cJ(a,"stream",t.K)
return new A.dy(b.h("dy<0>"))},
kY(a,b){var s=$.y
if(s===B.i)return A.hA(a,t.M.a(b))
return A.hA(a,t.M.a(s.ck(b)))},
hR(a,b){A.m3(new A.fX(a,b))},
jk(a,b,c,d,e){var s,r=$.y
if(r===c)return d.$0()
$.y=c
s=r
try{r=d.$0()
return r}finally{$.y=s}},
m2(a,b,c,d,e,f,g){var s,r=$.y
if(r===c)return d.$1(e)
$.y=c
s=r
try{r=d.$1(e)
return r}finally{$.y=s}},
m1(a,b,c,d,e,f,g,h,i){var s,r=$.y
if(r===c)return d.$2(e,f)
$.y=c
s=r
try{r=d.$2(e,f)
return r}finally{$.y=s}},
dD(a,b,c,d){t.M.a(d)
if(B.i!==c){d=c.ck(d)
d=d}A.jm(d)},
fg:function fg(a){this.a=a},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(a){this.a=a},
fi:function fi(a){this.a=a},
fI:function fI(){},
fJ:function fJ(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=!1
this.$ti=b},
fS:function fS(a){this.a=a},
fT:function fT(a){this.a=a},
fY:function fY(a){this.a=a},
aa:function aa(a,b){this.a=a
this.b=b},
e6:function e6(a,b,c){this.a=a
this.b=b
this.c=c},
bp:function bp(){},
aF:function aF(a,b){this.a=a
this.$ti=b},
cz:function cz(a,b){this.a=a
this.$ti=b},
aG:function aG(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
v:function v(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
ft:function ft(a,b){this.a=a
this.b=b},
fy:function fy(a,b){this.a=a
this.b=b},
fx:function fx(a,b){this.a=a
this.b=b},
fv:function fv(a,b){this.a=a
this.b=b},
fu:function fu(a,b){this.a=a
this.b=b},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a,b){this.a=a
this.b=b},
fD:function fD(a){this.a=a},
fA:function fA(a,b){this.a=a
this.b=b},
fz:function fz(a,b){this.a=a
this.b=b},
ds:function ds(a){this.a=a
this.b=null},
dy:function dy(a){this.$ti=a},
cE:function cE(){},
fX:function fX(a,b){this.a=a
this.b=b},
dx:function dx(){},
fH:function fH(a,b){this.a=a
this.b=b},
iX(a,b){var s=a[b]
return s===a?null:s},
hJ(a,b,c){if(c==null)a[b]=a
else a[b]=c},
hI(){var s=Object.create(null)
A.hJ(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
D(a,b,c){return b.h("@<0>").u(c).h("ht<1,2>").a(A.jq(a,new A.ay(b.h("@<0>").u(c).h("ay<1,2>"))))},
eG(a,b){return new A.ay(a.h("@<0>").u(b).h("ay<1,2>"))},
hv(a){var s,r
if(A.hX(a))return"{...}"
s=new A.bn("")
try{r={}
B.a.n($.a9,a)
s.a+="{"
r.a=!0
a.ao(0,new A.eH(r,s))
s.a+="}"}finally{if(0>=$.a9.length)return A.a($.a9,-1)
$.a9.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cq:function cq(){},
bq:function bq(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
cr:function cr(a,b){this.a=a
this.$ti=b},
cs:function cs(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
u:function u(){},
aO:function aO(){},
eH:function eH(a,b){this.a=a
this.b=b},
lp(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.jU()
else s=new Uint8Array(o)
for(r=0;r<o;++r){q=b+r
if(!(q<a.length))return A.a(a,q)
p=a[q]
if((p&255)!==p)p=255
s[r]=p}return s},
lo(a,b,c,d){var s=a?$.jT():$.jS()
if(s==null)return null
if(0===c&&d===b.length)return A.j7(s,b)
return A.j7(s,b.subarray(c,d))},
j7(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
lq(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
fP:function fP(){},
fO:function fO(){},
cL:function cL(){},
fL:function fL(){},
dM:function dM(){},
fK:function fK(){},
dL:function dL(a){this.a=a},
bF:function bF(){},
cT:function cT(){},
cX:function cX(){},
fa:function fa(){},
fQ:function fQ(a){this.b=0
this.c=a},
dq:function dq(a){this.a=a},
fN:function fN(a){this.a=a
this.b=16
this.c=0},
S(a,b){var s,r=b.length
while(!0){if(a>0){s=a-1
if(!(s<r))return A.a(b,s)
s=b[s]===0}else s=!1
if(!s)break;--a}return a},
hF(a,b,c,d){var s,r,q,p=new Uint16Array(d),o=c-b
for(s=a.length,r=0;r<o;++r){q=b+r
if(!(q>=0&&q<s))return A.a(a,q)
q=a[q]
if(!(r<d))return A.a(p,r)
p[r]=q}return p},
cn(a){var s
if(a===0)return $.T()
if(a===1)return $.aI()
if(a===2)return $.jR()
if(Math.abs(a)<4294967296)return A.dt(B.b.aQ(a))
s=A.l3(a)
return s},
dt(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.S(4,s)
return new A.I(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.S(1,s)
return new A.I(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.b.a4(a,16)
r=A.S(2,s)
return new A.I(r===0?!1:o,s,r)}r=B.b.N(B.b.gam(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
if(!(q<r))return A.a(s,q)
s[q]=a&65535
a=B.b.N(a,65536)}r=A.S(r,s)
return new A.I(r===0?!1:o,s,r)},
l3(a){var s,r,q,p,o,n,m,l
if(isNaN(a)||a==1/0||a==-1/0)throw A.h(A.a5("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.T()
r=$.jQ()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.B(r)
if(!(p<8))return A.a(r,p)
r[p]=0}q=J.jY(B.aF.gcl(r))
q.$flags&2&&A.B(q,13)
q.setFloat64(0,a,!0)
o=(r[7]<<4>>>0)+(r[6]>>>4)-1075
n=new Uint16Array(4)
n[0]=(r[1]<<8>>>0)+r[0]
n[1]=(r[3]<<8>>>0)+r[2]
n[2]=(r[5]<<8>>>0)+r[4]
n[3]=r[6]&15|16
m=new A.I(!1,n,4)
if(o<0)l=m.aV(0,-o)
else l=o>0?m.a1(0,o):m
if(s)return l.a0(0)
return l},
hG(a,b,c,d){var s,r,q,p,o
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=a.length,q=d.$flags|0;s>=0;--s){p=s+c
if(!(s<r))return A.a(a,s)
o=a[s]
q&2&&A.B(d)
if(!(p>=0&&p<d.length))return A.a(d,p)
d[p]=o}for(s=c-1;s>=0;--s){q&2&&A.B(d)
if(!(s<d.length))return A.a(d,s)
d[s]=0}return b+c},
iU(a,b,c,d){var s,r,q,p,o,n,m,l=B.b.N(c,16),k=B.b.a_(c,16),j=16-k,i=B.b.a1(1,j)-1
for(s=b-1,r=a.length,q=d.$flags|0,p=0;s>=0;--s){if(!(s<r))return A.a(a,s)
o=a[s]
n=s+l+1
m=B.b.bd(o,j)
q&2&&A.B(d)
if(!(n>=0&&n<d.length))return A.a(d,n)
d[n]=(m|p)>>>0
p=B.b.a1(o&i,k)}q&2&&A.B(d)
if(!(l>=0&&l<d.length))return A.a(d,l)
d[l]=p},
iP(a,b,c,d){var s,r,q,p=B.b.N(c,16)
if(B.b.a_(c,16)===0)return A.hG(a,b,p,d)
s=b+p+1
A.iU(a,b,c,d)
for(r=d.$flags|0,q=p;--q,q>=0;){r&2&&A.B(d)
if(!(q<d.length))return A.a(d,q)
d[q]=0}r=s-1
if(!(r>=0&&r<d.length))return A.a(d,r)
if(d[r]===0)s=r
return s},
l6(a,b,c,d){var s,r,q,p,o,n,m=B.b.N(c,16),l=B.b.a_(c,16),k=16-l,j=B.b.a1(1,l)-1,i=a.length
if(!(m>=0&&m<i))return A.a(a,m)
s=B.b.bd(a[m],l)
r=b-m-1
for(q=d.$flags|0,p=0;p<r;++p){o=p+m+1
if(!(o<i))return A.a(a,o)
n=a[o]
o=B.b.a1(n&j,k)
q&2&&A.B(d)
if(!(p<d.length))return A.a(d,p)
d[p]=(o|s)>>>0
s=B.b.bd(n,l)}q&2&&A.B(d)
if(!(r>=0&&r<d.length))return A.a(d,r)
d[r]=s},
fm(a,b,c,d){var s,r,q,p,o=b-d
if(o===0)for(s=b-1,r=a.length,q=c.length;s>=0;--s){if(!(s<r))return A.a(a,s)
p=a[s]
if(!(s<q))return A.a(c,s)
o=p-c[s]
if(o!==0)return o}return o},
l4(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.a(a,o)
n=a[o]
if(!(o<r))return A.a(c,o)
p+=n+c[o]
q&2&&A.B(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=p>>>16}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.a(a,o)
p+=a[o]
q&2&&A.B(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=p>>>16}q&2&&A.B(e)
if(!(b>=0&&b<e.length))return A.a(e,b)
e[b]=p},
du(a,b,c,d,e){var s,r,q,p,o,n
for(s=a.length,r=c.length,q=e.$flags|0,p=0,o=0;o<d;++o){if(!(o<s))return A.a(a,o)
n=a[o]
if(!(o<r))return A.a(c,o)
p+=n-c[o]
q&2&&A.B(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=0-(B.b.a4(p,16)&1)}for(o=d;o<b;++o){if(!(o>=0&&o<s))return A.a(a,o)
p+=a[o]
q&2&&A.B(e)
if(!(o<e.length))return A.a(e,o)
e[o]=p&65535
p=0-(B.b.a4(p,16)&1)}},
iV(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k
if(a===0)return
for(s=b.length,r=d.length,q=d.$flags|0,p=0;--f,f>=0;e=l,c=o){o=c+1
if(!(c<s))return A.a(b,c)
n=b[c]
if(!(e>=0&&e<r))return A.a(d,e)
m=a*n+d[e]+p
l=e+1
q&2&&A.B(d)
d[e]=m&65535
p=B.b.N(m,65536)}for(;p!==0;e=l){if(!(e>=0&&e<r))return A.a(d,e)
k=d[e]+p
l=e+1
q&2&&A.B(d)
d[e]=k&65535
p=B.b.N(k,65536)}},
l5(a,b,c){var s,r,q,p=b.length
if(!(c>=0&&c<p))return A.a(b,c)
s=b[c]
if(s===a)return 65535
r=c-1
if(!(r>=0&&r<p))return A.a(b,r)
q=B.b.cI((s<<16|b[r])>>>0,a)
if(q>65535)return 65535
return q},
kj(a,b){a=A.J(a,new Error())
if(a==null)a=A.j(a)
a.stack=b.j(0)
throw a},
ah(a,b,c,d){var s,r=c?J.ik(a,d):J.ij(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bV(a,b,c){var s,r=A.b([],c.h("q<0>"))
for(s=J.aU(a);s.q();)B.a.n(r,c.a(s.gt()))
if(b)return r
r.$flags=1
return r},
ac(a,b){var s,r
if(Array.isArray(a))return A.b(a.slice(0),b.h("q<0>"))
s=A.b([],b.h("q<0>"))
for(r=J.aU(a);r.q();)B.a.n(s,r.gt())
return s},
kD(a,b,c){var s,r=J.ik(a,c)
for(s=0;s<a;++s)B.a.l(r,s,b.$1(s))
return r},
hu(a,b){var s=A.bV(a,!1,b)
s.$flags=3
return s},
iJ(a,b,c){var s,r,q,p
A.di(b,"start")
s=c-b
if(s<0)throw A.h(A.a8(c,b,null,"end",null))
if(s===0)return""
if(Array.isArray(a)){r=a
q=r.length
return A.iC(b>0||c<q?r.slice(b,c):r)}if(t.bm.b(a))return A.kX(a,b,c)
a=J.k1(a,c)
if(b>0)a=J.k0(a,b)
p=A.ac(a,t.S)
return A.iC(p)},
kX(a,b,c){var s=a.length
if(b>=s)return""
return A.kR(a,b,c==null||c>s?s:c)},
kT(a){return new A.d4(a,A.kx(a,!1,!0,!1,!1,""))},
iG(a,b,c){var s=J.aU(b)
if(!s.q())return a
if(c.length===0){do a+=A.t(s.gt())
while(s.q())}else{a+=A.t(s.gt())
for(;s.q();)a=a+c+A.t(s.gt())}return a},
kV(){return A.aS(new Error())},
kh(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
ie(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cV(a){if(a>=10)return""+a
return"0"+a},
e_(a){if(typeof a=="number"||A.fV(a)||a==null)return J.a4(a)
if(typeof a=="string")return JSON.stringify(a)
return A.kP(a)},
kk(a,b){A.cJ(a,"error",t.K)
A.cJ(b,"stackTrace",t.l)
A.kj(a,b)},
cN(a){return new A.cM(a)},
a5(a,b){return new A.ae(!1,null,b,a)},
dK(a,b,c){return new A.ae(!0,a,b,c)},
a8(a,b,c,d,e){return new A.bl(b,c,!0,a,d,"Invalid value")},
c5(a,b,c){if(0>a||a>c)throw A.h(A.a8(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.h(A.a8(b,a,c,"end",null))
return b}return c},
di(a,b){if(a<0)throw A.h(A.a8(a,0,null,b,null))
return a},
hn(a,b,c,d){return new A.cY(b,!0,a,d,"Index out of range")},
dp(a){return new A.ci(a)},
hB(a){return new A.dm(a)},
hx(a){return new A.bm(a)},
af(a){return new A.cS(a)},
hm(a,b,c){return new A.e2(a,b,c)},
kn(a,b,c){var s,r
if(A.hX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.b([],t.s)
B.a.n($.a9,a)
try{A.lZ(a,s)}finally{if(0>=$.a9.length)return A.a($.a9,-1)
$.a9.pop()}r=A.iG(b,t.R.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
ii(a,b,c){var s,r
if(A.hX(a))return b+"..."+c
s=new A.bn(b)
B.a.n($.a9,a)
try{r=s
r.a=A.iG(r.a,a,", ")}finally{if(0>=$.a9.length)return A.a($.a9,-1)
$.a9.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lZ(a,b){var s,r,q,p,o,n,m,l=a.gF(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
s=A.t(l.gt())
B.a.n(b,s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gt();++j
if(!l.q()){if(j<=4){B.a.n(b,A.t(p))
return}r=A.t(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gt();++j
for(;l.q();p=o,o=n){n=l.gt();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}B.a.n(b,"...")
return}}q=A.t(p)
r=A.t(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.n(b,m)
B.a.n(b,q)
B.a.n(b,r)},
kG(a,b,c,d){var s
if(B.p===c){s=B.b.gB(a)
b=J.aw(b)
return A.hz(A.aQ(A.aQ($.he(),s),b))}if(B.p===d){s=B.b.gB(a)
b=J.aw(b)
c=J.aw(c)
return A.hz(A.aQ(A.aQ(A.aQ($.he(),s),b),c))}s=B.b.gB(a)
b=J.aw(b)
c=J.aw(c)
d=J.aw(d)
d=A.hz(A.aQ(A.aQ(A.aQ(A.aQ($.he(),s),b),c),d))
return d},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(){},
fo:function fo(){},
cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(){},
fr:function fr(){},
C:function C(){},
cM:function cM(a){this.a=a},
aD:function aD(){},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bl:function bl(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cY:function cY(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ci:function ci(a){this.a=a},
dm:function dm(a){this.a=a},
bm:function bm(a){this.a=a},
cS:function cS(a){this.a=a},
de:function de(){},
ca:function ca(){},
fs:function fs(a){this.a=a},
e2:function e2(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(){},
k:function k(){},
W:function W(a,b,c){this.a=a
this.b=b
this.$ti=c},
O:function O(){},
f:function f(){},
dz:function dz(){},
bn:function bn(a){this.a=a},
kC(a,b){return a},
kv(a){return a},
ko(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.E(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
kl(a){return A.d(new v.G.Promise(A.r(new A.e5(a))))},
e5:function e5(a){this.a=a},
e3:function e3(a){this.a=a},
e4:function e4(a){this.a=a},
p(a){var s
if(typeof a=="function")throw A.h(A.a5("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.lx,a)
s[$.bx()]=a
return s},
c(a){var s
if(typeof a=="function")throw A.h(A.a5("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.ly,a)
s[$.bx()]=a
return s},
r(a){var s
if(typeof a=="function")throw A.h(A.a5("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.lz,a)
s[$.bx()]=a
return s},
hN(a){var s
if(typeof a=="function")throw A.h(A.a5("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.lA,a)
s[$.bx()]=a
return s},
hO(a){var s
if(typeof a=="function")throw A.h(A.a5("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.lB,a)
s[$.bx()]=a
return s},
lx(a){return t.Z.a(a).$0()},
ly(a,b,c){t.Z.a(a)
if(A.ak(c)>=1)return a.$1(b)
return a.$0()},
lz(a,b,c,d){t.Z.a(a)
A.ak(d)
if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
lA(a,b,c,d,e){t.Z.a(a)
A.ak(e)
if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
lB(a,b,c,d,e,f){t.Z.a(a)
A.ak(f)
if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
ji(a){return a==null||A.fV(a)||typeof a=="number"||typeof a=="string"||t.gj.b(a)||t.gc.b(a)||t.go.b(a)||t.w.b(a)||t.h7.b(a)||t.k.b(a)||t.bv.b(a)||t.d.b(a)||t.q.b(a)||t.E.b(a)||t.Y.b(a)},
h7(a){if(A.ji(a))return a
return new A.h8(new A.bq(t.J)).$1(a)},
fZ(a,b,c){var s,r
if(b==null)return c.a(new a())
if(b instanceof Array)switch(b.length){case 0:return c.a(new a())
case 1:return c.a(new a(b[0]))
case 2:return c.a(new a(b[0],b[1]))
case 3:return c.a(new a(b[0],b[1],b[2]))
case 4:return c.a(new a(b[0],b[1],b[2],b[3]))}s=[null]
B.a.a6(s,b)
r=a.bind.apply(a,s)
String(r)
return c.a(new r())},
jv(a,b){var s=new A.v($.y,b.h("v<0>")),r=new A.aF(s,b.h("aF<0>"))
a.then(A.cK(new A.hb(r,b),1),A.cK(new A.hc(r),1))
return s},
jh(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
hU(a){if(A.jh(a))return a
return new A.h_(new A.bq(t.J)).$1(a)},
h8:function h8(a){this.a=a},
hb:function hb(a,b){this.a=a
this.b=b},
hc:function hc(a){this.a=a},
h_:function h_(a){this.a=a},
eJ:function eJ(a){this.a=a},
fF:function fF(a){this.a=a},
dY:function dY(){},
i7(a,b){var s,r,q,p,o,n,m,l,k=B.a2.k(0,b)
k.toString
s=A.k5(a)
for(r=k.length,q="";s.aL(0,$.T())>0;s=o){p=A.cn(58)
if(p.c===0)A.a0(B.y)
o=s.bC(p)
p=A.cn(58)
if(p.c===0)A.a0(B.y)
n=s.c_(p)
if(n.a)n=p.a?n.aw(0,p):n.aS(0,p)
p=n.aQ(0)
if(!(p>=0&&p<r))return A.a(k,p)
q=k[p]+q}for(p=a.length,m=0,l=0;l<p;++l)if(a[l]===0)++m
else break
if(0>=r)return A.a(k,0)
return B.f.V(k[0],p-(p-m))+q},
i6(a,b){var s,r,q,p,o,n,m,l,k=B.a2.k(0,b)
k.toString
s=$.T()
for(r=a.length,q=r-1,p=0;p<r;++p){o=q-p
if(!(o>=0))return A.a(a,o)
n=B.f.h_(k,a[o])
if(n===-1)throw A.h(B.aD)
s=s.aS(0,A.cn(n).V(0,A.cn(58).h8(p)))}m=A.k6(s,A.k4(s))
for(q=k.length,l=0,p=0;p<r;++p){o=a[p]
if(0>=q)return A.a(k,0)
if(o===k[0])++l
else break}k=t.S
r=A.ac(A.ah(l,0,!1,k),t.z)
B.a.a6(r,m)
return A.bV(r,!0,k)},
bB:function bB(a){this.b=a},
dO:function dO(a,b){this.a=a
this.b=b},
iN(a){var s,r,q,p,o,n,m,l,k,j,i,h=A.bw(a,"=",""),g=A.b([],t.t)
for(s=h.length,r=0;q=r+4,q<=s;r=q){p=$.hd()
if(!(r<s))return A.a(h,r)
o=J.b6(p)
n=o.k(p,h.charCodeAt(r))
m=r+1
if(!(m<s))return A.a(h,m)
m=o.k(p,h.charCodeAt(m))
l=r+2
if(!(l<s))return A.a(h,l)
l=o.k(p,h.charCodeAt(l))
k=r+3
if(!(k<s))return A.a(h,k)
j=n<<18|m<<12|l<<6|o.k(p,h.charCodeAt(k))
B.a.n(g,j>>>16&255)
B.a.n(g,j>>>8&255)
B.a.n(g,j&255)}i=s-r
if(i===2){p=$.hd()
if(!(r<s))return A.a(h,r)
o=J.b6(p)
n=o.k(p,h.charCodeAt(r))
m=r+1
if(!(m<s))return A.a(h,m)
B.a.n(g,(n<<18|o.k(p,h.charCodeAt(m))<<12)>>>16&255)}else if(i===3){p=$.hd()
if(!(r<s))return A.a(h,r)
o=J.b6(p)
n=o.k(p,h.charCodeAt(r))
m=r+1
if(!(m<s))return A.a(h,m)
m=o.k(p,h.charCodeAt(m))
l=r+2
if(!(l<s))return A.a(h,l)
j=n<<18|m<<12|o.k(p,h.charCodeAt(l))<<6
B.a.n(g,j>>>16&255)
B.a.n(g,j>>>8&255)}return g},
k3(a,b,c){var s,r,q
a=a
r=B.b.a_(J.ar(a),4)
if(r!==0)throw A.h(A.k2("Invalid length, must be multiple of four"))
r=a
r=A.bw(r,"-","+")
a=A.bw(r,"_","/")
s=new A.fj(A.b([],t.t))
try{J.i4(s,a)
r=s
q=r.b
if(q.length!==0)B.a.a6(r.a,A.iN(B.f.h6(q,4,"=")))
r=A.kB(r.a,t.S)
return r}finally{r=s
B.a.cm(r.a)
r.b=""}},
fj:function fj(a){this.a=a
this.b=""},
fk:function fk(){},
iO(a){var s,r,q,p,o,n,m,l,k,j=u.n
for(s=a.length,r=0,q="";p=r+3,p<=s;r=p){if(!(r<s))return A.a(a,r)
o=a[r]
n=r+1
if(!(n<s))return A.a(a,n)
n=a[n]
m=r+2
if(!(m<s))return A.a(a,m)
l=o<<16|n<<8|a[m]
q=q+j[l>>>18&63]+j[l>>>12&63]+j[l>>>6&63]+j[l&63]}k=s-r
if(k===1){if(!(r<s))return A.a(a,r)
l=a[r]<<16
s=q+j[l>>>18&63]+j[l>>>12&63]+"=="}else if(k===2){if(!(r<s))return A.a(a,r)
o=a[r]
n=r+1
if(!(n<s))return A.a(a,n)
l=o<<16|a[n]<<8
q=q+j[l>>>18&63]+j[l>>>12&63]+j[l>>>6&63]+"="
s=q}else s=q
return s.charCodeAt(0)==0?s:s},
i5(a,b,c){var s,r,q,p,o=new A.fl(new A.bn(""),A.b([],t.t))
try{A.hl(a)
J.i4(o,a)
r=o
q=r.b
if(q.length!==0){p=r.a
q=A.iO(q)
p.a+=q}r=r.a.a
s=r.charCodeAt(0)==0?r:r
if(c){r=s
r=A.bw(r,"+","-")
s=A.bw(r,"/","_")}r=s
return r}finally{r=o
r.a.a=""
B.a.cm(r.b)}},
fl:function fl(a,b){this.a=a
this.b=b},
k2(a){return new A.dN(a,null)},
dN:function dN(a,b){this.a=a
this.b=b},
dW:function dW(a,b){this.a=a
this.b=b},
eS(a){var s,r=t.S,q=A.ah(8,0,!1,r),p=A.ah(64,0,!1,r),o=A.ah(128,0,!1,r),n=new A.eR(q,p,o,A.hu(B.ax,r))
n.cr()
n.aR(a)
s=A.ah(32,0,!1,r)
n.fW(s)
A.jz(o)
A.jz(p)
n.cr()
return s},
eR:function eR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1
_.r=d},
hh(a,b){return new A.bb(a,b)},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
bb:function bb(a,b){this.a=a
this.b=b},
eI:function eI(a,b){this.a=a
this.b=b},
fE:function fE(){},
kW(a){if(B.f.bs(a.toLowerCase(),"0x"))return B.f.aW(a,2)
return a},
iI(a){var s,r,q,p,o,n,m,l=!0,k=B.x,j=B.Q,i=!0
try{switch(j){case B.Q:r=B.ao.an(a)
return r
case B.w:case B.a5:r=A.k3(a,l,i)
return r
case B.a6:r=A.i6(a,k)
return r
case B.a7:q=A.i6(a,k)
p=B.a.W(q,0,q.length-4)
o=B.a.bt(q,q.length-4)
n=B.a.W(A.eS(A.eS(p)),0,4)
if(!A.k9(o,n))A.a0(new A.dO("Invalid checksum (expected "+A.hk(n)+", got "+A.hk(o)+")",null))
return p
case B.a8:r=A.ic(a)
return r
case B.a4:r=B.af.an(a)
return r}}catch(m){s=A.av(m)
throw A.h(A.hh("Failed to convert string as "+j.b+" bytes.",A.D(["error",J.a4(s)],t.N,t.z)))}},
iH(a,b){var s,r,q,p,o,n,m=!1,l=!1,k=B.x
a=a
r=a
A.hl(r)
a=r
try{switch(b){case B.Q:r=t.L.a(a)
q=A.aj(m)
r=new A.fN((q===!0?B.aT:B.aS).a).de(r,0,null,!0)
return r
case B.w:r=A.i5(a,l,!1)
return r
case B.a5:r=A.i5(a,l,!0)
return r
case B.a6:r=A.i7(a,k)
return r
case B.a7:r=a
A.hl(r)
q=t.S
p=A.hu(r,q)
o=B.a.W(A.eS(A.eS(p)),0,4)
r=A.ac(p,t.z)
B.a.a6(r,o)
r=A.i7(A.bV(r,!0,q),k)
return r
case B.a8:r=A.hk(a)
return r
case B.a4:r=B.ae.fT(a,m)
return r}}catch(n){s=A.av(n)
r=A.hh("Failed to convert bytes as "+b.b,A.D(["error",J.a4(s)],t.N,t.z))
throw A.h(r)}},
aC:function aC(a){this.b=a},
kZ(){var s,r,q,p=A.kD(16,new A.f4($.jB()),t.S)
B.a.l(p,6,p[6]&15|64)
B.a.l(p,8,p[8]&63|128)
s=A.Z(p)
r=s.h("X<1,m>")
q=A.ac(new A.X(p,s.h("m(1)").a(new A.f5()),r),r.h("L.E"))
return B.a.T(B.a.W(q,0,4),"")+"-"+B.a.T(B.a.W(q,4,6),"")+"-"+B.a.T(B.a.W(q,6,8),"")+"-"+B.a.T(B.a.W(q,8,10),"")+"-"+B.a.T(B.a.bt(q,10),"")},
f4:function f4(a){this.a=a},
f5:function f5(){},
dZ:function dZ(){},
d6:function d6(a){this.b=a},
eZ:function eZ(a){this.a=a},
dr:function dr(a){this.b=a},
cj:function cj(a,b){this.a=a
this.d=b},
dC:function dC(){},
kr(a){var s,r,q,p,o,n
try{s=null
q=a.rawTransaction
r=q==null?null:J.a4(q)
if(r!=null){q=$.jD()
if(q.b.test(r)){q=A.ic(r)
s=A.j(v.G.Uint8Array.from(A.h7(q)))}else s=A.j(a.rawTransaction.bcsToBytes())
q=s
p=a.feePayerAddress
p=p==null?null:J.a4(p)
o=t.r.a(a.secondarySignerAddresses)
if(o==null)o=null
else{o=t.ew.b(o)?o:new A.ax(o,A.Z(o).h("ax<1,f>"))
o=J.dF(o,new A.ef(),t.N)
o=A.ac(o,o.$ti.h("L.E"))}o={rawTransaction:q,feePayerAddress:p,secondarySignerAddresses:o}
return o}}catch(n){}throw A.h(new A.cj("Invalid method parameters: Invalid Aptos transaction. The transaction must be a valid Aptos transaction and include a method like bcsToBytes.",B.aV))},
kp(a){return new A.ee(a)},
kq(a){return new A.ed(a)},
ho(a){a.bcsToBytes=A.p(new A.ea(a))
a.serialize=A.c(new A.eb(a))
a.bcsToHex=A.p(new A.ec(a))
a.toStringWithoutPrefix=A.p(A.kq(a))
a.toString=A.p(A.kp(a))},
hp(a){return B.a.a8(B.aB,new A.eg(a),new A.eh())},
hq(a,b){var s={}
s.status="Approved"
s.args=a
return s},
ef:function ef(){},
ee:function ee(a){this.a=a},
ed:function ed(a){this.a=a},
ea:function ea(a){this.a=a},
eb:function eb(a){this.a=a},
ec:function ec(a){this.a=a},
aK:function aK(a,b){this.c=a
this.b=b},
eg:function eg(a){this.a=a},
eh:function eh(){},
aP:function aP(a,b,c){this.a=a
this.b=b
this.$ti=c},
df:function df(a,b){this.a=a
this.b=b},
ki(a){var s=v.G,r=A.d(new s.CustomEvent("eip6963:announceProvider",{bubbles:!0,cancelable:!1,detail:A.j(s.Object.freeze({info:$.jA(),provider:a}))}))
A.d(s.window).addEventListener("eip6963:requestProvider",A.c(new A.dX(r)))
A.d(s.window).dispatchEvent(r)},
dX:function dX(a){this.a=a},
Y(a,b){return A.d(new v.G.Promise(A.r(new A.fe(a))))},
a3(a,b,c){return A.fZ(v.G.Proxy,[a,new A.eQ(new A.aP(b,a,c.h("aP<0>"))).$0()],t.m)},
iE(a){var s=A.Z(a),r=s.h("X<1,m>")
s=A.ac(new A.X(a,s.h("m(1)").a(new A.eN()),r),r.h("L.E"))
return s},
fe:function fe(a){this.a=a},
fb:function fb(a){this.a=a},
fc:function fc(a){this.a=a},
fd:function fd(a,b){this.a=a
this.b=b},
eO:function eO(a){this.a=a},
eP:function eP(a){this.a=a},
eQ:function eQ(a){this.a=a},
eN:function eN(){},
hY(a){return A.mu(a)},
mu(a){var s=0,r=A.ao(t.H),q,p,o
var $async$hY=A.ap(function(b,c){if(b===1)return A.al(c,r)
while(true)switch(s){case 0:p={}
o=new A.d2(new A.eZ(A.eG(t.fs,t.W)),new A.aF(new A.v($.y,t.U),t.h))
o.dY()
q=v.G
q.onChain={}
p.a=!1
A.d(q.window).addEventListener("WALLET_ACTIVATION",A.c(new A.h9(p,o)))
return A.am(null,r)}})
return A.an($async$hY,r)},
h9:function h9(a,b){this.a=a
this.b=b},
ky(a){return B.a.a8(B.ay,new A.ey(a),new A.ez())},
ku(a){return B.a.a8(B.aA,new A.ep(a),new A.eq())},
kt(a){return B.a.a8(B.a0,new A.en(a),new A.eo())},
bO(a){return A.kS(B.a0,new A.em(a),t.A)},
iq(a){return B.a.a8(B.aC,new A.eD(a),new A.eE())},
il(a){return B.a.a8(B.az,new A.ek(a),new A.el())},
iz(a,b){var s=a==null?null:a.b
return{data:b,requestId:"event",client:s}},
bi(a){return{type:"event",event:a.b,data:null,providerType:"walletStandard"}},
aL:function aL(a){this.b=a},
ey:function ey(a){this.a=a},
ez:function ez(){},
V:function V(a){this.b=a},
ep:function ep(a){this.a=a},
eq:function eq(){},
ab:function ab(a){this.b=a},
en:function en(a){this.a=a},
eo:function eo(){},
em:function em(a){this.a=a},
aM:function aM(a){this.b=a},
eD:function eD(a){this.a=a},
eE:function eE(){},
K:function K(a,b){this.c=a
this.b=b},
ek:function ek(a){this.a=a},
el:function el(){},
c3:function c3(a){this.b=a},
hK(a){var s
if(a!=null&&typeof a==="string"){s=A.l(a).length
if(s===64||s===66)throw A.h({message:"Please use static method `TronWeb.TRX.sign` for signing with own private key"})}},
ei:function ei(){},
ej:function ej(a){this.a=a},
d2:function d2(a,b){var _=this
_.b=_.a=$
_.c=a
_.d=b
_.e=null
_.f=$},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eu:function eu(a,b){this.a=a
this.b=b},
er:function er(a,b){this.a=a
this.b=b},
es:function es(a){this.a=a},
et:function et(a){this.a=a},
M:function M(){},
eL:function eL(a,b){this.a=a
this.b=b},
by:function by(a,b){this.c=$
this.a=a
this.b=b},
dG:function dG(a){this.a=a},
bz:function bz(a,b,c){this.c=a
this.a=b
this.b=c},
dI:function dI(){},
dJ:function dJ(){},
dH:function dH(){},
bD:function bD(a,b){this.a=a
this.b=b},
bC:function bC(a,b){this.a=a
this.b=b},
bH:function bH(a,b){var _=this
_.d=_.c=null
_.a=a
_.b=b},
dU:function dU(a,b){this.a=a
this.b=b},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a,b){this.a=a
this.b=b},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(a,b,c){var _=this
_.c=null
_.d=a
_.a=b
_.b=c},
bX:function bX(a,b){this.a=a
this.b=b},
c7:function c7(a,b){this.a=a
this.b=b},
c9:function c9(a,b){this.a=a
this.b=b},
cb:function cb(a,b){this.a=a
this.b=b},
cd:function cd(a,b,c){var _=this
_.c=a
_.e=_.d=null
_.a=b
_.b=c},
eW:function eW(a){this.a=a},
eX:function eX(a){this.a=a},
eY:function eY(a){this.a=a},
eU:function eU(){},
eV:function eV(a){this.a=a},
ce:function ce(a,b){this.a=a
this.b=b},
cf:function cf(a,b){this.a=a
this.b=b},
cg:function cg(a,b,c,d){var _=this
_.d=_.c=null
_.e=a
_.f=b
_.a=c
_.b=d},
f_:function f_(a){this.a=a},
f0:function f0(a){this.a=a},
f1:function f1(a){this.a=a},
ir(a){var s={}
s.connect=a
s.version="1.0.0"
return s},
a1(a){var s={}
s.on=a
s.version="1.0.0"
return s},
ag(a){var s={}
s.disconnect=a
s.version="1.0.0"
return s},
iu(a){var s={}
s.signPersonalMessage=a
s.version="1.0.0"
return s},
iv(a){var s={}
s.signTransaction=a
s.version="1.0.0"
return s},
is(a){var s={}
s.getAccountAddresses=a
s.version="1.0.0"
return s},
it(a){var s={}
s.sendTransaction=a
s.version="1.0.0"
return s},
eA(a){var s,r,q=t.c.a(a.types)
q=t.a.b(q)?q:new A.ax(q,A.Z(q).h("ax<1,m>"))
q=J.dF(q,new A.eB(),t.N)
s=q.$ti
r=s.h("X<L.E,V>")
q=A.ac(new A.X(q,s.h("V(L.E)").a(new A.eC()),r),r.h("L.E"))
return q},
ip(a){var s=t.c.a(a.accounts)
s=t.cl.b(s)?s:new A.ax(s,A.Z(s).h("ax<1,i>"))
s=J.dF(s,new A.ex(),t.N)
s=A.ac(s,s.$ti.h("L.E"))
return s},
eB:function eB(){},
eC:function eC(){},
ex:function ex(){},
kB(a,b){return A.bV(a,!0,b)},
i0(a,b,c){B.a.l(b,c,a>>>24&255)
B.a.l(b,c+1,a>>>16&255)
B.a.l(b,c+2,a>>>8&255)
B.a.l(b,c+3,a&255)},
jz(a){var s,r
for(s=a.length,r=0;r<s;++r)B.a.l(a,r,0)},
hk(a){var s=B.V.fV(a,!0)
return s},
ic(a){var s,r,q,p=!1
try{s=A.kW(a)
if(J.ar(s)===0){r=A.b([],t.t)
return r}if(p&&(J.ar(s)&1)===1)s="0"+A.t(s)
r=B.V.fS(s)
return r}catch(q){throw A.h(B.a9)}},
ka(a,b){var s,r,q
for(s=J.b7(a),r=0;r<a.length;++r){q=s.K(a,r)
if(q<0||q>255)throw A.h(A.hh(b+" at index "+r+" "+q,null))}},
hl(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q<0||q>255)throw A.h(A.a5("Invalid bytes at index "+r+": "+q,null))}},
k9(a,b){var s,r,q=a.length,p=b.length
if(q!==p)return!1
if(a===b)return!0
for(s=0;s<q;++s){r=a[s]
if(!(s<p))return A.a(b,s)
if(r!==b[s])return!1}return!0},
kg(a,b,c){var s,r,q
if(a===b)return!0
for(s=0;s<3;++s){r=a[s]
q=b[s]
if(r==null?q!=null:r!==q)return!1}return!0},
ig(a){var s,r,q,p
for(s=J.aU(a),r=t.R,q=12;s.q();){p=s.gt()
q=r.b(p)?(q^A.ig(p))>>>0:(q^J.aw(p))>>>0}return q},
k4(a){var s=a.gam(0)
return B.b.N((a.a?s+1:s)+7,8)},
k6(a,b){var s,r,q,p=a.aL(0,$.T())
if(p===0)return A.ah(b,0,!1,t.S)
s=A.cn(255)
p=t.S
r=A.ah(b,0,!1,p)
for(q=0;q<b;++q){B.a.l(r,b-q-1,a.cu(0,s).aQ(0))
a=a.aV(0,8)}return A.bV(r,!0,p)},
k5(a){var s,r,q,p=$.T()
for(s=0;r=a.length,s<r;++s){q=r-s-1
if(!(q>=0))return A.a(a,q)
p=p.aS(0,A.cn(a[q]).a1(0,8*s))}r=p.aL(0,$.T())
if(r===0)return p
return p},
kS(a,b,c){var s,r,q=null
try{s=B.a.fX(a,b)
return s}catch(r){if(A.av(r) instanceof A.bm){s=q
s=s==null?null:s.$0()
return s}else throw r}},
im(a){var s={}
s.connect=a
s.version="1.0.0"
return s},
io(a){var s={}
s.showBalanceChanges=A.aj(a.showBalanceChanges)
s.showEffects=A.aj(a.showEffects)
s.showEvents=A.aj(a.showEvents)
s.showInput=A.aj(a.showInput)
s.showObjectChanges=A.aj(a.showObjectChanges)
s.showRawEffects=A.aj(a.showRawEffects)
s.showRawInput=A.aj(a.showRawInput)
return s},
ev(a){return A.kw(a)},
kw(a){var s=0,r=A.ao(t.K),q,p=2,o=[],n,m,l,k,j,i,h
var $async$ev=A.ap(function(b,c){if(b===1){o.push(c)
s=p}while(true)switch(s){case 0:p=4
s=a.transaction!=null?7:8
break
case 7:n=null
k=a.transaction
s=k!=null&&typeof k==="string"?9:11
break
case 9:n=A.l(a.transaction)
s=10
break
case 11:s=12
return A.aH(A.jv(A.d(a.transaction.toJSON()),t.N),$async$ev)
case 12:m=c
n=A.iH(A.iI(m),B.w)
case 10:j={}
j.chain=A.z(a.chain)
k=a.account
if(k==null)k=a.address
j.account=k
j.transaction=n
j.requestType=A.z(a.requestType)
k=a.options
k=k==null?null:A.io(k)
j.options=k
q=j
s=1
break
case 8:if(a.transactionBlock!=null){l=null
k=a.transactionBlock
if(k!=null&&typeof k==="string")l=A.l(a.transactionBlock)
else{k=a.transactionBlock
if(k==null)k=null
else k=typeof A.j(k.blockData)==="string"
if(k===!0)l=A.l(A.j(a.transactionBlock.blockData))
else l=A.iH(A.iI(A.l(A.d(v.G.JSON).stringify(A.j(a.transactionBlock.blockData)))),B.w)}j={}
j.chain=A.z(a.chain)
k=a.account
if(k==null)k=a.address
j.account=k
j.transaction=l
j.requestType=A.z(a.requestType)
k=a.options
k=k==null?null:A.io(k)
j.options=k
q=j
s=1
break}p=2
s=6
break
case 4:p=3
h=o.pop()
s=6
break
case 3:s=2
break
case 6:throw A.h($.jE())
case 1:return A.am(q,r)
case 2:return A.al(o.at(-1),r)}})
return A.an($async$ev,r)},
iK(a){var s={}
s.signTransaction=a
s.version="1.0.0"
return s},
A(a){var s,r
if(a==null)return A.b([],t.f)
s=[]
r=A.ko(a,"Array")
if(r){t.c.a(a)
s=a}else s.push(a)
return A.bV(s,!0,t.X)},
a2(a){if(a==null)return null
if(typeof a==="string")return a
return null},
a7(a){if(a==null)return null
return a}},B={}
var w=[A,J,B]
var $={}
A.hr.prototype={}
J.d_.prototype={
Z(a,b){return a===b},
gB(a){return A.c4(a)},
j(a){return"Instance of '"+A.dh(a)+"'"},
gG(a){return A.b4(A.hP(this))}}
J.bN.prototype={
j(a){return String(a)},
bp(a,b){return b||a},
gB(a){return a?519018:218159},
gG(a){return A.b4(t.y)},
$ix:1,
$iF:1}
J.bQ.prototype={
Z(a,b){return null==b},
j(a){return"null"},
gB(a){return 0},
$ix:1}
J.G.prototype={$ii:1}
J.aN.prototype={
gB(a){return 0},
j(a){return String(a)}}
J.dg.prototype={}
J.ch.prototype={}
J.H.prototype={
j(a){var s=a[$.bx()]
if(s==null)return this.cG(a)
return"JavaScript function for "+J.a4(s)},
$iaW:1}
J.be.prototype={
gB(a){return 0},
j(a){return String(a)}}
J.bf.prototype={
gB(a){return 0},
j(a){return String(a)}}
J.q.prototype={
n(a,b){A.Z(a).c.a(b)
a.$flags&1&&A.B(a,29)
a.push(b)},
ar(a,b){var s
a.$flags&1&&A.B(a,"remove",1)
for(s=0;s<a.length;++s)if(J.hf(a[s],b)){a.splice(s,1)
return!0}return!1},
a6(a,b){var s
A.Z(a).h("k<1>").a(b)
a.$flags&1&&A.B(a,"addAll",2)
if(Array.isArray(b)){this.cO(a,b)
return}for(s=J.aU(b);s.q();)a.push(s.gt())},
cO(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.h(A.af(a))
for(r=0;r<s;++r)a.push(b[r])},
cm(a){a.$flags&1&&A.B(a,"clear","clear")
a.length=0},
ac(a,b,c){var s=A.Z(a)
return new A.X(a,s.u(c).h("1(2)").a(b),s.h("@<1>").u(c).h("X<1,2>"))},
T(a,b){var s,r=A.ah(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.l(r,s,A.t(a[s]))
return r.join(b)},
bl(a){return this.T(a,"")},
cs(a,b){return A.hy(a,0,A.cJ(b,"count",t.S),A.Z(a).c)},
a8(a,b,c){var s,r,q,p=A.Z(a)
p.h("F(1)").a(b)
p.h("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.h(A.af(a))}if(c!=null)return c.$0()
throw A.h(A.ih())},
fX(a,b){return this.a8(a,b,null)},
K(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
W(a,b,c){if(b<0||b>a.length)throw A.h(A.a8(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.h(A.a8(c,b,a.length,"end",null))
if(b===c)return A.b([],A.Z(a))
return A.b(a.slice(b,c),A.Z(a))},
bt(a,b){return this.W(a,b,null)},
j(a){return A.ii(a,"[","]")},
gF(a){return new J.bA(a,a.length,A.Z(a).h("bA<1>"))},
gB(a){return A.c4(a)},
gp(a){return a.length},
k(a,b){if(!(b>=0&&b<a.length))throw A.h(A.h0(a,b))
return a[b]},
l(a,b,c){A.Z(a).c.a(c)
a.$flags&2&&A.B(a)
if(!(b>=0&&b<a.length))throw A.h(A.h0(a,b))
a[b]=c},
$in:1,
$ik:1,
$io:1}
J.d0.prototype={
hd(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.dh(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.ew.prototype={}
J.bA.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.au(q)
throw A.h(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iR:1}
J.bR.prototype={
aQ(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.h(A.dp(""+a+".toInt()"))},
hc(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.h(A.a8(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.a(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.a0(A.dp("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.a(p,1)
s=p[1]
if(3>=r)return A.a(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.f.V("0",o)},
j(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a_(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
cI(a,b){if((a|0)===a)if(b>=1)return a/b|0
return this.c7(a,b)},
N(a,b){return(a|0)===a?a/b|0:this.c7(a,b)},
c7(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.h(A.dp("Result of truncating division is "+A.t(s)+": "+A.t(a)+" ~/ "+b))},
a1(a,b){if(b<0)throw A.h(A.cI(b))
return b>31?0:a<<b>>>0},
a4(a,b){var s
if(a>0)s=this.c1(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bd(a,b){if(0>b)throw A.h(A.cI(b))
return this.c1(a,b)},
c1(a,b){return b>31?0:a>>>b},
gG(a){return A.b4(t.o)},
$iw:1,
$iba:1}
J.bP.prototype={
gam(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.N(q,4294967296)
s+=32}return s-Math.clz32(q)},
gG(a){return A.b4(t.S)},
$ix:1,
$ie:1}
J.d1.prototype={
gG(a){return A.b4(t.i)},
$ix:1}
J.bd.prototype={
bs(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
az(a,b,c){return a.substring(b,A.c5(b,c,a.length))},
aW(a,b){return this.az(a,b,null)},
V(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.h(B.an)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
cp(a,b,c){var s=b-a.length
if(s<=0)return a
return this.V(c,s)+a},
h6(a,b,c){var s=b-a.length
if(s<=0)return a
return a+this.V(c,s)},
h_(a,b){var s=a.indexOf(b,0)
return s},
j(a){return a},
gB(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gG(a){return A.b4(t.N)},
gp(a){return a.length},
$ix:1,
$ieM:1,
$im:1}
A.bo.prototype={
gF(a){return new A.bE(J.aU(this.gaJ()),A.P(this).h("bE<1,2>"))},
gp(a){return J.ar(this.gaJ())},
K(a,b){return A.P(this).y[1].a(J.hg(this.gaJ(),b))},
j(a){return J.a4(this.gaJ())}}
A.bE.prototype={
q(){return this.a.q()},
gt(){return this.$ti.y[1].a(this.a.gt())},
$iR:1}
A.cp.prototype={
k(a,b){return this.$ti.y[1].a(J.jX(this.a,b))},
$in:1,
$io:1}
A.ax.prototype={
gaJ(){return this.a}}
A.bg.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.eT.prototype={}
A.n.prototype={}
A.L.prototype={
gF(a){var s=this
return new A.aY(s,s.gp(s),A.P(s).h("aY<L.E>"))},
T(a,b){var s,r,q,p=this,o=p.gp(p)
if(b.length!==0){if(o===0)return""
s=A.t(p.K(0,0))
if(o!==p.gp(p))throw A.h(A.af(p))
for(r=s,q=1;q<o;++q){r=r+b+A.t(p.K(0,q))
if(o!==p.gp(p))throw A.h(A.af(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.t(p.K(0,q))
if(o!==p.gp(p))throw A.h(A.af(p))}return r.charCodeAt(0)==0?r:r}},
bl(a){return this.T(0,"")},
ac(a,b,c){var s=A.P(this)
return new A.X(this,s.u(c).h("1(L.E)").a(b),s.h("@<L.E>").u(c).h("X<1,2>"))}}
A.cc.prototype={
gdm(){var s=J.ar(this.a),r=this.c
if(r==null||r>s)return s
return r},
gf1(){var s=J.ar(this.a),r=this.b
if(r>s)return s
return r},
gp(a){var s,r=J.ar(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
K(a,b){var s=this,r=s.gf1()+b
if(b<0||r>=s.gdm())throw A.h(A.hn(b,s.gp(0),s,"index"))
return J.hg(s.a,r)},
cF(a,b){var s,r,q=this
A.di(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.aV(q.$ti.h("aV<1>"))
return A.hy(q.a,s,r,q.$ti.c)}}
A.aY.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=J.b6(q),o=p.gp(q)
if(r.b!==o)throw A.h(A.af(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.K(q,s);++r.c
return!0},
$iR:1}
A.aB.prototype={
gF(a){var s=this.a
return new A.bW(s.gF(s),this.b,A.P(this).h("bW<1,2>"))},
gp(a){var s=this.a
return s.gp(s)},
K(a,b){var s=this.a
return this.b.$1(s.K(s,b))}}
A.bI.prototype={$in:1}
A.bW.prototype={
q(){var s=this,r=s.b
if(r.q()){s.a=s.c.$1(r.gt())
return!0}s.a=null
return!1},
gt(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iR:1}
A.X.prototype={
gp(a){return J.ar(this.a)},
K(a,b){return this.b.$1(J.hg(this.a,b))}}
A.ck.prototype={
gF(a){return new A.cl(J.aU(this.a),this.b,this.$ti.h("cl<1>"))},
ac(a,b,c){var s=this.$ti
return new A.aB(this,s.u(c).h("1(2)").a(b),s.h("@<1>").u(c).h("aB<1,2>"))}}
A.cl.prototype={
q(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gt()))return!0
return!1},
gt(){return this.a.gt()},
$iR:1}
A.aV.prototype={
gF(a){return B.ag},
gp(a){return 0},
K(a,b){throw A.h(A.a8(b,0,0,"index",null))},
ac(a,b,c){this.$ti.u(c).h("1(2)").a(b)
return new A.aV(c.h("aV<0>"))}}
A.bJ.prototype={
q(){return!1},
gt(){throw A.h(A.ih())},
$iR:1}
A.U.prototype={}
A.c6.prototype={
gp(a){return J.ar(this.a)},
K(a,b){var s=this.a,r=J.b6(s)
return r.K(s,r.gp(s)-1-b)}}
A.cF.prototype={}
A.bG.prototype={
j(a){return A.hv(this)},
$iaA:1}
A.bM.prototype={
aF(){var s=this,r=s.$map
if(r==null){r=new A.bS(s.$ti.h("bS<1,2>"))
A.jq(s.a,r)
s.$map=r}return r},
k(a,b){return this.aF().k(0,b)},
ao(a,b){this.$ti.h("~(1,2)").a(b)
this.aF().ao(0,b)},
gap(){var s=this.aF()
return new A.aX(s,A.P(s).h("aX<1>"))},
gp(a){return this.aF().a}}
A.c8.prototype={}
A.f2.prototype={
U(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.c2.prototype={
j(a){return"Null check operator used on a null value"}}
A.d5.prototype={
j(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.dn.prototype={
j(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.eK.prototype={
j(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bL.prototype={}
A.cy.prototype={
j(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ias:1}
A.aJ.prototype={
j(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.jy(r==null?"unknown":r)+"'"},
$iaW:1,
ghk(){return this},
$C:"$1",
$R:1,
$D:null}
A.cP.prototype={$C:"$0",$R:0}
A.cQ.prototype={$C:"$2",$R:2}
A.dl.prototype={}
A.dk.prototype={
j(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.jy(s)+"'"}}
A.bc.prototype={
Z(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bc))return!1
return this.$_target===b.$_target&&this.a===b.a},
gB(a){return(A.dE(this.a)^A.c4(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.dh(this.a)+"'")}}
A.dj.prototype={
j(a){return"RuntimeError: "+this.a}}
A.ay.prototype={
gp(a){return this.a},
gap(){return new A.aX(this,A.P(this).h("aX<1>"))},
ab(a){var s=this.h1(a)
return s},
h1(a){var s=this.d
if(s==null)return!1
return this.aO(s[this.aN(a)],a)>=0},
k(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.h2(b)},
h2(a){var s,r,q=this.d
if(q==null)return null
s=q[this.aN(a)]
r=this.aO(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q,p,o,n,m=this,l=A.P(m)
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.bu(s==null?m.b=m.b9():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.bu(r==null?m.c=m.b9():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.b9()
p=m.aN(b)
o=q[p]
if(o==null)q[p]=[m.ba(b,c)]
else{n=m.aO(o,b)
if(n>=0)o[n].b=c
else o.push(m.ba(b,c))}}},
ar(a,b){var s=this.ek(this.b,b)
return s},
ao(a,b){var s,r,q=this
A.P(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.h(A.af(q))
s=s.c}},
bu(a,b,c){var s,r=A.P(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.ba(b,c)
else s.b=c},
ek(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.f8(s)
delete a[b]
return s.b},
bW(){this.r=this.r+1&1073741823},
ba(a,b){var s=this,r=A.P(s),q=new A.eF(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.bW()
return q},
f8(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.bW()},
aN(a){return J.aw(a)&1073741823},
aO(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.hf(a[r].a,b))return r
return-1},
j(a){return A.hv(this)},
b9(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iht:1}
A.eF.prototype={}
A.aX.prototype={
gp(a){return this.a.a},
gF(a){var s=this.a
return new A.bU(s,s.r,s.e,this.$ti.h("bU<1>"))}}
A.bU.prototype={
gt(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.h(A.af(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iR:1}
A.az.prototype={
gp(a){return this.a.a},
gF(a){var s=this.a
return new A.bT(s,s.r,s.e,this.$ti.h("bT<1,2>"))}}
A.bT.prototype={
gt(){var s=this.d
s.toString
return s},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.h(A.af(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.W(s.a,s.b,r.$ti.h("W<1,2>"))
r.c=s.c
return!0}},
$iR:1}
A.bS.prototype={
aN(a){return A.mf(a)&1073741823},
aO(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.hf(a[r].a,b))return r
return-1}}
A.h3.prototype={
$1(a){return this.a(a)},
$S:30}
A.h4.prototype={
$2(a,b){return this.a(a,b)},
$S:42}
A.h5.prototype={
$1(a){return this.a(A.l(a))},
$S:51}
A.cx.prototype={}
A.d4.prototype={
j(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ieM:1}
A.fp.prototype={
S(){var s=this.b
if(s===this)throw A.h(A.iw(this.a))
return s}}
A.aZ.prototype={
gG(a){return B.aG},
cj(a,b,c){var s
A.fU(a,b,c)
s=new Uint8Array(a,b,c)
return s},
fP(a,b,c){var s
A.fU(a,b,c)
s=new DataView(a,b)
return s},
ci(a){return this.fP(a,0,null)},
$ix:1,
$iaZ:1,
$icO:1}
A.c0.prototype={
gcl(a){if(((a.$flags|0)&2)!==0)return new A.dB(a.buffer)
else return a.buffer}}
A.dB.prototype={
cj(a,b,c){var s=A.kF(this.a,b,c)
s.$flags=3
return s},
ci(a){var s=A.kE(this.a,0,null)
s.$flags=3
return s},
$icO:1}
A.bY.prototype={
gG(a){return B.aH},
$ix:1,
$ihj:1}
A.bh.prototype={
gp(a){return a.length},
$ia6:1}
A.bZ.prototype={
k(a,b){A.b2(b,a,a.length)
return a[b]},
$in:1,
$ik:1,
$io:1}
A.c_.prototype={$in:1,$ik:1,$io:1}
A.d7.prototype={
gG(a){return B.aI},
$ix:1,
$ie0:1}
A.d8.prototype={
gG(a){return B.aJ},
$ix:1,
$ie1:1}
A.d9.prototype={
gG(a){return B.aK},
k(a,b){A.b2(b,a,a.length)
return a[b]},
$ix:1,
$ie7:1}
A.da.prototype={
gG(a){return B.aL},
k(a,b){A.b2(b,a,a.length)
return a[b]},
$ix:1,
$ie8:1}
A.db.prototype={
gG(a){return B.aM},
k(a,b){A.b2(b,a,a.length)
return a[b]},
$ix:1,
$ie9:1}
A.dc.prototype={
gG(a){return B.aO},
k(a,b){A.b2(b,a,a.length)
return a[b]},
$ix:1,
$if6:1}
A.dd.prototype={
gG(a){return B.aP},
k(a,b){A.b2(b,a,a.length)
return a[b]},
$ix:1,
$if7:1}
A.c1.prototype={
gG(a){return B.aQ},
gp(a){return a.length},
k(a,b){A.b2(b,a,a.length)
return a[b]},
$ix:1,
$if8:1}
A.b_.prototype={
gG(a){return B.aR},
gp(a){return a.length},
k(a,b){A.b2(b,a,a.length)
return a[b]},
$ix:1,
$ib_:1,
$if9:1}
A.ct.prototype={}
A.cu.prototype={}
A.cv.prototype={}
A.cw.prototype={}
A.ai.prototype={
h(a){return A.cD(v.typeUniverse,this,a)},
u(a){return A.j6(v.typeUniverse,this,a)}}
A.dw.prototype={}
A.dA.prototype={
j(a){return A.a_(this.a,null)}}
A.dv.prototype={
j(a){return this.a}}
A.br.prototype={$iaD:1}
A.fg.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:33}
A.ff.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:49}
A.fh.prototype={
$0(){this.a.$0()},
$S:24}
A.fi.prototype={
$0(){this.a.$0()},
$S:24}
A.fI.prototype={
cK(a,b){if(self.setTimeout!=null)self.setTimeout(A.cK(new A.fJ(this,b),0),a)
else throw A.h(A.dp("`setTimeout()` not found."))}}
A.fJ.prototype={
$0(){this.b.$0()},
$S:3}
A.cm.prototype={
a7(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.bw(a)
else{s=r.a
if(q.h("Q<1>").b(a))s.bx(a)
else s.bz(a)}},
bj(a,b){var s=this.a
if(this.b)s.a3(new A.aa(a,b))
else s.b_(new A.aa(a,b))},
$icR:1}
A.fS.prototype={
$1(a){return this.a.$2(0,a)},
$S:21}
A.fT.prototype={
$2(a,b){this.a.$2(1,new A.bL(a,t.l.a(b)))},
$S:46}
A.fY.prototype={
$2(a,b){this.a(A.ak(a),b)},
$S:47}
A.aa.prototype={
j(a){return A.t(this.a)},
$iC:1,
ga9(){return this.b}}
A.e6.prototype={
$0(){this.c.a(null)
this.b.by(null)},
$S:3}
A.bp.prototype={
bj(a,b){if((this.a.a&30)!==0)throw A.h(A.hx("Future already completed"))
this.a3(A.lN(a,b))},
cn(a){return this.bj(a,null)},
$icR:1}
A.aF.prototype={
a7(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.h(A.hx("Future already completed"))
s.bw(r.h("1/").a(a))},
aM(){return this.a7(null)},
a3(a){this.a.b_(a)}}
A.cz.prototype={
a7(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.h(A.hx("Future already completed"))
s.by(r.h("1/").a(a))},
aM(){return this.a7(null)},
a3(a){this.a.a3(a)}}
A.aG.prototype={
h3(a){if((this.c&15)!==6)return!0
return this.b.b.bo(t.al.a(this.d),a.a,t.y,t.K)},
fY(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.ha(q,m,a.b,o,n,t.l)
else p=l.bo(t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.av(s))){if((r.c&1)!==0)throw A.h(A.a5("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.h(A.a5("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.v.prototype={
av(a,b,c){var s,r,q,p=this.$ti
p.u(c).h("1/(2)").a(a)
s=$.y
if(s===B.i){if(b!=null&&!t.Q.b(b)&&!t.v.b(b))throw A.h(A.dK(b,"onError",u.c))}else{c.h("@<0/>").u(p.c).h("1(2)").a(a)
if(b!=null)b=A.jj(b,s)}r=new A.v(s,c.h("v<0>"))
q=b==null?1:3
this.aB(new A.aG(r,q,a,b,p.h("@<1>").u(c).h("aG<1,2>")))
return r},
au(a,b){return this.av(a,null,b)},
c8(a,b,c){var s,r=this.$ti
r.u(c).h("1/(2)").a(a)
s=new A.v($.y,c.h("v<0>"))
this.aB(new A.aG(s,19,a,b,r.h("@<1>").u(c).h("aG<1,2>")))
return s},
er(a){this.a=this.a&1|16
this.c=a},
aC(a){this.a=a.a&30|this.a&1
this.c=a.c},
aB(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.aB(a)
return}r.aC(s)}A.dD(null,null,r.b,t.M.a(new A.ft(r,a)))}},
bZ(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.bZ(a)
return}m.aC(n)}l.a=m.aI(a)
A.dD(null,null,m.b,t.M.a(new A.fy(l,m)))}},
al(){var s=t.F.a(this.c)
this.c=null
return this.aI(s)},
aI(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
by(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("Q<1>").b(a))A.fw(a,r,!0)
else{s=r.al()
q.c.a(a)
r.a=8
r.c=a
A.b0(r,s)}},
bz(a){var s,r=this
r.$ti.c.a(a)
s=r.al()
r.a=8
r.c=a
A.b0(r,s)},
d7(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.al()
q.aC(a)
A.b0(q,r)},
a3(a){var s=this.al()
this.er(a)
A.b0(this,s)},
bw(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("Q<1>").b(a)){this.bx(a)
return}this.cT(a)},
cT(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.dD(null,null,s.b,t.M.a(new A.fv(s,a)))},
bx(a){A.fw(this.$ti.h("Q<1>").a(a),this,!1)
return},
b_(a){this.a^=2
A.dD(null,null,this.b,t.M.a(new A.fu(this,a)))},
$iQ:1}
A.ft.prototype={
$0(){A.b0(this.a,this.b)},
$S:3}
A.fy.prototype={
$0(){A.b0(this.b,this.a.a)},
$S:3}
A.fx.prototype={
$0(){A.fw(this.a.a,this.b,!0)},
$S:3}
A.fv.prototype={
$0(){this.a.bz(this.b)},
$S:3}
A.fu.prototype={
$0(){this.a.a3(this.b)},
$S:3}
A.fB.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.h9(t.fO.a(q.d),t.z)}catch(p){s=A.av(p)
r=A.aS(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.hi(q)
n=k.a
n.c=new A.aa(q,o)
q=n}q.b=!0
return}if(j instanceof A.v&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.v){m=k.b.a
l=new A.v(m.b,m.$ti)
j.av(new A.fC(l,m),new A.fD(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:3}
A.fC.prototype={
$1(a){this.a.d7(this.b)},
$S:33}
A.fD.prototype={
$2(a,b){A.j(a)
t.l.a(b)
this.a.a3(new A.aa(a,b))},
$S:26}
A.fA.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.bo(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.av(l)
r=A.aS(l)
q=s
p=r
if(p==null)p=A.hi(q)
o=this.a
o.c=new A.aa(q,p)
o.b=!0}},
$S:3}
A.fz.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.h3(s)&&p.a.e!=null){p.c=p.a.fY(s)
p.b=!1}}catch(o){r=A.av(o)
q=A.aS(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.hi(p)
m=l.b
m.c=new A.aa(p,n)
p=m}p.b=!0}},
$S:3}
A.ds.prototype={}
A.dy.prototype={}
A.cE.prototype={$iiM:1}
A.fX.prototype={
$0(){A.kk(this.a,this.b)},
$S:3}
A.dx.prototype={
hb(a){var s,r,q
t.M.a(a)
try{if(B.i===$.y){a.$0()
return}A.jk(null,null,this,a,t.H)}catch(q){s=A.av(q)
r=A.aS(q)
A.hR(A.j(s),t.l.a(r))}},
ck(a){return new A.fH(this,t.M.a(a))},
h9(a,b){b.h("0()").a(a)
if($.y===B.i)return a.$0()
return A.jk(null,null,this,a,b)},
bo(a,b,c,d){c.h("@<0>").u(d).h("1(2)").a(a)
d.a(b)
if($.y===B.i)return a.$1(b)
return A.m2(null,null,this,a,b,c,d)},
ha(a,b,c,d,e,f){d.h("@<0>").u(e).u(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.y===B.i)return a.$2(b,c)
return A.m1(null,null,this,a,b,c,d,e,f)},
cq(a,b,c,d){return b.h("@<0>").u(c).u(d).h("1(2,3)").a(a)}}
A.fH.prototype={
$0(){return this.a.hb(this.b)},
$S:3}
A.cq.prototype={
gp(a){return this.a},
gap(){return new A.cr(this,this.$ti.h("cr<1>"))},
ab(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.dd(a)},
dd(a){var s=this.d
if(s==null)return!1
return this.b4(this.bG(s,a),a)>=0},
k(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.iX(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.iX(q,b)
return r}else return this.ds(b)},
ds(a){var s,r,q=this.d
if(q==null)return null
s=this.bG(q,a)
r=this.b4(s,a)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.bv(s==null?m.b=A.hI():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.bv(r==null?m.c=A.hI():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.hI()
p=A.dE(b)&1073741823
o=q[p]
if(o==null){A.hJ(q,p,[b,c]);++m.a
m.e=null}else{n=m.b4(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
ao(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.bA()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.k(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.h(A.af(m))}},
bA(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.ah(i.a,null,!1,t.z)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;j+=2){h[r]=l[j];++r}}}return i.e=h},
bv(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.hJ(a,b,c)},
bG(a,b){return a[A.dE(b)&1073741823]}}
A.bq.prototype={
b4(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.cr.prototype={
gp(a){return this.a.a},
gF(a){var s=this.a
return new A.cs(s,s.bA(),this.$ti.h("cs<1>"))}}
A.cs.prototype={
gt(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.h(A.af(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iR:1}
A.u.prototype={
gF(a){return new A.aY(a,this.gp(a),A.b8(a).h("aY<u.E>"))},
K(a,b){return this.k(a,b)},
ac(a,b,c){var s=A.b8(a)
return new A.X(a,s.u(c).h("1(u.E)").a(b),s.h("@<u.E>").u(c).h("X<1,2>"))},
cs(a,b){return A.hy(a,0,A.cJ(b,"count",t.S),A.b8(a).h("u.E"))},
j(a){return A.ii(a,"[","]")}}
A.aO.prototype={
ao(a,b){var s,r,q,p=A.P(this)
p.h("~(1,2)").a(b)
for(s=this.gap(),s=s.gF(s),p=p.y[1];s.q();){r=s.gt()
q=this.k(0,r)
b.$2(r,q==null?p.a(q):q)}},
fO(a){var s,r
for(s=J.aU(A.P(this).h("k<W<1,2>>").a(a));s.q();){r=s.gt()
this.l(0,r.a,r.b)}},
gp(a){var s=this.gap()
return s.gp(s)},
j(a){return A.hv(this)},
$iaA:1}
A.eH.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.t(a)
r.a=(r.a+=s)+": "
s=A.t(b)
r.a+=s},
$S:67}
A.fP.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:25}
A.fO.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:25}
A.cL.prototype={
fT(a,b){var s
t.L.a(a)
s=B.ac.an(a)
return s}}
A.fL.prototype={
an(a){var s,r,q=a.length,p=A.c5(0,null,q),o=new Uint8Array(p)
for(s=0;s<p;++s){if(!(s<q))return A.a(a,s)
r=a.charCodeAt(s)
if((r&4294967168)!==0)throw A.h(A.dK(a,"string","Contains invalid characters."))
if(!(s<p))return A.a(o,s)
o[s]=r}return o}}
A.dM.prototype={}
A.fK.prototype={
an(a){var s,r,q,p
t.L.a(a)
s=a.length
r=A.c5(0,null,s)
for(q=0;q<r;++q){if(!(q<s))return A.a(a,q)
p=a[q]
if((p&4294967168)>>>0!==0){if(!this.a)throw A.h(A.hm("Invalid value in input: "+p,null,null))
return this.df(a,0,r)}}return A.iJ(a,0,r)},
df(a,b,c){var s,r,q
t.L.a(a)
for(s=b,r="";s<c;++s){if(!(s<a.length))return A.a(a,s)
q=a[s]
r+=A.bk((q&4294967168)>>>0!==0?65533:q)}return r.charCodeAt(0)==0?r:r}}
A.dL.prototype={}
A.bF.prototype={}
A.cT.prototype={}
A.cX.prototype={}
A.fa.prototype={
an(a){var s,r,q,p,o=a.length,n=A.c5(0,null,o)
if(n===0)return new Uint8Array(0)
s=n*3
r=new Uint8Array(s)
q=new A.fQ(r)
if(q.dr(a,0,n)!==n){p=n-1
if(!(p>=0&&p<o))return A.a(a,p)
q.bh()}return new Uint8Array(r.subarray(0,A.lD(0,q.b,s)))}}
A.fQ.prototype={
bh(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.B(q)
s=q.length
if(!(p<s))return A.a(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.a(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.a(q,p)
q[p]=189},
f9(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.B(r)
o=r.length
if(!(q<o))return A.a(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(!(p<o))return A.a(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(!(q<o))return A.a(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(!(p<o))return A.a(r,p)
r[p]=s&63|128
return!0}else{n.bh()
return!1}},
dr(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.a(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.B(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.a(a,m)
if(k.f9(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.bh()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.B(s)
if(!(m<q))return A.a(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.B(s)
if(!(m<q))return A.a(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.a(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.a(s,m)
s[m]=n&63|128}}}return o}}
A.dq.prototype={}
A.fN.prototype={
de(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.c5(b,c,a.length)
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.lp(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.lo(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.b0(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.lq(o)
l.b=0
throw A.h(A.hm(m,a,p+l.c))}return n},
b0(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.b.N(b+c,2)
r=q.b0(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.b0(a,s,c,d)}return q.fU(a,b,c,d)},
fU(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bn(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.a(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;d=o){if(!(s>=0&&s<256))return A.a(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.a(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.bk(f)
e.a+=p
if(d===a0)break $label0$0
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.bk(h)
e.a+=p
break
case 65:p=A.bk(h)
e.a+=p;--d
break
default:p=A.bk(h)
e.a=(e.a+=p)+p
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break $label0$0
o=d+1
if(!(d>=0&&d<c))return A.a(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.a(a,d)
s=a[d]
if(s<128){while(!0){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.a(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.a(a,l)
p=A.bk(a[l])
e.a+=p}else{p=A.iJ(a,d,n)
e.a+=p}if(n===a0)break $label0$0
d=o}else d=o}if(a1&&g>32)if(r){c=A.bk(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.I.prototype={
a0(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.S(p,r)
return new A.I(p===0?!1:s,r,p)},
dj(a){var s,r,q,p,o,n,m,l=this.c
if(l===0)return $.T()
s=l+a
r=this.b
q=new Uint16Array(s)
for(p=l-1,o=r.length;p>=0;--p){n=p+a
if(!(p<o))return A.a(r,p)
m=r[p]
if(!(n>=0&&n<s))return A.a(q,n)
q[n]=m}o=this.a
n=A.S(s,q)
return new A.I(n===0?!1:o,q,n)},
dk(a){var s,r,q,p,o,n,m,l,k=this,j=k.c
if(j===0)return $.T()
s=j-a
if(s<=0)return k.a?$.i3():$.T()
r=k.b
q=new Uint16Array(s)
for(p=r.length,o=a;o<j;++o){n=o-a
if(!(o>=0&&o<p))return A.a(r,o)
m=r[o]
if(!(n<s))return A.a(q,n)
q[n]=m}n=k.a
m=A.S(s,q)
l=new A.I(m===0?!1:n,q,m)
if(n)for(o=0;o<a;++o){if(!(o<p))return A.a(r,o)
if(r[o]!==0)return l.aw(0,$.aI())}return l},
a1(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.h(A.a5("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.b.N(b,16)
if(B.b.a_(b,16)===0)return n.dj(r)
q=s+r+1
p=new Uint16Array(q)
A.iU(n.b,s,b,p)
s=n.a
o=A.S(q,p)
return new A.I(o===0?!1:s,p,o)},
aV(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.h(A.a5("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.b.N(b,16)
q=B.b.a_(b,16)
if(q===0)return j.dk(r)
p=s-r
if(p<=0)return j.a?$.i3():$.T()
o=j.b
n=new Uint16Array(p)
A.l6(o,s,b,n)
s=j.a
m=A.S(p,n)
l=new A.I(m===0?!1:s,n,m)
if(s){s=o.length
if(!(r>=0&&r<s))return A.a(o,r)
if((o[r]&B.b.a1(1,q)-1)!==0)return l.aw(0,$.aI())
for(k=0;k<r;++k){if(!(k<s))return A.a(o,k)
if(o[k]!==0)return l.aw(0,$.aI())}}return l},
aL(a,b){var s,r=this.a
if(r===b.a){s=A.fm(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
aA(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.aA(p,b)
if(o===0)return $.T()
if(n===0)return p.a===b?p:p.a0(0)
s=o+1
r=new Uint16Array(s)
A.l4(p.b,o,a.b,n,r)
q=A.S(s,r)
return new A.I(q===0?!1:b,r,q)},
a2(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.T()
s=a.c
if(s===0)return p.a===b?p:p.a0(0)
r=new Uint16Array(o)
A.du(p.b,o,a.b,s,r)
q=A.S(o,r)
return new A.I(q===0?!1:b,r,q)},
cM(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c
k=k<j?k:j
s=this.b
r=a.b
q=new Uint16Array(k)
for(p=s.length,o=r.length,n=0;n<k;++n){if(!(n<p))return A.a(s,n)
m=s[n]
if(!(n<o))return A.a(r,n)
l=r[n]
if(!(n<k))return A.a(q,n)
q[n]=m&l}p=A.S(k,q)
return new A.I(!1,q,p)},
cL(a,b){var s,r,q,p,o,n=this.c,m=this.b,l=a.b,k=new Uint16Array(n),j=a.c
if(n<j)j=n
for(s=m.length,r=l.length,q=0;q<j;++q){if(!(q<s))return A.a(m,q)
p=m[q]
if(!(q<r))return A.a(l,q)
o=l[q]
if(!(q<n))return A.a(k,q)
k[q]=p&~o}for(q=j;q<n;++q){if(!(q>=0&&q<s))return A.a(m,q)
r=m[q]
if(!(q<n))return A.a(k,q)
k[q]=r}s=A.S(n,k)
return new A.I(!1,k,s)},
cN(a,b){var s,r,q,p,o,n,m,l,k=this.c,j=a.c,i=k>j?k:j,h=this.b,g=a.b,f=new Uint16Array(i)
if(k<j){s=k
r=a}else{s=j
r=this}for(q=h.length,p=g.length,o=0;o<s;++o){if(!(o<q))return A.a(h,o)
n=h[o]
if(!(o<p))return A.a(g,o)
m=g[o]
if(!(o<i))return A.a(f,o)
f[o]=n|m}l=r.b
for(q=l.length,o=s;o<i;++o){if(!(o>=0&&o<q))return A.a(l,o)
p=l[o]
if(!(o<i))return A.a(f,o)
f[o]=p}q=A.S(i,f)
return new A.I(q!==0,f,q)},
cu(a,b){var s,r,q,p=this
t.ev.a(b)
if(p.c===0||b.c===0)return $.T()
s=p.a
if(s===b.a){if(s){s=$.aI()
return p.a2(s,!0).cN(b.a2(s,!0),!0).aA(s,!0)}return p.cM(b,!1)}if(s){r=p
q=b}else{r=b
q=p}return q.cL(r.a2($.aI(),!1),!1)},
aS(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.aA(b,r)
if(A.fm(q.b,p,b.b,s)>=0)return q.a2(b,r)
return b.a2(q,!r)},
aw(a,b){var s,r,q=this,p=q.c
if(p===0)return b.a0(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.aA(b,r)
if(A.fm(q.b,p,b.b,s)>=0)return q.a2(b,r)
return b.a2(q,!r)},
V(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.T()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=q.length,n=0;n<k;){if(!(n<o))return A.a(q,n)
A.iV(q[n],r,0,p,n,l);++n}o=this.a!==b.a
m=A.S(s,p)
return new A.I(m===0?!1:o,p,m)},
bC(a){var s,r,q,p
if(this.c<a.c)return $.T()
this.bD(a)
s=$.hD.S()-$.co.S()
r=A.hF($.hC.S(),$.co.S(),$.hD.S(),s)
q=A.S(s,r)
p=new A.I(!1,r,q)
return this.a!==a.a&&q>0?p.a0(0):p},
c_(a){var s,r,q,p=this
if(p.c<a.c)return p
p.bD(a)
s=A.hF($.hC.S(),0,$.co.S(),$.co.S())
r=A.S($.co.S(),s)
q=new A.I(!1,s,r)
if($.hE.S()>0)q=q.aV(0,$.hE.S())
return p.a&&q.c>0?q.a0(0):q},
bD(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.iR&&a.c===$.iT&&c.b===$.iQ&&a.b===$.iS)return
s=a.b
r=a.c
q=r-1
if(!(q>=0&&q<s.length))return A.a(s,q)
p=16-B.b.gam(s[q])
if(p>0){o=new Uint16Array(r+5)
n=A.iP(s,r,p,o)
m=new Uint16Array(b+5)
l=A.iP(c.b,b,p,m)}else{m=A.hF(c.b,0,b,b+2)
n=r
o=s
l=b}q=n-1
if(!(q>=0&&q<o.length))return A.a(o,q)
k=o[q]
j=l-n
i=new Uint16Array(l)
h=A.hG(o,n,j,i)
g=l+1
q=m.$flags|0
if(A.fm(m,l,i,h)>=0){q&2&&A.B(m)
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=1
A.du(m,g,i,h,m)}else{q&2&&A.B(m)
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=0}q=n+2
f=new Uint16Array(q)
if(!(n>=0&&n<q))return A.a(f,n)
f[n]=1
A.du(f,n+1,o,n,f)
e=l-1
for(q=m.length;j>0;){d=A.l5(k,m,e);--j
A.iV(d,f,0,m,j,n)
if(!(e>=0&&e<q))return A.a(m,e)
if(m[e]<d){h=A.hG(f,n,j,i)
A.du(m,g,i,h,m)
for(;--d,m[e]<d;)A.du(m,g,i,h,m)}--e}$.iQ=c.b
$.iR=b
$.iS=s
$.iT=r
$.hC.b=m
$.hD.b=g
$.co.b=n
$.hE.b=p},
gB(a){var s,r,q,p,o=new A.fn(),n=this.c
if(n===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=r.length,p=0;p<n;++p){if(!(p<q))return A.a(r,p)
s=o.$2(s,r[p])}return new A.fo().$1(s)},
Z(a,b){if(b==null)return!1
return b instanceof A.I&&this.aL(0,b)===0},
gam(a){var s,r,q,p,o,n,m=this.c
if(m===0)return 0
s=this.b
r=m-1
q=s.length
if(!(r>=0&&r<q))return A.a(s,r)
p=s[r]
o=16*r+B.b.gam(p)
if(!this.a)return o
if((p&p-1)!==0)return o
for(n=m-2;n>=0;--n){if(!(n<q))return A.a(s,n)
if(s[n]!==0)return o}return o-1},
h8(a){var s,r
if(a===0)return $.aI()
s=$.aI()
for(r=this;a!==0;){if((a&1)===1)s=s.V(0,r)
a=a>>>1
if(a!==0)r=r.V(0,r)}return s},
aQ(a){var s,r,q,p
for(s=this.c-1,r=this.b,q=r.length,p=0;s>=0;--s){if(!(s<q))return A.a(r,s)
p=p*65536+r[s]}return this.a?-p:p},
j(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a){m=n.b
if(0>=m.length)return A.a(m,0)
return B.b.j(-m[0])}m=n.b
if(0>=m.length)return A.a(m,0)
return B.b.j(m[0])}s=A.b([],t.s)
m=n.a
r=m?n.a0(0):n
for(;r.c>1;){q=$.jP()
if(q.c===0)A.a0(B.y)
p=r.c_(q).j(0)
B.a.n(s,p)
o=p.length
if(o===1)B.a.n(s,"000")
if(o===2)B.a.n(s,"00")
if(o===3)B.a.n(s,"0")
r=r.bC(q)}q=r.b
if(0>=q.length)return A.a(q,0)
B.a.n(s,B.b.j(q[0]))
if(m)B.a.n(s,"-")
return new A.c6(s,t.bJ).bl(0)}}
A.fn.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:39}
A.fo.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:32}
A.cU.prototype={
Z(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.cU)if(this.a===b.a)s=this.b===b.b
return s},
gB(a){return A.kG(this.a,this.b,B.p,B.p)},
j(a){var s=this,r=A.kh(A.kO(s)),q=A.cV(A.kM(s)),p=A.cV(A.kI(s)),o=A.cV(A.kJ(s)),n=A.cV(A.kL(s)),m=A.cV(A.kN(s)),l=A.ie(A.kK(s)),k=s.b,j=k===0?"":A.ie(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"}}
A.cW.prototype={
Z(a,b){if(b==null)return!1
return b instanceof A.cW},
gB(a){return B.b.gB(0)},
j(a){return"0:00:00."+B.f.cp(B.b.j(0),6,"0")}}
A.fr.prototype={
j(a){return this.R()}}
A.C.prototype={
ga9(){return A.kH(this)}}
A.cM.prototype={
j(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.e_(s)
return"Assertion failed"}}
A.aD.prototype={}
A.ae.prototype={
gb3(){return"Invalid argument"+(!this.a?"(s)":"")},
gb2(){return""},
j(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gb3()+q+o
if(!s.a)return n
return n+s.gb2()+": "+A.e_(s.gbk())},
gbk(){return this.b}}
A.bl.prototype={
gbk(){return A.jb(this.b)},
gb3(){return"RangeError"},
gb2(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.t(q):""
else if(q==null)s=": Not greater than or equal to "+A.t(r)
else if(q>r)s=": Not in inclusive range "+A.t(r)+".."+A.t(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.t(r)
return s}}
A.cY.prototype={
gbk(){return A.ak(this.b)},
gb3(){return"RangeError"},
gb2(){if(A.ak(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gp(a){return this.f}}
A.ci.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.dm.prototype={
j(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.bm.prototype={
j(a){return"Bad state: "+this.a}}
A.cS.prototype={
j(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.e_(s)+"."}}
A.de.prototype={
j(a){return"Out of Memory"},
ga9(){return null},
$iC:1}
A.ca.prototype={
j(a){return"Stack Overflow"},
ga9(){return null},
$iC:1}
A.fs.prototype={
j(a){return"Exception: "+this.a}}
A.e2.prototype={
j(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.f.az(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.a(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.a(e,n)
m=e.charCodeAt(n)
if(m===10||m===13){r=n
break}}l=""
if(r-p>78){k="..."
if(f-p<75){j=p+75
i=p}else{if(r-f<75){i=r-75
j=r
k=""}else{i=f-36
j=f+36}l="..."}}else{j=r
i=p
k=""}return g+l+B.f.az(e,i,j)+k+"\n"+B.f.V(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.t(f)+")"):g}}
A.cZ.prototype={
ga9(){return null},
j(a){return"IntegerDivisionByZeroException"},
$iC:1}
A.k.prototype={
ac(a,b,c){var s=A.P(this)
return A.ix(this,s.u(c).h("1(k.E)").a(b),s.h("k.E"),c)},
T(a,b){var s,r,q=this.gF(this)
if(!q.q())return""
s=J.a4(q.gt())
if(!q.q())return s
if(b.length===0){r=s
do r+=J.a4(q.gt())
while(q.q())}else{r=s
do r=r+b+J.a4(q.gt())
while(q.q())}return r.charCodeAt(0)==0?r:r},
gp(a){var s,r=this.gF(this)
for(s=0;r.q();)++s
return s},
K(a,b){var s,r
A.di(b,"index")
s=this.gF(this)
for(r=b;s.q();){if(r===0)return s.gt();--r}throw A.h(A.hn(b,b-r,this,"index"))},
j(a){return A.kn(this,"(",")")}}
A.W.prototype={
j(a){return"MapEntry("+A.t(this.a)+": "+A.t(this.b)+")"}}
A.O.prototype={
gB(a){return A.f.prototype.gB.call(this,0)},
j(a){return"null"}}
A.f.prototype={$if:1,
Z(a,b){return this===b},
gB(a){return A.c4(this)},
j(a){return"Instance of '"+A.dh(this)+"'"},
gG(a){return A.hV(this)},
toString(){return this.j(this)}}
A.dz.prototype={
j(a){return""},
$ias:1}
A.bn.prototype={
gp(a){return this.a.length},
j(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.e5.prototype={
$2(a,b){var s=t.g
this.a.av(new A.e3(s.a(a)),new A.e4(s.a(b)),t.X)},
$S:28}
A.e3.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:64}
A.e4.prototype={
$2(a,b){var s,r,q,p
A.j(a)
t.l.a(b)
s=t.g.a(v.G.Error)
r=A.fZ(s,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."],t.m)
if(t.e.b(a))A.a0("Attempting to box non-Dart object.")
q={}
q[$.jV()]=a
r.error=q
r.stack=b.j(0)
p=this.a
p.call(p,r)},
$S:26}
A.h8.prototype={
$1(a){var s,r,q,p
if(A.ji(a))return a
s=this.a
if(s.ab(a))return s.k(0,a)
if(t.eO.b(a)){r={}
s.l(0,a,r)
for(s=a.gap(),s=s.gF(s);s.q();){q=s.gt()
r[q]=this.$1(a.k(0,q))}return r}else if(t.R.b(a)){p=[]
s.l(0,a,p)
B.a.a6(p,J.dF(a,this,t.z))
return p}else return a},
$S:15}
A.hb.prototype={
$1(a){return this.a.a7(this.b.h("0/?").a(a))},
$S:21}
A.hc.prototype={
$1(a){if(a==null)return this.a.cn(new A.eJ(a===undefined))
return this.a.cn(a)},
$S:21}
A.h_.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.jh(a))return a
s=this.a
a.toString
if(s.ab(a))return s.k(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.a0(A.a8(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.cJ(!0,"isUtc",t.y)
return new A.cU(r,0,!0)}if(a instanceof RegExp)throw A.h(A.a5("structured clone of RegExp",null))
if(typeof Promise!="undefined"&&a instanceof Promise)return A.jv(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.eG(p,p)
s.l(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.b7(n),p=s.gF(n);p.q();)m.push(A.hU(p.gt()))
for(l=0;l<s.gp(n);++l){k=s.k(n,l)
if(!(l<m.length))return A.a(m,l)
j=m[l]
if(k!=null)o.l(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.l(0,a,o)
h=A.ak(a.length)
for(s=J.b6(i),l=0;l<h;++l)o.push(this.$1(s.k(i,l)))
return o}return a},
$S:15}
A.eJ.prototype={
j(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.fF.prototype={
cJ(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.h(A.dp("No source of cryptographically secure random numbers available."))},
bm(a){var s,r,q,p,o,n,m,l,k=null
if(a<=0||a>4294967296)throw A.h(new A.bl(k,k,!1,k,k,"max must be in range 0 < max \u2264 2^32, was "+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.B(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.ak(Math.pow(256,s))
for(o=a-1,n=(a&o)===0;!0;){crypto.getRandomValues(J.jZ(B.aE.gcl(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.dY.prototype={}
A.bB.prototype={
R(){return"Base58Alphabets."+this.b}}
A.dO.prototype={}
A.fj.prototype={
n(a,b){var s=this,r=s.b,q=A.bw(b,"\n","")
r=s.b=r+A.bw(q,"\r","")
for(q=s.a;r.length>=4;){B.a.a6(q,A.iN(B.f.az(r,0,4)))
r=B.f.aW(s.b,4)
s.b=r}}}
A.fk.prototype={
$0(){var s,r=t.S,q=A.ah(256,-1,!1,r)
for(s=0;s<64;++s)B.a.l(q,u.n.charCodeAt(s),s)
return A.hu(q,r)},
$S:60}
A.fl.prototype={
n(a,b){var s,r,q,p=this.b
B.a.a6(p,t.L.a(b))
for(s=this.a,r=p.$flags|0;p.length>=3;){q=A.iO(B.a.W(p,0,3))
s.a+=q
r&1&&A.B(p,18)
A.c5(0,3,p.length)
p.splice(0,3)}}}
A.dN.prototype={}
A.dW.prototype={
j(a){return this.a}}
A.eR.prototype={
aR(a){var s,r,q,p,o,n=this
t.L.a(a)
if(n.f)throw A.h(B.ap)
s=a.length
n.e+=s
r=0
if(n.d>0){q=n.c
while(!0){p=n.d
if(!(p<64&&s>0))break
n.d=p+1
o=r+1
if(!(r<a.length))return A.a(a,r)
B.a.l(q,p,a[r]&255);--s
r=o}if(p===64){n.b8(n.b,n.a,q,0,64)
n.d=0}}if(s>=64){r=n.b8(n.b,n.a,a,r,s)
s=B.b.a_(s,64)}for(q=n.c;s>0;r=o){p=n.d++
o=r+1
if(!(r<a.length))return A.a(a,r)
B.a.l(q,p,a[r]&255);--s}return n},
fW(a){var s,r,q,p,o,n,m,l=this
t.L.a(a)
if(!l.f){s=l.e
r=l.d
q=B.b.N(s,536870912)
p=B.b.a_(s,64)<56?64:128
o=l.c
B.a.l(o,r,128)
for(n=r+1,m=p-8;n<m;++n)B.a.l(o,n,0)
A.i0(q>>>0,o,m)
A.i0(s<<3>>>0,o,p-4)
l.b8(l.b,l.a,o,0,p)
l.f=!0}for(q=l.a,n=0;n<8;++n)A.i0(q[n],a,n*4)
return l},
cr(){var s=this,r=s.a
B.a.l(r,0,1779033703)
B.a.l(r,1,3144134277)
B.a.l(r,2,1013904242)
B.a.l(r,3,2773480762)
B.a.l(r,4,1359893119)
B.a.l(r,5,2600822924)
B.a.l(r,6,528734635)
B.a.l(r,7,1541459225)
s.e=s.d=0
s.f=!1
return s},
b8(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=t.L
a2.a(a3)
a2.a(a4)
a2.a(a5)
for(a2=this.r,s=a2.length;a7>=64;){r=a4[0]
q=a4[1]
p=a4[2]
o=a4[3]
n=a4[4]
m=a4[5]
l=a4[6]
k=a4[7]
for(j=0;j<16;++j){i=a6+j*4
h=a5.length
if(!(i<h))return A.a(a5,i)
g=a5[i]
f=i+1
if(!(f<h))return A.a(a5,f)
f=a5[f]
e=i+2
if(!(e<h))return A.a(a5,e)
e=a5[e]
d=i+3
if(!(d<h))return A.a(a5,d)
B.a.l(a3,j,(g<<24|f<<16|e<<8|a5[d])>>>0)}for(j=16;j<64;++j){c=a3[j-2]
b=a3[j-15]
B.a.l(a3,j,(((((c>>>17|c<<15)^(c>>>19|c<<13)^c>>>10)>>>0)+a3[j-7]>>>0)+(((b>>>7|b<<25)^(b>>>18|b<<14)^b>>>3)>>>0)>>>0)+a3[j-16]>>>0)}for(j=0;j<64;++j,k=l,l=m,m=n,n=a0,o=p,p=q,q=r,r=a1){if(!(j<s))return A.a(a2,j)
a=((((n>>>6|n<<26)^(n>>>11|n<<21)^(n>>>25|n<<7))>>>0)+((n&m^~n&l)>>>0)>>>0)+((k+a2[j]>>>0)+a3[j]>>>0)>>>0
a0=o+a>>>0
a1=a+((((r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10))>>>0)+((r&q^r&p^q&p)>>>0)>>>0)>>>0}B.a.l(a4,0,a4[0]+r>>>0)
B.a.l(a4,1,a4[1]+q>>>0)
B.a.l(a4,2,a4[2]+p>>>0)
B.a.l(a4,3,a4[3]+o>>>0)
B.a.l(a4,4,a4[4]+n>>>0)
B.a.l(a4,5,a4[5]+m>>>0)
B.a.l(a4,6,a4[6]+l>>>0)
B.a.l(a4,7,a4[7]+k>>>0)
a6+=64
a7-=64}return a6}}
A.dP.prototype={
j(a){var s,r,q=this.b
if(q==null)q=null
else{s=A.P(q).h("az<1,2>")
s=new A.ck(new A.az(q,s),s.h("F(k.E)").a(new A.dQ()),s.h("ck<k.E>"))
q=s}if(q==null)q=A.b([],t.ao)
s=t.N
r=A.eG(s,t.z)
r.fO(q)
if(r.a===0)return this.a
q=r.$ti.h("az<1,2>")
return this.a+" "+A.ix(new A.az(r,q),q.h("m(k.E)").a(new A.dR()),q.h("k.E"),s).T(0,", ")}}
A.dQ.prototype={
$1(a){return t.I.a(a).b!=null},
$S:55}
A.dR.prototype={
$1(a){t.I.a(a)
return a.a+": "+A.t(a.b)},
$S:54}
A.bb.prototype={}
A.eI.prototype={}
A.fE.prototype={
fV(a,b){var s,r,q,p,o,n
t.L.a(a)
A.ka(a,"Invalid hex bytes")
s=a.length
r=A.ah(s*2,"",!1,t.N)
for(q=0;q<s;++q){if(!(q<a.length))return A.a(a,q)
p=a[q]
o=q*2
n=B.b.a4(p,4)
if(!(n<16))return A.a(B.v,n)
B.a.l(r,o,B.v[n])
n=p&15
if(!(n<16))return A.a(B.v,n)
B.a.l(r,o+1,B.v[n])}return B.a.bl(r)},
fS(a){var s,r,q,p,o,n,m=a.length
if(m===0){m=J.ij(0,t.S)
return m}if((m&1)!==0)throw A.h(B.aa)
s=A.ah(B.b.N(m,2),0,!1,t.S)
for(r=!1,q=0;q<m;q+=2){p=a.charCodeAt(q)
o=p<128?B.a_[p]:256
p=q+1
if(!(p<m))return A.a(a,p)
p=a.charCodeAt(p)
n=p<128?B.a_[p]:256
B.a.l(s,B.b.N(q,2),(o<<4|n)&255)
r=B.W.bp(r,B.W.bp(o===256,n===256))}if(r)throw A.h(B.ab)
return s}}
A.aC.prototype={
R(){return"StringEncoding."+this.b}}
A.f4.prototype={
$1(a){var s
if(a===6)return this.a.bm(16)&15|64
else{s=this.a
if(a===8)return s.bm(4)&3|8
else return s.bm(256)}},
$S:32}
A.f5.prototype={
$1(a){return B.f.cp(B.b.hc(A.ak(a),16),2,"0")},
$S:53}
A.dZ.prototype={
Z(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.cj))return!1
if(A.hV(b)!==A.hV(s))return!1
return A.kg([s.d,null,s.a],[b.d,null,b.a],t.z)},
gB(a){return A.ig([this.d,null,this.a])}}
A.d6.prototype={
R(){return"LockId."+this.b}}
A.eZ.prototype={
ag(a,b){var s=B.a1
return this.cH(b.h("0/()").a(a),b,b)},
cH(a,b,c){var s=0,r=A.ao(c),q,p=2,o=[],n=[],m=this,l,k,j,i,h
var $async$ag=A.ap(function(d,e){if(d===1){o.push(e)
s=p}while(true)switch(s){case 0:k=B.a1
j=m.a
i=j.k(0,k)
h=new A.cz(new A.v($.y,t.U),t.aj)
j.l(0,k,h.a)
p=3
s=i!=null?6:7
break
case 6:s=8
return A.aH(i,$async$ag)
case 8:case 7:l=a.$0()
s=l instanceof A.v?9:11
break
case 9:j=l
s=12
return A.aH(b.h("Q<0>").b(j)?j:A.hH(b.a(j),b),$async$ag)
case 12:j=e
q=j
n=[1]
s=4
break
s=10
break
case 11:q=l
n=[1]
s=4
break
case 10:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
h.toString
h.aM()
s=n.pop()
break
case 5:case 1:return A.am(q,r)
case 2:return A.al(o.at(-1),r)}})
return A.an($async$ag,r)}}
A.dr.prototype={
R(){return"Web3ErrorCode."+this.b}}
A.cj.prototype={
j(a){return this.a}}
A.dC.prototype={}
A.ef.prototype={
$1(a){return J.a4(A.j(a))},
$S:56}
A.ee.prototype={
$0(){return A.l(this.a.dataHex)},
$S:19}
A.ed.prototype={
$0(){return B.f.aW(A.l(this.a.dataHex),2)},
$S:19}
A.ea.prototype={
$0(){return A.j(this.a.data)},
$S:10}
A.eb.prototype={
$1(a){A.j(a).serializeFixedBytes(A.j(this.a.data))},
$S:20}
A.ec.prototype={
$0(){return A.l(this.a.dataHex)},
$S:19}
A.aK.prototype={
R(){return"JSAptosWalletStandardUserResponseStatus."+this.b}}
A.eg.prototype={
$1(a){return t.c_.a(a).c===this.a},
$S:50}
A.eh.prototype={
$0(){return A.a0(B.m)},
$S:7}
A.aP.prototype={
cw(a,b,c,d){var s,r,q
A.j(a)
try{r=v.G
s=r.Reflect.get(a,b,d)
if(typeof s==="undefined"){r=A.ja(r.Reflect.set(a,b,c,d))
return r}return!1}catch(q){return!1}},
cv(a,b,c){var s,r,q,p
A.j(a)
s=b==null
r=!s||null
if(r===!0)if(!s&&typeof b==="string"){q=A.l(A.hU(b))
if(B.f.bs(q,"is")){p=v.G.Reflect.get(a,b,c)
if(p!=null)return p
return!0}}return v.G.Reflect.get(a,b,c)}}
A.df.prototype={}
A.dX.prototype={
$1(a){var s
A.d(a)
s=v.G
A.d(s.window).dispatchEvent(this.a)
A.d(s.window).removeEventListener("eip6963:requestProvider",A.c(this))},
$S:11}
A.fe.prototype={
$2(a,b){var s,r,q,p=t.g
p.a(a)
p.a(b)
p=this.a.av(new A.fb(a),new A.fc(b),t.X)
s=new A.fd(b,a)
r=p.$ti
q=$.y
if(q!==B.i)s=A.jj(s,q)
p.aB(new A.aG(new A.v(q,r),2,null,s,r.h("aG<1,1>")))},
$S:28}
A.fb.prototype={
$1(a){var s=this.a
s.call(s,a)
return a},
$S:15}
A.fc.prototype={
$2(a,b){var s
A.j(a)
t.l.a(b)
s=this.a
s.call(s,a)
return a},
$S:37}
A.fd.prototype={
$1(a){this.a.call(this.b,a)
return a},
$S:30}
A.eO.prototype={
$0(){return this.a.a},
$S:23}
A.eP.prototype={
$0(){return this.a.b},
$S:13}
A.eQ.prototype={
$0(){var s,r,q=this.a,p=v.G,o=A.d(p.Object),n=A.d(o.create.apply(o,[null]))
n.set=A.hO(q.gaU())
n.get=A.hN(q.gaT())
o=A.d(p.Object)
s=A.d(o.create.apply(o,[null]))
s.get=A.p(new A.eO(q))
o=A.d(p.Object)
o.defineProperty.apply(o,[n,"debugKey",s])
o=A.d(p.Object)
r=A.d(o.create.apply(o,[null]))
r.get=A.p(new A.eP(q))
p=A.d(p.Object)
p.defineProperty.apply(p,[n,"object",r])
return n},
$S:10}
A.eN.prototype={
$1(a){return A.l(a)},
$S:35}
A.h9.prototype={
$1(a){var s,r,q=this
A.d(a)
s=q.a
if(s.a)return
r=A.d(A.d(a.detail).data)
if(A.iq(A.l(r.status))===B.P){s=r.data
if(s==null)s=A.j(s)
if(A.z(s.message)!=null)A.d(v.G.console).error(A.z(s.message))
s=q.b.d
if(s!=null)s.aM()
return}s.a=!0
A.d(v.G.window).addEventListener("WALLET_ACTIVATION",A.c(q))
s=r.data
q.b.h0(A.l(s==null?null:A.hU(s)))},
$S:11}
A.aL.prototype={
R(){return"JSWalletMessageType."+this.b}}
A.ey.prototype={
$1(a){return t.fr.a(a).b===this.a},
$S:66}
A.ez.prototype={
$0(){return A.a0(B.m)},
$S:7}
A.V.prototype={
R(){return"JSNetworkEventType."+this.b}}
A.ep.prototype={
$1(a){return t.bs.a(a).b===this.a},
$S:36}
A.eq.prototype={
$0(){return A.a0(B.m)},
$S:7}
A.ab.prototype={
R(){return"JSEventType."+this.b}}
A.en.prototype={
$1(a){return t.A.a(a).b===this.a},
$S:31}
A.eo.prototype={
$0(){return A.a0(B.m)},
$S:7}
A.em.prototype={
$1(a){return t.A.a(a).b===this.a},
$S:31}
A.aM.prototype={
R(){return"JSWalletResponseType."+this.b}}
A.eD.prototype={
$1(a){return t.e5.a(a).b===this.a},
$S:38}
A.eE.prototype={
$0(){return A.a0(B.m)},
$S:7}
A.K.prototype={
R(){return"JSClientType."+this.b}}
A.ek.prototype={
$1(a){return t.D.a(a).b===this.a},
$S:57}
A.el.prototype={
$0(){return A.a0(B.m)},
$S:7}
A.c3.prototype={
R(){return"PageRequestType."+this.b}}
A.ei.prototype={
gbn(){var s=this.a
return s===$?this.a=new A.eL(this.gh7(),A.eG(t.N,t.hg)):s},
gbg(){var s,r,q=this,p=q.b
if(p===$){s=q.gbn()
r=A.b([],t.G)
q.b!==$&&A.i_("_walletStandardController")
p=q.b=new A.d3(s,{},{},r)}return p},
aK(){var s=0,r=A.ao(t.H),q,p=this,o
var $async$aK=A.ap(function(a,b){if(a===1)return A.al(b,r)
while(true)switch(s){case 0:o=p.c
o=o==null?null:o.ag(new A.ej(p),t.H)
s=3
return A.aH(o instanceof A.v?o:A.hH(o,t.H),$async$aK)
case 3:q=b
s=1
break
case 1:return A.am(q,r)}})
return A.an($async$aK,r)},
gbY(){var s,r,q,p,o,n=this,m=n.f
if(m===$){s=n.gbn()
r=t.G
q=t.A
p=t.u
o=A.D([B.E,new A.bK(A.D([B.h,A.b([],r),B.j,A.b([],r),B.l,A.b([],r),B.c,A.b([],r),B.n,A.b([],r)],q,p),s,A.D([B.d,A.b([],r),B.c,A.b([],r)],q,p)),B.L,new A.cg({base58:!1,hex:!1},A.D([B.h,A.b([],r),B.j,A.b([],r),B.l,A.b([],r),B.n,A.b([],r)],q,p),s,A.D([B.d,A.b([],r),B.c,A.b([],r)],q,p)),B.G,new A.c9(s,A.D([B.d,A.b([],r),B.c,A.b([],r)],q,p)),B.K,new A.cf(s,A.D([B.d,A.b([],r),B.c,A.b([],r)],q,p)),B.H,new A.cb(s,A.D([B.d,A.b([],r),B.c,A.b([],r)],q,p)),B.I,new A.cd(A.D([B.h,A.b([],r)],q,p),s,A.D([B.d,A.b([],r),B.c,A.b([],r)],q,p)),B.z,new A.bz(A.D([B.h,A.b([],r),B.j,A.b([],r)],q,p),s,A.D([B.d,A.b([],r),B.c,A.b([],r)],q,p)),B.J,new A.ce(s,A.D([B.d,A.b([],r),B.c,A.b([],r)],q,p)),B.D,new A.bH(s,A.D([B.d,A.b([],r),B.c,A.b([],r)],q,p)),B.B,new A.bD(s,A.D([B.d,A.b([],r),B.c,A.b([],r)],q,p)),B.M,new A.c7(s,A.D([B.d,A.b([],r),B.c,A.b([],r)],q,p)),B.F,new A.bX(s,A.D([B.d,A.b([],r),B.c,A.b([],r)],q,p)),B.C,new A.by(s,A.D([B.d,A.b([],r),B.c,A.b([],r)],q,p)),B.A,new A.bC(s,A.D([B.d,A.b([],r),B.c,A.b([],r)],q,p))],t.D,t.aQ)
n.f!==$&&A.i_("_networks")
n.f=o
m=o}return m},
dY(){var s,r,q,p,o,n,m,l,k,j,i="Initializing wallet failed: "
try{for(m=this.gbY(),m=new A.az(m,A.P(m).h("az<1,2>")).gF(0),l=v.G;m.q();){k=m.d
k.toString
s=k
try{r=s.b
r.O(this.gbg().c)}catch(j){q=A.av(j)
p=A.aS(j)
A.d(l.console).error(i+s.a.c+" "+A.t(q)+" "+A.t(p))}}this.gbg().ak()}catch(j){o=A.av(j)
n=A.aS(j)
A.d(v.G.console).error(i+A.t(o)+" "+A.t(n))}},
fZ(a){var s,r,q,p,o
if(A.ky(A.l(A.d(a.data).type))===B.Y){s=this.gbn().b.k(0,A.l(a.requestId))
if(s!=null){r=A.d(a.data)
s.b.a7(r)}return}q=A.d(a.data)
if((A.z(a.client)==null?null:A.il(A.z(a.client)))==null){s=this.gbg()
q=A.d(q.data)
r=t.r
if(r.a(q.accounts)!=null){p=r.a(q.accounts)
p.toString
s.b.accounts=p}if(r.a(q.chains)!=null){p=r.a(q.chains)
p.toString
s.b.chains=p}o={}
o.change=q
o.accounts=r.a(q.accounts)
o.chains=r.a(q.chains)
s.dl(o)
return}s=this.gbY()
s=s.k(0,A.z(a.client)==null?null:A.il(A.z(a.client)))
if(s!=null)s.aq(q)}}
A.ej.prototype={
$0(){var s=0,r=A.ao(t.H),q,p=2,o=[],n=[],m=this,l
var $async$$0=A.ap(function(a,b){if(a===1){o.push(b)
s=p}while(true)switch(s){case 0:p=3
l=m.a.d
l=l==null?null:l.a
s=6
return A.aH(l instanceof A.v?l:A.hH(l,t.H),$async$$0)
case 6:l=b
q=l
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
l=m.a
l.c=l.d=null
s=n.pop()
break
case 5:case 1:return A.am(q,r)
case 2:return A.al(o.at(-1),r)}})
return A.an($async$$0,r)},
$S:40}
A.d2.prototype={
aP(a){var s=0,r=A.ao(t.H),q=this,p,o,n
var $async$aP=A.ap(function(b,c){if(b===1)return A.al(c,r)
while(true)switch(s){case 0:s=2
return A.aH(q.aK(),$async$aP)
case 2:p=q.e
o=v.G
n=A.d(new o.CustomEvent(p,{bubbles:!0,cancelable:!1,detail:a,data:null}))
A.d(o.window).dispatchEvent(n)
return A.am(null,r)}})
return A.an($async$aP,r)},
ef(a){this.fZ(A.d(A.d(a).detail))},
h0(a){var s,r=this
if(r.e!=null)return
r.e="WALLET_"+a
A.d(v.G.window).addEventListener("ETH_"+a,A.c(r.gee()))
s=r.d
if(s!=null)s.aM()}}
A.d3.prototype={
bb(a,b){var s
A.l(a)
t.g.a(b)
s=A.bO(a)
if(s!==B.d)return null
if(s!=null)B.a.n(this.d,b)
this.a.a.$1(A.iz(null,A.bi(B.d)))
return A.p(new A.eu(this,b))},
dl(a){var s,r,q,p=A.ac(this.d,t.g)
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.au)(p),++r){q=p[r]
q.call(q,a)}},
m(a){return A.Y(new A.er(this,A.E(a)).$0(),t.m)},
A(){return this.m(null)},
ak(){var s,r,q,p=this,o=p.c
o["standard:events"]=A.a1(A.r(p.gJ()))
s={}
s.connect=A.c(p.gv())
s.version="1.0.0"
o["standard:connect"]=s
r=p.b
r.features=o
r.name="OnChain"
r.version="1.0.0"
r.icon=u.f
r.accounts=A.b([],t.O)
r=v.G
q=A.d(new r.CustomEvent("wallet-standard:register-wallet",{bubbles:!1,cancelable:!1,detail:A.c(new A.es(p))}))
A.d(r.window).addEventListener("wallet-standard:app-ready",A.c(new A.et(q)))
A.d(r.window).dispatchEvent(q)}}
A.eu.prototype={
$0(){B.a.ar(this.a.d,this.b)},
$S:3}
A.er.prototype={
$0(){var s=0,r=A.ao(t.m),q,p=this,o,n,m
var $async$$0=A.ap(function(a,b){if(a===1)return A.al(b,r)
while(true)switch(s){case 0:n=p.a
m=p.b
m=m!=null?A.b([m],t.O):null
s=3
return A.aH(n.a.P("connect",m,t.m),$async$$0)
case 3:o=b
n.b.accounts=t.c.a(o.accounts)
q=o
s=1
break
case 1:return A.am(q,r)}})
return A.an($async$$0,r)},
$S:43}
A.es.prototype={
$1(a){A.j(a).register(this.a.b)},
$S:20}
A.et.prototype={
$1(a){A.j(a)
A.d(v.G.window).dispatchEvent(this.a)},
$S:20}
A.M.prototype={
C(a,b,c,d){return this.a.ct(this.gH(),a,b,c,d)},
i(a,b,c){return this.C(a,b,B.o,c)},
af(a,b,c){return this.C(a,null,b,c)},
ae(a,b){return this.C(a,null,B.o,b)},
P(a,b,c){return this.hi(a,b,c,c)},
hg(a,b){return this.P(a,null,b)},
hi(a,b,c,d){var s=0,r=A.ao(d),q,p=this
var $async$P=A.ap(function(e,f){if(e===1)return A.al(f,r)
while(true)switch(s){case 0:q=p.a.ad(p.gH(),a,b,B.o,c)
s=1
break
case 1:return A.am(q,r)}})
return A.an($async$P,r)},
di(){return this.a.hj(this.gH(),"disconnect",t.X)},
aa(a){var s=A.kt(A.l(a.event))
if(!(s===B.h||s===B.j||s===B.l||s===B.d))return
this.a.a.$1(A.iz(this.gH(),a))},
bb(a,b){var s,r
A.l(a)
t.g.a(b)
s=A.bO(a)
r=this.b
if(r.k(0,s)==null)throw A.h({message:"Unsuported "+A.kv(a)+" event."})
if(s!=null){r=r.k(0,s)
r.toString
B.a.n(r,b)
this.aa(A.bi(s))}},
aD(a,b){var s,r,q,p=A.ac(t.u.a(a),t.g)
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.au)(p),++r){q=p[r]
q.call(q,b)}},
bE(a,b){var s=this.b
if(!s.ab(a))return
s=s.k(0,a)
s.toString
this.aD(s,b)},
aq(a){var s,r,q=A.d(a.data),p=A.eA(q)
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.au)(p),++r)switch(p[r]){case B.X:this.bE(B.d,A.E(q.change))
break}}}
A.eL.prototype={
aG(a,b){return this.dX(a,b)},
dX(a,b){var s=0,r=A.ao(t.m),q,p=2,o=[],n=[],m=this,l,k,j,i
var $async$aG=A.ap(function(c,d){if(c===1){o.push(d)
s=p}while(true)switch(s){case 0:i=new A.df(A.kZ(),new A.aF(new A.v($.y,t.et),t.x))
p=3
k=i.a
j=a==null?null:a.b
l={data:b,requestId:k,client:j}
m.a.$1(l)
j=m.b
k=i.a
if(j.k(0,k)==null)j.l(0,k,i)
s=6
return A.aH(i.b.a,$async$aG)
case 6:k=d
q=k
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
m.b.ar(0,i.a)
s=n.pop()
break
case 5:case 1:return A.am(q,r)
case 2:return A.al(o.at(-1),r)}})
return A.an($async$aG,r)},
ct(a,b,c,d,e){return A.Y(this.ad(a,b,c,d,e),e)},
hj(a,b,c){return this.ct(a,b,null,B.o,c)},
h4(a,b,c){throw A.h(a)},
h5(a,b,c){return this.h4(a,b,c,t.X)},
ad(a,b,c,d,e){return this.hh(a,b,c,d,e,e)},
P(a,b,c){return this.ad(null,a,b,B.o,c)},
hh(a,b,c,d,e,f){var s=0,r=A.ao(f),q,p=this,o,n
var $async$ad=A.ap(function(g,h){if(g===1)return A.al(h,r)
while(true)$async$outer:switch(s){case 0:s=3
return A.aH(p.aG(a,{type:"request",method:b,params:c,providerType:d.b}),$async$ad)
case 3:n=h
switch(A.iq(A.l(n.status))){case B.Z:q=e.a(n.data)
s=1
break $async$outer
case B.P:o=n.data
q=p.h5(o==null?A.j(o):o,b,d)
s=1
break $async$outer}case 1:return A.am(q,r)}})
return A.an($async$ad,r)}}
A.by.prototype={
O(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.ge_(),e=A.p(f),d=A.c(g.gah()),c={}
c.isEnabled=e
c.apiVersion="1"
c.name="OnChain"
c.icon=u.f
c.enable=d
e=v.G
if(e.cardano==null)e.cardano={}
A.j(e.cardano).onChain=A.a3(c,"cardanoExtension: ",t.K)
a["cardano:connect"]=A.im(A.c(g.gv()))
c={}
c.signMessage=A.c(g.gD())
c.version="1.0.0"
a["cardano:signMessage"]=c
a["cardano:events"]=A.a1(A.r(g.gJ()))
a["cardano:disconnect"]=A.ag(A.p(g.gI()))
c={}
c.getNetwork=A.p(g.gfk())
c.version="1.0.0"
a["cardano:getNetworkId"]=c
c={}
c.getBalance=A.p(g.gfe())
c.version="1.0.0"
a["cardano:getBalance"]=c
c={}
c.getUtxos=A.r(g.gfz())
c.version="1.0.0"
a["cardano:getUtxos"]=c
c={}
c.getAddressUtxos=A.c(g.gfc())
c.version="1.0.0"
a["cardano:getAddressUtxos"]=c
c={}
c.getCollateral=A.c(g.gfi())
c.version="1.0.0"
a["cardano:getCollateral"]=c
c={}
c.getUsedAddresses=A.c(g.gfv())
c.version="1.0.0"
a["cardano:getUsedAddresses"]=c
c={}
c.getUnusedAddresses=A.c(g.gft())
c.version="1.0.0"
a["cardano:getUnusedAddresses"]=c
c={}
c.getChangeAddress=A.p(g.gfg())
c.version="1.0.0"
a["cardano:getChangeAddress"]=c
c={}
c.getRewardAddresses=A.c(g.gfm())
c.version="1.0.0"
a["cardano:getRewardAddresses"]=c
c={}
c.signTx=A.r(g.gfE())
c.version="1.0.0"
a["cardano:signTx"]=c
c={}
c.signData=A.r(g.gfC())
c.version="1.0.0"
a["cardano:signData"]=c
c={}
c.signTransaction=A.c(g.gL())
c.version="1.0.0"
a["cardano:signTransaction"]=c
c={}
c.signAndSendTransaction=A.c(g.gbe())
c.version="1.0.0"
a["cardano:signAndSendTransaction"]=c
c={}
c.getScript=A.c(g.gfo())
c.version="1.0.0"
a["cardano:getScript"]=c
c={}
c.isEnabled=A.p(f)
c.version="1.0.0"
a["cardano:isEnabled"]=c
c={}
c.submitTx=A.c(g.gfI())
c.version="1.0.0"
a["cardano:submitTx"]=c
c={}
c.submitTxs=A.c(g.gfK())
c.version="1.0.0"
a["cardano:submitTxs"]=c
c={}
c.signTxs=A.c(g.gfG())
c.version="1.0.0"
a["cardano:signTxs"]=c
c={}
c.getAccountPub=A.c(g.gfa())
c.version="1.0.0"
a["cardano:getAccountPub"]=c
c={}
c.getScriptRequirements=A.c(g.gfq())
c.version="1.0.0"
a["cardano:getScriptRequirements"]=c
c={}
c.submitUnsignedTx=A.c(g.gfM())
c.version="1.0.0"
a["cardano:submitUnsignedTx"]=c
f=A.c(g.geS())
e=A.c(g.gf4())
c={}
c.signTxs=f
c.submitTxs=e
s={}
s.getAccountPub=A.c(g.gdt())
e=A.c(g.gdO())
f=A.c(g.gdM())
d=A.c(g.gf6())
r=A.c(g.gdD())
q=g.gdB()
p=A.c(q)
o={}
o.getScriptRequirements=e
o.getScript=f
o.submitUnsignedTx=d
o.getCompletedTx=r
o.getCollateral=p
p=A.p(g.gdv())
r=A.p(g.gdz())
q=A.c(q)
d=A.p(g.gdF())
f=A.p(g.gdH())
e=A.c(g.gdK())
n=A.c(g.gdQ())
m=A.c(g.gdS())
l=A.r(g.gdU())
k=A.r(g.geB())
j=A.r(g.geQ())
i=A.c(g.gf2())
h={}
h.getExtensions=d
h.getNetworkId=f
h.getCollateral=q
h.getBalance=p
h.getUsedAddresses=m
h.getUnusedAddresses=n
h.getChangeAddress=r
h.getRewardAddresses=e
h.signTx=j
h.signData=k
h.submitTx=i
h.getUtxos=l
h.cip103=c
h.cip104=s
h.cip106=o
g.c!==$&&A.mx("_api")
g.c=h},
cd(a){return this.i("cardano_getScriptRequirements",A.A(A.E(a)),t.c)},
fs(){return this.cd(null)},
bR(a){return this.C("cardano_getScriptRequirements",A.A(A.z(a)),B.e,t.c)},
dP(){return this.bR(null)},
dE(a){return this.C("cardano_getCompletedTx",A.b([A.l(a)],t.s),B.e,t.c)},
f7(a){return this.C("cardano_submitUnsignedTx",A.b([A.l(a)],t.s),B.e,t.N)},
fN(a){return this.i("cardano_submitUnsignedTx",A.b([A.l(a)],t.s),t.N)},
bQ(a){return this.C("cardano_getScript",A.A(A.E(a)),B.e,t.N)},
dN(){return this.bQ(null)},
cc(a){return this.i("cardano_getScript",A.A(A.E(a)),t.N)},
fp(){return this.cc(null)},
c5(a,b){var s
A.l(a)
s=A.a7(A.aj(b))
return this.C("cardano_signTx",A.b([a,s==null?!1:s],t.f),B.e,t.K)},
eR(a){return this.c5(a,null)},
c9(a){return this.i("cardano_getAccountPub",A.A(A.E(a)),t.N)},
fb(){return this.c9(null)},
bF(a){return this.C("cardano_getAccountPub",A.A(A.E(a)),B.e,t.N)},
du(){return this.bF(null)},
m(a){var s=A.a2(A.z(a)),r=s==null?null:A.b([s],t.s)
return this.i("cardano_requestAccounts",r,t.m)},
A(){return this.m(null)},
aE(a){var s=A.a2(A.z(a)),r=s==null?null:A.b([s],t.s),q=t.m
return A.Y(this.P("cardano_requestAccounts",r,q).au(new A.dG(this),q),q)},
b1(){return this.aE(null)},
e0(){return this.ae("cardano_isEnabled",t.y)},
fl(){return this.ae("cardano_getNetworkId",t.y)},
dI(){return this.af("cardano_getNetworkId",B.e,t.i)},
b7(a,b){A.z(a)
A.E(b)
return this.C("cardano_getUtxos",[A.a7(a),A.a7(b)],B.e,t.c)},
dV(){return this.b7(null,null)},
dW(a){return this.b7(a,null)},
fd(a){return this.i("cardano_getAddressUtxos",A.A(A.d(a)),t.c)},
bi(a,b){A.z(a)
A.E(b)
return this.i("cardano_getUtxos",[A.a7(a),A.a7(b)],t.c)},
fA(){return this.bi(null,null)},
fB(a){return this.bi(a,null)},
ff(){return this.ae("cardano_getBalance",t.N)},
dw(){return this.af("cardano_getBalance",B.e,t.N)},
cf(a){return this.i("cardano_getUsedAddresses",[A.a7(A.E(a))],t.c)},
fw(){return this.cf(null)},
bT(a){return this.C("cardano_getUsedAddresses",[A.a7(A.E(a))],B.e,t.c)},
dT(){return this.bT(null)},
bS(a){return this.C("cardano_getUnusedAddresses",[A.a7(A.E(a))],B.e,t.c)},
dR(){return this.bS(null)},
ce(a){return this.i("cardano_getUnusedAddresses",[A.a7(A.E(a))],t.c)},
fu(){return this.ce(null)},
cb(a){return this.i("cardano_getRewardAddresses",[A.a7(A.E(a))],t.c)},
fn(){return this.cb(null)},
bP(a){return this.C("cardano_getRewardAddresses",[A.a7(A.E(a))],B.e,t.c)},
dL(){return this.bP(null)},
ca(a){return this.i("cardano_getCollateral",[A.a7(A.E(a))],t.r)},
fj(){return this.ca(null)},
bH(a){return this.C("cardano_getCollateral",[A.a7(A.E(a))],B.e,t.r)},
dC(){return this.bH(null)},
cg(a,b){var s
A.l(a)
s=A.a7(A.aj(b))
return this.i("cardano_signTx",A.b([a,s==null?!1:s],t.f),t.K)},
fF(a){return this.cg(a,null)},
eT(a){return this.C("cardano_signTxs",A.A(t.c.a(a)),B.e,t.K)},
f5(a){return this.C("cardano_submitTxs",A.A(t.c.a(a)),B.e,t.K)},
fH(a){return this.i("cardano_signTxs",A.A(t.c.a(a)),t.K)},
fL(a){return this.i("cardano_submitTxs",A.A(t.c.a(a)),t.K)},
fD(a,b){return this.i("cardano_signData",A.b([A.j(a),A.j(b)],t.f),t.m)},
eC(a,b){return this.C("cardano_signData",A.b([A.l(a),A.j(b)],t.f),B.e,t.m)},
fh(){return this.ae("cardano_getChangeAddress",t.N)},
dA(){return this.af("cardano_getChangeAddress",B.e,t.N)},
M(a){return this.i("cardano_signTransaction",A.A(A.j(a)),t.c)},
bf(a){return this.i("cardano_signAndSendTransaction",A.A(A.j(a)),t.c)},
E(a){return this.i("cardano_signMessage",A.b([A.d(a)],t.O),t.K)},
dG(){return this.af("cardano_getExtensions",B.e,t.c)},
f3(a){return this.C("cardano_submitTx",A.b([A.l(a)],t.s),B.e,t.N)},
fJ(a){return this.i("cardano_submitTx",A.b([A.l(a)],t.s),t.N)},
gH(){return B.C}}
A.dG.prototype={
$1(a){var s
A.d(a)
s=this.a.c
s===$&&A.my("_api")
return A.a3(s,"api: ",t.K)},
$S:1}
A.bz.prototype={
d6(a){return this.i("wallet_switchAptosChain",A.b([A.j(a)],t.f),t.K)},
E(a){var s=t.K
return A.Y(this.P("aptos_signMessage",A.b([A.j(a)],t.f),s).au(new A.dI(),s),s)},
M(a){var s=t.K
return A.Y(this.P("aptos_signTransaction",A.b([A.kr(A.j(a))],t.f),s).au(new A.dJ(),s),s)},
c0(a){var s,r,q
A.z(a)
s=a!=null?A.a2(a):null
r=A.b([],t.s)
if(s!=null)r.push(s)
q=t.K
return A.Y(this.P("aptos_requestAccounts",r,q).au(new A.dH(),q),q)},
eq(){return this.c0(null)},
e9(){return this.ae("aptos_network",t.K)},
eb(a){var s
t.g.a(a)
s=this.c.k(0,B.h)
s.toString
B.a.n(s,a)
this.aa(A.bi(B.h))},
ed(a){var s
t.g.a(a)
s=this.c.k(0,B.j)
s.toString
B.a.n(s,a)
this.aa(A.bi(B.j))},
aD(a,b){var s,r,q=A.ac(t.u.a(a),t.g)
for(s=q.length,r=0;r<q.length;q.length===s||(0,A.au)(q),++r)q[r].call(null,b)},
aq(a){var s,r,q,p,o,n,m,l=this
l.aX(a)
s=A.d(a.data)
r=A.eA(s)
for(q=r.length,p=l.c,o=0;o<r.length;r.length===q||(0,A.au)(r),++o)switch(r[o]){case B.u:n=p.k(0,B.h)
n.toString
l.aD(n,A.E(s.account))
break
case B.t:m=s.chainChanged
if(m!=null){n=p.k(0,B.j)
n.toString
l.aD(n,m)}break}},
gH(){return B.z},
O(a){var s=this,r=s.gep(),q={}
q.connect=A.c(r)
q.version="1.0.0"
a["aptos:connect"]=q
q={}
q.signTransaction=A.c(s.gL())
q.version="1.0.0"
a["aptos:signTransaction"]=q
q={}
q.signMessage=A.c(s.gD())
q.version="1.0.0"
a["aptos:signMessage"]=q
q={}
q.account=A.c(r)
q.version="1.0.0"
a["aptos:account"]=q
q={}
q.onNetworkChange=A.c(s.gec())
q.version="1.0.0"
a["aptos:onNetworkChange"]=q
q={}
q.network=A.p(s.ge8())
q.version="1.0.0"
a["aptos:network"]=q
q={}
q.onAccountChange=A.c(s.gea())
q.version="1.0.0"
a["aptos:onAccountChange"]=q
q={}
q.disconnect=A.p(s.gI())
q.version="1.0.0"
a["aptos:disconnect"]=q
q={}
q.changeNetwork=A.c(s.gd5())
q.version="1.0.0"
a["aptos:changeNetwork"]=q
a["aptos:events"]=A.a1(A.r(s.gJ()))}}
A.dI.prototype={
$1(a){var s
A.j(a)
if(A.hp(A.l(a.status))===B.r)return a
s=A.j(a.args)
A.ho(s)
return A.hq(s,t.K)},
$S:12}
A.dJ.prototype={
$1(a){var s
A.j(a)
if(A.hp(A.l(a.status))===B.r)return a
s=A.j(a.args)
A.ho(s)
return A.hq(s,t.K)},
$S:12}
A.dH.prototype={
$1(a){var s,r
A.j(a)
if(A.hp(A.l(a.status))===B.r)return a
s=A.d(A.j(a.args))
A.ho(A.d(s.publicKey))
r=t.m
s.publicKey=A.a3(A.d(s.publicKey),null,r)
return A.hq(s,r)},
$S:12}
A.bD.prototype={
O(a){var s=this
a["bitcoin:connect"]=A.ir(A.c(s.gv()))
a["bitcoin:signPersonalMessage"]=A.iu(A.c(s.gd1()))
a["bitcoin:signTransaction"]=A.iv(A.c(s.gd3()))
a["bitcoin:getAccountAddresses"]=A.is(A.c(s.gb5()))
a["bitcoin:sendTransaction"]=A.it(A.c(s.gd_()))
a["bitcoin:disconnect"]=A.ag(A.p(s.gI()))
a["bitcoin:events"]=A.a1(A.r(s.gJ()))},
m(a){var s=A.a2(A.z(a)),r=s==null?null:A.b([s],t.s)
return this.i("bitcoin_requestAccounts",r,t.m)},
A(){return this.m(null)},
d2(a){return this.i("bitcoin_signPersonalMessage",A.b([A.j(a)],t.f),t.K)},
d4(a){return this.i("bitcoin_signTransaction",A.b([A.j(a)],t.f),t.K)},
b6(a){return this.i("bitcoin_getAccountAddresses",A.b([A.j(a)],t.f),t.c)},
d0(a){return this.i("bitcoin_sendTransaction",A.A(t.c.a(a)),t.K)},
gH(){return B.B}}
A.bC.prototype={
O(a){var s=this
a["bch:connect"]=A.ir(A.c(s.gv()))
a["bch:signPersonalMessage"]=A.iu(A.c(s.gcW()))
a["bch:signTransaction"]=A.iv(A.c(s.gcY()))
a["bch:getAccountAddresses"]=A.is(A.c(s.gb5()))
a["bch:sendTransaction"]=A.it(A.c(s.gcU()))
a["bch:disconnect"]=A.ag(A.p(s.gI()))
a["bch:events"]=A.a1(A.r(s.gJ()))},
m(a){var s=A.a2(A.z(a)),r=s==null?null:A.b([s],t.s)
return this.i("bch_requestAccounts",r,t.m)},
A(){return this.m(null)},
cX(a){return this.i("bch_signPersonalMessage",A.b([A.j(a)],t.f),t.K)},
cZ(a){return this.i("bch_signTransaction",A.b([A.j(a)],t.f),t.K)},
b6(a){return this.i("bch_getAccountAddresses",A.b([A.j(a)],t.f),t.c)},
cV(a){return this.i("bch_sendTransaction",A.A(t.c.a(a)),t.K)},
gH(){return B.A}}
A.bH.prototype={
co(a){var s=A.a2(A.z(a)),r=s==null?null:A.b([s],t.s)
return this.i("cosmos_requestAccounts",r,t.m)},
fR(){return this.co(null)},
E(a){return this.i("cosmos_signMessage",A.b([A.j(a)],t.f),t.K)},
cC(a){return this.i("cosmos_signTransactionDirect",A.b([A.j(a)],t.f),t.K)},
cA(a){return this.i("cosmos_signTransactionAmino",A.b([A.j(a)],t.f),t.K)},
bK(a,b){var s,r,q
A.l(a)
s=A.p(new A.dU(this,a))
r=A.r(new A.dV(this,a,b))
q={}
q.getAccounts=s
q.signDirect=r
return A.a3(q,null,t.K)},
bJ(a){return this.bK(a,null)},
bO(a,b){var s,r,q
A.l(a)
s=A.p(new A.dS(this,a))
r=A.r(new A.dT(this,a,b))
q={}
q.getAccounts=s
q.signAmino=r
return A.a3(q,null,t.K)},
bN(a){return this.bO(a,null)},
c6(a,b){var s,r
A.l(a)
s=this.bJ(a)
r={}
r.amino=this.bN(a)
r.direct=s
return A.a3(r,null,t.K)},
f0(a){return this.c6(a,null)},
dJ(a){A.l(a)
throw A.h(A.hB(null))},
gH(){return B.D},
aZ(a){return this.i("wallet_addCosmosChain",A.b([A.j(a)],t.f),t.y)},
M(a){return this.i("cosmos_signTransaction",A.b([A.j(a)],t.f),t.K)},
O(a){var s,r,q=this
if(q.c==null){s={}
s.getOfflineSigner=A.r(q.gbI())
s.getOfflineSignerOnlyAmino=A.r(q.gbM())
s.getOfflineSignerAuto=A.c(q.gbL())
r=A.a3(s,null,t.m)
q.c=s
q.d=r}r=v.G
r.cosmos=q.d
r.getOfflineSigner=A.r(q.gbI())
r.getOfflineSignerOnlyAmino=A.r(q.gbM())
r.getOfflineSignerAuto=A.c(q.gbL())
s={}
s.connect=A.c(q.gfQ())
s.version="1.0.0"
a["cosmos:connect"]=s
a["cosmos:events"]=A.a1(A.r(q.gJ()))
s={}
s.signer=A.r(q.gf_())
s.version="1.0.0"
a["cosmos:signer"]=s
s={}
s.signTransactionDirect=A.c(q.gcB())
s.version="1.0.0"
a["cosmos:signTransactionDirect"]=s
s={}
s.signTransactionAmino=A.c(q.gcz())
s.version="1.0.0"
a["cosmos:signTransactionAmino"]=s
s={}
s.addNewChain=A.c(q.gaY())
s.version="1.0.0"
a["cosmos:addNewChain"]=s
s={}
s.signMessage=A.c(q.gD())
s.version="1.0.0"
a["cosmos:signMessage"]=s
s={}
s.signTransaction=A.c(q.gL())
s.version="1.0.0"
a["cosmos:signTransaction"]=s
a["cosmos:disconnect"]=A.ag(A.p(q.gI()))}}
A.dU.prototype={
$0(){return this.a.i("cosmos_requestAccounts",A.iE(A.b([this.b],t.s)),t.c)},
$S:4}
A.dV.prototype={
$2(a,b){var s
A.l(a)
s={}
s.signDoc=A.j(b)
s.signerAddress=a
s.chainId=this.b
s.signOption=this.c
return this.a.i("cosmos_signTransactionDirect",A.b([s],t.f),t.K)},
$S:17}
A.dS.prototype={
$0(){return this.a.i("cosmos_requestAccounts",A.iE(A.b([this.b],t.s)),t.c)},
$S:4}
A.dT.prototype={
$2(a,b){var s
A.l(a)
A.j(b)
s={}
s.signDoc=A.l(A.d(v.G.JSON).stringify(b))
s.signerAddress=a
s.chainId=this.b
s.signOption=this.c
return this.a.i("cosmos_signTransactionAmino",A.b([s],t.f),t.K)},
$S:17}
A.bK.prototype={
bc(a){A.d(a)
return this.C(A.l(a.method),A.A(a.params),B.k,t.X)},
ak(){var s,r,q,p,o,n,m,l,k=this,j=k.c
if(j==null){j=A.p(k.gd8())
r=A.c(k.gaH())
q=A.r(k.gcP())
p=A.r(k.gei())
o=A.p(k.gI())
n={}
n.request=r
n.on=q
n.removeListener=p
n.disconnect=o
n.enable=j
n.connect=j
n.isOnChain=!0
k.c=n
j=n}m=A.a3(j,null,t.m)
s=m
try{v.G.ethereum=s}catch(l){A.d(v.G.console).error("failed to set ethereum ")}A.ki(s)},
d9(){return this.af("eth_requestAccounts",B.k,t.c)},
m(a){var s=A.a2(A.z(a)),r=s==null?null:A.b([s],t.s)
return this.i("eth_requestAccounts",r,t.m)},
A(){return this.m(null)},
aZ(a){return this.i("wallet_addEthereumChain",A.A(A.d(a)),t.N)},
eV(a){return this.i("eth_signTypedData",A.A(A.d(a)),t.N)},
eX(a){return this.i("eth_signTypedData_v3",A.A(A.d(a)),t.N)},
eZ(a){return this.i("eth_signTypedData_v4",A.A(A.d(a)),t.N)},
eh(a){return this.i("personal_sign",A.A(A.d(a)),t.N)},
dq(a){return this.i("eth_sign",A.A(A.d(a)),t.N)},
Y(a){return this.i("eth_sendTransaction",A.A(A.d(a)),t.N)},
O(a){var s,r=this
r.ak()
s={}
s.connect=A.c(r.gv())
s.version="1.0.0"
a["ethereum:connect"]=s
s={}
s.addNewChain=A.c(r.gaY())
s.version="1.0.0"
a["ethereum:addNewChain"]=s
s={}
s.signTypedData=A.c(r.geU())
s.version="1.0.0"
a["ethereum:signTypedData"]=s
s={}
s.signTypedDataV3=A.c(r.geW())
s.version="1.0.0"
a["ethereum:signTypedDataV3"]=s
s={}
s.signTypedDataV4=A.c(r.geY())
s.version="1.0.0"
a["ethereum:signTypedDataV4"]=s
s={}
s.personalSign=A.c(r.geg())
s.version="1.0.0"
a["ethereum:personalSign"]=s
s={}
s.ethSign=A.c(r.gdn())
s.version="1.0.0"
a["ethereum:ethSign"]=s
s={}
s.sendTransaction=A.c(r.gX())
s.version="1.0.0"
a["ethereum:sendTransaction"]=s
s={}
s.request=A.c(r.gaH())
s.version="1.0.0"
a["ethereum:request"]=s
a["ethereum:events"]=A.a1(A.r(r.gJ()))
a["ethereum:disconnect"]=A.ag(A.p(r.gI()))},
aq(a){var s,r,q,p,o,n,m,l=this,k=null
l.aX(a)
s=A.d(a.data)
r=A.eA(s)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.au)(r),++p)switch(r[p]){case B.u:o=l.c
if(o!=null){n=A.E(s.account)
n=n==null?k:A.l(n.address)
o.selectedAddress=n}break
case B.O:l.ai(B.c,s.message)
l.bE(B.c,s.message)
break
case B.N:o=A.E(s.networkAccounts)
l.ai(B.h,o==null?k:A.ip(o))
break
case B.t:m=A.E(s.chainChanged)
o=l.c
if(o!=null){n=m==null?k:A.l(m.chainId)
o.chainId=n}o=l.c
if(o!=null){n=m==null?k:A.l(m.netVersion)
o.networkVersion=n}if(s.disconnect!=null)l.ai(B.n,s.disconnect)
if(m!=null){if(s.disconnect==null)l.ai(B.l,m)
l.ai(B.j,A.l(m.chainId))}break}},
ai(a,b){var s,r,q
if(b==null||!this.d.ab(a))return
s=this.d.k(0,a)
s.toString
s=A.ac(s,t.g)
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.au)(s),++q)s[q].call(null,b)},
cQ(a,b){var s,r
A.l(a)
t.g.a(b)
s=A.bO(a)
if(s==null)return
r=this.d.k(0,s)
if(r!=null)B.a.n(r,b)
this.aa(A.bi(s))},
ej(a,b){var s
A.l(a)
t.g.a(b)
s=this.d.k(0,A.bO(a))
if(s!=null)B.a.ar(s,b)},
gH(){return B.E}}
A.bX.prototype={
O(a){var s=this,r={}
r.signAndSendTransaction=A.c(s.gX())
r.version="1.0.0"
a["monero:signAndSendTransaction"]=r
r={}
r.signMessage=A.c(s.gD())
r.version="1.0.0"
a["monero:signMessage"]=r
r={}
r.connect=A.c(s.gv())
r.version="1.0.0"
a["monero:connect"]=r
a["monero:events"]=A.a1(A.r(s.gJ()))
a["monero:disconnect"]=A.ag(A.p(s.gI()))},
m(a){var s=A.a2(A.z(a)),r=s==null?null:A.b([s],t.s)
return this.i("monero_requestAccounts",r,t.m)},
A(){return this.m(null)},
Y(a){return this.i("monero_signAndSendTransaction",A.b([A.j(a)],t.f),t.K)},
E(a){return this.i("monero_signMessage",A.b([A.d(a)],t.O),t.K)},
gH(){return B.F}}
A.c7.prototype={
O(a){var s=this,r={}
r.signAndSendTransaction=A.c(s.gX())
r.version="1.0.0"
a["xrpl:signAndSendTransaction"]=r
r={}
r.signTransaction=A.c(s.gL())
r.version="1.0.0"
a["xrpl:signTransaction"]=r
r={}
r.signMessage=A.c(s.gD())
r.version="1.0.0"
a["xrpl:signMessage"]=r
r={}
r.connect=A.c(s.gv())
r.version="1.0.0"
a["xrpl:connect"]=r
a["xrpl:events"]=A.a1(A.r(s.gJ()))
a["xrpl:disconnect"]=A.ag(A.p(s.gI()))},
m(a){var s=A.a2(A.z(a)),r=s==null?null:A.b([s],t.s)
return this.i("xrpl_requestAccounts",r,t.m)},
A(){return this.m(null)},
M(a){return this.i("xrpl_signTransaction",A.b([A.j(a)],t.f),t.K)},
Y(a){return this.i("xrpl_signAndSendTransaction",A.b([A.j(a)],t.f),t.K)},
E(a){return this.i("xrpl_signMessage",A.b([A.d(a)],t.O),t.K)},
gH(){return B.M}}
A.c9.prototype={
O(a){var s=this,r=A.c(s.gbe()),q=A.c(s.geJ()),p=A.c(s.ges()),o=A.c(s.gD()),n=$.jC(),m={}
m.signAllTransactions=p
m.version="1.0.0"
m.supportedTransactionVersions=n
a["solana:signAllTransactions"]=m
m={}
m.signTransaction=q
m.version="1.0.0"
m.supportedTransactionVersions=n
a["solana:signTransaction"]=m
m={}
m.signAndSendTransaction=r
m.version="1.0.0"
m.supportedTransactionVersions=n
a["solana:signAndSendTransaction"]=m
m={}
m.signMessage=o
m.version="1.0.0"
a["solana:signMessage"]=m
m={}
m.signAndSendAllTransactions=A.r(s.gez())
m.version="1.0.0"
m.supportedTransactionVersions=n
a["solana:signAndSendAllTransactions"]=m
a["solana:events"]=A.a1(A.r(s.gJ()))
m={}
m.connect=A.c(s.gv())
m.version="1.0.0"
a["solana:connect"]=m
m={}
m.signIn=A.c(s.geD())
m.version="1.0.0"
a["solana:signIn"]=m
a["solana:disconnect"]=A.ag(A.p(s.gI()))},
m(a){var s=A.a2(A.z(a)),r=s==null?null:A.b([s],t.s)
return this.i("solana_requestAccounts",r,t.m)},
A(){return this.m(null)},
eE(a){var s=t.m
return A.Y(this.P("solana_signIn",A.A(A.d(a)),s),s)},
E(a){var s=t.c
return A.Y(this.P("solana_signMessage",A.A(A.d(a)),s),s)},
eK(a){var s=t.c
return A.Y(this.P("solana_signTransaction",A.A(A.j(a)),s),s)},
eu(a){var s=t.c
return A.Y(this.P("solana_signAllTransactions",A.A(A.j(a)),s),s)},
bf(a){return this.i("solana_signAndSendTransaction",A.A(A.d(a)),t.c)},
c2(a,b){var s,r=t.c
r.a(a)
A.E(b)
s=A.A(a)
return this.i("solana_signAndSendAllTransactions",s,r)},
eA(a){return this.c2(a,null)},
gH(){return B.G}}
A.cb.prototype={
O(a){var s=this,r={}
r.signAndSendTransaction=A.c(s.gX())
r.version="1.0.0"
a["stellar:signAndSendTransaction"]=r
r={}
r.signTransaction=A.c(s.gL())
r.version="1.0.0"
a["stellar:signTransaction"]=r
r={}
r.signMessage=A.c(s.gD())
r.version="1.0.0"
a["stellar:signMessage"]=r
a["stellar:connect"]=A.im(A.c(s.gv()))
a["stellar:events"]=A.a1(A.r(s.gJ()))
a["stellar:disconnect"]=A.ag(A.p(s.gI()))},
m(a){var s=A.a2(A.z(a)),r=s==null?null:A.b([s],t.s)
return this.i("stellar_requestAccounts",r,t.m)},
A(){return this.m(null)},
M(a){return this.i("stellar_signTransaction",A.b([A.j(a)],t.f),t.K)},
Y(a){return this.i("stellar_sendTransaction",A.b([A.j(a)],t.f),t.K)},
E(a){return this.i("stellar_signMessage",A.b([A.d(a)],t.O),t.K)},
gH(){return B.H}}
A.cd.prototype={
O(a){var s,r=this
r.dZ()
s={}
s.signTransaction=A.c(r.gbr())
s.version="1.0.0"
a["polkadot:signTransaction"]=s
s={}
s.signMessage=A.c(r.gbq())
s.version="1.0.0"
a["polkadot:signMessage"]=s
s={}
s.addNewChain=A.c(r.gbV())
s.version="1.0.0"
a["polkadot:addNewChain"]=s
s={}
s.connect=A.c(r.gv())
s.version="1.0.0"
a["polkadot:connect"]=s
a["polkadot:events"]=A.a1(A.r(r.gJ()))
a["polkadot:disconnect"]=A.ag(A.p(r.gI()))},
dZ(){var s,r,q,p,o=this,n=null,m=o.d
if(m==null){s={}
r={}
q={}
p={}
q.signPayload=A.c(o.gbr())
q.signRaw=A.c(o.gbq())
q.update=A.c(o.ghe())
s.get=A.c(o.ge1())
s.provide=A.c(o.gbV())
r.get=A.c(o.gda())
r.subscribe=A.c(o.ge3())
m=t.m
p.metadata=A.a3(s,n,m)
p.accounts=A.a3(r,n,m)
p.signer=A.a3(q,n,m)
m=o.gah()
p.connect=A.c(m)
p.enable=A.c(m)
p.name="OnChain"
p.version="0.4.0"
m=o.d=new A.aP(n,p,t.p)}if(o.e==null)o.e=A.fZ(v.G.Proxy,[m.b,new A.eY(o).$0()],t.m)
m=v.G
if(A.E(m.injectedWeb3)==null)m.injectedWeb3={}
A.d(m.injectedWeb3)["0"]=o.e
m.substrate=o.e},
bU(a){A.aj(a)
return this.ae("polkadot_knownMetadata",t.m)},
e2(){return this.bU(null)},
e5(a){return this.i("wallet_addPolkadotChain",A.b([A.d(a)],t.O),t.y)},
cE(a){return this.i("polkadot_signTransaction",A.b([A.d(a)],t.O),t.m)},
cD(a){return this.i("polkadot_signMessage",A.b([A.d(a)],t.O),t.m)},
m(a){var s=A.a2(A.z(a)),r=s==null?null:A.b([s],t.s)
return this.i("polkadot_requestAccounts",r,t.m)},
A(){return this.m(null)},
bB(a){var s=t.c
return A.Y(this.hg("polkadot_requestAccounts",t.m).au(new A.eU(),s),s)},
dc(){return this.bB(null)},
aR(a){throw A.h($.i1())},
hf(){return this.aR(null)},
aE(a){A.l(a)
return A.Y(new A.eV(this).$0(),t.B)},
e4(a){var s
t.g.a(a)
s=this.c.k(0,B.h)
s.toString
B.a.n(s,a)
this.aa(A.bi(B.h))},
gH(){return B.I}}
A.eW.prototype={
$0(){return this.a.a},
$S:23}
A.eX.prototype={
$0(){return this.a.b},
$S:13}
A.eY.prototype={
$0(){var s,r,q,p,o,n=this.a.d
n.toString
s=v.G
r=A.d(s.Object)
q=A.d(r.create.apply(r,[null]))
q.set=A.hO(n.gaU())
q.get=A.hN(n.gaT())
r=A.d(s.Object)
p=A.d(r.create.apply(r,[null]))
p.get=A.p(new A.eW(n))
r=A.d(s.Object)
r.defineProperty.apply(r,[q,"debugKey",p])
r=A.d(s.Object)
o=A.d(r.create.apply(r,[null]))
o.get=A.p(new A.eX(n))
s=A.d(s.Object)
s.defineProperty.apply(s,[q,"object",o])
return q},
$S:10}
A.eU.prototype={
$1(a){return t.c.a(A.d(a).accounts)},
$S:61}
A.eV.prototype={
$0(){var s=0,r=A.ao(t.B),q,p=this
var $async$$0=A.ap(function(a,b){if(a===1)return A.al(b,r)
while(true)switch(s){case 0:q=p.a.e
s=1
break
case 1:return A.am(q,r)}})
return A.an($async$$0,r)},
$S:62}
A.ce.prototype={
E(a){return this.i("sui_signMessage",A.b([A.j(a)],t.f),t.K)},
eI(a){return this.i("sui_signPersonalMessage",A.b([A.j(a)],t.f),t.K)},
a5(a,b,c){A.me(c,t.K,"T","_signTransction_")
return this.eP(a,b,c,c)},
eP(a,b,c,d){var s=0,r=A.ao(d),q,p=this,o,n
var $async$a5=A.ap(function(e,f){if(e===1)return A.al(f,r)
while(true)switch(s){case 0:o=a
n=A
s=3
return A.aH(A.ev(b),$async$a5)
case 3:q=p.P(o,n.b([f],t.f),c)
s=1
break
case 1:return A.am(q,r)}})
return A.an($async$a5,r)},
M(a){var s=t.K
return A.Y(this.a5("sui_signTransaction",A.j(a),s),s)},
ey(a){var s=t.K
return A.Y(this.a5("sui_signAndExecuteTransaction",A.j(a),s),s)},
ew(a){var s=t.K
return A.Y(this.a5("sui_signAndExecuteTransactionBlock",A.j(a),s),s)},
eM(a){var s=t.K
return A.Y(this.a5("sui_signTransactionBlock",A.j(a),s),s)},
eo(a){A.j(a)
return A.kl(A.km(B.S,t.z))},
gH(){return B.J},
m(a){var s=A.a2(A.z(a)),r=s==null?null:A.b([s],t.s)
return this.i("sui_requestAccounts",r,t.m)},
A(){return this.m(null)},
O(a){var s=this,r={}
r.signTransaction=A.c(s.gL())
r.version="1.0.0"
a["sui:signTransaction"]=r
r={}
r.connect=A.c(s.gv())
r.version="1.0.0"
a["sui:connect"]=r
r={}
r.signTransactionBlock=A.c(s.geL())
r.version="1.0.0"
a["sui:signTransactionBlock"]=r
r={}
r.signAndExecuteTransactionBlock=A.c(s.gev())
r.version="1.0.0"
a["sui:signAndExecuteTransactionBlock"]=r
r={}
r.signAndExecuteTransaction=A.c(s.gex())
r.version="2.0.0"
a["sui:signAndExecuteTransaction"]=r
r={}
r.signPersonalMessage=A.c(s.geH())
r.version="1.0.0"
a["sui:signPersonalMessage"]=r
r={}
r.signMessage=A.c(s.gD())
r.version="1.0.0"
a["sui:signMessage"]=r
r={}
r.reportTransactionEffects=A.c(s.gen())
r.version="1.0.0"
a["sui:reportTransactionEffects"]=r
r={}
r.disconnect=A.p(s.gI())
r.version="1.0.0"
a["sui:disconnect"]=r
a["sui:events"]=A.a1(A.r(s.gJ()))}}
A.cf.prototype={
O(a){var s=this,r={}
r.signAndSendTransaction=A.c(s.gX())
r.version="1.0.0"
a["ton:signAndSendTransaction"]=r
r={}
r.signTransaction=A.c(s.gL())
r.version="1.0.0"
a["ton:signTransaction"]=r
r={}
r.signMessage=A.c(s.gD())
r.version="1.0.0"
a["ton:signMessage"]=r
r={}
r.connect=A.c(s.gv())
r.version="1.0.0"
a["ton:connect"]=r
a["ton:disconnect"]=A.ag(A.p(s.gI()))
a["ton:events"]=A.a1(A.r(s.gJ()))},
m(a){var s=A.a2(A.z(a)),r=s==null?null:A.b([s],t.s)
return this.i("ton_requestAccounts",r,t.m)},
A(){return this.m(null)},
M(a){return this.i("ton_signTransaction",A.b([A.d(a)],t.O),t.K)},
Y(a){return this.i("ton_sendTransaction",A.b([A.d(a)],t.O),t.K)},
E(a){return this.i("ton_signMessage",A.b([A.d(a)],t.O),t.K)},
gH(){return B.K}}
A.cg.prototype={
ak(){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=v.G,g=new h.TronWeb("https://api.shasta.trongrid.io","https://api.shasta.trongrid.io","https://api.shasta.trongrid.io"),f=j.e,e=t.m,d=A.fZ(h.Proxy,[f,new A.f1(new A.aP(i,f,t.p)).$0()],e)
A.d(g.trx).sign=A.r(j.geN())
A.d(g.trx).signMessageV2=A.r(j.geF())
A.d(g.trx).multiSign=A.r(j.ge6())
f=j.gdg()
g.setPrivateKey=A.c(f)
g.setAddress=A.c(f)
g.setFullNode=A.c(f)
g.setSolidityNode=A.c(f)
g.setHeader=A.c(f)
g.setFullNodeHeader=A.c(f)
g.setDefaultBlock=A.c(f)
g.defaultPrivateKey=""
g.defaultAddress=d
f=t.K
s=A.a3(g,i,f)
r=A.c(j.gaH())
q=A.r(j.gcR())
p=A.p(j.gah())
o=A.r(j.gel())
n=A.p(j.gI())
m={}
m.dappIcon=""
m.dappName=""
m.openTronLinkAppOnMobile=!0
m.openUrlWhenWalletNotFound=!0
l={}
l.config=m
l.request=r
l.on=q
l.removeListener=o
l.tronWeb=s
l.enable=p
l.connect=p
l.ready=!0
l.disconnect=n
k=A.d(h.Object.freeze(l))
h.tronLink=A.a3(k,i,e)
h.tronWeb=A.a3(g,i,f)
h.tron=A.a3(k,i,e)
j.c=k
j.d=g},
dh(a){throw A.h($.i1())},
c3(a,b){A.j(a)
if(b!=null)A.hK(b)
return this.C("tron_signMessageV2",A.b([a],t.f),B.k,t.N)},
eG(a){return this.c3(a,null)},
c4(a,b){A.j(a)
if(b!=null)A.hK(b)
return this.C("tron_signTransaction",A.b([a],t.f),B.k,t.m)},
eO(a){return this.c4(a,null)},
bX(a,b){A.j(a)
if(b!=null)A.hK(b)
return this.C("tron_signTransaction",A.b([a],t.f),B.k,t.X)},
e7(a){return this.bX(a,null)},
aj(a,b){var s,r,q
if(b==null||!this.f.ab(a))return
s=this.f.k(0,a)
s.toString
s=A.ac(s,t.g)
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.au)(s),++q)s[q].call(null,b)},
cS(a,b){var s,r
A.l(a)
t.g.a(b)
s=A.bO(a)
if(s==null)return
r=this.f.k(0,s)
if(r!=null)B.a.n(r,b)
this.aa(A.bi(s))},
em(a,b){var s
A.l(a)
t.g.a(b)
s=this.f.k(0,A.bO(a))
if(s!=null)B.a.ar(s,b)},
b1(){return this.af("tron_requestAccounts",B.k,t.c)},
bc(a){A.d(a)
return this.C(A.l(a.method),A.A(a.params),B.k,t.X)},
gH(){return B.L},
aq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
c.aX(a)
s=A.d(a.data)
r=A.eA(s)
for(q=r.length,p=v.G,o=t.N,n=t.B,m=t.X,l=t.z,k=c.e,j=0;j<r.length;r.length===q||(0,A.au)(r),++j)switch(r[j]){case B.u:i=A.E(s.account)
h=c.c
g=h==null
f=g?b:A.z(h.selectedAddress)
e=i==null
if(f!=(e?b:A.l(i.address))){if(!g){g=e?b:A.l(i.address)
h.selectedAddress=g}h=e?b:A.l(i.address)
if(h==null)h=!1
k.base58=h
h=e?b:A.l(i.hex)
if(h==null)h=!1
k.hex=h
A.d(p.window).postMessage(A.h7(A.D(["message",A.D(["action","accountsChanged","data",i],o,m),"source","contentScript"],o,l)))}break
case B.O:c.aj(B.c,s.message)
break
case B.N:h=A.E(s.networkAccounts)
c.aj(B.h,h==null?b:A.ip(h))
break
case B.t:d=A.E(s.chainChanged)
h=c.c
if(h!=null){g=d==null?b:A.l(d.chainId)
h.chainId=g}h=c.c
if(h!=null){g=d==null?b:A.l(d.netVersion)
h.networkVersion=g}if(s.disconnect!=null)c.aj(B.n,s.disconnect)
if(d!=null){if(s.disconnect==null){c.aj(B.l,d)
A.d(p.window).postMessage(A.h7(A.D(["message",A.D(["action","connect","data",null],o,m),"source","contentScript"],o,l)))}h=A.l(d.fullNode)
g=c.d
if(g!=null)g.fullNode=new p.TronWeb.providers.HttpProvider(h)
g=c.d
if(g!=null)g.solidityNode=new p.TronWeb.providers.HttpProvider(h)
g=c.d
if(g!=null)g.setEventServer(new p.TronWeb.providers.HttpProvider(h))
c.aj(B.j,A.l(d.chainId))
A.d(p.window).postMessage(A.h7(A.D(["message",A.D(["action","setNode","data",A.D(["node",d],o,n)],o,m),"source","contentScript"],o,l)))}break}},
m(a){var s=A.a2(A.z(a)),r=s==null?null:A.b([s],t.s)
return this.i("tron_requestAccounts",r,t.m)},
A(){return this.m(null)},
E(a){return this.i("tron_signMessageV2",A.b([A.d(a)],t.O),t.m)},
M(a){return this.i("tron_signTransaction",A.b([A.d(a)],t.O),t.m)},
O(a){var s,r,q=this
q.ak()
s={}
s.connect=A.c(q.gv())
s.version="1.0.0"
a["tron:connect"]=s
s={}
s.signMessage=A.c(q.gD())
s.version="1.0.0"
a["tron:signMessage"]=s
r=q.gL()
a["tron:signTransaction"]=A.iK(A.c(r))
a["tron:signTransaction"]=A.iK(A.c(r))
a["tron:disconnect"]=A.ag(A.p(q.gI()))
a["tron:events"]=A.a1(A.r(q.gJ()))}}
A.f_.prototype={
$0(){return this.a.a},
$S:23}
A.f0.prototype={
$0(){return this.a.b},
$S:13}
A.f1.prototype={
$0(){var s,r,q=this.a,p=v.G,o=A.d(p.Object),n=A.d(o.create.apply(o,[null]))
n.set=A.hO(q.gaU())
n.get=A.hN(q.gaT())
o=A.d(p.Object)
s=A.d(o.create.apply(o,[null]))
s.get=A.p(new A.f_(q))
o=A.d(p.Object)
o.defineProperty.apply(o,[n,"debugKey",s])
o=A.d(p.Object)
r=A.d(o.create.apply(o,[null]))
r.get=A.p(new A.f0(q))
p=A.d(p.Object)
p.defineProperty.apply(p,[n,"object",r])
return n},
$S:10}
A.eB.prototype={
$1(a){return A.l(a)},
$S:35}
A.eC.prototype={
$1(a){return A.ku(A.l(a))},
$S:65}
A.ex.prototype={
$1(a){return A.l(A.d(a).address)},
$S:48};(function aliases(){var s=J.aN.prototype
s.cG=s.j
s=A.M.prototype
s.aX=s.aq})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u
s(A,"mb","l0",22)
s(A,"mc","l1",22)
s(A,"md","l2",22)
r(A,"jo","m6",3)
var m
q(m=A.aP.prototype,"gaU",0,4,null,["$4"],["cw"],45,0,0)
q(m,"gaT",0,3,null,["$3"],["cv"],44,0,0)
p(m=A.d2.prototype,"gh7","aP",11)
p(m,"gee","ef",11)
o(m=A.d3.prototype,"gJ","bb",41)
q(m,"gv",0,0,null,["$1","$0"],["m","A"],5,0,0)
n(m=A.M.prototype,"gI","di",4)
o(m,"gJ","bb",9)
q(m=A.by.prototype,"gfq",0,0,null,["$1","$0"],["cd","fs"],5,0,0)
q(m,"gdO",0,0,null,["$1","$0"],["bR","dP"],2,0,0)
p(m,"gdD","dE",6)
p(m,"gf6","f7",6)
p(m,"gfM","fN",6)
q(m,"gdM",0,0,null,["$1","$0"],["bQ","dN"],5,0,0)
q(m,"gfo",0,0,null,["$1","$0"],["cc","fp"],5,0,0)
q(m,"geQ",0,1,null,["$2","$1"],["c5","eR"],34,0,0)
q(m,"gfa",0,0,null,["$1","$0"],["c9","fb"],5,0,0)
q(m,"gdt",0,0,null,["$1","$0"],["bF","du"],5,0,0)
q(m,"gv",0,0,null,["$1","$0"],["m","A"],2,0,0)
q(m,"gah",0,0,null,["$1","$0"],["aE","b1"],2,0,0)
n(m,"ge_","e0",4)
n(m,"gfk","fl",4)
n(m,"gdH","dI",4)
q(m,"gdU",0,0,null,["$2","$0","$1"],["b7","dV","dW"],27,0,0)
p(m,"gfc","fd",1)
q(m,"gfz",0,0,null,["$2","$0","$1"],["bi","fA","fB"],27,0,0)
n(m,"gfe","ff",4)
n(m,"gdv","dw",4)
q(m,"gfv",0,0,null,["$1","$0"],["cf","fw"],5,0,0)
q(m,"gdS",0,0,null,["$1","$0"],["bT","dT"],5,0,0)
q(m,"gdQ",0,0,null,["$1","$0"],["bS","dR"],5,0,0)
q(m,"gft",0,0,null,["$1","$0"],["ce","fu"],5,0,0)
q(m,"gfm",0,0,null,["$1","$0"],["cb","fn"],5,0,0)
q(m,"gdK",0,0,null,["$1","$0"],["bP","dL"],5,0,0)
q(m,"gfi",0,0,null,["$1","$0"],["ca","fj"],5,0,0)
q(m,"gdB",0,0,null,["$1","$0"],["bH","dC"],5,0,0)
q(m,"gfE",0,1,null,["$2","$1"],["cg","fF"],34,0,0)
p(m,"geS","eT",8)
p(m,"gf4","f5",8)
p(m,"gfG","fH",8)
p(m,"gfK","fL",8)
o(m,"gfC","fD",52)
o(m,"geB","eC",17)
n(m,"gfg","fh",4)
n(m,"gdz","dA",4)
p(m,"gL","M",0)
p(m,"gbe","bf",0)
p(m,"gD","E",1)
n(m,"gdF","dG",4)
p(m,"gf2","f3",6)
p(m,"gfI","fJ",6)
p(m=A.bz.prototype,"gd5","d6",0)
p(m,"gD","E",0)
p(m,"gL","M",0)
q(m,"gep",0,0,null,["$1","$0"],["c0","eq"],2,0,0)
n(m,"ge8","e9",4)
p(m,"gea","eb",16)
p(m,"gec","ed",16)
q(m=A.bD.prototype,"gv",0,0,null,["$1","$0"],["m","A"],2,0,0)
p(m,"gd1","d2",0)
p(m,"gd3","d4",0)
p(m,"gb5","b6",0)
p(m,"gd_","d0",8)
q(m=A.bC.prototype,"gv",0,0,null,["$1","$0"],["m","A"],2,0,0)
p(m,"gcW","cX",0)
p(m,"gcY","cZ",0)
p(m,"gb5","b6",0)
p(m,"gcU","cV",8)
q(m=A.bH.prototype,"gfQ",0,0,null,["$1","$0"],["co","fR"],2,0,0)
p(m,"gD","E",0)
p(m,"gcB","cC",0)
p(m,"gcz","cA",0)
q(m,"gbI",0,1,null,["$2","$1"],["bK","bJ"],18,0,0)
q(m,"gbM",0,1,null,["$2","$1"],["bO","bN"],18,0,0)
q(m,"gf_",0,1,null,["$2","$1"],["c6","f0"],18,0,0)
p(m,"gbL","dJ",6)
p(m,"gaY","aZ",0)
p(m,"gL","M",0)
p(m=A.bK.prototype,"gaH","bc",1)
n(m,"gd8","d9",4)
q(m,"gv",0,0,null,["$1","$0"],["m","A"],2,0,0)
p(m,"gaY","aZ",1)
p(m,"geU","eV",1)
p(m,"geW","eX",1)
p(m,"geY","eZ",1)
p(m,"geg","eh",1)
p(m,"gdn","dq",1)
p(m,"gX","Y",1)
o(m,"gcP","cQ",9)
o(m,"gei","ej",9)
q(m=A.bX.prototype,"gv",0,0,null,["$1","$0"],["m","A"],2,0,0)
p(m,"gX","Y",0)
p(m,"gD","E",1)
q(m=A.c7.prototype,"gv",0,0,null,["$1","$0"],["m","A"],2,0,0)
p(m,"gL","M",0)
p(m,"gX","Y",0)
p(m,"gD","E",1)
q(m=A.c9.prototype,"gv",0,0,null,["$1","$0"],["m","A"],2,0,0)
p(m,"geD","eE",1)
p(m,"gD","E",1)
p(m,"geJ","eK",0)
p(m,"ges","eu",0)
p(m,"gbe","bf",1)
q(m,"gez",0,1,null,["$2","$1"],["c2","eA"],58,0,0)
q(m=A.cb.prototype,"gv",0,0,null,["$1","$0"],["m","A"],2,0,0)
p(m,"gL","M",0)
p(m,"gX","Y",0)
p(m,"gD","E",1)
q(m=A.cd.prototype,"ge1",0,0,null,["$1","$0"],["bU","e2"],59,0,0)
p(m,"gbV","e5",1)
p(m,"gbr","cE",1)
p(m,"gbq","cD",1)
q(m,"gv",0,0,null,["$1","$0"],["m","A"],2,0,0)
q(m,"gda",0,0,null,["$1","$0"],["bB","dc"],29,0,0)
q(m,"ghe",0,0,null,["$1","$0"],["aR","hf"],29,0,0)
p(m,"gah","aE",6)
p(m,"ge3","e4",16)
p(m=A.ce.prototype,"gD","E",0)
p(m,"geH","eI",0)
p(m,"gL","M",0)
p(m,"gex","ey",0)
p(m,"gev","ew",0)
p(m,"geL","eM",0)
p(m,"gen","eo",0)
q(m,"gv",0,0,null,["$1","$0"],["m","A"],2,0,0)
q(m=A.cf.prototype,"gv",0,0,null,["$1","$0"],["m","A"],2,0,0)
p(m,"gL","M",1)
p(m,"gX","Y",1)
p(m,"gD","E",1)
p(m=A.cg.prototype,"gdg","dh",63)
q(m,"geF",0,1,null,["$2","$1"],["c3","eG"],14,0,0)
q(m,"geN",0,1,null,["$2","$1"],["c4","eO"],14,0,0)
q(m,"ge6",0,1,null,["$2","$1"],["bX","e7"],14,0,0)
o(m,"gcR","cS",9)
o(m,"gel","em",9)
n(m,"gah","b1",4)
p(m,"gaH","bc",1)
q(m,"gv",0,0,null,["$1","$0"],["m","A"],2,0,0)
p(m,"gD","E",1)
p(m,"gL","M",1)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.f,null)
q(A.f,[A.hr,J.d_,A.c8,J.bA,A.k,A.bE,A.C,A.eT,A.aY,A.bW,A.cl,A.bJ,A.U,A.bG,A.f2,A.eK,A.bL,A.cy,A.aJ,A.aO,A.eF,A.bU,A.bT,A.cx,A.d4,A.fp,A.dB,A.ai,A.dw,A.dA,A.fI,A.cm,A.aa,A.bp,A.aG,A.v,A.ds,A.dy,A.cE,A.cs,A.u,A.bF,A.cT,A.fQ,A.fN,A.I,A.cU,A.cW,A.fr,A.de,A.ca,A.fs,A.e2,A.cZ,A.W,A.O,A.dz,A.bn,A.eJ,A.fF,A.dY,A.dP,A.fj,A.fl,A.eR,A.fE,A.dZ,A.eZ,A.dC,A.aP,A.df,A.ei,A.d3,A.M,A.eL])
q(J.d_,[J.bN,J.bQ,J.G,J.be,J.bf,J.bR,J.bd])
q(J.G,[J.aN,J.q,A.aZ,A.c0])
q(J.aN,[J.dg,J.ch,J.H])
r(J.d0,A.c8)
r(J.ew,J.q)
q(J.bR,[J.bP,J.d1])
q(A.k,[A.bo,A.n,A.aB,A.ck])
r(A.cF,A.bo)
r(A.cp,A.cF)
r(A.ax,A.cp)
q(A.C,[A.bg,A.aD,A.d5,A.dn,A.dj,A.dv,A.cM,A.ae,A.ci,A.dm,A.bm,A.cS])
q(A.n,[A.L,A.aV,A.aX,A.az,A.cr])
q(A.L,[A.cc,A.X,A.c6])
r(A.bI,A.aB)
r(A.bM,A.bG)
r(A.c2,A.aD)
q(A.aJ,[A.cP,A.cQ,A.dl,A.h3,A.h5,A.fg,A.ff,A.fS,A.fC,A.fo,A.e3,A.h8,A.hb,A.hc,A.h_,A.dQ,A.dR,A.f4,A.f5,A.ef,A.eb,A.eg,A.dX,A.fb,A.fd,A.eN,A.h9,A.ey,A.ep,A.en,A.em,A.eD,A.ek,A.es,A.et,A.dG,A.dI,A.dJ,A.dH,A.eU,A.eB,A.eC,A.ex])
q(A.dl,[A.dk,A.bc])
q(A.aO,[A.ay,A.cq])
r(A.bS,A.ay)
q(A.cQ,[A.h4,A.fT,A.fY,A.fD,A.eH,A.fn,A.e5,A.e4,A.fe,A.fc,A.dV,A.dT])
q(A.c0,[A.bY,A.bh])
q(A.bh,[A.ct,A.cv])
r(A.cu,A.ct)
r(A.bZ,A.cu)
r(A.cw,A.cv)
r(A.c_,A.cw)
q(A.bZ,[A.d7,A.d8])
q(A.c_,[A.d9,A.da,A.db,A.dc,A.dd,A.c1,A.b_])
r(A.br,A.dv)
q(A.cP,[A.fh,A.fi,A.fJ,A.e6,A.ft,A.fy,A.fx,A.fv,A.fu,A.fB,A.fA,A.fz,A.fX,A.fH,A.fP,A.fO,A.fk,A.ee,A.ed,A.ea,A.ec,A.eh,A.eO,A.eP,A.eQ,A.ez,A.eq,A.eo,A.eE,A.el,A.ej,A.eu,A.er,A.dU,A.dS,A.eW,A.eX,A.eY,A.eV,A.f_,A.f0,A.f1])
q(A.bp,[A.aF,A.cz])
r(A.dx,A.cE)
r(A.bq,A.cq)
r(A.cX,A.bF)
r(A.cL,A.cX)
q(A.cT,[A.fL,A.fK,A.fa,A.dq])
r(A.dM,A.fL)
r(A.dL,A.fK)
q(A.ae,[A.bl,A.cY])
q(A.fr,[A.bB,A.aC,A.d6,A.dr,A.aK,A.aL,A.V,A.ab,A.aM,A.K,A.c3])
q(A.dP,[A.dO,A.dN,A.dW,A.bb,A.eI])
r(A.cj,A.dC)
r(A.d2,A.ei)
q(A.M,[A.by,A.bz,A.bD,A.bC,A.bH,A.bK,A.bX,A.c7,A.c9,A.cb,A.cd,A.ce,A.cf,A.cg])
s(A.cF,A.u)
s(A.ct,A.u)
s(A.cu,A.U)
s(A.cv,A.u)
s(A.cw,A.U)
s(A.dC,A.dZ)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{e:"int",w:"double",ba:"num",m:"String",F:"bool",O:"Null",o:"List",f:"Object",aA:"Map",i:"JSObject"},mangledNames:{},types:["i(f)","i(i)","i([m?])","~()","i()","i([i?])","i(m)","0&()","i(q<f?>)","~(m,H)","f()","~(i)","f(f)","f?()","i(f[f?])","f?(f?)","~(H)","i(m,f)","i(m[f?])","m()","O(f)","~(@)","~(~())","m?()","O()","@()","O(f,as)","i([m?,i?])","O(H,H)","i([f?])","@(@)","F(ab)","e(e)","O(@)","i(m[F?])","m(m)","F(V)","f(f,as)","F(aM)","e(e,e)","Q<~>()","H?(m,H)","@(@,m)","Q<i>()","f?(f,f?,f?)","F(f,f?,f?,f?)","O(@,as)","~(e,@)","m(i)","O(~())","F(aK)","@(m)","i(f,f)","m(e)","m(W<m,@>)","F(W<m,@>)","m(f)","F(K)","i(q<f?>[i?])","i([F?])","o<e>()","q<f?>(i)","Q<i?>()","~(f?)","f?(~)","V(m)","F(aL)","~(f?,f?)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{}}
A.ll(v.typeUniverse,JSON.parse('{"H":"aN","dg":"aN","ch":"aN","mD":"aZ","q":{"o":["1"],"G":[],"n":["1"],"i":[],"k":["1"]},"bN":{"F":[],"x":[]},"bQ":{"x":[]},"G":{"i":[]},"aN":{"G":[],"i":[]},"d0":{"c8":[]},"ew":{"q":["1"],"o":["1"],"G":[],"n":["1"],"i":[],"k":["1"]},"bA":{"R":["1"]},"bR":{"w":[],"ba":[]},"bP":{"w":[],"e":[],"ba":[],"x":[]},"d1":{"w":[],"ba":[],"x":[]},"bd":{"m":[],"eM":[],"x":[]},"bo":{"k":["2"]},"bE":{"R":["2"]},"cp":{"u":["2"],"o":["2"],"bo":["1","2"],"n":["2"],"k":["2"]},"ax":{"cp":["1","2"],"u":["2"],"o":["2"],"bo":["1","2"],"n":["2"],"k":["2"],"u.E":"2","k.E":"2"},"bg":{"C":[]},"n":{"k":["1"]},"L":{"n":["1"],"k":["1"]},"cc":{"L":["1"],"n":["1"],"k":["1"],"L.E":"1","k.E":"1"},"aY":{"R":["1"]},"aB":{"k":["2"],"k.E":"2"},"bI":{"aB":["1","2"],"n":["2"],"k":["2"],"k.E":"2"},"bW":{"R":["2"]},"X":{"L":["2"],"n":["2"],"k":["2"],"L.E":"2","k.E":"2"},"ck":{"k":["1"],"k.E":"1"},"cl":{"R":["1"]},"aV":{"n":["1"],"k":["1"],"k.E":"1"},"bJ":{"R":["1"]},"c6":{"L":["1"],"n":["1"],"k":["1"],"L.E":"1","k.E":"1"},"bG":{"aA":["1","2"]},"bM":{"bG":["1","2"],"aA":["1","2"]},"c2":{"aD":[],"C":[]},"d5":{"C":[]},"dn":{"C":[]},"cy":{"as":[]},"aJ":{"aW":[]},"cP":{"aW":[]},"cQ":{"aW":[]},"dl":{"aW":[]},"dk":{"aW":[]},"bc":{"aW":[]},"dj":{"C":[]},"ay":{"aO":["1","2"],"ht":["1","2"],"aA":["1","2"]},"aX":{"n":["1"],"k":["1"],"k.E":"1"},"bU":{"R":["1"]},"az":{"n":["W<1,2>"],"k":["W<1,2>"],"k.E":"W<1,2>"},"bT":{"R":["W<1,2>"]},"bS":{"ay":["1","2"],"aO":["1","2"],"ht":["1","2"],"aA":["1","2"]},"d4":{"eM":[]},"aZ":{"G":[],"i":[],"cO":[],"x":[]},"c0":{"G":[],"i":[]},"dB":{"cO":[]},"bY":{"G":[],"hj":[],"i":[],"x":[]},"bh":{"a6":["1"],"G":[],"i":[]},"bZ":{"u":["w"],"o":["w"],"a6":["w"],"G":[],"n":["w"],"i":[],"k":["w"],"U":["w"]},"c_":{"u":["e"],"o":["e"],"a6":["e"],"G":[],"n":["e"],"i":[],"k":["e"],"U":["e"]},"d7":{"e0":[],"u":["w"],"o":["w"],"a6":["w"],"G":[],"n":["w"],"i":[],"k":["w"],"U":["w"],"x":[],"u.E":"w"},"d8":{"e1":[],"u":["w"],"o":["w"],"a6":["w"],"G":[],"n":["w"],"i":[],"k":["w"],"U":["w"],"x":[],"u.E":"w"},"d9":{"e7":[],"u":["e"],"o":["e"],"a6":["e"],"G":[],"n":["e"],"i":[],"k":["e"],"U":["e"],"x":[],"u.E":"e"},"da":{"e8":[],"u":["e"],"o":["e"],"a6":["e"],"G":[],"n":["e"],"i":[],"k":["e"],"U":["e"],"x":[],"u.E":"e"},"db":{"e9":[],"u":["e"],"o":["e"],"a6":["e"],"G":[],"n":["e"],"i":[],"k":["e"],"U":["e"],"x":[],"u.E":"e"},"dc":{"f6":[],"u":["e"],"o":["e"],"a6":["e"],"G":[],"n":["e"],"i":[],"k":["e"],"U":["e"],"x":[],"u.E":"e"},"dd":{"f7":[],"u":["e"],"o":["e"],"a6":["e"],"G":[],"n":["e"],"i":[],"k":["e"],"U":["e"],"x":[],"u.E":"e"},"c1":{"f8":[],"u":["e"],"o":["e"],"a6":["e"],"G":[],"n":["e"],"i":[],"k":["e"],"U":["e"],"x":[],"u.E":"e"},"b_":{"f9":[],"u":["e"],"o":["e"],"a6":["e"],"G":[],"n":["e"],"i":[],"k":["e"],"U":["e"],"x":[],"u.E":"e"},"dv":{"C":[]},"br":{"aD":[],"C":[]},"cm":{"cR":["1"]},"aa":{"C":[]},"bp":{"cR":["1"]},"aF":{"bp":["1"],"cR":["1"]},"cz":{"bp":["1"],"cR":["1"]},"v":{"Q":["1"]},"cE":{"iM":[]},"dx":{"cE":[],"iM":[]},"cq":{"aO":["1","2"],"aA":["1","2"]},"bq":{"cq":["1","2"],"aO":["1","2"],"aA":["1","2"]},"cr":{"n":["1"],"k":["1"],"k.E":"1"},"cs":{"R":["1"]},"aO":{"aA":["1","2"]},"cL":{"bF":["m","o<e>"]},"cX":{"bF":["m","o<e>"]},"w":{"ba":[]},"e":{"ba":[]},"o":{"n":["1"],"k":["1"]},"m":{"eM":[]},"cM":{"C":[]},"aD":{"C":[]},"ae":{"C":[]},"bl":{"C":[]},"cY":{"C":[]},"ci":{"C":[]},"dm":{"C":[]},"bm":{"C":[]},"cS":{"C":[]},"de":{"C":[]},"ca":{"C":[]},"cZ":{"C":[]},"dz":{"as":[]},"e9":{"o":["e"],"n":["e"],"k":["e"]},"f9":{"o":["e"],"n":["e"],"k":["e"]},"f8":{"o":["e"],"n":["e"],"k":["e"]},"e7":{"o":["e"],"n":["e"],"k":["e"]},"f6":{"o":["e"],"n":["e"],"k":["e"]},"e8":{"o":["e"],"n":["e"],"k":["e"]},"f7":{"o":["e"],"n":["e"],"k":["e"]},"e0":{"o":["w"],"n":["w"],"k":["w"]},"e1":{"o":["w"],"n":["w"],"k":["w"]},"by":{"M":[]},"bz":{"M":[]},"bD":{"M":[]},"bC":{"M":[]},"bH":{"M":[]},"bK":{"M":[]},"bX":{"M":[]},"c7":{"M":[]},"c9":{"M":[]},"cb":{"M":[]},"cd":{"M":[]},"ce":{"M":[]},"cf":{"M":[]},"cg":{"M":[]}}'))
A.lk(v.typeUniverse,JSON.parse('{"cF":2,"bh":1,"cT":2}'))
var u={n:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",f:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAABfvA/wAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj41MDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NTA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KZxgR6QAAB6lJREFUWAnlVmlsXFcZPfe9ecvsYzt2SihSk1SQBUWCqKUJSEkQyw+qSqXEKhKFssROLSTU0MQJAtUI0WYtKkJpYtqoqBJLDAXyB4kSakUlZSkCEtwQoRYqJXU2e+zxvHnztns5903sOBlH6o9KCHGleXPX7zvfud9ygf/3Jm5CgIDiil6d/W/1brJ9wem3Q8aCgudPaog3M2L+vpv22w8rJbB7oAJlGAhtBTsUCFWARw96VKUwNGQAowYeHU3SsRat2BvZbODV1XpdckZgaCAPWzhzMoSU2HlwCkJoTufafAC6TwEPVuDaJyDUOyHRgGE6sIwAnrcR3/jBa3Mn9z2Qzwb5ih6XnMLUxe37vbm1x7+wDLYzili5kEkAAzkocR7K3IBdT1W5r6WLnczcodmOk+VisgSm2QkTnem0lIOp8r4+C8vFRii5AgngZ2So1wM1bWf3PkQ9yVmvjBfRP/w6DvR/F4bYRzktyTEPKI/sXd/aAWCaG3MNwOyiokkk8b3Y+cwJ7N6ynuOPIjFPIxONdKNUtExVqFgWlIrrZ86Nz6CQXWcju8vcu/W4/9VD+7G77/fIGD+nwYu4qQHXuo5+DaUNUYrPJO3a/RPMKt9CCtchmD6QyVpTrlF80i26v+ypVH5V4e8dXYuPfWLN+568f9XaWnj6Fwf8RN7p7u3vw87hlxDLe6mcmgwHzUhTn4pO//lpBxAUAphGk0uD2Hn4BB7bsoW+0ISTPyhyHc/GGfN4T6nQ223ZK0UcL+4yrMXvLvesqJRLvaZj/ubT9ww+N/TetYebSeTNgTCM7bBMH5aiXLYWjBu76bj1GaITDR15Hfv619GR1iPAU8gbLxuuvUb6UXRnpVvcVu4ywjgQPbkibNNQkYxlV66opo3Eqk3X/r7cdj8wdPqVrdmM+Qd/x6HfYVbmPDW6e9VDbpgd/UuV4ZSBWXsQgfU95NWzcJ1Nqu43y5btCEijk3+3FMuiaLlCCIjufMlwbNv0/EbTzueWnPfqK0+/9MzXjZ73fCZZtvYkDjw9cYOWdNh+BWmccy07voEXNIZifAds61Oo+xFj2E3jh3dqCh7l1dJyFJ0s8vzpccYw3LjeiEzH+uT99+y4KwzD03kdObrNyk4HrU87gFVjVx1FrkIkTiJSfVowf0LTVZMJOqnMtR36l8Qlr4bxmUl4QRN2JoOsaSOKY6YdiZlm0IfEO0mGVrTUjbbpa7+Co2NAuZZl+L0fInmD1n8FUvYYUmkcwjZMLCt1IWfZCKIA9cAnC0x+ZMU2LW5VqPp1eGEomioxGD3PX46S23s+vmrM+9qxEN9sQZn9tiFKU6XvVchxyKsuMJl0IpEMBCUUre+2s5zOoBGFDBYLHXRCl4oNXkkjJKCwiZkwEF4QoCFlpysyBYk4nJFWmd6vuZwXAwtlwllokjVBN202f0Uzg9hQyLkuM5/Em14dJgEtrXSjSFAhWfB9D5ONGVQ1K2SkQfO8KGJEU4LOBQu0dgZ0McrmWTSk5Vhihrl8suQ4eFdHj7qtczHLgonppod/1qp4g1T/7cp5XKLSehzhvJ6bmUI9itS0jDAdBpMXkrDOYHMaRjSt/ahl0jUk7QBGeg1s+46vGQ8iFqNInqrT8su1qozjmDfEmKOkDEU1mN/HSfUEHbBGSyXB1QhkIgzkJFm60vBPBQhoBH1k+3NeWjGv6U577QB0SU2bOMMw/BAy5jD9Cpf8umrS6bR3K9J5a2URlhQruCVfhk9QV+gT434D50n/lShQlzmuy2gYifVB3uE/UpFzslsa9LcdQKueA0snR3lwJWT4ZxWGP3E6ylYpV2henKmiQYuTpPUcsDMm7z9OPf/s1GWm+7DpOaaVNPyfwpv4I+laDf/WF1OVs7Kv6V8AgF781ueWo3eEGtSvyetWjFc/Hzb8v/47nHEbcRyVcsV4oj4tz05cUOeql9WFqQn5WvVSzKQUiULOhd88BWvys3A6+hkqLzABxanMeYpnu/PzQMvrH3kgj47CK/jYHQ52HP4xPrJ2BfLualyobgtt83bpWGtCFRuTUUBnEKIpE+FDCuU6hiAdvKcRZCbvRljezPiJMTh8DPsHdjCfHML6pcMYfVW/IVq62Gm/gq6CzSRkM/4ex7f7NmHX94+k+3rKX16EeIv0401TtdoPlRBjTH3jwrHGRSYzhiD4kWqGH4YKv4ioY4BPOhu7hp9mNd0AyD2IKTPIssyzXfUy3V34QSJzLMkkxzJ+RhD3UdAR7PnSXVeU+TCFncllzUca9YTPrKSkXIZIIuuQpoeMpMNxjxAvYPDwy9hL5Yb5fGqw5Luy++qDZM7+BQGUuZ/CNUxDdMAxf4snBnZh28HdOLr5T/hX58ZGqO6DTfaUGSBh3lAsABkmS5hn0Dj7GIZGYxx4aJAidmsrW9lM5NDkA/eG1s6AYN6FOsdKo7NXgynZoVUDdKIR9KaP0uOUcRxPPJyFTtn6OnXi0rljtunaDwwwZi+SnYCM5LjtTYg8ZV/f2hBRqcCe/hKtMuD6Ck0+UgO+bIeG+U5k0yVVV8zNRyUFt25Tn9EJ7NqznPv6cmTPmZOhDRs8XJs7cz2O/96onYEWloXm5/nuWwL8dsh4S4r+tzf9Bwpfgk0+0buPAAAAAElFTkSuQmCC"}
var t=(function rtii(){var s=A.at
return{n:s("aa"),E:s("cO"),Y:s("hj"),V:s("n<@>"),C:s("C"),d:s("e0"),q:s("e1"),Z:s("aW"),w:s("e7"),k:s("e8"),gj:s("e9"),R:s("k<@>"),c_:s("aK"),O:s("q<i>"),G:s("q<H>"),ao:s("q<W<m,@>>"),f:s("q<f>"),s:s("q<m>"),b:s("q<@>"),t:s("q<e>"),c:s("q<f?>"),D:s("K"),A:s("ab"),bs:s("V"),T:s("bQ"),m:s("i"),fr:s("aL"),e5:s("aM"),g:s("H"),aU:s("a6<@>"),e:s("G"),cl:s("o<i>"),u:s("o<H>"),ew:s("o<f>"),a:s("o<m>"),j:s("o<@>"),L:s("o<e>"),fs:s("d6"),I:s("W<m,@>"),eO:s("aA<@,@>"),bm:s("b_"),P:s("O"),K:s("f"),hg:s("df"),p:s("aP<f>"),gT:s("mF"),bQ:s("+()"),bJ:s("c6<m>"),l:s("as"),N:s("m"),dm:s("x"),eK:s("aD"),h7:s("f6"),bv:s("f7"),go:s("f8"),gc:s("f9"),ak:s("ch"),aQ:s("M"),x:s("aF<i>"),h:s("aF<~>"),ev:s("I"),et:s("v<i>"),_:s("v<@>"),U:s("v<~>"),J:s("bq<f?,f?>"),aj:s("cz<~>"),y:s("F"),al:s("F(f)"),i:s("w"),z:s("@"),fO:s("@()"),v:s("@(f)"),Q:s("@(f,as)"),S:s("e"),eH:s("Q<O>?"),W:s("Q<@>?"),r:s("q<f?>?"),B:s("i?"),X:s("f?"),dk:s("m?"),F:s("aG<@,@>?"),fQ:s("F?"),cD:s("w?"),h6:s("e?"),cg:s("ba?"),o:s("ba"),H:s("~"),M:s("~()")}})();(function constants(){var s=hunkHelpers.makeConstList
B.aq=J.d_.prototype
B.a=J.q.prototype
B.W=J.bN.prototype
B.b=J.bP.prototype
B.at=J.bR.prototype
B.f=J.bd.prototype
B.av=J.H.prototype
B.aw=J.G.prototype
B.aE=A.bY.prototype
B.aF=A.b_.prototype
B.a3=J.dg.prototype
B.R=J.ch.prototype
B.a9=new A.bb("invalid hex bytes",null)
B.aa=new A.bb("Hex input string must be divisible by two",null)
B.ab=new A.bb("Incorrect characters for hex decoding",null)
B.ac=new A.dL(!1)
B.x=new A.bB("bitcoin")
B.ae=new A.cL()
B.af=new A.dM()
B.S=new A.cW()
B.ag=new A.bJ(A.at("bJ<0&>"))
B.aW=new A.dY()
B.y=new A.cZ()
B.T=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.ah=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.am=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.ai=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.al=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.ak=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.aj=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.U=function(hooks) { return hooks; }

B.an=new A.de()
B.p=new A.eT()
B.ao=new A.fa()
B.V=new A.fE()
B.i=new A.dx()
B.q=new A.dz()
B.ap=new A.dW("SHA256: can't update because hash was finished.",null)
B.r=new A.aK("Rejected","rejected")
B.z=new A.K("Aptos","aptos")
B.A=new A.K("BitcoinCash","bitcoinCash")
B.B=new A.K("Bitcoin","bitcoin")
B.C=new A.K("Cardano","cardano")
B.D=new A.K("Cosmos","cosmos")
B.E=new A.K("Ethereum","ethereum")
B.F=new A.K("Monero","monero")
B.G=new A.K("Solana","solana")
B.H=new A.K("Stellar","stellar")
B.I=new A.K("Substrate","substrate")
B.J=new A.K("Sui","sui")
B.K=new A.K("TON","ton")
B.L=new A.K("Tron","tron")
B.M=new A.K("XRPL","xrpl")
B.h=new A.ab("accountsChanged")
B.j=new A.ab("chainChanged")
B.c=new A.ab("message")
B.l=new A.ab("connect")
B.n=new A.ab("disconnect")
B.d=new A.ab("change")
B.N=new A.V("networkAccountsChanged")
B.X=new A.V("change")
B.t=new A.V("defaultChainChanged")
B.u=new A.V("defaultAccountChanged")
B.O=new A.V("message")
B.Y=new A.aL("response")
B.Z=new A.aM("success")
B.P=new A.aM("failed")
B.v=s(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],t.s)
B.a_=s([256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,0,1,2,3,4,5,6,7,8,9,256,256,256,256,256,256,256,10,11,12,13,14,15,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,10,11,12,13,14,15,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256],t.t)
B.a0=s([B.h,B.j,B.c,B.l,B.n,B.d],A.at("q<ab>"))
B.ax=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.b)
B.au=new A.aL("event")
B.ay=s([B.Y,B.au],A.at("q<aL>"))
B.as=new A.K("","global")
B.az=s([B.as,B.E,B.L,B.G,B.K,B.H,B.M,B.I,B.z,B.J,B.B,B.D,B.F,B.C,B.A],A.at("q<K>"))
B.aA=s([B.N,B.X,B.t,B.u,B.O],A.at("q<V>"))
B.ar=new A.aK("Approved","approved")
B.aB=s([B.ar,B.r],A.at("q<aK>"))
B.aC=s([B.Z,B.P],A.at("q<aM>"))
B.a1=new A.d6("one")
B.ad=new A.bB("ripple")
B.a2=new A.bM([B.x,"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",B.ad,"rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"],A.at("bM<bB,m>"))
B.aD=new A.eI("Invalid character in Base58 string",null)
B.o=new A.c3("walletStandard")
B.k=new A.c3("eip1993")
B.e=new A.c3("cardano")
B.a4=new A.aC("ascii")
B.Q=new A.aC("utf8")
B.w=new A.aC("base64")
B.a5=new A.aC("base64UrlSafe")
B.a6=new A.aC("base58")
B.a7=new A.aC("base58Check")
B.a8=new A.aC("hex")
B.aG=A.aq("cO")
B.aH=A.aq("hj")
B.aI=A.aq("e0")
B.aJ=A.aq("e1")
B.aK=A.aq("e7")
B.aL=A.aq("e8")
B.aM=A.aq("e9")
B.aN=A.aq("f")
B.aO=A.aq("f6")
B.aP=A.aq("f7")
B.aQ=A.aq("f8")
B.aR=A.aq("f9")
B.aS=new A.dq(!1)
B.aT=new A.dq(!0)
B.aV=new A.dr("invalidParams")
B.aU=new A.dr("internalError")
B.m=new A.cj("An error occurred during the request",B.aU)})();(function staticFields(){$.fG=null
$.a9=A.b([],t.f)
$.iB=null
$.ia=null
$.i9=null
$.js=null
$.jn=null
$.jw=null
$.h1=null
$.h6=null
$.hW=null
$.n1=A.b([],A.at("q<o<f>?>"))
$.bs=null
$.cG=null
$.cH=null
$.hQ=!1
$.y=B.i
$.iQ=null
$.iR=null
$.iS=null
$.iT=null
$.hC=A.fq("_lastQuoRemDigits")
$.hD=A.fq("_lastQuoRemUsed")
$.co=A.fq("_lastRemUsed")
$.hE=A.fq("_lastRem_nsh")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"mA","bx",()=>A.mm("_$dart_dartClosure"))
s($,"n7","jW",()=>A.b([new J.d0()],A.at("q<c8>")))
s($,"mK","jF",()=>A.aE(A.f3({
toString:function(){return"$receiver$"}})))
s($,"mL","jG",()=>A.aE(A.f3({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"mM","jH",()=>A.aE(A.f3(null)))
s($,"mN","jI",()=>A.aE(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"mQ","jL",()=>A.aE(A.f3(void 0)))
s($,"mR","jM",()=>A.aE(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"mP","jK",()=>A.aE(A.iL(null)))
s($,"mO","jJ",()=>A.aE(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"mT","jO",()=>A.aE(A.iL(void 0)))
s($,"mS","jN",()=>A.aE(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"mU","i2",()=>A.l_())
s($,"n4","jU",()=>A.iy(4096))
s($,"n2","jS",()=>new A.fP().$0())
s($,"n3","jT",()=>new A.fO().$0())
s($,"n0","T",()=>A.dt(0))
s($,"mZ","aI",()=>A.dt(1))
s($,"n_","jR",()=>A.dt(2))
s($,"mY","i3",()=>$.aI().a0(0))
s($,"mW","jP",()=>A.dt(1e4))
s($,"mX","jQ",()=>A.iy(8))
s($,"n5","he",()=>A.dE(B.aN))
s($,"n6","jV",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"mE","jB",()=>{var r=new A.fF(new DataView(new ArrayBuffer(A.lC(8))))
r.cJ()
return r})
s($,"mV","hd",()=>new A.fk().$0())
s($,"mI","jD",()=>A.kT("^(0x|0X)?([0-9A-Fa-f]{2})+$"))
s($,"mC","i1",()=>({message:"this feature disabled by wallet provider."}))
s($,"mB","jA",()=>({uuid:"466aef37-e077-42d1-b26b-801ff1af4a36",name:"OnChain",icon:u.f,rdns:"com.mrtnetwork.wallet"}))
s($,"mG","jC",()=>A.kC(A.b(["legacy",0],t.f),t.K))
s($,"mJ","jE",()=>({message:"Invalid Sui transaction. The transaction must include transactionBlock with the blockData property for v1, or transaction with the toJSON property for v2."}))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.aZ,SharedArrayBuffer:A.aZ,ArrayBufferView:A.c0,DataView:A.bY,Float32Array:A.d7,Float64Array:A.d8,Int16Array:A.d9,Int32Array:A.da,Int8Array:A.db,Uint16Array:A.dc,Uint32Array:A.dd,Uint8ClampedArray:A.c1,CanvasPixelArray:A.c1,Uint8Array:A.b_})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.bh.$nativeSuperclassTag="ArrayBufferView"
A.ct.$nativeSuperclassTag="ArrayBufferView"
A.cu.$nativeSuperclassTag="ArrayBufferView"
A.bZ.$nativeSuperclassTag="ArrayBufferView"
A.cv.$nativeSuperclassTag="ArrayBufferView"
A.cw.$nativeSuperclassTag="ArrayBufferView"
A.c_.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=function(b){return A.hY(A.mh(b))}
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()