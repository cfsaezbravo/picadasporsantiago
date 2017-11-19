$(document).ready(function($) {
	$('#homemenu').click(function(event) {
		event.preventDefault();	
		$('#home').show();
		$('#quienes').hide();
		$('#historia').hide();
		$('#picadas').hide();
		$('#entrevistas').hide();
		$('#contacto').hide();

	});
	$('#quienesmenu').click(function(event) {
		event.preventDefault();
		$('#quienes').show();
		$('#home').hide();
		$('#historia').hide();
		$('#picadas').hide();
		$('#entrevistas').hide();
		$('#contacto').hide();
	});
	$('#historiamenu').click(function(event) {
		event.preventDefault();	
		$('#historia').show();
		$('#home').hide();
		$('#quienes').hide();
		$('#picadas').hide();
		$('#entrevistas').hide();
		$('#contacto').hide();
	});
	$('#picadasmenu').click(function(event) {
		event.preventDefault();	
		$('#picadas').show();
		$('#home').hide();
		$('#quienes').hide();
		$('#historia').hide();
		$('#entrevistas').hide();
		$('#contacto').hide();
	});
	$('#entrevistasmenu').click(function(event) {
		event.preventDefault();	
		$('#entrevistas').show();
		$('#home').hide();
		$('#quienes').hide();
		$('#historia').hide();
		$('#picadas').hide();
		$('#contacto').hide();
	});
	$('#contactomenu').click(function(event) {
		event.preventDefault();	
		$('#contacto').show();
		$('#home').hide();
		$('#quienes').hide();
		$('#historia').hide();
		$('#picadas').hide();
		$('#entrevistas').hide();
	});
});