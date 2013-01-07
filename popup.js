function setVolume(percent) {
    $.get('http://boxeebox:8800/xbmcCmds/xbmcHttp?command=SetVolume(' + percent + ')', function(data) {
        return true;
    });
}

var volume = '';
function getVolume() {
    $.get('http://boxeebox:8800/xbmcCmds/xbmcHttp?command=GetVolume', function(data) {
        volume = data.substr(11).split('<')[0];
        $("#volume").text(volume);
    });
    console.log("return volume " + volume);

    return volume;
}

function volumeChange(percent) {
    $.get('http://boxeebox:8800/xbmcCmds/xbmcHttp?command=GetVolume', function(data) {
        volume = data.substr(11).split('<')[0];
        console.log("Volume Change: ", volume);
        $.get('http://boxeebox:8800/xbmcCmds/xbmcHttp?command=SetVolume(' + (parseInt(percent) + parseInt(percent)) + ')', function(data) {
            return true;
        });
    });
//     setVolume(volume - percent);
}

function mute() {
    $.get('http://boxeebox:8800/xbmcCmds/xbmcHttp?command=Mute', function(data) {
        return true;
    });
}

function pause() {
    $.get('http://boxeebox:8800/xbmcCmds/xbmcHttp?command=Pause', function(data) {
        return true;
    });
}

function playNext() {
    $.get('http://boxeebox:8800/xbmcCmds/xbmcHttp?command=PlayNext', function(data) {
        return true;
    });
}

function playPrev() {
    $.get('http://boxeebox:8800/xbmcCmds/xbmcHttp?command=PlayPrev', function(data) {
        return true;
    });
}

function seekPercentage(percent) {
    $.get('http://boxeebox:8800/xbmcCmds/xbmcHttp?command=SeekPercentage(' + percent + ')', function(data) {
        return true;
    });
}

function getPercentage() {
    $.get('http://boxeebox:8800/xbmcCmds/xbmcHttp?command=GetPercentage', function(data) {
        var percent = data.substr(11).split('<')[0];
        console.log("Percent: ", percent);
        return percent;
    });
}

function up() {
    $.get('http://boxeebox:8800/xbmcCmds/xbmcHttp?command=SendKey(270)', function(data) {
        return true;
    });
}

function down() {
    $.get('http://boxeebox:8800/xbmcCmds/xbmcHttp?command=SendKey(271)', function(data) {
        return true;
    });
}

function left() {
    $.get('http://boxeebox:8800/xbmcCmds/xbmcHttp?command=SendKey(272)', function(data) {
        return true;
    });
}

function right() {
    $.get('http://boxeebox:8800/xbmcCmds/xbmcHttp?command=SendKey(273)', function(data) {
        return true;
    });
}

function back() {
    $.get('http://boxeebox:8800/xbmcCmds/xbmcHttp?command=SendKey(275)', function(data) {
        return true;
    });
}

function select() {
    $.get('http://boxeebox:8800/xbmcCmds/xbmcHttp?command=SendKey(' + 61453 + ')', function(data) {
        return true;
    });
}

function sendKey(key) {
    $.get('http://boxeebox:8800/xbmcCmds/xbmcHttp?command=SendKey(' + key + ')', function(data) {
        return true;
    });
}

function keyPress(e) {
    var unicode=e.keyCode? e.keyCode : e.charCode;
    var key = String.fromCharCode(unicode);
    console.log( key + ' (' + unicode + ') was pressed.' );
}
console.log("Before document ready");



$("#btn_volume_up")
$(document).ready(function() {
    console.log("Document ready, registering buttons");
    // Register key presses as shortcuts
    $("#body").bind("keypress", function(e) {
        if (e.keyCode == 119) {
            // w
            up();
        }
        else if (e.keyCode == 97) {
            // a
            left();
        }
        else if (e.keyCode == 115) {
            // s
            down();
        }
        else if (e.keyCode == 100) {
            // d
            right();
        }
        else if (e.keyCode == 13) {
            // enter
            select();
        }
        else if (e.keyCode == 113) {
            // q
            back();
        }
        else if (e.keyCode == 114) {
            // r
            volumeChange("10");
        }
        else if (e.keyCode == 102) {
            // f
            volumeChange("-10");
        }
        console.log(e.keyCode, e);
    });
    $("#btn_volume_up").click(function () {
        console.log('up');
//         alert("up");s
    });
    $("#btn_up").on("click", function() {
        up();
    });
    $("#btn_down").click(function () {
        down();
    });
    $("#btn_right").click(function () {
        right();
    });
    $("#btn_left").click(function () {
        left();
    });
    $("#btn_ok").click(function () {
        select(); 
    });
    $("#btn_back").click(function () {
        back(); 
    });
    $("#btn_volume_up").click(function () {
        volumeChange("10"); 
    });
    $("#btn_volume_down").click(function () {
        volumeChange("-10"); 
    });
    if (localStorage.getItem("boxee_url") === null) {
//         alert("No boxee_url");
        localStorage.setItem("boxee_url", "http://boxeebox:8800");
    }
    console.log("Getting current volume");
    // Set current volume
    var volume = getVolume();
    
    console.log("Current volume is " + volume);
    // Event handlers
    
//     $("#volume_down").click(volumeChange(5))
});
