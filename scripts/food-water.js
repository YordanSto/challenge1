var ctx = document.getElementById('foodChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
            labels: ["Vlees", "Vis", "Groente", "Fruit", "Zuivel", "Brood"],
            datasets: [{
                label: "Aantal stuks",
                backgroundColor: [
                    'rgb(229, 140, 138)',
                    'rgb(96, 151, 219)',
                    'rgb(86, 221, 128)',
                    'rgb(242, 150, 104)',
                    'rgb(150, 205, 255)',
                    'rgb(214, 175, 124)',
                ],
                borderColor: 'rgb(255, 255, 255)',
                data: [50, 30, 50, 25, 45, 65],
            }]
        },
        // Configuration options go here
        options: {}
});