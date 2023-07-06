
## Festival Data Retrieval

This script allows you to retrieve and filter festival data using the French government's festival dataset API. The script fetches the data from the API and provides two functions to display the festival information: `afficherListeComplete()` (displays the complete list of events) and `afficherListeFiltree(regionFiltre)` (displays the filtered list of events by region).

### Prerequisites

Before running the script, ensure that you have the following installed on your machine:

- Node.js: You can download and install Node.js from the official website: [https://nodejs.org](https://nodejs.org)

### Installation

1. Clone the repository or download the script files to your local machine.
2. Open a terminal and navigate to the directory where the script files are located.

### Usage

To run the script and display the festival data, follow these steps:

1. Open a terminal and navigate to the directory where the script files are located.
2. Install the required dependencies by running the following command:
```shell
npm install
```
3. To display the complete list of events, run the following command:
```shell
node main.js
```
This will fetch and display the complete list of festival events.

4. To filter the events by a specific region, run the following command:
```shell
node main.js <region>
```
Replace `<region>` with the desired region name. For example, to filter events for the "Occitanie" region, run:
```shell
node main.js Occitanie
```
This will fetch and display the filtered list of festival events for the specified region.

Please note that the region argument is case-sensitive, so make sure to provide the region name exactly as it appears in the dataset.

### Examples

Here are some examples of how to execute the script with the region argument:

To display the complete list of events:
```shell
node main.js
```

To filter events for the "Occitanie" region:
```shell
node main.js Occitanie
```

To filter events for the "Bourgogne-Franche-Comté" region:
```shell
node main.js Bourgogne-Franche-Comté
```


That's it! You should now be able to execute the script with the region argument to filter the festival data. Enjoy exploring the festivals in France!
