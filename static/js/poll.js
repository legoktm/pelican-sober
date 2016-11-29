(function(){
    $( function () {
        $('#mvp-form').submit(function(e) {
            e.preventDefault();
            var val = $('input:radio[name=group]:checked').val();
            console.log(val);
            $.getJSON( 'https://legoktm.com/poll/poll.py?group=' + val, function(data) {
                console.log(data);
                var total = data.brady + data.yes + data['5yrs'];
                var brady = data.brady/total;
                var yes = data.yes/total;
                var fiveyrs = data['5yrs']/total;
                brady = brady.toFixed(2)*100;
                yes = yes.toFixed(2)*100;
                fiveyrs = fiveyrs.toFixed(2)*100;
                // <div style="width: 100px;"><div style="height: 1em; position: relative;"><div style="background-color: red; width: 50%; height: 1em;"></div></div></div>
                var html = '';
                html += '<div style="width: 150px;">Yes - ' + yes.toFixed(0) +'%</div><div style="width: 150px;"><div style="height: 1em; position: relative;"><div style="background-color: black; width: ' + yes + '%; height: 1em;"></div></div></div>';
                html += '<div style="width: 150px;">In 5 years - ' + fiveyrs.toFixed(0) +'%</div><div style="width: 150px;"><div style="height: 1em; position: relative;"><div style="background-color: silver; width: ' + fiveyrs + '%; height: 1em;"></div></div></div>';
                html += '<div style="width: 150px;">Tom Brady - ' + brady.toFixed(0) +'%</div><div style="width: 150px;"><div style="height: 1em; position: relative;"><div style="background-color: red; width: ' + brady + '%; height: 1em;"></div></div></div>';
                $('#mvp-form').hide();
                $('#results').html(html);
            } );
        } );
    } );
})();
