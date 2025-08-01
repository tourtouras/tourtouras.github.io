// Created by iWeb 3.0.4 local-build-20120726

function createMediaStream_id3()
{return IWCreatePhotocast("http://www.tourtouras.info/T3/portfolio_nikokleous_files/rss.xml",false);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://www.tourtouras.info/T3',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://www.tourtouras.info/T3',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(5,new IWSize(109,109),new IWSize(109,0),new IWSize(116,124),27,27,0,new IWSize(8,8)),new IWPhotoFrame([IWCreateImage('portfolio_nikokleous_files/Headlines_01.png'),IWCreateImage('portfolio_nikokleous_files/Headlines_02.png'),IWCreateImage('portfolio_nikokleous_files/Headlines_03.png'),IWCreateImage('portfolio_nikokleous_files/Headlines_06.png'),IWCreateImage('portfolio_nikokleous_files/Headlines_09.png'),IWCreateImage('portfolio_nikokleous_files/Headlines_08.png'),IWCreateImage('portfolio_nikokleous_files/Headlines_07.png'),IWCreateImage('portfolio_nikokleous_files/Headlines_04.png')],null,0,0.800000,-3.000000,-3.000000,-3.000000,-3.000000,2.000000,2.000000,2.000000,2.000000,4.000000,4.000000,4.000000,4.000000,null,null,null,0.100000),imageStream,range,new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),null,1.000000,{backgroundColor:'rgb(204, 221, 238)',reflectionHeight:0,reflectionOffset:2,captionHeight:0,fullScreen:1,transitionIndex:2},'Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('portfolio_nikokleous_files/portfolio_nikokleousMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixupIECSS3Opacity('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
