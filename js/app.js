$(document).ready(() => {
    //Image: data.results[0].picture.large
    //Name: First - data.results[0].name.first | Last - data.results[0].name.last
    //Email: data.results[0].email
    //City: data.results[0].location.city
    //Username: data.results[0].login.username
    //Cell Number: data.results[0].phone
    //Full Address: Street - data.results[0].location.street | City - data.results[0].location.city | State/Country - data.results[0].location.state | Zip - data.results[0].location.postcode
    //Birthday: data.results[0].dob
    
    //Rearrange the received dob to mm/dd/yyy
    const birthdayCorrection = (birthday) => {
        let birthdayCorrect = new Date(birthday).toLocaleDateString('en-US', { year: '2-digit', month: 'numeric', day: 'numeric' });
        return birthdayCorrect;
    }
    
    //Employee Info Div
    const employeeData = (data) => {
        //data.results[0]
        let image = data.picture.large;
        let name = `${data.name.first} ${data.name.last}`;
        let email = data.email;
        let city = data.location.city;
        let username = data.login.username;
        let cell = data.phone;
        let fullAddress = `${data.location.street}, ${city}, ${data.location.state} ${data.location.postcode}`;
        let birthday = birthdayCorrection(data.dob);
        let employeeList = `<li><img src="${image}" alt="profile image"><h1 class="capital">${name}</h1><p>${email}</p><p class="capitalize">${city}</p></li>`;
        $('#list').append(employeeList);
    }
    
    $.ajax({
      url: 'https://randomuser.me/api/?nat=us&results=12',
      dataType: 'json',
      success: function(data) {
          console.log(data.results[0]);
          for( let i = 0; i < data.results.length; i++) {
              employeeData(data.results[i]);
          }
      }
    });
    
});