## Intro to Time Series Data
###Parsons: Journalism + Design
###[Web Coding for Interactive Design](https://github.com/auremoser/web-coding)
**September 30th, 2015**

![Journo Deaths](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/timeseries.jpg)

Find this document here:

* Gist: <http://tinyurl.com/wc-timeseries>

### Outline
1. Time Series Basics
	+ What is time-series?
	+ Types of Visualizations
2. Time-Series Data
	+ Data + Date Formats
	+ Tools for Converting your Data
3. Charting Tools
	+ Time-Series Libraries
	+ D3 - Drawing with Data
	+ Diagram a Time-series Project 
		+ ([IFES Election Monitoring](http://auremoser.github.io/ifes/))
		+ ([Ushahidi's Downloads Graph](http://auremoser.github.io/ushaverse/))
4. Building A Narrative
	+ Case Study 1: [NYC 311 Graffiti (Highcharts)](http://auremoser.github.io/graphitiTime/)
	+ Case Study 2: [Task Calendar (D3)](http://auremoser.github.io/pirateplotr/)
	+ Bl.ocks for Time-series display
5. Resources

### Time-Series Basics
#### What is time-series?

[Time Series Data](https://en.wikipedia.org/wiki/Time_series) is a series of data points ordered in time, or data that has a timestamp associated with it (this can include date and time information). Often, time-series data is most interesting for journalism, because it illustrates change, and difference from precedent.


#### Types of Visualizations

![VisTypes](https://raw.githubusercontent.com/auremoser/images/master/1-vis-types.png)

[Data Visualization Catalogue](datavizcatalogue.com) is a great place to get started to define the type of visualization that is most appropriate for your data. 

Take a look at it, and spend some time deciding which visualizations are most appropriate for the data you would like to work with in this course. You can sort by format and the function you desire in your resulting visualization.

If you want to see how something is implemented, you might search for a library or language in [Nerdy Data](https://search.nerdydata.com/code), a search engine for source code. You can also use it to find out how your favorite technologies where built.

![nerdydata](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/time/nerdy.jpg)

### Time-Series Data

Time series data comes in [various formats](https://codex.wordpress.org/Formatting_Date_and_Time).

It also comes  from a variety of sources, and often you will have to process it (change it to the format you need for your visualization library to understand it). Sometimes, you might want to convert all of your date formats to the same format and then reconvert when you visualize, if so you can convert to [unix time](http://www.unixtimestamp.com/), which is a series of numbers that the computer will read as a date that a human might recognize.

so the following are the same date/time, with different codes

* `09/20/2015 8:25PM` (UTC)
* `1443644745` (Unix/Epoch)
* `2015-09-30T20:25:45+00:00` (ISO 8601)


#### Typical Formats

#### [Formats](https://en.wikipedia.org/wiki/File_format)

* [JSON](https://en.wikipedia.org/wiki/JSON) - Javascript Object Notation, data objects made of attribute-value pairs
* [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) - Comma-Separated Values, tabular data delimted by `,` s to suggest different fields, you can convert excel spreadsheets to this easily, and it can be read into your code
* [TSV](https://en.wikipedia.org/wiki/Tab-separated_values) - Tab-Separated Values, same as above, but `tab` is the delimiting 
* [XML](https://en.wikipedia.org/wiki/XML) - eXtensible Markup Language

You can tell the format of a file by its extension, or the letters that follow the `.` after the file name.

* aurelia.txt would be a text file
* aurelia.csv would be a CSV file
* aurelia.xml would be an XML file
* aurelia.json might look like this...

```
{
  "id": 1,
  "name": "Aurelia",
  "height": 123,
  "tags": [
    "Teacher",
    "Nerd"
  ],
  "students": {
    "onsite": 16,
    "remote": 4
  }
}

```

#### [Types](https://en.wikipedia.org/wiki/Data_type)

* [Dates](https://codex.wordpress.org/Formatting_Date_and_Time) | "Friday, September 24th, 2004" or 
* [Integers](https://en.wikipedia.org/wiki/Integer_(computer_science))/Numbers (int/num) | "1"
* [Booleans](https://en.wikipedia.org/wiki/Boolean_data_type) | "TRUE"
* [Characters](https://en.wikipedia.org/wiki/Character_(computing)) (char) | "a"
* [Floats](https://en.wikipedia.org/wiki/Floating_point) | "1.2435"
* [Strings](https://en.wikipedia.org/wiki/String_(computer_science)) (str) - alphanumeric collection of characters | "aurelia"

#####Considerations

* What do you want it to look like?
* What do you want to happen when the user interacts with it?
* Type of dataset and date format?
* Type of visualization?

If you're wanting to get started with a dataset that is not your own, you can follow the tutorial from Michelle Minkoff at ForJournalism: <http://forjournalism.github.io/courses/charting-and-visualization/>

![raphael](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/time/raphael.jpg)

It provides a great overview of the process of coding, complete with debugging, working with dirty datasets (in this case, crime data for Georgia), and visualizing them with Raphael.JS, a Javascript library for visualizations.

#### Data + Date Formats

* [Quandl](https://www.quandl.com/) - the "wikipedia" of time-series data, they provide datasets and format parsers for conversion to what you need
* [Data.gov](http://www.data.gov/) - almost every government/city has an "open data portal" intiative where you can download data of interest to you, and search through for differnt formats
* [Federal Data Listing](https://etherpad.mozilla.org/fed-data)
* [Enigma.io](http://enigma.io/) - loads more open data, larger datasets, and tools for correlating multple datasets
* [Exversion](https://exversion.com/) - similar data catalog, they also have a fabulous newsletter (subscribe for cool datasets in your inbox)
* [NYC Open Data](https://nycopendata.socrata.com/) - loads of cities have "socrata" portals where you can download data
* [NASA Data](https://data.nasa.gov/)
* [IRE Database Library](https://www.ire.org/nicar/database-library/) - IRE also provides a lot of open data to investigative journos, along with data dictionaries telling you how to read it
* [Humanitarian Data Exchange](https://data.humdata.org/) - data about crises, humanitarian effort, and aid globally

For more complex datasets, there are guides online like the [Journalists' Guide to datsets](https://github.com/ryanpitts/journalists-guide-datasets) which help you parse and read commonly used but pretty obscure data releases from an investigative perspective.

Likewise, some time-series data is not easy to find, and you have to request it from government agencies. If you would like to explore this, check out [FOIA Machine](https://www.foiamachine.org/). For the purposes of this class though, you might opt for something that's easier to find.

#### Tools for converting data

* [Mr. Data Converter](https://shancarter.github.io/mr-data-converter/) - an online tool for converting data from excel to other formats (HTML/JSON/XML)
* [Open Refine](http://openrefine.org/) - not unlike excel but way more powerful for large datasets, you can also convert formats in refine (ie. from JSON to CSV or vice-versa)
* [DSV](https://github.com/d3/d3-dsv) - a parser and formatter for delimiter-separated values
* [Tabula](http://tabula.technology/) - a tool for extracting data from PDFs

Since this is not a class for data cleaning, but almost every dataset requires it, take a look at some examples for the data visualization you might want to build, and try to make your data match that style. If you're dealing with a large dataset that would take too long to manually edit, come chat with me and I can help, you can also take a look at the [Data Wrangling Handbook](https://datapatterns.readthedocs.org/en/latest/recipes/index.html) which features nice tutorials on how to deal with data.


### Charting Tools

#### Time-Series Libraries

There are loads of time-series data libraries, you can google for your language of preference and "time-series" to discover them. Most of the popular ones are frameworks built for D3. 

![](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/time/d3-line.jpg)

Here are a few:

##### Javascript

* [Rickshaw](http://code.shutterstock.com/rickshaw/)
* [Metrics Graphics](http://metricsgraphicsjs.org/)
* [C3JS](http://c3js.org/samples/timeseries.html)
* [HighCharts](http://www.highcharts.com/)
* [Miso Project](http://misoproject.com/)

All are pretty customizable with CSS, so don't feel bound to their default designs.

##### Python

* [Seaborn](http://stanford.edu/~mwaskom/software/seaborn/)
* [Plot.ly](https://plot.ly/)
* [Bokeh](http://bokeh.pydata.org/en/latest/)

![Plot.ly timeseries](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/time/plot.jpg)

#### D3 - Drawing with Data

[D3.js](http://d3js.org/) is a physics based animation library for drawing with data. It is incredibly flexible, but has a non-trivial syntax and math prerequisite, and can is not supported by all browsers (like I.E.). It's great for dynamism and very popular so I encourage you to check it out.

* [Tutorials](https://github.com/mbostock/d3/wiki/Tutorials)
* [Documentation](https://github.com/mbostock/d3/wiki)

![D3](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/time/d3.jpg)

#### Diagram a Time-series Project

Here is an example D3 project, we'll go through it together:

Code: <https://github.com/auremoser/ushaverse>
Demo: <http://auremoser.github.io/ushaverse/>

Here is what the data looked like:

![](https://raw.githubusercontent.com/auremoser/images/master/ush-reach-data.png)

![](https://raw.githubusercontent.com/auremoser/images/master/ush-stacked-bar.png)

What if I wanted to make it more dynamic/complex? I could try adapting it to [this](http://bl.ocks.org/mbostock/4679202). Usually when I want to try something new, I search through Mike Bostock's blocks for inspiration.

### Building A Narrative

#### Case Study 1: Graffiti Charts
![pirate](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/time/graphitiTime.jpg)

Graffiti Chart: <http://auremoser.github.io/graphitiTime/>

This project used a CSV to create small Bar Charts using HighCharts, from data about NYC cleanup rates for Graffiti 311 complaints.

Github Repo Here: <https://github.com/auremoser/graphitiTime>

#### Case Study 2: Task Calendar
![pirate](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/time/pirate.jpg)

Project Tracker: <auremoser.github.io/pirateplotr/>

This project made project management data into a Gantt Chart using D3.js, a kind of timeseries graph updated every few minutes, using Google Sheets as a data store.

[Github Repo Here](https://github.com/auremoser/pirateplotr)

#### Blocks for Time

There are lots of ways you can approache a time-series visualization, and most libraries will have examples/demos that you can modify. 

[bl.ocks](http://bl.ocks.org/) are also a fantastic resource for other examples and demos, so search through those to learn how code creates visualizations. Mike Bostock has some [great examples](http://bl.ocks.org/mbostock).

Here are some other charts and graphs that you can take a look at, not specificially time-series, but temporal and chart-related:


Type | Title | Link/Demo | BlogPost
---- |------ | --------- | ---------
[Chart.js](http://www.chartjs.org/) Bar Graph | Traffic Data| [Aurelia's Block](http://bl.ocks.org/auremoser/af95a29cd76267d3925e)
[Highcharts](http://www.highcharts.com/) | Sensor Data  | [Github](https://github.com/auremoser/VitalSigns-water/) / [Demo](http://auremoser.github.io/VitalSigns-water/)  | [MOW Post](http://blog.cartodb.com/map-of-the-week-pulse-plotting/)
[Highcharts](http://www.highcharts.com/) | Weather Data | [Aurelia's Block](http://bl.ocks.org/auremoser/96b70f6dbcc724ecc973) | [Tutorial](https://stackedit.io/viewer#!provider=gist&gistId=e2d4f0f0b71f258f3ac9&filename=beirut.md)
[Chart.js](http://www.chartjs.org/) Line Graph | Tornado Data  | [Andrew's Block](http://bl.ocks.org/andrewxhill/9134155)
[Plot.ly](https://plot.ly/) | Earthquake Data  | [Plotly Tutorial](https://plot.ly/ipython-notebooks/cartodb/) | [CartoDB Blog](http://blog.cartodb.com/plotly/)

###Resources

1. [Charting Tools Repository](https://github.com/auremoser/chart-tools)
2. [Recommended tools for Visualizations](http://selection.datavisualization.ch/)
3. [Perception Concerns](https://github.com/tmcw/perception)
4. [Gestalt Theory](http://emeeks.github.io/gestaltdataviz/section1.html)
5. [Color Brewer](http://colorbrewer2.org/) or [Geocolor](http://geocolor.io/)
6. [ForJournalism](http://forjournalism.github.io/)
7. [Data Wrangling Handbook](https://datapatterns.readthedocs.org/en/latest/recipes/index.html)