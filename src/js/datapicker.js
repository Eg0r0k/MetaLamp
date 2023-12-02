import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
new AirDatepicker('#inputBithDate', {
    range: false,
    navTitles: {
        days: '<i>MMMM</i> <i>yyyy</i>',
        months: 'Select month of <strong>yyyy</strong>'    
    },
    buttons: [ 
        {
            content(dp) {
                return 'Принять';
            },
            onClick(dp) {
          
               const selectedDate = dp.selectedDates[0];
               
       
               dp.hide();
               
              
               if (selectedDate) {
                   dp.$el.val(selectedDate.toLocaleDateString());
               }
            }    
        },
        'clear']
})



// new AirDatepicker('#div', {
//     range: true,
//     multipleDatesSeparator: ' - ',
//     navTitles: {
//         days: '<i>MMMM</i> <i>yyyy</i>',
//         months: 'Select month of <strong>yyyy</strong>'    
//     },
//     buttons: [ 
//         {
//             content(dp)
//             {
//                 return dp.opts.accept = "Принять"
                
//             },
//             onClick(dp)
//             {
//                 let test = "123";
//             }    
//         },
//         'clear']
// })
