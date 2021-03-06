$(document).ready(function () {

    let list = {"list-warn":{'btn':'Возражения'},
        "list-man-b":{'btn':'Методичка Недвижимость'},
        "list-man-a":{'btn':'Методичка Авто'}

    };

    let info = {'vtb':{'title':'ВТБ Арена парк'},
                'luchy':{'title':'Лучи'},
                'kln_aley':{'title':'Кленовые аллеи'},
                'zln_aley':{'title':'Зеленые аллеи'}};

    let met = {'list-warn':[{'title':'Откуда Вы взяли мой телефон?',
                        'text':'● Мы обладаем технологией, позволяющей определять номер посетителя на нашем сайте. Вы рассматриваете покупку недвижимости? \n' +
                        '\n' +
                        '    Если будут спрашивать законно ли это - «Да, это законно». \n' +
                        '    Если пользователь говорит, что ему хочется подробнее знать, что это за технология: \n' +
                        '\n' +
                        '● Я вас услышал (а). Специалист маркетинга с Вами свяжется и более подробно расскажет о нашей технологии. Могу я озвучить Вам наше предложение?'},
                            {'title':'Я не заходил к Вам на сайт',
                                'text':'Возможно, Вы сейчас находитесь в поиске недвижимости/автомобиля, давайте мы Вас проконсультируем. Вы рассматриваете покупку квартиры/автомобиля? Возможно, Вы сейчас находитесь в поиске недвижимости/автомобиля, давайте мы Вас проконсультируем. Вы рассматриваете покупку квартиры/автомобиля? '},
                            {'title':'Что это за технология?',
                                'text':'Я - специалист по привлечению клиентов, и не обладаю данной  информацией. / Это довольно сложный технический процесс, и в формате нашей беседы я могу сориентировать Вас по нашим уникальным предложениям и акциям.Я правильно понимаю, вопрос покупки квартиры для Вас актуален?  '},
                            {'title':'Зачем же вы звоните, если владеете только первичной информацией?',
                                'text':'Хотели Вас проинформировать по данному проекту (месторасположение, площадь, стоимость, способы оплаты), и если Вас заинтересует, мы хотели бы дополнительно предложить Вам консультацию нашего менеджера, который сможет ответить на все Ваши вопросы.'}],

        'list-man-b':[{'title':'Вопросы по недвижке?',
            'text':'● Мы обладаем технологией, позволяющей определять номер посетителя на нашем сайте. Вы рассматриваете покупку недвижимости? \n' +
            '\n' +
            '    Если будут спрашивать законно ли это - «Да, это законно». \n' +
            '    Если пользователь говорит, что ему хочется подробнее знать, что это за технология: \n' +
            '\n' +
            '● Я вас услышал (а). Специалист маркетинга с Вами свяжется и более подробно расскажет о нашей технологии. Могу я озвучить Вам наше предложение?'},
                              {'title':'Я не заходил к Вам на сайт',
                                    'text':'Возможно, Вы сейчас находитесь в поиске недвижимости/автомобиля, давайте мы Вас проконсультируем. Вы рассматриваете покупку квартиры/автомобиля? Возможно, Вы сейчас находитесь в поиске недвижимости/автомобиля, давайте мы Вас проконсультируем. Вы рассматриваете покупку квартиры/автомобиля? '},
                              {'title':'Что это за технология?',
                                    'text':'Я - специалист по привлечению клиентов, и не обладаю данной  информацией. / Это довольно сложный технический процесс, и в формате нашей беседы я могу сориентировать Вас по нашим уникальным предложениям и акциям.Я правильно понимаю, вопрос покупки квартиры для Вас актуален?  '},
                              {'title':'Зачем же вы звоните, если владеете только первичной информацией?',
                                    'text':'Хотели Вас проинформировать по данному проекту (месторасположение, площадь, стоимость, способы оплаты), и если Вас заинтересует, мы хотели бы дополнительно предложить Вам консультацию нашего менеджера, который сможет ответить на все Ваши вопросы.'}],

        'list-man-a':[{'title':'Вопросы по авто?',
            'text':'● Мы обладаем технологией, позволяющей определять номер посетителя на нашем сайте. Вы рассматриваете покупку недвижимости? \n' +
            '\n' +
            '    Если будут спрашивать законно ли это - «Да, это законно». \n' +
            '    Если пользователь говорит, что ему хочется подробнее знать, что это за технология: \n' +
            '\n' +
            '● Я вас услышал (а). Специалист маркетинга с Вами свяжется и более подробно расскажет о нашей технологии. Могу я озвучить Вам наше предложение?'},
                                {'title':'Я не заходил к Вам на сайт',
                                    'text':'Возможно, Вы сейчас находитесь в поиске недвижимости/автомобиля, давайте мы Вас проконсультируем. Вы рассматриваете покупку квартиры/автомобиля? Возможно, Вы сейчас находитесь в поиске недвижимости/автомобиля, давайте мы Вас проконсультируем. Вы рассматриваете покупку квартиры/автомобиля? '},
                                {'title':'Что это за технология?',
                                    'text':'Я - специалист по привлечению клиентов, и не обладаю данной  информацией. / Это довольно сложный технический процесс, и в формате нашей беседы я могу сориентировать Вас по нашим уникальным предложениям и акциям.Я правильно понимаю, вопрос покупки квартиры для Вас актуален?  '},
                                {'title':'Зачем же вы звоните, если владеете только первичной информацией?',
                                    'text':'Хотели Вас проинформировать по данному проекту (месторасположение, площадь, стоимость, способы оплаты), и если Вас заинтересует, мы хотели бы дополнительно предложить Вам консультацию нашего менеджера, который сможет ответить на все Ваши вопросы.'}]
                        };


    $("#list-additions").hide();
    $("#container_for_details").hide();

    $(".add_menu").click(function() {


        let id = $(this).attr('data-id');
		let category = $(this).attr('data-category');	
	
	    $('.add_stat').text(category);	
						
		$.ajax({
			url: "/ajax?action=get_questions_manual&category_manuals_id=" + id,
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(data){
		
				$.each(data.question['question'][id], function(i){
					var answers = '';
					if (data.answer[data.question['id'][id][i]]) {
						
					answers += '<ul>';
					
					
					 for(var n=0; n < data.answer[data.question['id'][id][i]].length; n++) {
                                    
						answers += '<li>-' + data.answer[data.question['id'][id][i]][n]['answer'] + '</li>';			
					 }
					 
					 answers += '</ul>';
					}
					
					$('#list-additions #warn1').append('<div class="panel panel-default warn_p">\n' +
					'<div class="panel-heading">\n' +
					'<a class="direction add_met_h" data-toggle="collapse" data-parent="#warn1" href="#w' + i + '">' + data.question['question'][id][i] + '</a>\n' +
					'</div>\n' +
					'<div id="w' + i + '" class="collapse">\n' + 
					'<div class="panel-body">\n' +
					'<p class="add_met_t" style="{ white-space: pre-wrap; } ">' + answers + '</p>\n' +
					'</div>\n' +
					'</div>\n')
				});		
			},       
		});				
	

     //  $('.add_stat').text(list[id].btn);
        console.log(id);

        $('#list-additions  #warn1').prepend('  <form action="">\n' +
            '                         <div class="input-group">\n' +
            '                             <input type="text" class="form-control" placeholder="Поиск" name="search">\n' +
            '                             <div class="input-group-btn">\n' +
            '                                 <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>\n' +
            '                             </div>\n' +
            '                         </div>\n' +
            '                    </form>');

        
        $("#list-additions").show("slide", { direction: "right" }, 250);
    });

    $('#close_additions').click(function () {
        $("#list-additions").hide("slide", { direction: "right" }, 250);
        $('#list-additions #warn1').text('');
    });


    $('.add_info').click(function () {
        let id = $(this).attr('data-info');
        $('#info_title').text(info[id].title);
        $("#container_for_details").show("slide", { direction: "left" }, 250);
    });

    $('#close_details').click(function () {
        $("#container_for_details").hide("slide", { direction: "left" }, 250);
    });
	
	
	

});	