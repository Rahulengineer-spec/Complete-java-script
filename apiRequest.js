const api_url = 'https://api.example.com/employees'; // Replace this with the actual API URL

async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();
  return data;
}

function show(data) {
  const tbody = document.querySelector('#employees tbody');

  data.forEach((employee) => {
    const row = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.textContent = employee.id;
    row.appendChild(idCell);

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = employee.firstName;
    row.appendChild(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = employee.lastName;
    row.appendChild(lastNameCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = employee.email;
    row.appendChild(emailCell);

    tbody.appendChild(row);
  });
}

(async () => {
  try {
    const employees = await getapi(api_url);
    show(employees);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
})();