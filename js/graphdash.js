$(function(){ //DOM Ready

    // Non-Mozilla deploys should change this.
    GRAPHITE_HOST = "https://graphite-phx.mozilla.org/"

    // temp var for testing
    default_graph = Graphite({'host': GRAPHITE_HOST})
        .targets(["sumSeries(stats.socorro-prod.socorro.processors.*.jobs)"])
        .width(800)
        .height(430)
        .url()

    var newWidget = function() {
        widget = grid.add_widget('<li class="gs_w new"></li>',
            Math.round(Math.random() * 3) + 1, 
            Math.round(Math.random() * 2) + 1)
        widget.css('background-image', 
            'url(http://placekitten.com/'+widget.width()+'/'+widget.height())
    }


    var grid = $(".grid ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140]
    }).data('gridster');

    $("#new-graph").on('click', newWidget)
    for (var i = 0; i < 6; i++) { newWidget(); }
});

