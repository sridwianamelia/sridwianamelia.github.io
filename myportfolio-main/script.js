// Navbar fixed



// Hamburger

menu = document.querySelector('.menu');
mobileMenu = document.querySelector('#mobile-menu');


menu.addEventListener("click", function(){
  mobileMenu.classList.toggle('hidden');
});
//klik window
window.addEventListener("click", function (e) {
  if (e.target != menu && e.target != navMenu) {
    menu.classList.remove("hamburger-active");
    navMenu.classList.add("hidden ");
  }
});


//contact form

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxwvez0OVWPekivcPbbldUMcLo8Pm8F5r2G1SoomyzMxquQ5Vm8A2yPd-nV08s7iNCW/exec';
  const form = document.forms['submit-to-google-sheet'];
  const btnKirim = document.querySelector('.my-button');
  const btnLoading = document.querySelector('.btn-loading');
  const myAlert = document.querySelector('.alert');

  form.addEventListener('submit', e => {
    e.preventDefault()
    // ketika tombol submit diklik

    // tampilkan tombol loading, hilangkan tombol kirim

    btnLoading.classList.toggle('hidden');
    btnKirim.classList.toggle('hidden');

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then((response )=> {
        
        btnLoading.classList.toggle('hidden');
        btnKirim.classList.toggle('hidden');
        
        myAlert.classList.toggle('hidden');

        form.reset();
        console.log('Success!', response)
    })
      .catch(error => console.error('Error!', error.message))
  });

  //alert

  alert = document.querySelector('#alert');
	button = document.querySelector('#button');

	button.addEventListener("click", function(){
  alert.classList.toggle('hidden');
  });


  //gsap

