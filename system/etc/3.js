const e=require("../utils"),t=require("npmlog");module.exports=function(n,o,r){return function(n,o){let s=function(){},c=function(){};const u=new Promise((function(e,t){s=e,c=t}));if("Function"!==e.getType(n)&&"AsyncFunction"!==e.getType(n)||(o=n,n={}),n||(n={}),"Object"!==e.getType(n))throw new e.CustomError("the first parameter must be an object or a callback function");return o||(o=function(e,t){if(e)return c(e);s(t)}),0==Object.keys(n).length?e.get("https://m.facebook.com/",r.jar,null,r.globalOptions,{noRef:!0}).then((function(t){const n=t.body,s=e.getFrom(n,'name="fb_dtsg" value="','"'),c=e.getFrom(n,'name="jazoest" value="','"');if(!s)throw new e.CustomError("Could not find fb_dtsg in HTML after requesting https://www.facebook.com/");r.fb_dtsg=s,r.jazoest=c,o(null,{data:{fb_dtsg:s,jazoest:c},message:"refreshed fb_dtsg and jazoest"})})).catch((function(e){return t.error("refreshFb_dtsg",e),o(e)})):(Object.keys(n).forEach((function(e){r[e]=n[e]})),o(null,{data:n,message:"refreshed "+Object.keys(n).join(", ")})),u}};