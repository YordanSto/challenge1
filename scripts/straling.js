var ctx = document.getElementById('stralingChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'polarArea',

        // The data for our dataset
        data: {
            labels: ["Infrarood", "Radio", "UV", "Röntgen", "Gamma"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: [
                    'rgb(255, 184, 77)',
                    'rgb(255, 133, 51)',
                    'rgb(230, 92, 0)',
                    'rgb(204, 0, 0)',
                    'rgb(153, 0, 0)',
                ],
                borderColor: 'rgb(255, 255, 255)',
                data: [10, 25, 18, 30, 45],
            }]
        },

        // Configuration options go here
        options: {}
});