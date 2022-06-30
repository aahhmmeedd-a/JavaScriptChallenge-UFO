// from data.js
var tableData = data;

// YOUR CODE HERE!

let table = document.getElementById('tableBody');

for (item of tableData) {
    let tr = document.createElement('tr');
    let tdDate = document.createElement('td');
    let tdCity = document.createElement('td');
    let tdState = document.createElement('td');
    let tdCountry = document.createElement('td')
    let tdShape = document.createElement('td');
    let tdDurationMinutes = document.createElement('td');
    let tdComments = document.createElement('td');
    tdDate.innerHTML = item.datetime;
    tdCity.innerHTML = item.city;
    tdState.innerHTML = item.state;
    tdCountry.innerHTML = item.country;
    tdShape.innerHTML = item.shape;
    tdDurationMinutes.innerHTML = item.durationMinutes;
    tdComments.comments = item.comments;
    tr.append(tdDate, tdCity, tdState, tdCountry, tdShape, tdDurationMinutes, tdComments);
    table.appendChild(tr);
}

