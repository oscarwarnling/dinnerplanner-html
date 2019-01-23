
var SidebarView = function (container, model) {

	var numberOfGuests = container.find("#test111");
	var addedDishes = container.find("#sidebarTable");
	var cost = container.find("#sidebarTotalCost");
	var numGuests = container.find("#numberOfGuests");
	var people = container.find("#people");


	var dishesArr = model.getMenuNameAndCost();
	var tCost = 0;
	for(dish of dishesArr){
		tCost += dish[1];
		addedDishes.append("<tr><th>" + dish[0] + "</th>" + "<th>" + dish[1] + "</th></tr>");
	}
	cost.append("SEK " + tCost);
	b = model.getNumberOfGuests();

	people.append('<div class="form-group-md"><label for="numberOfGuests">People</label><input id="numberOfGuests" class="input-sm" type="number" value="' + b + '"></div>');


}
