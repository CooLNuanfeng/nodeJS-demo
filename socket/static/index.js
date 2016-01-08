var socket = io.connect('http://localhost:3000');

socket.on('fromServer',function(data){
	$('textarea').val(data.msg);
});

socket.on('saveSuccess',function(data){
	if(data.msg=='success'){
		alert('已经成功将文本内容保存到test.txt文件中');
	}
});

$(document).ready(function() {
	$('#upload').click(function() {
		socket.emit('fromClient',{msg:$('textarea').val()});
	});	
});