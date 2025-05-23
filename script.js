var date = new Date();
document.getElementById("curr-year").innerHTML = date.getFullYear();


var date = new Date();
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("current-date").innerHTML = date.toLocaleDateString('es-ES', options);


    // Function to set the current year
function setCurrentYear() {
  const yearSpan = document.getElementById('curr-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// Function to set the current date
function setCurrentDate() {
  const dateSpan = document.getElementById('current-date');
  if (dateSpan) {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Example format
    // You can customize the date format further if needed, e.g., for Spanish:
    // dateSpan.textContent = today.toLocaleDateString('es-ES', options);
    dateSpan.textContent = today.toLocaleDateString(undefined, options); // Uses browser's default locale
  }
}

document.addEventListener('DOMContentLoaded', function() {
  setCurrentYear();
  setCurrentDate();

  // Functionality for profile tabs (#p-tabs-m)
  const profileTabs = document.querySelectorAll('#p-tabs-m .td[data-tab-target]');
  const tabContentContainer = document.getElementById('tab-content-container');

  if (profileTabs.length > 0 && tabContentContainer) {
    const tabPanes = tabContentContainer.querySelectorAll('.tab-pane');

    profileTabs.forEach(tab => {
      tab.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior if tabs were <a> tags

        const targetPaneId = tab.dataset.tabTarget;
        const targetPane = document.getElementById(targetPaneId);

        // Deactivate all tabs
        profileTabs.forEach(t => t.classList.remove('active'));
        // Deactivate all panes
        tabPanes.forEach(p => p.classList.remove('active'));

        // Activate clicked tab
        tab.classList.add('active');
        // Activate corresponding pane
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });

    // Ensure the initially active tab (marked in HTML) also shows its content
    // This part is already handled by the HTML having `active` class on linea-content
    // and the CSS rule `.tab-pane.active { display: block; }`

  } else {
    if (profileTabs.length === 0) {
        console.warn("No profile tabs found with 'data-tab-target' attribute for dynamic content.");
    }
    if (!tabContentContainer) {
        console.warn("Element with ID 'tab-content-container' not found. Tab content will not work.");
    }
  }
});