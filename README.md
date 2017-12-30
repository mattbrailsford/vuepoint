# Vuepoint

A vuejs based dashboard framework. [Demo](https://mattbrailsford.github.io/vuepoint/index.html)

![Screenshot](img/screenshot.png)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Supported Tiles

* Value - Simple numeric value with before / after text
* List - List of label and value items
* Battery - A battery level indicator
* Gauage - A gauge display
* Level - A vertical level display
* Chart - A line, bar or doughnut chart
* Sparkline - A spirkline style chart
* Indicator - A true/false indicator

## Helper Components

* Date Time - A date time value (updates every 1 second)
* Weather - Outputs the temperature / icon of a city (updates every 15 minutes)
* Percentile Value - Show an up / down percentile change of value
* Min Value - Tracks the minimum value of passed readings
* Max Value - Tracks the maximum value of passed readings
* Avg Value - Calculate an average value of passed readings
* Ema Value - Exponential moving average of passed readings
* Animated Number - Animates a number change

## Acknowledgements

This framework uses the [spatie.be](https://github.com/spatie/dashboard.spatie.be) dashboard framework as it's starting point, using the same "spreadsheet" style grid layout system. 

## License

Copyright © 2017 Matt Brialsford. Licensed under the [MIT License](LICENSE)