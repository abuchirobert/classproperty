class DescriptiveStatistics {
  constructor(data) {
    this.data = data;
  }

  // Measures of Central Tendency

  // Mean (Average)
  calculateMean() {
    const sum = this.data.reduce((acc, value) => acc + value, 0);
    return sum / this.data.length;
  }

  // Median
  calculateMedian() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
    } else {
      return sortedData[middleIndex];
    }
  }

  // Mode
  calculateMode() {
    const frequencyMap = new Map();
    
    this.data.forEach(value => {
      frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
    });

    let mode;
    let maxFrequency = 0;

    frequencyMap.forEach((frequency, value) => {
      if (frequency > maxFrequency) {
        maxFrequency = frequency;
        mode = value;
      }
    });

    return mode;
  }

  // Measures of Dispersion

  // Range
  calculateRange() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    return sortedData[sortedData.length - 1] - sortedData[0];
  }

  // Variance
  calculateVariance() {
    const mean = this.calculateMean();
    const squaredDifferences = this.data.map(value => Math.pow(value - mean, 2));
    const sumSquaredDifferences = squaredDifferences.reduce((acc, value) => acc + value, 0);
    return sumSquaredDifferences / this.data.length;
  }

  // Standard Deviation
  calculateStandardDeviation() {
    return Math.sqrt(this.calculateVariance());
  }

  // Interquartile Range (IQR)
  calculateIQR() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const lowerQIndex = Math.floor(sortedData.length / 4);
    const upperQIndex = Math.ceil((3 * sortedData.length) / 4);

    const lowerQ = this.calculateMedian(sortedData.slice(0, lowerQIndex));
    const upperQ = this.calculateMedian(sortedData.slice(upperQIndex));

    return upperQ - lowerQ;
  }

  // Median Absolute Deviation (MAD)
  calculateMAD() {
    const median = this.calculateMedian();
    const absoluteDeviations = this.data.map(value => Math.abs(value - median));
    return this.calculateMedian(absoluteDeviations);
  }
}

// Example usage
const data = [12, 15, 18, 22, 25, 30, 35, 40, 45, 50];
const statistics = new DescriptiveStatistics(data);

console.log("Mean:", statistics.calculateMean());
console.log("Median:", statistics.calculateMedian());
console.log("Mode:", statistics.calculateMode());

console.log("Range:", statistics.calculateRange());
console.log("Variance:", statistics.calculateVariance());
console.log("Standard Deviation:", statistics.calculateStandardDeviation());
console.log("Interquartile Range (IQR):", statistics.calculateIQR());
console.log("Median Absolute Deviation (MAD):", statistics.calculateMAD());
