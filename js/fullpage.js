$(document).ready(function() {

    var countArray = [
         150000
        ,32000
        ,10000
        ,78000
    ]
    var countObject = {
        countUp : function(i, count0, count1, count2, count3){
            eval(`count${i}.start();`)
        },
        countReset : function(i, count0, count1, count2, count3){
            eval(`count${i}.reset();`)
        }
    };
    for(var i = 0; i < countArray.length; i++){
        eval(`var count${i} = new countUp.CountUp("count${i}",${countArray[i]},{startVal:0})`);
    }

	$('#fullpage').fullpage({
        scrollingSpeed: 700,

        onLeave:function(origin, destination, direction){
            console.log(origin, destination, direction);
            if(destination == 2){
                var i = 0;
                var countInterval = setInterval(function(){
                    countUpFunc(i);
                    i++;
                    if(i >= countArray.length){
                        clearInterval(countInterval);
                    }
                },500)
            }
            if(destination == 1){
                var i = 0;
                var countInterval = setInterval(function(){
                    countResetFunc(i);
                    i++;
                    if(i >= countArray.length){
                        clearInterval(countInterval);
                    }
                },10);
            }
        }
	});

    function countUpFunc(i){
        countObject.countUp(i, count0, count1, count2, count3)
    }
    function countResetFunc(i){
        countObject.countReset(i, count0, count1, count2, count3);
    }
});