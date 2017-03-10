(function() {
    function checkTimer() {
        var timerValue = $("#timer").html();
        console.log(timerValue);
        //if(timerValue = "10:51:22") {
            var platform = 'platformEU';

            var time = new Date()

            if(time.getHours() > 16 && time.getMinutes > 30) {
                platform = 'platformUS';
            }

            var channel = "#channels[data-channel=" + platform + "]";

            $(channel).click();

            console.log(channel);
        //}
    }

    var intervalCheck = setInterval(checkTimer, 60*1000);
}());