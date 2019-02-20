var base_url = "https://sinujamal.github.io/";

var updateTrainingList = function(parentDom, ltstListFlg)
{	//alert(trng_lst);
//	trng_lst_Obj = JSON.parse(trng_lst);	
	var training_item_dom_str=""
	var count = 0;
	for(i in trng_lst)
	{
		training_item_dom_str += '<div class="training_item col_1_3" >'+									
									'<img src="' + trng_lst[i].img +'">'+									
									'<h3>' + trng_lst[i].title + '</h3>'+
									'<p>' + trng_lst[i].desc + '</p>'+									
								 '</div>';
		if( (ltstListFlg == true) && (++count >= 3))
			break;
	}
	
	if(training_item_dom_str != "" && ltstListFlg == true) 
	{
		training_item_dom_str +=  '<div class="col_1"> <a href="./pages/alltraiinings.html" class="more">'+
									'<span> More </span>'+
								  '</a></div>'
	}
	if(training_item_dom_str == "")
	{
		training_item_dom_str +=  '<div>'+
									'<h1> No trainings found </h1>'+
								  '</div>'
	}
	parentDom.innerHTML = training_item_dom_str;
}


var showHeader = function(showFlg){
	var mainCntnr = document.getElementById('main-container');
	var prevInnerHTML = mainCntnr.innerHTML;
	var hdrStr = '<header class="header">'+
		'<a href="'+base_url+'"> <img src="'+base_url+'/img/logo.png"> </img></a>'+
		'<nav><ul class="menu">'+
				'<li><a href="#">Your menu </a></li>'+
				'<li><a href="#">Your menu </a></li>'+
				'<li><a href="#">Your menu </a></li>'+
			'</ul>'+
		'</nav>'+
	'</header>';
	
	mainCntnr.innerHTML = hdrStr + prevInnerHTML;	
};

var showFooter = function(showFlg){
	var mainCntnr = document.getElementById('main-container');
	var prevInnerHTML = mainCntnr.innerHTML;
	var ftrStr = '<footer id="footer">'+
					'<p>Copyright 2019 Zaeem Technologies</p>'+
				 '</footer>';
	
	mainCntnr.innerHTML = prevInnerHTML + ftrStr;	
}
