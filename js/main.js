// Toggle navigation on small screens (hamburger menu)【39†L1029-L1037】 
function toggleNav() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

// Filter gallery by year selection
document.addEventListener('DOMContentLoaded', function() {
  var yearSelect = document.getElementById('yearSelect');
  if (yearSelect) {
    yearSelect.addEventListener('change', function() {
      var selectedYear = this.value;
      var figures = document.querySelectorAll('.gallery figure');
      figures.forEach(fig => {
        var figYear = fig.getAttribute('data-year');
        if (selectedYear === 'All' || figYear === selectedYear) {
          fig.style.display = 'block';
        } else {
          fig.style.display = 'none';
        }
      });
    });
  }
});
