$(function(){ //DOM Ready

    // Non-Mozilla deploys should change this.
    GRAPHITE_HOST = "https://graphite-phx.mozilla.org/"

    var grid = $(".grid ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140]
    }).data('gridster');

    $("#new-graph").on('click', function(event) {
        grid.add_widget('<li class="gs_w new"></li>', 1, 1)
        console.log('widget');
    })

});

