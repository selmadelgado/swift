function resizeLayerWrapper() {
  $('.layers').height($('.layer').height())
}

$(document).ready(function() {
  // events
  $(window).on("load", function(){
    resizeLayerWrapper()
    $(window).resize(resizeLayerWrapper)
  })
})

