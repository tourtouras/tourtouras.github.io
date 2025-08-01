// Created by iWeb 3.0.4 local-build-20120726

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('services_arbitaries_files/services_arbitariesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');detectBrowser();adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');fixupIECSS3Opacity('id2');fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
