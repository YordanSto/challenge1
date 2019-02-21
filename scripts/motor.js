var ctx = document.getElementById('motorChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ["Elektrisch", "Diesel", "Nucleair"],
            datasets: [{
                label: "%",
                backgroundColor: [
                    'rgb(0, 204, 102)',
                    'rgb(102, 179, 255)',
                    'rgb(255, 166, 77)',
                ],
                borderColor: 'rgb(255, 255, 255)',
                data: [50, 35, 70],
            }]
        },

        // Configuration options go here
                options: {
    		        legend: {
    		            display: false,
    		        }
    		}
});