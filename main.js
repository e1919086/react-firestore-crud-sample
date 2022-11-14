var firebaseConfig = {
    apikey:"AIzaSyCYU3GRwGkMCxgQLUcuVIjnedXj4sJspjQ",
    authDomain:"test715-282da.firebaseapp.com",
    databaseURL:"https://test715-282da-default-rtdb.firebaseio.com",
    projectId:"test715-282da",
    storageBucket:"test715-282da.appspot.com",
    messagingSenderId:"49603399682",
    appId: "1:49603399682:web:3dff6403b806246b8f971b"
};

firebase.initializeApp(firebaseConfig);

var color;
var できる = 0;
var どちらでもない = 0;
var できない = 0;
var ある = 0;
var ない = 0;

firebase.firestore().collection("colors").doc('できる')
  .onSnapshot((doc)=>{
    できる=doc.data().count
    myChart.data.datasets.forEach((dataset) => {
        dataset.data[0]= できる
        document.getElementById('btn1').textContent=できる;
    });
    myChart.update();
  });

  firebase.firestore().collection("colors").doc('どちらでもない')
  .onSnapshot((doc)=>{
    どちらでもない=doc.data().count
    myChart.data.datasets.forEach((dataset) => {
        dataset.data[1]= どちらでもない
        document.getElementById('btn2').textContent=どちらでもない;
    });
    myChart.update();
  });
  firebase.firestore().collection("colors").doc('できない')
  .onSnapshot((doc)=>{
    できない=doc.data().count
    myChart.data.datasets.forEach((dataset) => {
        dataset.data[2]= できない
        document.getElementById('btn3').textContent=できない;
    });
    myChart.update();
  });
  firebase.firestore().collection("colors").doc('ある')
  .onSnapshot((doc)=>{
    ある=doc.data().count
    myChart.data.datasets.forEach((dataset) => {
        dataset.data[3]= ある
        document.getElementById('btn4').textContent=ある;
    });
    myChart.update();
  });
  firebase.firestore().collection("colors").doc('ない')
  .onSnapshot((doc)=>{
    ない=doc.data().count
    myChart.data.datasets.forEach((dataset) => {
        dataset.data[4]= ない
        document.getElementById('btn5').textContent=ない;
    });
    myChart.update();
  });

  var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['できる', 'どちらでもない', 'できない', 'ある', 'ない'],
        datasets: [{
            label: '人数',
            data:[できる, どちらでもない, できない, ある, ない],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',

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



function addData(chart, label, data) {

}

document.getElementById('btn1').addEventListener('click',()=>{

    firebase.firestore().collection('colors').doc('できる').set({count:できる+1})


})

document.getElementById('btn2').addEventListener('click',()=>{   
    firebase.firestore().collection('colors').doc('どちらでもない').set({count:どちらでもない+1})

})

document.getElementById('btn3').addEventListener('click',()=>{   
    firebase.firestore().collection('colors').doc('できない').set({count:できない+1})

})

document.getElementById('btn4').addEventListener('click',()=>{

    firebase.firestore().collection('colors').doc('ある').set({count:ある+1})


})

document.getElementById('btn5').addEventListener('click',()=>{

    firebase.firestore().collection('colors').doc('ない').set({count:ない+1})


})
