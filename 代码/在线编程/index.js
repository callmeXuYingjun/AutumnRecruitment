const deckgl = new deck.DeckGL({
  container: 'container',
  mapboxApiAccessToken: 'pk.eyJ1IjoidWJlcmRhdGEiLCJhIjoiY2pudzRtaWloMDAzcTN2bzN1aXdxZHB5bSJ9.2bkj3IiRC8wj3jLThvDGdA',
  mapStyle: 'mapbox://styles/mapbox/dark-v9',
  longitude: 104.05847,//104.05847,30.50953
  latitude: 30.50953,
  zoom: 6,
  minZoom: 5,
  maxZoom: 15,
  pitch: 40.5
});

const data = d3.csv('./data/dealcoord_dealtime_gps-20180501_onehour/dealcoord_dealtime_gps-20180501_18.csv');

const OPTIONS = ['radius', 'coverage', 'upperPercentile'];

const COLOR_RANGE = [
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78]
];

OPTIONS.forEach(key => {
  document.getElementById(key).oninput = renderLayer;
});



function renderLayer () {
  const options = {};
  OPTIONS.forEach(key => {
    const value = +document.getElementById(key).value;
    document.getElementById(key + '-value').innerHTML = value;
    options[key] = value;
  });

  const hexagonLayer = new deck.HexagonLayer({
    id: 'heatmap',
    colorRange: COLOR_RANGE,
    data,
    elevationRange: [0, 1000],
    elevationScale: 250,
    extruded: true,
    getPosition: d => [Number(d.lng), Number(d.lat)],
    opacity: 1,
    ...options
  });

  deckgl.setProps({
    layers: [hexagonLayer]
  });
//    console.log(hexagonLayer)
// console.log(hexagonLayer.state)
  return hexagonLayer
}

function getInput(callback){
  var hexagonLayer=renderLayer();  

  //确保callback是一个函数   
  if(typeof callback === "function"){
      //调用它，既然我们已经确定了它是可调用的
        callback(hexagonLayer);
  }
}

function output(ele){
  console.log(ele)
}

getInput(callback);