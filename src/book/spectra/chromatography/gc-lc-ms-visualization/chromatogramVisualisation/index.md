# Chromatogram visualization

When the desired file is clicked, the corresponding chromatogram is displayed, according to the following options:

- Serie to work with: visualize and select peaks based on the total ion chromatogram \(tic\) or the base peak chromatogram \(bpc\).

![](https://lh3.googleusercontent.com/m2h7kaCEYniEaGmBWIb27BGSW3svOZGmoIOQnAPQpfJKQ9taBMViYNtyoCepHyeSuS2EKj8XQHqM0oogFTsatyGsQ0Yt1SkQhIusKYJJtXbiD_PChwgiX2U1DZCvYFTxAKbsLOcb)

## Peak picking in the chromatogram

### Automatic peak picking

Automatic peak picking is done using some parameters that allow to filter and improve the results. This peak picking is based on the analysis of the first and second derivative of the chromatogram, therefore the beginning of the peak is where there’s an inflection point. The parameters are the following:

![](https://lh4.googleusercontent.com/Qllnx1sIa1jPo_rAWD9gJlsJ5MO5VwNjTvvjJK0ebtQsevhF7fn5ueRe9LFluZjaGYV9LEMsapM2rs3IwOnvtqPKU-6Ux36UQ0yH9-KJ0uV3KL5loG6yZjVPRSV9_wf4esbRu01n)

- Minimal relative height: the minimal ratio between the height of the current peak and the highest peak.
- Minimum retention time: the retention time at which integration begins.
- Maximal retention time: the retention time at which integration ends.

### Manual peak picking

All automatic peak-picking can be modified: First select the peak to be modified in the list of peaks \(right\) and then ALT + Click at the desired beginning of the peak followed by the desired end of the peak in the chromatogram. New peaks can be created using the button below the peaks table or clicking on the plus icon over the table.

Note: automatic peak picking will replace any current peak selection, therefore it's recommended to first use automatic peak picking followed by manual selection.
