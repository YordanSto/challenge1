var ctx = document.getElementById('snelheidChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["13:00", "14:00", "15:00", "16:00", "17:00"],
            datasets: [{
                label: "Kilometer per uur",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 255, 255)',
                data: [20, 60, 50, 45, 30],
            }]
        },

        // Configuration options go here
        options: {}
});