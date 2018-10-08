function resizeLayerWrapper() {
  $('.layers').height($('.layer').height())
}

$(window).on("load", function(){
  resizeLayerWrapper()
  $(window).resize(resizeLayerWrapper)
})