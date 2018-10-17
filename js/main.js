//====================================================doorstep display

$("#ds").on('click', function(){
    if($('.postBox').hasClass('active')){
        $('.postBox').removeClass('active');
    }
    
    let a = $('<div/>',  {'class':'postTextWrap'})
    a.append(
        $('<h2/>',  {'class':'postHead'}).text('DOORSTEP')
    ).append(
        $('<h4/>', {'class':'postSubHead'}).text('PROJECT ROLE:' ).append(
            $('<h4/>').text('Javascript Developer')
            )
    ).append(
        $('<p/>', {'class':'postBody'}).text('PROJECT GOAL: My team and I set out to create a modern, mobile real-estate web app using Bridge Interactive\'s MLS rest api and Google\'s Map sevice')
    ).append(
        $('<ul/>', {'class':'postList'}).text('TECHNOLOGIES EMPLOYED:').append(
            $('<li/>').text('Materialize.css')
        ).append(
            $('<li/>').text('Jquery')
        ).append(
            $('<li/>').text('Firebase Realtime Database & User Athentication')
        )
    ).append(
        $('<a/>',{'class':'postLink'}).attr('href', 'https://austin-shep.github.io/Doorstep.info/').attr('target','_blank').text('<deployed link>')
    ).append(
        $('<a/>',{'class':'postLink'}).attr('href', 'https://github.com/Austin-Shep/Doorstep.info').attr('target','_blank').text('<github repo>')
    )
    setTimeout(function(){
        $('.postBox').addClass('active');
        $("#post").html(a);}, 500)
      
});

//====================================================arena game display
$("#ag").on('click', function(){
    if($('.postBox').hasClass('active')){
        $('.postBox').removeClass('active');
    }
    
    let a = $('<div/>',  {'class':'postTextWrap'})
    a.append(
        $('<h2/>',  {'class':'postHead'}).text('BLOODBOWL-ARENA')
    ).append(
        $('<h4/>', {'class':'postSubHead'}).text('PROJECT ROLE:' ).append(
            $('<h4/>').text('Developer')
            )
    ).append(
        $('<p/>', {'class':'postBody'}).text('PROJECT GOAL: The goal with this project was to teach myself some moderate DOM and data manipulation though a simple game that utilized dice rolls and character blocks')
    ).append(
        $('<ul/>', {'class':'postList'}).text('TECHNOLOGIES EMPLOYED:').append(
            $('<li/>').text('Jquery')
        )
    ).append(
        $('<a/>',{'class':'postLink'}).attr('href', 'https://austin-shep.github.io/Role-Playing-Game/').attr('target','_blank').text('<deployed link>')
    ).append(
        $('<a/>',{'class':'postLink'}).attr('href', 'https://github.com/Austin-Shep/Role-Playing-Game').attr('target','_blank').text('<github repo>')
    )
    setTimeout(function(){
        $('.postBox').addClass('active');
        $("#post").html(a);}, 500)
      
});


//=========================================trivia game display
$("#tg").on('click', function(){
    if($('.postBox').hasClass('active')){
        $('.postBox').removeClass('active');
    }
    
    let a = $('<div/>',  {'class':'postTextWrap'})
    a.append(
        $('<h2/>',  {'class':'postHead'}).text('TRIVIA GAME')
    ).append(
        $('<h4/>', {'class':'postSubHead'}).text('PROJECT ROLE:' ).append(
            $('<h4/>').text('Developer')
            )
    ).append(
        $('<p/>', {'class':'postBody'}).text('PROJECT GOAL: The goal with this project was to introduce myself to the concept of timers and how they interact with functions. I also sought to become more comfortable with DOM manipultaion in vanilla Javascript')
    ).append(
        $('<ul/>', {'class':'postList'}).text('TECHNOLOGIES EMPLOYED:').append(
            $('<li/>').text('Vanilla Javascript')
        )
    ).append(
        $('<a/>',{'class':'postLink'}).attr('href', 'https://austin-shep.github.io/Trivia-game/').attr('target','_blank').text('<deployed link>')
    ).append(
        $('<a/>',{'class':'postLink'}).attr('href', 'https://github.com/Austin-Shep/Trivia-game').attr('target','_blank').text('<github repo>')
    )
    setTimeout(function(){
        $('.postBox').addClass('active');
        $("#post").html(a);}, 500)
      
});
//================================Bio Display
$("#bio").on('click', function(){
    if($('.postBox').hasClass('active')){
        $('.postBox').removeClass('active');
    }
    
    let a = $('<div/>',  {'class':'postTextWrap'})
    a.append(
        $('<h2/>',  {'class':'postHead'}).text('TRIVIA GAME')
    ).append(
        $('<h4/>', {'class':'postSubHead'}).text('PROJECT ROLE:' ).append(
            $('<h4/>').text('Developer')
            )
    ).append(
        $('<p/>', {'class':'postBody'}).text('PROJECT GOAL: The goal with this project was to introduce myself to the concept of timers and how they interact with functions. I also sought to become more comfortable with DOM manipultaion in vanilla Javascript')
    ).append(
        $('<a/>',{'class':'postLink'}).attr('href', 'https://www.linkedin.com/in/austin-shepherd--/').attr('target','_blank').text('<LinkdIn>')
    ).append(
        $('<a/>',{'class':'postLink'}).attr('href', 'https://github.com/Austin-Shep').attr('target','_blank').text('<Github>')
    )
    setTimeout(function(){
        $('.postBox').addClass('active');
        $("#post").html(a);}, 500)
      
});
