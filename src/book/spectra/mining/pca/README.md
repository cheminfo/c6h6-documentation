# Calculate PCA for spectra

While superimposing spectra allows to check differences between 2 or 3 experiments it become tedious to compare a large set of data.

Many data mining algorithms may help in those cases and here we propose to analyse the data using principal component analysis.

Principal component analysis (PCA) is a statistical procedure that uses an orthogonal transformation to convert a set of observations of possibly correlated variables (here spectra) into a set of values of linearly uncorrelated variables called principal components. If there are n observations with p variables, then the number of distinct principal components is min(n-1,p). This transformation is defined in such a way that the first principal component has the largest possible variance (that is, accounts for as much of the variability in the data as possible), and each succeeding component in turn has the highest variance possible under the constraint that it is orthogonal to the preceding components. The resulting vectors (each being a linear combination of the variables and containing n observations) are an uncorrelated orthogonal basis set. PCA is sensitive to the relative scaling of the original variables.

The workflow is the following:

- Select samples and add spectra
- Preprocess the spectra using various parameters
- Calculate the PCA
- Display each spectrum in the new space

## Select samples

In order to facilitate the analysis of the spectra it is advised to have samples containing representative spectra in order to evaluate the intra-variability as well as the reproducibility.

Selection of spectra to analyse is achieved with one of those 3 methods:

At the level of the sample by either clicking on the `+`, this will add all the spectra related to this sample or on the `+` on the top of the sample box to add all the spectra of all the selected samples.

<img src="images/selectSample.png">

If you select a sample it is also possible to add a specific spectrum by clicking on the `+` at the level of the spectra list.

<img src="images/selectSpectra.png">


## Preprocess the spectrum

In order to create the PCA it is important:
- to select the representative part of the spectra that is expected to be important for the analysis (high variance between different samples, for infrared 800 to 1600 for example)
- to remove large peaks not characteristic of the sample (like water in NMR spectra) that could interfer with he analysis
- to reduce the number of points in order to accelerate the analysis.
- to preprocess the data in order to reduce the impact of sample preparation. One classical preprocessing algorithm is [Standard Normal Variate (SNV)](http://wiki.eigenvector.com/index.php?title=Advanced_Preprocessing:_Sample_Normalization#SNV_.28Standard_Normal_Variate.29). This preprocessing can be achieved by selecting the 2 options `center data`and `scale data`.

<img src="images/preferences.png">

2 previous are available while filtering the data. The first preview, directly applied on the original spectra will display the area taken into account

<img src="images/preview.png">

The second preview will show exactly the points that will be submitted to the PCA algorithm. Those previews can be visualize in the `PCA` tab.

<img src="images/normalized.png">

## Create the PCA model

In order to generate the PCA model you should click on the `Recalculate PCA` button that can be found in the PCA tab.

Even after creating the model you may still add new spectra. Those spectra will be projected to the new PCA space. The spectra used for the calculations are represented using a filled circle while the one projected are represented with a circle.

<img src="images/result.png">

By default the each sample will have a different color.

<img src="images/samplePCA.png">

In the list of selected sample you can check which spectra are used for the PCA calculation and which one are just projected on the model.

## Advanced analysis

By selecting `PCA PC` you can check the various principal component as well as the explained variance.

While PC1 versus PC2 offers usually a good separation it it not always the best that can be achived and in this view we plot the 4 first principal components against each other.

In this specific example we can see that the best separation is obtained when using PC2 versus PC3.

<img src="images/pcaVersus.png">

## References

* doi.org/10.1007/s11483-012-9279-7
