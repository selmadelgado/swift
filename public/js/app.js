function resizeLayerWrapper() {
  $('.layers').height($('.layer').height())
}

$(document).ready(function() {
  $(window).on("load", function(){
    resizeLayerWrapper()
    $(window).resize(resizeLayerWrapper)
  })
})