// Created by iWeb 3.0.4 local-build-20120726

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.6629,3.7759),color:'#000000',opacity:0.300000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,18),url:'welcome_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'welcome_files/stroke_1.png'},{rect:new IWRect(1,-1,109,2),url:'welcome_files/stroke_2.png'},{rect:new IWRect(110,-1,2,2),url:'welcome_files/stroke_3.png'},{rect:new IWRect(110,1,2,18),url:'welcome_files/stroke_4.png'},{rect:new IWRect(110,19,2,2),url:'welcome_files/stroke_5.png'},{rect:new IWRect(1,19,109,2),url:'welcome_files/stroke_6.png'},{rect:new IWRect(-1,19,2,2),url:'welcome_files/stroke_7.png'}],new IWSize(111,20))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('welcome_files/welcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');detectBrowser();adjustLineHeightIfTooBig('id10');adjustFontSizeIfTooBig('id10');fixupIECSS3Opacity('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
