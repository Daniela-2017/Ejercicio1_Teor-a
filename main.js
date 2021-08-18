let myChart;


function mostrarAyuda() {
    document.getElementById('ayuda').style.visibility = "visible";
}

function ocultarAyuda() {
    document.getElementById('ayuda').style.visibility = "hidden";
}

function calculo() {
    var anio = document.getElementById('anio').value;
    var canHab = document.getElementById('canHab').value;
    var tasaNata = document.getElementById('tasaNata').value;
    var tasaMor = document.getElementById('tasaMor').value;
    var porEmi = document.getElementById('porEmi').value;
    var porRegre = document.getElementById('porRegre').value;
    var rc = 0;
    var arregloAnio = [];
    var arregloDatos = [];

    for (var i = 0; i < anio; i++) {
        var variable1 = tasaNata - tasaMor;
        var variable2 = porEmi - porRegre;
        rc += [(variable1 - variable2) / (canHab)] * 100;
        arregloDatos.push(Number.parseFloat(rc).toFixed(20) * 100000);
        arregloAnio.push("Año " + (i + 1));
    }
    document.getElementById('calculo').value = Number.parseFloat(rc).toFixed(30);
    crearGrafico(arregloAnio, arregloDatos);
}

function crearGrafico(arregloAnio, arregloDatos) {
    console.log(arregloDatos)
    var ctx = document.getElementById('myChart').getContext('2d');
    if (myChart) {
        myChart.destroy();
    }
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arregloAnio,
            datasets: [{
                label: ' Representación Gráfica x10^-5',
                data: arregloDatos,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
};