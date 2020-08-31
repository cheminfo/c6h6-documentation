## Information about ROIs

Many parameters characterizing ROIs are automatically calculated.

### ROI

Region Of Interest (ROI) posses various characteristics. Among them:

- surface: the number of pixels in the ROI
- external: the number of pixels that touch at least on one side an outside pixel
- Diameter of a circle of equal projection area (EQPC):
  <img src="https://tex.cheminfo.org/?tex=x_%7BEQPC%7D%20%3D%202%20%5Csqrt%7B%5Cfrac%7BSurface%7D%7B%5Cpi%7D%7D"/>
- Diameter of a circle of equal perimeter (PED):
  <img src="https://tex.cheminfo.org/?tex=x_%7BPED%7D%20%3D%20%5Cfrac%7BExternal%7D%7B%5Cpi%7D"/>

<img src="roi.svg">

### Minimum bounding rectangle (MBR)

An information that allows to determine the shape of a ROI is the `Minimum Bounding Rectange`(MBR) that represents the smallest rectangle that surround the ROI.

The MBR is characterized by:

- width: length of the longest side of the rectangle
- height: length of the smallest side of the rectangle
- perimeter: perimeter of the rectangle
- surface: surface of the rectangle

<img src="mbr.svg">

### Convex Hull (CH)

The convex hull may be visualized as the shape enclosed by a rubber band stretched around the ROI. It is useful to estimate the compactness of the ROI.

Two parameters are available for the convex hull:

- surface
- perimeter

<img src="hull.svg">

### Feret diameters

The feret diameters of a ROI can be calculated using a virtual caliper. 2 diameters are calculated:

- min: the minimal size of the ROI that could be measured using a caliper
- max: the maximal size of the ROI that could be measured by a caliper

<img src="feret.svg">

### Other parameters

#### Sphericity

#### ψA (Aspect ratio)

Is a measure of deviation from roundness that it not sentitive to "bumps". It is calculated as

#### Roundness
