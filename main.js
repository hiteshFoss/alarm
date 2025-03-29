document.getElementById('alarm-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const alarmTime = document.getElementById('alarm-time').value;
    const alarmMessage = document.getElementById('alarm-message').value;
  
    if ('Notification' in window && navigator.serviceWorker) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          navigator.serviceWorker.ready.then(registration => {
            const alarmDate = new Date();
            alarmDate.setHours(alarmTime.split(':')[0]);
            alarmDate.setMinutes(alarmTime.split(':')[1]);
  
            const delay = alarmDate.getTime() - new Date().getTime();
  
            setTimeout(() => {
              registration.showNotification('Alarm', {
                body: alarmMessage,
                icon: 'images/icon-192x192.png'
              });
            }, delay);
          });
        }
      });
    }
  });