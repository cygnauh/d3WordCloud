var width = 500,
    height = 500;

var names = document.getElementsByTagName("text");
var svg = document.getElementsByTagName("svg");
var title = document.getElementsByTagName("p");
var idRandom = Math.floor(Math.random()*200)+100
var fill = d3.scale.category20();
d3.layout.cloud().size([width, height])
    .words([
        "Hello", "world", "normally", "you", "want", "more", "words",
        "than", "this"].map(function(d) {
        return {
            text: d,
            size: 90,
            id: "ID" +  Math.floor(Math.random()*200)+100
        };

    }))
    .rotate(function() { return ~~(Math.random() * 2) * 360; })
    .font("Impact")
    .fontSize(function(d) { return d.size; })
    .on("end", draw)
    .start();


function draw(words) {
    d3.select("#word-cloud").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(250,250)")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Helvetica")
        .style("padding", "10px")
        .style("cursor", "pointer")
        .style("fill", function() {
            var colorR = Math.floor(Math.random()*255);
            var colorG = Math.floor(Math.random()*205);
            var colorB = Math.floor(Math.random()*155);
            return "rgb("+colorR+","+0+","+0+")";
        })
        .attr("id", function(d) {return d.id;})
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });

}

function hello() {
    console.log("names")
}
// console.log(names)

for(var i=0; i<names.length; i++){
    names[i].addEventListener('click', function(event){
        // console.log(event.target)
        // console.log(event.target.getAttribute("id"))
        console.log(event.target.innerHTML)
    })}

// names.addEventListener('click', function(){
//     console.log("hello")
// },false)

