function updateTime() {
    const now = new Date();
    
    // Get hours, minutes, and seconds
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Determine AM/PM and convert to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format, replacing 0 with 12
    
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('time').textContent = timeString;
  
    // Get the current date in MM/DD/YYYY format
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    
    const dateString = `${month}/${day}/${year}`; // Format the date as MM/DD/YYYY
    document.getElementById('date').textContent = dateString;
  }
  
  setInterval(updateTime, 1000); // Update every second
  updateTime(); // Initial call to display clock immediately
  