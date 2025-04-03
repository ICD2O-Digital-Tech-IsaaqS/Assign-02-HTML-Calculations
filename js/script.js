// Copyright (c) 2025 Isaaq All rights reserved
//
// Created by: Isaaq Simon
// Created on: Mar 2025
// This file contains the JS functions for index.html
function calculateHexagon() {
    // Get the side length from the input.
    let sideLength = parseFloat(document.getElementById("sideLength").value);

    // Calculate the perimeter.
    let perimeter = sideLength * 6;

    // Calculate the area.
    let area = (3 * Math.sqrt(3) / 2) * Math.pow(sideLength, 2);

    // Round the results to 2 decimal places.
    perimeter = perimeter.toFixed(2);
    area = area.toFixed(2);

    // Display the results.
    document.getElementById("result").innerHTML = "Perimeter: " + perimeter + " cm, Area: " + area + " cm²";
}