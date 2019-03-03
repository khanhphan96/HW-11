var dataSet = data;


var tbody = d3.select("tbody");

function buildTable(data) {
    d3.select("tbody")
    .selectAll('tr')
    .data(data)
    .enter()
    .append("tr")
    .html (function (d) { 
        return (d) `<td>${d.datetime}</td> <td>${d.city}</td> <td>${d.state}</td> <td>${d.country}</td>
  
              <td>${d.shape}</td> <td>${d.durationMinutes}</td> <td>${d.comments}</td>`;
        });
      }
  
var button = d3.select("#filter-btn");

function dateTime() {
  d3.event.preventDefault();
  var date = d3.select.property.target.value;
  var handleData = dataSet;

  if (date) {
    handleData = handleData.filter(value => value.datetime === date);
  }
  buildTable(handleData);
}

button.on("click", dateTime);

buildTable(dataSet);



