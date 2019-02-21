var ctx = document.getElementById('nonfoodChart').getContext('2d');

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["WC papier", "Shampoo", "Tandpasta", "Wasmiddel"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                'rgb(204, 204, 204)',
                'rgb(153, 204, 255)',
                'rgb(0, 204, 153)',
                'rgb(204, 102, 153)',
            ],
            borderColor: 'rgb(255, 255, 255)',
            data: [100, 50, 35, 60],
        }]
    },

    // Configuration options go here
    options: {}
});