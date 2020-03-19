document.addEventListener('DOMContentLoaded', function() {
    var sidenavElements = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sidenavElements, {});

    var textArea = document.getElementById('description');
    var textAreaInstance = M.CharacterCounter.init(textArea,{});

    var startDatePicker = document.getElementById('start-date');
    var startDatePickerInstance = M.Datepicker.init(startDatePicker, {});

    var startTimePicker = document.getElementById('start-time')
    var startTimePickerInstance = M.Timepicker.init(startTimePicker, {});
    
    var endDatePicker = document.getElementById('end-date');
    var endDatePickerInstance = M.Datepicker.init(endDatePicker, {});

    var endTimePicker = document.getElementById('end-time')
    var endTimePickerInstance = M.Timepicker.init(endTimePicker, {});

    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});

    var instance = M.Carousel.init(elems, {
        fullWidth: true
      });
});