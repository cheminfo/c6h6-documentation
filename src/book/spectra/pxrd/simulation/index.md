# XRD pattern prediction

It is possible to predict X-ray pattern from a CIF using a webservice available on https://xrd.cheminfo.org.

The view allows either to predict the pattern from any CIF file attached to a sample present in the database or by
drag & drop of a CIF file. In this way, it allows checking if the experimental pattern agree with theoretically expected one. 

<img src="simulation.png">

This calculation might fail if your file cannot be read by the webservice or when the file is too large to simulate the pattern in 40s. 

## Background 

The webservice uses the [pymatgen Python library](https://pymatgen.org/pymatgen.analysis.diffraction.xrd.html) for the prediction of the patterns.
More details about the algorithm can be found in Chapters 11 and 12 of Structure of Materials by Marc De Graef and Michael E. McHenry.