## PolyCalc: advanced polymer mass analysis

### Quick start

#### Load your data

* Drag and drop your spectrum in “.txt” format or copy / paste (CTRL+V) your data in the box.
* Your spectrum appears in the Mass spectra window in red.

#### Targeted analysis

##### 1. Define your theoretical polymer distribution

In the “Analysis preferences” window, specify the criteria required to generate theoretical polymer distributions.
* Ionization: e.g. Na+ or (H+)3 for multicharged. 
* End-groups: e.g. H, C4H9
* Monomer MF: e.g. C8H8

It is possible to include multiple criteria with the use of comas “,”.

If is also possible to define an unlimited number of monomers that compose the polymer. Color will help to identify the composition after analysis.

<img src="images/mfs.png">

##### 2. Experimental data treatment

The resulting theoretical peak list (calculated in background) will be compared with your experimental data, based on the criteria in the “Peak picking” sub section and the mass tolerance

* threshold (minimum peak intensity considered)
* mass tolerance within which peaks are assigned

<img src="images/peakPicking.png">

##### 3. Isotopic pattern Similarity Tool

PolyCalc can help users evaluate matching scores for polymer distribution assignment. Peaks can be assigned based on monoisotopic masses only (similarity = 0 - function is ignored) or based on a full isotopic pattern matching evaluation (similarity > 0). In that case, users must define the way to compare isotopic patterns, in particular the range of masses.
It is important to fill up the function “Zone” while the function “Width” is optional, and more addressed to advanced users.

<img src="images/zone.png">


##### 4. Click on `Assign`

After clicking on assign the system will try to match the possible molecular formula to the experimental peaks and display the results.

<img src="images/tableResults.png">

The table contains the following information:
* `Polymer chain`: the composition of the polymer
* `Type`: a color representation of the composition
* `MF`: the molecular formula corresponding to the non ionized polymer
* `Adduct`: the ion that was added to obtain the observed mass (based on the `ionizations` preference)
* `MF mass`: the theoretical monoisotopic mass corresponding the the non ionized polymer
* `m/z`: the theoretical observed monoisotopic mass for the adduct
* `Δ ppm`: difference between theoretical and experimental mass
* `z`: charge of the adduct
* `Intensity`: relative intensity to the base peak
* `Similarity`: percentage of similarity for the isotopic distribution
* `%`: percentage of composition based on all the peaks composition the isotopic distribution
* `G`: number polymer that is grouped because htey have the same moelcular formula (different adducts)

#### Untargeted analysis

When the composition of the polymer is unknown, PolyCalc is able to find the difference in mass between a reference peak as well as possible molecular formula.

In order to define the reference peak simply click on the label over the peak. The value of the label will be set in the preferences.

The system will explore all the possible molecular formula defined in MF range. You may put there any element and any range. Ranges are defined with a `-` and for readability it is advise to separate the elements by a space.

<img src="images/explorePrefs1.png">

In order to search the corresponding molecular formula it is required to specify the charge of the target peak. This should be automatically set when you click on the label.

`Show MF` defines the number of best matching molecular formula that should be displayed.

`Search monoisotopic` tries to look for the monoisotopic mass that may be on the left (lower mass) than the highest peak. If there is a peak of lower mass distant from less than 1u that has a ratio over the specified value it is considered as the monoisotopic mass. 

<img src="images/explorePrefs2.png">

Matching molecular formula is colored based on the error (in ppm) as specified using the following table:

<img src="images/explorePrefs3.png">

The result of the analysis display the relative mass (on the m/z scale) as well as the list of best matching molecular formula and the charge.

<img src="images/exploreResult.png">


