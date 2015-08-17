/* 
* @Author: fullname
* @Date:   2015-08-17 13:35:43
* @Last Modified by:   fullname
* @Last Modified time: 2015-08-17 14:14:23
*/

$("body").append("<a  id='gsearchbtn' style='-webkit-border-radius: 2px;border-radius: 2px;text-decoration: none;z-index:99999;position:fixed;top:20px;right:50px;background-color:#4075ff;color:white;font-family:Helvetica,Arial,Sans-serif;padding:10px;'>Search with Google</a>");
$("#gsearchbtn").click(function(){
	$("#search_form_input").val( $("#search_form_input").val()+"!g" );	
	$("#search_form").submit();
});