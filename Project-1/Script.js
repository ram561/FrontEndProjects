
fetch('data.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        return loadTableData(data);
    })
    .catch(function(error){
        console.error("error in loading data",error);
    });
    
function loadTableData(items) {
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
        items.forEach(function(item) {
            let row = table.insertRow();
            row.insertCell(0).innerHTML = item.name;
            row.insertCell(1).innerHTML = item.username;
            row.insertCell(2).innerHTML = item.email;
            row.insertCell(3).innerHTML = item.address.city;
            row.insertCell(4).innerHTML = item.phone;
            row.insertCell(5).innerHTML = item.website;
            row.insertCell(6).innerHTML = item.company.name;
        });
}
    