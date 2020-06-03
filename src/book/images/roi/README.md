# Image analysis based on Region Of Interests

## Analysis of TEM images

The image coming out of the SEM microscope is expected to be in TIFF 16 bits. Apparently some software destroy the image to 8 bits when adding the scale.  


There are 3 steps in order to process your image:

1. Apply a gaussian to the image \(blurring\). Values of 5 to 30 seem reasonable.
2. The second step will generate a mask. The white pixels are the 'positive' area while the black one negative. You may either select one of the provided algorithms or use the 'threshold' algorithm. In this later case the 'Threshold for mask' value will be taken into account. It should be a value between 0 and 100 \(percent of white\).
3. Regions Of Interest \(ROI\) selection tool. You may here select the minimal surface, positive / negative as well as the 'Scale' factor that will be applied to the ROI.


### Categories

By clicking on the ‘categories’ button you will be able to  
  




The system will also calculate the MBR \([Minimal bounding Rectange](https://en.wikipedia.org/wiki/Minimum_bounding_rectangle)\). The ratio between the surface of the MBR and the surface of the ROI \(Region Of Interest\) is what we call the ‘filling factor’, 100% means a cube, a sphere should be π/4 \(78.5%\)  




