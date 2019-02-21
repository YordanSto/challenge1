var ctx = document.getElementById('afstandChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Afgelegde kilometers x1000",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [30, 45, 75, 55, 15, 22],
            }]
        },

        // Configuration options go here
        options: {}
});