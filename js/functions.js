// Date range picker
$(function() {
    $('input[name="dates"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

// Date range picker with only predefined ranges
// $(function() {
//   $('input[name="fixedRangeDatePicker').daterangepicker({
//     ranges: {
//         'This Month': [moment(), moment()],
//         'Next 3 Months': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
//         'Next 6 Months': [moment().subtract(6, 'days'), moment()],
//         'Next 12 Months': [moment().subtract(29, 'days'), moment()],
//     },
//     "showCustomRangeLabel": false,
//     "startDate": "05/22/2020",
//     "endDate": "05/28/2020"
//   }, function(start, end, label) {
//     // console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
//     console.log(label);
//   });
// });
$(function() {
  $('input[name="fixedRangeDatePicker').daterangepicker({
    ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    "showCustomRangeLabel": false,
    "startDate": "05/28/2020",
    "endDate": "06/03/2020"
  }, function(start, end, label) {
  console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
  });
});


// Date range picker with both regular date selction and predefined ranges.
$(function() {
  $('input[name="combinedDatePicker').daterangepicker({
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
      "startDate": "05/28/2020",
      "endDate": "06/03/2020"
  }, function(start, end, label) {
    console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
  });
});